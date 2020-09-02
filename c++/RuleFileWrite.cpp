#include "StdAfx.h"
#include "RuleFileWrite.h"
#include "stdio.h"


CRuleFileWrite::CRuleFileWrite(CBaseRoom* pRoom)
{
	m_pRoom = pRoom;
	RoomCreatCount = 0;
	m_bFirstWrite = TRUE;
	m_nCfgFriendRuleVersion = 0;
	m_nCfgFriendRuleSwitch = 0;
	m_nCfgFriendRuleLimit = 0;
}

CRuleFileWrite::~CRuleFileWrite(void)
{
	if(m_fsHandle.is_open())
	{
		m_fsHandle.close();
	}
}

void CRuleFileWrite::begin()
{
	RoomCreatCount++;
	m_sStream.clear();
}

void CRuleFileWrite::end(std::string filePath)
{
	std::string m_FileName;
	m_FileName += m_ExePath;
	std::string dirStringpath = "./朋友场统计/";
	m_FileName += dirStringpath;

	m_FileName += filePath;

	m_fsHandle.open(m_FileName.c_str(), std::ios::out);
	if (m_fsHandle.is_open())
	{
		//写入：return {
		m_fsHandle<<m_sStream.str();
		m_fsHandle.close();
	}
	else
	{
		int  hanve = _access(m_FileName.c_str(), 0);//0 标识存在， -1 表示不存在
		 if (hanve==-1)
		 {
			 _mkdir(dirStringpath.c_str());
			 m_fsHandle.open(m_FileName.c_str(), std::ios::out);
			 if (m_fsHandle.is_open())
			 {
				 //写入：return {
				 m_fsHandle << m_sStream.str();
				 m_fsHandle.close();
			 }
		 }
	}
	m_sStream.str("");
}

void CRuleFileWrite::itemBegin()
{
	//写入：{
	m_sStream << "游戏规则,";
	m_sStream << "选择次数,";
	m_sStream << "房间创建次数,";
	m_sStream << "规则选择占比\n\n";
}

void CRuleFileWrite::itemEnd()
{
	//写入记录的开始时间和结束时间
	m_sStream <<"\n统计开始时间,"<< m_begintime <<"\n\n";

	time_t now_time;
	tm tmlocaltime; //本地时间

	now_time = time(NULL);
	char cTemp[128] = { 0 };
	localtime_s(&tmlocaltime, &now_time); //转为本地时间  
	strftime(cTemp, 64, "%Y-%m-%d_%H-%M-%S", &tmlocaltime);

	m_sStream <<"统计最新时间,";
	m_sStream << cTemp;
}

void CRuleFileWrite::writeKey(std::string rule_name)
{
	//写入规则名称
	m_sStream<< rule_name <<",";
}

void CRuleFileWrite::writeValue(int rule_count)
{
	double dper = 0;
	if (RoomCreatCount > 0)
	{
		dper = (double)rule_count / (double)RoomCreatCount * 100;
	}
	//写入选择次数，创建房间次数和规则选择占比
	m_sStream<< rule_count <<","<< RoomCreatCount<<","<< dper<<"%\n";
}

void CRuleFileWrite::WriteBeginTime()
{
	time_t now_time;
	tm tmlocaltime; //本地时间

	now_time = time(NULL);
	char cTemp[128] = { 0 };
	localtime_s(&tmlocaltime, &now_time); //转为本地时间  
	strftime(cTemp, 64, "%Y-%m-%d_%H-%M-%S", &tmlocaltime);

	m_begintime = cTemp;
}

std::string CRuleFileWrite::GetBeginTime()
{
	return m_begintime;
}

void CRuleFileWrite::SetExePath()
{
	char szapipath[MAX_PATH];
	memset(szapipath, 0, MAX_PATH);
	GetModuleFileNameA(NULL, szapipath, MAX_PATH);

	std::string strPath;
	strPath = (std::string)szapipath;

	size_t pos = strPath.find_last_of('\\');
	strPath = strPath.substr(0, pos);

	m_ExePath += strPath;

	std::string sFriendFile;
	sFriendFile = m_ExePath;
	sFriendFile += "\\朋友场统计";
	if (0 != _access(sFriendFile.c_str(), 0))//此处负责创建文件夹，用于存储csv文件
	{
		// if this folder not exist, create a new one.
		// 返回 0 表示创建成功，-1 表示失败
		_mkdir(sFriendFile.c_str());
	}
}

BOOL CRuleFileWrite::GetWriteState()
{
	return m_bFirstWrite;
}

void CRuleFileWrite::SetWriteState(BOOL bState)
{
	m_bFirstWrite = bState;
}

bool CRuleFileWrite::ReadAllCfgFriendRule()
{
	//读取版本
	int nVersion = 0;
	if (emCfgFriendRule::emCfgFriendRule_error == ReadCfgFriendRuleVersion(nVersion))
	{
		return false;
	}
	m_nCfgFriendRuleVersion = nVersion;

	//读取开关信息
	int nSwitch = 0;
	if (emCfgFriendRule::emCfgFriendRule_error == ReadCfgFriendRuleSwitch(nSwitch))
	{
		return false;
	}
	m_nCfgFriendRuleSwitch = nSwitch;

	//读取上限信息
	int nLimit = 0;
	if (emCfgFriendRule::emCfgFriendRule_error == ReadCfgFriendRuleLimit(nLimit))
	{
		return false;
	}
	m_nCfgFriendRuleLimit = nLimit;

	return true;
}

int CRuleFileWrite::ReadCfgFriendRuleVersion(int & nVersion)
{
	//获取版本信息
	nVersion = 0;
	std::string str = "onGetFriendRuleVersion";
	bool bRet = m_pRoom->GetLuaObject().CallGlobal(str.c_str(), "()i", &nVersion);
	if (!bRet)
	{
		return emCfgFriendRule::emCfgFriendRule_error;
	}
	return emCfgFriendRule::emCfgFriendRule_normal;
}

int CRuleFileWrite::ReadCfgFriendRuleSwitch(int & nSwitch)
{
	//获取开关信息
	nSwitch = 0;
	std::string str = "onGetFriendRuleSwitch";
	bool bRet = m_pRoom->GetLuaObject().CallGlobal(str.c_str(), "()i", &nSwitch);
	if (!bRet)
	{
		return emCfgFriendRule::emCfgFriendRule_error;
	}
	return emCfgFriendRule::emCfgFriendRule_normal;
}

int CRuleFileWrite::ReadCfgFriendRuleLimit(int & nLimit)
{
	//获取上限信息
	nLimit = 0;
	std::string str = "onGetFriendRuleLimit";
	bool bRet = m_pRoom->GetLuaObject().CallGlobal(str.c_str(), "()i", &nLimit);
	if (!bRet)
	{
		return emCfgFriendRule::emCfgFriendRule_error;
	}
	return emCfgFriendRule::emCfgFriendRule_normal;
}

bool CRuleFileWrite::IsUpdateCfgFriendRule()
{
	int nVersion = 0;
	int nState = ReadCfgFriendRuleVersion(nVersion);
	if (emCfgFriendRule::emCfgFriendRule_error == nState)
	{
		return false;
	}

	if (nVersion == m_nCfgFriendRuleVersion)
	{
		return false;
	}

	ReadAllCfgFriendRule();

	return true;
}

int CRuleFileWrite::GetCfgFriendRuleSwitch()
{
	return m_nCfgFriendRuleSwitch;
}

void CRuleFileWrite::RuleWrite(std::vector<std::string>& vrulename, std::string sGameName, int PlayerNum, int RoomID)
{
	//判断是否超过统计上限
	if (RoomCreatCount >= m_nCfgFriendRuleLimit)
	{
		return;
	}

	//处理规则数据
	for (auto iter = vrulename.begin(); iter != vrulename.end(); iter++)
	{
		m_RuleCount[*iter] += 1;
	}

	//写入数据，存在一个游戏存在多个朋友场服务器，或者一个朋友场存在多个房间（比如：2个人朋友场4人），需要用房间ID来作为唯一标识
	std::string sFileName;
	char chPlayNum[4];
	sprintf_s(chPlayNum, "%d", PlayerNum);

	char chRoomID[8];
	sprintf_s(chRoomID, "%d", RoomID);

	sFileName += GetBeginTime();
	sFileName += "_";
	sFileName += StringA(chPlayNum);
	sFileName += "人_";
	sFileName += sGameName;
	sFileName += "_";
	sFileName += StringA(chRoomID);
	sFileName += ".csv";

	begin();
	itemBegin();

	for (auto iter = m_RuleCount.begin(); iter != m_RuleCount.end(); iter++)
	{
		writeKey(iter->first);
		writeValue(iter->second);
	}

	itemEnd();
	end(sFileName);
}

