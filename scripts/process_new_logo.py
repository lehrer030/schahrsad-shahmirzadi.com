from PIL import Image, ImageFilter
import collections
import io
import base64

img = Image.open(r'C:/Users/Emanu/.gemini/antigravity/brain/4a132277-8908-45f2-9d24-e54d30e16c1e/.user_uploaded/media_1794689091397_668d92b3.jpg').convert('RGB')
w, h = img.size

# Flood fill outer background
visited = set()
queue = collections.deque()
for x in range(w):
    for y in [0, h-1]:
        if (x, y) not in visited:
            visited.add((x, y))
            queue.append((x, y))
for y in range(h):
    for x in [0, w-1]:
        if (x, y) not in visited:
            visited.add((x, y))
            queue.append((x, y))

outer_white = set()
while queue:
    cx, cy = queue.popleft()
    r, g, b = img.getpixel((cx, cy))
    # It is white background if r > 240 and g > 240 and b > 240
    if r > 240 and g > 240 and b > 240:
        outer_white.add((cx, cy))
        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                visited.add((nx, ny))
                queue.append((nx, ny))

print('Outer white count:', len(outer_white))

# Construct alpha channel
mask = Image.new('L', (w, h), 255)
for (x, y) in outer_white:
    mask.putpixel((x, y), 0)

# Smooth edges for crisp anti-aliasing without white halo
mask_smooth = mask.filter(ImageFilter.GaussianBlur(radius=0.7))

rgba = img.convert('RGBA')
rgba.putalpha(mask_smooth)

# Crop to illustration bounds
bbox = rgba.getbbox()
print('Cropped bbox:', bbox)
cropped = rgba.crop(bbox)

# Create a square centered canvas with clean padding (4% padding)
cw, ch = cropped.size
size = max(cw, ch)
padding = int(size * 0.05)
canvas_size = size + 2 * padding
square = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
offset_x = (canvas_size - cw) // 2
offset_y = (canvas_size - ch) // 2
square.paste(cropped, (offset_x, offset_y), cropped)

# Save main logo files
square.save('public/images/schirzan-logo.png', 'PNG', optimize=True)
square.save('public/images/schirzan-logo.webp', 'WEBP', quality=95)
square.save('public/images/schirzan-logo-badge.png', 'PNG', optimize=True)
print('Saved schirzan-logo.png & .webp with canvas size:', square.size)

# Generate favicons
icon_sizes = [(16, 16), (32, 32), (48, 48)]
square.save('public/favicon.ico', format='ICO', sizes=icon_sizes)

square.resize((16, 16), Image.Resampling.LANCZOS).save('public/favicon-16x16.png', 'PNG')
square.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png', 'PNG')
square.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png', 'PNG')
square.resize((192, 192), Image.Resampling.LANCZOS).save('public/android-chrome-192x192.png', 'PNG')
square.resize((512, 512), Image.Resampling.LANCZOS).save('public/android-chrome-512x512.png', 'PNG')

# SVG Favicon with high-res PNG embedded
square_512 = square.resize((512, 512), Image.Resampling.LANCZOS)
buf = io.BytesIO()
square_512.save(buf, format='PNG')
b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><image href="data:image/png;base64,{b64}" width="512" height="512" /></svg>'
with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg)

print('All favicons and logo assets generated successfully!')
