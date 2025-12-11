// Individual species tracking map with animated monthly transitions
// Uses config.js for species data configuration

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
    const centerMonth = document.getElementById('centerMonth');
    const monthSlider = document.getElementById('monthSlider');
    
    if (monthLabel) monthLabel.textContent = label;
    if (monthBottom) monthBottom.textContent = label;
    if (centerMonth) centerMonth.textContent = label;
    if (monthSlider) monthSlider.value = String(monthA);
    
    // Update month markers
    document.querySelectorAll('.month-marker').forEach((marker, idx) => {
        marker.classList.toggle('active', idx + 1 === monthA);
    });
    
    // Update rotation indicator
    updateRotationIndicator(monthA);
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
    const weightExpr = [
        'case',
        ['==', ['get', 'month'], monthA], 1 - phaseVal,
        ['==', ['get', 'month'], monthB], phaseVal,
        0
    ];
    
    SPECIES_CONFIG.forEach(species => {
        if (map.getLayer(species.id)) {
            map.setPaintProperty(species.id, 'heatmap-weight', weightExpr);
        }
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
    
    // Update center button
    const centerPlayBtn = document.getElementById('centerPlayBtn');
    const centerPlayIcon = document.getElementById('centerPlayIcon');
    if (centerPlayBtn) centerPlayBtn.classList.add('playing');
    if (centerPlayIcon) centerPlayIcon.textContent = '⏸';
    
    // Update hidden button for compatibility
    const playPauseBtn = document.getElementById('playPause');
    if (playPauseBtn) {
        playPauseBtn.textContent = '⏸ Pause';
        playPauseBtn.classList.add('playing');
    }
    
    monthB = (monthA % 12) + 1;
    setFilterAll();
    startTime = null;
    phase = 0;
    animFrame = requestAnimationFrame(stepAnimation);
}

function stopAnimation() {
    isPlaying = false;
    
    // Update center button
    const centerPlayBtn = document.getElementById('centerPlayBtn');
    const centerPlayIcon = document.getElementById('centerPlayIcon');
    if (centerPlayBtn) centerPlayBtn.classList.remove('playing');
    if (centerPlayIcon) centerPlayIcon.textContent = '▶';
    
    // Update hidden button for compatibility
    const playPauseBtn = document.getElementById('playPause');
    if (playPauseBtn) {
        playPauseBtn.textContent = '▶ Play';
        playPauseBtn.classList.remove('playing');
    }
    
    if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
    }
    startTime = null;
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
// CIRCULAR SELECTOR
// ============================================================
const circularSelector = document.querySelector('.circular-selector');
const rotationIndicator = document.getElementById('rotationIndicator');
const centerMonth = document.getElementById('centerMonth');
const dragRing = document.getElementById('dragRing');

let currentRotationAngle = -90;

function createMonthMarkers() {
    if (!circularSelector) return;
    
    // Clear existing markers
    const existingMarkers = circularSelector.querySelectorAll('.month-marker');
    existingMarkers.forEach(m => m.remove());
    
    // Get actual size of the circular selector
    const selectorRect = circularSelector.getBoundingClientRect();
    const selectorSize = selectorRect.width;
    
    // Calculate dimensions based on actual size
    const centerX = selectorSize / 2;
    const centerY = selectorSize / 2;
    const radius = selectorSize * 0.4;
    const markerSize = Math.max(16, selectorSize * 0.2);
    const markerOffset = markerSize / 2;
    
    MONTH_ABBREV.forEach((month, index) => {
        const angle = (index * 30 - 90) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle) - markerOffset;
        const y = centerY + radius * Math.sin(angle) - markerOffset;
        
        const marker = document.createElement('div');
        marker.className = 'month-marker';
        marker.textContent = month;
        marker.dataset.month = index + 1;
        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;
        
        if (index + 1 === monthA) {
            marker.classList.add('active');
        }
        
        marker.addEventListener('click', () => {
            setMonth(index + 1);
        });
        
        circularSelector.appendChild(marker);
    });
}

function updateRotationIndicator(monthIndex) {
    if (!rotationIndicator) return;
    
    const targetAngle = (monthIndex - 1) * 30 - 90;
    
    const normalizedCurrent = ((currentRotationAngle % 360) + 360) % 360;
    const normalizedTarget = ((targetAngle % 360) + 360) % 360;
    
    let diff = normalizedTarget - normalizedCurrent;
    
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    currentRotationAngle += diff;
    rotationIndicator.style.transform = `rotate(${currentRotationAngle}deg)`;
}

function setMonth(month) {
    stopAnimation();
    monthA = month;
    monthB = (monthA % 12) + 1;
    
    updateLabels();
    snapToCurrentMonth();
}

// Drag functionality
let isDragging = false;

function getAngleFromEvent(e) {
    if (!circularSelector) return 0;
    const rect = circularSelector.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
}

function getMonthFromAngle(angle) {
    let normalizedAngle = (angle + 90 + 360) % 360;
    return Math.floor(normalizedAngle / 30) + 1;
}

if (dragRing) {
    dragRing.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    dragRing.addEventListener('touchstart', (e) => {
        isDragging = true;
    }, { passive: true });
}

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentAngle = getAngleFromEvent(e);
    const month = getMonthFromAngle(currentAngle);
    if (month !== monthA) {
        setMonth(month);
    }
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentAngle = getAngleFromEvent(e);
    const month = getMonthFromAngle(currentAngle);
    if (month !== monthA) {
        setMonth(month);
    }
}, { passive: true });

document.addEventListener('mouseup', () => { isDragging = false; });
document.addEventListener('touchend', () => { isDragging = false; });

// Arrow navigation (hidden buttons for compatibility)
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
        const newMonth = monthA === 1 ? 12 : monthA - 1;
        setMonth(newMonth);
    });
}

if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
        const newMonth = monthA === 12 ? 1 : monthA + 1;
        setMonth(newMonth);
    });
}

// Nav ring halves (visible left/right buttons)
const navRingLeft = document.getElementById('navRingLeft');
const navRingRight = document.getElementById('navRingRight');

if (navRingLeft) {
    navRingLeft.addEventListener('click', (e) => {
        e.stopPropagation();
        const newMonth = monthA === 1 ? 12 : monthA - 1;
        setMonth(newMonth);
    });
}

if (navRingRight) {
    navRingRight.addEventListener('click', (e) => {
        e.stopPropagation();
        const newMonth = monthA === 12 ? 1 : monthA + 1;
        setMonth(newMonth);
    });
}

// Resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        createMonthMarkers();
    }, 150);
});

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
    createMonthMarkers();
    
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

// ============================================================
// PLAY/PAUSE BUTTON (center and hidden)
// ============================================================
const centerPlayBtn = document.getElementById('centerPlayBtn');
if (centerPlayBtn) {
    centerPlayBtn.addEventListener('click', (e) => {
        // Prevent drag from triggering play
        if (e.target.closest('.drag-ring')) return;
        isPlaying ? stopAnimation() : startAnimation();
    });
}

const playPauseBtn = document.getElementById('playPause');
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        isPlaying ? stopAnimation() : startAnimation();
    });
}

// Hidden month slider (for compatibility)
const monthSlider = document.getElementById('monthSlider');
if (monthSlider) {
    monthSlider.addEventListener('input', (e) => {
        const month = parseInt(e.target.value, 10);
        setMonth(month);
    });
}