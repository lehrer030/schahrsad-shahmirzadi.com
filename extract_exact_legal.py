import re

wpress_path = r'c:\Users\Emanu\Downloads\Sharzad Website\schahrsad-shahmirzadi-com-20261113-090819-mu5zwvyljvxa.wpress'
with open(wpress_path, 'rb') as f:
    f.seek(2944677356)
    sql = f.read(178757076).decode('utf-8', errors='ignore')

# Extract page 134 (Impressum)
idx_134 = sql.find("(134,1,")
if idx_134 != -1:
    end_134 = sql.find(");", idx_134)
    content = sql[idx_134:end_134]
    with open(r'c:\Users\Emanu\.gemini\antigravity\scratch\schahrsad\raw_impressum.txt', 'w', encoding='utf-8') as out:
        out.write(content)
    print('Saved raw_impressum.txt, length:', len(content))

# Extract page 136 (Datenschutz)
idx_136 = sql.find("(136,1,")
if idx_136 != -1:
    end_136 = sql.find(");", idx_136)
    content = sql[idx_136:end_136]
    with open(r'c:\Users\Emanu\.gemini\antigravity\scratch\schahrsad\raw_datenschutz.txt', 'w', encoding='utf-8') as out:
        out.write(content)
    print('Saved raw_datenschutz.txt, length:', len(content))
