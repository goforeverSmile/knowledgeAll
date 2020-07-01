#!/usr/bin/env python
# -*- coding: utf-8 -*-
# 
import sys
import subprocess
import os
import io
import exampleFunc
import json

# 知识点： 引入错误处理方法
# 知识点：  终端中文乱码的问题:可以加u : print(u"引路引入")
try:
    import helper
except ImportError :
     print(u"引入helper 失败==可以尝试安装或者其他地方引入")
# 方法1 for 的写法
# 下标 是从0 开始 可以看出默认0 开始有限制如(2,5)才输出限制的下标，并且不包含5
# 字典的定义方式： s = {} 或者 d = {key1 : value1, key2 : value2 } 循环是不用加 range 
# append有点像数组push()
def ForAllIdes():
    threaholds=[100,100,12,152,150,1241]
    for i in range(5):
        print("you  head is boom")
    for i in range(2,5):
        print("thresholdes==[i],",i,threaholds[i])
    for i in range(len(threaholds)):
        print("i ====",i)
    ziDianData={"ab":15,"cf":89}
    for key in ((ziDianData)):
        print("key===[]",key,ziDianData[key])
#知识点 ：没有 ++ n的写法
#print(res+day)12
def forExample_5():
    inputNum=[];
    for i in range(3):
        print("python xiao biao===",i)
        x=int(input("int %d"%(i)))
        inputNum.append(x)
        print("这样也可以打印",inputNum)

#知识点 print 可以直接打印数组
# def forExample_6():
def Fib(n):
    return 1 if n<=2 else Fib(n-1)+Fib(n-2)
# 关于os.getcwd()获取当前路径不正确 可以理解未这个运行程序当前是在什么路径运行,
#不能当作是这个文件得路径 这用vs 运行这个脚本和直接运行就发现是不同路径
#

#只读“r” 如果jsFile.write("tobbocc")直接把原来的数据都删除了
# f = open('write_demo.txt', 'w')  #打开文件，往哪个文件里写入数据。如无，创建。
# print ("文件名为: ", f.name)         #f.name打印文件的名称，带拓展名
# f.write('hello ,I am writing ')      #注意write写入是先将文件内容清空，然后再写入。
#content=f.read(3)  #3表示读取3个字符，虽然说是byte。但是有中文时实际按字符返回的
#read() 不加数组就全读加数就读几个,可以赋值给变量readline读一行
# json.load 获取这个才一变字典
def testOpenJS():
    nowDIr=os.getcwd()
    print(os.path.abspath('main.py'))
    accountPath="D:/giSelf/knowledgeAll/py/pythonCC/accounts.json"
    with open(accountPath) as data_file:    
         data = json.load(data_file)
         print(data)
         print(type(data))
testOpenJS()