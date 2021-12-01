# encoding=utf-8

# 
map = {
  "tjtg" : {
     "暴成":["TJTGMJGameDefine.HuType_BaoCheng",1],
      "干插":["TJTGMJGameDefine.HuType_GanCha",1],
     "上大台":["TJTGMJGameDefine.HuType_ShangDaTai",1],
     "上二台":["TJTGMJGameDefine.HuType_ShangErTai",],
     "天胡":["TJTGMJGameDefine.HuType_TianHu",3],
     "地胡":["TJTGMJGameDefine.HuType_DiHu",3],
     "清一色":["TJTGMJGameDefine.HuType_QingYiSe",1],
     "本混":["TJTGMJGameDefine.HuType_BenHunLong",1],
     "素的":["TJTGMJGameDefine.HuType_SuDe",1],
     "捉五":["TJTGMJGameDefine.HuType_ZhuoWu",1],
     "混吊":["TJTGMJGameDefine.HuType_HunDiao",1],
     "双混吊":["TJTGMJGameDefine.HuType_ShuangHunDiao",1],
     "龙":["TJTGMJGameDefine.HuType_Long",2],
     "满贯":["TJTGMJGameDefine.HuType_ManGuan",1],
     "七对":["TJTGMJGameDefine.HuType_QiDui",1],
     "素捉五":["TJTGMJGameDefine.HuType_SuZhuoWu",2],
     "混吊捉五":["TJTGMJGameDefine.HuType_HunDiaoZhuoWu",1],
     "双混吊捉五":["TJTGMJGameDefine.HuType_ShuangHunDiaoZhuoWu",1],
     "素龙":["TJTGMJGameDefine.HuType_SuLong",1],
     "混吊龙":["TJTGMJGameDefine.HuType_HunDiaoLong",1],
     "捉五龙":["TJTGMJGameDefine.HuType_ZhuoWuLong",1],
     "素捉五龙":["TJTGMJGameDefine.HuType_SuZhuoWuLong",1],
     "混吊捉五龙":["TJTGMJGameDefine.HuType_HunDiaoZhuoWuLong",1],
     "双混吊捉五龙":["TJTGMJGameDefine.HuType_ShuangHunDiaoZhuoWuLong",1],
     "素七对":["TJTGMJGameDefine.HuType_SuQiDui",1],
     "混吊七对":["TJTGMJGameDefine.HuType_HunDiaoQiDui",1],
     "捉五七对":["TJTGMJGameDefine.HuType_ZhuoWuQiDui",1],
     "素捉五七对":["TJTGMJGameDefine.HuType_SuZhuoWuQiDui",1],
     "混吊捉五七对":["TJTGMJGameDefine.HuType_HunDiaoZhuoWuQiDui",1],
     "素满贯":["TJTGMJGameDefine.HuType_SuManGuan",1],
     "混吊满贯":["TJTGMJGameDefine.HuType_HunDiaoManGuan",1],
     "捉五满贯":["TJTGMJGameDefine.HuType_ZhuoWuManGuan",1],
     "素捉五满贯":["TJTGMJGameDefine.HuType_SuZhuoWuManGuan",1],
     "混吊捉五满贯":["TJTGMJGameDefine.HuType_HunDiaoZhuoWuManGuan",1],	     
    },

}

import os
def generJsMap(gameName,map):
	styles = ["HuEffectStyle.Low", "HuEffectStyle.Medium",
			  "HuEffectStyle.High", "HuEffectStyle.Special"]


	colors = ["AREA_TIANJINHuImageMapstyle_1", "AREA_TIANJINHuImageMapstyle_2",
		  "AREA_TIANJINHuImageMapstyle_3", "HuImageMapspecial"]
	outWrintArr=[]

	for key in map:
		line0 = "\n\t\t{\t\n"
		outWrintArr.append(line0)
		color = map[key][1]
		# exIndex = map[key][2]
		# line1 = "\t\thuType:" + str(hex(map[key][0])) + ",\n"
		line1 = "\t\thuType:" + str(map[key][0]) + ",\n"
		outWrintArr.append(line1)

		line2 = "\t\ttext: \"" +key + "\" ,\n"
		outWrintArr.append(line2)

		line3 = "\t\tstyle:" + styles[color] + ",\n"
		outWrintArr.append(line3)

		line4 = "\t\tfontConfig: {\n"
		outWrintArr.append(line4)

		filterSet = set()
		for char in key:
			if char not in filterSet:
				keyName = "\""+char+"\""
				line5 ="\t\t"+keyName +r" : "+gameName.upper()+colors[color] +"["+keyName+"]" ",\n"
				# if exIndex == 4:
					# line5 ="\t\t"+keyName +r" : "+colors[exIndex] +"["+keyName+"]" ",\n"
				outWrintArr.append(line5)
				filterSet.add(char)
		
		line6 = "\t\t},\n"
		outWrintArr.append(line6)

		line7 = "\t},"
		outWrintArr.append(line7)

	jsName =gameName.upper()+'HuEffectConfigs'
	file_path = os.path.join(os.getcwd(), jsName+'.js')
	f = open(file_path, 'w',  encoding='utf-8')
	f.write("\"use strict\"\n\n")
	f.write("var "+jsName+" = {\n")
	f.write("\tread : function () {\n")
	f.write("\t\tvar configs = [")
	for a in outWrintArr:
		f.write("\t"+a)
	f.write("\n\t\t]\n\t\treturn configs\n\t},\n\n")

	# 以下为加入测试函数
	f.write("\tceshiToOutAllPrintType:function(wEndType, dianpaoChairId, huChairIds, huTypes, huConfigData,llMoney)\n\t{\n")
	f.write("\t\tvar delay = cc.DelayTime.create(3)\n")

	f.write("\t\tvar configs =  [\n")
	for key in map:
		f.write("\t\t\t"+map[key][0]+",  //"+key+"\n")
	f.write("\t\t]\n")

	f.write("\t\tthis.index=0\n")
	f.write("\t\tvar seq = cc.Sequence.create(delay, cc.CallFunc.create(function () {\n")
	f.write("\t\t\tvar ide=0\n")
	f.write("\t\t\thuTypes=[]\n")
	f.write("\t\t\tfor(var key  in configs) {\n")
	f.write("\t\t\t\tif(ide == this.index) {\n")

	f.write("\t\t\t\t\thuTypes.push(configs[key])\n")
	f.write("\t\t\t\t\tbreak\n")
	f.write("\t\t\t\t}\n")
	f.write("\t\t\t\tide++\n")
	f.write("\t\t\t}\n")

	f.write("\t\t\tRecvGameEnd.playShowyHuEffect(wEndType, dianpaoChairId, huChairIds, huTypes, huConfigData,llMoney)\n")
	f.write("\t\t\tthis.index++\n")
	f.write("\t\t\tvar arr = Object.keys(configs)\n")
	f.write("\t\t\tif(this.index>=arr.length) {\n")
	f.write("\t\t\t\tthis.index=0\n")
	f.write("\t\t\t}\n")

	f.write("\t\t}.bind(this)))\n")

	f.write("\t\tAction.newRepeatForever()\n")
	f.write("\t\t\t.addAction(seq)\n")
	f.write("\t\t\t.run(BaseLogic.getRunningScene())\n")

	f.write("\t},\n")

	f.write("};\n")
	f.close()

if __name__ == "__main__":
	for key in map:
		generJsMap(key,map[key])
	



