cls
@echo off
set HORA_COMPLETA=%TIME%
set HORA=%HORA_COMPLETA:~0,2%
set MINUTOS=%HORA_COMPLETA:~3,2%
set SEGUNDOS=%HORA_COMPLETA:~6,2%

if %HORA% LSS 10 set HORA=0%HORA%

set FECHA_COMPLETA=%DATE%
set DIA=%FECHA_COMPLETA:~0,2%
set MES=%FECHA_COMPLETA:~3,2%
set ANIO=%FECHA_COMPLETA:~6,2%

set Version=%Anio%.%MES%.%DIA%.%HORA%%MINUTOS%
@echo version: %Version%
echo %Version% > C:\www\0-notebo-ok\public\version.txt
git add .
git commit -am "version: %Version%"