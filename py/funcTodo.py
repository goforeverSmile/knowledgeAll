#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
import glob
#删除指定后缀名文件
#牵扯到知识点一 python 的/\的运用之分
#同一级的要对齐不对齐会包错的
# endswith 这是py中 字符串处理方法
path ='D:\\ProJect_All\\cocosCreate\\shangPingPro\\assets'
for infile in glob.glob(os.path.join(path, '*.meta')):
     os.remove(infile) 
dir_list = []
for root, dirs,filese in os.walk(path):
     #print(root)#当前目录的路径
    # print(dirs)#当前路劲下所有子目录
    # print(filese)#当前目录下非子目录文件
     n = 0
     for name in filese:
          print(name)
          if(name.endswith(".meta")):
               n+=1
              # print("次数",n)
              # print("name===",name)
               #os.remove(name)