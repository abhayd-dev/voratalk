import re
import os

filepath = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/js/screens.js'
with open(filepath, 'r') as f:
    content = f.read()

# Remove video call from Consult intake banner (if it exists)
content = re.sub(r'<button onclick="Router\.go\(\'video-call\'\)".*?Video Call\s*</button>', '', content, flags=re.DOTALL)

# Remove video call price from astro-card in consult screen
content = re.sub(r'<span><i class="bi bi-camera-video".*?₹ \$\{a\.videoRate\}.*?/min</span>', '', content)

# Remove video call service card from astro-profile
content = re.sub(r'<div class="call-action-card".*?<i class="bi bi-camera-video-fill".*?Video Call.*?</div>', '', content, flags=re.DOTALL)

# Remove Video Call option from Astro Consults or upcoming calls
content = re.sub(r'<div.*?<i class="bi bi-camera-video.*?></i> Video Call</div>', '', content)
content = re.sub(r'<i class="bi bi-camera-video-fill me-2"></i> Join Now', '', content)

# Fix Pooja Details to remove video call mention
content = content.replace("Includes pandit dakshina, samagri, and video call link for sankalp.", "Includes pandit dakshina and samagri for sankalp.")

with open(filepath, 'w') as f:
    f.write(content)

print("Removed Video Call references from screens.js")
