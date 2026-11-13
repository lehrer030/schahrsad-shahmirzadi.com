import struct
import os

wpress_path = r'c:\Users\Emanu\Downloads\Sharzad Website\schahrsad-shahmirzadi-com-20261113-090819-mu5zwvyljvxa.wpress'

with open(wpress_path, 'rb') as f:
    count = 0
    while count < 300:
        hdr = f.read(4377)
        if len(hdr) < 4377:
            break
        fname = hdr[:255].decode('utf-8', errors='ignore').split('\x00')[0]
        size_str = hdr[255:255+14].decode('utf-8', errors='ignore').split('\x00')[0].strip()
        if not size_str.isdigit():
            break
        fsize = int(size_str)
        if any(k in fname.lower() for k in ['database', '.sql', 'impressum', 'kontakt', 'datenschutz']):
            print(f'Match: {fname} ({fsize} bytes)')
        count += 1
        f.seek(fsize, 1)
print(f'Scanned {count} entries.')
