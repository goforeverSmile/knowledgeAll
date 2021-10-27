# encoding=utf-8

import os
def generJsMap(map):
	styles = ["", "HuEffectStyle.Low", "HuEffectStyle.Medium",
			  "HuEffectStyle.High", "HuEffectStyle.Special"]


	colors = ["", "HuNanGreenImageMap",
		  "HuNanPurpleImageMap", "AREA_TIANJINHuImageMap"]
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
				line5 ="\t\t"+keyName +r" : "+colors[color] +"["+keyName+"]" ",\n"
				# if exIndex == 4:
				# 	line5 ="\t\t"+keyName +r" : "+colors[exIndex] +"["+keyName+"]" ",\n"
				outWrintArr.append(line5)
				filterSet.add(char)
		
		line6 = "\t\t},\n"
		outWrintArr.append(line6)

		line7 = "\t},\n"
		outWrintArr.append(line7)

	jsName ='HuEffectConfigs'
	file_path = os.path.join(os.getcwd(), jsName+".js")
	f = open(file_path, 'w',  encoding='utf-8')
	f.write("\"use strict\"\n\n")
	f.write("var "+jsName+" = {\n")
	f.write("\tread : function () {\n")
	f.write("\t\tvar configs = [")
	for a in outWrintArr:
		f.write("\t"+a)
	f.write("\t\t]\n\treturn configs\n},")
	f.write("\t\t\n};\n")
	f.close()





map = {
     "暴成":["TJTGMJGameDefine.HuType_BaoCheng",3],
     "干插":["TJTGMJGameDefine.HuType_GanCha",3],
     "上大台":["TJTGMJGameDefine.HuType_ShangDaTai",3],
     "上二台":["TJTGMJGameDefine.HuType_ShangErTai",3],
     "天胡":["TJTGMJGameDefine.HuType_TianHu",3],
     "地胡":["TJTGMJGameDefine.HuType_DiHu",3],
     "清一色":["TJTGMJGameDefine.HuType_QingYiSe",3],
     "本混":["TJTGMJGameDefine.HuType_BenHunLong",3],
     "素的":["TJTGMJGameDefine.HuType_SuDe",3],
     "捉五":["TJTGMJGameDefine.HuType_ZhuoWu",3],
     "混吊":["TJTGMJGameDefine.HuType_HunDiao",3],
     "双混吊":["TJTGMJGameDefine.HuType_ShuangHunDiao",3],
     "龙":["TJTGMJGameDefine.HuType_Long",3],
     "满贯":["TJTGMJGameDefine.HuType_ManGuan",3],
     "七对":["TJTGMJGameDefine.HuType_QiDui",3],
     "素捉五":["TJTGMJGameDefine.HuType_SuZhuoWu",3],
     "混吊捉五":["TJTGMJGameDefine.HuType_HunDiaoZhuoWu",3],
     "双混吊捉五":["TJTGMJGameDefine.HuType_ShuangHunDiaoZhuoWu",3],
     "素龙":["TJTGMJGameDefine.HuType_SuLong",3],
     "混吊龙":["TJTGMJGameDefine.HuType_HunDiaoLong",3],
     "捉五龙":["TJTGMJGameDefine.HuType_ZhuoWuLong",3],
     "素捉五龙":["TJTGMJGameDefine.HuType_SuZhuoWuLong",3],
     "混吊捉五龙":["TJTGMJGameDefine.HuType_HunDiaoZhuoWuLong",3],
     "双混吊捉五龙":["TJTGMJGameDefine.HuType_ShuangHunDiaoZhuoWuLong",3],
     "素七对":["TJTGMJGameDefine.HuType_SuQiDui",3],
     "混吊七对":["TJTGMJGameDefine.HuType_HunDiaoQiDui",3],
     "捉五七对":["TJTGMJGameDefine.HuType_ZhuoWuQiDui",3],
     "素捉五七对":["TJTGMJGameDefine.HuType_SuZhuoWuQiDui",3],
     "混吊捉五七对":["TJTGMJGameDefine.HuType_HunDiaoZhuoWuQiDui",3],
     "素满贯":["TJTGMJGameDefine.HuType_SuManGuan",3],
     "混吊满贯":["TJTGMJGameDefine.HuType_HunDiaoManGuan",3],
     "捉五满贯":["TJTGMJGameDefine.HuType_ZhuoWuManGuan",3],
     "素捉五满贯":["TJTGMJGameDefine.HuType_SuZhuoWuManGuan",3],
     "混吊捉五满贯":["TJTGMJGameDefine.HuType_HunDiaoZhuoWuManGuan",3],			
}

	




generJsMap(map)


# { 
#     //*****************
#     huType:  0x01000000,
#     text: "自摸",
#     style: HuEffectStyle.Medium,

#     fontConfig: {
#         "自" :  HuNanYellowImageMap["自"],
#         "摸" :  HuNanYellowImageMap["摸"],
#     }

# },
