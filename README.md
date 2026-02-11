---
# guns.lol Clone - [https://guns.lol/mrx404](https://guns.lol/mrx404)

A modern, glassmorphism-style link-in-bio website inspired by guns.lol, featuring a music player and particle effects.

## Features

* 🎨 Glassmorphism design with neon glow effects
* 🎵 Built-in music player with controls
* 🌨️ Animated snow/particle effects
* 📱 Fully responsive (mobile & desktop)
* ⚡ Built with React, TypeScript, and Vite

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Assets

Place your files in the `public/assets/` directory:

* `public/assets/videos/bg.mp4` - Background video
* `public/assets/images/avatar.png` - Your avatar image
* `public/assets/music/song.mp3` - Background music

### 3. Configure Your Profile

Edit `src/data/socialLinks.tsx` and `src/pages/Home.tsx` to update:

* Username
* Real name
* Country
* Social media links

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Project Structure

```
guns-lol-clone/
├─ public/
│  └─ assets/
│     ├─ videos/bg.mp4
│     ├─ images/avatar.png
│     └─ music/song.mp3
├─ src/
│  ├─ app/
│  ├─ components/
│  ├─ pages/
│  ├─ hooks/
│  ├─ data/
│  ├─ styles/
│  ├─ types/
│  └─ utils/
└─ ...config files
```

## Customization

* **Colors**: Edit `src/styles/variables.css`
* **Animations**: Edit `src/styles/animations.css`
* **Social Links**: Edit `src/data/socialLinks.tsx`
* **Profile Info**: Edit `src/pages/Home.tsx`

## Technologies Used

* React 18
* TypeScript
* Vite
* Lucide React (icons)
* CSS3 (Glassmorphism)

## License

MIT

---

**Created by [Elshodbek Mukhtorov (MasterTechCode)](https://github.com/MasterTechCode)**

⭐ If you liked this project, don’t forget to give it a star!

---
