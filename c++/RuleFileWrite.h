#pragma once
#include <string>
#include <fstream>
#include <sstream>
#include <direct.h>
#include <io.h>

// 状态
typedef enum
{
	emCfgFriendRule_error = 0,		// 获取配置异常
	emCfgFriendRule_normal,			// 获取配置正常
}emCfgFriendRule;

class CRuleFileWrite
{
public:
	CRuleFileWrite(CBaseRoom* pRoom);
	~CRuleFileWrite();

private:
	CBaseRoom					*m_pRoom;							//房间指针

public:
	void begin();
	void end(std::string filePath);

	void itemBegin();
	void itemEnd();
	
	void writeKey(std::string rule_name);//规则名称
	void writeValue(int rule_count);//该规则对应的选择次数

	void WriteBeginTime();//记录第一次写入数据的时间
	std::string GetBeginTime();//获取第一次写入数据的时间

	void SetExePath();//获取当前Exe的路径，并创建一个文件夹

	BOOL GetWriteState();
	void SetWriteState(BOOL bState);

	//读取所有配置信息
	bool ReadAllCfgFriendRule();
	//读取版本信息
	int ReadCfgFriendRuleVersion(int &nVersion);
	//读取开关信息
	int ReadCfgFriendRuleSwitch(int &nSwitch);
	//读取上限信息
	int ReadCfgFriendRuleLimit(int &nLimit);
	//是否更新配置
	bool IsUpdateCfgFriendRule();
	//获取开关信息
	int GetCfgFriendRuleSwitch();

	//2020-5-22		数据写入，同一处理
	void RuleWrite(std::vector<std::string>& vrulename, std::string sGameName,int PlayerNum,int RoomID);

private:
	std::fstream m_fsHandle;
	std::stringstream m_sStream; 
	std::string m_begintime;
	int RoomCreatCount;
	BOOL m_bFirstWrite;

	std::string m_ExePath;//exe的文件夹路径

	int				m_nCfgFriendRuleVersion;		//版本信息
	int				m_nCfgFriendRuleSwitch;			//开关信息
	int				m_nCfgFriendRuleLimit;			//写入次数上限

	std::map<std::string, int>		m_RuleCount;
};
 