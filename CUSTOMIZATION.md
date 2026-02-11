# Customization Guide

This guide covers all the ways you can customize your guns.lol-style link-in-bio website.

## 🎨 Visual Customization

### Colors and Theme

Edit `src/styles/variables.css` to change the entire color scheme:

```css
:root {
  /* Primary Colors */
  --color-primary: #ffffff;        /* Main text color */
  --color-secondary: #a0a0a0;      /* Secondary text, labels */
  --color-accent: #00d9ff;         /* Links, highlights, accents */
  --color-background: #0a0a0f;     /* Page background */
  --color-background-secondary: #1a1a2e; /* Secondary backgrounds */
  
  /* Glassmorphism Effect */
  --glass-bg: rgba(255, 255, 255, 0.05);     /* Glass transparency */
  --glass-border: rgba(255, 255, 255, 0.1);  /* Glass border opacity */
  --glass-blur: 20px;                         /* Blur intensity */
}
```

### Pre-made Color Schemes

#### Cyberpunk Purple
```css
--color-accent: #9d4edd;
--glass-bg: rgba(157, 78, 221, 0.05);
--glass-border: rgba(157, 78, 221, 0.15);
```

#### Neon Green
```css
--color-accent: #39ff14;
--glass-bg: rgba(57, 255, 20, 0.05);
--glass-border: rgba(57, 255, 20, 0.15);
```

#### Hot Pink
```css
--color-accent: #ff006e;
--glass-bg: rgba(255, 0, 110, 0.05);
--glass-border: rgba(255, 0, 110, 0.15);
```

#### Electric Blue (Default)
```css
--color-accent: #00d9ff;
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
```

### Adjusting Glassmorphism

**More Transparent:**
```css
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-blur: 15px;
```

**More Opaque:**
```css
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-blur: 25px;
```

**Stronger Blur:**
```css
--glass-blur: 30px;
```

### Border Radius

Make cards more rounded or sharper:

```css
:root {
  --radius-sm: 4px;    /* Small elements */
  --radius-md: 8px;    /* Medium elements */
  --radius-lg: 12px;   /* Large cards - default 16px */
  --radius-xl: 20px;   /* Extra large */
}
```

## 🖼️ Layout Customization

### Profile Card Size

Edit `src/components/Profile/ProfileCard.css`:

```css
.profile-card {
  max-width: 400px;  /* Change to 450px, 500px, etc. */
  padding: var(--spacing-2xl);
}

.profile-avatar {
  width: 120px;  /* Make larger: 140px, 160px */
  height: 120px;
}
```

### Card Spacing

Edit `src/pages/Home.css`:

```css
.content-wrapper {
  gap: var(--spacing-xl);  /* Space between cards */
  /* Options: --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl, --spacing-2xl */
}
```

### Center Alignment

The layout is already centered, but you can adjust:

```css
.home-content {
  align-items: center;       /* Horizontal centering */
  justify-content: center;   /* Vertical centering */
}
```

## ✨ Animation Customization

### Animation Speed

Edit `src/styles/variables.css`:

```css
:root {
  --transition-fast: 150ms ease-in-out;   /* Quick transitions */
  --transition-base: 300ms ease-in-out;   /* Standard - default */
  --transition-slow: 500ms ease-in-out;   /* Slower animations */
}
```

### Disable Animations

Remove animation classes from components or add:

```css
* {
  animation: none !important;
  transition: none !important;
}
```

### Custom Animation Delays

Edit stagger delays in `src/styles/animations.css`:

```css
.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
/* Add more as needed */
```

## ❄️ Snow Effect Customization

### Adjust Particle Count

Edit `src/components/Effects/SnowEffect.tsx`:

```typescript
// More particles (heavier snow)
const numberOfSnowflakes = Math.floor((window.innerWidth * window.innerHeight) / 10000);

// Fewer particles (lighter snow)
const numberOfSnowflakes = Math.floor((window.innerWidth * window.innerHeight) / 20000);
```

### Change Particle Behavior

```typescript
// Faster falling
snowflake.speed = Math.random() * 2 + 1;

// Slower falling
snowflake.speed = Math.random() * 0.5 + 0.25;

// More wind drift
snowflake.wind = Math.random() * 1 - 0.5;

// Less wind drift
snowflake.wind = Math.random() * 0.2 - 0.1;
```

### Change Particle Appearance

```typescript
// Larger particles
snowflake.radius = Math.random() * 4 + 2;

// Smaller particles
snowflake.radius = Math.random() * 2 + 0.5;

// More opaque
snowflake.opacity = Math.random() * 0.8 + 0.4;

// More transparent
snowflake.opacity = Math.random() * 0.4 + 0.1;
```

### Disable Snow Effect

Remove from `src/pages/Home.tsx`:

```typescript
// Comment out or delete this line:
// <SnowEffect />
```

### Change to Stars Instead

```typescript
// In SnowEffect.tsx, modify the draw function:
ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
ctx.shadowBlur = 10;
ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
```

## 🎵 Music Player Customization

### Change Player Colors

Edit `src/components/MusicPlayer/MusicPlayer.css`:

```css
.progress-bar-fill {
  background: linear-gradient(90deg, #ff006e, #ffffff);  /* Custom gradient */
}

.play-button:hover {
  background: rgba(0, 217, 255, 0.2);  /* Custom hover color */
}
```

### Hide Music Player

Remove from `src/pages/Home.tsx`:

```typescript
// Comment out:
// <MusicPlayer track={musicTrack} />
```

### Auto-play Music (with user consent)

Edit `src/hooks/useAudio.ts`:

```typescript
// Add after audio creation:
audio.play().catch(() => {
  // User needs to interact first
});
```

## 🔗 Social Links Customization

### Add New Social Link

Edit `src/data/socialLinks.tsx`:

```typescript
import { Send, Github, Mail, Linkedin } from 'lucide-react';

export const socialLinks: SocialLink[] = [
  // ... existing links
  {
    id: 'linkedin',
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com/in/yourusername',
    ariaLabel: 'LinkedIn',
  },
];
```

### Custom Icon

```typescript
const CustomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    {/* Your SVG path */}
  </svg>
);

{
  id: 'custom',
  icon: <CustomIcon />,
  href: 'https://example.com',
  ariaLabel: 'Custom Link',
}
```

### Change Icon Size

```typescript
icon: <Github size={24} />  // Larger icons
```

### Vertical Layout

Edit `src/components/SocialLinks/SocialLinks.css`:

```css
.social-links {
  flex-direction: column;  /* Stack vertically */
  gap: var(--spacing-sm);
}
```

## 🎬 Background Customization

### Use Static Image Instead of Video

Edit `src/pages/Home.tsx`:

```tsx
<div className="background-video-container">
  <div 
    className="background-image"
    style={{ backgroundImage: 'url(/assets/images/background.jpg)' }}
  />
  <div className="background-overlay" />
</div>
```

Add to `src/pages/Home.css`:

```css
.background-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### Multiple Background Images (Slideshow)

Create a new component `BackgroundSlideshow.tsx` with rotating images.

### Gradient Background

```css
.background-video-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change Overlay Opacity

Edit `src/pages/Home.css`:

```css
.background-overlay {
  background: linear-gradient(
    135deg,
    rgba(10, 10, 15, 0.7) 0%,    /* Less opaque - default 0.85 */
    rgba(26, 26, 46, 0.6) 100%   /* Less opaque - default 0.75 */
  );
}
```

## 📱 Mobile Customization

### Adjust Mobile Breakpoints

Edit any `.css` file's media queries:

```css
/* Default mobile breakpoint */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Smaller phones */
@media (max-width: 480px) {
  /* Small phone styles */
}

/* Tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet styles */
}
```

### Hide Elements on Mobile

```css
@media (max-width: 768px) {
  .snow-effect {
    display: none;  /* Disable snow on mobile for performance */
  }
}
```

## 🎯 Advanced Customizations

### Add Custom Fonts

1. Add font files to `public/assets/fonts/`
2. Update `src/styles/variables.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/CustomFont.woff2') format('woff2');
}

:root {
  --font-family: 'CustomFont', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Add Glow Effects

```css
.profile-avatar:hover {
  box-shadow: 0 0 30px rgba(0, 217, 255, 0.6),
              0 0 60px rgba(0, 217, 255, 0.4);
}
```

### Cursor Effects

```css
body {
  cursor: url('/assets/images/cursor.png'), auto;
}

a:hover, button:hover {
  cursor: url('/assets/images/cursor-pointer.png'), pointer;
}
```

### Add Scanline Effect

```css
.home-page::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  z-index: 9999;
}
```

## 🔄 Component Reordering

### Change Component Order

Edit `src/pages/Home.tsx`:

```tsx
<div className="content-wrapper">
  <MusicPlayer track={musicTrack} />      {/* Move up */}
  <ProfileCard profile={userProfile} />   {/* Move down */}
  <SocialLinks links={socialLinks} />
</div>
```

### Side-by-Side Layout

Edit `src/pages/Home.css`:

```css
.content-wrapper {
  flex-direction: row;       /* Horizontal layout */
  flex-wrap: wrap;           /* Wrap on small screens */
  justify-content: center;
}
```

## 💾 Saving Your Customizations

1. **Git Version Control:**
   ```bash
   git init
   git add .
   git commit -m "My customizations"
   ```

2. **Backup Settings:**
   - Copy `src/styles/variables.css`
   - Save your color schemes
   - Document your changes

3. **Create Themes:**
   ```typescript
   // src/styles/themes/dark.css
   // src/styles/themes/light.css
   // Toggle between them
   ```

## 🎨 Design Tips

1. **Contrast:** Ensure text is readable against backgrounds
2. **Consistency:** Use the same accent color throughout
3. **Spacing:** Maintain consistent spacing (use CSS variables)
4. **Performance:** Test animations on mobile devices
5. **Accessibility:** Ensure sufficient color contrast ratios
6. **Testing:** View on multiple devices and browsers

## 🔍 Finding Inspiration

- **Dribbble:** https://dribbble.com/
- **Behance:** https://www.behance.net/
- **Awwwards:** https://www.awwwards.com/
- **CodePen:** https://codepen.io/
- Look at other guns.lol sites for ideas

## ⚠️ Common Pitfalls

1. **Don't** make the glass effect too opaque (loses the effect)
2. **Don't** use too many animations (can be distracting)
3. **Don't** forget mobile responsiveness
4. **Don't** use low-contrast colors (accessibility)
5. **Test** your changes before deploying

Happy customizing! 🎨
