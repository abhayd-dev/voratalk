import re

# 1. Update CSS
css_path = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/css/style.css'
with open(css_path, 'r') as f:
    css = f.read()

css = css.replace("width: 72px; height: 72px;", "width: 60px; height: 60px; min-width: 60px;")
css = css.replace("gap: 12px;", "gap: 10px;")
css = css.replace("padding: 14px;", "padding: 12px;")
css = css.replace(".astro-name { font-size: 0.92rem; font-weight: 700; color: white; display: flex; align-items: center; gap: 5px; }", ".astro-name { font-size: 0.92rem; font-weight: 700; color: white; display: flex; align-items: center; gap: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }")
css = css.replace(".astro-rating { font-size: 0.72rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-top: 3px; }", ".astro-rating { font-size: 0.7rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-top: 3px; white-space: nowrap; }")
css = css.replace(".astro-specialty { font-size: 0.68rem; color: var(--gold); margin-top: 4px; }", ".astro-specialty { font-size: 0.65rem; color: var(--gold); margin-top: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }")
css = css.replace(".astro-lang { font-size: 0.66rem; color: var(--text-secondary); margin-top: 4px; display: flex; align-items: center; gap: 4px; }", ".astro-lang { font-size: 0.65rem; color: var(--text-secondary); margin-top: 4px; display: flex; align-items: center; gap: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }")
css = css.replace(".cat-chip-label { font-size: 0.6rem; color: var(--text-secondary); font-weight: 500; text-align: center; max-width: 60px; }", ".cat-chip-label { font-size: 0.6rem; color: var(--text-secondary); font-weight: 500; text-align: center; width: 75px; white-space: pre-wrap; line-height: 1.2; }")
css = css.replace(".cat-chip-icon {\n  width: 52px; height: 52px;", ".cat-chip-icon {\n  width: 56px; height: 56px;")
css = css.replace(".astro-card-right { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }", ".astro-card-right { display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; gap: 6px; flex-shrink: 0; width: 85px; }")
css = css.replace(".astro-prices span { display: flex; align-items: center; gap: 4px; justify-content: flex-end; }", ".astro-prices span { display: flex; align-items: center; gap: 4px; justify-content: flex-end; white-space: nowrap; }")

with open(css_path, 'w') as f:
    f.write(css)

# 2. Update JS (screens.js)
js_path = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/js/screens.js'
with open(js_path, 'r') as f:
    js = f.read()

# Fix the header title in Consult
bad_header = """          <div class="screen-header-gold-ornament">
            <span style="color:#eab308; font-size:0.8rem;">——✦</span>
            <span style="font-size:1rem; font-weight:700;">Consult</span>
            <span style="color:#eab308; font-size:0.8rem;">✦——</span>
          </div>"""
good_header = """          <div style="display:flex; align-items:center; gap:6px;">
            <i class="bi bi-stars" style="color:var(--gold);"></i>
            <span style="font-size:1.1rem; font-weight:700; color:white;">Consult Astrologer</span>
          </div>"""
js = js.replace(bad_header, good_header)

# Ensure "Love & Relationship" in Categories wraps properly
js = js.replace("{icon:'bi bi-heart-fill', label:'Love &\\nRelationship'}", "{icon:'bi bi-heart-fill', label:'Love & Relationship'}")

with open(js_path, 'w') as f:
    f.write(js)

print("UI fixes applied to CSS and JS.")
