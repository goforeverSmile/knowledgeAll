#!/usr/bin/python
# encoding=utf-8
# ���ɷ����������Ĺ����ļ�

#ע�⣺#coding=utf-8 �� = �����߲�Ҫ�ո�

import sys #������Ϳ���дģ�鵼�룬�ͱ�Ķ����ˡ�

# ֪ʶ��1��Python ��ʶ��
"""
 �� Python ���ʶ������ĸ�����֡��»�����ɡ�
 �� Python �У����б�ʶ�����԰���Ӣ�ġ������Լ��»���(_)�������������ֿ�ͷ��
 Python �еı�ʶ�������ִ�Сд�ġ�
 ���»��߿�ͷ�ı�ʶ��������������ġ��Ե��»��߿�ͷ _foo �Ĵ�����ֱ�ӷ��ʵ������ԣ���ͨ�����ṩ�Ľӿڽ��з��ʣ������� from xxx import * �����룻
 ��˫�»��߿�ͷ�� __foo �������˽�г�Ա����˫�»��߿�ͷ�ͽ�β�� __foo__ ���� Python �����ⷽ��ר�õı�ʶ���� __init__() ������Ĺ��캯����
 Python ����ͬһ����ʾ������䣬�������÷ֺ� ; �ֿ����磺
 print 'hello';print 'runoob';
 �ܽ�  1���������ֿ�ͷ 2���ִ�Сд 3�»��ߵ���������
"""
#֪ʶ��2���к�����
"""
ѧϰ Python ��������������������ǣ�Python �Ĵ���鲻ʹ�ô����� {} �������࣬�����Լ������߼��жϡ�
python �����ɫ�ľ�����������дģ�顣�����Ŀհ������ǿɱ�ģ��������д���������������ͬ�������հ�
��������������ϸ�ִ�С�
"""
#֪ʶ��3���������
"""
Python�����һ����������Ϊ���Ľ�������
�������ǿ���ʹ��б�ܣ� \����һ�е�����Ϊ������ʾ��������ʾ��
total = item_one + \
        item_three
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
����а��� [], {} �� () ���žͲ���Ҫʹ�ö������ӷ�
"""
#֪ʶ��4����ס������Ҳ�ǳ�������һ���֡�

#֪ʶ��5 ��������ͬ��һ����乹��һ������飬���ǳ�֮�����顣
"""
������ͬ��һ����乹��һ������飬���ǳ�֮�����顣
��if��while��def��class�����ĸ�����䣬�����Թؼ��ֿ�ʼ����ð��( : )����������֮���һ�л���д��빹�ɴ����顣
���ǽ����м�����Ĵ������Ϊһ���Ӿ�(clause)��

num = float(input("����һ������: "))
if num > 0:
   print("����")
elif num == 0:
   print("��")
else:
   print("����")
"""


#---------------�ؼ���-------------
# -Python���õĹؼ��� 
#and, del, from, not, while, as, elif, global, or, with, assert, else, if, pass, yield, break, except, import, print, class, exec, in, raise, 
#contiue, finally, is, return, def, for, lambda, try

# -1.and , or 
# and , or Ϊ�߼���ϵ���Python���ж�·�߼���False and ���� False 
# ��ִ�к������䣬 True or ֱ�ӷ���True����ִ�к������� 

# 2.del 
# ɾ������

# if __name__=='__main__':
    # a=1       # ���� 1 �� ����a���ã�����1�����ü�����Ϊ1
    # b=a       # ����1 ������b���ã�����1�����ü�������1
    # c=a       #1����1 ������c���ã�����1�����ü�������1
    # del a     #ɾ������a�����a��1������
    # del b     #ɾ������b�����b��1������
    # #print a   #���д˾����name 'a' is not defined��˵�� del ɾ������a
    # print(c)  #���ձ���c��Ȼ����1
    # print c
	
"""
����ע��
python ����Ҫ��������
Number(����) Boolen  None 
String(�ַ���) List(�б�) Tuple(Ԫ��) Dictionary(�ֵ�)
"""
"""
Here is a list of the Python keywords.  Enter any keyword to get more help.
�ؼ���
and                 elif                import              return
as                  else                in                  try
assert              except              is                  while
break               finally             lambda              with
class               for                 not                 yield
continue            from                or
def                 global              pass
del                 if                  raise
"""
# ���ִ�Сд
age=input("���뺯��")

print("age=", age)
del age	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	