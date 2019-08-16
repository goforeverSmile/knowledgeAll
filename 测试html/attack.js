console.log("游戏开始")
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

t.test();   //alert('test');


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
Pet.speak('Speak'); // 结果：Speak...

var Dog = {
    words:'Wang'
}

//将this的指向改变成了Dog
Pet.speak.call(Dog, 'Speak'); //结果： SpeakWang


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

checkTheSameNum(1,2,"测试第一组")
checkTheSameNum(true,1,"测试第二组")
checkTheSameNum(0,false,"测试第三组")
checkTheSameNum(0,undefined,"测试第三组")



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
ceshi1818(12)




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
console.log(layoutTable)

