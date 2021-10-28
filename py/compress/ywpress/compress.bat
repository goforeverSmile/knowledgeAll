echo off
setlocal enabledelayedexpansion

set /p name=请输入游戏短名（多个短名可用逗号隔开）:

python compress.py %name%

pause
