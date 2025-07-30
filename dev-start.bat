@echo off
echo 🚀 Starting QSData Development Environment...
echo.

REM Check if Docker is running
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running or not installed
    echo 💡 Please start Docker Desktop and try again
    pause
    exit /b 1
)

REM Check if .env file exists, create if not
if not exist ".env" (
    echo 📝 Creating .env file with default values...
    (
        echo # Database Configuration
        echo POSTGRES_PASSWORD=postgres
        echo DATABASE_URL=postgres://postgres:postgres@localhost:5432/qsdata
        echo.
        echo # JWT Configuration
        echo JWT_SECRET=your-super-secret-jwt-key-change-in-production
        echo.
        echo # Client Configuration
        echo CLIENT_ORIGIN=http://localhost:5173
        echo.
        echo # Environment
        echo NODE_ENV=development
        echo.
        echo # Rate Limiting
        echo RATE_LIMIT_WINDOW_MS=900000
        echo RATE_LIMIT_MAX_REQUESTS=100
    ) > .env
    echo ✅ .env file created
)

REM Stop existing containers
echo 🛑 Stopping existing containers...
docker-compose -f docker-compose.dev.yml down >nul 2>&1

REM Start the development environment
echo 🚀 Starting development environment...
docker-compose -f docker-compose.dev.yml up --build

echo.
echo 🎉 Development environment started!
echo 📊 Services:
echo    🗄️  Database: http://localhost:5432
echo    🔧 Backend: http://localhost:3000
echo    🌐 Frontend: http://localhost:5173
echo.
echo 💡 Press Ctrl+C to stop all services
pause 