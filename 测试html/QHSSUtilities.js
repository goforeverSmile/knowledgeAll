
"use strict"

var QHSSUtilities = {

    //获取牌值
    GetCardTrueValue : function(byCard)
    {
        // body
        return (byCard & 0x0F)
    },


    //获取花色
    GetCardColor : function(byCard)
    {
        // body
        return Math.floor(byCard/16)
    },

    //获取单张牌的颜点数
    GetCardValue : function(_card)
    {
        // body
        if (_card === undefined)
        {
            return null 
        }

        if (_card === PKCard.Invalid)
        {
            return PKCard.Invalid
        }
        if (_card === PKCard.King_1)
        {
            return 18
        }
        if (_card === PKCard.King_2)
        {
            return 19
        }

        if (this.GetCardTrueValue(_card) < this.GetCardTrueValue(0x03))
        {
            return this.GetCardTrueValue(_card) + 13
        }
        else
        {
            return this.GetCardTrueValue(_card)
        }
    },

    // 根据GetCardValue的返回值和牌色来还原为原来的牌
    GetCardFromValue : function(_value, _color)
    {
        // body
        if (_value === undefined)
        {
            return null 
        }

        if (_value === PKCard.Invalid)
        {
            return PKCard.Invalid
        }
        if (_value === 18)
        {
            return PKCard.King_1 
        }
        if (_value === 19)
        {
            return PKCard.King_2 
        }
        if (_value > 13)
        {
            return _value-13+_color*16
        }
        else
        {
            return _value+_color*16
        }
    },

    SortByValue : function(a,b)
    {
        
        if(this.GetCardValue(a)  != this.GetCardValue(b))
        {
           return  this.GetCardValue(a) > this.GetCardValue(b)
        }
        else if(this.GetCardValue(a) ==this.GetCardValue(b))
        {
            return a>b
        }
    },
    SortReseverValue : function(a,b)
    {
        
        if(this.GetCardValue(a)  != this.GetCardValue(b))
        {
           return  this.GetCardValue(a) < this.GetCardValue(b)
        }
        else if(this.GetCardValue(a) ==this.GetCardValue(b))
        {
            return a<b
        }
    },

    //判断表里面所有的牌值是否相同
    CardPointIsSame : function(_cards)
    {
        // body
        if (_cards === undefined)
        {
            return false
        }

        if (_cards.length === 1)
        {
            return true
        }

        var firstCard
        for (var __ in _cards)
        {
            var curCard = _cards[__]
            if (firstCard === undefined)
            {
              firstCard = curCard
            }
            else if (this.GetCardValue(firstCard) != this.GetCardValue(curCard))
            {
                return false
            }
          }

          return true
    },

    // 获取所有牌总点数
    // 只能用于龙和双龙
    GetAllCardsValue : function(_cards)
    {
        // body
        var totalValue = 0
        if (_cards === undefined || _cards.length <= 0)
        {
             return totalValue
        }
        var vCard
        if (QHSSUtilities.isWangLaiziRule())
        {
            vCard = this.updateLaiziToRealCard(_cards)
        }
        else
        {
            vCard = _cards
        }

        for (var i = 0; i < vCard.length; i++)
        {
            //var cardValue = this.GetCardValue(vCard[i])
            // if (cardValue === this.GetCardValue(PKCard.Hei_1))
            // {
            //     cardValue = 14
            // }

            //顺子是1，2，就是 1，2
            var cardValue=this.GetCardTrueValue(vCard[i])
            totalValue = totalValue + cardValue
        }

        return totalValue
    },

    // 判断传入的牌是否单张牌
    IsSingle : function(_cards)
    {
        // body
        if (_cards.length != 1)
        {
            return false
        }

        return true
    },

    // 判断传入的牌是否对子
    IsPair : function(_cards)
    {
        // body
        if (_cards.length != 2)
        {
            return false
        }

        // 王当癞子
        if (QHSSUtilities.isWangLaiziRule())
        {
            var nLaiziCount = 0
            for (var i = 0; i < _cards.length; i++)
            {
                if (this.isLaizi(_cards[i]))
                {
                    nLaiziCount = nLaiziCount + 1
                }
            }
            if (nLaiziCount === 1)
            {
                return true
            }
            else if (nLaiziCount === 2)
            {
                return false
            }
        }

        if (this.CardPointIsSame(_cards))
        {
            if (_cards[0] === PKCard.King_1 || _cards[0] === PKCard.King_2)
            {
                return false
            }
            else
            {
                return true
            }
        }

        return false
    },
    // 五张牌判断  
    FiveTypeFiveType : function(_cards)
    {
        // body
        if (_cards.length != 5)
        {
            return 0
        }
        var ceShiDatas=deepClone(_cards);
        var RecondData=[];
        for(var i in ceShiDatas)
        {
            var datatg={};
            var Value=ceShiDatas[i];
            var have=false;
            for(var y in RecondData)
            {
                if(RecondData[y].value==Value)
                {
                    RecondData[y].num=RecondData[y].num+1;
                    have=true;
                }
            }
            if(!have)
            {
                datatg.value=Value;
                datatg.num=1;
                RecondData.push(datatg);
            }
        }
        var callFuntion=function(a,b)
        {
            return a.num>b.num
        }
        ArrayEx.sortByCondition(RecondData,callFuntion)
        var FirstCount=RecondData[0].num
        var secondCount=RecondData[1].num
        if(secondCount==undefined)
        {
            log("FiveTypeFiveType====有错误需要检查")
            return 0;
        }
        if(FirstCount==4)
        {
            return  QHSSConstant.CardType.Four_SINGLE
        }
        if(FirstCount==3 && secondCount==2)
        {
            return  QHSSConstant.CardType.Three_DOU
        }
        if(FirstCount==3 && secondCount==1)
        {
            return  QHSSConstant.CardType.Three_SINGle
        }
        if(FirstCount==1 )
        {
            return  QHSSConstant.CardType.Straight
        }



      
        return 0;
        
    },

    // 判断传入的牌是否炸弹，返回炸弹类型
    IsBoom : function(_cards)
    {
        // body
        if (_cards.length < 3 || _cards.length > 8)
        {
            return 0
        }
        var vCard
        var nLaiziCount = 0
        if (QHSSUtilities.isWangLaiziRule())
        {
            vCard = []
            for (var i = 0; i < _cards.length; i++)
            {
                if (this.isLaizi(_cards[i]))
                {
                    nLaiziCount = nLaiziCount + 1
                }
                else
                {
                    vCard.push(_cards[i])
                }
            }
            if (nLaiziCount === _cards.length)
            {
                return 0
            }
        }
        else
        {
            vCard = _cards
        }
        if (this.CardPointIsSame(vCard))
        {
            return vCard.length+nLaiziCount
        }

        return 0 
    },

    
    // 判断传入的牌是否飞机
    IsStraight : function(_cards)
    {
        // body
        if (_cards.length < 3 || _cards.length > 12)
        {
            return false
        }

        ArrayEx.sortByCondition(_cards, this.SortByValue.bind(this))

        for (var i = 0; i < _cards.length; i++)
        {
            if (this.GetCardValue(_cards[i]) === this.GetCardValue(PKCard.Hei_2))
            {
                return false
            }
        }

        var vCard
        var nLaiziCount = 0
        if (QHSSUtilities.isWangLaiziRule())
        {
            vCard = [] 
            for (var i = 0; i < _cards.length; i++)
            {
                if (this.isLaizi(_cards[i]))
                {
                    nLaiziCount = nLaiziCount + 1
                }
                else
                {
                    vCard.push(_cards[i])
                }
            }
        }
        else
        {
            vCard = _cards
        }

        if (vCard.length === 1)
        {
            return false
        }

        var prevCardValue = this.GetCardValue(vCard[0])
        for (var i = 1; i < vCard.length; i++)
        {
            var curCardValue = this.GetCardValue(vCard[i])
            if (prevCardValue - 1 != curCardValue)
            {
                while (nLaiziCount > 0)
                {
                    nLaiziCount = nLaiziCount - 1
                    prevCardValue = prevCardValue - 1
                    if (prevCardValue - 1 === curCardValue)
                    {
                        break
                    }
                }
                if (prevCardValue - 1 != curCardValue)
                {
                    return false
                }
            }
            prevCardValue = curCardValue
        }

        return true 
    },

    // 判断传入的牌是否双飞机
    IsDoubleStraight : function(_cards)
    {
        // body
        if (_cards.length < 6 || (_cards.length % 2 != 0) || _cards.length > 24)
        {
            return false
        }

        ArrayEx.sortByCondition(_cards, this.SortByValue.bind(this))

         for (var i = 0; i < _cards.length; i++)
         {
             if (this.GetCardValue(_cards[i]) === this.GetCardValue(PKCard.Hei_2))
             {
                 return false
            }
         }

        var vCard
        var nLaiziCount = 0
        if (QHSSUtilities.isWangLaiziRule())
        {
            vCard = [] 
            for (var i = 0; i < _cards.length; i++)
            {
                if (this.isLaizi(_cards[i]))
                {
                    nLaiziCount = nLaiziCount + 1
                }
                else
                {
                    vCard.push(_cards[i])
                }
            }
        }
        else
        {
            vCard = _cards
        }

        if (vCard.length==2 && this.GetCardValue(vCard[0]) === this.GetCardValue(vCard[1]))
        {
            return false
        }

        var prevCardValue = this.GetCardValue(vCard[0]) 
        var compareSame = true
        for (var i = 1; i < vCard.length; i++)
        {
            var curCardValue = this.GetCardValue(vCard[i])
            var ret
            if (compareSame) { ret = prevCardValue != curCardValue } else { ret = prevCardValue - 1 != curCardValue }
            if (ret)
            {
                while (nLaiziCount > 0)
                {
                    nLaiziCount = nLaiziCount - 1
                    var nextValue = compareSame && prevCardValue || prevCardValue-1
                    compareSame = ! compareSame
                    prevCardValue = nextValue 
                    var ret1
                    if (compareSame ) { ret1 =prevCardValue === curCardValue } else { ret1 = prevCardValue - 1 === curCardValue }
                    if (ret1)
                    {
                        break
                    }
                }
                var ret2
                if (compareSame ) { ret2 = prevCardValue != curCardValue } else { ret2 = prevCardValue - 1 != curCardValue }
                if (ret2)
                {
                    return false
                }
            }
            prevCardValue = curCardValue
            compareSame = ! compareSame
         }
        
        return true 
    },

    // 判断传入的牌是否王炸，返回王炸类型
    IsKingBoom : function(_cards)
    {
        // body
        if (_cards.length < 2)
        {
            return 0
        }

        var vBigKing = []
        var vSmallKing = []

        for (var __ in _cards)
        {
            var cardValue = _cards[__]
            if (cardValue === PKCard.King_1)
            {
                vSmallKing.push(cardValue)
            }
            else if (cardValue === PKCard.King_2)
            {
                vBigKing.push(cardValue)
            }
        }

        if ((vSmallKing.length + vBigKing.length) != _cards.length)
        {
            return false 
        }
        if ((vSmallKing.length === 2 && vBigKing.length === 0))
        {
            return QHSSConstant.CardType.SS_King
        }
        if ((vSmallKing.length === 1 && vBigKing.length === 1))
        {
            return QHSSConstant.CardType.SB_King
        }
        if ((vSmallKing.length === 0 && vBigKing.length === 2))
        {
            return QHSSConstant.CardType.BB_King
        }
        if ((vSmallKing.length === 2 && vBigKing.length === 1))
        {
            return QHSSConstant.CardType.San_King
        }
        if ((vSmallKing.length === 1 && vBigKing.length === 2))
        {
            return QHSSConstant.CardType.San_King
        }
        if ((vSmallKing.length === 2 && vBigKing.length === 2))
        {
            return QHSSConstant.CardType.SSBB_King
        }

        return false
    },

    //获取传入牌的牌型
    GetCardType : function(_cards)
    {
        // body
        if (! _cards || _cards.length <= 0)
        {
            return QHSSConstant.CardType.None
        }

        if (this.IsSingle(_cards))
        {
            return QHSSConstant.CardType.Single
        }
        if (this.IsPair(_cards))
        {
            return QHSSConstant.CardType.Pair
        }

        //5 张  3+2 ,4+1 ,1-1-1-1-1,
        var FIveTYpe=this.FiveTypeFiveType(_cards)
        if(FIveTYpe)
        {
            return FIveTYpe;
        }
       
        return QHSSConstant.CardType.None
    },


    getAnimateType : function(_cards)
    {
        // body
        var type = this.GetCardType(_cards)
        if (type === QHSSConstant.CardType.Single)
        {
            return PKCardType.CT_SINGLE
        }
        else if (type === QHSSConstant.CardType.Pair)
        {
            return PKCardType.CT_DOUBLE
        }
        else if (type === QHSSConstant.CardType.Straight)
        {
            return PKCardType.CT_SINGLE_CONNECT
        }
        else if (type === QHSSConstant.CardType.DStraight)
        {
            return PKCardType.CT_DOUBLE_CONNECT
        }
        else if (type - QHSSConstant.CardType.Three  && type <= QHSSConstant.CardType.Eight)
        {
            return PKCardType.CT_BOMB_FOUR
        }
        else if (type >= QHSSConstant.CardType.SS_King && type <= QHSSConstant.CardType.SSBB_King)
        {
            return PKCardType.CT_TWOKING
        }

        return PKCardType.CT_ERROR
    },

    // 计算当前出牌的分数，5得5分，10，K得10分
    CalcCardScore : function(outCards)
    {
        // body
        var iScore = 0
        for (var __ in outCards)
        {
            var singleCard = outCards[__]
            if (this.GetCardValue(singleCard) === this.GetCardValue(PKCard.Hei_5))
            {
                iScore = iScore + 5
            }
            else if (this.GetCardValue(singleCard) === this.GetCardValue(PKCard.Hei_10) 
                || this.GetCardValue(singleCard) === this.GetCardValue(PKCard.Hei_K) )
            {
                iScore = iScore + 10
            }
        }

        return iScore
    },
    isWangLaiziRule:function()
    {
        return false;
    },
    updateLaiziToRealCard : function(_cards)
    {
        if (! QHSSUtilities.isWangLaiziRule())
        {
            return _cards
        }

        var type = this.GetCardType(_cards)
        if (type === QHSSConstant.CardType.Pair ||
            type === QHSSConstant.CardType.Three ||
            type === QHSSConstant.CardType.Four ||
            type === QHSSConstant.CardType.Five ||
            type === QHSSConstant.CardType.Six ||
            type === QHSSConstant.CardType.Seven ||
            type === QHSSConstant.CardType.Eight)
        {
            var ret = []
            for (var i = 0; i < _cards.length; i++)
            {
                if (!this.isLaizi(_cards[i]))
                {
                    ret.push(_cards[i])
                }
            }
            if (ret.length === _cards.length)
            {
                return _cards
            }

            var diff = _cards.length-ret.length
            var noLaiziValue = ret[0]
            for (var i = 0; i < diff; i++)
            {
                ret.push(noLaiziValue)
            }
            return ret
        }
        else if (type === QHSSConstant.CardType.Straight)
        {
            var minCardValue = this.GetCardValue(PKCard.Hei_1)
            var haveLaizi = false
            for (var i = 0; i < _cards.length; i++)
            {
                if (!this.isLaizi(_cards[i]))
                {
                    var value = this.GetCardValue(_cards[i])
                    if (minCardValue > value)
                    {
                        minCardValue = value
                    }
                }
                else
                {
                    haveLaizi = true
                }
            }

            if (!haveLaizi)
            {
                return _cards
            }

            if (minCardValue + _cards.length > 15)
            {
                minCardValue = minCardValue - (minCardValue + _cards.length - 15)
            }
            var ret = []
            for (var i = 0; i < _cards.length; i++)
            {
                var card = this.GetCardFromValue(minCardValue+i, PKCardColor.Fang)
                ret.push(card)
            }
            return ArrayEx.reverse(ret)
        }
        else if (type === QHSSConstant.CardType.DStraight)
        {
            var minCardValue = this.GetCardValue(PKCard.Hei_1)
            var haveLaizi = false
            for (var i = 0; i < _cards.length; i++)
            {
                if (!this.isLaizi(_cards[i]))
                {
                    var value = this.GetCardValue(_cards[i])
                    if (minCardValue > value)
                    {
                        minCardValue = value
                    }
                }
                else
                {
                    haveLaizi = true
                }
            }

            if (!haveLaizi)
            {
                return _cards
            }

            if (minCardValue + _cards.length/2 > 15)
            {
                minCardValue = minCardValue - (minCardValue + _cards.length/2 - 15)
            }
            var ret = []
            for (var i = 0; i < _cards.length/2; i++)
            {
                var card = this.GetCardFromValue(minCardValue+i, PKCardColor.Fang)
                ret.push(card)
                ret.push(card)
            }
            return ArrayEx.reverse(ret)
        }

        return _cards
    },

    isLaizi : function(card)
    {
        return (card === PKCard.King_1) || (card === PKCard.King_2)
    },

    splitLaizi : function(_cards)
    {
        if (!QHSSUtilities.isWangLaiziRule())
        {
            return [_cards, []]
        }

        if (!_cards)
        {
            return [[], []]
        }

        var laizi = []
        var notLaizi = []

        for (var _ = 0; _ < _cards.length; _++)
        {
            var v = _cards[_]
            if (this.isLaizi(v))
            {
                laizi.push(v)
            }
            else
            {
                notLaizi.push(v)
            }
        }

        if (laizi.length)
        {
            ArrayEx.sortByCondition(laizi, this.SortByValue.bind(this)) // 从大到小
        }
        return [notLaizi, laizi]
    },

    // 纯五十K的颜色大小
    getColorWeightValueTable : function()
    {
        var colorValue = []
        colorValue[PKCardColor.Fang] = 2
        colorValue[PKCardColor.Mei] = 0
        colorValue[PKCardColor.Hong] = 3
        colorValue[PKCardColor.Hei] = 1
        return colorValue
    },

    // 指定类型是否属于炸弹
    isBombType : function(type)
    {
        return type == QHSSConstant.CardType.Three ||
            type == QHSSConstant.CardType.ZaWuShiK ||
            type == QHSSConstant.CardType.SB_King ||
            type == QHSSConstant.CardType.ChunWuShiK ||
            type == QHSSConstant.CardType.SS_King ||
            type == QHSSConstant.CardType.BB_King ||
            type == QHSSConstant.CardType.Four ||
            type == QHSSConstant.CardType.Five ||
            type == QHSSConstant.CardType.San_King ||
            type == QHSSConstant.CardType.Six ||
            type == QHSSConstant.CardType.Seven ||
            type == QHSSConstant.CardType.SSBB_King ||
            type == QHSSConstant.CardType.Eight
    },

    getGameData : function ()
    {
        var client = GameApp.getGameClient()
        return client.getGameData()
    },

    getGameClient : function ()
    {
        return GameApp.getGameClient()
    },

    changeToNextSortCardType : function()
    {
        var gameData = this.getGameData()
        var sortCardType = gameData.getSortCardType()
        sortCardType = (sortCardType + 1) % QHSSConstant.SORT_CARD_METHOD_COUNT
        gameData.setSortCardType(sortCardType)
    },

    isSelfAutoPlay : function()
    {
        var client = GameApp.getGameClient()
        var player = client.getPlayerSelf()
        return player.getIsAutoPlay()
    },

    convertToDefaultCardType : function(tagLZOutCard)
    {
        var ret = this.cloneObject(tagLZOutCard)
        
        switch (tagLZOutCard.OutCardType) {
            case QHSSConstant.CardType.Single:
                ret.OutCardType = PKCardType.CT_SINGLE
                return ret
            case QHSSConstant.CardType.Pair:
                ret.OutCardType = PKCardType.CT_DOUBLE
                return ret
            case QHSSConstant.CardType.Straight:
                ret.OutCardType = PKCardType.CT_SINGLE_CONNECT
                return ret
            case QHSSConstant.CardType.Three:
            case QHSSConstant.CardType.ZaWuShiK:
            case QHSSConstant.CardType.ChunWuShiK:
            case QHSSConstant.CardType.Four:
            case QHSSConstant.CardType.Five:
            case QHSSConstant.CardType.Six:
            case QHSSConstant.CardType.Seven:
            case QHSSConstant.CardType.Eight:
                ret.OutCardType = PKCardType.CT_BOMB_FOUR
                return ret
            case QHSSConstant.CardType.SB_King:
            case QHSSConstant.CardType.SS_King:
            case QHSSConstant.CardType.BB_King:
            case QHSSConstant.CardType.San_King:
            case QHSSConstant.CardType.SSBB_King:
                ret.OutCardType = PKCardType.CT_TWOKING
                return ret
            case QHSSConstant.CardType.DStraight:
                ret.OutCardType = PKCardType.CT_DOUBLE_CONNECT
                return ret
        }
    },

    cloneObject : function(obj) 
    {
        return deepClone(obj)
        // var ary = ArrayEx.deepCopy([obj])
        // return ary[0]
    }
}