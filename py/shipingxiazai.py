import urllib2
html = urllib2.urlopen('https://mparticle.uc.cn/video.html?uc_param_str=frdnsnpfvecpntnwprdssskt&wm_aid=b191b9243cf74502a168ad6cdb92a34a&wm_id=3aa07560909a44769c6b3dff88763ca6&pagetype=share&btifl=10016&tab=video').read()
print 'size is', len(html)