
import os

# https://blog.csdn.net/sraxc/article/details/128463381
import tkinter
from tkinter import *
from tkinter import simpledialog
from tkinter import messagebox
import hashlib

class BatchRename():
   # 批量重命名文件夹中的图片文件
    def __init__(self):
        self.path = 'D:\\giSelf\knowledgeAll\\py\\runbat\\TestRes'  # 表示需要命名处理的文件夹

    def rename(self):
        filelist = os.listdir(self.path)  # 获取文件路径
        total_num = len(filelist)  # 获取文件长度（个数）
        i = 1  # 表示文件的命名是从1开始的
        for item in filelist:
            if item.endswith('.jpg'):  # 初始的图片的格式为jpg格式的（或者源文件是png格式及其
                # 他格式，后面的转换格式就可以调整为自己需要的格式即可）
                src = os.path.join(os.path.abspath(self.path), item)
                # 处理后的格式也为jpg格式的，当然这里可以改成png格式
                dst = os.path.join(os.path.abspath(
                    self.path), ''+str(i) + '.png')
                # dst = os.path.join(os.path.abspath(self.path), '0000' + format(str(i), '0>3s') + '.jpg')    这种情况下的命名格式为0000000.jpg形式，可以自主定义想要的格式
                try:
                    os.rename(src, dst)
                    print ('converting %s to %s ...' % (src, dst))
                    i = i + 1
                except:
                    continue
        print ('total %d to rename & converted %d jpgs' % (total_num, i))

# 五子棋
class WuZhiQI():
    def __init__(self) -> None:
        self.KeyBoardMap=[]; 
    def initMap(self):
        for i in range(10):
            self.KeyBoardMap.append([])
            for j in range(10):
                self.KeyBoardMap[i].append("-");
    

# 标准化ui地址  ：https://blog.csdn.net/ZZQ_UESTC/article/details/115825777
class TKDoWindow():
    def __init__(self) -> None:
        self.path = ""
        print("start ==")
    #列表
    def ListBoxCreat(self,tkWin):
         # 创建两个列表
        li = ['C', 'python', 'php', 'html', 'SQL', 'java']
        movie = ['CSS', 'jQuery', 'Bootstrap']
        listb = Listbox(tkWin)  # 创建两个列表组件
        listb2 = Listbox(tkWin)
        for item in li:                 # 第一个小部件插入数据
            listb.insert(0, item)
        for item in movie:              # 第二个小部件插入数据
            listb2.insert(0, item)
        listb.pack()                    # 将小部件放置到主窗口中
        listb2.pack()
       # listb.grid(row=0,column=3)
        #listb2.grid(row=0,column=6)

    def Print_Log(self):
        print("目前先这个样")

# grid是表格式排列
# pack的排列比较自由 这两者同时在一个widget上使用会发生error
   # 打钩按钮使用pack布局 https://blog.51cto.com/u_13488416/2861508
   # 按钮说明很全 https://www.cnblogs.com/wangdianchao/p/11524186.html
    def UTPacktoBt(self,tkWin):
         #标签
       # TableVectBt=[];
        # self.init_data_label = Label(tkWin, text="待处理数据")
        # TableVectBt.append(self.init_data_label)

        # self.result_data_label = Label(tkWin, text="输出结果")
        # TableVectBt.append(self.result_data_label)
        # self.log_label = Label(tkWin, text="日志")
        # TableVectBt.append(self.log_label)

        # for i in range(len(TableVectBt)):
        #     TableVectBt[i].pack()


        #文本框
        # self.init_data_Text = Text(tkWin, width=67, height=35)  #原始数据录入框

        # self.result_data_Text = Text(tkWin, width=70, height=49)  #处理结果展示

        # self.log_data_Text = Text(tkWin, width=66, height=9)  # 日志框
      
        #按钮
        # self.str_trans_to_md5_button = Button(tkWin, text="字符串转MD5", bg="lightblue", width=10,command=self.str_trans_to_md5)  # 调用内部方法  加()为直接调用
        # self.str_trans_to_md5_button.grid(row=1, column=11) 
           # #圆型按钮
        # self.selecBt =  Radiobutton(tkWin,text="option A")
        # self.selecBt.grid(row=1, column=8)
        # 打钩按钮 https://blog.csdn.net/hhR888888/article/details/127991114

         # 默认居中对齐的，
        BtInfors=["福成股份","中电兴发","保利","万科","恒生科技"]
        for inf  in BtInfors:
            h1 = tkinter.BooleanVar() # 设置选择框对象
            bt=Checkbutton(tkWin,text=inf,fg="blue",variable=h1,command=self.Print_Log)
            bt.pack(anchor="w") #side="left"

    def UTGridtoBt(self,tkWin):
        #标签
        self.init_data_label = Label(tkWin, text="待处理数据")
        self.init_data_label.grid(row=0, column=0)
        self.result_data_label = Label(tkWin, text="输出结果")
        self.result_data_label.grid(row=0, column=12)
        self.log_label = Label(tkWin, text="日志")
        self.log_label.grid(row=12, column=0)
        #文本框
        self.init_data_Text = Text(tkWin, width=67, height=35)  #原始数据录入框
        self.init_data_Text.grid(row=1, column=0, rowspan=10, columnspan=10)
        self.result_data_Text = Text(tkWin, width=70, height=49)  #处理结果展示
        self.result_data_Text.grid(row=1, column=12, rowspan=15, columnspan=10)
        self.log_data_Text = Text(tkWin, width=66, height=9)  # 日志框
        self.log_data_Text.grid(row=13, column=0, columnspan=10)
        #按钮
        # self.str_trans_to_md5_button = Button(tkWin, text="字符串转MD5", bg="lightblue", width=10,command=self.str_trans_to_md5)  # 调用内部方法  加()为直接调用
        # self.str_trans_to_md5_button.grid(row=1, column=11) 
           # #圆型按钮
        # self.selecBt =  Radiobutton(tkWin,text="option A")
        # self.selecBt.grid(row=1, column=8)
        # 打钩按钮 https://blog.csdn.net/hhR888888/article/details/127991114

          
        # cb1=Checkbutton(tkWin,text="python")
        # cb1.pack()
        # cb2=Checkbutton(tkWin,text="python1")
        # cb2.pack()
        # cb3=Checkbutton(tkWin,text="python2")
        # cb3.pack()
        # cb4=Checkbutton(tkWin,text="python3")
        # cb4.pack()
        # cb5=Checkbutton(tkWin,text="python4")
        # cb5.pack()
        # cb6=Checkbutton(tkWin,text="python5")
        # cb6.pack()

     

    def set_init_window(self,tkWin):
        # 这个主要讲了函数                         https://www.runoob.com/python/python-gui-tkinter.html
        # 这个主要讲了函数里面，参数使用方法         https://www.jianshu.com/p/fdde4a9d1d9d
        tkWin.title("文本处理工具_v1.0")           #窗口名
        #self.init_window_name.geometry('320x160+10+10')                         #290 160为窗口大小，+10 +10 定义窗口弹出时的默认展示位置
        tkWin.geometry('1068x681+10+10')                         #290 160为窗口大小，+10 +10 定义窗口弹出时的默认展示位置
        #tkWin["bg"] = "pink"                                    #窗口背景色，其他背景色见：blog.csdn.net/chl0000/article/details/7657887
        #tkWin.attributes("-alpha",0.9)                          #虚化，值越小虚化程度越高
        self.UTPacktoBt(tkWin)
       # self.UTGridtoBt(tkWin)
      
     
      
        
    
     #功能函数
    def str_trans_to_md5(self):
        src = self.init_data_Text.get(1.0,END).strip().replace("\n","").encode()
        #print("src =",src)
        if src:
            try:
                myMd5 = hashlib.md5()
                myMd5.update(src)
                myMd5_Digest = myMd5.hexdigest()
                #print(myMd5_Digest)
                #输出到界面
                self.result_data_Text.delete(1.0,END)
                self.result_data_Text.insert(1.0,myMd5_Digest)
                self.write_log_to_Text("INFO:str_trans_to_md5 success")
            except:
                self.result_data_Text.delete(1.0,END)
                self.result_data_Text.insert(1.0,"字符串转MD5失败")
        else:
            self.write_log_to_Text("ERROR:str_trans_to_md5 failed")

    def MainWindow(self):
        print("主要调用对应")
        # 创建窗口
       
     #   self.set_init_window(tkWindow);
      #  self.ListBoxCreat(tkWindow);
       

def MainWindow(tkWindow):
    print("主要界面========")
        # 创建窗口
       
     #   self.set_init_window(tkWindow);
      #  self.ListBoxCreat(tkWindow);
        
if __name__ == '__main__':
    #demo = BatchRename()
   # demo.rename()
    tkWindow = Tk()                     # 创建窗口对象的背景色
    MainWindow(tkWindow)
    tkWindow.mainloop();
    tkWindow.TkWindow()
