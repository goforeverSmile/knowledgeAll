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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	