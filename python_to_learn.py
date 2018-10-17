#!/usr/bin/python
# encoding=utf-8
# 生成发给第三方的工程文件

#注意：#coding=utf-8 的 = 号两边不要空格。

import sys #这下面就可以写模块导入，和别的东西了。

# 知识点1：Python 标识符
"""
 在 Python 里，标识符由字母、数字、下划线组成。
 在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。
 Python 中的标识符是区分大小写的。
 以下划线开头的标识符是有特殊意义的。以单下划线开头 _foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from xxx import * 而导入；
 以双下划线开头的 __foo 代表类的私有成员；以双下划线开头和结尾的 __foo__ 代表 Python 里特殊方法专用的标识，如 __init__() 代表类的构造函数。
 Python 可以同一行显示多条语句，方法是用分号 ; 分开，如：
 print 'hello';print 'runoob';
 总结  1不能以数字开头 2区分大小写 3下划线的特殊意义
"""
#知识点2：行和缩进
"""
学习 Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。
python 最具特色的就是用缩进来写模块。缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白
数量，这个必须严格执行。
"""
#知识点3：多行语句
"""
Python语句中一般以新行作为语句的结束符。
但是我们可以使用斜杠（ \）将一行的语句分为多行显示，如下所示：
total = item_one + \
        item_three
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
语句中包含 [], {} 或 () 括号就不需要使用多行连接符
"""
#知识点4：记住：空行也是程序代码的一部分。

#知识点5 ：缩进相同的一组语句构成一个代码块，我们称之代码组。
"""
缩进相同的一组语句构成一个代码块，我们称之代码组。
像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。
我们将首行及后面的代码组称为一个子句(clause)。

num = float(input("输入一个数字: "))
if num > 0:
   print("正数")
elif num == 0:
   print("零")
else:
   print("负数")
"""


#---------------关键字-------------
# -Python常用的关键字 
#and, del, from, not, while, as, elif, global, or, with, assert, else, if, pass, yield, break, except, import, print, class, exec, in, raise, 
#contiue, finally, is, return, def, for, lambda, try

# -1.and , or 
# and , or 为逻辑关系用语，Python具有短路逻辑，False and 返回 False 
# 不执行后面的语句， True or 直接返回True，不执行后面的语句 

# 2.del 
# 删除变量

# if __name__=='__main__':
    # a=1       # 对象 1 被 变量a引用，对象1的引用计数器为1
    # b=a       # 对象1 被变量b引用，对象1的引用计数器加1
    # c=a       #1对象1 被变量c引用，对象1的引用计数器加1
    # del a     #删除变量a，解除a对1的引用
    # del b     #删除变量b，解除b对1的引用
    # #print a   #运行此句出错，name 'a' is not defined，说明 del 删除变量a
    # print(c)  #最终变量c仍然引用1
    # print c
	
"""
多行注释
python 的主要数据类型
Number(数字) Boolen  None 
String(字符串) List(列表) Tuple(元组) Dictionary(字典)
"""
"""
Here is a list of the Python keywords.  Enter any keyword to get more help.
关键字
and                 elif                import              return
as                  else                in                  try
assert              except              is                  while
break               finally             lambda              with
class               for                 not                 yield
continue            from                or
def                 global              pass
del                 if                  raise
"""
# 区分大小写
age=input("输入函数")

print("age=", age)
del age	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	