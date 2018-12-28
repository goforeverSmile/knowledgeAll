# encoding: utf-8 
__author__ = 'Administrator'

import os
# 改变指定目录下的文件名 BEGIN

def change_file_name(root, original_name, new_name):
    for parent, dir_names, file_names in os.walk(root):         # 三个参数：分别返回1.父目录 2.所有文件夹名字（不含路径） 3.所有文件名字
        # for dir_name in dir_names:                               # 输出文件夹信息
            # print("parent is:" + parent)
            # print("dir-name is" + dir_name)
        pass
 
        for filename in file_names:  # 输出文件信息
            print("parent is:" + parent)
            print("filename is:" + filename)
            print("the full name of the file is:" + os.path.join(parent, filename))     # 输出文件路径信息
            _change_file_name(parent, filename, original_name, new_name)
 
 
def _change_file_name(path, file_name, original_name, new_name):
    new_file_name = file_name.replace(original_name, new_name)
    new_path = os.path.join(path, new_file_name)
    os.rename(os.path.join(path, file_name), new_path)
    print("new_path is " + new_path)
 
 
# 改变指定目录下的文件名 END
 
 
root_path = R"E:\LiaoNing\LNClient_JS\games\mjhc"
change_file_name(root_path, "BX", "MJHC")
