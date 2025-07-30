@echo off
echo Starting QSData Development Environment...
echo.
echo Backend will run on: http://localhost:3000
echo Frontend will run on: http://localhost:5173
echo.

REM Start backend in new window with correct directory
start "QSData Backend" cmd /k "cd /d %~dp0 && npm run dev:backend"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend in new window with correct directory
start "QSData Frontend" cmd /k "cd /d %~dp0 && npm run dev:frontend"

echo.
echo Both services are starting in separate windows...
echo Press any key to exit this launcher.
pause >nul 