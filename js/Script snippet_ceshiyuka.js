"use strict"
var HallBestRecordPanelTest = cc.Node.extend({
    ctor: function (gameId) {
        this._super()
        this.size = cc.size(1280, 720);
        this.gameId = gameId; //游戏ID
        this.contentSizeEx(this.size);
        this._initView();
        this._registerEventListener();
        this._requestRecord();
    },

    event_hall_userdata_best_record_notic: function () {
        var data = GameStatisticsLogic.getBestRecordDataByGameID(this.gameId.toString())
        if (!data) {
            log("HallBestRecordPanelTest ============ data", JSON.stringify(data));
            return;
        }
        var self = this;
        var params = {}; //有需要自己传
        HardCardNodeLogic.getHandCardNodeByGameID(this.gameId, data, params, function(node) {
            cc.log("HallBestRecordPanelTest ============== node:", node);
            if (!node) {
                return;
            }
            node.addToEx(self)
            node.anchorEx(Layout.center)
            node.layoutEx(Layout.center, cc.p(0, 0))
        });

        //胡牌描述
        var ret = this._getHuTypeTxtArrs(data.hutypede);
        var hutypeText = ret[0] + "\n" + ret[1] + "\n" + ret[2]
        this._labs = Label.create(hutypeText, 30)
            .addToEx(this)
            .anchorEx(Layout.center)
            .layoutEx(Layout.center, cc.p(0, 200))
            .colorEx(cc.c3b(79, 111, 225))

        Label.create(data.beishu, 30)
            .addToEx(this)
            .anchorEx(Layout.center)
            .layoutEx(Layout.center, cc.p(200, 200))
            .colorEx(cc.c3b(79, 111, 225))

    },

    _initView: function () {
        var color = cc.color(0, 0, 0, 50);
        this._bgSprite = Sprite.createColorSprite(this.size, color)
            .addToEx(this)
            .anchorEx(Layout.center)
            .layoutEx(Layout.center)

        this._initBtnClose();

    },

    _getHuTypeTxtArrs: function (hutypedeArr) {
        var ret = [];
        var mid = Math.ceil(hutypedeArr.length / 2);
        mid = Math.min(mid, 5) // 6个以下不分
        var ret1 = "";
        var ret2 = "";
        var ret3 = "";
        for (var i = 0; i < hutypedeArr.length; i++) {
            if (i <= mid) {
                ret1 = ret1 == "" ? ret1 + hutypedeArr[i] : ret1 + " " + hutypedeArr[i];
            } else if (i > mid && i <= ((mid * 2) + 1)) {
                ret2 = ret2 == "" ? ret2 + hutypedeArr[i] : ret2 + " " + hutypedeArr[i]
            } else {
                ret3 = ret3 == "" ? ret3 + hutypedeArr[i] : ret3 + " " + hutypedeArr[i]
            }
        }
        ret1 != "" && ret.push(ret1);
        ret2 != "" && ret.push(ret2);
        ret3 != "" && ret.push(ret3);
        return ret;
    },

    _initBtnClose : function() {
    	// 关闭按钮
        var closeOffsetX = -100;
        var arg = {};
        var self = this
        arg.parent = self._bgSprite;
        arg.alwaysnarrowBtn = true;
        arg.narrowCloseImg = 'gg_res_boot/btn_close_narrow.png';
        arg.narrowBtnOffset = cc.p(closeOffsetX, -88);
        arg.callback = function () {
            self.removeFromParent();
        }.bind(this);
        FunctionEx.createPopViewCloseBtn(arg);
    },


    _registerEventListener: function () {
        Ntfy.add(this, WLEvent.EVENT_HALL_USERDATA_BEST_RECORD_NOTIC);
    },

    _requestRecord: function () {
        if (hallmanager) {
            hallmanager.requestHallComUserData(UserInfoKit.GetSelfID(), "best_record", [this.gameId]);
        }
    },

    //这里处理入场动作，比如加载子界面，音乐预加载等等
    onEnter: function () {
        this._super();
        //Ntfy.add(this, "函数名称")
        EscKeyboardMgr.addListener(this);
    },

    //场景退出时，做清理操作
    onExit: function () {
        EscKeyboardMgr.removeListener(this);
        Ntfy.rm(this);
        this._super();
    },

    //清理资源
    cleanup: function () {
        this._super();
        this._isCleanup = true;
        Loader.removeResFromCache(HallBestRecordPanelTest.getRes());
    },

})

HallBestRecordPanelTest.getRes = function () {
    return [];
}

HallBestRecordPanelTest.create = function (gameId) {
    return new HallBestRecordPanelTest(gameId)
}

HallBestRecordPanelTest.openLayer = function (gameId) {
    if (HallBestRecordPanelTest.isLoadingRes) {
        return;
    }
    HallBestRecordPanelTest.isLoadingRes = true;
    var scene = Director.getRunningScene();
    Loader.load(HallBestRecordPanelTest.getRes(), function () {
        HallBestRecordPanelTest.isLoadingRes = false;
        var sName = "HallBestRecordPanelTest";
        var view = HallBestRecordPanelTest.create(gameId);
        view.addToEx(scene);
        view.setName(sName);
    }.bind(this));
};


HallBestRecordPanelTest.openLayer(GameCommonLogic.getGameId())
