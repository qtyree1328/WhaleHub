# Whale Migration & Observation Guide

A multi-page interactive website for visualizing whale migration patterns and observation data using Mapbox GL JS and GBIF data.

## Project Structure

```
whale-migration-site/
├── index.html               # Main page - Aggregated whale density map with POI locations
├── species.html             # Species tracking - Multi-species animated heatmaps
├── whale-species-gallery.html # Species gallery - Browse all whale species
├── whale-detail.html        # Species detail - Individual species info + map
├── styles.css               # Shared styles with CSS variables and animations
├── config.js                # Centralized Mapbox and species data configuration
├── species-map.js           # JavaScript for species tracking animations
├── whale-species.js         # Whale species database with detailed information
├── whale-locations.js       # Whale watching locations database
└── README.md                # This file
```

## Pages

### 1. Density Map (index.html)
- **Aggregated View**: Combined density heatmap of all whale species
- **Monthly Animation**: Smooth month-to-month transitions
- **Whale Watching POIs**: Click black pins to explore premier viewing locations
- **Location Details**: Side panel with ratings, species present, best months, and tourism stats

### 2. Species Tracking (species.html)
- **Individual Species Colors**: 
  - Blue Whales: Blue
  - Sperm Whales: Red  
  - Humpback Whales: Green
- **Toggle Visibility**: Show/hide individual species layers
- **Animation Controls**: Adjust transition speed, blur strength, and position
- **Overlay Visualization**: See where different species overlap

### 3. Whale Species Gallery (whale-species-gallery.html)
- **Species Cards**: Visual cards for all whale species
- **Data Availability**: Badge indicates which species have map data
- **Quick Info**: Category, scientific name, and brief description
- **Navigation**: Click any card to view detailed species information

### 4. Species Detail (whale-detail.html)
- **Hero Section**: Full-width species image with overlay
- **Detailed Information**: Full description, migration patterns, fun facts
- **Quick Stats**: Length, weight, lifespan, diet, population, conservation status
- **Distribution Map**: Individual heatmap for species with available data

## Current Species Data

Species with Mapbox heatmap data:
1. **Blue Whale** (*Balaenoptera musculus*) - 2006-2025
2. **Sperm Whale** (*Physeter macrocephalus*) - 2006-2025
3. **Humpback Whale** (*Megaptera novaeangliae*) - 2017-2025

Species with info pages (awaiting map data):
- Orca (*Orcinus orca*)
- Gray Whale (*Eschrichtius robustus*)
- Fin Whale (*Balaenoptera physalus*)
- Beluga Whale (*Delphinapterus leucas*)
- Southern Right Whale (*Eubalaena australis*)
- Minke Whale (*Balaenoptera acutorostrata*)
- Bryde's Whale (*Balaenoptera brydei*)

## How to Add More Species

### Adding Map Data for Existing Species

1. Prepare and upload GBIF data to Mapbox as a tileset
2. In `config.js`, add a new entry to `SPECIES_CONFIG`:

```javascript
{
    id: 'orca_heat',
    name: 'Orca',
    scientificName: 'Orcinus orca',
    sourceId: 'orca_src',
    url: 'mapbox://your-tileset-url',
    sourceLayer: 'your-source-layer-name',
    color: {
        base: '#1a1a2e',
        heatmap: [
            'interpolate', ['linear'], ['heatmap-density'],
            0.0, 'rgba(0,0,0,0)',
            0.3, 'rgba(100,100,120,0.6)',
            0.6, 'rgba(50,50,70,0.8)',
            1.0, 'rgba(26,26,46,0.95)'
        ]
    },
    dateRange: '2010-2025'
}
```

3. In `whale-species.js`, update the corresponding species entry:
   - Set `hasMapData: true`

### Adding New Species

1. In `whale-species.js`, add a new species object with all required fields
2. If map data is available, also add to `config.js`

## Customization

### Animation Settings
- `morphDuration`: Milliseconds per month transition (default: 1500)
- `extraBlur`: Transition blur intensity (default: 0.5)

### Map Style
Change the Mapbox style in map initialization:
```javascript
style: 'mapbox://styles/mapbox/light-v11'  // or dark-v11, streets-v12
```

### Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #0a4a7c;
    --primary-light: #1a6db0;
    --accent: #00c9a7;
    /* ... */
}
```

## Data Sources

- Whale observation data: [GBIF (Global Biodiversity Information Facility)](https://www.gbif.org)
- Whale watching locations: Curated database with ratings and seasonal information

## Technology Stack

- **Mapbox GL JS v3.17.0**: Interactive map rendering
- **Vanilla JavaScript**: No frameworks required
- **CSS3**: Modern styling with CSS variables, animations, and responsive design
- **Google Fonts**: Inter font family

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Credits

Created by Quintin Tyree

Data provided by GBIF.org
