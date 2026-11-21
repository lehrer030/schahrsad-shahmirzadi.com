import os
import re
import glob
from PIL import Image, PngImagePlugin
import piexif

ARTIST = "Schahrsad Shahmirzadi (SchirZan)"
COPYRIGHT = "Copyright (C) Schahrsad Shahmirzadi (SchirZan). All rights reserved. https://schirzan.com"
DESCRIPTION = "Photograph by Schahrsad Shahmirzadi (SchirZan) - SchirZan Signature Collection"
SOFTWARE = "SchirZan Signature Copyright Protection System"

def build_exif_bytes():
    exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "Interop": {}, "1st": {}, "thumbnail": None}
    exif_dict["0th"][piexif.ImageIFD.Artist] = ARTIST.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Copyright] = COPYRIGHT.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.ImageDescription] = DESCRIPTION.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Software] = SOFTWARE.encode("utf-8")
    return piexif.dump(exif_dict)

EXIF_BYTES = build_exif_bytes()

def update_jpeg(filepath):
    try:
        exif_dict = piexif.load(filepath)
    except Exception:
        exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "Interop": {}, "1st": {}, "thumbnail": None}
    
    exif_dict["0th"][piexif.ImageIFD.Artist] = ARTIST.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Copyright] = COPYRIGHT.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.ImageDescription] = DESCRIPTION.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Software] = SOFTWARE.encode("utf-8")
    
    exif_bytes = piexif.dump(exif_dict)
    piexif.insert(exif_bytes, filepath)

def update_webp(filepath):
    # Pure lossless RIFF WebP EXIF injection
    with open(filepath, "rb") as f:
        data = f.read()
    
    if len(data) < 12 or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        return
    
    # Read canvas size using Pillow
    try:
        with Image.open(filepath) as im:
            w, h = im.size
    except Exception:
        return
    
    # Check if first chunk is VP8 or VP8L or VP8X
    first_chunk_fourcc = data[12:16]
    c_size = int.from_bytes(data[16:20], "little")
    
    if first_chunk_fourcc in (b"VP8 ", b"VP8L"):
        # Wrap into extended WebP with VP8X
        # VP8X payload: 4 bytes flags + 3 bytes width - 1 + 3 bytes height - 1
        flags = 0x08  # EXIF bit
        w_bytes = (w - 1).to_bytes(3, "little")
        h_bytes = (h - 1).to_bytes(3, "little")
        vp8x_payload = bytes([flags, 0, 0, 0]) + w_bytes + h_bytes
        vp8x_chunk = b"VP8X" + len(vp8x_payload).to_bytes(4, "little") + vp8x_payload
        
        # Original image chunk
        padded_c_size = c_size + (1 if c_size % 2 == 1 else 0)
        img_chunk = data[12:20+padded_c_size]
        
        # EXIF chunk
        exif_pad = b"\x00" if len(EXIF_BYTES) % 2 == 1 else b""
        exif_chunk = b"EXIF" + len(EXIF_BYTES).to_bytes(4, "little") + EXIF_BYTES + exif_pad
        
        new_payload = vp8x_chunk + img_chunk + exif_chunk
        new_riff_size = 4 + len(new_payload)
        new_data = b"RIFF" + new_riff_size.to_bytes(4, "little") + b"WEBP" + new_payload
        
        with open(filepath, "wb") as f:
            f.write(new_data)
    else:
        # Re-save with Pillow as fallback
        try:
            with Image.open(filepath) as im:
                im.save(filepath, format="WEBP", exif=EXIF_BYTES, quality=100)
        except Exception:
            pass

def update_png(filepath):
    try:
        with Image.open(filepath) as im:
            meta = PngImagePlugin.PngInfo()
            meta.add_text("Author", ARTIST)
            meta.add_text("Artist", ARTIST)
            meta.add_text("Copyright", COPYRIGHT)
            meta.add_text("Description", DESCRIPTION)
            meta.add_text("Software", SOFTWARE)
            im.save(filepath, pnginfo=meta)
    except Exception:
        pass

def main():
    # 1. Collect all images referenced in source code
    referenced = set()
    for root, _, files in os.walk("src"):
        for fn in files:
            if fn.endswith((".ts", ".tsx", ".js", ".html")):
                with open(os.path.join(root, fn), "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    matches = re.findall(r'/images/([^"\'\s)]+)', content)
                    for m in matches:
                        p = os.path.join("public", "images", m.replace("/", os.sep))
                        if os.path.exists(p):
                            referenced.add(os.path.abspath(p))
                        # Also check without query strings or scaled
                        clean_m = m.split("?")[0]
                        p_clean = os.path.join("public", "images", clean_m.replace("/", os.sep))
                        if os.path.exists(p_clean):
                            referenced.add(os.path.abspath(p_clean))

    # Also include all images in public/images/series_solitaire and wetransfer and running
    special_dirs = ["series_solitaire", "wetransfer", "running", "docx_badges", "badges_custom", "email_badges"]
    for sd in special_dirs:
        for root, _, files in os.walk(os.path.join("public", "images", sd)):
            for fn in files:
                if fn.lower().endswith((".jpg", ".jpeg", ".webp", ".png")):
                    referenced.add(os.path.abspath(os.path.join(root, fn)))

    print(f"Found {len(referenced)} primary artwork images to embed author metadata into.")

    count = 0
    errors = 0
    for path in referenced:
        ext = os.path.splitext(path)[1].lower()
        try:
            if ext in (".jpg", ".jpeg"):
                update_jpeg(path)
                count += 1
            elif ext == ".webp":
                update_webp(path)
                count += 1
            elif ext == ".png":
                update_png(path)
                count += 1
        except Exception as e:
            errors += 1
            print(f"Error on {os.path.basename(path)}: {e}")

    print(f"Successfully embedded author metadata into {count} images! (Errors: {errors})")

if __name__ == "__main__":
    main()
