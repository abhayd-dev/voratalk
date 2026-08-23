import re

# 1. Update screens.js HTML structure for astro-card
js_path = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/js/screens.js'
with open(js_path, 'r') as f:
    js = f.read()

# We want to replace everything from <div class="astro-card" to </div>\n        `).join('')}
# Let's find the exact block.
old_card_pattern = r'<div class="astro-card".*?</button>\s*}\s*</div>\s*</div>'

new_card = """<div class="astro-card" onclick="Router.go('astrologer-profile', {id:'${a.id}'})">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div style="display:flex; gap:12px; flex:1; min-width:0;">
                <div class="astro-avatar-wrap" style="flex-shrink:0;">
                  <img src="${a.avatar}" class="astro-avatar" alt="${a.name}">
                  <div class="${a.isOnline ? 'online-dot' : 'offline-dot'}"></div>
                </div>
                <div class="astro-card-info" style="flex:1; min-width:0;">
                  <div class="astro-name" style="font-size:1rem; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name} <i class="bi bi-patch-check-fill verified" style="color:#a78bfa; font-size:0.8rem;"></i></div>
                  <div class="astro-specialty" style="font-size:0.75rem; color:var(--gold); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.expertise.slice(0,3).join(', ')}</div>
                  <div class="astro-lang" style="font-size:0.7rem; color:var(--text-secondary); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"><i class="bi bi-globe"></i> ${a.languages.join(', ')}</div>
                  <div class="astro-rating" style="margin-top:6px; display:flex; align-items:center; gap:8px;">
                    <span style="background:rgba(234,179,8,0.15); color:#eab308; padding:2px 6px; border-radius:4px; font-weight:600; font-size:0.7rem;"><i class="bi bi-star-fill"></i> ${a.rating}</span>
                    <span style="color:#9ca3af; font-size:0.7rem;"><i class="bi bi-briefcase"></i> ${a.experience}</span>
                  </div>
                </div>
              </div>
              <div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px; flex-shrink:0; margin-left:8px;">
                <span class="astro-status-badge ${a.isOnline ? 'astro-status-available' : 'astro-status-offline'}">
                  ${a.isOnline ? '● Available' : 'Offline'}
                </span>
                <div class="astro-prices" style="text-align:right;">
                  <div style="font-size:0.9rem; font-weight:700; color:white;">₹${a.chatRate}/min</div>
                </div>
              </div>
            </div>
            
            <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.05);">
              ${a.isOnline
                ? `<button class="btn-consult-now" style="background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.3); color:#4ade80;" onclick="event.stopPropagation(); Router.go('astrologer-profile', {id:'${a.id}'})"><i class="bi bi-telephone-fill"></i> Call</button>
                   <button class="btn-consult-now" onclick="event.stopPropagation(); Router.go('astrologer-profile', {id:'${a.id}'})"><i class="bi bi-chat-fill"></i> Chat</button>`
                : `<button class="btn-view-profile" onclick="event.stopPropagation(); Router.go('astrologer-profile', {id:'${a.id}'})">View Profile</button>`
              }
            </div>
          </div>"""

js = re.sub(old_card_pattern, new_card, js, flags=re.DOTALL)
with open(js_path, 'w') as f:
    f.write(js)

# 2. Update style.css
css_path = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/css/style.css'
with open(css_path, 'r') as f:
    css = f.read()

# Make .astro-card a standard block, remove display:flex and gap:10px
css = css.replace("  display: flex;\n  gap: 10px;\n", "")
css = css.replace("  display: flex;\n  gap: 12px;\n", "")

# Fix .astro-avatar width back to 60px if needed
css = css.replace("width: 72px; height: 72px;", "width: 60px; height: 60px;")

with open(css_path, 'w') as f:
    f.write(css)

print("Astro card fully redesigned!")
