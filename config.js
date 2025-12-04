// Shared configuration for whale species map data
// Map data is sourced from whale-species.js - make sure it's loaded first!

const MAPBOX_TOKEN = 'pk.eyJ1IjoicXR5cmVlIiwiYSI6ImNtaHl5eHNmeDBoY3oybXEwNTIxNGgxYmsifQ.VqoAKKHQxQX-lNNPwVKHmw';

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Build SPECIES_CONFIG from WHALE_SPECIES (defined in whale-species.js)
let SPECIES_CONFIG = [];

if (typeof WHALE_SPECIES !== 'undefined' && Array.isArray(WHALE_SPECIES)) {
    SPECIES_CONFIG = WHALE_SPECIES
        .filter(sp => sp.mapConfig && sp.hasMapData)
        .map(sp => ({
            id: sp.mapConfig.id,
            name: sp.commonName,
            scientificName: sp.scientificName,
            sourceId: sp.mapConfig.sourceId,
            url: sp.mapConfig.url,
            sourceLayer: sp.mapConfig.sourceLayer,
            color: sp.mapConfig.color,
            dateRange: sp.mapConfig.dateRange
        }));
} else {
    console.error('WHALE_SPECIES not found. Make sure whale-species.js is loaded before config.js');
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

// Helper function to get all species configs for a location's species list
function getSpeciesConfigsForLocation(locationSpeciesList) {
    if (!Array.isArray(locationSpeciesList)) return [];
    return locationSpeciesList
        .map(name => getSpeciesConfigByName(name))
        .filter(config => config !== null && config !== undefined);
}
