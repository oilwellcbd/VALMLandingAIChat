# PowerShell script to download military branch logos
$logoUrls = @(
    "https://valoansfinance.com/wp-content/uploads/2013/03/logo-1.png",
    "https://valoansfinance.com/wp-content/uploads/2013/03/logo-2.png",
    "https://valoansfinance.com/wp-content/uploads/2013/03/logo-3.png",
    "https://valoansfinance.com/wp-content/uploads/2013/03/logo-4.png",
    "https://valoansfinance.com/wp-content/uploads/2013/03/logo-5.png"
)

$outputDir = "public/images/military"

# Create the directory if it doesn't exist
if (-not (Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# Download each logo
for ($i = 0; $i -lt $logoUrls.Count; $i++) {
    $outputPath = "$outputDir/logo-$($i+1).png"
    Invoke-WebRequest -Uri $logoUrls[$i] -OutFile $outputPath
    Write-Host "Downloaded logo $($i+1) to $outputPath"
}

Write-Host "All military logos downloaded successfully"
