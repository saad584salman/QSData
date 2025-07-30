#!/usr/bin/env pwsh

Write-Host "🚀 Starting QSData Development Environment..." -ForegroundColor Green
Write-Host ""

# Check if Docker is running
Write-Host "🔍 Checking Docker Engine..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Docker Engine is available" -ForegroundColor Green
    } else {
        throw "Docker not available"
    }
} catch {
    Write-Host "❌ Docker Engine is not running or not installed" -ForegroundColor Red
    Write-Host "💡 Please start Docker Desktop and try again" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if .env file exists, create if not
Write-Host "🔍 Checking environment configuration..." -ForegroundColor Yellow
if (-not (Test-Path ".env")) {
    Write-Host "📝 Creating .env file with default values..." -ForegroundColor Yellow
    @"
# Database Configuration
POSTGRES_PASSWORD=postgres
DATABASE_URL=postgres://postgres:postgres@localhost:5432/qsdata

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Client Configuration
CLIENT_ORIGIN=http://localhost:5173

# Environment
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
"@ | Out-File -FilePath ".env" -Encoding UTF8
    Write-Host "✅ .env file created with default values" -ForegroundColor Green
} else {
    Write-Host "✅ .env file exists" -ForegroundColor Green
}

# Stop existing containers
Write-Host "🛑 Stopping existing containers..." -ForegroundColor Yellow
try {
    docker-compose -f docker-compose.dev.yml down 2>$null
    Write-Host "✅ Existing containers stopped" -ForegroundColor Green
} catch {
    Write-Host "ℹ️  No existing containers to stop" -ForegroundColor Blue
}

# Start the development environment
Write-Host "🚀 Building and starting containers..." -ForegroundColor Yellow
Write-Host "⏳ This may take a few minutes on first run..." -ForegroundColor Yellow
Write-Host ""

try {
    docker-compose -f docker-compose.dev.yml up --build
} catch {
    Write-Host "❌ Failed to start containers" -ForegroundColor Red
    Write-Host "💡 Check Docker Desktop is running and try again" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "🎉 Development environment is ready!" -ForegroundColor Green
Write-Host "📊 Service Status:" -ForegroundColor Cyan
Write-Host "   🗄️  Database: http://localhost:5432" -ForegroundColor White
Write-Host "   🔧 Backend API: http://localhost:3000" -ForegroundColor White
Write-Host "   🌐 Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "   📚 API Docs: http://localhost:3000/api/docs" -ForegroundColor White
Write-Host ""
Write-Host "🔧 Development Commands:" -ForegroundColor Cyan
Write-Host "   npm run dev:docker:clean  - Clean restart" -ForegroundColor White
Write-Host "   npm run docker:logs       - View logs" -ForegroundColor White
Write-Host "   npm run docker:down       - Stop containers" -ForegroundColor White
Write-Host "   npm run docker:clean      - Clean everything" -ForegroundColor White
Write-Host ""
Write-Host "💡 Hot reloading is enabled for both frontend and backend!" -ForegroundColor Green 