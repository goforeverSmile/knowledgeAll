#!/usr/bin/python
# encoding=utf-8

import os
import sys
import shutil
import json

#本python文件相对于项目工程根目录的相对路径
#本项目所有游戏短名
mjGames = ['bjmj']
pkGames = []

sys.path.append(os.path.normpath(os.path.join(os.path.dirname(__file__), '../../src/tools/hall/utils')))
sys.path.append(os.path.normpath(os.path.join(os.path.dirname(__file__), '../../src/tools/png_quant')))

import utils
import png_quant
from logUtils import Logging

cur_dir = utils.flat_path(os.path.dirname(__file__))
print("cur_dir==========="+cur_dir)
proj_root = utils.flat_path(os.path.join(cur_dir, '../../src/tools/png_quant'))
compressCmd = 'python ' + proj_root + '/png_quant.py '
print("proj_root============",proj_root)
# 支持的文件后缀
img_prefix = ['png', 'jpg', 'jpeg']
def start(nameStr):
    Logging.debug_msg("\n")

    nameLst = []
    if nameStr == 'all' or nameStr == 'allmj' or nameStr == 'allpk':
        nameLst = getAllGames(nameStr)
    else:
        nameLst = nameStr.split(',')

    for name in nameLst:
        compress_imgs_in_path(name)

def compress_imgs_in_path(name):
    resPath = '../' + name + '/images'
    for root, dirs, files in os.walk(resPath):
        # print('root_dir:', root)  # 当前目录路径
        # print('sub_dirs:', dirs)  # 当前路径下所有子目录
        # print('files:', files)  # 当前路径下所有非目录子文件
        for file in files:
            index = file.find(".")
            prefix = file[index+1:]
            if prefix in img_prefix:
                if len(dirs) > 0:
                    image = os.path.join(cur_dir,root,dirs[0],file)
                    print("image=========="+image)
                else:
                    image = os.path.join(cur_dir,root,file)
                cmd = compressCmd + image
                os.popen(cmd, 'r')
                print(cmd)

def getAllGames(cmd):
    if cmd == 'all':
        return mjGames + pkGames
    elif cmd == 'allmj':
        return mjGames
    elif cmd == 'allpk':
        return pkGames
    else:
        return []

if __name__ == "__main__":
    if len(sys.argv) < 1:
        Logging.debug_msg("输入短名错误！")
    else:
        start(sys.argv[1])
