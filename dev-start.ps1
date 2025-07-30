Write-Host "Starting QSData Development Environment..." -ForegroundColor Green
Write-Host ""
Write-Host "Backend will run on: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Frontend will run on: http://localhost:5173" -ForegroundColor Yellow
Write-Host ""

# Get current directory
$currentDir = Get-Location

# Start backend in new PowerShell window with correct working directory
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$currentDir'; npm run dev:backend" -WindowStyle Normal

# Wait for backend to start
Start-Sleep -Seconds 3

# Start frontend in new PowerShell window with correct working directory
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$currentDir'; npm run dev:frontend" -WindowStyle Normal

Write-Host "Both services are starting in separate windows..." -ForegroundColor Green
Write-Host "Frontend will automatically open in your browser when ready." -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to exit this launcher..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 