import re
import os

filepath = '/Users/abhaydwivedi/Desktop/Projects/Voratalk/js/screens.js'
with open(filepath, 'r') as f:
    content = f.read()

# Navigation & Routing Fixes
content = content.replace("App.showToast('Menu coming soon!')", "Router.go('app-drawer')")
content = content.replace("App.showToast('Menu')", "Router.go('app-drawer')")
content = content.replace("App.showToast('Settings')", "Router.go('settings')")
content = content.replace("App.showToast('Support: Coming soon!')", "Router.go('contact-support')")
content = content.replace("App.showToast('Support coming soon!')", "Router.go('contact-support')")
content = content.replace("App.showToast('Video Call: Coming Soon!')", "Router.go('video-call')")
content = content.replace("App.showToast('Upgrade: Coming soon!')", "Router.go('premium-upgrade')")
content = content.replace("App.showToast('Boost coming soon!')", "Router.go('boost-profile')")
content = content.replace("App.showToast('Joining call...')", "Router.go('astro-call')")
content = content.replace("App.showToast('Terms of Use')", "Router.go('legal-doc')")
content = content.replace("App.showToast('Privacy Policy')", "Router.go('legal-doc')")

# State & Simulation Logic Fixes (using inline JS in onclick)
# Google Login -> Simulate auth and go home
content = content.replace("onclick=\"App.showToast('Google login coming soon!')\"", "onclick=\"App.showToast('Authenticating...'); setTimeout(() => Router.go('home'), 800)\"")

# Payment method selection (visual toggle)
content = content.replace("onclick=\"App.showToast('${p.label} selected')\"", "onclick=\"document.querySelectorAll('.payment-method-row').forEach(el=>el.style.borderColor='rgba(255,255,255,0.1)'); this.style.borderColor='var(--gold)';\"")

# Wallet Top-up (add funds)
content = content.replace("onclick=\"App.showToast('Processing payment...')\"", "onclick=\"this.innerHTML = '<i class=\\'bi bi-arrow-repeat spin\\'></i> Processing...'; setTimeout(() => { DATA.currentUser.walletBalance += 500; App.showToast('Payment Successful!'); Router.go('wallet-topup'); }, 1500)\"")

# Pooja booking
content = content.replace("onclick=\"App.showToast('Payment successful!'); Router.go('home');\"", "onclick=\"this.innerHTML = '<i class=\\'bi bi-arrow-repeat spin\\'></i> Processing...'; setTimeout(() => { App.showToast('Pooja Booked Successfully!'); Router.go('home'); }, 1500)\"")

# AI Chat Prompts (append to chat)
content = content.replace("onclick=\"App.showToast('Asking AI: ${q.label.substring(0,30)}...')\"", "onclick=\"App.simulateAIChat(this.innerText)\"")

# Expert Accept/Decline
content = content.replace("onclick=\"App.showToast('Accepted! Starting...')\"", "onclick=\"Router.go('expert-call')\"")
content = content.replace("onclick=\"App.showToast('Request declined')\"", "onclick=\"this.closest('.card').style.display = 'none'; App.showToast('Request dismissed')\"")

# Expert Dashboard Quick Actions & Menu
content = content.replace("onclick=\"App.showToast('${b.label}')\"", "onclick=\"App.showToast('Action: ' + '${b.label}')\"")
content = content.replace("onclick=\"App.showToast('${m.title}')\"", "onclick=\"Router.go('expert-' + '${m.title}'.toLowerCase().replace(/ /g, '-'))\"")

# Notification Clear
content = content.replace("onclick=\"App.showToast('Cleared all')\"", "onclick=\"document.querySelectorAll('.screen-body .card').forEach(el => el.style.display='none'); App.showToast('All clear!')\"")

# Improved action confirmations
content = content.replace("App.showToast('Link copied!')", "App.showToast('Copied to clipboard ✓')")
content = content.replace("App.showToast('Link shared!')", "App.showToast('Share link ready ✓')")
content = content.replace("App.showToast('Added to favourites!')", "App.showToast('Added to your favorites ❤️')")
content = content.replace("App.showToast('Microphone muted')", "App.showToast('Mic Muted 🔇')")
content = content.replace("App.showToast('Speaker on')", "App.showToast('Speaker Active 🔊')")

with open(filepath, 'w') as f:
    f.write(content)

print("Updated screens.js routing and logic!")
