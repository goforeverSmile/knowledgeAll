#coding:utf-8
import os
import re


path ='E:\\SiChuanCoinProjJS\\games\\luzh'
dir_list = []
def check_conent():
     for root, dirs,filese in os.walk(path):
          #print(root)#当前目录的路径
         # print(dirs)#当前路劲下所有子目录
         # print(filese)#当前目录下非子目录文件
          for name in filese:
               print(name)
               if((name.endswith(".json") or name.endswith(".git"))):
                    continue;
               elif(name.endswith(".js")):
                    print("次数",dirs)
                    print("name===",name)
                    #os.remove(name)
                    openfileDo(name);

def openfileDo(textName):
     fp3=open(textName,"r+")
     s=fp3.read()
     fp3.seek(0,0)
     fp3.write(s.replace())
     fp3.close()
os.system("pause")