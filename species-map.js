// Individual species tracking map with animated monthly transitions
// Uses config.js for species data configuration
// Uses circular-controls.js for the month selector UI

mapboxgl.accessToken = MAPBOX_TOKEN;

// ============================================================
// CONSTANTS
// ============================================================
const MONTH_ABBREV = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ============================================================
// ANIMATION STATE
// ============================================================
let monthA = 1;
let monthB = 2;
let phase = 0;
let startTime = null;
let animFrame = null;
let isPlaying = false;
let morphDuration = 1000;

// Heatmap settings
let intensityMultiplier = 1.0;
let radiusMultiplier = 1.0;

// Circular controls instance
let circularControls = null;

// ============================================================
// INITIALIZE MAP
// ============================================================
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-110, 35],
    zoom: 2
});

// Add navigation controls
map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');

// ============================================================
// UI UPDATE FUNCTIONS
// ============================================================
function updateLabels() {
    const label = MONTH_NAMES[monthA - 1];
    const monthLabel = document.getElementById('monthLabel');
    const monthBottom = document.getElementById('monthBottom');
    
    if (monthLabel) monthLabel.textContent = label;
    if (monthBottom) monthBottom.textContent = label;
    
    // Update circular controls if initialized
    if (circularControls) {
        circularControls.externalSetMonth(monthA);
    }
}

// ============================================================
// MAP FILTER AND PAINT FUNCTIONS
// ============================================================
function setFilterAll() {
    SPECIES_CONFIG.forEach(species => {
        if (map.getLayer(species.id)) {
            map.setFilter(species.id, [
                'in', ['get', 'month'],
                ['literal', [monthA, monthB]]
            ]);
        }
    });
}

function setWeightAll(phaseVal) {
    // Get active preset filters if available
    const presetFilters = typeof window.getActivePresetFilters === 'function'
        ? window.getActivePresetFilters()
        : null;

    SPECIES_CONFIG.forEach(species => {
        if (!map.getLayer(species.id)) return;

        let weightExpr;

        // Check if this layer needs ocean filtering from active preset
        let oceanList = null;
        if (presetFilters) {
            const layerId = species.id.toLowerCase();
            for (const [key, oceans] of Object.entries(presetFilters)) {
                if (layerId.includes(key.toLowerCase())) {
                    oceanList = oceans;
                    break;
                }
            }
        }

        if (oceanList) {
            // Combine month-based weight with ocean filter
            weightExpr = [
                'case',
                ['in', ['get', 'ocean'], ['literal', oceanList]],
                [
                    'case',
                    ['==', ['get', 'month'], monthA], 1 - phaseVal,
                    ['==', ['get', 'month'], monthB], phaseVal,
                    0
                ],
                0  // Not in allowed oceans = 0 weight
            ];
        } else {
            // Just month-based weight
            weightExpr = [
                'case',
                ['==', ['get', 'month'], monthA], 1 - phaseVal,
                ['==', ['get', 'month'], monthB], phaseVal,
                0
            ];
        }

        map.setPaintProperty(species.id, 'heatmap-weight', weightExpr);
    });
}

function applyIntensityAll() {
    SPECIES_CONFIG.forEach(species => {
        if (map.getLayer(species.id)) {
            map.setPaintProperty(species.id, 'heatmap-intensity', [
                'interpolate', ['linear'], ['zoom'],
                0, 0.5 * intensityMultiplier,
                5, 1.0 * intensityMultiplier,
                8, 1.5 * intensityMultiplier
            ]);
        }
    });
}

function applyRadiusAll() {
    SPECIES_CONFIG.forEach(species => {
        if (map.getLayer(species.id)) {
            map.setPaintProperty(species.id, 'heatmap-radius', [
                'interpolate', ['linear'], ['zoom'],
                0, 2 * radiusMultiplier,
                4, 12 * radiusMultiplier,
                8, 24 * radiusMultiplier
            ]);
        }
    });
}

function snapToCurrentMonth() {
    phase = 0;
    setFilterAll();
    setWeightAll(0);
}

// ============================================================
// ANIMATION FUNCTIONS
// ============================================================
function stepAnimation(timestamp) {
    if (!isPlaying) return;
    
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    phase = Math.min(elapsed / morphDuration, 1);
    
    setWeightAll(phase);
    
    if (phase < 1) {
        animFrame = requestAnimationFrame(stepAnimation);
    } else {
        // Advance to next month
        monthA = monthB;
        monthB = (monthA % 12) + 1;
        setFilterAll();
        updateLabels();
        startTime = null;
        phase = 0;
        
        if (isPlaying) {
            animFrame = requestAnimationFrame(stepAnimation);
        }
    }
}

function startAnimation() {
    if (isPlaying) return;
    isPlaying = true;
    
    // Update circular controls
    if (circularControls) {
        circularControls.setPlaying(true);
    }
    
    monthB = (monthA % 12) + 1;
    setFilterAll();
    startTime = null;
    phase = 0;
    animFrame = requestAnimationFrame(stepAnimation);
}

function stopAnimation() {
    isPlaying = false;
    
    // Update circular controls
    if (circularControls) {
        circularControls.setPlaying(false);
    }
    
    if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
    }
    startTime = null;
}

function setMonth(month) {
    stopAnimation();
    monthA = month;
    monthB = (monthA % 12) + 1;
    
    updateLabels();
    snapToCurrentMonth();
}

// ============================================================
// LEGEND WITH TOGGLES
// ============================================================
function generateLegendWithToggles() {
    const container = document.getElementById('legendSpecies');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (SPECIES_CONFIG.length === 0) {
        container.innerHTML = '<div class="legend-no-data">No species data available</div>';
        return;
    }
    
    SPECIES_CONFIG.forEach(species => {
        const row = document.createElement('label');
        row.className = 'legend-row';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.setAttribute('data-layer', species.id);
        
        const colorDiv = document.createElement('div');
        colorDiv.className = 'legend-color';
        
        // Handle both 6-char (#RRGGBB) and 8-char (#RRGGBBAA) hex colors
        let baseColor = species.color.base;
        // Remove alpha channel if present (8-char hex becomes 6-char)
        if (baseColor.length === 9) {
            baseColor = baseColor.slice(0, 7);
        }
        colorDiv.style.background = `linear-gradient(to right, ${baseColor}33, ${baseColor})`;
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'legend-name';
        nameSpan.textContent = species.name;
        
        row.appendChild(checkbox);
        row.appendChild(colorDiv);
        row.appendChild(nameSpan);
        container.appendChild(row);
        
        checkbox.addEventListener('change', (e) => {
            const layerId = e.target.getAttribute('data-layer');
            const visible = e.target.checked ? 'visible' : 'none';
            if (map.getLayer(layerId)) {
                map.setLayoutProperty(layerId, 'visibility', visible);
            }
        });
    });
}

// ============================================================
// INITIALIZE CIRCULAR CONTROLS
// ============================================================
function initCircularControls() {
    if (typeof CircularControls === 'undefined') {
        console.warn('CircularControls not loaded, falling back to basic controls');
        return;
    }
    
    circularControls = new CircularControls({
        container: '#controls',
        onMonthChange: (month) => {
            setMonth(month);
        },
        onPlayToggle: () => {
            isPlaying ? stopAnimation() : startAnimation();
        },
        getIsPlaying: () => isPlaying,
        getCurrentMonth: () => monthA
    });
}

// ============================================================
// ANIMATION SETTINGS PANEL
// ============================================================
const settingsPanel = document.getElementById('settingsPanel');
const settingsToggle = document.getElementById('settingsToggle');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const intensitySlider = document.getElementById('intensitySlider');
const intensityValue = document.getElementById('intensityValue');
const radiusSlider = document.getElementById('radiusSlider');
const radiusValue = document.getElementById('radiusValue');
const resetSettings = document.getElementById('resetSettings');
const presetBtns = document.querySelectorAll('.preset-btn[data-speed]');

// Default values
const defaults = {
    speed: 1000,
    intensity: 100,
    radius: 100
};

// Toggle panel
if (settingsToggle) {
    settingsToggle.addEventListener('click', () => {
        settingsPanel.classList.toggle('open');
    });
}

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (settingsPanel && !settingsPanel.contains(e.target)) {
        settingsPanel.classList.remove('open');
    }
});

// Update slider track fill
function updateSliderFill(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const percentage = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #2c7ab8 ${percentage}%, #e0e0e0 ${percentage}%)`;
}

// Speed slider
if (speedSlider) {
    speedSlider.addEventListener('input', () => {
        const value = parseInt(speedSlider.value);
        morphDuration = value;
        speedValue.textContent = (value / 1000).toFixed(1) + 's';
        updateSliderFill(speedSlider);
        
        presetBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.speed) === value);
        });
    });
}

// Speed presets
presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const speed = parseInt(btn.dataset.speed);
        speedSlider.value = speed;
        morphDuration = speed;
        speedValue.textContent = (speed / 1000).toFixed(1) + 's';
        updateSliderFill(speedSlider);
        
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Intensity slider
if (intensitySlider) {
    intensitySlider.addEventListener('input', () => {
        const value = parseInt(intensitySlider.value);
        intensityValue.textContent = value + '%';
        updateSliderFill(intensitySlider);
        
        intensityMultiplier = value / 100;
        applyIntensityAll();
    });
}

// Radius slider
if (radiusSlider) {
    radiusSlider.addEventListener('input', () => {
        const value = parseInt(radiusSlider.value);
        radiusValue.textContent = value + '%';
        updateSliderFill(radiusSlider);
        
        radiusMultiplier = value / 100;
        applyRadiusAll();
    });
}

// Reset button
if (resetSettings) {
    resetSettings.addEventListener('click', () => {
        // Reset speed
        speedSlider.value = defaults.speed;
        morphDuration = defaults.speed;
        speedValue.textContent = '1.0s';
        updateSliderFill(speedSlider);
        presetBtns.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.speed) === defaults.speed);
        });
        
        // Reset intensity
        intensitySlider.value = defaults.intensity;
        intensityValue.textContent = '100%';
        updateSliderFill(intensitySlider);
        intensityMultiplier = 1.0;
        applyIntensityAll();
        
        // Reset radius
        radiusSlider.value = defaults.radius;
        radiusValue.textContent = '100%';
        updateSliderFill(radiusSlider);
        radiusMultiplier = 1.0;
        applyRadiusAll();
    });
}

// ============================================================
// UPDATE DESCRIPTION TEXT
// ============================================================
function updateDescriptionText() {
    const descEl = document.getElementById('speciesDescription');
    if (!descEl) return;
    
    if (SPECIES_CONFIG.length === 0) {
        descEl.textContent = 'No species data currently available.';
        return;
    }
    
    const speciesList = SPECIES_CONFIG.map(sp => {
        const range = sp.dateRange;
        return `<strong>${sp.name} (${range.startYear}-${range.endYear})</strong>`;
    }).join(', ');
    
    descEl.innerHTML = `Data sourced from <a href="https://www.gbif.org" target="_blank" rel="noopener noreferrer">GBIF</a> includes: ${speciesList}.`;
}

// ============================================================
// MAP LOAD EVENT
// ============================================================
map.on('load', () => {
    console.log('Map loaded. SPECIES_CONFIG:', SPECIES_CONFIG);
    
    // Generate dynamic UI elements
    generateLegendWithToggles();
    updateDescriptionText();
    initCircularControls();
    
    // Initialize slider fills
    updateSliderFill(speedSlider);
    updateSliderFill(intensitySlider);
    updateSliderFill(radiusSlider);
    
    if (SPECIES_CONFIG.length === 0) {
        console.warn('No species configured. Check that whale-species.js is loaded and has species with hasMapData: true and valid mapConfig.');
        return;
    }
    
    // Add all species sources
    SPECIES_CONFIG.forEach(species => {
        console.log('Adding source:', species.sourceId, species.url);
        map.addSource(species.sourceId, {
            type: 'vector',
            url: species.url
        });
    });
    
    // Add all species heatmap layers
    SPECIES_CONFIG.forEach(species => {
        console.log('Adding layer:', species.id);
        map.addLayer({
            id: species.id,
            type: 'heatmap',
            source: species.sourceId,
            'source-layer': species.sourceLayer,
            maxzoom: 9,
            paint: {
                ...HEATMAP_PAINT_BASE,
                'heatmap-color': species.color.heatmap
            }
        }, 'waterway-label');
    });
    
    // Initialize state
    setFilterAll();
    setWeightAll(0);
    updateLabels();
});