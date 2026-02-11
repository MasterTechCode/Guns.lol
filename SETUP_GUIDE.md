# Complete Setup Guide

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of React and TypeScript

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Assets

Create and add the following files to the `public/assets/` directory:

#### Required Files:
- `public/assets/videos/bg.mp4` - Background video
- `public/assets/images/avatar.png` - Your profile avatar
- `public/assets/music/song.mp3` - Background music

#### Asset Recommendations:

**Background Video:**
- Resolution: 1920x1080 (Full HD) or higher
- Format: MP4 (H.264 codec)
- Duration: 10-30 seconds (looped)
- File size: <10MB for better performance
- Style: Dark, atmospheric, cyber-themed

**Avatar Image:**
- Size: 500x500px or larger (square)
- Format: PNG with transparency or JPG
- Style: Your profile picture or logo

**Music File:**
- Format: MP3
- Bitrate: 128-192 kbps
- Duration: 2-5 minutes
- Style: Lo-fi, electronic, or ambient music

### 3. Configure Your Profile

Edit `src/pages/Home.tsx` and update the following:

```typescript
const userProfile: UserProfile = {
  username: 'mrx404',           // Your username
  realName: 'Your Name',         // Your real name
  country: 'Your Country',       // Your country
  avatar: '/assets/images/avatar.png',
  discordUserId: 'YOUR_DISCORD_ID', // Optional: Your Discord User ID
};

const musicTrack: MusicTrack = {
  title: 'Your Song Title',
  artist: 'Artist Name',
  url: '/assets/music/song.mp3',
};
```

### 4. Update Social Links

Edit `src/data/socialLinks.tsx` with your social media links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    icon: <Send size={20} />,
    href: 'https://t.me/yourusername',
    ariaLabel: 'Telegram',
  },
  // ... add or remove links as needed
];
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

## 🎨 Customization

### Changing Colors

Edit `src/styles/variables.css`:

```css
:root {
  --color-primary: #ffffff;      /* Main text color */
  --color-secondary: #a0a0a0;    /* Secondary text */
  --color-accent: #00d9ff;       /* Accent color (links, highlights) */
  --color-background: #0a0a0f;   /* Background color */
}
```

### Adjusting Glass Effect

In `src/styles/variables.css`:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.05);     /* Glass background opacity */
  --glass-border: rgba(255, 255, 255, 0.1);  /* Border opacity */
  --glass-blur: 20px;                         /* Blur intensity */
}
```

### Modifying Animations

Edit `src/styles/animations.css` to customize animation speeds and effects.

### Changing Layout

The main layout is in `src/pages/Home.tsx` and `src/pages/Home.css`. Adjust spacing, sizing, and positioning there.

## 🎮 Discord Integration

### Getting Your Discord User ID

1. Enable Developer Mode in Discord:
   - Open Discord Settings
   - Go to "Advanced"
   - Enable "Developer Mode"

2. Get your User ID:
   - Right-click your profile
   - Click "Copy User ID"

3. Add to `src/pages/Home.tsx`:
   ```typescript
   discordUserId: '123456789012345678', // Your Discord User ID
   ```

### Discord Status Features

The integration shows:
- Online status (green dot)
- Current activity (Playing, Listening, etc.)
- Spotify integration (if listening)

**Note:** Discord status uses the Lanyard API. The user must be in the [Lanyard Discord server](https://discord.gg/lanyard) for the API to work.

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🔧 Advanced Customization

### Adding More Social Links

1. Add icons in `src/data/socialLinks.tsx`
2. Import from `lucide-react` or add custom SVGs
3. Add to the array with href and aria-label

### Changing Snow Effect

Edit `src/components/Effects/SnowEffect.tsx`:

```typescript
// Adjust number of particles
const numberOfSnowflakes = Math.floor((window.innerWidth * window.innerHeight) / 15000);

// Adjust speed and wind
snowflake.speed = Math.random() * 1 + 0.5;  // Fall speed
snowflake.wind = Math.random() * 0.5 - 0.25; // Horizontal drift
```

### Custom Background

Instead of video, you can use a static image:

In `src/pages/Home.tsx`, replace the video element with:

```tsx
<div 
  className="background-image"
  style={{ backgroundImage: 'url(/assets/images/background.jpg)' }}
/>
```

Then add CSS:

```css
.background-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
```

## 🚀 Building for Production

### Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### GitHub Pages
1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```
2. Build and deploy the `dist/` folder

## 🐛 Troubleshooting

### Assets Not Loading
- Check file paths are correct
- Ensure files are in `public/assets/`
- Clear browser cache
- Check browser console for errors

### Discord Status Not Working
- Verify Discord User ID is correct
- Ensure user is in Lanyard Discord server
- Check browser console for API errors
- Try REST API fallback (automatic)

### Music Not Playing
- Check audio file format (MP3 recommended)
- Ensure file path is correct
- Browser may block autoplay - user must interact first
- Check browser console for audio errors

### Snow Effect Performance Issues
- Reduce number of particles in `SnowEffect.tsx`
- Disable on mobile devices
- Use CSS particles instead of canvas

## 📦 Optional Enhancements

### Adding More Pages
1. Create new component in `src/pages/`
2. Add routing with React Router
3. Update navigation

### Analytics Integration
Add Google Analytics or similar:

```typescript
// In main.tsx or App.tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR-GA-MEASUREMENT-ID');
```

### SEO Optimization
Update `index.html` with proper meta tags:

```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your Description">
<meta property="og:image" content="/path/to/image.jpg">
```

## 📝 License

MIT License - feel free to use and modify!

## 🤝 Contributing

Found a bug or want to add a feature? Feel free to submit issues or pull requests!

## 💬 Support

If you need help:
1. Check this guide first
2. Review the README.md
3. Check the browser console for errors
4. Search for similar issues on GitHub
