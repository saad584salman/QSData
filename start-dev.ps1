Write-Host "Starting QSData Development Environment..." -ForegroundColor Green
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Yellow
Write-Host ""

# Function to stop jobs on exit
function Stop-DevJobs {
    Write-Host "`nStopping development servers..." -ForegroundColor Yellow
    Get-Job | Stop-Job
    Get-Job | Remove-Job -Force
}

# Register cleanup on exit
Register-EngineEvent PowerShell.Exiting -Action { Stop-DevJobs }

try {
    # Start backend as background job
    Write-Host "Starting backend server..." -ForegroundColor Green
    $backendJob = Start-Job -ScriptBlock { 
        Set-Location $using:PWD
        npm run dev:backend 
    }
    
    # Wait a moment
    Start-Sleep -Seconds 3
    
    # Start frontend as background job  
    Write-Host "Starting frontend server..." -ForegroundColor Green
    $frontendJob = Start-Job -ScriptBlock { 
        Set-Location $using:PWD
        npm run dev:frontend 
    }
    
    Write-Host ""
    Write-Host "Both services are starting..." -ForegroundColor Green
    Write-Host "Frontend will open automatically in your browser when ready." -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press Ctrl+C to stop both services" -ForegroundColor Gray
    Write-Host ""
    
    # Monitor jobs and show output
    while ($true) {
        # Check if jobs are still running
        if ($backendJob.State -eq "Failed" -or $frontendJob.State -eq "Failed") {
            Write-Host "One of the services failed to start. Check the output above." -ForegroundColor Red
            break
        }
        
        # Show job output
        Receive-Job $backendJob -Keep | Write-Host
        Receive-Job $frontendJob -Keep | Write-Host
        
        Start-Sleep -Seconds 1
    }
}
catch {
    Write-Host "Error occurred: $_" -ForegroundColor Red
}
finally {
    Stop-DevJobs
} 