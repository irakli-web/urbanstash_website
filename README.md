# UrbanStash - Unit Details Page

Storage rental unit details page with improved UX for double-stacked small units.

## Getting Started

```bash
npm install
npm start
```

## UX Design Decisions for Double-Stacked Small Units

### The Challenge
Small units are physically double-stacked (upper and bottom positions). Users need to:
1. Understand the difference between stack locations
2. Make an informed choice based on accessibility vs. price
3. Easily select their preferred option

### Solution Overview

#### 1. Availability Section Enhancements

**Visual Indicators:**
- "Double Stacked" badge on the Small category card
- Color-coded stack locations: Blue (Upper), Green (Bottom)
- Arrow icons to reinforce the physical positioning concept

**Stack Location Toggle:**
- Three-way filter: All Units | Upper | Bottom
- Inline explanation cards showing the trade-offs:
  - Upper: "Best value • Requires step stool"
  - Bottom: "Easy access • Ground level"

**Unit Cards:**
- When "All Units" is selected, each unit displays its stack location badge
- Sorted by size or price with easy toggle

#### 2. Application Form Enhancements

**Progressive Disclosure:**
- Stack Location selector only appears when "Small" size is selected
- Prevents confusion for Medium/Large units that don't have stack locations

**Visual Selection:**
- Three-button toggle: Any Location | Upper | Bottom
- Contextual hint message appears when Upper or Bottom is selected
- Dropdown options include stack location in the label

**Unit Preview:**
- Selected unit shows full details including stack location badge
- Clear price display

### Color Coding System

| Location | Primary Color | Usage |
|----------|--------------|-------|
| Upper | Blue (#3B82F6) | Badges, toggle buttons, borders |
| Bottom | Green (#22C55E) | Badges, toggle buttons, borders |
| Neutral/All | Orange (#F97316) | Primary brand color, active states |

### Data Structure

```javascript
unitData.small = {
  upper: [...], // Units with 3.5ft height
  bottom: [...] // Units with 4ft height (more headroom)
}
```

Key differences between stack locations:
- Upper units: 3.5ft height, ~3-5% lower price
- Bottom units: 4ft height, easier ground-level access

## File Structure

```
src/
├── components/
│   ├── AvailabilitySection.jsx  # Main availability listing
│   ├── ApplicationForm.jsx       # Booking form with stack selection
│   └── StackLocationBadge.jsx    # Reusable badge component
├── data/
│   └── units.js                  # Unit data and helper functions
├── App.jsx
└── index.js
```
