import re

filepath = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/js/screens.js'
with open(filepath, 'r') as f:
    content = f.read()

# Line 334: <p class="menu-row-sub">Chat, Call or Video</p>
content = content.replace("Chat, Call or Video", "Chat or Voice Call")

# Line 641-644: Video Call service block
content = re.sub(r'<div class="astro-service-card" onclick="Router\.go\(\'video-call\'\)">.*?<p.*?Video Call</p>.*?</div>', '', content, flags=re.DOTALL)

# Line 909: <i class="bi bi-camera-video me-1"></i> Join Now
content = content.replace('<i class="bi bi-camera-video me-1"></i> Join Now', '')

# Line 1332: <i class="bi bi-camera-video" style="color:#a78bfa;font-size:0.75rem;"></i>
content = content.replace('<i class="bi bi-camera-video" style="color:#a78bfa;font-size:0.75rem;"></i>', '<i class="bi bi-telephone" style="color:#a78bfa;font-size:0.75rem;"></i>')

with open(filepath, 'w') as f:
    f.write(content)
