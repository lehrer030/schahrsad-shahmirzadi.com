import re
import os
import xml.sax.saxutils as saxutils

LANGUAGES = ['de', 'en', 'fa', 'fr', 'it', 'tr']
BASE_URL = 'https://schirzan.com'

# Key section anchors
SECTIONS = [
    ('', 1.0, 'weekly'),
    ('#architecture', 0.9, 'monthly'),
    ('#solitaire-1', 0.9, 'monthly'),
    ('#solitaire-2', 0.9, 'monthly'),
    ('#further-architecture', 0.8, 'monthly'),
    ('#fine-art', 0.9, 'monthly'),
    ('#social-environmental', 0.9, 'monthly'),
    ('#portraits', 0.9, 'monthly'),
    ('#biography', 0.8, 'monthly'),
    ('#kickboxing', 0.8, 'monthly'),
    ('#water-protection', 0.8, 'monthly'),
    ('#press', 0.8, 'monthly'),
    ('#awards', 0.8, 'monthly'),
    ('#galerie', 0.8, 'monthly'),
    ('#contact', 0.7, 'monthly'),
    ('#impressum', 0.5, 'monthly'),
    ('#datenschutz', 0.5, 'monthly'),
]

# Extract photo items from photographyData.ts
with open('src/data/photographyData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for photo entries: src: '...', alt: '...', captionDe: '...'
photos = []
photo_blocks = re.findall(r"\{\s*id:\s*['\"]([^'\"]+)['\"],\s*src:\s*['\"]([^'\"]+)['\"],\s*alt:\s*['\"]([^'\"]+)['\"]", content)
for pid, src, alt in photo_blocks:
    if src.startswith('/images/') and not any(p['src'] == src for p in photos):
        photos.append({'src': src, 'alt': alt})

print(f"Extracted {len(photos)} distinct artwork images for Google Image Sitemap.")

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
]

today = "2026-11-21"

# 1. Main Root URL with ALL Images attached
xml_lines.append('  <url>')
xml_lines.append(f'    <loc>{BASE_URL}/</loc>')
xml_lines.append(f'    <lastmod>{today}</lastmod>')
xml_lines.append('    <changefreq>weekly</changefreq>')
xml_lines.append('    <priority>1.0</priority>')
for l in LANGUAGES:
    href = f"{BASE_URL}/" if l == 'de' else f"{BASE_URL}/?lang={l}"
    xml_lines.append(f'    <xhtml:link rel="alternate" hreflang="{l}" href="{href}" />')
xml_lines.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE_URL}/" />')

# Add all artwork images to Google Image Sitemap
for p in photos:
    img_url = f"{BASE_URL}{p['src']}"
    title = saxutils.escape(p['alt'])
    caption = saxutils.escape(f"Photograph by Schahrsad Shahmirzadi (SchirZan) – {p['alt']}")
    xml_lines.append('    <image:image>')
    xml_lines.append(f'      <image:loc>{img_url}</image:loc>')
    xml_lines.append(f'      <image:title>{title}</image:title>')
    xml_lines.append(f'      <image:caption>{caption}</image:caption>')
    xml_lines.append('      <image:geo_location>Berlin, Germany</image:geo_location>')
    xml_lines.append(f'      <image:license>{BASE_URL}/#contact</image:license>')
    xml_lines.append('    </image:image>')

xml_lines.append('  </url>')

# 2. Section URLs
for sec, prio, freq in SECTIONS[1:]:
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{BASE_URL}/{sec}</loc>')
    xml_lines.append(f'    <lastmod>{today}</lastmod>')
    xml_lines.append(f'    <changefreq>{freq}</changefreq>')
    xml_lines.append(f'    <priority>{prio:.1f}</priority>')
    for l in LANGUAGES:
        href = f"{BASE_URL}/{sec}" if l == 'de' else f"{BASE_URL}/?lang={l}{sec}"
        xml_lines.append(f'    <xhtml:link rel="alternate" hreflang="{l}" href="{href}" />')
    xml_lines.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE_URL}/{sec}" />')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')

sitemap_path = os.path.join('public', 'sitemap.xml')
with open(sitemap_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(xml_lines) + '\n')

print(f"Successfully generated comprehensive sitemap.xml with {len(photos)} images and {len(SECTIONS)} sections.")
