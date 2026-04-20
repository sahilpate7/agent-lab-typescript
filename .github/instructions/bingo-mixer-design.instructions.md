---
name: bingo-mixer-design
description: Design guide for Bingo Mixer cyberpunk neon aesthetic. Covers color system, typography, animations, and component patterns for consistent, modern UI.
---

# Bingo Mixer Design System

## Design Philosophy

**Cyberpunk Neon Aesthetic**: Bold, futuristic, energetic. High-contrast neon colors on deep dark backgrounds create an immersive, game-like experience that feels genuinely designed for a social mixer app.

**No Generic AI Design**: Every component should feel purposeful and distinctive. Avoid default gray/white/blue palettes. Commit fully to the neon aesthetic across all screens.

---

## Color System

### Core Palette
Define all colors in `src/index.css` using `@theme`:

```css
--color-bg-dark: #0a0e27          /* Primary dark background */
--color-bg-darker: #050710        /* Secondary darker background */
--color-neon-cyan: #00ff88         /* Primary accent - bright, eye-catching */
--color-neon-magenta: #ff0088     /* Secondary accent - marked squares */
--color-neon-purple: #9d00ff      /* Tertiary accent - celebrations/wins */
--color-neon-pink: #ff006e        /* Quaternary accent - alternative highlights */
--color-neon-lime: #39ff14        /* Rare use - special moments only */
--color-text-primary: #e0e0ff     /* Main text - light purple-white */
--color-text-secondary: #a0a0ff   /* Secondary text - dimmer */
```

### Usage Rules
- **Backgrounds**: Always use `from-bg-dark` or `from-bg-darker` gradients, never solid colors
- **Accents**: Use neon colors sparingly for maximum impact (buttons, marked squares, wins)
- **Text**: Use `text-text-primary` by default, `text-text-secondary` for hints/labels
- **Consistency**: All components must use `@theme` variables, never hardcoded colors

### Accessibility
- Neon colors have 7:1+ contrast with dark backgrounds (WCAG AAA compliant)
- Never rely on color alone to convey information - always use text labels or patterns
- Ensure hover/focus states are clear with distinct color changes

---

## Typography

### Font Stack
```css
--font-heading: "Space Mono", monospace
--font-body: "JetBrains Mono", "Courier New", monospace
```

**Space Mono** (Headers, titles, CTAs):
- Bold, geometric, cyberpunk feel
- Use for all h1, h2, section titles, button labels
- Always `font-heading` + `font-black` or `font-bold`
- Add `tracking-widest` or `tracking-wider` for emphasis
- Apply `glow-cyan`, `glow-magenta`, or `glow-purple` for visual interest

**JetBrains Mono** (Body text, descriptions):
- Monospace aesthetic maintains consistency
- Use for instructions, labels, secondary text
- Usually `font-body` with `font-semibold` for UI elements
- `text-text-secondary` for less important text

### Font Size Strategy
- Mobile-first: Use `text-sm` / `text-base` as defaults
- Scale with `sm:text-lg`, `sm:text-xl` for larger screens
- Ensure at least 16px on mobile for accessibility (no zooming required)

---

## Animation & Motion

### CSS-Only Animations
All animations should be pure CSS (no JavaScript animation libraries). Define keyframes in `src/index.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 136, 0.4); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.6); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

### Animation Usage Patterns

**High-Impact Moments**:
- **Page Load**: Animated gradient orbs (blob animation) in background
- **Button Hover**: Subtle glow intensification (`box-shadow` transition)
- **Square Mark**: Quick pulse effect on toggle + checkmark badge appearance
- **Win State**: Bounce animation on modal + pulsing status indicator

**Micro-Interactions**:
- `transition-all duration-200` for smooth state changes
- `animation-delay` for staggered reveals
- Never overuse animations - let them enhance key moments, not distract

### Rules
- Respect `prefers-reduced-motion` media query (optional but recommended)
- Keep animations under 500ms for UI feedback, 6-8s for background loops
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for easing (standard easing curve)

---

## Glow Effects

### Glow Utilities (defined in `src/index.css`)

**Text Glow**:
```css
.glow-cyan { text-shadow: 0 0 10px rgba(0, 255, 136, 0.8), 0 0 20px rgba(0, 255, 136, 0.4); }
.glow-magenta { text-shadow: 0 0 10px rgba(255, 0, 136, 0.8), 0 0 20px rgba(255, 0, 136, 0.4); }
.glow-purple { text-shadow: 0 0 15px rgba(157, 0, 255, 0.8), 0 0 30px rgba(157, 0, 255, 0.4); }
```

**Border Glow**:
```css
.border-glow-cyan { box-shadow: 0 0 10px rgba(0, 255, 136, 0.5), inset 0 0 10px rgba(0, 255, 136, 0.1); }
.border-glow-magenta { box-shadow: 0 0 10px rgba(255, 0, 136, 0.5), inset 0 0 10px rgba(255, 0, 136, 0.1); }
```

**Neon Button**:
```css
.neon-button {
  background: linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-magenta));
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.4), 0 0 40px rgba(255, 0, 136, 0.2);
}
.neon-button:hover { box-shadow: 0 0 30px rgba(0, 255, 136, 0.6), 0 0 60px rgba(255, 0, 136, 0.3); }
```

---

## Glassmorphism

### Glass Card Utilities

```css
.glass {
  background: rgba(10, 14, 39, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(224, 224, 255, 0.1);
}

.glass-glow {
  background: rgba(10, 14, 39, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(224, 224, 255, 0.2);
}
```

### Usage
- Use `.glass` for containers, cards, panels
- Use `.glass-glow` for emphasized containers (modals, headers)
- Add `border-glow-cyan` or `border-glow-magenta` for accent
- Always pair with dark background gradients

---

## Component Patterns

### Button Pattern
```tsx
<button className="neon-button px-8 py-4 rounded-lg font-heading text-lg uppercase tracking-widest">
  Button Label
</button>
```

### Card Pattern
```tsx
<div className="glass-glow rounded-2xl p-8 border-glow-cyan backdrop-blur-xl">
  {/* Content */}
</div>
```

### Section Pattern
```tsx
<div className="bg-gradient-to-br from-bg-dark to-bg-darker relative">
  {/* Background blobs for atmosphere */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan mix-blend-screen filter blur-3xl opacity-5"></div>
</div>
```

### Title Pattern
```tsx
<h1 className="text-5xl sm:text-7xl font-black font-heading gradient-text float-animation">
  Page Title
</h1>
```

---

## Responsive Design

### Mobile-First Approach
- Default breakpoint: mobile (320px+)
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+)

### Responsive Utilities
```tsx
<div className="p-4 sm:p-6 md:p-8">  /* Padding scales up */
  <h1 className="text-3xl sm:text-5xl md:text-7xl">  /* Titles scale */
<button className="px-4 sm:px-8">  /* Touch targets stay large */
```

### Touch-Friendly Targets
- Minimum 48px x 48px for touch targets (buttons, squares)
- Use `min-h-20` or `h-12` for adequate spacing
- Add hover states for mouse users: `hover:` variants

---

## Tailwind CSS v4 Usage

### @theme Configuration
All design tokens defined in `src/index.css` @theme block:

```css
@theme {
  --color-neon-cyan: #00ff88;
  --font-heading: "Space Mono", monospace;
}
```

Then use as Tailwind utilities:
```tsx
<div className="bg-neon-cyan text-neon-magenta font-heading">
```

### Layer Utilities
Custom utilities live in `@layer utilities`:

```css
@layer utilities {
  .glow-cyan { /* custom rules */ }
  .neon-button { /* custom rules */ }
  .glass { /* custom rules */ }
}
```

### No Config File
Keep `tailwind.config.js` deleted - all configuration via CSS `@theme` and `@layer`.

---

## Backgrounds

### Gradient Backgrounds
Always use layered gradients for depth:

```tsx
<div className="bg-gradient-to-br from-bg-darker via-bg-dark to-bg-darker">
  {/* Content */}
</div>
```

### Animated Background Elements
Add subtle, large blur circles for atmosphere (not distraction):

```tsx
<div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
```

**Rules**:
- Use `mix-blend-screen` for additive blending
- Set `opacity-5` to `opacity-10` (very subtle)
- Position absolutely, use `pointer-events-none` to not interfere

---

## State Management

### Interactive Elements
- **Default**: Subtle neon border, dark gradient background
- **Hover**: Intensified glow, slightly different background shade
- **Active**: Saturated neon color, inset shadow for "pressed" effect
- **Marked/Selected**: Gradient background with magenta accents

### Example - BingoSquare States
```tsx
// Unmarked
className="bg-gradient-to-br from-bg-dark to-bg-darker border-neon-cyan"

// Marked (not winning)
className="bg-gradient-to-br from-neon-magenta to-neon-pink border-neon-cyan text-bg-dark"

// Marked (winning line)
className="bg-gradient-to-br from-neon-purple via-neon-magenta to-neon-purple border-neon-purple glow-purple"
```

---

## Accessibility Checklist

- ✅ Color contrast: Neon on dark = 7:1+ (WCAG AAA)
- ✅ Focus states: Visible neon borders on all interactive elements
- ✅ Touch targets: Minimum 48px x 48px
- ✅ Text sizing: No smaller than 14px on mobile, preferably 16px+
- ✅ Semantic HTML: Use proper button, header, nav tags
- ✅ ARIA labels: Add `aria-label`, `aria-pressed`, `role` as needed
- ✅ Motion: Respect `prefers-reduced-motion` if possible
- ✅ Color blindness: Don't rely on color alone - use shapes, text, borders

---

## Common Patterns to Avoid

❌ **Generic colors**: No gray backgrounds, no system-ui fonts  
❌ **Cluttered animations**: Max 2-3 animations per screen  
❌ **Undersize buttons**: Everything must be at least 44px tall  
❌ **Low contrast**: All text must pass WCAG AA (4.5:1 minimum)  
❌ **Overuse of glow**: Save glow effects for emphasis moments  
❌ **Light mode**: Cyberpunk theme doesn't need light mode variant  

---

## Example: Well-Designed Component

```tsx
export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-bg-darker via-bg-dark to-bg-darker min-h-screen flex items-center">
      {/* Background atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl px-6">
        <h1 className="text-7xl font-black font-heading gradient-text mb-4">
          BINGO
        </h1>
        <p className="text-text-secondary text-xl glow-magenta mb-8">
          Find Your People
        </p>
        <button className="neon-button w-full px-12 py-5 rounded-lg font-heading text-lg uppercase">
          Enter Game
        </button>
      </div>
    </div>
  );
}
```

This component demonstrates:
- ✅ Gradient background with depth
- ✅ Subtle animated background blobs
- ✅ Bold typography with glow effects
- ✅ Neon button with proper sizing
- ✅ Relative/absolute positioning for layering
- ✅ No generic styling whatsoever

---

## Testing Design Changes

Before committing new components:
1. Check WCAG AA contrast on dark backgrounds
2. Test on mobile (375px width) and desktop (1920px)
3. Verify button targets are 48px+ tall
4. Ensure animations run smoothly (60fps on low-end mobile)
5. Preview in both light and dark modes (if applicable)
6. Test keyboard navigation and focus states

---

## Future Enhancement Ideas

- **Theming System**: Add theme toggle (could expand to other cyberpunk variants - Synthwave, Vaporwave, etc.)
- **Particle Effects**: CSS-based particle animations for special moments
- **Micro-interactions**: More button states, loading spinners, transitions
- **Sound Design**: Audio layer that complements visual effects
- **Haptic Feedback**: Mobile vibration patterns on events

---

**Last Updated**: April 2026  
**Aesthetic**: Cyberpunk Neon  
**Inspiration**: Blade Runner, Synthwave music, Gaming UIs