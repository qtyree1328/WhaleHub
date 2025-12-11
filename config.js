// Shared configuration for whale species map data
// Map data is sourced from whale-species.js - make sure it's loaded first!

const MAPBOX_TOKEN = 'pk.eyJ1IjoicXR5cmVlIiwiYSI6ImNtaHl5eHNmeDBoY3oybXEwNTIxNGgxYmsifQ.VqoAKKHQxQX-lNNPwVKHmw';

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Build SPECIES_CONFIG from WHALE_SPECIES (defined in whale-species.js)
// Only includes species with hasMapData: true AND a valid mapConfig with url
let SPECIES_CONFIG = [];

if (typeof WHALE_SPECIES !== 'undefined' && Array.isArray(WHALE_SPECIES)) {
    SPECIES_CONFIG = WHALE_SPECIES
        .filter(sp => {
            // Must have hasMapData true
            if (!sp.hasMapData) return false;
            // Must have mapConfig object
            if (!sp.mapConfig) return false;
            // Must have a valid url (not empty, not a placeholder)
            if (!sp.mapConfig.url || sp.mapConfig.url.includes('TILESET_ID')) return false;
            return true;
        })
        .map(sp => ({
            id: sp.mapConfig.id,
            name: sp.commonName,
            scientificName: sp.scientificName,
            sourceId: sp.mapConfig.sourceId,
            url: sp.mapConfig.url,
            sourceLayer: sp.mapConfig.sourceLayer,
            color: sp.mapConfig.color,
            dateRange: parseDateRange(sp.mapConfig.dateRange)
        }));
    
    console.log('SPECIES_CONFIG built:', SPECIES_CONFIG.length, 'species');
    SPECIES_CONFIG.forEach(sp => console.log(' -', sp.name, sp.id));
} else {
    console.error('WHALE_SPECIES not found. Make sure whale-species.js is loaded before config.js');
}

// Parse dateRange - supports both string "2006-2025" and object { startYear, endYear }
function parseDateRange(dateRange) {
    if (!dateRange) {
        return { startYear: 2005, endYear: 2025 };
    }
    
    if (typeof dateRange === 'object' && dateRange.startYear && dateRange.endYear) {
        return dateRange;
    }
    
    if (typeof dateRange === 'string') {
        const parts = dateRange.split('-');
        if (parts.length === 2) {
            return {
                startYear: parseInt(parts[0], 10),
                endYear: parseInt(parts[1], 10)
            };
        }
    }
    
    return { startYear: 2005, endYear: 2025 };
}

// Shared base heatmap paint properties
const HEATMAP_PAINT_BASE = {
    'heatmap-weight': 1,
    'heatmap-intensity': [
        'interpolate', ['linear'], ['zoom'],
        0, 0.5,
        5, 1.0,
        8, 1.5
    ],
    'heatmap-radius': [
        'interpolate', ['linear'], ['zoom'],
        0, 2,
        4, 12,
        8, 24
    ],
    'heatmap-opacity': 0.85,
    'heatmap-opacity-transition': { duration: 0, delay: 0 },
    'heatmap-radius-transition': { duration: 0, delay: 0 },
    'heatmap-weight-transition': { duration: 0, delay: 0 }
};

// Helper function to get species config by common name
function getSpeciesConfigByName(commonName) {
    if (!commonName) return null;
    const normalizedName = commonName.toLowerCase().trim();
    return SPECIES_CONFIG.find(config => 
        config.name.toLowerCase() === normalizedName
    );
}

// Helper function to get species config by ID
function getSpeciesConfigById(id) {
    if (!id) return null;
    return SPECIES_CONFIG.find(config => config.id === id);
}

// Helper function to get all species configs for a location's species list
function getSpeciesConfigsForLocation(locationSpeciesList) {
    if (!Array.isArray(locationSpeciesList)) return [];
    return locationSpeciesList
        .map(name => getSpeciesConfigByName(name))
        .filter(config => config !== null && config !== undefined);
}