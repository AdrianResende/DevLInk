@echo off
title DevLink - Servidor Local
color 0A
echo.
echo ========================================
echo        DEVLINK - SERVIDOR LOCAL
echo ========================================
echo.
echo Iniciando servidor local...
echo.
cd /d "%~dp0"
echo Diretorio atual: %CD%
echo.
echo Servidor iniciando na porta 3000...
echo URL: http://localhost:3000
echo.
echo Pressione Ctrl+C para parar o servidor
echo ========================================
echo.
http-server -p 3000 -o --cors -c-1
echo.
echo Servidor finalizado!
pause