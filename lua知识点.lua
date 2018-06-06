--[[lua是一个动态脚本语言
主要分为： lua的数据类型、lua的栈、lua的内存。最近也在网上狂搜了一些lua的资源，我发现以后三方面的知识算是lua比较核心的一些东西
Lua栈

    Lua中的数据类型：Nil、Booleans、Numbers、Strings、Functions、UserData。

    Nil它只有一个值:nil, 一个未初始化的全局变量默认是nil， 而且可以通过将全局变量设置为nil来把它删除。

    Booleans两个取值true和false，大家应该比较了解，但要注意 Lua中所有的值都可以作为条件，你只要记住在控制结构的条件中
   除了flase和nil为否外，其它任何值都为真，包换0和空串，这样你就不会混淆了
    Numbers表示实数，Lua没有整数。它表数示Lua中的数字。
   Strings:字符串没有什么好说， 这里只提一下Lua有关字符串的运算吧，字符串与数字的”+”运算，字符串会自动转换成数字类型。
	如果想将一个数字与字符串连接，使用 .. 两点运算符。--]]
	
	
	
	--例如：
string.sub(s,i [,j])--:取s中从i开始到j为止的自字符串.默认j为长度.-i表示倒数.
s = "[abc]"
string.len(s)       -- <==返回5

string.rep("abc", 2)-- <==返回"abcabc"
string.lower("ABC")-- <==返回"abc"
string.upper("abc") --<==返回"ABC"
string.sub(s, 2)    -- <==返回"abc]"
string.sub(s, -2)   -- <==返回"c]"
string.sub(s, 2, -2)-- <==返回"abc"
string.format(fmt, ...)--返回一个类似printf的格式化字符串

--怎么定义附子
--在MJConstan中我定义一个 MJCard.FuZi = class("FuZi")
MJCard.FuZi = class("FuZi")
function MJCard.FuZi:ctor()
	self.weaveKind1 = 0 		-- 动作类型1，新服务器表示的是ActionTypeN
	self.weaveKind2 = 0 						-- 动作类型2，新服务器该值无用
	self.provideUser = 0 						-- 供应用户
	self.operateCard = MJCard.CardValue_Inval	-- 操作牌
	self.tiHuiCard = MJCard.CardValue_Inval		-- 有会杠的时候，提的会牌
	self.cardData = {0,0,0,0}					-- 麻将牌值
	self.cardCount = {0,0,0,0}					-- 麻将牌的数量，用于特殊杠
	self.yaoJiCard = 0 							-- 小鸡牌的数量
end
--就这样定以的

---关于引入的错误
local XT_Define = import(".XT_Define")--本色的现象是在base底下，让后我在replay底下用（base和repaly同一级别）会报错的

---匿名函数  在触摸会用到
--这里就先声明了一个匿名函数,并且把这个匿名函数赋值给变量fun 这就叫匿名函数

--二位数组怎么定义的
self.ArrayAllCardPIc={};
for i,v in pairs(self.ArrayAllCard) do
   		local sp = self:getSprite(v);
   		if sp then
   			print("sp是否为空",sp,i)
   			self.ArrayAllCardPIc[i] = {}--这一步
   		 	self.ArrayAllCardPIc[i][1]=sp;
   		 	self.ArrayAllCardPIc[i][2]=v;
   		end
   		
   	end   


    --以前不知道lua表定义
     local functionTable={
        ["QuickJoinGame"]=function(params)
            if hallmanager and hallmanager:IsConnected() then
                hallmanager:JoinRoomByGameId(params)
            end
        end
      }
	
	
	--作用域  注意了这个没有函数里面所有下面可以用
	local popupGoodsInfo = {
    -- 对应文档连胜计费点
    ["goods150"] = { viewName = "popupGoodsView.AceBuyView", name = "高手特价礼包" },
    ["goods151"] = { viewName = "popupGoodsView.AceBuyView", name = "高手特价礼包" },
	}

-- web 下发数据的字段名
local webDataKeys = { "price", "ori_price", "limit", "prop", "ext_ratio", "name" }

--[[
@brief 合并计费点数据
@param cfg 计费点配置数据
]]
local function mergeCfgData(cfg)
    for k, v in pairs(popupGoodsInfo) do
        -- 这里只刷新指定的配置数据字段
        for i, key in ipairs(webDataKeys) do
            if type(cfg[k]) == "table" then
                if key == "price" or key == "ori_price" then
                    -- 价格和原价需要从分改为元
                    v[key] = cfg[k][key] / 100
                else
                    v[key] = cfg[k][key]
                end
            elseif key ~= "name" then
                -- 这里排除 name 字段，是为了保证远程没有下发 name 字段时，使用本地的 name 字段
                v[key] = nil
            end
        end

        -- 将 goods id 写入数据的 table 中，下单时需要
        v.goods = k
    end
end
	
	
	function MathTools:Add( a,b )  
    -- body  
    print(a+b)  
end  
  
MathTools.Add(self,10,20)  
MathTools:Add(10,20)  
-- 如果使用 点 来调用函数，第一个参数必须是 self ，self的作用是指明函数作用与谁。
-- 如果使用冒号 来调用函数，就可以省略self，这是语法糖

--[[
    * 描述：遍历座位号
    * 参数：fun执行函数
	***********************自己回调怎么写
--]]
function Enum:foreachChair(fun) ---这个就是回调函数
	assert(fun)
    for chair=Enum.Chair.Begin,Enum.Chair.End do
    	fun(chair)
    end
end

--[[
    * 描述：加载单杠牌标识
    * 参数：chair 玩家椅子号
    * 参数：card 用户单杠的牌
--]]
function M:updataGangSign(chair)
    Enum:foreachChair(function (chair)
        XT_MarkCard:GangAddSign(chair);
    end)

    
end

---下标导致取值错误
--下面错误的认识
 self.laizi= MarkCard.new(); 
 self.MarkCardArray[0]= self.laizi ---错误
for i,v in ipairs( #self.MarkCardArray) do
  print("0下标导致我一直进不来后来改为下面")
  self.MarkCardArray[1]= self.laizi
end



----lua 很重要的只是 
local newData = MultipleSort:create(overInfo)
--==============================--
--desc:  MultipleSort
--time:2018-05-02 06:03:38
--@data:
--@return 
--==============================---
function MultipleSort:ctor(data)
	assert("table"==type(data))

	self._multipleData = { data }
end

--[[
    * 描述：排序分类
    * 参数：fun = function(value)由外部判断是否分类，比如胡牌玩家排最前 
--]]
function MultipleSort:sortClassify(fun)
    assert(fun)

    local isData = {}
    local notData = {}
    for _,data in ipairs(self._multipleData) do
    	for _,value in ipairs(data) do
    		local res = fun(value)
    		local tmpData = res and isData or notData --重点lua中这等tempData 有是是isData 列表 有时是noData列表  如果要拷贝用clone
    		table.insert(tmpData, value)
    	end
    end

    self._multipleData = {}
    if #isData>0 then
    	table.insert(self._multipleData, isData)    
    end

    if #notData>0 then
    	table.insert(self._multipleData, notData)    
    end
    return self
end
function MultipleSort:sortSize(fun)
    assert(fun)

    for _,data in ipairs(self._multipleData) do
    	table.sort(data, fun)
    end
    return self
end



local newtable = clone(a)  


-----
----函数重写

-- 录音按钮位置
function M:s_getRecordBtPosition()
    local offsetHeight = MJSettingData:is2D() and 50 or 20
    return cc.p(display.width-50, display.cy - offsetHeight)
end

   if buttonsLayer.s_getTalkBtPosition then
        buttonsLayer.s_getTalkBtPosition = function (self)
            local offsetHeight = MJSettingData:is2D() and 140 or 100
            return cc.p(display.width-50, display.cy - offsetHeight - 50)
        end
    end
	---------------------华丽分割--------------------
