
import shutil
import os

# 定义源文件夹和目标文件夹的路径
src_folder = os.path.abspath("E:\GD_Project_JS\games\mj_common\TexturePackerRes\mj_ui_panel\mj_ui_panel")
dst_folder =  os.path.abspath("E:\GD_Project_JS\games\gdcs\TexturePackerRes\gdcs_ui_panel\gdcs_ui_panel")

#方法1
def  copyTree1(): 
    # 判断目标文件夹是否存在，如果不存在则创建一个
    if not os.path.exists(dst_folder):
        os.mkdir(dst_folder)

    # 拷贝源文件夹中的所有文件和子文件夹到目标文件夹中
    if os.path.exists(dst_folder):
        # r如果目标文件存在原文件就先删除
       shutil.rmtree(dst_folder)
    shutil.copytree(src_folder,dst_folder)

def copytree(src,dst):
    dirs=os.listdir(src)#获取目录下的所有文件包括文件夹
    print(dirs)
    for dir in dirs:#遍历文件夹
        from_dir=os.path.join(src,dir)#将要复制的文件路径 
        to_dir=os.path.join(dst,dir)#将爱复制到的文件夹或文牛路径
        if os.path.isdir(from_dir):#判断是否为文件夹
            if not os.path.exists(to_dir):#判断目标文件夹是否存在,不存在则创建
                os.mkdir(to_dir)
            copytree(from_dir,to_dir)#迭代遍历子文件夹并复制文件
        elif os.path.isfile(from_dir):#如果为文件,则直接复制文件
            shutil.copy(from_dir,to_dir)#复制文件

copytree(src_folder,dst_folder)
