# coding:utf-8
from itertools import count
import os
import re


path = 'E:\\SiChuanCoinProjJS\\games\\yibi'
SHORT_NAME="YIBI"
dir_list = []

FUN_DO={
     "SEARCH_OPEN":False,
}

ALL_DATA_KEY={
     "SCBaseBusinessDelegate":SHORT_NAME+"BaseBusinessDelegate",
     "SCBaseClient":SHORT_NAME+"BaseClient",
     "SCBaseGameData":SHORT_NAME+"BaseGameData",
     "SCBaseGameDef":SHORT_NAME+"BaseGameDef",
     "SCBaseMsgDefine":SHORT_NAME+"BaseMsgDefine",
     "SCBaseRecvInterface":SHORT_NAME+"BaseRecvInterface",
     "SCBaseRegisterSend":SHORT_NAME+"BaseRegisterSend",
     "SCGameUI":SHORT_NAME+"GameUI",
     "SCMJClientEvent":SHORT_NAME+"MJClientEvent",
     "SCRuleBase":SHORT_NAME+"RuleBase",
     "SCSortUtils":SHORT_NAME+"SortUtils",
     "SCActionN":SHORT_NAME+"ActionN",
     "SCActionType":SHORT_NAME+"ActionType",
     "SCMJHelper":SHORT_NAME+"MJHelper",
     "SCDingQueLayer":SHORT_NAME+"DingQueLayer",
     "SCDingQueLogic":SHORT_NAME+"DingQueLogic",
     "SCRecvDingQue":SHORT_NAME+"RecvDingQue",
     "sc_common_GreenImageMap":SHORT_NAME+"GreenImageMap",
     "sc_common_SpePurpleImageMap":SHORT_NAME+"PurpleImageMap",
     "sc_common_SpeYellowImageMap":SHORT_NAME+"YellowImageMap",
     "SCActionEffectManager":SHORT_NAME+"ActionEffectManager",
     "SCAudioManager":SHORT_NAME+"AudioManager",
     "SCEffectManager":SHORT_NAME+"EffectManager",
     "SCHuEffectTestUI":SHORT_NAME+"HuEffectTestUI",
     "SCHuEffectUtils":SHORT_NAME+"HuEffectUtils",
     "SCScoreEffectManager":SHORT_NAME+"ScoreEffectManager",
     "SCChangeCardLogic":SHORT_NAME+"ChangeCardLogic",
     "SCGameTipLogicN":SHORT_NAME+"GameTipLogicN",
     "SCHuDataLogic":SHORT_NAME+"HuDataLogic",
     "SCHuOrderLogic":SHORT_NAME+"HuOrderLogic",
     "SCHuPlayerLogic":SHORT_NAME+"HuPlayerLogic",
     "SCHuPointerLogic":SHORT_NAME+"HuPointerLogic",
     "SCHuProvideLogic":SHORT_NAME+"HuProvideLogic",
     "SCLogic":SHORT_NAME+"Logic",
     "SCPlayerScoreLogic":SHORT_NAME+"PlayerScoreLogic",
     "SCSetBankerLogic":SHORT_NAME+"SetBankerLogic",
     "SCShowCardIconLogic":SHORT_NAME+"ShowCardIconLogic",
     "SCChangeCardRecord":SHORT_NAME+"ChangeCardRecord",
     "SCDingQueRecord":SHORT_NAME+"DingQueRecord",
     "SCFriendOverLayer":SHORT_NAME+"FriendOverLayer",
     "SCOverFriendCellNode":SHORT_NAME+"OverFriendCellNode",
     "SCOverFriendViewNode":SHORT_NAME+"OverFriendViewNode",
     "SCSettleCell":SHORT_NAME+"SettleCell",
     "SCSettleLayer":SHORT_NAME+"SettleLayer",
     "SCSettleView":SHORT_NAME+"SettleView",
     "SCChangeCardLayer":SHORT_NAME+"ChangeCardLayer",
     "SCGameTipLayer":SHORT_NAME+"GameTipLayer",
     "SCGameUIPanel":SHORT_NAME+"GameUIPanel",
     "SCHuTipsAllNode":SHORT_NAME+"HuTipsAllNode",
     "SCRechargeingLayer":SHORT_NAME+"RechargeingLayer",
}

def check_conent():
     for root, dirs, filese in os.walk(path):
          # print("root",root)  # 当前目录的路径
          # print("dirs",dirs)#当前路劲下所有子目录
          # print("files",filese)#当前目录下非子目录文件
          for filename in filese:
               # print(filename)
               if((filename.endswith(".json") or filename.endswith(".git"))):
                    continue;
               elif(filename.endswith(".js")):
                    print("次数",dirs)
                    print("name===",filename)
                    # os.remove(name)
                    fileDir= os.path.join(root,filename)
                    print("fildir==",fileDir)
                    selecDoAction(fileDir)
                   
def  selecDoAction(fileDir):
     for key in ALL_DATA_KEY:
          print("key====",key,ALL_DATA_KEY[key])
          findCount(fileDir,key,ALL_DATA_KEY[key]);
          replaceWord(fileDir,key,ALL_DATA_KEY[key]);

def replaceWord(fileDir,key,keyData):
     fp3=open(fileDir,"r+")
     s=fp3.read()
     fp3.seek(0,0)
     fp3.write(s.replace(key,keyData))
     fp3.close()
     # os.system("pause")

def  findCount(fileDir,key,keyData):
     if not  FUN_DO["SEARCH_OPEN"] :
           return;
    
     beiCheck=key
     fp=open(fileDir,"r");
     count=0;
     for s in fp.readlines():
          li=re.findall(beiCheck,s)
          if len(li) >0 :
               count=count+len(li);
     print("search======",count,beiCheck)
     os.system("pause")


check_conent();
os.system("pause")