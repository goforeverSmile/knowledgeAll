#最好整理下，眼红py记录文档中不对的

#dm0  
# Python 中的标识符是区分大小写的。
# 以下划线开头的标识符是有特殊意义的。以单下划线开头 _foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from xxx import * 而导入；
# 以双下划线开头的 __foo 代表类的私有成员；以双下划线开头和结尾的 __foo__ 代表 Python 里特殊方法专用的标识，如 __init__() 代表类的构造函数。
# Python 可以同一行显示多条语句，方法是用分号 ; 分开，如：
# 总结  1不能以数字开头 2区分大小写 3下划线的特殊意义



# dm1    del # 删除变量

def name():
    a=1       # 对象 1 被 变量a引用，对象1的引用计数器为1
    b=a       # 对象1 被变量b引用，对象1的引用计数器加1
    c=a       #1对象1 被变量c引用，对象1的引用计数器加1
    del a     #删除变量a，解除a对1的引用
    del b     #删除变量b，解除b对1的引用
    #print a   #运行此句出错，name 'a' is not defined，说明 del 删除变量a
    print(c)  #最终变量c仍然引用1


# dm2 安装问题python2和python3多版本的pip安装问题
#为了获取数据信息我需要对tushare下载
#这里就用到pip 需要在 C:\Python27\Scripts 文件夹下才可以使用pip命令
#pip install tushare 反馈要要升级pip
#------------如何升级pip------
# pip show pip 显示版本,拷贝一段百度知识:: Pip是一个Python的包管理工具，实际上它也可以被看待为是一个包，
# Pip相当于Linux上的yum，对python的开发者来说相当方便。我们再也无需去焦头烂额的寻找whl包，直接通过pip就可
# 以在线安装（前提是有网络+pip版本合适的情况下,可见pip版本的重要性
# python -m pip install --upgrade pip 升级pip

#多版本共存的python，怎么怎么安装
#dm3  cd ..
# dm4、同时存在python2 和python3 的的时候制定,控制台命令到要的python3文件夹下/想要的版本文件夹下
# 然后  python3(是否有改名称python ) - m （运行库用脚本去运行）pip install/uninstall  xxxx
#  pip  python3 -m pip install pypinin 这个是名称有修该为python3的，
# 没有修该名称的话，那要cd到要安装文件夹下。还有开始的是查看查看版本python3 ，记得退出下exit();感觉每次版本查看后
# 会pip会失败。

#路径问题  pyhon中的路径是/或者是\\而不是\
#当前文件路径 	pwd = os.getcwd()
print os.getcwd() #获取当前工作目录路径
print os.path.abspath('.') #获取当前工作目录路径
print os.path.abspath('test.txt') #获取当前目录文件下的工作目录路径#
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

#3、 列表 append 和extend
a=[1,2,3]
b=[4,5,6]
a.append(b) #这个是按整个数组作为单个元素，加入进去
a.extend(b)#这个是按一个元素添加进去

#4、go 有一种写法就是  aaaa(b...)跟extend一样，按一个一个传入

#5、元组 Tuple  tuple1=()注意元组是()，数据是不能修该但，注意tup2=()这个是元组，但tup2=(20),这个是整形
#这个就是元祖。元祖不允许修改的，可以两个元祖相加
tup2=(20,)

#6、f=open("xieRu.js","w")//w：写入模式，没这个文件，自动回创建f.close();readlines读整个文件；
f.readLines();f.read(10)

#7.// 加到系统环境中， normpath :把A//B，A/B /，A/./B和A /foo /../B都将被标准化为A/B。在Windows操作系统上，路径中的任何正斜杠('/')都将转换为反斜杠('\')。
sys.path.append(os.path.normpath(os.path.join(os.path.dirname(__file__), 'src/tools/hall/utils')))
sys.path.append(os.path.normpath(os.path.join(os.path.dirname(__file__), 'src/tools/png_quant')))

#8.bat脚本运行python 时候如果没在同一个文件夹下可以先cd e:\aaa\bb

#9、

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	