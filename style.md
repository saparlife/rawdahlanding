# Rawdah Design System

## Color Palette

### Dark Theme

```
Background:        #0a0a0a
Foreground:        #ededed
Surface:           #050505
Card Background:   rgba(255, 255, 255, 0.05)
Card Border:       rgba(255, 255, 255, 0.1)
Card Border Hover: rgba(255, 255, 255, 0.2)
Text Primary:      #ffffff
Text Secondary:    #9ca3af
Text Muted:        #6b7280
Icon Color:        #ffffff
Badge Background:  rgba(16, 185, 129, 0.1)
Badge Border:      rgba(16, 185, 129, 0.2)
```

### Light Theme

```
Background:        #ffffff
Foreground:        #121826
Surface:           #f8fafc
Card Background:   #ffffff
Card Border:       #e2e8f0
Card Border Hover: #10b981
Text Primary:      #121826
Text Secondary:    #475569
Text Muted:        #64748b
Icon Color:        #0f172a
Badge Background:  rgba(16, 185, 129, 0.15)
Badge Border:      rgba(16, 185, 129, 0.3)
```

### Accent Colors (Gradients)

```
Primary Gradient:     emerald-500 (#10B981) → teal-500 (#14B8A6)
Primary Gradient Hex: #10B981 → #14B8A6
Hover Gradient:       emerald-400 (#34D399) → teal-400 (#2DD4BF)

XP Badge:             yellow-400 (#FACC15) → orange-500 (#F97316)
Streak Badge:         orange-500 (#F97316) → red-500 (#EF4444)
Achievement Badge:    purple-500 (#A855F7) → pink-500 (#EC4899)
Stats Blue:           blue-500 (#3B82F6) → cyan-500 (#06B6D4)
Stats Yellow:         yellow-500 (#EAB308) → orange-500 (#F97316)
```

### Shadows

```
Primary Shadow:       0 10px 15px -3px rgba(16, 185, 129, 0.2)
Emerald Glow:         0 0 60px rgba(16, 185, 129, 0.3)
Card Shadow (Light):  0 1px 3px rgba(0, 0, 0, 0.1)
```

## Components

### Cards

```
Border Radius:    24px (large) / 16px (medium) / 12px (small)
Background:       Card Background color
Border:           1px solid Card Border color
Hover Border:     Card Border Hover color
Blur Effect:      backdrop-blur-sm (dark theme only)
Hover Transform:  scale(1.02) translateY(-4px)
Transition:       all 300ms ease
```

### Buttons

#### Primary Button
```
Background:       Linear gradient (Primary Gradient)
Text Color:       #ffffff
Border Radius:    12px
Padding:          12px 20px (small) / 16px 32px (large)
Shadow:           Primary Shadow
Hover:            scale(1.05), lighter gradient
```

#### Secondary Button
```
Background:       Surface color
Text Color:       Text Primary
Border:           1px solid Card Border
Border Radius:    12px
Hover:            Background emerald-500, Text white
```

### Icon Badges

```
Size:             64px × 64px (large) / 40px × 40px (small)
Border Radius:    16px
Background:       Linear gradient (varies by type)
Icon Size:        32px (large) / 20px (small)
Icon Color:       #ffffff
Hover:            scale(1.1)
```

### Input Fields

```
Background:       Surface color
Border:           1px solid Card Border
Border Radius:    12px
Padding:          12px 16px
Text Color:       Text Primary
Placeholder:      Text Muted
Focus Ring:       2px solid #10B981
```

## Effects

### Glow Effects (Dark Theme)

```
Large Background Glow:  600px circle, emerald-500/10-20, blur 120px
Small Hover Glow:       Full element size, emerald-500/20, blur 24px
```

### Animations

```
Fade In:          opacity 0 → 1, duration 600ms
Slide Up:         translateY(20px) → 0
Scale Hover:      scale(1.02) - scale(1.1)
Transition:       300ms ease
```

## Typography

### Font Family
```
Primary:          Inter, system-ui, sans-serif
Arabic:           serif (for Arabic text)
```

### Font Sizes
```
Hero Title:       48px - 72px (responsive)
Section Title:    36px - 48px
Card Title:       20px - 24px
Body:             16px - 18px
Small/Label:      12px - 14px
```

### Font Weights
```
Bold:             700 (headings)
Semibold:         600 (buttons, labels)
Medium:           500 (body emphasis)
Normal:           400 (body text)
```

## Flutter Implementation

### Colors (Dart)

```dart
// Dark Theme
class DarkColors {
  static const background = Color(0xFF0A0A0A);
  static const surface = Color(0xFF050505);
  static const cardBg = Color(0x0DFFFFFF); // 5% white
  static const cardBorder = Color(0x1AFFFFFF); // 10% white
  static const textPrimary = Color(0xFFFFFFFF);
  static const textSecondary = Color(0xFF9CA3AF);
  static const textMuted = Color(0xFF6B7280);

  static const emerald500 = Color(0xFF10B981);
  static const teal500 = Color(0xFF14B8A6);
  static const emerald400 = Color(0xFF34D399);
  static const teal400 = Color(0xFF2DD4BF);
}

// Light Theme
class LightColors {
  static const background = Color(0xFFFFFFFF);
  static const surface = Color(0xFFF8FAFC);
  static const cardBg = Color(0xFFFFFFFF);
  static const cardBorder = Color(0xFFE2E8F0);
  static const textPrimary = Color(0xFF121826);
  static const textSecondary = Color(0xFF475569);
  static const textMuted = Color(0xFF64748B);

  static const emerald500 = Color(0xFF10B981);
  static const teal500 = Color(0xFF14B8A6);
}

// Accent Colors (same for both themes)
class AccentColors {
  static const emerald500 = Color(0xFF10B981);
  static const emerald400 = Color(0xFF34D399);
  static const teal500 = Color(0xFF14B8A6);
  static const teal400 = Color(0xFF2DD4BF);
  static const yellow400 = Color(0xFFFACC15);
  static const orange500 = Color(0xFFF97316);
  static const red500 = Color(0xFFEF4444);
  static const purple500 = Color(0xFFA855F7);
  static const pink500 = Color(0xFFEC4899);
  static const blue500 = Color(0xFF3B82F6);
  static const cyan500 = Color(0xFF06B6D4);
}
```

### Gradients (Dart)

```dart
// Primary gradient
LinearGradient primaryGradient = LinearGradient(
  colors: [Color(0xFF10B981), Color(0xFF14B8A6)],
  begin: Alignment.centerLeft,
  end: Alignment.centerRight,
);

// XP Badge gradient
LinearGradient xpGradient = LinearGradient(
  colors: [Color(0xFFFACC15), Color(0xFFF97316)],
);

// Streak gradient
LinearGradient streakGradient = LinearGradient(
  colors: [Color(0xFFF97316), Color(0xFFEF4444)],
);
```

### Border Radius

```dart
BorderRadius.circular(24) // Cards, large components
BorderRadius.circular(16) // Medium components, badges
BorderRadius.circular(12) // Buttons, inputs
BorderRadius.circular(8)  // Small elements
```

### Shadows

```dart
// Primary button shadow
BoxShadow(
  color: Color(0xFF10B981).withOpacity(0.2),
  blurRadius: 15,
  offset: Offset(0, 10),
)

// Card shadow (light theme)
BoxShadow(
  color: Colors.black.withOpacity(0.1),
  blurRadius: 3,
  offset: Offset(0, 1),
)
```
