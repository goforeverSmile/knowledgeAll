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

# 知识点： 引入错误处理方法
# 知识点：  终端中文乱码的问题:可以加u : print(u"引路引入")
try:
    import helper
except ImportError :
     print("引入helper 失败==可以尝试安装或者其他地方引入")
# 方法1 for 的写法
# 下标 是从0 开始 可以看出默认0 开始有限制如(2,5)才输出限制的下标，并且不包含5
# 字典的定义方式： s = {} 或者 d = {key1 : value1, key2 : value2 } 循环是不用加 range 
# append有点像数组push()
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
#知识点 ：没有 ++ n的写法
#print(res+day)12
def forExample_5():
    inputNum=[];
    for i in range(3):
        print("python xiao biao===",i)
        x=int(input("int %d"%(i)))
        inputNum.append(x)
        print("这样也可以打印",inputNum)

#知识点 print 可以直接打印数组
# def forExample_6():
def Fib(n):
    return 1 if n<=2 else Fib(n-1)+Fib(n-2)
# 关于os.getcwd()获取当前路径不正确 可以理解未这个运行程序当前是在什么路径运行,
#不能当作是这个文件得路径 这用vs 运行这个脚本和直接运行就发现是不同路径
#

#只读“r” 如果jsFile.write("tobbocc")直接把原来的数据都删除了
# f = open('write_demo.txt', 'w')  #打开文件，往哪个文件里写入数据。如无，创建。
# print ("文件名为: ", f.name)         #f.name打印文件的名称，带拓展名
# f.write('hello ,I am writing ')      #注意write写入是先将文件内容清空，然后再写入。
#content=f.read(3)  #3表示读取3个字符，虽然说是byte。但是有中文时实际按字符返回的
#read() 不加数组就全读加数就读几个,可以赋值给变量readline读一行
# json.load 获取这个才一变字典
#shutil.copyfile(src, dst)：复制文件内容（不包含元数据）从src到dst。 
def  DictionAryWork():
    pathDiction={};
    pathDiction["tianjin"]="update_project_tianjin";
    pathDiction["henan"]="update_project_henan";
    pathDiction["beijin"]="update_project_beijin";
    pathDiction["hebei"]="update_project_hebei";
    AreaName=sys.argv[1]
    return pathDiction[AreaName]
def OpenClientWL():
    str = sys.argv[1]  # 因为sys.argv[0]是脚本名称,从第一位获取到最后
    str2=sys.argv[2]
    print(str)
    print(str2)
    # 获取当前文件路径
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
def getAbsAbsPath(): # 获取当前文档所在绝对目录
     # 获取当前文件路径
    current_path = os.path.abspath(__file__)
    # 获取当前文件的父目录
    father_path = os.path.abspath(os.path.dirname(current_path) + os.path.sep + ".")
    return father_path
def FileOperation():
    father_path=getAbsAbsPath()
    exePath=os.path.join(father_path,"护?少妇嫩模.txt")
    f = io.open(exePath,mode="r",encoding="utf-8")
    content = f.read()
    print(content)
    f.close()
if __name__ == '__main__':
   # OpenClientWL()
   FileOperation()