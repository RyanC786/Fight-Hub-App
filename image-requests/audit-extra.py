from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
root=Path(__file__).parent/'audit-sheets'
paths=[Path(p) for p in (root/'extra.txt').read_text(encoding='utf-8-sig').splitlines() if p]
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',20)
for offset in range(0,len(paths),12):
    sheet=Image.new('RGB',(2400,1720),'white')
    draw=ImageDraw.Draw(sheet)
    for i,p in enumerate(paths[offset:offset+12]):
        with Image.open(p) as source:
            im=source.convert('RGB'); im.thumbnail((800,400))
            x=(i%3)*800;y=(i//3)*430
            sheet.paste(im,(x,y))
            draw.text((x,y+400),p.parent.name+'/'+p.name,font=font,fill='black')
    sheet.save(root/'extra'/f'sheet-{offset//12:02}.jpg')
print(len(paths))
