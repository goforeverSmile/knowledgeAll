
"use strict"

var QHSSRuleImpl = {

    // table.insert的排序条件：排序3路以上的炸弹的顺序(路数 > 牌值)
    SortByCount : function (a,b)
    {
        if (a.length > b.length)
        {
            return a.length > b.length
        }
        else if (a.length === b.length)
        {
            return QHSSUtilities.GetCardValue(a[0]) > QHSSUtilities.GetCardValue(b[0])
        }
    },

    // table.insert的排序条件：排序对子，按牌值排序
    sortCardsValue : function (cardDataA,cardDataB)
    {
        return QHSSUtilities.GetCardValue(cardDataA[0]) < QHSSUtilities.GetCardValue(cardDataB[0])
    },

    // 按照炸弹类型从小到大排序
    SortByCardType : function (a, b)
    {
        var type1 = QHSSUtilities.GetCardType(a)
        var type2 = QHSSUtilities.GetCardType(b)
        if (type1 === type2)
        {
            var v1 = QHSSUtilities.updateLaiziToRealCard(a)
            var v2 = QHSSUtilities.updateLaiziToRealCard(b)
            if (type1 === QHSSConstant.CardType.ChunWuShiK) {
                var colorValue = QHSSUtilities.getColorWeightValueTable()
                return colorValue[QHSSUtilities.GetCardColor(v1[0])] < colorValue[QHSSUtilities.GetCardColor(v2[0])]
            }
            else
            {
                return QHSSUtilities.GetCardValue(v1[0]) < QHSSUtilities.GetCardValue(v2[0])
            }
        }
        return type1 < type2
    },

    // 按typeCard表排序和分割
    SortAndSplitCards : function(_cards)
    {
        // body
        // var typeCard = [PKCard.King_2, PKCard.King_1, PKCard.Hei_2, PKCard.Hei_1, PKCard.Hei_K,
        //           PKCard.Hei_Q, PKCard.Hei_J, PKCard.Hei_10, PKCard.Hei_9, PKCard.Hei_8, PKCard.Hei_7,
        //           PKCard.Hei_6,PKCard.Hei_5,PKCard.Hei_4, PKCard.Hei_3]

        var typeCard = [ 
                    PKCard.Hei_3,PKCard.Hei_4,PKCard.Hei_5,PKCard.Hei_6,PKCard.Hei_7,PKCard.Hei_8,PKCard.Hei_9,
                    PKCard.Hei_10,PKCard.Hei_J,PKCard.Hei_Q,PKCard.Hei_K,PKCard.Hei_1,PKCard.Hei_2, PKCard.King_1,PKCard.King_2]

        var resultCards = []
        for (var i = 0; i < typeCard.length; i++)
        {
            var tempCards = []
            for (var j = 0; j < _cards.length; j++)
            {
                if (QHSSUtilities.GetCardValue(_cards[j]) === QHSSUtilities.GetCardValue(typeCard[i]))
                {
                    tempCards.push(_cards[j])
                }
            }

            if (tempCards.length > 0)
            {
                resultCards.push(tempCards)
            }
        }

        return resultCards
    },
     // 按typeCard表排序和分割
     SortAndSplitCardsToShun : function(_cards)
     {
         // body
         var typeCard = [PKCard.King_2, PKCard.King_1,PKCard.Hei_K,
                   PKCard.Hei_Q, PKCard.Hei_J, PKCard.Hei_10, PKCard.Hei_9, PKCard.Hei_8, PKCard.Hei_7,
                   PKCard.Hei_6,PKCard.Hei_5,PKCard.Hei_4, PKCard.Hei_3,PKCard.Hei_2, PKCard.Hei_1]
 
         var resultCards = []
         for (var i = 0; i < typeCard.length; i++)
         {
             var tempCards = []
             for (var j = 0; j < _cards.length; j++)
             {
                 if (QHSSUtilities.GetCardValue(_cards[j]) === QHSSUtilities.GetCardValue(typeCard[i]))
                 {
                     tempCards.push(_cards[j])
                 }
             }
 
             if (tempCards.length > 0)
             {
                 resultCards.push(tempCards)
             }
         }
 
         return resultCards
     },

    // 获取传入牌组的王炸
    GetKingBomb : function(_cards,preOutCards)
    {
        // body
        var preOutType = QHSSConstant.CardType.None
        preOutCards = preOutCards || null
        if (preOutCards != null)
        {
            preOutType = QHSSUtilities.GetCardType(preOutCards)
        }

        var maxValue = []
        var vBigKing = []
        var vSmallKing = []

        // 获取大王和小王
        for (var i = 0; i < _cards.length; i++)
        {
            var cardValue = _cards[i]
            if (QHSSUtilities.GetCardValue(cardValue) === QHSSUtilities.GetCardValue(PKCard.King_1))
            {
                vSmallKing.push(cardValue)
            }
            else if (QHSSUtilities.GetCardValue(cardValue) === QHSSUtilities.GetCardValue(PKCard.King_2))
            {
                vBigKing.push(cardValue)
            }
        }

        if (vBigKing.length + vSmallKing.length > 1)
        {
            for (var i = 0; i < vBigKing.length; i++)
            {
                maxValue.push(vBigKing[i])
            }

            for (var i = 0; i < vSmallKing.length; i++)
            {
                maxValue.push(vSmallKing[i])
            }
        }

        if (maxValue && maxValue.length > 0 && preOutType)
        {
            if (QHSSUtilities.GetCardType(maxValue) > preOutType)
            {
                return maxValue
            }
        }

        return []
    },

    // 获取传入牌组的五十K
    GetWuShiK : function(_cards, preOutCards)
    {
        // body
        var preOutType = QHSSConstant.CardType.None
        preOutCards = preOutCards || null
        if (preOutCards != null)
        {
            preOutType = QHSSUtilities.GetCardType(preOutCards)
        }

        if (preOutType > QHSSConstant.CardType.ChunWuShiK)
        {
            return []
        }

        var maxValue = []
        var tempCards = {}

        var wuCardValue = QHSSUtilities.GetCardValue(PKCard.Hei_5)
        var shiCardValue = QHSSUtilities.GetCardValue(PKCard.Hei_10)
        var kCardValue = QHSSUtilities.GetCardValue(PKCard.Hei_K)

        // 获取5、10、k
        for (var i = 0; i < _cards.length; i++)
        {
            var cardValue = _cards[i]
            var value = QHSSUtilities.GetCardValue(cardValue)
            if (value === wuCardValue || value === shiCardValue || value === kCardValue)
            {
                var color = QHSSUtilities.GetCardColor(cardValue)
                if (! tempCards[color])
                {
                    tempCards[color] = {}
                }
                if (! tempCards[color][value])
                {
                    tempCards[color][value]=1
                }
                else
                {
                    tempCards[color][value] = tempCards[color][value] + 1
                }
            }
        }

        var colorValue = QHSSUtilities.getColorWeightValueTable()

        // 纯五十K
        for (var color in tempCards)
        {
            var singleCards = tempCards[color]
            while (true)
            {
                if (singleCards[wuCardValue] && singleCards[shiCardValue] && singleCards[kCardValue])
                {
                    if ((preOutType != QHSSConstant.CardType.ChunWuShiK) ||
                    (preOutType === QHSSConstant.CardType.ChunWuShiK && (colorValue[QHSSUtilities.GetCardColor(preOutCards[0])] < colorValue[color])) ) {
                        maxValue.push([color*16+5, color*16+10, color*16+13])
                        singleCards[wuCardValue] = singleCards[wuCardValue] - 1
                        if (singleCards[wuCardValue] === 0 ) { singleCards[wuCardValue] = null }
                        singleCards[shiCardValue] = singleCards[shiCardValue] - 1
                        if (singleCards[shiCardValue] === 0 ) { singleCards[shiCardValue] = null }
                        singleCards[kCardValue] = singleCards[kCardValue] - 1
                        if (singleCards[kCardValue] === 0 ) { singleCards[kCardValue] = null }
                    }
                    else
                    {
                        break
                    }
                }
                else
                {
                    break
                }
            }
        }

        if (preOutType >= QHSSConstant.CardType.ZaWuShiK)
        {
            return maxValue
        }

        var findValue = function(t, v)
        {
            for (var color in t)
            {
                var singleCards = t[color]
                if (singleCards[v] && singleCards[v]>0)
                {
                    singleCards[v] = singleCards[v] - 1
                    if (singleCards[v] === 0 ) { singleCards[v] = null }
                    return color
                }
            }
            return null
        }

        // 杂五十K
        while (true)
        {
            var wu = findValue(tempCards, wuCardValue)
            var shi = findValue(tempCards, shiCardValue)
            var k = findValue(tempCards, kCardValue)
            if (wu && shi && k)
            {
                maxValue.push([wu*16+5, shi*16+10, k*16+13])
            }
            else
            {
                break
            }
        }

        return maxValue
    },

    // 传入的牌组中是否包含五十K
    ContainWuShiK : function(_cards)
    {
        var wuCardValue = QHSSUtilities.GetCardValue(PKCard.Hei_5)
        var shiCardValue = QHSSUtilities.GetCardValue(PKCard.Hei_10)
        var kCardValue = QHSSUtilities.GetCardValue(PKCard.Hei_K)

        var haveWuCard
        var haveShiCard
        var haveKCard

        // 获取5、10、k
        for (var i = 0; i < _cards.length; i++)
        {
            var cardValue = _cards[i]
            var value = QHSSUtilities.GetCardValue(cardValue)
            if (value === wuCardValue)
            {
                haveWuCard = true
            }
            else if (value === shiCardValue)
            {
                haveShiCard = true
            }
            else if (value === kCardValue)
            {
                haveKCard = true
            }
            if (haveWuCard && haveShiCard && haveKCard)
            {
                return true
            }
        }

        return false
    },

    GetRoad : function(_cards,preOutCards,count)
    {
        count = count && count || 3
        // body
        var preOutType = QHSSConstant.CardType.None

        preOutCards = preOutCards || []
        if (preOutCards.length > 0)
        {
            preOutType = QHSSUtilities.GetCardType(preOutCards)
        }

        var resultCards = []
        var splitCards = this.SortAndSplitCards(_cards)
        for (var __ in splitCards)
        {
            var singleCards = splitCards[__]
            if (singleCards && singleCards.length >= count)
            {
                if (QHSSUtilities.GetCardType(singleCards) > preOutType)
                {
                    resultCards.push(singleCards)
                }
                else if (QHSSUtilities.GetCardType(singleCards) === preOutType)
                {
                    var vCards1 = QHSSUtilities.updateLaiziToRealCard(singleCards)
                    var vCards2 = QHSSUtilities.updateLaiziToRealCard(preOutCards)
                    if (QHSSUtilities.GetCardValue(vCards1[0]) > QHSSUtilities.GetCardValue(vCards2[0]))
                    {
                        resultCards.push(singleCards)
                    }
                }
            }
        }

        ArrayEx.sortByCondition(resultCards, this.SortByCount)

        return resultCards
    },

    // 获取单牌
    GetSingle : function(_cards,preOutCards)
    {
        // body
        var preOutType = QHSSConstant.CardType.None
        preOutCards = preOutCards || null
        if (preOutCards && preOutCards.length > 0)
        {
            preOutType = QHSSUtilities.GetCardType(preOutCards)
        }

        if (preOutType != QHSSConstant.CardType.None && preOutType != QHSSConstant.CardType.Single)
        {
            return []
        }

        var singleCards = []

        var splitCards = this.SortAndSplitCards(_cards)
        for (var __ in splitCards)
        {
            var tempCards = splitCards[__]
            if (tempCards && tempCards.length === 1)
            {
                if (preOutType === QHSSConstant.CardType.None)
                {
                    singleCards.push(tempCards)
                }
                else if (QHSSUtilities.GetCardValue(tempCards[0]) > QHSSUtilities.GetCardValue(preOutCards[0]))
                {
                    singleCards.push(tempCards)
                }
            }
        }

        return singleCards
    },

    // 获取对子
    GetPair : function(_cards,preOutCards)
    {
        // body
        var preOutType = QHSSConstant.CardType.None
        preOutCards = preOutCards || null
        if (preOutCards != null && preOutCards.length > 0)
        {
            preOutType = QHSSUtilities.GetCardType(preOutCards)
        }

        if (preOutType != QHSSConstant.CardType.None && preOutType != QHSSConstant.CardType.Pair)
        {
            return []
        }

        var doubleCards = []
        var splitCards = this.SortAndSplitCards(_cards)
        QHSSConstant.logDebug(splitCards);
        for (var __ in splitCards)
        {
            var tempCards = splitCards[__]
            if (tempCards && tempCards.length === 2)
            {
                if (preOutType === QHSSConstant.CardType.None)
                {
                    doubleCards.push(tempCards)
                }
                else
                {
                    var vCards1 = QHSSUtilities.updateLaiziToRealCard(tempCards)
                    var vCards2 = QHSSUtilities.updateLaiziToRealCard(preOutCards)
                    if (QHSSUtilities.GetCardValue(vCards1[0]) > QHSSUtilities.GetCardValue(vCards2[0]))
                    {
                        doubleCards.push(tempCards)
                    }
                }
            }
        }

        return doubleCards
    },

    GetDStraight : function(_cards,preOutCards)
    {
        var preOutType = QHSSConstant.CardType.None

        preOutCards = preOutCards || []
        if (preOutCards.length > 0)
        {
            preOutType = QHSSUtilities.GetCardType(preOutCards)
            if (preOutType != QHSSConstant.CardType.DStraight || _cards.length < preOutCards.length)
            {
                return []
            }
        }

        // 上一次出牌的总点数
        var totalValue = QHSSUtilities.GetAllCardsValue(preOutCards)

        var resultCards = []

        var laizi = []
        var splitLsit = QHSSUtilities.splitLaizi(_cards)
        _cards = splitLsit[0]
        laizi = splitLsit[1]
        var sortTable = this.SortAndSplitCards(_cards)

        for (var j = 0; j < sortTable.length-1; j++)
        {
            if (ArrayEx.findIndex(this.getNotShunZiCardValueArray(), QHSSUtilities.GetCardValue(sortTable[j][0])) !== undefined)
            {
                continue;
            }

            var laiziCount = laizi.length
            var bContinue = true

            var tempTable = []
            var curTable = sortTable[j]
            if (curTable.length === 1)
            {
                tempTable.push(curTable[0])
                if (laiziCount > 0 && preOutType != QHSSConstant.CardType.None)
                {
                    tempTable.push(laizi[laiziCount-1])
                    laiziCount = laiziCount - 1
                }
                else
                {
                    bContinue = false
                }
            }
            else
            {
                tempTable.push(curTable[0])
                tempTable.push(curTable[1])
            }

            if (bContinue)
            {
                for (var i = j; i < sortTable.length-1; i++)
                {
                    var curCardValue = QHSSUtilities.GetCardValue(sortTable[i][0])
                    var nextCardValue = QHSSUtilities.GetCardValue(sortTable[i + 1][0])
                    if (curCardValue - 1 != nextCardValue)
                    {
                        var fix = false
                        if (preOutType != QHSSConstant.CardType.None)
                        {
                            var diff = 1
                            while (laiziCount > 1)
                            {
                                tempTable.push(laizi[laiziCount-1])
                                laiziCount = laiziCount - 1
                                tempTable.push(laizi[laiziCount-1])
                                laiziCount = laiziCount - 1
                                if (tempTable.length === preOutCards.length)
                                {
                                    fix = true
                                    break
                                }
                                diff = diff + 1
                                if (curCardValue - diff === nextCardValue)
                                {
                                    var nextTable = sortTable[i+1]
                                    if (nextTable.length === 1)
                                    {
                                        tempTable.push(sortTable[i + 1][0])
                                        if (laiziCount > 0)
                                        {
                                            tempTable.push(laizi[laiziCount-1])
                                            laiziCount = laiziCount - 1
                                        }
                                        else
                                        {
                                            break
                                        }
                                    }
                                    else
                                    {
                                        tempTable.push(sortTable[i + 1][0])
                                        tempTable.push(sortTable[i + 1][1])
                                    }
                                    fix = true
                                    break
                                }
                            }
                        }
                        if (!fix)
                        {
                            tempTable = []
                            break
                        }
                    }
                    else
                    {
                        var nextTable = sortTable[i+1]
                        if (nextTable.length === 1)
                        {
                            tempTable.push(sortTable[i + 1][0])
                            if (laiziCount > 0 && preOutType != QHSSConstant.CardType.None)
                            {
                                tempTable.push(laizi[laiziCount-1])
                                laiziCount = laiziCount - 1
                            }
                            else
                            {
                                break
                            }
                        }
                        else
                        {
                            tempTable.push(sortTable[i + 1][0])
                            tempTable.push(sortTable[i + 1][1])
                        }
                    }
                    if (QHSSUtilities.IsDoubleStraight(tempTable))
                    {
                        // 如果上个出牌是双顺
                        if (preOutType === QHSSConstant.CardType.DStraight)
                        {
                            if (tempTable.length === preOutCards.length)
                            {
                                var tempValue = QHSSUtilities.GetAllCardsValue(tempTable)
                                if (tempValue > totalValue)
                                {
                                    resultCards.push(tempTable)
                                }

                                // 清除
                                tempTable = []
                                break
                            }
                        }
                        else if (preOutType === QHSSConstant.CardType.None)
                        {
                            resultCards.push(tempTable)

                            // 清除
                            tempTable = []
                            break
                        }
                    }
                }
            }
        }

        return resultCards
    },
    //提示 顺子
    GetStraight : function(_cards,preOutCards)
    {
        log("GetStraight==========================")
        if (_cards.length < 3)
        {
            return []
        }

        // 上一次出牌的总点数
        var preValue = QHSSUtilities.GetAllCardsValue(preOutCards)

        var resultCards = []

        var laizi = []
        var splitList = QHSSUtilities.splitLaizi(_cards)
        _cards = splitList[0]
        laizi = splitList[1]
        var sortTable = this.SortAndSplitCardsToShun(_cards)

        var outCardSSort = this.SortAndSplitCardsToShun(preOutCards)

        for (var j = 0; j < sortTable.length-1; j++)
        {
            //不能做顺子的牌
            if (ArrayEx.findIndex(this.getNotShunZiCardValueArray(), QHSSUtilities.GetCardValue(sortTable[j][0])) !== undefined)
            {
                continue;
            }

            var tempTable = []
            tempTable.push(sortTable[j][0])
            var laiziCount = laizi.length
            for (var i = j; i < sortTable.length-1; i++)
            {
                var curCardValue = QHSSUtilities.GetCardValue(sortTable[i][0])
                var nextCardValue = QHSSUtilities.GetCardValue(sortTable[i + 1][0])
                if (curCardValue - 1 == nextCardValue)
                {
                    tempTable.push(sortTable[i + 1][0])
                }
                if (tempTable.length === preOutCards.length)
                {
                    var tempValue = QHSSUtilities.GetAllCardsValue(tempTable)
                    QHSSConstant.logDebug(tempTable,"顺子===")
                    if (QHSSUtilities.GetCardType(tempTable) === QHSSConstant.CardType.Straight )
                    {
                        var TempdataBig=tempTable[0];
                        var preoutCardBig=outCardSSort[0];
                        log("TempdataBig===",TempdataBig)
                        log("preoutCardBig===",preoutCardBig)
                        if(tempValue > preValue)
                        {
                            resultCards.push(tempTable)
                        }else if(tempValue == preValue && TempdataBig>preoutCardBig)
                        {
                            resultCards.push(tempTable)
                        } 
                    }

                    tempTable = []
                    break
                }
            }
        }
        return resultCards
    },

    //删除table1里面对应的table2里面的值
    DeleteAnotherTable : function(handCards,beenOut)
    {
        // body
        if (beenOut)
        {
            for (var i = 0; i < beenOut.length; i++)
            {
                var card = beenOut[i]
                ArrayEx.removeObject(handCards, card)
            }
        }

        return handCards
    },

    // 获取提示的牌组
    GetMaxCards : function(_cards,_preOutCard,_checkMode)
    {
        QHSSConstant.logDebug(_preOutCard,"打得牌是===");
        // body
         _preOutCard = _preOutCard || []
        var preOutType = QHSSUtilities.GetCardType(_preOutCard)

        var promptCards = []
        var maxValue = []
        var selfHandCards = ArrayEx.deepCopy(_cards)

        var promptCards = []
        log("preOutType===========",preOutType)
        if (preOutType === QHSSConstant.CardType.Straight)
        {
            promptCards = this.GetStraight(_cards,_preOutCard)
        }
        else if(preOutType === QHSSConstant.CardType.Pair)
        {
            promptCards=this.GetPair(_cards,_preOutCard)
        }
        else if(preOutType === QHSSConstant.CardType.Single)
        {
            promptCards=this.GetPair(_cards,_preOutCard)
        }
       

       
        if (promptCards.length > 0)
        {
            return promptCards
        }
        

        return promptCards
    },

    GetSortCards : function(_cards)
    {
        var tempCards = ArrayEx.deepCopy(_cards)
       // var sortType = QHSSUtilities.getSortCardType()
        //if (sortType === QHSSConstant.SortType.byValue)
        {
            return this._sortCardsByValue(tempCards)
        }
        // else if (sortType === QHSSConstant.SortType.byType)
        // {
        //  return this._sortCardsByCardType(tempCards)
        // }
    },

    // 按照牌值进行排序
    _sortCardsByValue : function(_cards)
    {
        ArrayEx.sortByCondition(_cards, QHSSUtilities.SortByValue.bind(QHSSUtilities))
        return _cards
    },

    // 按照牌型进行排序
    _sortCardsByCardType : function(_cards)
    {
        var promptCards = []
        var _preOutCard = null

        var maxValue = this.GetKingBomb(_cards,_preOutCard)
        if (maxValue && maxValue.length > 0)
        {
            promptCards.push(ArrayEx.reverse(maxValue))
        }
        //删除王炸的牌
        _cards = this.DeleteAnotherTable(_cards,maxValue)

        // 大于等于4张的炸弹
        maxValue = this.GetRoad(_cards,_preOutCard,4)
        for (var i = 0; i < maxValue.length; i++)
        {
            promptCards.push(maxValue[i])
        }
        //删除所有3路以上的牌
        for (var i = 0; i < maxValue.length; i++)
        {
            _cards = this.DeleteAnotherTable(_cards,maxValue[i])
        }

        // 五十K
        maxValue = this.GetWuShiK(_cards,_preOutCard)
        for (var i = 0; i < maxValue.length; i++)
        {
            promptCards.push(maxValue[i])
        }
        //删除五十K的牌
        for (var i = 0; i < maxValue.length; i++)
        {
            _cards = this.DeleteAnotherTable(_cards,maxValue[i])
        }

        maxValue = this.GetPair(_cards,_preOutCard)
        for (var i = 0; i < maxValue.length; i++)
        {
            promptCards.push(maxValue[i])
        }
        //删除所有对子的牌
        for (var i = 0; i < maxValue.length; i++)
        {
            _cards = this.DeleteAnotherTable(_cards,maxValue[i])
        }

        maxValue = this.GetSingle(_cards,_preOutCard)
        for (var i = 0; i < maxValue.length; i++)
        {
            promptCards.push(maxValue[i])
        }
        //删除所有单张的牌
        for (var i = 0; i < maxValue.length; i++)
        {
            _cards = this.DeleteAnotherTable(_cards,maxValue[i])
        }
        assert(_cards.length==0,"_cards length erro")

        // 排序 从小到大
        ArrayEx.sortByCondition(promptCards, this.SortByCardType);

        var result = []
        for (var _ in promptCards)
        {
            var cards = promptCards[_]
            for (var _ in cards)
            {
                var card = cards[_]
                result.splice(0, 0, card)
            }
        }

        return result
    },

   



    // 从选中的牌中过滤出最长的双龙
    selectDStraight : function(selectCards)
    {
        if (selectCards.length < 6)
        {
            return null
        }

        var laizi = []
        var splitLsit = QHSSUtilities.splitLaizi(selectCards)
        laizi = splitLsit[1]
        var sortTable = this.SortAndSplitCards(splitLsit[0])

        var dStraights = []
        for (var j = 0; j < sortTable.length-1; j++)
        {
            if (ArrayEx.findIndex(this.getNotShunZiCardValueArray(), QHSSUtilities.GetCardValue(sortTable[j][0])) !== undefined)
            {
                continue;
            }

            var laiziCount = laizi.length
            var bContinue = true

            var tempTable = []
            var curTable = sortTable[j]
            if (curTable.length === 1)
            {
                tempTable.push(curTable[0])
                if (laiziCount > 0)
                {
                    tempTable.push(laizi[laiziCount-1])
                    laiziCount = laiziCount - 1
                }
                else
                {
                    tempTable.pop()
                    bContinue = false
                }
            }
            else
            {
                tempTable.push(curTable[0])
                tempTable.push(curTable[1])
            }

            if (bContinue)
            {
                for (var i = j; i < sortTable.length-1; i++)
                {
                    var curCardValue = QHSSUtilities.GetCardValue(sortTable[i][0])
                    var nextCardValue = QHSSUtilities.GetCardValue(sortTable[i + 1][0])
                    if (curCardValue - 1 != nextCardValue)
                    {
                        var fix = false
                        {
                            var diff = 1
                            while (laiziCount > 1)
                            {
                                tempTable.push(laizi[laiziCount-1])
                                laiziCount = laiziCount - 1
                                tempTable.push(laizi[laiziCount-1])
                                laiziCount = laiziCount - 1
                                diff = diff + 1
                                if (curCardValue - diff === nextCardValue)
                                {
                                    var nextTable = sortTable[i+1]
                                    if (nextTable.length === 1)
                                    {
                                        tempTable.push(sortTable[i + 1][0])
                                        if (laiziCount > 0)
                                        {
                                            tempTable.push(laizi[laiziCount-1])
                                            laiziCount = laiziCount - 1
                                        }
                                        else
                                        {
                                            tempTable.pop()
                                            break
                                        }
                                    }
                                    else
                                    {
                                        tempTable.push(sortTable[i + 1][0])
                                        tempTable.push(sortTable[i + 1][1])
                                    }
                                    fix = true
                                    break
                                }
                            }
                        }
                        if (!fix)
                        {
                            j = i
                            break
                        }
                    }
                    else
                    {
                        var nextTable = sortTable[i+1]
                        if (nextTable.length === 1)
                        {
                            tempTable.push(sortTable[i + 1][0])
                            if (laiziCount > 0)
                            {
                                tempTable.push(laizi[laiziCount-1])
                                laiziCount = laiziCount - 1
                            }
                            else
                            {
                                tempTable.pop()
                                j = i
                                break
                            }
                        }
                        else
                        {
                            tempTable.push(sortTable[i + 1][0])
                            tempTable.push(sortTable[i + 1][1])
                        }
                    }
                }
                if (tempTable.length > 5)
                {
                    dStraights.push(tempTable)
                    break
                }
            }
        }

        if (dStraights.length > 0)
        {
            var ret = []
            for (var i in dStraights)
            {
                if (dStraights[i].length > ret.length)
                {
                    ret = dStraights[i]
                }
            }

            return ret
        }

        return null
    },

    // 从选中的牌中过滤出最长的龙
    selectStraight : function(selectCards)
    {
        if (selectCards.length < 3)
        {
            return null
        }

        var laizi = []
        var splitList = QHSSUtilities.splitLaizi(selectCards)
        laizi = splitList[1]
        var sortTable = this.SortAndSplitCards(splitList[0])//[[2,2,2],[1,1].......]

        var resultCards = []
        for (var j = 0; j < sortTable.length-1; j++)
        {
            if (ArrayEx.findIndex(this.getNotShunZiCardValueArray(), QHSSUtilities.GetCardValue(sortTable[j][0])) !== undefined)
            {
                continue;
            }

            var tempTable = []
            tempTable.push(sortTable[j][0])
            var laiziCount = laizi.length
            for (var i = j; i < sortTable.length-1; i++)
            {
                var curCardValue = QHSSUtilities.GetCardValue(sortTable[i][0])
                var nextCardValue = QHSSUtilities.GetCardValue(sortTable[i + 1][0])
                if (curCardValue - 1 == nextCardValue)
                {   
                    tempTable.push(sortTable[i + 1][0])
                }
            }

            if (tempTable.length > 2)
            {
                resultCards.push(tempTable)
                break
            }
        }

        if (resultCards.length > 0)
        {
            var ret = []
            for (var i in resultCards)
            {
                if (resultCards[i].length > ret.length)
                {
                    ret = resultCards[i]
                }
            }

            return ret
        }

        return null
    },

    // 获取不可用于顺子的牌值数组
    getNotShunZiCardValueArray : function()
    {
        var notShunZiCard = []
        return notShunZiCard
    },
}