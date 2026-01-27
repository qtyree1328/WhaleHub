# WhaleHub Codebase Documentation

> **Purpose**: This document preserves critical code patterns, UI settings, and architectural decisions to prevent accidental breakage during future edits.

---

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Critical Files & Dependencies](#critical-files--dependencies)
3. [CSS Variables & Design System](#css-variables--design-system)
4. [Mobile vs Desktop UI Settings](#mobile-vs-desktop-ui-settings)
5. [Month Slider Component](#month-slider-component)
6. [Map Integration (Mapbox)](#map-integration-mapbox)
7. [Data Structures](#data-structures)
8. [3D Whale Animation](#3d-whale-animation)
9. [Known Duplications & Conflicts](#known-duplications--conflicts)
10. [File-by-File Reference](#file-by-file-reference)

---

## Architecture Overview

### File Structure
```
WhaleHub/
├── index.html              # Home page with 3D whale animation
├── species.html            # Species tracking map with heatmaps
├── density-map.html        # Location-based density map with sidebar
├── whale-detail.html       # Individual whale species detail page
├── location-detail.html    # Individual location detail page
├── whale-species-gallery.html  # All species gallery
├── whale-locations-gallery.html # All locations gallery
├── about.html              # About page
│
├── styles.css              # Master stylesheet (2500+ lines)
├── config.js               # Shared configuration (Mapbox token, SPECIES_CONFIG)
├── circular-controls.js    # Shared month selector component
├── species-map.js          # Map logic for species.html
├── whale-species.js        # Whale species data array
├── whale-locations.js      # Whale watching locations data array
├── whale-scene.js          # 3D humpback whale animation (Three.js)
├── sperm-whale-scene.js    # 3D sperm whale animation (Three.js)
│
└── models/                 # 3D whale models (GLTF/Draco compressed)
```

### Script Load Order (CRITICAL)
Scripts MUST load in this order due to dependencies:

**For species.html:**
```html
1. whale-species.js     <!-- Defines WHALE_SPECIES array -->
2. config.js            <!-- Reads WHALE_SPECIES, builds SPECIES_CONFIG -->
3. circular-controls.js <!-- Month selector UI component -->
4. species-map.js       <!-- Uses SPECIES_CONFIG for map layers -->
```

**For density-map.html:**
```html
1. circular-controls.js <!-- Month selector component -->
2. whale-locations.js   <!-- Location data (doesn't need config.js) -->
```

**For index.html:**
```html
1. whale-scene.js       <!-- 3D animation (loaded in <head>) -->
2. three.js dependencies loaded via CDN
```

---

## Critical Files & Dependencies

### config.js (Lines 1-107)
**DO NOT MODIFY** without understanding dependencies:

| Export | Line | Used By | Purpose |
|--------|------|---------|---------|
| `MAPBOX_TOKEN` | 4 | species-map.js | Mapbox API authentication |
| `MONTH_NAMES` | 6-9 | species-map.js, circular-controls.js | Full month names array |
| `SPECIES_CONFIG` | 13-41 | species-map.js | Filtered species with map data |
| `HEATMAP_PAINT_BASE` | 67-84 | species-map.js | Base heatmap visual properties |
| `parseDateRange()` | 44-64 | config.js | Parse date ranges for filtering |
| `getSpeciesConfigByName()` | 87-93 | location pages | Lookup species config |

### HEATMAP_PAINT_BASE Settings (config.js:67-84)
```javascript
{
    'heatmap-weight': 1,
    'heatmap-intensity': [
        'interpolate', ['linear'], ['zoom'],
        0, 0.5,   // zoom 0 = intensity 0.5
        5, 1.0,   // zoom 5 = intensity 1.0
        8, 1.5    // zoom 8 = intensity 1.5
    ],
    'heatmap-radius': [
        'interpolate', ['linear'], ['zoom'],
        0, 2,     // zoom 0 = radius 2px
        4, 12,    // zoom 4 = radius 12px
        8, 24     // zoom 8 = radius 24px
    ],
    'heatmap-opacity': 0.85,
    'heatmap-opacity-transition': { duration: 0, delay: 0 },
    'heatmap-radius-transition': { duration: 0, delay: 0 }
}
```

---

## CSS Variables & Design System

### Master CSS Variables (styles.css:4-25)
**NEVER change these without updating all dependent code:**

```css
:root {
    /* Primary Colors */
    --primary: #0a4a7c;
    --primary-light: #1a6db0;
    --primary-dark: #062d4d;

    /* Accent Colors */
    --accent: #00c9a7;
    --accent-dark: #00a085;

    /* Surface Colors */
    --surface: #ffffff;
    --surface-alt: #f8fafc;

    /* Text Colors */
    --text: #1a2b3c;
    --text-muted: #5a6d7e;

    /* Border & Shadow */
    --border: #e2e8f0;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
    --shadow-xl: 0 12px 40px rgba(0,0,0,0.15);

    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;

    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-base: 0.25s ease;
    --transition-slow: 0.4s ease;
}
```

### Hard-coded Colors to Be Aware Of
These colors are NOT using CSS variables and appear in multiple places:

| Color | Hex | Usage | Files |
|-------|-----|-------|-------|
| Month Marker Blue | `#2c7ab8` | Active state, hover | styles.css (lines 1368, 1373, 1376, 1432, 1476, 1482, 1500, 1510) |
| Month Marker Gray | `#666` | Default text | styles.css (lines 1358, 1427) |
| Month Wheel Gradient | `#f8f9fa`, `#e9ecef` | Background gradient | styles.css (line 1345) |
| Playing State Green | `#27ae60` | Play button active | styles.css (lines 1464, 1469, 1487) |
| Dark Background | `#0a1628` | Hero, map backgrounds | index.html, species.html, density-map.html |
| Sidebar Blue | `#1a6db0` | Stat values | density-map.html (line 196) |

---

## Mobile vs Desktop UI Settings

### Responsive Breakpoints

| Breakpoint | Target | Description |
|------------|--------|-------------|
| `> 900px` | Desktop | Full navigation, full sidebar |
| `≤ 900px` | Tablet/Mobile | Hamburger menu appears |
| `≤ 768px` | Tablet | Controls shrink, map adjusts |
| `≤ 480px` | Phone | Ultra-compact controls |

### Navigation Breakpoints

**Desktop (> 900px):**
- Full horizontal nav-links visible
- `.nav-toggle` (hamburger) hidden

**Mobile (≤ 900px):**
```css
/* species.html, index.html, density-map.html inline styles */
#navbar .nav-links {
    display: none;                    /* Hidden by default */
    position: absolute;
    top: var(--nav-height);           /* 72px */
    background: rgba(10, 35, 66, 0.96);
}
#navbar.nav-open .nav-links {
    display: flex;                    /* Shown when .nav-open class added */
}
#navbar .nav-toggle {
    display: inline-flex;             /* Hamburger shown */
}
```

**Location:** Each HTML file has identical nav mobile styles in `<style>` tags (lines ~114-146 in species.html/index.html)

### Circular Controls Sizing

**Desktop (> 768px) - styles.css:1333-1517:**
```css
.circular-selector { width: 140px; height: 140px; }
.month-marker { width: 26px; height: 26px; font-size: 8px; }
.nav-ring { width: 70px; height: 70px; }
.center-display { width: 55px; height: 55px; }
.drag-handle { width: 24px; height: 24px; }
```

**Tablet (≤ 768px) - styles.css:1805-1865:**
```css
.circular-selector { width: 120px; height: 120px; }
.month-marker { width: 22px; height: 22px; font-size: 7px; }
.nav-ring { width: 60px; height: 60px; }
.center-display { width: 45px; height: 45px; }
.drag-handle { width: 20px; height: 20px; }
```

**Phone (≤ 480px) - styles.css:1867-1932:**
```css
.circular-selector { width: 100px; height: 100px; }
.month-marker { width: 18px; height: 18px; font-size: 6px; }
.nav-ring { width: 50px; height: 50px; }
.center-display { width: 35px; height: 35px; }
.drag-handle { width: 18px; height: 18px; }
```

### #controls Position Classes

**IMPORTANT:** The `#controls` element uses a class-based positioning system:

```css
/* styles.css:1314-1327 */

/* Default: Bottom RIGHT (for species.html) */
#controls:not(.controls-bottom-left) {
    bottom: 20px !important;
    right: 20px !important;
}

/* Alternative: Bottom LEFT (for index.html) */
#controls.controls-bottom-left {
    bottom: 30px !important;
    left: 30px !important;
}
```

**To position controls:**
- Add `class="controls-bottom-left"` to `#controls` div for bottom-left
- Leave class empty for default bottom-right position

### Map Sizing

**Desktop - styles.css:293-304:**
```css
#map {
    height: 75vh;
    min-height: 500px;
    max-width: 1400px;
    border-radius: var(--radius-lg);  /* 16px */
}
```

**Mobile (≤ 768px) - styles.css:317-324:**
```css
#map {
    height: 60vh;
    border-radius: 0;
    margin: 16px;
    width: calc(100% - 32px);
}
```

**density-map.html Override (inline styles:134-147):**
```css
#map {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    border-radius: 0 !important;
}
```

---

## Month Slider Component

### File: circular-controls.js (336 lines)

The circular month selector is a reusable component initialized on multiple pages.

### HTML Structure Generated (lines 50-85)
```html
<div id="controls">
    <div class="control-header">Month Selector</div>  <!-- Hidden by CSS -->
    <div class="circular-selector">
        <div class="month-wheel"></div>               <!-- Gradient background -->
        <div class="drag-handle" id="dragHandle"></div> <!-- Blue draggable ball -->

        <div class="nav-ring">                        <!-- Center ring -->
            <div class="nav-ring-half nav-ring-left">  <!-- Previous button -->
                <svg>...</svg>
            </div>
            <div class="nav-ring-half nav-ring-right"> <!-- Next button -->
                <svg>...</svg>
            </div>
        </div>

        <div class="center-display" id="centerPlayBtn">
            <div class="center-month">January</div>    <!-- Current month text -->
            <div class="center-play-icon">▶</div>      <!-- Play/pause icon -->
        </div>
    </div>

    <!-- Hidden compatibility elements (for legacy code) -->
    <input id="monthSlider" type="range" min="1" max="12" value="1">
</div>
```

### Initialization Pattern
```javascript
// In species-map.js (lines 281-298)
circularControls = new CircularControls({
    container: '#controls',
    onMonthChange: (month) => {
        setMonth(month);  // Update map filter
    },
    onPlayToggle: () => {
        isPlaying ? stopAnimation() : startAnimation();
    },
    getIsPlaying: () => isPlaying,
    getCurrentMonth: () => monthA
});
```

### Key Methods

| Method | Lines | Purpose |
|--------|-------|---------|
| `setMonth(month, dispatch)` | 268-289 | Set month, update UI, trigger callback |
| `externalSetMonth(month)` | 320-330 | Update from external source (no callback) |
| `setPlaying(isPlaying)` | 306-317 | Update play/pause visual state |
| `updateDragHandlePosition(month)` | 198-214 | Move blue dot to correct angle |
| `createMonthMarkers()` | 165-196 | Generate 12 month markers around wheel |

### Dynamic Sizing Logic (lines 171-174)
```javascript
const selectorSize = selectorRect.width;
const markerSize = selectorSize < 140 ? 22
                 : selectorSize < 160 ? 26
                 : 32;
const radius = (selectorSize / 2) - (markerSize / 2) - 2;
```

### Drag Handle Radius Calculation (line 204)
```javascript
const radius = selectorSize * 0.42;  // 42% of selector size
```

### CSS for Month Slider (styles.css:1333-1529)

**DO NOT CHANGE these core styles without testing on all breakpoints:**

```css
/* Main container - lines 1333-1338 */
.circular-selector {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 0 auto;
}

/* Background wheel - lines 1340-1347 */
.month-wheel {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Month markers - lines 1349-1377 */
.month-marker {
    width: 26px;
    height: 26px;
    font-size: 8px;
    color: #666;
}
.month-marker:hover {
    background: rgba(44, 122, 184, 0.15);
    color: #2c7ab8;
}
.month-marker.active {
    background: #2c7ab8;
    color: white;
}

/* Blue drag handle - lines 1494-1517 */
.drag-handle {
    width: 24px;
    height: 24px;
    background: #2c7ab8;
    border: 3px solid white;
    transform: translate(-50%, -50%);
}
```

---

## Map Integration (Mapbox)

### Mapbox Configuration

**Token Location:** config.js line 4
```javascript
const MAPBOX_TOKEN = 'pk.eyJ1IjoicXR5cmVlIi...';
```

**Map Style:** `mapbox://styles/mapbox/light-v11`

**Initial View (species-map.js:33-38):**
```javascript
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-110, 35],  // Pacific Ocean
    zoom: 2
});
```

### Species Layers (Generated from SPECIES_CONFIG)

Each species with `hasMapData: true` gets:
1. A **source** (vector tileset from Mapbox)
2. A **heatmap layer** with species-specific colors

**Layer Addition (species-map.js:476-489):**
```javascript
SPECIES_CONFIG.forEach(species => {
    map.addLayer({
        id: species.id,               // e.g., 'blue_whale_heat'
        type: 'heatmap',
        source: species.sourceId,     // e.g., 'blue_whale_src'
        'source-layer': species.sourceLayer,
        maxzoom: 9,
        paint: {
            ...HEATMAP_PAINT_BASE,
            'heatmap-color': species.color.heatmap
        }
    }, 'waterway-label');  // Insert below labels
});
```

### Month Filtering Logic (species-map.js:63-72)

```javascript
function setFilterAll() {
    SPECIES_CONFIG.forEach(species => {
        map.setFilter(species.id, [
            'in', ['get', 'month'],
            ['literal', [monthA, monthB]]  // Show only these 2 months
        ]);
    });
}
```

### Weight Blending for Smooth Transitions (species-map.js:74-122)

```javascript
function setWeightAll(phaseVal) {
    // phaseVal goes from 0 to 1 during animation
    weightExpr = [
        'case',
        ['==', ['get', 'month'], monthA], 1 - phaseVal,  // Fade out
        ['==', ['get', 'month'], monthB], phaseVal,       // Fade in
        0
    ];
    map.setPaintProperty(species.id, 'heatmap-weight', weightExpr);
}
```

### Animation State Variables (species-map.js:15-25)
```javascript
let monthA = 1;              // Current month (1-12)
let monthB = 2;              // Next month for transition
let phase = 0;               // Transition progress (0-1)
let morphDuration = 1000;    // Animation speed in ms
let isPlaying = false;       // Animation running?
let intensityMultiplier = 1.0;  // Settings panel control
let radiusMultiplier = 1.0;     // Settings panel control
```

### Animation Speed Presets (species-map.js:360-371)
```javascript
// Button data-speed values: [500, 1000, 2000]
presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        morphDuration = parseInt(btn.dataset.speed);
    });
});
```

---

## Data Structures

### WHALE_SPECIES Array (whale-species.js)

```javascript
const WHALE_SPECIES = [
    {
        id: 'blue-whale',                    // URL-safe unique ID
        commonName: 'Blue Whale',
        scientificName: 'Balaenoptera musculus',
        category: 'Baleen Whale',            // or 'Toothed Whale'
        hasMapData: true,                    // REQUIRED for map display

        // Images
        image: 'url',                        // Thumbnail for gallery
        heroImage: 'url',                    // Single hero image (legacy)
        heroImages: ['url1', 'url2'],        // Multiple images with arrows

        color: '#0066ff',                    // Brand color
        shortDescription: 'Brief text',
        fullDescription: `Long text with paragraphs`,

        stats: {
            length: 'Up to 100 ft (30 m)',
            weight: 'Up to 200 tons',
            lifespan: '80-90 years',
            diet: 'Krill',
            population: '10,000-25,000',
            status: 'Endangered'
        },

        migrationPattern: 'Description of migration',
        bestViewingMonths: [6, 7, 8, 9],     // 1-indexed months
        funFacts: ['Fact 1', 'Fact 2'],

        // Map configuration (only if hasMapData: true)
        mapConfig: {
            id: 'blue_whale_heat',           // Layer ID
            sourceId: 'blue_whale_src',      // Source ID
            url: 'mapbox://qtyree.tileset',  // Mapbox tileset URL
            sourceLayer: 'layer-name',       // Source layer in tileset
            color: {
                base: '#0066ff',             // Solid color for legend
                heatmap: [                   // Mapbox heatmap-color expression
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(209, 211, 251, 0)',
                    0.3, 'rgba(150,200,255,0.6)',
                    0.6, 'rgba(70,130,255,0.8)',
                    1.0, 'rgba(0,60,200,0.95)'
                ]
            },
            dateRange: { startYear: 2006, endYear: 2025 }
        }
    },
    // ... more species
];
```

### WHALE_WATCHING_LOCATIONS Array (whale-locations.js)

```javascript
const WHALE_WATCHING_LOCATIONS = [
    {
        name: "Juneau",
        location: "USA",                     // Country
        coordinates: [-134.4200, 58.3019],   // [longitude, latitude]
        entertainment: 94,                   // Score 0-100
        visibility: 70,                      // Score 0-100

        species: ["Humpback whale", "Orca"], // Species seen here
        bestMonths: [4, 5, 6, 7, 8, 9, 10],  // 1-indexed months
        specialNotes: "Brief highlight",
        fullDescription: `Long description`,
        accessibility: "Good",

        // Images - supports both formats
        imageUrl: 'single-url',              // Legacy single image
        imageUrls: ['url1', 'url2'],         // Multiple images with arrows

        industrySize: "20 operators, 68 vessels",
        annualVisitors: 400000,

        // Monthly whale density (0-5 scale, index 0 = January)
        monthlyDensity: [0, 0, 0, 3, 4, 4, 4, 4, 3, 2, 0, 0],

        // Per-species monthly presence (1 = present, 0 = absent)
        speciesMonthly: {
            "Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
        }
    },
    // ... more locations
];
```

---

## 3D Whale Animation

### File: whale-scene.js (283 lines)

Used on index.html for the scrolling whale animation.

### Configuration Object (lines 24-61)
```javascript
this.config = {
    // Whale path (start, middle, end positions)
    startPos: this.isMobile ? { x: -4, y: -0.8, z: 0 } : { x: -10, y: -1.2, z: 0 },
    midPos:   this.isMobile ? { x: 1, y: -2.5, z: 0 }  : { x: 3, y: -4, z: 0 },
    endPos:   this.isMobile ? { x: 4, y: -3.5, z: 0 }  : { x: 10, y: -6, z: 0 },

    // Rotation (radians)
    startRotation: this.isMobile ? { x: 0, y: Math.PI * 0.2, z: 0.03 }
                                 : { x: 0, y: Math.PI * 0.3, z: 0.05 },
    endRotation:   this.isMobile ? { x: 0, y: -Math.PI * 0.2, z: -0.03 }
                                 : { x: 0, y: -Math.PI * 0.3, z: -0.05 },

    // Scale
    startScale: this.isMobile ? 0.25 : 0.2,
    endScale:   this.isMobile ? 0.6 : 0.7,

    // Camera
    cameraZ: 14,
    fov: 45,

    // Colors
    backgroundColor: 0x0a1628,
    ambientColor: 0x4488cc,
    directionalColor: 0xffffff,

    // Animation clip
    animationName: 'Jump1_Anim',
    clipStart: 0.0,
    clipEnd: 0.37
};
```

### Mobile Detection (line 20-21)
```javascript
this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth < 768;
```

### Performance Optimizations
- **Mobile:** Antialiasing disabled, pixel ratio capped at 1.5
- **Desktop:** Antialiasing enabled, pixel ratio capped at 2

---

## Known Duplications & Conflicts

### 1. #controls Definition Conflict (HIGH PRIORITY)

**Problem:** `#controls` is defined in 3 places with `!important` flags:

| Location | Lines | Position | Issue |
|----------|-------|----------|-------|
| styles.css | 329-344 | bottom: 16px, left: 16px | Original linear controls |
| styles.css | 1301-1327 | bottom: 20px, right: 20px | Circular controls (current) |
| index.html inline | 133-148 | bottom: 30px, left: 30px | Page-specific override |

**Resolution:** Use the `.controls-bottom-left` class (styles.css:1322-1327) instead of inline overrides.

### 2. Month Name Arrays Duplicated

**Problem:** Month names defined in 3 places:

| File | Variable | Values |
|------|----------|--------|
| config.js:6-9 | `MONTH_NAMES` | Full names |
| circular-controls.js:17-19 | `monthNames`, `monthAbbrev` | Full + abbreviated |
| species-map.js:10 | `MONTH_ABBREV` | Abbreviated only |

**Recommendation:** Import from config.js instead of duplicating.

### 3. Navigation Styles Duplicated

**Problem:** Each HTML file contains identical nav styling in `<style>` tags:
- index.html: lines 28-125
- species.html: lines 19-146
- density-map.html: lines 18-104

All have the same:
- `--nav-height: 72px`
- `#navbar` positioning
- `.nav-toggle` hamburger styles
- Mobile media queries at 900px

**Recommendation:** Move to styles.css to avoid sync issues.

### 4. CSS Reset Duplicated

**Problem:** Each HTML file has its own CSS reset in `<style>`:
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 100%; height: 100%; margin: 0; padding: 0; }
```

**Locations:**
- species.html:32-46
- density-map.html:26-40
- index.html:32-43

### 5. !important Overuse

**Count:** 29 occurrences in styles.css

**Most problematic:**
- `#controls` position properties (lines 1302, 1315-1318, 1323-1326)
- `#map` sizing in density-map.html (lines 140-146)

**Why it matters:** Makes CSS specificity unpredictable; harder to override in page-specific contexts.

### 6. Inline Style Conflicts

**density-map.html** overrides styles.css for `#map`:
```css
/* styles.css:293-304 - Original */
#map {
    height: 75vh;
    max-width: 1400px;
    border-radius: var(--radius-lg);
}

/* density-map.html inline:134-147 - Override */
#map {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    border-radius: 0 !important;
}
```

This is intentional (full-width map in density-map), but uses `!important` to override.

---

## File-by-File Reference

### styles.css Section Map

| Lines | Section | Purpose |
|-------|---------|---------|
| 1-25 | CSS Variables | Design system tokens |
| 27-43 | Reset | Base styling |
| 45-217 | Navigation | Navbar, links, hamburger |
| 219-288 | Description | #description section |
| 290-355 | Map Container | #map base styles |
| 357-450 | Controls Panel | Original linear controls |
| 452-540 | Responsive Controls | Mobile adjustments |
| 1300-1530 | Circular Controls | Month selector wheel |
| 1532-1800 | Settings Panel | Animation settings dropdown |
| 1801-1932 | Responsive Circular | Mobile circular controls |
| 1933-2100 | Hero Section | index.html hero styling |
| 2100-2528 | Various | Page-specific styles |

### species-map.js Function Map

| Lines | Function | Purpose |
|-------|----------|---------|
| 33-38 | Map init | Create Mapbox map |
| 46-58 | updateLabels() | Update month display text |
| 63-72 | setFilterAll() | Filter layers by month |
| 74-122 | setWeightAll() | Blend weights for animation |
| 124-135 | applyIntensityAll() | Apply intensity slider |
| 137-148 | applyRadiusAll() | Apply radius slider |
| 159-183 | stepAnimation() | Animation frame loop |
| 185-214 | start/stopAnimation() | Play/pause control |
| 216-223 | setMonth() | Direct month selection |
| 228-276 | generateLegendWithToggles() | Create species legend |
| 281-298 | initCircularControls() | Initialize month selector |
| 448-495 | map.on('load') | Add sources and layers |

### circular-controls.js Method Map

| Lines | Method | Purpose |
|-------|--------|---------|
| 27-48 | setup() | DOM ready, create elements |
| 50-85 | createHTML() | Generate HTML structure |
| 100-163 | bindEvents() | Attach all event handlers |
| 165-196 | createMonthMarkers() | Generate 12 month markers |
| 198-214 | updateDragHandlePosition() | Position blue drag dot |
| 216-244 | startDrag/doDrag/endDrag() | Drag interaction |
| 246-266 | getAngleFromEvent/angleToMonth() | Convert position to month |
| 268-289 | setMonth() | Update month, trigger callback |
| 306-317 | setPlaying() | Update play/pause state |
| 320-330 | externalSetMonth() | Update from external source |

---

## Quick Reference Card

### Adding a New Species with Map Data
1. Add entry to `whale-species.js` with `hasMapData: true`
2. Create Mapbox tileset with `month` property (1-12)
3. Add `mapConfig` with unique `id`, `sourceId`, `url`, `sourceLayer`
4. Define `color.heatmap` gradient expression
5. Species automatically appears in SPECIES_CONFIG

### Changing Month Slider Position
1. Add/remove `controls-bottom-left` class on `#controls` element
2. Or modify styles.css lines 1314-1327

### Adjusting Mobile Breakpoints
1. Primary breakpoint: 900px (nav hamburger)
2. Controls scaling: 768px, 480px
3. Defined in: styles.css + each HTML file's inline styles

### Changing Animation Speed Defaults
1. `morphDuration` default: species-map.js line 21
2. Speed presets: `[500, 1000, 2000]` ms
3. Settings panel: species-map.js lines 360-371

### Map Visual Adjustments
1. Base settings: config.js HEATMAP_PAINT_BASE (lines 67-84)
2. Per-species colors: whale-species.js mapConfig.color.heatmap
3. Intensity/radius: species-map.js sliders (lines 373-395)

---

*Last updated: January 2025*
*Generated from codebase analysis*
