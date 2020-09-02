#pragma once
#include <string>
#include <fstream>
#include <sstream>
#include <direct.h>
#include <io.h>

// ״̬
typedef enum
{
	emCfgFriendRule_error = 0,		// ��ȡ�����쳣
	emCfgFriendRule_normal,			// ��ȡ��������
}emCfgFriendRule;

class CRuleFileWrite
{
public:
	CRuleFileWrite(CBaseRoom* pRoom);
	~CRuleFileWrite();

private:
	CBaseRoom					*m_pRoom;							//����ָ��

public:
	void begin();
	void end(std::string filePath);

	void itemBegin();
	void itemEnd();
	
	void writeKey(std::string rule_name);//��������
	void writeValue(int rule_count);//�ù����Ӧ��ѡ�����

	void WriteBeginTime();//��¼��һ��д�����ݵ�ʱ��
	std::string GetBeginTime();//��ȡ��һ��д�����ݵ�ʱ��

	void SetExePath();//��ȡ��ǰExe��·����������һ���ļ���

	BOOL GetWriteState();
	void SetWriteState(BOOL bState);

	//��ȡ����������Ϣ
	bool ReadAllCfgFriendRule();
	//��ȡ�汾��Ϣ
	int ReadCfgFriendRuleVersion(int &nVersion);
	//��ȡ������Ϣ
	int ReadCfgFriendRuleSwitch(int &nSwitch);
	//��ȡ������Ϣ
	int ReadCfgFriendRuleLimit(int &nLimit);
	//�Ƿ��������
	bool IsUpdateCfgFriendRule();
	//��ȡ������Ϣ
	int GetCfgFriendRuleSwitch();

	//2020-5-22		����д�룬ͬһ����
	void RuleWrite(std::vector<std::string>& vrulename, std::string sGameName,int PlayerNum,int RoomID);

private:
	std::fstream m_fsHandle;
	std::stringstream m_sStream; 
	std::string m_begintime;
	int RoomCreatCount;
	BOOL m_bFirstWrite;

	std::string m_ExePath;//exe���ļ���·��

	int				m_nCfgFriendRuleVersion;		//�汾��Ϣ
	int				m_nCfgFriendRuleSwitch;			//������Ϣ
	int				m_nCfgFriendRuleLimit;			//д���������

	std::map<std::string, int>		m_RuleCount;
};
 