param([switch]$Extra)
Add-Type -AssemblyName System.Drawing
$auditDir = Join-Path $PSScriptRoot 'audit-sheets'
New-Item -ItemType Directory -Force -Path $auditDir | Out-Null
$files = @(Get-ChildItem (Join-Path $PSScriptRoot 'drop-here') -Filter *.png -File | Sort-Object Name)
$files += @(Get-ChildItem (Join-Path $PSScriptRoot '../source-art/movements') -File -Filter *.png | Sort-Object Name)
if ($Extra) { $files=@(Get-Content (Join-Path $auditDir 'extra.txt') | ForEach-Object { Get-Item -LiteralPath $_ }); $auditDir=Join-Path $auditDir 'extra'; New-Item -ItemType Directory -Force -Path $auditDir | Out-Null }
$font = New-Object System.Drawing.Font('Arial',16)
$manifest = @()
for ($offset=0; $offset -lt $files.Count; $offset+=12) {
  $sheet = New-Object System.Drawing.Bitmap(2400,1720)
  $g = [System.Drawing.Graphics]::FromImage($sheet)
  $g.Clear([System.Drawing.Color]::White)
  for ($i=0; $i -lt 12 -and ($offset+$i) -lt $files.Count; $i++) {
    $file=$files[$offset+$i]
    $im=[System.Drawing.Image]::FromFile($file.FullName)
    $x=($i%3)*800; $y=[Math]::Floor($i/3)*430
    $scale=[Math]::Min(800/$im.Width,400/$im.Height)
    $g.DrawImage($im,[int]$x,[int]$y,[int]($im.Width*$scale),[int]($im.Height*$scale))
    $label=if($file.Directory.Name -eq 'drop-here'){'new/'}else{'source/'}
    $g.DrawString(($label+$file.Name),$font,[System.Drawing.Brushes]::Black,[single]$x,[single]($y+400))
    $manifest += $file.FullName
    $im.Dispose()
  }
  $sheet.Save((Join-Path $auditDir ('sheet-{0:D2}.jpg' -f ($offset/12))),[System.Drawing.Imaging.ImageFormat]::Jpeg)
  $g.Dispose(); $sheet.Dispose()
}
$font.Dispose()
$manifest | Set-Content (Join-Path $auditDir 'manifest.txt')
Write-Output ('Images: '+$files.Count)
