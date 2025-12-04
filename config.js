// Shared configuration for whale species map data
// Centralized configuration makes adding new species straightforward

const MAPBOX_TOKEN = 'pk.eyJ1IjoicXR5cmVlIiwiYSI6ImNtaHl5eHNmeDBoY3oybXEwNTIxNGgxYmsifQ.VqoAKKHQxQX-lNNPwVKHmw';

const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Species configuration array - add new species here
const SPECIES_CONFIG = [
    {
        id: 'blue_2008_heat',
        name: 'Blue Whale',
        scientificName: 'Balaenoptera musculus',
        sourceId: 'blue_2008_src',
        url: 'mapbox://qtyree.5dg1e85w',
        sourceLayer: 'Blue_whale_merged_2008_2006_2-bhifyv',
        color: {
            base: '#0066ff',
            heatmap: [
                'interpolate', ['linear'], ['heatmap-density'],
                0.0, 'rgba(0,0,0,0)',
                0.3, 'rgba(150,200,255,0.6)',
                0.6, 'rgba(70,130,255,0.8)',
                1.0, 'rgba(0,60,200,0.95)'
            ]
        },
        dateRange: '2006-2025'
    },
    {
        id: 'sperm_2019_heat',
        name: 'Sperm Whale',
        scientificName: 'Physeter macrocephalus',
        sourceId: 'sperm_2019_src',
        url: 'mapbox://qtyree.d1dgy295',
        sourceLayer: 'Sperm_whale_gbif_2006_2025-09g1qn',
        color: {
            base: '#d7263d',
            heatmap: [
                'interpolate', ['linear'], ['heatmap-density'],
                0.0, 'rgba(0,0,0,0)',
                0.3, 'rgba(255,180,160,0.6)',
                0.6, 'rgba(230,80,60,0.8)',
                1.0, 'rgba(200,30,30,0.95)'
            ]
        },
        dateRange: '2006-2025'
    },
    {
        id: 'humpback_2019_heat',
        name: 'Humpback Whale',
        scientificName: 'Megaptera novaeangliae',
        sourceId: 'humpback_2019_src',
        url: 'mapbox://qtyree.3w2ef80k',
        sourceLayer: 'Humpback_whale_merged_2019_Au-59si9c',
        color: {
            base: '#00a65a',
            heatmap: [
                'interpolate', ['linear'], ['heatmap-density'],
                0.0, 'rgba(0,0,0,0)',
                0.3, 'rgba(180,240,190,0.6)',
                0.6, 'rgba(80,200,120,0.8)',
                1.0, 'rgba(0,140,60,0.95)'
            ]
        },
        dateRange: '2017-2025'
    }
];

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
