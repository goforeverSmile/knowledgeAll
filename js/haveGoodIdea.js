// 按大小排序手牌
    _sortByCardIndex: function()
    {
        var sortCardFun = function (a, b)
        {
            if (a._orderIndex == b._orderIndex)
            {
                if (a.getData().cardType == b.getData().cardType)
                {
                    if (a._bHIconType == b._bHIconType)
                    {
                        if (a._orderIndexEx == b._orderIndexEx) {
                            return 0
                        } else {
                            return a._orderIndexEx > b._orderIndexEx ? -1 : 1
                        }
                    }
                    else
                    {
                        return a._bHIconType > b._bHIconType ? -1 : 1 // 防止设置好了icon又重新排序导致出错
                    }
                }
                else
                {
                    if (a.getData().cardType == b.getData().cardType) {
                        return 0
                    }
                    return a.getData().cardType > b.getData().cardType ? -1 : 1
                }
                return 0
            }
            return a._orderIndex > b._orderIndex ? -1 : 1
        }
        this.myCards.sort(sortCardFun)
        this.setCardOrderIndexEx() // 排序_orderIndex稳定后，赋值_orderIndexEx，下次排序不会有问题
        this.bHaveSort = true // 排序过了，下次排序，直接不用走setCardOrderIndexEx
    },
