# -*- coding: UTF-8 -*-
import os
from posixpath import normpath
import sys
import shutil
import json
import time
startTime=time.time();
SrcDirPath="E:\JS_Game\ClientProjectCls\src"
GameDirPath="E:\JS_Game\ClientProjectCls\games/bjmj"
CompressGameName="bjmj"
#sys.path.append('..\..')还有类似的sys.path.append('../..') 就是代表当前位置得上两级的目录地址。
sys.path.append(os.path.normpath("E:/JS_Game/ClientProjectCls/src/tools/png_quant"))
#sys.path.append(os.path.normpath(os.path.join(os.path.dirname(__file__),"../../../../src/tools/png_quant")))

import png_quant
img_prefix =("png","jpg","jpeg");

import os
def get_ImList(path):
    return [os.path.join(path,f) for f in os.listdir(path) if f.endswith(".png")]
# img_path= get_ImList("style_2")
# #print(img_path)
# for value in img_path:
#     print(value)
#     os.popen("python ../../../../src/tools/png_quant/png_quant.py " + value)

#
#dm2  endswith可以数字字母字符串，也可以是元组/！元组！元组
def get_ImageList(roots):
    print(roots)
    nameNormpth=os.path.normpath(roots);
    print(nameNormpth)
    for root ,dirs ,files in os.walk(nameNormpth):
       # print('root_dir:============', root)  # 表示正在遍历的文件夹的名字
      #  print('sub_dirs:==========', dirs)  # 记录正在遍历的文件夹下的子文件夹集合
       # print('files:=========', files)  # 记录正在遍历的文件夹中的文件集合
        for file in files:
            if file.endswith(img_prefix):
               # 现在在哪个文件夹下，这个文件夹下的文件files
               image = os.path.join(root,file)
               print("image==========="+image)
               os.popen("python  E:/JS_Game/ClientProjectCls/src/tools/png_quant/png_quant.py " + image)
 
 #dm3
ima_dir = "E:\\JS_Game\\ClientProjectCls\\games\\bjmj\images\\bj_hutext\\style_2\\ben.png";
img_dir = ima_dir.replace('\\','/');#防止转义符出现还是用\\，不用\，不用\，拥/,
ima_dir=os.path.normpath(ima_dir)
print("#防止转义符出现还是用\\，不用\，不用\，拥/,",ima_dir)
def changeName(filePath,changName):
    #检验给出的路径是否是一个文件:
    print("img_dir========",filePath)
    if not os.path.isdir(filePath) and not os.path.isfile(filePath):
        return False;
    if os.path.isfile(filePath):
        splitPaths=os.path.split(filePath);#分割目录以文件
        lists=splitPaths[1].split('.')#分割文件名以宽展名
        file_ext=lists[-1]#取出后缀名  
        img_ext=["bmp","jeg","gif","psd","jpg","png"];#也可以是 bmp|jeg|gif |psd|jpg;
        newImageName=splitPaths[0]+"/"+"name."+file_ext;
        print("newImageName=========",newImageName)
        if file_ext in img_ext:   # 这里写法 跟c++，jslua不一样的，可以直接in数组
            newImageName=splitPaths[0]+"/"+"name."+file_ext;
            print("newImageName=========",newImageName)
            os.rename(filePath,splitPaths[0]+"/"+changName+"."+file_ext)

if __name__=="__main__":
    print("enter===============");
   # get_ImageList(GameDirPath);
    changeName(img_dir);
    endTime=time.time();
    print("程序运行耗时时间%0.2f(c)",endTime-startTime)
    os.system("pause")
   






