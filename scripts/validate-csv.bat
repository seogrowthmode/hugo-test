@echo off
echo Service Area CSV Validation Tool
echo ==============================
echo.

if "%~1"=="" (
  echo Usage: validate-csv.bat [csv-file-path]
  echo Example: validate-csv.bat ..\data\city-list.csv
  echo.
  echo Available CSV files in data directory:
  dir /b ..\data\*.csv
  echo.
  set /p FILE_PATH="Enter CSV file path (relative to scripts directory): "
) else (
  set FILE_PATH=%~1
)

echo.
echo Validating %FILE_PATH%...
echo.

node validate-service-area-csv.js %FILE_PATH%

echo.
echo Press any key to exit...
pause > nul
