
import shutil
import os

# 定义源文件夹和目标文件夹的路径
src_folder = os.path.abspath("E:\GD_Project_JS\games\mj_common\TexturePackerRes\mj_ui_panel\mj_ui_panel")
dst_folderSing =  os.path.abspath("E:\GD_Project_JS\games\gdcs\TexturePackerRes\gdcs_ui_panel\gdcs_ui_panel")
dst_folders = { 
   "E:\GD_Project_JS\games\gdbh\TexturePackerRes\gdbh_ui_panel\gdbh_ui_panel",
   "E:\GD_Project_JS\games\gdcs\TexturePackerRes\gdcs_ui_panel\gdcs_ui_panel",
   "E:\GD_Project_JS\games\gdcz\TexturePackerRes\gdcz_ui_panel\gdcz_ui_panel",
   "E:\GD_Project_JS\games\gdgg\TexturePackerRes\gdgg_ui_panel\gdgg_ui_panel",
   "E:\GD_Project_JS\games\gdhy\TexturePackerRes\gdhy_ui_panel\gdhy_ui_panel",
   "E:\GD_Project_JS\games\gdhz\TexturePackerRes\gdhz\gdhz",
   "E:\GD_Project_JS\games\gdjp\TexturePackerRes\gdjp\gdjp",
   "E:\GD_Project_JS\games\gdjy\TexturePackerRes\gdjy_ui_panel\gdjy_ui_panel",
   "E:\GD_Project_JS\games\gdkj\TexturePackerRes\gdkj_ui_panel\gdkj_ui_panel",
   "E:\GD_Project_JS\games\gdma\TexturePackerRes\gdma_ui_panel\gdma_ui_panel",
   "E:\GD_Project_JS\games\gdmh\TexturePackerRes\gdmh_ui_panel\gdmh_ui_panel",
   "E:\GD_Project_JS\games\gdqy\TexturePackerRes\gdqy_ui_panel\gdqy_ui_panel",
   "E:\GD_Project_JS\games\gdsg\TexturePackerRes\gdsg_ui_panel\gdsg_ui_panel",
   "E:\GD_Project_JS\games\gdsw\TexturePackerRes\gdsw_ui_panel\gdsw_ui_panel",
   "E:\GD_Project_JS\games\gdtd\TexturePackerRes\gdtd\gdtd",
   "E:\GD_Project_JS\games\gdyj\TexturePackerRes\gdyj_ui_panel\gdyj_ui_panel",
   "E:\GD_Project_JS\games\gdzj\TexturePackerRes\gdzj_ui_panel\gdzj_ui_panel",
   "E:\GD_Project_JS\games\gdzq\TexturePackerRes\gdzq_ui_panel\gdzq_ui_panel",
   "E:\GD_Project_JS\games\yibz\TexturePackerRes\yibz\yibz",     
}

dst_foldersShanXi = { 
   "E:\PK_MJGames_S\games\anka\TexturePackerRes\anka\anka_ui_panel",
   "E:\PK_MJGames_S\games\baoj\TexturePackerRes\baoj\baoj_ui_panel",
   "E:\PK_MJGames_S\games\hanz\TexturePackerRes\hanz\hanz_ui_panel",
   "E:\PK_MJGames_S\games\hozh\TexturePackerRes\hozh\hozh_ui_panel",
   "E:\PK_MJGames_S\games\shlu\TexturePackerRes\shlu\shlu_ui_panel",
   "E:\PK_MJGames_S\games\tonc\TexturePackerRes\tonc\tonc_ui_panel",
   "E:\PK_MJGames_S\games\wein\TexturePackerRes\wein\wein_ui_panel",
   "E:\PK_MJGames_S\games\xian\TexturePackerRes\xian\xian",
   "E:\PK_MJGames_S\games\yana\TexturePackerRes\yana\yana_ui_panel",
   "E:\PK_MJGames_S\games\yuli\TexturePackerRes\yuli\yuli_ui_panel",
  
}
#方法1
def  copyTree1(): 
    # 判断目标文件夹是否存在，如果不存在则创建一个
    if not os.path.exists(dst_folderSing):
        os.mkdir(dst_folderSing)

    # 拷贝源文件夹中的所有文件和子文件夹到目标文件夹中
    if os.path.exists(dst_folderSing):
        # r如果目标文件存在原文件就先删除
       shutil.rmtree(dst_folderSing)
    shutil.copytree(src_folder,dst_folderSing)

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

#copytree(src_folder,dst_folderSing)
for dis in dst_folders:
    disPath = os.path.abspath(dis)
    copytree(src_folder,disPath)
