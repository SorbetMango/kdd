@echo off
cd /d "%~dp0"
echo Strona dziala pod adresem: http://localhost:8123
echo Zeby zatrzymac, zamknij to okno.
start "" http://localhost:8123
python serwer.py 8123
pause
