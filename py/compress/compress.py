import os
def get_ImList(path):
    return [os.path.join(path,f) for f in os.listdir(path) if f.endswith(".png")]
img_path= get_ImList("style_2")
#print(img_path)
for value in img_path:
    print(value)
    python  ../../../../src/tools/png_quant/png_quant.py            "style_2/ba.png"


