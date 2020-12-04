
"use strict"

/*
    * 描述：数组常用接口
*/
var ArrayEx =
{
    /*
        * 描述：初始化数组，value赋值count
        * 参数：init(0xFF, 3) -> [0xFF, 0xFF, 0xFF]
    */
    init : function(value, count)
    {
        var arr = []
        for (var i = 0; i < count; i++)
        {
            arr[i] = value
        }
        return arr
    },

    /*
        * 描述：浅拷贝
    */
    copy : function(array)
    {
        return array.concat()
    },

    /*
        * 描述：深拷贝，请确保数据不会循环嵌套
    */
    deepCopy : function(array)
    {
        return deepClone(array)
    },

    /*
        * 描述：往末尾插入新的元素
    */
    addObject : function(array, obj)
    {
        array.push(obj)
        return array
    },

    /*
        * 描述：往末尾插入新的元素组
    */
    addObjects : function(array, objs)
    {
        for (var i = 0; i < objs.length; i++)
        {
            array.push(objs[i])
        }
        return array
    },

    /*
        * 描述：往最前插入新的元素
    */
    insertObject : function(array, obj)
    {
        array.unshift(obj)
        return array
    },

    /*
        * 描述：往最前插入新的元素组
    */
    insertObjects : function(array, objs)
    {
        assert(cc.isArray(array))
        assert(cc.isArray(objs))
        for (var i = objs.length-1; i >= 0; i--)
        {
            array.unshift(objs[i])
        }
        return array
    },

    /*
        * 描述：往指定位置插入元素，索引从0开始
    */
    insertObjectAtIndex : function(array, index, obj)
    {
        array.splice(index, 0, obj)
        return array
    },

    /*
        * 描述：往指定位置插入元素组，索引从0开始
    */
    insertObjectsAtIndex : function(array, index, objs)
    {
        array.splice(index, 0, objs)
        return array
    },

    /*
        * 描述：往array数组指定位置indexs插入数据objs
        * 示例：insertIndexs([2, 4, 6, 8], [0, 1], [1, 3]) ->
            [1, 2, 3, 4, 6, 8]
        * 备注：请保证indexs是从小到大排序
    */
    insertObjectsAtIndexs : function(array, indexs, objs)
    {
        assert(objs.length==indexs.length)

        for (var i = 0; i < indexs.length; i++)
        {
            var index = indexs[i] + i
            var obj = objs[i]
            this.insertObjectAtIndex(array, index, obj)
        }
        return array
    },

    /*
        * 描述：根据condFun查找第一个符合条件
        * 参数：condFun = function(obj) { return true or false }
        * 返回：找到返回对象，否则undefined
    */
    find : function(array, condFun)
    {
        for (var i = 0; i < array.length; i++)
        {
            if (condFun(array[i]))
            {
                return array[i]
            }
        }
    },

    /*
        * 描述：去除无效对象
        * 返回值：返回非无效对象数组
        * 备注：无
    */
    notEmpty : function(array) {
        var arr = [];
        array.map(function(val, index) {
            if (val !== "" && val != undefined && val != null) {
                arr.push(val);
            }
        });
        return arr;
    },
    hasEmpty: function (items) {
        for (var j = 0; j < items.length; j++) {
            var item = items[j];
            if (item == undefined)
                return true;
        }
        return false;
    },

    /*
        * 描述：找到value在array里的key值
        * 返回值：找不到返回undefined
        * 备注：因为0在js里表示false，外面判断是否存在需要 === undefined
    */
    findIndex : function(array, value)
    {
        for (var i = 0; i < array.length; i++)
        {
            if (array[i] == value)
            {
                return i
            }
        }
        return undefined
    },
    indexOf: function (array, field, val) {
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            if (item[field] == val)
                return i;
        }
        return -1;
    },
    /*
        * 描述：查找符合条件的集合
        * 参数：fun = function(cardNumber)
    */
    findSetByCondition : function(array, fun)
    {
        var values = []
        for (var i = 0; i < array.length; i++)
        {
            if (fun(array[i]))
            {
                values.push(array[i])
            }
        }
        return values
    },

    /*
        * 描述：删除第一个找到值
        * 示例：removeObject([1, 2, 2, 3, 4], 2) -> [1, 2, 3, 4]
    */
    removeObject : function(array, obj)
    {
        return this.removeObjectByCondition(array, function(object)
        {
            return object == obj
        })
    },

    /*
        * 描述：自定义条件删除对象
        * 参数：func = function(obj) { return true or false }
    */
    removeObjectByCondition : function(array, func)
    {
        for(var k in array)
        {
            if (func(array[k]))
            {
                // 移动位置
                for (var i = k; i < array.length-1; i++)
                {
                    var nextIndex = parseInt(i) + 1
                    array[i] = array[nextIndex]
                }
                array.pop()
                return array
            }
        }
        return array
    },

    /*
        * 描述：删除包含obj的所有对象
        * 示例：removeAllObject([1, 2, 2, 3, 4], 2) -> [1, 3, 4]
    */
    removeAllObject : function(array, obj)
    {
        return this.removeAllObjectByCondition(array, function(object)
        {
            return object == obj
        })
    },

    /*
        * 描述：根据自己判断条件删除对象
        * 参数：func = function(obj) {  return true or false }，返回true表示删除
        * 示例：
    */
    removeAllObjectByCondition : function(array, func)
    {
        var beginIndex = array.length - 1
        for(beginIndex; beginIndex >= 0; beginIndex--){
            if(func(array[beginIndex])){
                array.splice(beginIndex, 1)
            }
        }
        return array
    },

    /*
        * 描述：删除最后一个元素
    */
    removeLastObject : function(array)
    {
        array.pop()
        return array
    },

    /*
        * 描述：删除第一个元素
    */
    removeFirstObject : function(array)
    {
        array.shift()
        return array
    },

    /*
        * 描述：值是否存在
    */
    isValueExist : function(array, obj)
    {
        for(var k in array)
        {
            if (array[k] == obj)
            {
                return true
            }
        }
        return false
    },

    /*
        * 描述：以字符串str串联数组
        * 示例：concat([1, 2, 3], "-") -> "1-2-3"
    */
    concat : function(array, str)
    {
        return array.join(str)
    },

    /*
        * 描述：拼接两个数组，不影响原来数组
    */
    append : function(array1, array2)
    {
        return array1.concat(array2)
    },

    /*
        * 描述：将合并二维数组
        * 示例：unpack([ [1, 2], [3, 4], [5, 6] ])  -> [1, 2, 3, 4, 5, 6]
    */
    unpack : function(array)
    {
        var newArr = []
        for (var i = 0; i < array.length; i++)
        {
            var value = array[i]
            for (var j = 0; j < value.length; j++)
            {
                newArr.push(value[j])
            }
        }
        return newArr
    },

    /*
        * 描述：返回一个新的倒序结果，不改变原来
    */
    reverse : function(array)
    {
        var count = array.length
        var reverse = []
        for (var i = 0; i<count; i++)
        {
            reverse[i] = array[count - i - 1]
        }
        return reverse
    },

    /*
        * 描述：排序，默认Array的sort是按字符串排序的，这个是按整数从小到大排序
    */
    sort : function(array)
    {
        return array.sort(function(value1, value2)
        {
            if (value1 < value2)
            {
                return -1
            }
            else if (value1 > value2)
            {
                return 1
            }
            else
            {
                return 0
            }
        })
    },

    /*
        * 描述：同上，大到小排序
    */
    sortReverse : function(array)
    {
        return array.sort(function(value1, value2)
        {
            if (value1 < value2)
            {
                return 1
            }
            else if (value1 > value2)
            {
                return -1
            }
            else
            {
                return 0
            }
        })
    },

    /*
        * 描述：根据自定义条件排序，默认的排序有bug
        * 参数：condFun = function(value1, value2) { return true or false }，返回true value1排前面
    */
    sortByCondition : function(array, condFun)
    {
        var count = array.length
        if (count < 2)
        {
            return array
        }

        var newT = []
        while (count>0)
        {
            var key = this._findKey(array, condFun)
            var value = array[key]
            newT.push(value)
            ArrayEx.removeObject(array, value)
            count -= 1
        }

        for (var i = 0; i < newT.length; i++)
        {
            array[i] = newT[i]
        }
        return array
    },

    /*
        * 描述：分类排序
        * 参数：condFun = function(value) { return true or false }，返回true，值将牌在前面
        * 示例：如[1, 2, 3, 4, 5, 6]想把3、4排前面变成[3, 4, 1, 2, 5, 6]
        classify([1, 2, 3, 4, 5, 6], function(v)
        {
            return v==3 || v==4
        })
    */
    classify : function(array, condFun)
    {
        var trueArr = []
        var falseArr = []
        for (var i = 0; i < array.length; i++)
        {
            var value = array[i]
            if (condFun(value))
            {
                trueArr.push(value)
            }
            else
            {
                falseArr.push(value)
            }
        }

        for (var i = 0; i < trueArr.length; i++)
        {
            array[i] = trueArr[i]
        }

        var startIndex = trueArr.length
        for (var i = 0; i < falseArr.length; i++)
        {
            array[i + startIndex] = falseArr[i]
        }
    },

    /*
        * 描述：把数组分类成指定类型分类
        * 参数：condFun = function(v) { return key }
        * 示例：classifyToArray([ {k:1, v:"a"}, {k:1, v:"b"}, {k:2, v:"c"}, {k:2, v:"d"}, {k:3, v:"c"} ], function(v)
        {
            reutrn v.k
        }) ->
        [
            [ {k:1, v:"a"}, {k:1, v:"b"} ],
            [ {k:2, v:"c"}, {k:2, v:"d"} ],
            [ {k:3, v:"c"} ]
        ]
    */
    classifyToArray : function(array, condFun)
    {
        var tmpData = {}
        for (var i = 0; i < array.length; i++)
        {
            var value = array[i]
            var key = condFun(value)
            var data = tmpData[key] || []
            data.push(value)
            tmpData[key] = data
        }

        var newData = []
        for (var key in tmpData)
        {
            newData.push(tmpData[key])
        }
        return newData
    },

    /*====================== 华丽分割线 ======================*/

    // 根据条件找最大或最小值
    _findKey : function(t, fun)
    {
        var count = t.length
        if (t.length == 1)
        {
            return 0
        }

        var tmpKey = 0
        var tmpValue = t[tmpKey]
        for (var i = 1; i < count; i++)
        {
            var nextValue = t[i]
            if (!fun(tmpValue, nextValue))
            {
                tmpKey = i
                tmpValue = t[tmpKey]
            }
        }
        return tmpKey
    },

    unique: function (array) {// 去重
        var res = [];
        for (var i = 0, len = array.length; i < len; i++) {
            var current = array[i];
            if (res.indexOf(current) === -1) {
                res.push(current);
            }
        }
        return res;
    },

    //取交集
    jointly: function(array1, array2) {
        return array1.filter(function(v) {return array2.indexOf(v) > -1});
    }
}


