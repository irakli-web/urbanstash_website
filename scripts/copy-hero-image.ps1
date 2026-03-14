# Copies the Liberty hero image from Cursor's assets to public/images
$assetsPath = Join-Path $env:USERPROFILE ".cursor\projects\c-Users-irakli-tatikishvili-Desktop-Cursor-files-UrbanStash\assets"
$destPath = Join-Path (Get-Location) "public\images\hero-liberty.png"

$file = Get-ChildItem -Path $assetsPath -Filter "*LIBERTY*" -ErrorAction SilentlyContinue | Select-Object -First 1
if ($file) {
  Copy-Item -LiteralPath $file.FullName -Destination $destPath -Force
  Write-Host "Copied hero image to public/images/hero-liberty.png" -ForegroundColor Green
} else {
  Write-Host "Hero image not found. Please manually copy your Liberty hero image to public/images/hero-liberty.png" -ForegroundColor Yellow
}
