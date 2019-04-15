
"use strict"

/*
    * @file     LaZhuangLayer.lua
    * @brief    天津麻将拉庄层类,继承ReadLayer
    * @date     2016年12月15日
    * @by       陈迪池
    * @email    2481245726@qq.com
    //*/
                       
var TJMJLaZuoZhuangLayer = cc.Layer.extend(
{
    /*
        * 描述：显示拉庄界面
        * 参数：clickCallback选中后回调
    //*/

    ctor : function(clickCallback, tag)
    {
        this._super()
        this._dLaZhuangSpriteInSelect = []
        this._clickCallback = clickCallback         //选中回调

        this.LaZhuangLayerTAG = tag;

        this.kLaZhuangSpriteKey = "kLaZhuangSpriteKey";
     
        this.laZhuangOver = false
        this.goNext = false
    },

     /*
        * 描述:闲家显示拉庄按钮
    //*/
    showLaZhuangBtn : function( )
    {
        //背景
        this._buttonLayer = cc.Layer.create()
            .addToEx(this)

        var heightSpace = 100
     
        var TJMJGameData = RegisterGameData.getGameData()
        var iDingHuoLeiXing = TJMJGameData.getDingHuoLeiXing()//1 两活  2 三活
        var infos=[]
        if(iDingHuoLeiXing==1)//
        {
             var infos_3 = 
             [
                [ "tjmj/lazhuang/btn_xian_0.png", cc.p(-220, heightSpace) ],  //不坐
                [ "tjmj/lazhuang/btn_xian_1.png", cc.p(0, heightSpace) ],  //不坐
                [ "tjmj/lazhuang/btn_xian_2.png", cc.p(220, heightSpace) ],  //不坐
             ]
             infos=infos_3
        }
        else
        {
             var infos_4 = 
             [
                [ "tjmj/lazhuang/btn_xian_0.png", cc.p(-220, heightSpace) ],  //不坐
                [ "tjmj/lazhuang/btn_xian_1.png", cc.p(-110, heightSpace) ],  //不坐
                [ "tjmj/lazhuang/btn_xian_2.png", cc.p(-0, heightSpace) ],  //不坐
                [ "tjmj/lazhuang/btn_xian_3.png", cc.p(110, heightSpace) ],  //不坐
             ]
             infos=infos_4
        }

        var iCanChooseIndex = TJMJLaZuoZhuangLogic.getCanLaZhuangIndex()
        var iMinLimitZhuangIndex = TJMJLaZuoZhuangLogic.getMinLimitZhuangIndex()

        for (var index = 0; index < infos.length; index++)
        {
            var info = infos[index]
            var button = ButtonEx.createWithPlist(undefined, info[0])
                .addToEx(this._buttonLayer, 0, index)
                .layoutEx(Layout.center_bottom, info[1])
                .setClickCallback(function(bt)
                {
                    var tag = bt.getTag()
                    this._onClickAction(tag)
                }.bind(this))

            button.setEnabled( false )
            if ((index + 1) <= iCanChooseIndex && (index+1) >= iMinLimitZhuangIndex)
            {
                button.setEnabled( true )
            }
        }

        //this._piaoTimer(1)//未实现

    },

     /*
        * 描述:庄家显示坐庄按钮
    //*/
    showZuoZhuangBtn : function(  )
    {
        //背景
        this._buttonLayer2 = cc.Layer.create()
            .addToEx(this) 

        var laZhuangJI=  TJMJLaZuoZhuangLogic.getCanLaZhuangIndexEx()
      
       var TJMJGameData = RegisterGameData.getGameData()
       var iDingHuoLeiXing = TJMJGameData.getDingHuoLeiXing()//1 两活  2 三活
       var infos=[]
       if(iDingHuoLeiXing==1)//
       {
            var infos_3 = 
            [
                [ "tjmj/lazhuang/btn_zhaung_0.png" ],  //不坐
                [ "tjmj/lazhuang/btn_zhaung_1.png" ],  //
                [ "tjmj/lazhuang/btn_zhaung_2.png" ],  //不坐
            ]
            infos=infos_3
       }
       else
       {
            var infos_4 = 
            [
                [ "tjmj/lazhuang/btn_zhaung_0.png" ],  //不坐
                [ "tjmj/lazhuang/btn_zhaung_1.png" ],  //不坐
                [ "tjmj/lazhuang/btn_zhaung_2.png" ],  //不坐
                [ "tjmj/lazhuang/btn_zhaung_3.png" ],  //不坐
            ]
            infos=infos_4
       }
        //拉3
        var iLastZhuangIndex = TJMJLaZuoZhuangLogic.getLastZuoZhuangIndex()

        var posX=0
        var posY=100
        var SpaceX=100
        var buttonForCeShi = Button.createWithPlist(undefined,"tjmj/lazhuang/btn_zhaung_0.png")
      
        var dataArrayPos=[];
        for (var index = 0; index < infos.length; index++)
        {
            dataArrayPos[index]=cc.p(index*SpaceX+index*buttonForCeShi.getContentSize().width,posY)
        }
       
        for (var index = 0; index < infos.length; index++)
        {
            var leftMax=dataArrayPos[ infos.length-1]
            var info = infos[index]
            var indexZhuang = index + 3
            var button = Button.createWithPlist(undefined,info[0])
                .addToEx(this._buttonLayer2, 0, indexZhuang)  
                .layoutEx(Layout.center_bottom,cc.p(dataArrayPos[index].x-leftMax.x/2,dataArrayPos[index].y))
                .setClickCallback(function(bt)
                {
                    var tag = bt.getTag()
                    this._onClickAction(tag)
                }.bind(this))


            button.setEnabled( true )
            // 连庄只能选上局的选项
            if (iLastZhuangIndex != (index+1) && iLastZhuangIndex != 0)
            {
                button.setEnabled( false )
            }
        }

        //this._piaoTimer(4) 未处理
            
    },

    /*
        * 描述：删除拉庄按钮
    //*/
    removeButtonLayer : function()
    {

        this.laZhuangOver = true
        GameTimerLogic.stopTimer()
        //GameUIBase.onStopTimer() //未实现

        if (this._buttonLayer)
        {
            this._buttonLayer.removeFromParent()
            this._buttonLayer = undefined 
        }

        if (this._buttonLayer2)
        {
            this._buttonLayer2.removeFromParent()
            this._buttonLayer2 = undefined
        }
    },


    onTouchBegan : function()
    {
        return true
    },


    removeLaZhuangLayer : function()
    {
        if (! this.laZhuangOver)
        {
            GameTimerLogic.stopTimer()
            GameUIBase.onStopTimer()
        }
    },

     /*
        * 描述:按钮点击回调动作
    //*/
    _onClickAction : function(index)
    {
        
        //拉庄值   0:不拉  1:拉庄 2:拉两庄 3:坐庄 4：不坐庄
        var laZhuangValue = index
    
        //播放按钮点击音效
        MJAudio.playClickButtonEffect()

        //删除按钮层
        this.removeButtonLayer()

        //回调拉庄值
        this._clickCallback(laZhuangValue)
    },
    ////////////////////////////-倒计时//////////////////////////////////

    _piaoTimer : function(defaultTag)
    {
        MessageQueue.addAnimation(function(isDrop)
        {
            var baseGameData = RegisterGameData.getGameData()
            var selfChairId = baseGameData.getSelfChairId()
            this._updateTimer(selfChairId)
            baseGameData.startTimer(function(elapseTime)
            {
                this._piaoTimerLogic(selfChairId, elapseTime,defaultTag)
            })
            
            MessageQueue.nextAnimation()
            return true
        }.bind(this))
    },

    _piaoTimerLogic : function(selfChairId, elapseTime,defaultTag)
    {

        if (FriendUtils.isFriendRoom())
        {
            return
        }
        var baseGameData = RegisterGameData.getGameData()
        var turnOutTime = baseGameData.getLaZuoZhuangTime()
        var isTrustState = false
        var selfPlayerData = baseGameData.getSelfPlayerData()
        if (selfPlayerData)
        {
            isTrustState = selfPlayerData.isTrustState()
            if (isTrustState)
            {
                if (defaultTag < 3)
                {
                    defaultTag = 0
                }
                else
                {
                    defaultTag = 4
                }
            }
        }

        if (isTrustState || elapseTime>=turnOutTime)
        {
            this._onClickAction(defaultTag)
        }
    },
    /*
        * 描述：更新UI定时器
    //*/
    _updateTimer : function(playerId)
    {
        assert(playerId, "tjmj-TJMJLaZuoZhuangLayer-_updateTimer-playerId")
        var chairId = ChairConvert.toClientChairId(playerId)
        Enum.check(chairId)

        var ret = this._getTimer();
        var remainTime = ret[0];
        var allTime = ret[1];
        GameLayerLogic.startTimer(chairId, remainTime, allTime)
    },

    // 获取游戏时间 返回 第一个值为“剩余时间” 第二个值为 “当前操作总的时间”
    _getTimer : function()
    {
        var baseGameData = RegisterGameData.getGameData()
        var curTimerNum = baseGameData.getCurTimerNum()
        var turnOutTime = baseGameData.getLaZuoZhuangTime()
        return [turnOutTime-curTimerNum, turnOutTime]
    },

    getLaZhuangIcon : function(chair)
    {
        var avatarSprite = GetLayerLogic.getAvatarSprite(chair)
        if (avatarSprite)
        {
            return avatarSprite[this.kLaZhuangSpriteKey]
        }
        return null 
    },

    _getContentSizeScale : function( viewChair )
    {
        return this._dLaZhuangIcon[viewChair].getContentSize().width/(1.0*this._dLaZhuangSpriteInSelect[viewChair].getContentSize().width)
    },

    _getWorldPos : function( viewChair )
    {
        var dLaZhuangIconInfo = this._dLaZhuangIcon[viewChair]
        return dLaZhuangIconInfo.getParent().convertToWorldSpace(cc.p(dLaZhuangIconInfo.getPosition()))  
    },

    // return M
})

TJMJLaZuoZhuangLayer.create = function(clickCallback, tag)
{
    return new TJMJLaZuoZhuangLayer(clickCallback, tag)
}
