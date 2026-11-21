from PIL import Image
import os

def img_bytes(path):
    im = Image.open(path).convert('L').resize((32, 32))
    return list(im.getdata())

def diff(b1, b2):
    return sum(abs(x - y) for x, y in zip(b1, b2)) / len(b1)

amp_thumbs = [img_bytes(f"amp_solitaire_revised/amp_{i}.jpeg") for i in range(1, 6)]
local_thumbs = [img_bytes(f"public/images/series_solitaire/solitaire_revised/solitaire_revised_0{i}.jpeg") for i in range(1, 8)]

for a_idx, at in enumerate(amp_thumbs, 1):
    diffs = [diff(at, lt) for lt in local_thumbs]
    best_diff = min(diffs)
    best_match = diffs.index(best_diff) + 1
    print(f"AMP {a_idx} matches local solitaire_revised_0{best_match} with diff {best_diff:.2f}")

print("\nChecking all folders for matches with AMP:")
for root, dirs, files in os.walk("public/images"):
    for f in files:
        if f.lower().endswith(('.jpg', '.jpeg', '.webp', '.png')):
            full_p = os.path.join(root, f)
            try:
                th = img_bytes(full_p)
                for a_idx, at in enumerate(amp_thumbs, 1):
                    d = diff(at, th)
                    if d < 10.0:
                        print(f"  Match for AMP {a_idx}: {full_p} (diff {d:.2f})")
            except:
                pass
