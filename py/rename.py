
# encoding: utf-8 
import os
path=R"E:\dd\boy/"      

#获取该目录下所有文件，存入列表中
f=os.listdir(path)

n=0
for i in f:
    
    #设置旧文件名（就是路径+文件名）
    oldname=path+f[n]
    temdpOld = oldname;
    print("oldname===",oldname)
    print("f[n======]",f[n])
    temdpOld = temdpOld.split(".");
    #设置新文件名
    newname=temdpOld[0]+"_1"+'.mp3'
    
    #用os模块中的rename方法对文件改名
    os.rename(oldname,newname)
    print(oldname,'======>',newname)
    
    n+=1
os.system("pause")