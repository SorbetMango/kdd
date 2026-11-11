@echo off
cd /d "%~dp0"
echo Panel wydarzen: http://127.0.0.1:8125
echo Zeby zatrzymac, zamknij to okno.
start "" http://127.0.0.1:8125
python tools\panel.py 8125
pause
