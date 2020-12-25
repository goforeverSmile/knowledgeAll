function PrintTable(PrintDatas,stringName)
{
    if(stringName)console.log("打印=="+stringName)
    console.log(JSON.stringify(PrintDatas))
}
//弹框
function printAlert(data)
{
    alert(data)
}

//(this instanceof Vue) js的三目运算符，只能是类不能基础类型对比 比如int bool、、、、

//测试删除
function ceshiDel()
{
    var huDesCfg = [
        [ 0x00000000, "无" ],
        [ 0x00000001, "平胡" ],
        [ 0x00000002, "夹胡" ],
        [ 0x00000004, "单调" ],
        [ 0x00000008, "边胡" ],
        [ 0x00000010, "把一" ],
        [ 0x00000020, "飘把一" ],
        [ 0x00000200, "超豪华七对" ],
        [ 0x00000400, "干巴" ],
        [ 0x00000800, "夹五" ],
        [ 0x00001000, "小赌胡" ],
        [ 0x00002000, "大赌胡" ],
        [ 0x10000000, "四混加倍" ],
        [ 0x20000000, "13幺" ],
    ]
    for(i in huDesCfg)
    {
        if(huDesCfg[i][0]==0x00000010)
        {
            huDesCfg.splice(i,1,[ 0x00000010, "把一加倍"])
        }
    }
    var dataNum=[1,2,3,55,3,6,77]
    dataNum.forEach(function(num,index,arry)
    {
        PrintTable(index)
    })
    PrintTable(huDesCfg)
}

var f1=function(){console.log(1)};
var f2=function(){console.log(2)};
Function.call.call(Function.prototype.call,f2)//2
Function.call.call(f1,f2);//1




function a(c)
{
     this.b = c; 
     this.d =function()
     { alert(this.b); }
}
a.prototype.test = function()
{ 
    alert(this.b);
}
var obj = function ()
{}
obj.prototype = new a('test');
obj.prototype.test1 =function()
{ 
    alert(22222);
}
var t = new obj('test');

//t.test();   
//alert('test');

function People()
{
    this
}


window.color = 'red';
document.color = 'yellow';

var s1 = {color: 'blue' };
function changeColor()
{
    console.log(this.color);
}

//changeColor.call();         //red (默认传递参数)
//changeColor.call(window);   //red
//changeColor.call(document); //yellow
//changeColor.call(this);     //red
//changeColor.call(s1);       //blue

var Pet = {
    words : '...',
    speak : function (say) {
        console.log(say + ''+ this.words)
    }
}
//Pet.speak('Speak'); // 结果：Speak...

var Dog = {
    words:'Wang'
}

//将this的指向改变成了Dog
//Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang


function calcJushu(palyerCount)
{
    console.log("人数是========",palyerCount)
    for(var i=1;i<30;i++)
    {

        var dd=Math.floor((i-1)/palyerCount)
        console.log("局数=====",dd+1)
    }
}
function checkTheSameNum(aNum,bNum,ceshiInfo)
{
	var ceshi1_DD=aNum==bNum
	var ceshi1_DD_DD=aNum===bNum
	
	console.log("ceshiInfo==",ceshi1_DD)
	
	console.log("ceshiInfo==",ceshi1_DD_DD)
	
}

////checkTheSameNum(1,2,"测试第一组")
//checkTheSameNum(true,1,"测试第二组")
//checkTheSameNum(0,false,"测试第三组")
//checkTheSameNum(0,undefined,"测试第三组")



function sortdata()
{
	var ceshiData=[100,156,1,1,5,89,5,12,12,7,55,4,8,44,4,5,7,7,4,156]
	var sortFun=function(a,b)
	{
		if(a>b)
		{
			return -1
		}
        if(a==b)
        {
            return 0
        }
        if(a<b)
        {
            return 1
        }
	}
	ceshiData.sort(sortFun)
}

function ArratPk(ToceshiData)
{
    for(var i in ToceshiData)
    {
        console.log("i===",i,"值====",ToceshiData[i])
    }
}

function SpaceDec()
{
	console.log("取消字段中最后的空格 有没有取消成功  ")
	var ddd="dddd  ddd dfasfdas  dfasdfas  fda  "
	var ffff="连上就取消成功了"

	ddd=ddd.replace(/(\s*$)/g,"")
	ddd=ddd+ffff
	console.log(ddd)

	 var layoutTable =
				{
					4:9,
					3:10,
					2:10,
				}
	//console.log(layoutTable)
}

function DataPaiXun()
{
	var   ceShiDatas=[];
	for(var i in  PKCard)
	{
		ceShiDatas.push(PKCard[i]);
    }
	var  ceshiFunc=function(a,b)
	{
		return a>b
	}
	ArrayEx.sortByCondition(ceShiDatas,J5SKUtilities.SortByValue.bind(J5SKUtilities))
}


function toDifferData()
{

    var ceShiDatas=[PKCard.Fang_1,PKCard.Fang_5,PKCard.Hong_1,PKCard.Hei_1,
        PKCard.Fang_3,PKCard.Mei_3,PKCard.Hong_3,PKCard.Hei_3,
        PKCard.Fang_2 ,PKCard.Fang_3 ,PKCard.Fang_4 ,PKCard.Fang_5 ,PKCard.Fang_6 ,
        PKCard.Fang_7 ,PKCard.Fang_2 ,PKCard.Fang_2 ,PKCard.Fang_2,PKCard.Fang_J ,
        PKCard.Fang_5 ,PKCard.Fang_5
    ]
    
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
    console.log("differData")
}


function checkOutShunZi ()
{
    var teshiData=[PKCard.Fang_1,PKCard.Mei_2,PKCard.Mei_3,PKCard.Fang_4 ,PKCard.Fang_5 ]
    teshiData=[PKCard.Mei_3 ,PKCard.Mei_4 ,PKCard.Fang_5 ,PKCard.Fang_6 ,PKCard.Fang_7]
    var CardDataArray=[];
    for ( var key in PKCard )
	{
	    var Value = PKCard[key]
	    if ( undefined === Value || Value ==255 || Value ==0 )
	    {
	        continue
        }
        if(CardDataArray.length>24)
        {
            break;
        }
	    CardDataArray.push( Value )
	}
    QHSSRuleImpl.GetStraight(CardDataArray,teshiData);
}

function ceshiGetMaxCards(outCards)
{
    var inPairCard=[PKCard.Mei_3,PKCard.Mei_3 ]
    var CardDataArray=[PKCard.Fang_1,PKCard.Fang_5,PKCard.Hong_1,PKCard.Hei_1,
        PKCard.Fang_3,PKCard.Mei_3,PKCard.Hong_3,PKCard.Hei_3,
        PKCard.Fang_2 ,PKCard.Fang_3 ,PKCard.Fang_4 ,PKCard.Fang_5 ,PKCard.Fang_6 ,
        PKCard.Fang_7 ,PKCard.Fang_2 ,PKCard.Fang_2 ,PKCard.Fang_2,PKCard.Fang_J ,
        PKCard.Fang_5 ,PKCard.Fang_5
    ]
    QHSSRuleImpl.GetPair(CardDataArray,inPairCard);
}
function Print(ArrayData,stringName)
{
	stringName= stringName || ""
	for(var i in ArrayData)
	{
		console.log(stringName+"i===",ArrayData[i]);
	}
	
}
function copyAtoB()
{
	var arr = [1,2,3,4,5];
	var Temdp=arr.slice(1,2);
	Print(Temdp,"Temdp");
	Print(arr,"arr");
}
 
 function DelArrayData()
 {
	 var ArrayData=[
	 [1,1,1],
	 [2,2,2],
	 [222,222,222,222],
	 [31,31,31,31],
	 [43,43,43,43],
	 [32,32,32,32],
	 [2672,2672,2672,2672],
	 [65,65,65,65],
	 [202,202,202,202]
	 ]
	 var dataToCell=[]
	 for(i in ArrayData)
    {
		var data=ArrayData[i]
        if((data[0]%10)===1)
        {
            ArrayData.splice(i,1)
			dataToCell.push(data)
        }
    } 
 }

// 品阶数组
function ArrarConCat()
{
	var a = [1,2,3];
	a.concat([4,5]);
	console.log(a);
	var a = [1,2,3];
	a = a.concat([4,5]);
	console.log(a);
}

