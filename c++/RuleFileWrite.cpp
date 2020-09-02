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
	std::string dirStringpath = "./���ѳ�ͳ��/";
	m_FileName += dirStringpath;

	m_FileName += filePath;

	m_fsHandle.open(m_FileName.c_str(), std::ios::out);
	if (m_fsHandle.is_open())
	{
		//д�룺return {
		m_fsHandle<<m_sStream.str();
		m_fsHandle.close();
	}
	else
	{
		int  hanve = _access(m_FileName.c_str(), 0);//0 ��ʶ���ڣ� -1 ��ʾ������
		 if (hanve==-1)
		 {
			 _mkdir(dirStringpath.c_str());
			 m_fsHandle.open(m_FileName.c_str(), std::ios::out);
			 if (m_fsHandle.is_open())
			 {
				 //д�룺return {
				 m_fsHandle << m_sStream.str();
				 m_fsHandle.close();
			 }
		 }
	}
	m_sStream.str("");
}

void CRuleFileWrite::itemBegin()
{
	//д�룺{
	m_sStream << "��Ϸ����,";
	m_sStream << "ѡ�����,";
	m_sStream << "���䴴������,";
	m_sStream << "����ѡ��ռ��\n\n";
}

void CRuleFileWrite::itemEnd()
{
	//д���¼�Ŀ�ʼʱ��ͽ���ʱ��
	m_sStream <<"\nͳ�ƿ�ʼʱ��,"<< m_begintime <<"\n\n";

	time_t now_time;
	tm tmlocaltime; //����ʱ��

	now_time = time(NULL);
	char cTemp[128] = { 0 };
	localtime_s(&tmlocaltime, &now_time); //תΪ����ʱ��  
	strftime(cTemp, 64, "%Y-%m-%d_%H-%M-%S", &tmlocaltime);

	m_sStream <<"ͳ������ʱ��,";
	m_sStream << cTemp;
}

void CRuleFileWrite::writeKey(std::string rule_name)
{
	//д���������
	m_sStream<< rule_name <<",";
}

void CRuleFileWrite::writeValue(int rule_count)
{
	double dper = 0;
	if (RoomCreatCount > 0)
	{
		dper = (double)rule_count / (double)RoomCreatCount * 100;
	}
	//д��ѡ�������������������͹���ѡ��ռ��
	m_sStream<< rule_count <<","<< RoomCreatCount<<","<< dper<<"%\n";
}

void CRuleFileWrite::WriteBeginTime()
{
	time_t now_time;
	tm tmlocaltime; //����ʱ��

	now_time = time(NULL);
	char cTemp[128] = { 0 };
	localtime_s(&tmlocaltime, &now_time); //תΪ����ʱ��  
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
	sFriendFile += "\\���ѳ�ͳ��";
	if (0 != _access(sFriendFile.c_str(), 0))//�˴����𴴽��ļ��У����ڴ洢csv�ļ�
	{
		// if this folder not exist, create a new one.
		// ���� 0 ��ʾ�����ɹ���-1 ��ʾʧ��
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
	//��ȡ�汾
	int nVersion = 0;
	if (emCfgFriendRule::emCfgFriendRule_error == ReadCfgFriendRuleVersion(nVersion))
	{
		return false;
	}
	m_nCfgFriendRuleVersion = nVersion;

	//��ȡ������Ϣ
	int nSwitch = 0;
	if (emCfgFriendRule::emCfgFriendRule_error == ReadCfgFriendRuleSwitch(nSwitch))
	{
		return false;
	}
	m_nCfgFriendRuleSwitch = nSwitch;

	//��ȡ������Ϣ
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
	//��ȡ�汾��Ϣ
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
	//��ȡ������Ϣ
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
	//��ȡ������Ϣ
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
	//�ж��Ƿ񳬹�ͳ������
	if (RoomCreatCount >= m_nCfgFriendRuleLimit)
	{
		return;
	}

	//�����������
	for (auto iter = vrulename.begin(); iter != vrulename.end(); iter++)
	{
		m_RuleCount[*iter] += 1;
	}

	//д�����ݣ�����һ����Ϸ���ڶ�����ѳ�������������һ�����ѳ����ڶ�����䣨���磺2�������ѳ�4�ˣ�����Ҫ�÷���ID����ΪΨһ��ʶ
	std::string sFileName;
	char chPlayNum[4];
	sprintf_s(chPlayNum, "%d", PlayerNum);

	char chRoomID[8];
	sprintf_s(chRoomID, "%d", RoomID);

	sFileName += GetBeginTime();
	sFileName += "_";
	sFileName += StringA(chPlayNum);
	sFileName += "��_";
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

