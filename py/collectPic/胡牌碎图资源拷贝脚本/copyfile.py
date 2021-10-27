import os
import glob
import shutil
import os.path
from pypinyin import pinyin,lazy_pinyin
 
cur_dir=r'E:\\JS_Game\\PicReonde\\123'    #碎图资源路径，需要提前在固定地方提前创建文件夹，建议路劲和文件夹名称跟本文件里的一致
dir=r'E:\\JS_Game\\PicReonde\\123\\456'   #拷贝后的碎图资源根目录，需要提前在固定地方提前创建文件夹，建议路劲和文件夹名称跟本文件里的一致

content = { 
  "area_tianjin"  :"清一色牌素杠的提溜提双混吊捉五开龙本混龙本本本五本五天胡胡胡的地胡七小对七对飘胡本混十三幺暴成干插上大台上二台满贯相公",
  "area_hebei" : "不四个赖子风一色缺炮闭靠万自摸庄飘二五八底夹单了小追明风包牌四归一抢平混色一清色条龙豪华对超豪华七对捉五魁杠上开花十幺月天胡地抢杠胡平门清素人混悠三边三钻大吊车海底捞三双花龙清风大对子本混碰个红中夹胡天地抢捉五魁碰混",
}

#清除原有所有文件 filepath指向拷贝后的碎图资源根目录(dir)
def del_file(filepath):
  files = glob.glob(filepath+"/*")
  for f in files:
    shutil.rmtree(f)

#拷贝碎图 参数 cur_dir(碎图资源目录)、dir(拷贝后碎图根目录)、folder_ex(扩展文件夹)、color_style(颜色类型)
def copy_file(cur_dir, dir, folder_ex='huEffect' ,color_style='style_2'):
  for parent,dirnames,filenames in os.walk(cur_dir):
    for key,value in content.items():
      sec_folder = os.path.join(dir+'\\', key)
      if not os.path.exists(sec_folder):
        os.mkdir(sec_folder)
        full_folder = os.path.join(sec_folder, folder_ex)
        os.mkdir(full_folder) 
        # 多件层文件夹，预留多颜色用
        if len(color_style) != 0:
          last_folder = os.path.join(full_folder, color_style)
          os.mkdir(last_folder)
        for filename in filenames:
          nameList=filename.split('.')
          hanziName = nameList[0]
          print(hanziName)
          for chat in value:
            if chat == hanziName:
              full_path = os.path.join(cur_dir, filename)
              print("源路径:",full_path)
              new_folder = full_folder
              if len(color_style) != 0:
                new_folder = last_folder 
              despath = new_folder+ '\\' + filename
              print("目标路径:",despath)
              shutil.copy(full_path, despath)

del_file(dir)
copy_file(cur_dir, dir)