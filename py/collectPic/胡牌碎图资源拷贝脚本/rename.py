import os
import shutil
import os.path

from pypinyin import pinyin,lazy_pinyin

def rename(rootdir,jsname,targetStr):
    keyValue =[]
    nameMap= set()
    for parent,dirnames,filenames in os.walk(rootdir):
        for filename in filenames:
            nameList=filename.split('.')
            hanziName = nameList[0]
            # print( hanziName)
            pinyinName = lazy_pinyin(hanziName)
            # print( pinyinName)
            newName = ''.join(pinyinName).strip()
            while newName in nameMap:
                newName+="0"
            nameMap.add(newName)
            filenew=newName+'.png'
            # print (filenew)
            keyValue.append( "\t\""+hanziName+"\"" +":"+"\""+targetStr+filenew+"\","+"\n")
            os.rename(os.path.join(parent,filename),os.path.join(parent,filenew))
            
            file_path = os.path.join(os.getcwd(),rootdir+jsname+'.js')
            # print(">>>>>>>>>",file_path)
            f = open(file_path, 'w')
            f.write(jsname +"= {\n")
            for a in keyValue:
                f.write(a)
            f.write("}")
            f.close()


gameNames = [ 
    "area_tianjin",
    "area_hebei",
]

def rename_func(gameNames, folder_ex='huEffect', color_style='style_2'):
    for i in range(len(gameNames)):
        gameName=gameNames[i]
        print("游戏短名:",gameName)
        if len(color_style) != 0:
            targetDir = r"E:\\JS_Game\\PicReonde\123\456\\"+ gameName +"\\"+folder_ex+"\\"+ color_style +"\\"
        else:
            targetDir = r"E:\\JS_Game\\PicReonde\\123\456\\"+ gameName +"\\"+folder_ex+"\\"
        print("图片资源路径:",targetDir)
        jsnameYellow = gameName.upper() + 'HuImageMap' #生成的js文件的名字
        print("JS文件名:",jsnameYellow)

        if len(color_style) != 0:
            targetStr = r"games/"+gameName+"/images/"+folder_ex+"/"+color_style+"/" # 要放到js工程的路径(只是用在生成的js文件的字符串中拼接)
        else:
            targetStr = r"games/"+gameName+"/images/"+folder_ex+"/" # 要放到js工程的路径(只是用在生成的js文件的字符串中拼接)
        print("xxxxx:",targetStr)
        if not os.path.exists(targetDir+jsnameYellow+".js"):
            rename(targetDir,jsnameYellow,targetStr)

rename_func(gameNames)