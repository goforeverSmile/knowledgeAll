# encoding=utf-8
import os, shutil
import sys
from scripts import readConfigData

# Python 2.x 和 Python 3.x 都能使用reload
try:
    from importlib import reload
except ImportError:
    pass
# 

reload(sys)
sys.setdefaultencoding('utf-8')

cur_dir = os.getcwd() # 当前路径
# cur_dir='F:/work/client/DDZHGamesJS'
print(u"输入mj/pk:")
modelName = raw_input("")
common_dir = ("../games/{}_common/TexturePackerRes/{}_ui_panel/{}_ui_panel/").format(modelName,modelName,modelName)
src_folder = os.path.abspath(os.path.join(cur_dir, common_dir))

def doStart():
    print(src_folder)
    # readConfigData.readConfigData()
    csvData = readConfigData.readConfigData().getCsvFile()
    print(csvData.keys())
    print(csvData.values())
    copyFolderWithCsv(csvData)

def copyFolderWithCsv(data):
    shortNames = data.keys()
    for shorName in shortNames:
        batFile = data.get(shorName)
        batPath = os.path.dirname(batFile)
        #dest_folder = findFolder(shorName)
       # print(dest_folder)
        # 如果目标文件夹已经存在，则删除该文件夹并重新拷贝
      #  shutil.rmtree(dest_folder)
       # shutil.copytree(src_folder, dest_folder)        
        print(u'文件夹拷贝完成')
        print(u'开始合图')
        # 切换到bat目录下
        os.chdir(batPath)
        # 执行bat文件
        os.system(batFile)
        print(u'合图完成')

def findFolder(shorName):
    folder_name = shorName +'_ui_panel'
    sub_folder_path = '../games/' + shorName + '/TexturePackerRes'
    folder_path = os.path.abspath(os.path.join(cur_dir, sub_folder_path))
    for dirpath, dirnames, filenames in os.walk(folder_path):
        # 查找指定名称的文件夹
        if folder_name in dirnames:
            # 如果找到，返回该文件夹的完整路径
            if modelName == 'pk':
                folderPath = os.path.join(dirpath, folder_name, folder_name)
            else:
                folderPath = os.path.join(dirpath, folder_name)
            print(folderPath)
            return folderPath
    else:
        # 如果没有找到，输出提示信息
        print(u"未找到指定名称的文件夹")
        print(folder_name)

if __name__ == "__main__":
    doStart()

os.system('pause')