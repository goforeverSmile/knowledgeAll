# Python 标识符
# 在 Python 里，标识符由字母、数字、下划线组成。
# # 在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。
# Python 中的标识符是区分大小写的。
# 以下划线开头的标识符是有特殊意义的。以单下划线开头 _foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from xxx import * 而导入；
# 以双下划线开头的 __foo 代表类的私有成员；以双下划线开头和结尾的 __foo__ 代表 Python 里特殊方法专用的标识，如 __init__() 代表类的构造函数。
# Python 可以同一行显示多条语句，方法是用分号 ; 分开，如：
# print 'hello';print 'runoob';
# 总结  1不能以数字开头 2区分大小写 3下划线的特殊意义

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
	
#路径问题  pyhon中的路径是/或者是\\而不是\
#当前文件路径 	pwd = os.getcwd()
print os.getcwd() #获取当前工作目录路径
print os.path.abspath('.') #获取当前工作目录路径
print os.path.abspath('test.txt') #获取当前目录文件下的工作目录路径
print os.path.abspath('..') #获取当前工作的父目录 ！注意是父目录路径
print os.path.abspath(os.curdir) #获取当前工作目录路径
# 3、改变当前目录
#1) 使用: os.chdir(path)。
#比如, 如果当前目录在 ‘E:’ 下面， 然后进入E 下面的files 文件 可以使用 os.chdir(E:\files).
#之后，使用比如 test1 = open('file1.txt'),  打开的文件会是在这个 ‘E:\files’ 目录下的文件，而不是 'E' 下的文件。
#4、组合路径返回
os.path.join('file1','file2','file3')
#合并得到路径 file1/file2/file3。
用;分割同一行用：结束一行
print 默认输出是换行的，如果要实现不换行需要在变量末尾加上 end=""：	
ArrayDatt=[1,22,3,4,5,66,77]
#for i in Arraydata: 输出的i 是数值
for i in range(len(ArrayDatt)):
    print(i,ArrayDatt[i])



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	