#!/usr/bin/python3
import random
oneNum=149;
nightByte=oct(oneNum)#bin二进制 oct 八进制的值 hex 十六进制
username="cgg"
totalmoney=12;
currenMoneny=0;
coopon=0;#优惠券
if totalmoney<500  :
   rand1=random.randint(1,10)
elif 500 <= totalmoney :
    pass
elif 1000< totalmoney:
    pass
aa,bb=11,12;
arraydata=[1,2,3,4,5]
for i  in range(len(arraydata)):
    print("积累下标开始的是",i,arraydata[i])#0 开始的
# xxxx.endswith宽展名称。png gif ...
allAlpha=["abcdefghijklmnopkrstuvwsyz"];
fileName=input("文件名称")
if fileName.endswith("png") or fileName.endswith("gif"):
    findindex=fileName.rfind(".")# find 和rfind一个从头，一个从尾巴
    beginName=fileName[:findindex];#切片
    print("切片后的名称"+beginName)
    fileName.isalpha()#是否存字母
    fileName.isdigit()#是否才能数字 字符串才有这几个方法
    bisaaa=fileName.startswith("aaa")
    print(bisaaa)
    randIndex=random.random(0,len(allAlpha)-1)





