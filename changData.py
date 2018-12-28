#coding:utf-8
import os
import re
 
def listFiles(dirPath):
    fileList=[]
    for root,dirs,files in os.walk(dirPath):
	for fileObj in files:
	    fileList.append(os.path.join(root,fileObj))
    return fileList
 
def main():
    fileDir = "D:\dd\gbmj"
    regex = ur'FUNC_SYS_ADD_ACCDETAIL' #正则表达式
    fileList = listFiles(fileDir)
 
    for fileObj in fileList:
	f = open(fileObj,'r+')
	all_the_lines=f.readlines()
	f.seek(0)
	f.truncate()
	for line in all_the_lines:
            str1 = '海南麻将----'
            str2 = '呼叫367'
	    f.write(line.replace(str1 , str2))    
	f.close()  
 
if __name__=='__main__':
    main() 
