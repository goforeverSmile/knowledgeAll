#!/usr/bin/env python
# -*- coding: utf-8 -*-
# 
import sys
import subprocess
import os
import io
import exampleFunc
import json
import shutil

# ֪ʶ�㣺 �����������
# ֪ʶ�㣺  �ն��������������:���Լ�u : print(u"��·����")
try:
    import helper
except ImportError :
     print("����helper ʧ��==���Գ��԰�װ���������ط�����")
# ����1 for ��д��
# �±� �Ǵ�0 ��ʼ ���Կ���Ĭ��0 ��ʼ��������(2,5)��������Ƶ��±꣬���Ҳ�����5
# �ֵ�Ķ��巽ʽ�� s = {} ���� d = {key1 : value1, key2 : value2 } ѭ���ǲ��ü� range 
# append�е�������push()
EN_WAY=0;
TEST_WAY=1;
OUT_WAY=2;
def ForAllIdes():
    threaholds=[100,100,12,152,150,1241]
    for i in range(5):
        print("you  head is boom")
    for i in range(2,5):
        print("thresholdes==[i],",i,threaholds[i])
    for i in range(len(threaholds)):
        print("i ====",i)
    ziDianData={"ab":15,"cf":89}
    for key in ((ziDianData)):
        print("key===[]",key,ziDianData[key])
#֪ʶ�� ��û�� ++ n��д��
#print(res+day)12
def forExample_5():
    inputNum=[];
    for i in range(3):
        print("python xiao biao===",i)
        x=int(input("int %d"%(i)))
        inputNum.append(x)
        print("����Ҳ���Դ�ӡ",inputNum)

#֪ʶ�� print ����ֱ�Ӵ�ӡ����
# def forExample_6():
def Fib(n):
    return 1 if n<=2 else Fib(n-1)+Fib(n-2)
# ����os.getcwd()��ȡ��ǰ·������ȷ �������δ������г���ǰ����ʲô·������,
#���ܵ���������ļ���·�� ����vs ��������ű���ֱ�����оͷ����ǲ�ͬ·��
#

#ֻ����r�� ���jsFile.write("tobbocc")ֱ�Ӱ�ԭ�������ݶ�ɾ����
# f = open('write_demo.txt', 'w')  #���ļ������ĸ��ļ���д�����ݡ����ޣ�������
# print ("�ļ���Ϊ: ", f.name)         #f.name��ӡ�ļ������ƣ�����չ��
# f.write('hello ,I am writing ')      #ע��writeд�����Ƚ��ļ�������գ�Ȼ����д�롣
#content=f.read(3)  #3��ʾ��ȡ3���ַ�����Ȼ˵��byte������������ʱʵ�ʰ��ַ����ص�
#read() ���������ȫ�������Ͷ�����,���Ը�ֵ������readline��һ��
# json.load ��ȡ�����һ���ֵ�
#shutil.copyfile(src, dst)�������ļ����ݣ�������Ԫ���ݣ���src��dst�� 
def  DictionAryWork():
    pathDiction={};
    pathDiction["tianjin"]="update_project_tianjin";
    pathDiction["henan"]="update_project_henan";
    pathDiction["beijin"]="update_project_beijin";
    pathDiction["hebei"]="update_project_hebei";
    AreaName=sys.argv[1]
    return pathDiction[AreaName]
def OpenClientWL():
    str = sys.argv[1]  # ��Ϊsys.argv[0]�ǽű�����,�ӵ�һλ��ȡ�����
    str2=sys.argv[2]
    print(str)
    print(str2)
    # ��ȡ��ǰ�ļ�·��
    father_path=getAbsAbsPath()
    accountPath="";
   # print(father_path)
    DirCfgPackagePath=os.path.join(father_path,"../../src/libs/CfgPackage.js")
    DirCGlobalPath=os.path.join(father_path,"../../src/libs/hall/GlobalConfig.js")
    originCfgPackage=""
    originGlobalConfig=""
    gameArea=DictionAryWork()
    print("gameArea===",gameArea)
    if str2=="1" or  str2=="2" :
        accountPath=os.path.join(father_path,"../accounts/account_four.json")
        originCfgPackage =os.path.join(father_path,"../../PackConfig/"+gameArea+"/CfgPackage.js")
        originGlobalConfig=os.path.join(father_path,"../../PackConfig/GlobalConfig_real.js")
        if str2==2 :
           originGlobalConfig=os.path.join(father_path,"../../PackConfig/GlobalConfig_real_real.js") 
    else:
        accountPath=os.path.join(father_path,"../accounts/account_test_four.json")
        originCfgPackage =os.path.join(father_path,"../../PackConfig/"+gameArea+"/CfgPackage.js")
        originGlobalConfig=os.path.join(father_path,"../../PackConfig/GlobalConfig_test.js")
    shutil.copy(originCfgPackage, DirCfgPackagePath)
    shutil.copy(originGlobalConfig, DirCGlobalPath)
    with open(accountPath) as data_file:    
        data = json.load(data_file)
        accountInfor=data["account"]
        for xx in accountInfor:
            palyInfor=xx;
            argArrays=[]
            argArrays.append("WeiLeProjV3")
            argArrays.append(palyInfor)
          #  print(argArrays)
            exePath=os.path.join(father_path,"../../src/simulator/win32/")
            os.chdir(exePath)
            subprocess.Popen(argArrays)
def getAbsAbsPath(): # ��ȡ��ǰ�ĵ����ھ���Ŀ¼
     # ��ȡ��ǰ�ļ�·��
    current_path = os.path.abspath(__file__)
    # ��ȡ��ǰ�ļ��ĸ�Ŀ¼
    father_path = os.path.abspath(os.path.dirname(current_path) + os.path.sep + ".")
    return father_path
def FileOperation():
    father_path=getAbsAbsPath()
    exePath=os.path.join(father_path,"��?�ٸ���ģ.txt")
    f = io.open(exePath,mode="r",encoding="utf-8")
    content = f.read()
    print(content)
    f.close()
if __name__ == '__main__':
   # OpenClientWL()
   FileOperation()