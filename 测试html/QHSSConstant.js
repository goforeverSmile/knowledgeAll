"use strict"

var QHSSConstant = {}

QHSSConstant.PLAYER_COUNT = 4

QHSSConstant.HANDCARD_COUNT = 27

QHSSConstant.GAME_NAME = "琼海十三张"
var GAMES_DIR="";
QHSSConstant.MsgID = {
    MSG_GAME_CHAT						:	0,	//	聊天
	MSG_GAME_CHAT_NOTIFY				:	1,	//	聊天应答（广播）
	MSG_S_READY							:	2,	//	准备
	MSG_C_READY							:	3,
	MSG_S_SATRT							:	4,	//	游戏开始
	MSG_S_OUT_CARD						:	5,	//	出牌
	MSG_C_OUT_CARD						:	6,
	MSG_S_PASS							:	7,	//	pass
	MSG_C_PASS							:	8,	//
	MSG_S_GAME_END						:	9,	//	游戏结算
	MSG_S_RECONNECT						:	10,	//	断线重连
	MSG_S_BASE_SCORE					:	11,	//	房间基础分
	MSG_S_TEAMMATE_CARD					:	12,	//	队友手牌
	MSG_S_TRUST							:	13,	//	托管
	MSG_C_TRUST							:	14,	//
	MSG_S_CHAT_PHRASE					:	15,	//	短语
	MSG_C_CHAT_PHRASE					:	16,
	MsgID_S2C_BureauRank				:	17,	//	局数任务信息
	MsgID_S2C_BureauRank_Reward			:	18,	//	局数奖励
	MsgID_S2C_Test_Signal				: 	19, //  信号测试
	MsgID_C2S_Test_Signal				:	20,
	MsgID_S2C_Signal_Intensity			:	21,	//	信号强度
	MsgID_S2C_LianYing_Info				:	22, //	玩家连赢信息
	MsgID_S2C_LianShengJiang			:	23,	// 	连胜奖励通知
	MsgID_S2C_BiaoQing					:	24,	// 	玩家表情
	MsgID_C2S_BiaoQing					:	25,	// 	玩家表情
	MsgID_S2C_Task 						:	26,	// 	玩家任务发布
	MsgID_S2C_TaskResult				:	27,	// 	玩家任务结果
	MsgID_C2S_QUICK_JOIN				:	28,	// 	快速进入
	MsgID_C2S_Delay_Ready_Time			:	29,	// 	延迟发送准备
	MsgID_C2S_Double					: 	30,	//	加倍
	MsgID_S2C_Double 					:	31,
	MsgID_C2S_RenShu_Request			:	32, // 认输请求
	MsgID_S2C_RenShu_Request			:	33, // 认输请求下发(给伙伴)
	MsgID_C2S_RenShu_Response			: 	34, // 认输响应
	MsgID_S2C_RenShu_Result_Broadcast	:	35, // 认输结果
	MsgID_S2C_Can_RenShu_Broadcast		:	36, // 可以认输
	MsgID_S2C_RenShu_Reconnect			:	37, // 认输断线重连
	MsgID_S2C_RingScore                 :   38, // 荣誉分信息
	MsgID_S2C_JiPai_Broadcast           :   39,     //记牌数组
	MsgID_S2C_JPQ_State                 :   40,     //记牌器状态
	MsgID_C2S_BUY_JPQ_INGAME			:	41,		//游戏中购买记牌器
	MsgID_S2C_BUY_JPQ_INGAME			:	42,		// 游戏中购买记牌器
	MsgID_C2S_Double_Request			:   43,		//加倍
	MsgID_S2C_Double_Broadcast			:   44,		//加倍回执
	
	MSG_S2C_DeskInf_FRIEND_TEAM           	: 200,//朋友场桌子信息
	MSG_C2S_FRIEND_TEAM_Apply_Dissolution 	: 201,//客户端申请解散
	MSG_S2C_FRIEND_Dissolution_Result      	: 202,//服务器发送解散结果
	MSG_C2S_FRIEND_TEAM_Dissolution      	: 203,
	MSG_S2C_FRIEND_TEAM_Dissolution			: 204,//朋友场解散消息广播
	MSG_S2C_FRIEND_TEAM_CurrentGameState	: 205,//朋友场断线重连消息
	MSG_S2C_FRIEND_TEAM_End              	: 206,//朋友场结束
	MSG_S2C_FRIEND_TEAM_TIME_End    		: 207,//朋友场时间结束
	MSG_S2C_FRIEND_TEAM_DissolutionLeftTime : 208,//解散剩余时间
	MSG_C2S_NewClient						: 500,//标记客户端是否是新的
	MSG_C2S_FRIEND_YuYin_Result				: 501,
	MSG_S2C_FRIEND_YuYin_Broadcast          : 502,
	MSG_S2C_FRIEND_LiXian					: 503,//朋友场离线状态
    MSG_S2C_FRIEND_LiXian_Current			: 504,//朋友场离线状态断线
    MSG_S2C_ChangeDesk                      : 505,//换桌
	MSG_C2S_CeJu						  	: 505, //测距
	MSG_S2C_CeJu						  	: 506,
	MSG_C2S_YuYin 							: 507, //语音
	MSG_S2C_YuYin 							: 508,
	MSG_S2C_KickPlayerCause					: 600,//通知客户端踢人原因
	MSG_C2S_KickPlayer						: 601,//客户端通知踢人
	MSG_C2S_FRIEND_LiXian					: 602,//通知客户端玩家离线状态
	MsgID_S2C_TreasureBox_Info 				: 150,//宝箱任务信息
	MsgID_C2S_Receive_TreasureBox_Reward	: 151,//玩家点击领取宝箱奖励
	MsgID_S2C_TreasureBox_Reward 			: 152,//宝箱奖励
	MsgID_C2S_Receive_Task_Reward			: 153,//玩家点击领取任务奖励
	MsgID_C2s_Skip_Task						: 154,//玩家申请跳过任务
	MsgID_S2C_YYYReward_Current             : 3540,//摇一摇断线重连
	MsgID_S2C_Game_Again                    : 4040,//再来一局

	MsgID_C2S_FriendCfg_ZYQS : 4045,											// 请求转运求神配置
	MsgID_S2C_FriendCfg_ZYQS : 4046,											// 广播转运求神配置
	MsgID_C2S_Friend_ZYQS : 4047,												// 接收转运求神
	MsgID_S2C_Friend_ZYQS : 4048,												// 广播转运求神道具使用


	MsgID_S2C_CoinMarket_Task_Info : 4050,										//金币场宝箱2信息
    MsgID_S2C_CoinMarket_Task_Update : 4051,									//刷新任务进度
    MsgID_C2S_CoinMarket_Task_Receive : 4052,									//请求奖励
    MsgID_S2C_CoinMarket_Task_Receive : 4053,									//发送奖励信息
	MsgID_S2C_CoinMarket_Task_Close : 4054,	

	MsgID_S2C_OverTime_Dissolution : 4060,										// 超时解散提示框
	MsgID_S2C_Cancel_OverTime_Dissolution : 4061,								// 取消超时解散提示框
	MsgID_S2C_OverTime_Dissolution_Chair : 4062,								// 玩家超时自动解散
	MsgID_S2C_OverTime_Dissolution_IsOpen : 4063,								//是否开始超时解散
	MsgID_S2C_Friend_ShareInfo : 4065,										// 朋友场分享游戏规则
	MsgID_S2C_Offline_CountDown : 4066,//玩家离线倒计时
	MsgID_S2c_All_Offline_CountDown : 4067,//所有玩家离线倒计时（用于断线重连
	
	
	// 当前服务器没有实现的消息
	MsgID_S2C_Open_Vedio					: 300, //视频开关
	MsgID_S2C_Tasks							: 301, //宝箱多个任务
	MsgID_S2C_Task1							: 302, //宝箱任务
	MsgID_S2C_TaskReward					: 303, //宝箱奖励

	
}

QHSSConstant.GameState = {
	Free			:	0,
	Queue			:	1,
	Play			:	2,
	End				:	3,
}

QHSSConstant.CardType = {
	None			:	100,
	Single			:	101,
	Pair			:	102,
	Straight		:	103,  //  
	Three			:	104,
	ZaWuShiK		:	105,
	SB_King			:	106,
	ChunWuShiK		:	107,
	SS_King			:	108,
	BB_King			:	109,
	DStraight		:	110,
	Four			:	111,
	Five			:	112,
	San_King		:	113,
	Six				:	114,
	Seven			:	115,
	SSBB_King		:	116,
	Eight			:	117,
	//自己新增加的
	Three_SINGle	:118,
	Three_DOU		:119,
	Four_SINGLE		:120,
}

QHSSConstant.SortType = {
	byValue			:	0,
	byType			:	1,
	byWuShiK		:	2,
}
QHSSConstant.SORT_CARD_METHOD_COUNT = 2

// 结算界面相关
QHSSConstant.OverRoles = {
	playerAvatarAndNameRole : 1,
	rankRole : 2,
	numberRole : 3,
	sideButtonRole : 5,
	teamScoreRole : 8,
	detailScoreRole : 9,
}
QHSSConstant.OverDataKeys = {
	player : "player",
	rank : "rank",
	jianFen : "jianFen",
	chuXue : "chuXue",
	paPo : "paPo",
	yinBi : "yinBi",
	teamScore : "teamScore",
	detailScore : "detailScore",
}

// 血牌
QHSSConstant.XueType = {
	BaPao : 1, // 八张炮
	QiPao : 2, // 七张炮
	SiWang : 3, // 四张王
	WuFenPai : 4, // 无分牌
}

// 桌子上的部分元素配置位置
//QHSSConstant.desk_config = deepClone(desk4_config)
//头像
// QHSSConstant.desk_config.avatarPos = [
//     [Layout.left_bottom, cc.p(48, 44)],
//     [Layout.right_center, cc.p(-54, 150)],
//     [Layout.center_top, cc.p(229, -67)],
//     [Layout.left_center, cc.p(62, 150)]
// ]
// //出牌
// QHSSConstant.desk_config.outCardAniStartPos = [
//     [Layout.center_bottom, cc.p(0, 50)],
//     [Layout.right_center, cc.p(-50, 130.5)],
//     [Layout.center_top, cc.p(209, -67)],
//     [Layout.left_center, cc.p(50, 130.5)]
// ]
// QHSSConstant.desk_config.outCardAniEndPos = [
//     [Layout.center_bottom, cc.p(0, 288)],
//     [Layout.right_top, cc.p(-191+2, -143)],
//     [Layout.center_top, cc.p(0, -68-2)],
//     [Layout.left_top, cc.p(191+2, -143)]
// ]
// QHSSConstant.desk_config.outCardScale = [
//     0.6,
//     0.6,
//     0.6,
//     0.6,
// ]
// QHSSConstant.desk_config.cardSetAnchor = [
//     Layout.center_bottom,
//     Layout.right_top,
//     Layout.center_top,
//     Layout.left_top
// ]
// //准备
// QHSSConstant.desk_config.infoReadyPos = [
//     [Layout.center_bottom, cc.p(0, 326)],
//     [Layout.right_top, cc.p(-167, -182)],
//     [Layout.center_top, cc.p(115, -39)],
//     [Layout.left_top, cc.p(169, -181)]
// ]
// //不出
// QHSSConstant.desk_config.infoPassPos =[
//     [Layout.center_bottom, cc.p(-30, 310)],
//     [Layout.right_top, cc.p(-238, -206)],
//     [Layout.center_top, cc.p(-1, -126)],
//     [Layout.left_top, cc.p(238, -205)]
// ]
// //倒计时
// QHSSConstant.desk_config.infoTimerPos = [
//     [Layout.center_bottom, cc.p(0, 325)],
//     [Layout.right_top, cc.p(-238, -204)],
//     [Layout.center_top, cc.p(0, -122)],
//     [Layout.left_top, cc.p(238, -204)]
// ]
// //聊天框
// QHSSConstant.desk_config.chatTextOffset = [
//     cc.p(13, 120),
//     cc.p(-20, 136),
//     cc.p(-95, 65),
//     cc.p(15, 135),
// ]
// QHSSConstant.desk_config.chatTextDirection = [1, 2, 2, 1]
// QHSSConstant.desk_config.chatTextResIndex = [1, 1, 2, 1]
// //表情
// QHSSConstant.desk_config.emojiOffset = [
//     Layout.left_bottom,
//     Layout.left_bottom,
//     Layout.left_bottom,
//     Layout.left_bottom,
// ]
// //语音框
// QHSSConstant.desk_config.yuYinTextDirection = [1, 2, 2, 1]
// QHSSConstant.desk_config.yuYinTextResIndex  = [1, 1, 2, 1]
// QHSSConstant.desk_config.yuYinTextPos = [
//     cc.p(60,87),
//     cc.p(-152,115),
//     cc.p(-230,55),
//     cc.p(65,115),
// ]

// 喊话
QHSSConstant.HanhuaStartIndex = 12
QHSSConstant.HanHuaDataM = [
	{text : "单",sound : ""},
	{text : "双",sound : ""},
    {text : "顺",sound : ""},
	{text : "我来",sound : GAMES_DIR + "/QHSS/audio/M/chat_wol.mp3"},
	{text : "放他",sound : GAMES_DIR + "/QHSS/audio/M/chat_fta.mp3"},
	{text : "走吧",sound : GAMES_DIR + "/QHSS/audio/M/chat_zoub.mp3"},
	{text : "削他",sound : GAMES_DIR + "/QHSS/audio/M/chat_xta.mp3"},
	{text : "霸道",sound : ""},
]
QHSSConstant.HanHuaDataF = [
    {text : "单",sound : ""},
    {text : "双",sound : ""},
    {text : "顺",sound : ""},
    {text : "我来",sound : GAMES_DIR + "/QHSS/audio/F/chat_wol.mp3"},
    {text : "放他",sound : GAMES_DIR + "/QHSS/audio/F/chat_fta.mp3"},
    {text : "走吧",sound : GAMES_DIR + "/QHSS/audio/F/chat_zoub.mp3"},
    {text : "削他",sound : GAMES_DIR + "/QHSS/audio/F/chat_xta.mp3"},
    {text : "霸道",sound : ""},
]

//字体配置
QHSSConstant.font_config = {
    wfFontConfig : {
        "0" : "qhss_newUI/font/wf/0.png",
        "1" : "qhss_newUI/font/wf/1.png",
        "2" : "qhss_newUI/font/wf/2.png",
        "3" : "qhss_newUI/font/wf/3.png",
        "4" : "qhss_newUI/font/wf/4.png",
        "5" : "qhss_newUI/font/wf/5.png",
        "6" : "qhss_newUI/font/wf/6.png",
        "7" : "qhss_newUI/font/wf/7.png",
        "8" : "qhss_newUI/font/wf/8.png",
        "9" : "qhss_newUI/font/wf/9.png"
    },
    dfFontConfig : {
        "0" : "qhss_newUI/font/df/0.png",
        "1" : "qhss_newUI/font/df/1.png",
        "2" : "qhss_newUI/font/df/2.png",
        "3" : "qhss_newUI/font/df/3.png",
        "4" : "qhss_newUI/font/df/4.png",
        "5" : "qhss_newUI/font/df/5.png",
        "6" : "qhss_newUI/font/df/6.png",
        "7" : "qhss_newUI/font/df/7.png",
        "8" : "qhss_newUI/font/df/8.png",
        "9" : "qhss_newUI/font/df/9.png"
    },
}
QHSSConstant.BombRes = [
				"games/QHSS/images/QHSS_ain_bomb.plist",
                "games/QHSS/images/QHSS_ain_bomb.png",
                
                GAMES_DIR + "/QHSS/images/wangzha.atlas",
                GAMES_DIR + "/QHSS/images/wangzha.png",
                GAMES_DIR + "/QHSS/images/wangzha.skel",

                GAMES_DIR + "/QHSS/images/zhadan.atlas",
                GAMES_DIR + "/QHSS/images/zhadan.png",
                GAMES_DIR + "/QHSS/images/zhadan.skel",
]

QHSSConstant.logDebug =function (T,stiringNam)
{
  var table=typeof(T)

  var string="牌==="
  string= stiringNam !=null? stiringNam:string;
  if(table="table")
  {
	  for(var i in T)
	  {
		  var value=T[i]
		 var Val= QHSSUtilities.GetCardTrueValue(value);
		  var cloor=QHSSUtilities.GetCardColor(value);
		  var stiringClolor=["方片","梅花","红桃","黑桃"]
		  string=string+stiringClolor[cloor]+Val+" "
	  }
	  console.log(string)
  }
}

	
   