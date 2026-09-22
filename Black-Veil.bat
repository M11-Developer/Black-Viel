@echo off
title BLACK VEIL - THE CITY FORGOT. YOU DIDN'T.
color 0B
cls
echo.
echo  ██████╗ ██╗      █████╗  ██████╗██╗  ██╗    ██╗   ██╗███████╗██╗██╗     
echo  ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║   ██║██╔════╝██║██║     
echo  ██████╔╝██║     ███████║██║     █████╔╝     ██║   ██║█████╗  ██║██║     
echo  ██╔══██╗██║     ██╔══██║██║     ██╔═██╗     ╚██╗ ██╔╝██╔══╝  ██║██║     
echo  ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗     ╚████╔╝ ███████╗██║███████╗
echo  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝      ╚═══╝  ╚══════╝╚═╝╚══════╝
echo.
echo  THE CITY FORGOT. YOU DIDN'T.
echo  Cinematic 3D Tactical Stealth Action ^| M11 Dev
echo  ────────────────────────────────────────────────
echo.

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo  [ERROR] Node.js not found!
    echo  Please install Node.js from https://nodejs.org
    echo  Then double-click this file again.
    pause
    exit /b 1
)

echo  [1/3] Checking dependencies...
if not exist "node_modules" (
    echo  Installing dependencies (first time, may take a minute)...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo  Failed to install dependencies
        pause
        exit /b 1
    )
)
echo  ✓ Dependencies OK

echo.
echo  [2/3] Checking production build...
if not exist "dist\index.html" (
    echo  Building production...
    call npm run build
    if %ERRORLEVEL% NEQ 0 (
        echo  Build failed
        pause
        exit /b 1
    )
)
echo  ✓ Build OK

echo.
echo  [3/3] Starting BLACK VEIL server...
echo  ────────────────────────────────────────────────
echo  Local:   http://localhost:4173
echo  Network: http://^<your-ip^>:4173
echo.
echo  Opening browser in 3 seconds...
echo  Press Ctrl+C to stop server
echo  ────────────────────────────────────────────────
echo.

REM Open browser after delay
start "" /B cmd /C "timeout /t 3 /nobreak >nul && start http://localhost:4173"

REM Start server - try zero-dep server.cjs first, else vite preview
if exist "server.cjs" (
    if exist "dist\index.html" (
        echo  Using zero-dependency server (no vite needed)...
        node server.cjs
    ) else (
        echo  Building first...
        call npm run build
        node server.cjs
    )
) else (
    call npm run preview
)

pause
