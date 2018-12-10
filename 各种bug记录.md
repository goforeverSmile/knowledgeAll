九宫格锚点不是0.5,0.5,原来我在层上加一直放不老中间
  this._bgSprite = Scale9Sprite.createWithPlist(undefined, "qqbh/bg_bg_3.png")
  this._bgSprite.addToEx(this,10)
	this._bgSprite.layoutScreenEx(cc.p(0.5,0.5),cc.p(0,0))
  this._bgSprite.setCapInsets( cc.rect(43, 43, 2, 2))
  this._bgSprite.contentSizeEx(cc.size(pkWidth*scaleHnumber*(LengthN)+30, 220))
  .anchorEx(cc.p(0.5, 0.5))//九宫格锚点不是0.5设置一下马上对了到中心去了

  2 在消息事件中 TouchEvent.registerTouchOneByOne(this) 如果onTouchBegan 返回return false 后面的onTouchMoved  onTouchMoved不会触发
  
