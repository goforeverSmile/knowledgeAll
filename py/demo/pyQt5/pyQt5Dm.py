# -*- coding: utf-8 -*-
 
"""
Py40.com PyQt5 tutorial 
 
In this example, we create a simple
window in PyQt5.
 
author: Jan Bodnar
website: py40.com 
last edited: January 2015
"""
 #  Geometry  几何图形
 # 使用命令行pyuic5 -o login.py login.ui转换成.py文件。调用格式为pyuic5 -o {输出文件名} {输入designer设计好的.ui
import sys
 
import sys
from PyQt5.QtCore import QAbstractAnimation, QCoreApplication, Qt
from PyQt5.QtWidgets import QApplication, QBoxLayout, QDesktopWidget, QLCDNumber, QMessageBox, QPushButton, QSlider, QToolTip,QWidget
from PyQt5.QtGui import QFont, QIcon
#dm2 工具栏提示，按钮，按钮退出
class Example(QWidget):#继承QWidget
  def __init__(self):
    super().__init__();
    self.initUI();
    TotalBtns=9;
  def initUI(self):
    QToolTip.setFont(QFont("SanSerif",10))
    self.setToolTip('工具栏提示 This is a <b>QWidget</b> widget')
    #按钮，setToolTip

    btn=QPushButton("Button",self)
    btn.setToolTip("this is <b>QPushButton</b> ")
    btn.resize(btn.sizeHint())
    btn.move(0,0)

    #链接点击退出按钮  坑：注意是带clicked
    qbtn=QPushButton("Quit",self)
    qbtn.clicked.connect(QCoreApplication.instance().quit)
  
    qbtn.resize(50,50);
    qbtn.move(50,50)
    self.setGeometry(0,0,460,180)
    self.setWindowTitle("titile_name");
    self.setWindowIcon(QIcon('web.png'))
    self.center();
    self.show();
    self.SlideNum();
    
#demo 消息栏  这个大差后自动调整的
  def closeEvent(self,event):
    reply=QMessageBox.question(self,"退出弹得标题名称","文字说明Are you sure to quit ?")
    if reply==QMessageBox.Yes :
      event.accept();
    else:
      event.ignore();
  #控制窗口现在在屏幕中心得方法
  # 就是程序已到电脑中心
  def center(self):
    #获得窗口
      qr=self.frameGeometry()
        #获得屏幕中心点
      cp = QDesktopWidget().availableGeometry().center()
        #显示到屏幕中心
      qr.moveCenter(cp)
      self.move(qr.topLeft())
  def SlideNum(self): 
      lcd = QLCDNumber(self)
      sld = QSlider(Qt.Horizontal, self)
      vbox = QBoxLayout(QBoxLayout.LeftToRight)
      vbox.addWidget(lcd)
      vbox.addWidget(sld)
 
      self.setLayout(vbox)
      sld.valueChanged.connect(lcd.display)
      
      self.setGeometry(300, 300, 250, 150)
      self.setWindowTitle('Signal & slot')
      self.show()


#demo 1 基本功框
def appcreate():
   #每一pyqt5应用程序必须创建一个应用程序对象。sys.argv参数是一个列表，从命令行输入参数。

    #QWidget部件是pyqt5所有用户界面对象的基类。他为QWidget提供默认构造函数。默认构造函数没有父类。

    #resize()方法调整窗口的大小。这离是250px宽150px高

    #move()方法移动窗口在屏幕上的位置到x = 300，y = 300坐标。

    #设置窗口的标题

    #显示在屏幕上
    app=QApplication(sys.argv)
    w=Example();
    w.move(200,200)
    w.resize(480,260)
    w.show()
    #系统exit()方法确保应用程序干净的退出
    #的exec_()方法有下划线。因为执行是一个Python关键词。因此，exec_()代替
    sys.exit(app.exec_())


if __name__=="__main__":
  appcreate();
  # while(startIndec<1):
  #   startIndec=startIndec+1;
  #   ex=jibenFunc();
