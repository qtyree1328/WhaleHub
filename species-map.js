// Individual species tracking map with animated monthly transitions
// Uses config.js for species data configuration

mapboxgl.accessToken = MAPBOX_TOKEN;

// Animation state
let monthA = 1;
let monthB = 2;
let phase = 0;
let startTime = null;
let animFrame = null;
let isPlaying = true;
let morphDuration = 1500;
let extraBlur = 0.5;

// Initialize map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-110, 35],
    zoom: 2
});

// Add navigation controls
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// Update UI labels
function updateLabels() {
    const label = MONTH_NAMES[monthA - 1];
    document.getElementById('monthLabel').textContent = label;
    document.getElementById('monthBottom').textContent = label;
    document.getElementById('monthSlider').value = String(monthA);
}

// Apply month filter to all species layers
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

// Set heatmap weights for transition animation
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

// Apply blur radius for smooth morphing effect
function applyRadiusAll(phaseVal) {
    const blurFactor = Math.sin(phaseVal * Math.PI) * extraBlur;
    const factor = 1 + blurFactor;
    const radiusExpr = [
        'interpolate', ['linear'], ['zoom'],
        0, 2 * factor,
        4, 12 * factor,
        8, 24 * factor
    ];
    
    SPECIES_CONFIG.forEach(species => {
        if (map.getLayer(species.id)) {
            map.setPaintProperty(species.id, 'heatmap-radius', radiusExpr);
        }
    });
}

// Animation loop
function stepAnimation(timestamp) {
    if (!isPlaying) return;
    
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    phase = Math.min(elapsed / morphDuration, 1);
    
    setWeightAll(phase);
    applyRadiusAll(phase);
    
    // Update phase slider
    const phaseSlider = document.getElementById('phaseSlider');
    if (phaseSlider) phaseSlider.value = phase.toFixed(2);
    
    if (phase < 1) {
        animFrame = requestAnimationFrame(stepAnimation);
    } else {
        // Advance to next month
        monthA = monthB;
        monthB = (monthB % 12) + 1;
        setFilterAll();
        updateLabels();
        startTime = null;
        phase = 0;
        
        if (isPlaying) {
            animFrame = requestAnimationFrame(stepAnimation);
        }
    }
}

// Start animation
function startAnimation() {
    if (isPlaying) return;
    isPlaying = true;
    document.getElementById('playPause').textContent = 'Pause';
    monthB = (monthA % 12) + 1;
    setFilterAll();
    startTime = null;
    phase = 0;
    animFrame = requestAnimationFrame(stepAnimation);
}

// Stop animation
function stopAnimation() {
    isPlaying = false;
    document.getElementById('playPause').textContent = 'Play';
    if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
    }
    startTime = null;
}

// Map load event
map.on('load', () => {
    // Add all species sources
    SPECIES_CONFIG.forEach(species => {
        map.addSource(species.sourceId, {
            type: 'vector',
            url: species.url
        });
    });
    
    // Add all species heatmap layers
    SPECIES_CONFIG.forEach(species => {
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
    applyRadiusAll(0);
    updateLabels();
    
    // Start animation automatically
    animFrame = requestAnimationFrame(stepAnimation);
});

// Month slider control
document.getElementById('monthSlider').addEventListener('input', (e) => {
    stopAnimation();
    monthA = parseInt(e.target.value, 10);
    monthB = (monthA % 12) + 1;
    setFilterAll();
    phase = 0;
    setWeightAll(0);
    applyRadiusAll(0);
    document.getElementById('phaseSlider').value = '0';
    updateLabels();
});

// Play/pause button
document.getElementById('playPause').addEventListener('click', () => {
    isPlaying ? stopAnimation() : startAnimation();
});

// Species visibility toggles
document.querySelectorAll('#controls input[type="checkbox"][data-layer]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const layerId = e.target.getAttribute('data-layer');
        const visible = e.target.checked ? 'visible' : 'none';
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, 'visibility', visible);
        }
    });
});

// Animation controls panel toggle
const animPanelHeader = document.getElementById('animPanelHeader');
const animPanelBody = document.getElementById('animPanelBody');
const animPanelArrow = document.getElementById('animPanelArrow');
let animPanelOpen = false;

animPanelHeader.addEventListener('click', () => {
    animPanelOpen = !animPanelOpen;
    animPanelBody.style.display = animPanelOpen ? 'block' : 'none';
    animPanelArrow.textContent = animPanelOpen ? '▾' : '▸';
    animPanelArrow.style.transform = animPanelOpen ? 'rotate(0deg)' : 'rotate(0deg)';
});

// Phase slider (manual transition control)
document.getElementById('phaseSlider').addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) return;
    stopAnimation();
    phase = val;
    setWeightAll(phase);
    applyRadiusAll(phase);
});

// Duration input (animation speed)
document.getElementById('durationInput').addEventListener('change', (e) => {
    const sec = parseFloat(e.target.value);
    if (!isNaN(sec) && sec > 0) {
        morphDuration = sec * 1000;
    }
});

// Blur slider (blur strength)
document.getElementById('blurSlider').addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) {
        extraBlur = val;
        applyRadiusAll(phase);
    }
});
