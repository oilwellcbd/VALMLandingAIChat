# PowerShell script to download the logo and create a white version
$logoUrl = "https://valoansfinance.com/wp-content/themes/valm/images/logo.png"
$outputPath = "public/images/logo-white.png"

# Create the directory if it doesn't exist
$directory = Split-Path -Path $outputPath -Parent
if (-not (Test-Path -Path $directory)) {
    New-Item -ItemType Directory -Path $directory -Force
}

# Download the image
Invoke-WebRequest -Uri $logoUrl -OutFile $outputPath
Write-Host "White logo created at $outputPath"
