console.log("游戏开始")
document.write("<script type='text/javascript' src='PKCard.js'></script>"); 
//import 'js2.js';

function ceshiFun()
{

       
}
//测试删除
function ceshiDel()
{

    var dataNum=[1,undefined,3,undefined,3,6,77]

    for(i in dataNum)
    {
        if(dataNum[i]==undefined)
        {
            dataNum.splice(i,1)
        }
    }

}

ceshiDel()

var f1=function(){console.log(1)};
var f2=function(){console.log(2)};
Function.call.call(Function.prototype.call,f2)//2
Function.call.call(f1,f2);//1


var dataNum=[1,2,3,55,3,6,77]
dataNum.forEach(function(num,index,arry)
{
    //console.log("num=======",index)
})

// function aProTo(c)
// { 
//     this.b = "dddddd"; 
//     this.d =function()
//     { alert(this.b); }
// }
// console.dir(aProTo.prototype)
// var obj  = new aProTo('cheshi01');
// console.log("b---", obj.__proto__.b);  //
// var obj2 = new aProTo('cheshi02');
// console.log(typeof obj.prototype);//undefinealert(typeof a.prototype);//object
// console.log(typeof obj);  //
// console.log("b", obj.__proto__.b);  //


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

//t.test();   //alert('test');


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
      //  console.log("i=====",i)
        //console.log("dd=====",dd)
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
	
	for(var key in  ceshiData)
	{
		console.log("==zhi=========",ceshiData[key])
	}

	
}

function ceshi1818(num)
{
    var ToceshiData=[]
    ToceshiData[num]=num
    for(var i in ToceshiData)
    {
        console.log("i===",i,"值====",ToceshiData[i])
    }
}

function ArratPk(ToceshiData)
{
    for(var i in ToceshiData)
    {
        console.log("i===",i,"值====",ToceshiData[i])
    }
}
//ArratPk(PKCard)


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
    
//          ceShiDatas=[  // 51：Hei_3  3：Fang_3  35：Hong_3  19：Mei_3
//         51,3,3,35,19
//    ]

//    ceShiDatas=[PKCard.Fang_1,PKCard.Mei_1,PKCard.Hong_1,PKCard.Hei_1,
//     PKCard.Fang_3,PKCard.Mei_3,PKCard.Hong_3,PKCard.Hei_3,
//     PKCard.Fang_2 ,PKCard.Fang_3 ,PKCard.Fang_4 ,PKCard.Fang_5 ,PKCard.Fang_6 ,
//     PKCard.Fang_7 ,PKCard.Fang_8 ,PKCard.Fang_9 ,PKCard.Fang_10,PKCard.Fang_J ,
//     PKCard.Fang_Q ,PKCard.Fang_K
// ]
 
	//ceShiDatas.sort(function(){return Math.random()>0.5?-1:1;})
	var  ceshiFunc=function(a,b)
	{
		return a>b
	}
	ArrayEx.sortByCondition(ceShiDatas,J5SKUtilities.SortByValue.bind(J5SKUtilities))
	//ArrayEx.sortByCondition(ceShiDatas,ceshiFunc)
	console.log("数据打乱重新排序=================")
	
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
    //teshiData=[PKCard.Fang_6 ,PKCard.Fang_7 ,PKCard.Fang_8 ,PKCard.Fang_9 ,PKCard.Fang_10]
    //teshiData= [PKCard.Fang_10,PKCard.Fang_J , PKCard.Fang_Q ,PKCard.Fang_K]

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
    //singleCard=[PKCard.Mei_3 ]
    var CardDataArray=[PKCard.Fang_1,PKCard.Fang_5,PKCard.Hong_1,PKCard.Hei_1,
        PKCard.Fang_3,PKCard.Mei_3,PKCard.Hong_3,PKCard.Hei_3,
        PKCard.Fang_2 ,PKCard.Fang_3 ,PKCard.Fang_4 ,PKCard.Fang_5 ,PKCard.Fang_6 ,
        PKCard.Fang_7 ,PKCard.Fang_2 ,PKCard.Fang_2 ,PKCard.Fang_2,PKCard.Fang_J ,
        PKCard.Fang_5 ,PKCard.Fang_5
    ]
   // QHSSRuleImpl.GetMaxCards(CardDataArray,inPairCard,false);
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
	//concat()把两个或者多个数组链接在一起，但是不改变已经存在的数组
	//而是返回一个链接之后的新数组
	var a = [1,2,3];
	a.concat([4,5]);
	console.log(a);
	//此处输出为 [1, 2, 3]

	var a = [1,2,3];
	a = a.concat([4,5]);
	console.log(a);
	//此处输出为 [1, 2, 3 ,4 ,5]
	//看书时不细心，导致在项目中调试了2个小时才发现这个bug,引以为戒。

}

var TJAreaGameManager =
{
    // OverLogicInterface
	m_gameManager:{},
	gameName :"",
    registerClassName : function(GameName, className,gameobject)
    {
        this.gameName=GameName;
        if(this.m_gameManager[GameName]==undefined)
        {
            this.m_gameManager[GameName]={}
            this.m_gameManager[GameName][className]=gameobject
        }
        
    },

    getOverLogicInterface:function()
    {
        return this.m_gameData[this.gameName]["OverLogicInterface"]
    },
};
TJAreaGameManager.registerClassName("aa","bb",11)
