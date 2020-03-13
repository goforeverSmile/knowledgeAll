
/*
    * 描述：设置位置，同lua接口一致
*/
cc.p = cc.p || function(x, y)
{
    return { x:x, y:y };
};

cc.pAdd = cc.pAdd || function(pos1, pos2)
{
    return { x:pos1.x+pos2.x, y:pos1.y+pos2.y };
};

cc.pSub = cc.pSub || function(pos1, pos2)
{
    return { x:pos1.x-pos2.x, y:pos1.y-pos2.y };
};

cc.size = cc.size || function(width, height)
{
    return { width:width, height:height };
};

cc.pGetLength = cc.pGetLength || function(pos)
{
    return Math.sqrt(pos.x*pos.x + pos.y*pos.y);
};

cc.pGetDistance = cc.pGetDistance || function(startP, endP)
{
    return cc.pGetLength(cc.pSub(startP, endP));
};

/*
    * 描述：设置颜色，同lua接口一致
*/
cc.c3b = cc.c3b || function(r, g, b)
{
    return { r:r, g:g, b:b };
};

cc.c4b = cc.c4b || function(r, g, b, a)
{
    return { r:r, g:g, b:b, a:a };
};

cc.RED = cc.RED || cc.c3b(255, 0, 0);
cc.GREEN = cc.GREEN || cc.c3b(0, 255, 0);
cc.BLUE = cc.BLUE || cc.c3b(0, 0, 255);
cc.BLACK = cc.BLACK || cc.c3b(0, 0, 0);
cc.WHITE = cc.WHITE || cc.c3b(255, 255, 255);
cc.YELLOW = cc.YELLOW || cc.c3b(255, 255, 0);
cc.GRAY = cc.GRAY || cc.c3b(155, 155, 155);      // 灰色

var module = module || {exports:{}};
/*
    * 描述：适配锚点
*/
var Layout = {
    left_top      : cc.p(0.0, 1.0),
    left_center   : cc.p(0.0, 0.5),
    left_bottom   : cc.p(0.0, 0.0),
    center        : cc.p(0.5, 0.5),
    center_bottom : cc.p(0.5, 0.0),
    center_top    : cc.p(0.5, 1.0),
    right_top     : cc.p(1.0, 1.0),
    right_center  : cc.p(1.0, 0.5),
    right_bottom  : cc.p(1.0, 0.0),
};

/*
    * 描述：打印object对象
*/
function printObject(object)
{
    log(FunctionEx.ObjectToStr(object));
}

/**
 * 返回 int 值
 * 1. 如果不是整数，则返回上取整的值
 * 2. 如果不是数字，返回 0
 *
 * @param {any} value 原始值
 */
function checkint(value) {
    return Math.round(checknumber(value));
}

/**
 * 返回 bool 值 原始值
 *
 * @param {any} value
 */
function checkbool(value) {
    var bool = new Boolean(value);
    return bool.valueOf();
}

function checknumber(value, def){
    def = def || 0;
    var num = Number(value);
    if (isNaN(num)) {
        return def;
    }

    return num;
}

/**
 * 返回 string 值
 *
 * @param {any} value
 */
function checkstring(value) {
    var sType = getType(value);

    // 不是字符串或数字类型，直接返回默认空字符串
    if (sType !== "string" && sType !== "number")
    {
        return "";
    }

    if (value.toString)
    {
        return value.toString();
    }

    return "";
}


function checktable(value){
    if(typeof(value) !== "object"){
        value = {};
    }

    // null 用typeof也是object，这边要做兼容
    if(getType(value) === "null")
    {
        value = {};
    }

    return value;
}

/**
 * 判断一个值是否为数字
 *
 * @param {any} value
 * @returns
 */
function isNumber(value) {
    return cc.isNumber(value);
}

/*
    * 描述：是否是微信平台
*/
function isMiniGame()
{
    return window.wx !== undefined;
}

/*
    * 描述：是否是百度平台
*/
function isBaiduMiniGame()
{
    return isMiniGame() && window.swan !== undefined;
}

/*
    * 描述：是否App平台
*/
function isNative()
{
    return cc.sys.isNative;
}

/**
 * 是否是原生包
 */
function isNativeApp() {
    return isNative() && isChannelNative();
}

/*
    * 描述：是否是web平台
*/
function isWeb()
{
    return !isMiniGame() && !isNative();
}

/*
    * 描述：是否是默往
*/
function isMostonApp()
{
    return window.MostOneJSApis !== undefined;
}

/*
    * 描述：是否是华为快游戏
*/
function isHuaweiH5()
{
    return typeof(HwFastappObject) !== "undefined";
}

/*
    * 描述：是否是ios平台
*/
function isIOS()
{
    if (isMiniGame()) {
        if (MINIGAME_SYS_INFO.platform === "devtools") {
            return MINIGAME_SYS_INFO.system.toLowerCase().indexOf("ios") != -1;
        } else {
            return MINIGAME_SYS_INFO.platform.toLowerCase() === "ios";
        }
    }

    return cc.sys.os === cc.sys.OS_IOS;
}

/*
    * 描述：是否是anroid平台
*/
function isAndroid()
{
    if (isMiniGame()) {
        if (MINIGAME_SYS_INFO.platform === "devtools") {
            return MINIGAME_SYS_INFO.system.toLowerCase().indexOf("android") != -1;
        } else {
            return MINIGAME_SYS_INFO.platform.toLowerCase() === "android";
        }
    }

    return cc.sys.os === cc.sys.OS_ANDROID;
}

/*
    * 描述：是否是webIos平台
*/
function isWebIOS()
{
    if (!isWeb() || !window.navigator) {return false;}
    return window.navigator.userAgent.indexOf('iPhone') > -1;
}

/*
    * 描述：是否是webAnroid平台
*/
function isWebAndroid()
{
    if (!isWeb() || !window.navigator) {return false;}
    var userAgent = window.navigator.userAgent;
    return userAgent.indexOf('Android') > -1 || userAgent.indexOf("Linux") > -1;
}

/*
    * 描述：是否是微信浏览器
*/
function isWechatBrowser (){
    if (!isWeb() || !window.navigator) {return false;}
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}

/**
 * 是否是原生渠道
 */
function isChannelNative() {
    return !isThirdMiniGame() && !isChannelMiniGame();
}

/**
 * 是否是小游戏渠道
 *
 * @returns true or false
 */
function isChannelMiniGame() {
    var channelid = checkint(CHANNEL_ID);
    return channelid >= 818 && channelid <= 821;
}

/**
 * 是否是第三方渠道小游戏
 */
function isThirdMiniGame(){
    if(CHANNEL_ID === "832" || CHANNEL_ID === "833"){
        return true;
    }

    return false;
}

/**
 * 是否是app包
 *
 * @returns true or false
 */
function isPackageApp() {
    return PACKAGE_TYPE < 100;
}
function isMjPack() {
    return PACKAGE_TYPE >= 200 && PACKAGE_TYPE < 300;
}
/**
 * 是否使用 websocket
 *
 * @returns true 使用 websocket 连接，false 使用 client socket 连接
 */
function isUseWebSocket() {
    if(window.qg || isWeb() || FunctionEx.isThirdIOS())
    {
        return true;
    }

    // win32 和 mac 平台使用websocket
    if (cc.sys.platform == cc.sys.WIN32 ||
        cc.sys.platform == cc.sys.MACOS)
    {
        return !isChannelNative();
    }

    return false;
}

function isWeChatMin() {
    return window.wx && !window.qg;
}

function isOPPOMini() {
    return window.qg && qg.getProvider() == "OPPO";
}

function isVivoMini() {
    return window.qg && qg.getProvider() == "vivo";
}

function isUseMiniSocket() {
    if (isWeChatMin()) {
        return true;
    }
    return false;
}

function isNativeIOS() {
    return isNative() && isIOS();
}

function isReviewMode() {
    return IS_REVIEW_MODE;
}

function isReviewIOS() {
    return isNativeIOS() && isReviewMode();
}

var type_map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
};
/*
    * 描述：返回obj对象的字符串类型
    * 参数：任意数据格式
*/
function getType(obj)
{
    var toString = Object.prototype.toString;
    return type_map[toString.call(obj)];
}

/*
    * 描述：数组和字典数据的深拷贝
*/
function deepClone(data)
{
    var type = getType(data);
    var obj;
    if(type === 'array')
    {
        obj = [];
    }
    else if(type === 'object')
    {
        obj = {};
    }
    else
    {
        return data;
    }

    if(type === 'array')
    {
        for(var i = 0, len = data.length; i < len; i++)
        {
            var tmpData = data===data[i] ? data : deepClone(data[i])
            obj.push(tmpData)
        }
    }
    else if(type === 'object')
    {
        for(var key in data)
        {
            obj[key] = data===data[key] ? data : deepClone(data[key])
        }
    }
    return obj;
}

/*
    * 描述：判断object是否为空对象
*/
function isEmptyObject(object)
{
    if (!object) {
        return true;
    }

    return Object.keys(object).length == 0;
}
var gameStartTime = new Date().getTime();

function getTimer() {
    var number = new Date().getTime() - gameStartTime;
    return number;
}
/*
    * 描述：弹出框，背景遮罩层
*/
function createMaskLayer()
{
    return cc.LayerColor.create(cc.c4b(0, 0, 0, 255*0.5));
}

/*
    * 描述：弹出框，背景遮罩层 70%不透明度
*/
function createDarkMaskLayer()
{
    return cc.LayerColor.create(cc.c4b(0, 0, 0, 255*0.7));
}

/**
 * add by John 20181108
 * 调用可变函数
 * callVariableFunction(callback, param1, param2)
 * @param callback
 * @param 函数参数
 */
function callVariableFunction()
{
    var args = [].slice.call(arguments);
    var callback = args.shift();
    if(callback && getType(callback) === "function") {
        callback.apply(null, args);
    }
    else{
        warn("callVariableFunction callback not found");
    }
}

// 微乐平台判断(趣游平台暂时都使用微乐的逻辑)
function isWeile() {
    if (isMiniGame()) {
        return IS_WEILE;
    } else {
        // App 趣游属于微乐
        return IS_WEILE || IS_QUYOU;
    }
}

// 吉祥平台判断
function isJixiang() {
    if (isMiniGame()) {
        // 小游戏趣游属于吉祥
        return IS_JIXIANG || IS_QUYOU;
    } else {
        return IS_JIXIANG;
    }
}

// 心悦平台判断
function isXinyue() {
    return IS_XINYUE;
}
function nop() {
}
cc._tmp = cc._tmp || {};
cc.tmpP = function (x, y) {
    if (cc._tmp._tmpP == null)
        cc._tmp._tmpP = cc.p(0, 0);

    var _tmpP = cc._tmp._tmpP;
    _tmpP.x = x;
    _tmpP.y = y;
    return _tmpP;
};

// 为没有图片后缀名的url添加后缀名
function addExtNameForPicUrl(url) {
    if (!url) {
        return url;
    }
    url = checkstring(url);
    if (cc.path.extname(url)) {
        return url;
    }
    return url + "?.png";
};