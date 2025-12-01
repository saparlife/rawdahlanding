# Rawdah App Store Screenshot Generator

Generates 20 screenshots for App Store:
- 5 screens for iPhone (1242 × 2688px)
- 5 screens for iPad (2064 × 2752px)
- In Russian and English

## Screens

1. **Hero** - Main value proposition with logo
2. **Names** - List of 99 names with audio
3. **Quiz** - Interactive quiz interface
4. **Gamification** - XP, streaks, achievements
5. **Themes** - Dark/light themes + features

## Installation

```bash
cd screenshot-generator
npm install
```

## Usage

Generate all 20 screenshots:
```bash
npm run generate
```

## Output Structure

```
output/
├── ru/
│   ├── iphone/
│   │   ├── 1_hero.png
│   │   ├── 2_names.png
│   │   ├── 3_quiz.png
│   │   ├── 4_gamification.png
│   │   └── 5_themes.png
│   └── ipad/
│       └── ... (same files)
└── en/
    ├── iphone/
    └── ipad/
```

## App Store Requirements

| Device | Size | Files |
|--------|------|-------|
| iPhone 6.5" | 1242 × 2688 | `iphone/` folder |
| iPad 12.9" | 2064 × 2752 | `ipad/` folder |
