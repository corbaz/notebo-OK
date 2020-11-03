@echo off
title git stash drop@
color 9f
cls
call gstl

echo ***** Atencion
echo ***** VA a BORRAR la refencias para siempre del nro STASH que elija..?
echo ***** Precaucion .......
echo.

set /p stash=elija el nro de STASH a borrar:  
echo.
set /p sino=esta seguro de borrar el STAGH - (S)i o (N)o: 
echo.

if %sino%==s goto SI
if %sino%==S goto SI
goto No

:SI
git stash drop stash@{%stash%}
echo STASH Borrado: %stash%
echo.
echo TAREA REALIZADA
goto Fin

:NO
echo. 
echo No se realizo la tarea

:Fin