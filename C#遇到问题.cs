1.数组
	声明数组时，方括号 ([]) 必须跟在类型后面，而不是标识符后面。在 C# 中，将方括号放在标识符后是不合法的语法。
	int[] table; // 错的not int table[];
	//定义一个已知长度的一维数组int[] arr = new int[100];
	//定义一个未知长度，直接赋值的数组string[] name1 = new string[]{"张三"，“李四”，“王五”}
	//定义一个已知长度，直接赋值的数组string[] name1 = new string[3]{"张三"，“李四”，“王五”}
	A：int[] mf1=new int[6]; 
      //注意初始化数组的范围,或者指定初值; //包含6个元素的一维整数数组，初值1，2，3，4，5，6 
      int[] mf2=new int[6]{1,2,3,4,5,6}; 
	  //mf2[100]=100; 这个就会报错!!!!!
	  1.2
	   string  的初始化
	   sting []stirngNmae={"aaaa","bbbb"}  
	    new string[]={"aaaa","bbbb"}
2.复制
	C#中数组复制有多种方法数组间的复制，int[] pins = {9,3,4,9};int [] alias = pins;这里出了错误，也是错误的根源，以上代码并没有出错，
	但是根本不是复制，因为pins和alias都是引用，存在于堆栈中，而数据9,3,4,3是一个int对象存在于堆中，int [] alias = pins;
	只不过是创建另一个引用，alias和pins同时指向{9，3，4，3}，当修改其中一个引用的时候，
	势必影响另一个。复制的意思是新建一个和被复制对象一样的对象，在C#语言中应该有如下4种方法来复制。
	方法一：使用for循环
	int []pins = {9,3,7,2}
	int []copy = new int[pins.length];
	for(int i =0;i!=copy.length;i++)
	{
	copy[i] = pins[i];
	}
	方法二：使用数组对象中的CopyTo（）方法
	int []pins = {9,3,7,2}
	int []copy2 = new int[pins.length];
	pins.CopyTo(copy2,0);
	方法三：使用Array类的一个静态方法Copy()
	int []pins = {9,3,7,2}
	int []copy3 = new int[pins.length];
	Array.Copy(pins,copy3,copy.Length);
	方法四：使用Array类中的一个实例方法Clone（），可以一次调用，最方便，但是Clone（）方法返回的是一个对象，所以要强制转换成恰当的类类型。
	int []pins = {9,3,7,2}
	int []copy4 = (int [])pins.Clone();
	方法五：
	string[] student1 = { "$", "$", "c", "m", "d", "1", "2", "3", "1", "2", "3" };
	string[] student2 = { "0", "1", "2", "3", "4", "5", "6", "6", "1", "8", "16","10","45", "37", "82" };
	ArrayList student = new ArrayList();   
	foreach (string s1 in student1)
	{
	      student.Add(s1);                
	}
	foreach (string s2 in student2)
	{
	      student.Add(s2);
	}
	string[] copyAfter = (string[])student.ToArray(typeof(string));
	两个数组合并,最后把合并后的结果赋给copyAfter数组，这个例子可以灵活变通，很多地方可以用
	
	
c#中去掉字符串空格方法

	tt=tt.Trim()       去字符串首尾空格的函数
	tt=tt.TrimEnd() 去掉字符串尾空格
	tt=tt.TrimStart() 去掉字符串首空格
	
在C#3.0及更高版本，当属性访问器中不需要任何其他逻辑时，自动实现的属性会使属性声明更加简洁。
class program{
    public string XXXXXX{get;private set;}  // private 可加可不加，看自己
}
 Vector2 posBt = new Vector2();
https://blog.csdn.net/Anfeng0228/article/details/80083522	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	------------