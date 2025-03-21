#!/bin/bash

echo "Service Area CSV Validation Tool"
echo "=============================="
echo

if [ -z "$1" ]; then
  echo "Usage: ./validate-csv.sh [csv-file-path]"
  echo "Example: ./validate-csv.sh ../data/city-list.csv"
  echo
  echo "Available CSV files in data directory:"
  ls -1 ../data/*.csv 2>/dev/null || echo "No CSV files found"
  echo
  read -p "Enter CSV file path (relative to scripts directory): " FILE_PATH
else
  FILE_PATH="$1"
fi

echo
echo "Validating $FILE_PATH..."
echo

node validate-service-area-csv.js "$FILE_PATH"

echo
echo "Press Enter to exit..."
read
