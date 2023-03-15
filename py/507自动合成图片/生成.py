#!/usr/bin/python
# encoding=utf-8
import os, shutil
import re

cur_dir = os.getcwd() #os.path.abspath(os.path.dirname(__file__))

src_dir = os.path.abspath(os.path.join(cur_dir, "../../../../src"))

hall_five_block_res_7 = os.path.join(src_dir, "TexturePackerRes/hall_five_block_res_7")

src_resPath = os.path.join(hall_five_block_res_7, "hall_five_block_res_7")

print(hall_five_block_res_7)
print(src_resPath)
print(u"拷贝...")
shutil.copy("0.png", src_resPath)
shutil.copy("1.png", src_resPath)
shutil.copy("2.png", src_resPath)
shutil.copy("3.png", src_resPath)
shutil.copy("4.png", src_resPath)


os.chdir(hall_five_block_res_7)
RunScripPC = os.path.abspath(os.path.join(hall_five_block_res_7, "RunScripPC.bat"))
print(RunScripPC)

cmdStr = "start " + RunScripPC
os.system(cmdStr)

print("/n/n")
print(u"等待图集生成然后继续")
getInput = raw_input("")

print(u"拷贝图集")
src_plist = os.path.join(src_dir, "libs/preload_res/mode_507/hall_five_block_res_7.plist")
src_png = os.path.join(src_dir, "libs/preload_res/mode_507/hall_five_block_res_7.png")
targetPth = os.path.join(cur_dir, "../config/libs/preload_res/mode_507")

shutil.copy(src_plist,targetPth)
shutil.copy(src_png, targetPth)
print(u"拷贝完成")

print(u"还原大厅")
os.chdir(src_dir)
os.system("git checkout .")

print("/n/n")
print(u"记得去压缩合图！")
print(u"记得去压缩合图！")
print(u"记得去压缩合图！")

print("/n/n")
os.system("pause")
os.system("timeout /t 5")