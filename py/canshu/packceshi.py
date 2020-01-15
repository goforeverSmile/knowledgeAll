# coding:utf-8
import argparse
parser = argparse.ArgumentParser(description='manual to this script')
#parser.add_argument("-batch-size", type=int, default=32)默认default
#parser.add_argument("-g", type=str, default="0")
#parser.add_argument("-g")
#parser.add_argument("-v", type=str, default="0")
parser.add_argument("-g", dest="game_name", help="Specify the game name to pack")
parser.add_argument("-v", help="Specify the version name to game")
#  required : 默认False, 若为 True, 表示必须输入该参数
# dest: 参数在程序中对应的变量名称 add_argument("a",dest='code_name')加了这个后，args.a 获取不到了，
#获取到的是 args.code_name
args = parser.parse_args()
if args.v :
  cmd = 'python %s -c %s -v ' % ("aaa", "bbb",args.v)
else:
  cmd = 'python %s -c %s' % ("vvvv", "bbbb") 

print(args.v)
print(args.game_name)