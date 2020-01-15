#!/usr/bin/python
#-*- coding: utf-8 -*-
import os
import subprocess

def run_shell(cmd, cwd=None, quiet=False):
    p = subprocess.Popen(cmd, shell=True, cwd=cwd)
    p.wait()

    if p.returncode:
        raise Exception('Command %s failed' % cmd)

def flat_path(p):
    return os.path.normpath(os.path.abspath(os.path.expanduser(p)))

PROJ_ROOT = flat_path(os.path.join(os.path.dirname(__file__), '../../../'))
HALL_ROOT = os.path.join(PROJ_ROOT, 'src')
TOOLS_PATH = flat_path(os.path.join(HALL_ROOT, 'tools/hall/UpdateBuilder/UpdateBuilder_js.py'))
PACK_PATH = flat_path(os.path.join(PROJ_ROOT, 'PackConfig/UpdateGames/UpdateGames_TianJin_JIXiang'))

if __name__ == "__main__":
    from argparse import ArgumentParser
    parser = ArgumentParser(prog="gen-update-pack", description="Generate hot update package for game")

    parser.add_argument("-g", dest="game_name", required=True, help="Specify the game name to pack")
    parser.add_argument("-v", dest="game_version", required=True, help="Specify the version name to game")
    (args, unknown) = parser.parse_known_args()

    game_pack_path = flat_path(os.path.join(PACK_PATH, args.game_name,'config.json'))
    print(args.game_name)
    print(args.game_version)
	if args.game_version :
	  cmd = 'python %s -c %s -v ' % (TOOLS_PATH, game_pack_path,args.game_version)
	else:
	  cmd = 'python %s -c %s' % (TOOLS_PATH, game_pack_path)    

    run_shell(cmd)
