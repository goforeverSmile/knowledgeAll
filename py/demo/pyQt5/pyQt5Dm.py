# -*- coding: utf-8 -*-
 
"""
Py40.com PyQt5 tutorial 
 
In this example, we create a simple
window in PyQt5.
 
author: Jan Bodnar
website: py40.com 
last edited: January 2015
"""
 
import sys
 
import sys
from PyQt5.QtCore import QCoreApplication
from PyQt5.QtWidgets import QApplication, QMessageBox, QPushButton, QToolTip,QWidget
from PyQt5.QtGui import QFont, QIcon

class Example(QWidget):
  def __init__(self):
    super().__init__();
    self.initUI();
  
  def initUI(self):
   

    QToolTip.setFont(QFont("SanSerif",10))
    self.setToolTip('工具栏提示 This is a <b>QWidget</b> widget')
    
    btn=QPushButton("Button",self)
    btn.setToolTip("this is <b>QPushButton</b> ")
    btn.resize(btn.sizeHint())
    btn.move(0,0)

    #链接点击退出按钮  坑：注意是带clicked
    qbtn=QPushButton("Quit",self)
    qbtn.clicked.connect(QCoreApplication.instance().quit)
  
    qbtn.resize(50,50);
    qbtn.move(50,50)

    self.setGeometry(300,300,300,200)
    self.setWindowTitle("titile_name");
    self.setWindowIcon(QIcon('web.png'))
    self.show();

def closeEvent(self,event):
  replyp=QMessageBox.question(self,"title_name","Are you sure to quit ?")
if __name__=="__main__":
  app=QApplication(sys.argv)
  ex=Example();
  sys.exit(app.exec_())
