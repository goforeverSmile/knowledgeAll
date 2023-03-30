#!/usr/bin/python
# -*- coding: UTF-8 -*-

import csv
import sys
import os

class readConfigData():
    def __init__(self):
        self.cur_dir = os.getcwd() # 当前路径
        self.csv_path = os.path.join(self.cur_dir, 'TexturePackerRes_shanxixian.csv')
        self.cfgs = {}
        self.readCsv()
        print(self.cur_dir,self.csv_path)

    # 读取csv表
    def readCsv(self):
        print(self.csv_path)
        f = open(self.csv_path)
        f_csv = csv.reader(f)
        
        ignoreIndex = 0
        for row in f_csv:
            ignoreIndex += 1
            if ignoreIndex == 1:
                # 过滤第一行注释
                continue
            name = row[0]
            path = row[1]
            self.cfgs[name] = path                            

        f.close()
    
    def getCsvFile(self):
        return self.cfgs