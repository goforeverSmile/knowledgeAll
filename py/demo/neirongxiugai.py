# coding:utf-8
from itertools import count
import os
import re


path = 'E:\\SiChuanCoinProjJS\\games\\luzh'
dir_list = []

FUN_DO={
     "SEARCH_OPEN":False,
}

SHORT_NAME="LUZH"
ALL_DATA_KEY={
     "SCBaseBusinessDelegate":SHORT_NAME+"BaseBusinessDelegate",
     "SCChangeCardLayer":SHORT_NAME+"ChangeCardLayer",
     "SCSortUtils":SHORT_NAME+"SortUtils",
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