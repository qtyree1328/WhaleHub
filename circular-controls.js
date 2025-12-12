// ============================================================
// CIRCULAR MONTH SELECTOR COMPONENT
// Shared component for index.html and species.html
// ============================================================

// ============================================================
// CIRCULAR CONTROLS CLASS
// ============================================================
class CircularControls {
    constructor(options = {}) {
        this.containerSelector = options.container || '#controls';
        this.onMonthChange = options.onMonthChange || (() => {});
        this.onPlayToggle = options.onPlayToggle || (() => {});
        this.getIsPlaying = options.getIsPlaying || (() => false);
        this.getCurrentMonth = options.getCurrentMonth || (() => 1);
        
        this.monthAbbrev = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
        
        this.isDragging = false;
        this.currentMonth = 1;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.container = document.querySelector(this.containerSelector);
        if (!this.container) {
            console.warn('CircularControls: Container not found:', this.containerSelector);
            return;
        }
        
        this.createHTML();
        this.bindElements();
        this.bindEvents();
        this.createMonthMarkers();
        this.updateDragHandlePosition(1);
    }
    
    createHTML() {
        this.container.innerHTML = `
            <div class="control-header">Month Selector</div>
            <div class="circular-selector">
                <div class="month-wheel"></div>
                <div class="drag-handle" id="dragHandle"></div>
                
                <div class="nav-ring">
                    <div class="nav-ring-half nav-ring-left" id="navRingLeft">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </div>
                    <div class="nav-ring-half nav-ring-right" id="navRingRight">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </div>
                </div>
                
                <div class="center-display" id="centerPlayBtn">
                    <div class="center-month" id="centerMonth">January</div>
                    <div class="center-play-icon" id="centerPlayIcon">▶</div>
                </div>
            </div>
            
            <!-- Hidden elements for compatibility -->
            <div class="nav-arrows">
                <button class="nav-arrow" id="prevMonth" aria-label="Previous month"></button>
                <button class="nav-arrow" id="nextMonth" aria-label="Next month"></button>
            </div>
            <div class="play-controls">
                <button id="playPause" class="control-button">▶ Play</button>
            </div>
            <input id="monthSlider" type="range" min="1" max="12" step="1" value="1">
        `;
    }
    
    bindElements() {
        this.circularSelector = this.container.querySelector('.circular-selector');
        this.dragHandle = document.getElementById('dragHandle');
        this.centerPlayBtn = document.getElementById('centerPlayBtn');
        this.centerPlayIcon = document.getElementById('centerPlayIcon');
        this.centerMonth = document.getElementById('centerMonth');
        this.navRingLeft = document.getElementById('navRingLeft');
        this.navRingRight = document.getElementById('navRingRight');
        this.monthSlider = document.getElementById('monthSlider');
        this.playPauseBtn = document.getElementById('playPause');
    }
    
    bindEvents() {
        // Drag handle events
        if (this.dragHandle) {
            this.dragHandle.addEventListener('mousedown', (e) => this.startDrag(e));
            this.dragHandle.addEventListener('touchstart', (e) => this.startDrag(e), { passive: false });
        }
        
        document.addEventListener('mousemove', (e) => this.doDrag(e));
        document.addEventListener('touchmove', (e) => this.doDrag(e), { passive: false });
        document.addEventListener('mouseup', (e) => this.endDrag(e));
        document.addEventListener('touchend', (e) => this.endDrag(e));
        
        // Navigation ring events
        if (this.navRingLeft) {
            this.navRingLeft.addEventListener('click', (e) => {
                e.stopPropagation();
                const newMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1;
                this.setMonth(newMonth);
            });
        }
        
        if (this.navRingRight) {
            this.navRingRight.addEventListener('click', (e) => {
                e.stopPropagation();
                const newMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1;
                this.setMonth(newMonth);
            });
        }
        
        // Center play button
        if (this.centerPlayBtn) {
            this.centerPlayBtn.addEventListener('click', (e) => {
                if (e.target.closest('.drag-handle')) return;
                this.onPlayToggle();
            });
        }
        
        // Hidden play/pause button for compatibility
        if (this.playPauseBtn) {
            this.playPauseBtn.addEventListener('click', () => {
                this.onPlayToggle();
            });
        }
        
        // Hidden slider for compatibility
        if (this.monthSlider) {
            this.monthSlider.addEventListener('input', (e) => {
                const month = parseInt(e.target.value, 10);
                if (month !== this.currentMonth && !this.isDragging) {
                    this.setMonth(month, false); // Don't dispatch event to avoid loop
                }
            });
        }
        
        // Resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.createMonthMarkers();
                this.updateDragHandlePosition(this.currentMonth);
            }, 150);
        });
    }
    
    createMonthMarkers() {
        // Remove existing markers
        this.container.querySelectorAll('.month-marker').forEach(el => el.remove());
        
        if (!this.circularSelector) return;
        
        const selectorRect = this.circularSelector.getBoundingClientRect();
        const selectorSize = selectorRect.width;
        const markerSize = selectorSize < 140 ? 22 : selectorSize < 160 ? 26 : 32;
        const radius = (selectorSize / 2) - (markerSize / 2) - 2;
        
        this.monthAbbrev.forEach((abbrev, idx) => {
            const angle = ((idx / 12) * 360 - 90) * (Math.PI / 180);
            const x = (selectorSize / 2) + radius * Math.cos(angle) - (markerSize / 2);
            const y = (selectorSize / 2) + radius * Math.sin(angle) - (markerSize / 2);
            
            const marker = document.createElement('div');
            marker.className = 'month-marker' + (idx + 1 === this.currentMonth ? ' active' : '');
            marker.textContent = abbrev;
            marker.style.left = x + 'px';
            marker.style.top = y + 'px';
            marker.style.width = markerSize + 'px';
            marker.style.height = markerSize + 'px';
            marker.setAttribute('data-month', idx + 1);
            
            marker.addEventListener('click', () => {
                this.setMonth(idx + 1);
            });
            
            this.circularSelector.appendChild(marker);
        });
    }
    
    updateDragHandlePosition(month) {
        if (!this.dragHandle || !this.circularSelector) return;
        
        const selectorRect = this.circularSelector.getBoundingClientRect();
        const selectorSize = selectorRect.width;
        const angle = ((month - 1) / 12) * 360 - 90;
        const radius = selectorSize * 0.42;
        const centerX = selectorSize / 2;
        const centerY = selectorSize / 2;
        
        const radians = angle * (Math.PI / 180);
        const x = centerX + radius * Math.cos(radians);
        const y = centerY + radius * Math.sin(radians);
        
        this.dragHandle.style.left = x + 'px';
        this.dragHandle.style.top = y + 'px';
    }
    
    startDrag(e) {
        e.preventDefault();
        this.isDragging = true;
        if (this.dragHandle) {
            this.dragHandle.classList.add('dragging');
        }
        document.body.style.cursor = 'grabbing';
    }
    
    doDrag(e) {
        if (!this.isDragging || !this.circularSelector) return;
        e.preventDefault();
        
        const angle = this.getAngleFromEvent(e);
        const month = this.angleToMonth(angle);
        
        if (month !== this.currentMonth) {
            this.setMonth(month);
        }
    }
    
    endDrag(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        if (this.dragHandle) {
            this.dragHandle.classList.remove('dragging');
        }
        document.body.style.cursor = '';
    }
    
    getAngleFromEvent(e) {
        const rect = this.circularSelector.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        angle = (angle + 90 + 360) % 360;
        
        return angle;
    }
    
    angleToMonth(angle) {
        const month = Math.round((angle / 360) * 12) + 1;
        return month > 12 ? 1 : month;
    }
    
    setMonth(month, dispatch = true) {
        if (month < 1 || month > 12) return;
        
        this.currentMonth = month;
        this.updateLabels();
        this.updateDragHandlePosition(month);
        
        // Update month markers
        this.container.querySelectorAll('.month-marker').forEach((marker, idx) => {
            marker.classList.toggle('active', idx + 1 === month);
        });
        
        // Update hidden slider
        if (this.monthSlider) {
            this.monthSlider.value = String(month);
        }
        
        // Notify callback
        if (dispatch) {
            this.onMonthChange(month);
        }
    }
    
    updateLabels() {
        const label = this.monthNames[this.currentMonth - 1];
        
        if (this.centerMonth) {
            this.centerMonth.textContent = label;
        }
        
        // Also update any external labels
        const monthLabel = document.getElementById('monthLabel');
        const monthBottom = document.getElementById('monthBottom');
        
        if (monthLabel) monthLabel.textContent = label;
        if (monthBottom) monthBottom.textContent = label;
    }
    
    setPlaying(isPlaying) {
        if (this.centerPlayBtn) {
            this.centerPlayBtn.classList.toggle('playing', isPlaying);
        }
        if (this.centerPlayIcon) {
            this.centerPlayIcon.textContent = isPlaying ? '⏸' : '▶';
        }
        if (this.playPauseBtn) {
            this.playPauseBtn.textContent = isPlaying ? '⏸ Pause' : '▶ Play';
            this.playPauseBtn.classList.toggle('playing', isPlaying);
        }
    }
    
    // External update method for when month changes from outside
    externalSetMonth(month) {
        if (month !== this.currentMonth && !this.isDragging) {
            this.currentMonth = month;
            this.updateLabels();
            this.updateDragHandlePosition(month);
            
            this.container.querySelectorAll('.month-marker').forEach((marker, idx) => {
                marker.classList.toggle('active', idx + 1 === month);
            });
        }
    }
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.CircularControls = CircularControls;
}