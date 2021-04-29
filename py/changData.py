#coding:utf-8
import os
import re
# 无需walk进入的目录
exclusive_dir = [".git"]

def listFiles(dirPath):
    a=0
    fileList=[]
    for root,dirs,files in os.walk(dirPath):
        print(root)
        print(dirs)
        print(files)
        a=a+1
        print("循环次数：",a)
        for each in exclusive_dir:
         if each in dirs:
             dirs.remove(each) # 移除特定目录
	for fileObj in files:
	    fileList.append(os.path.join(root,fileObj))
    return fileList
 
def main():
    fileDir = "D:\giSelf\knowledgeAll\py"
    regex = ur'FUNC_SYS_ADD_ACCDETAIL' #正则表达式
    fileList = listFiles(fileDir)
 
    for fileObj in fileList:
	f = open(fileObj,'r+')
	all_the_lines=f.readlines()
	f.seek(0)
	f.truncate()
	for line in all_the_lines:
            str1 = '呼叫_367'# orgin 
            str2 = '呼叫_367'    #replace
	    f.write(line.replace(str1 , str2))    
	f.close()  
 
if __name__=='__main__':
    main() 
