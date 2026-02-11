# Discord Integration Guide

This guide explains how to integrate Discord Rich Presence into your link-in-bio website.

## 📋 What is Lanyard?

Lanyard is a service that exposes your Discord presence through a REST API and WebSocket. It allows you to display:
- Online status (online, idle, dnd, offline)
- Current activity (Playing games, Listening to Spotify, etc.)
- Custom status messages
- Spotify listening data

## 🚀 Setup Instructions

### Step 1: Get Your Discord User ID

1. **Enable Developer Mode in Discord:**
   - Open Discord
   - Click the Settings icon (⚙️)
   - Go to "App Settings" → "Advanced"
   - Toggle on "Developer Mode"

2. **Copy Your User ID:**
   - Right-click on your profile picture anywhere in Discord
   - Click "Copy User ID"
   - Save this number (e.g., `123456789012345678`)

### Step 2: Join Lanyard Discord Server

1. Join the official Lanyard Discord server: https://discord.gg/lanyard
2. This is **required** for the API to track your presence
3. You don't need to do anything else - just being in the server enables tracking

### Step 3: Configure Your Project

Open `src/pages/Home.tsx` and update the Discord User ID:

```typescript
const userProfile: UserProfile = {
  username: 'mrx404',
  realName: 'Elshodbek Muxtorov',
  country: 'Uzbekistan',
  avatar: '/assets/images/avatar.png',
  discordUserId: '123456789012345678', // Replace with YOUR Discord User ID
};
```

### Step 4: Test the Integration

1. Make sure you're online on Discord
2. Run your development server: `npm run dev`
3. Check if the status indicator shows your current status
4. Try setting a custom status or playing a game to see it update

## 🎨 What Gets Displayed

### Online Status
The colored dot next to your avatar shows your Discord status:
- 🟢 Green = Online
- 🟡 Yellow = Idle
- 🔴 Red = Do Not Disturb
- ⚫ Gray = Offline

### Activity Display
Shows what you're currently doing:
- **Playing:** "Playing [Game Name]"
- **Listening:** "Listening to Spotify"
- **Watching:** "Watching [Content]"
- **Custom Status:** Your custom status message

### Spotify Integration
If you're listening to Spotify, it displays:
- Album artwork
- Song name
- Artist name

## 🔧 API Details

### WebSocket Connection
The app uses Lanyard's WebSocket for real-time updates:
- Connects to `wss://api.lanyard.rest/socket`
- Receives live presence updates
- Auto-reconnects on disconnect

### REST API Fallback
If WebSocket fails, it falls back to REST API:
- Endpoint: `https://api.lanyard.rest/v1/users/YOUR_USER_ID`
- Manual refresh required
- Less real-time but more reliable

## 🐛 Troubleshooting

### Status Not Showing
**Problem:** Gray dot or no activity displayed

**Solutions:**
1. Verify you joined the Lanyard Discord server
2. Check your Discord User ID is correct
3. Make sure you're actually online on Discord
4. Wait a few minutes after joining Lanyard server
5. Check browser console for errors

### Spotify Not Showing
**Problem:** Spotify integration not working

**Solutions:**
1. Make sure Spotify is connected to Discord:
   - Discord Settings → Connections → Spotify
2. Enable "Display Spotify as your status"
3. Make sure you're actively listening (not paused)

### WebSocket Errors
**Problem:** Connection errors in console

**Solutions:**
1. Check your internet connection
2. Verify Lanyard API is up: https://status.lanyard.rest
3. The app will auto-fallback to REST API
4. Try refreshing the page

### Delayed Updates
**Problem:** Status updates slowly

**Solutions:**
- WebSocket should update in 1-2 seconds
- REST fallback updates on page refresh
- Discord itself can have 30s-1min delay
- This is normal Discord API behavior

## 🎛️ Customization

### Disable Discord Integration

If you don't want Discord integration, simply don't provide a `discordUserId`:

```typescript
const userProfile: UserProfile = {
  username: 'mrx404',
  realName: 'Elshodbek Muxtorov',
  country: 'Uzbekistan',
  avatar: '/assets/images/avatar.png',
  // discordUserId: undefined, // Don't set this
};
```

### Customize Status Colors

Edit `src/components/Profile/ProfileCard.tsx`:

```typescript
const getStatusColor = (status?: string) => {
  switch (status) {
    case 'online':
      return '#43b581';  // Change to your preferred green
    case 'idle':
      return '#faa61a';  // Change to your preferred yellow
    case 'dnd':
      return '#f04747';  // Change to your preferred red
    default:
      return '#747f8d';  // Change to your preferred gray
  }
};
```

### Hide Specific Activities

Edit `src/components/Profile/ProfileCard.tsx` to filter activities:

```typescript
const getActivityText = () => {
  if (!discordPresence?.activities || discordPresence.activities.length === 0) {
    return null;
  }

  const activity = discordPresence.activities[0];
  
  // Hide certain activities
  if (activity.name === 'Spotify') {
    return null; // Don't show Spotify as activity
  }
  
  // Rest of the function...
};
```

## 📊 Activity Types

Discord activity types:
- `0` = Playing (games, apps)
- `1` = Streaming (Twitch, YouTube)
- `2` = Listening (Spotify, YouTube Music)
- `3` = Watching (YouTube, Netflix via browser extensions)
- `4` = Custom status
- `5` = Competing (competitive games)

## 🔒 Privacy Considerations

### What's Public
When using Lanyard, the following is publicly accessible:
- Your Discord status (online, idle, dnd, offline)
- Your current activity
- Your Spotify listening data
- Your custom status

### What's Private
Lanyard does NOT expose:
- Your Discord messages
- Your server list
- Your friends list
- Your voice channel info
- Any other private Discord data

### Controlling Visibility

If you want to hide your presence:
1. Set Discord to "Invisible" mode
2. Leave the Lanyard Discord server
3. Or don't provide your `discordUserId` in the config

## 🌐 Alternative APIs

If Lanyard doesn't work for you, alternatives:

### Discord.js Bot
Create your own Discord bot to track presence:
- More control but requires hosting
- Can track additional data
- More complex setup

### PreMiD
Use PreMiD API for rich presence data:
- https://premid.app/
- Similar to Lanyard
- Different server requirement

## 📚 Resources

- Lanyard Documentation: https://github.com/Phineas/lanyard
- Lanyard Discord: https://discord.gg/lanyard
- Discord Developer Portal: https://discord.com/developers
- Lanyard Status: https://status.lanyard.rest

## 💡 Tips

1. **Test First**: Use a test Discord account to verify setup
2. **Be Patient**: Initial setup can take 1-2 minutes
3. **Stay in Server**: Must remain in Lanyard server
4. **Privacy**: Consider what you want public
5. **Fallbacks**: App works fine without Discord integration

## 🤝 Need Help?

If you're still having issues:
1. Check the Lanyard Discord server #help channel
2. Review browser console errors
3. Test the Lanyard API directly: `https://api.lanyard.rest/v1/users/YOUR_ID`
4. Create an issue in the project repository
