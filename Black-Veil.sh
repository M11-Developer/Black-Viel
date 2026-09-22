#!/bin/bash
# BLACK VEIL — One-Click Launcher (Linux / macOS)
# Just double-click or run: ./Black-Veil.sh

# Colors
CYAN='\033[0;36m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BRIGHT='\033[1m'
DIM='\033[2m'
RESET='\033[0m'

clear
echo -e "${CYAN}"
cat << "EOF"
  ██████╗ ██╗      █████╗  ██████╗██╗  ██╗    ██╗   ██╗███████╗██╗██╗     
  ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║   ██║██╔════╝██║██║     
  ██████╔╝██║     ███████║██║     █████╔╝     ██║   ██║█████╗  ██║██║     
  ██╔══██╗██║     ██╔══██║██║     ██╔═██╗     ╚██╗ ██╔╝██╔══╝  ██║██║     
  ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗     ╚████╔╝ ███████╗██║███████╗
  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝      ╚═══╝  ╚══════╝╚═╝╚══════╝
EOF
echo -e "${RESET}"
echo -e "${BRIGHT}${BLUE}  THE CITY FORGOT. YOU DIDN'T.${RESET}"
echo -e "${DIM}  Cinematic 3D Tactical Stealth Action • M11 Dev${RESET}"
echo -e "${DIM}  ────────────────────────────────────────────────${RESET}"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}  [ERROR] Node.js not found!${RESET}"
    echo -e "  Please install Node.js from https://nodejs.org"
    echo -e "  Then run this file again."
    read -p "  Press Enter to exit..."
    exit 1
fi

# Get script dir
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo -e "${YELLOW}  [1/3] Checking dependencies...${RESET}"
if [ ! -d "node_modules" ]; then
    echo -e "  Installing dependencies (first time, may take a minute)..."
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}  Failed to install dependencies${RESET}"
        read -p "  Press Enter to exit..."
        exit 1
    fi
fi
echo -e "${GREEN}  ✓ Dependencies OK${RESET}"

echo ""
echo -e "${YELLOW}  [2/3] Checking production build...${RESET}"
if [ ! -f "dist/index.html" ]; then
    echo -e "  Building production..."
    npm run build
    if [ $? -ne 0 ]; then
        echo -e "${RED}  Build failed${RESET}"
        read -p "  Press Enter to exit..."
        exit 1
    fi
fi
echo -e "${GREEN}  ✓ Build OK${RESET}"

echo ""
echo -e "${YELLOW}  [3/3] Starting BLACK VEIL server...${RESET}"
echo -e "${DIM}  ────────────────────────────────────────────────${RESET}"
echo -e "${CYAN}  Local:   http://localhost:4173${RESET}"
echo -e "${DIM}  Network: http://<your-ip>:4173${RESET}"
echo ""
echo -e "  Opening browser in 3 seconds..."
echo -e "  Press Ctrl+C to stop server"
echo -e "${DIM}  ────────────────────────────────────────────────${RESET}"
echo ""

# Open browser after delay (platform specific)
(
    sleep 3
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "http://localhost:4173"
        osascript -e 'display notification "Game running at http://localhost:4173" with title "BLACK VEIL"' 2>/dev/null || true
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open "http://localhost:4173" 2>/dev/null || sensible-browser "http://localhost:4173" 2>/dev/null || true
        notify-send "BLACK VEIL" "Game running at http://localhost:4173" -i dialog-information 2>/dev/null || true
    fi
) &

# Start server - try zero-dep server.cjs first
if [ -f "server.cjs" ] && [ -f "dist/index.html" ]; then
    echo -e "${DIM}  Using zero-dependency server (no vite needed)...${RESET}"
    node server.cjs
else
    if [ ! -f "dist/index.html" ]; then
        echo -e "  Building first..."
        npm run build
    fi
    if [ -f "server.cjs" ]; then
        node server.cjs
    else
        npm run preview
    fi
fi

# Keep terminal open on exit
echo ""
echo -e "${YELLOW}  Server stopped. Press Enter to exit...${RESET}"
read
