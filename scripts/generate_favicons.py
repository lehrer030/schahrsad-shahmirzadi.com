from PIL import Image
import base64
import io

# Open high-res cropped logo
logo = Image.open('public/images/schirzan-logo.png')

# Create square canvas with minimal padding so favicon is square and centered
w, h = logo.size
max_dim = max(w, h)
square_logo = Image.new('RGBA', (max_dim, max_dim), (0, 0, 0, 0))
offset_x = (max_dim - w) // 2
offset_y = (max_dim - h) // 2
square_logo.paste(logo, (offset_x, offset_y), logo)

# Generate multi-size favicon.ico
icon_sizes = [(16, 16), (32, 32), (48, 48)]
square_logo.save('public/favicon.ico', format='ICO', sizes=icon_sizes)
print('Generated public/favicon.ico')

# Generate png favicons
square_logo.resize((16, 16), Image.Resampling.LANCZOS).save('public/favicon-16x16.png', 'PNG')
square_logo.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png', 'PNG')
square_logo.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png', 'PNG')
square_logo.resize((192, 192), Image.Resampling.LANCZOS).save('public/android-chrome-192x192.png', 'PNG')
square_logo.resize((512, 512), Image.Resampling.LANCZOS).save('public/android-chrome-512x512.png', 'PNG')
print('Generated PNG favicons')

# Generate public/favicon.svg with embedded high-res image
square_512 = square_logo.resize((512, 512), Image.Resampling.LANCZOS)
buffer = io.BytesIO()
square_512.save(buffer, format='PNG')
b64_png = base64.b64encode(buffer.getvalue()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/png;base64,{b64_png}" width="512" height="512" />
</svg>'''

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print('Generated public/favicon.svg successfully!')
