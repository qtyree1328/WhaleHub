/**
 * Sperm Whale Scene - Three.js
 * Separate configuration for sperm whale animation
 * Different from humpback - darker model needs brighter lighting, different proportions
 */

class SpermWhaleScene {
    constructor(container, modelPath) {
        this.container = container;
        this.modelPath = modelPath || 'models/Sperm_whale.glb';
        this.mixer = null;
        this.action = null;
        this.whale = null;
        this.clock = new THREE.Clock();
        this.scrollProgress = 0;
        this.animationDuration = 0;
        this.isLoaded = false;
        
        // Configuration - ALL CONTROLS HERE
        this.config = {
            // Swim controls
            swimStartX: -32,
            swimEndX: 12,
            swimStartY: -10,
            swimEndY: 2,
            swimStartZ: -32,
            swimEndZ: 8,
            swimSpeed: 2,
            swimDuration: 13000,
            swimScaleStart: 0.65,
            swimScaleEnd: 1.25,
            swimRotationX: 0,
            swimRotationY: Math.PI * 0.35,
            swimRotationZ: 0,
            swimProgressLead: 0.08,
            swimAutoStart: true,
            swimStartMargin:8,
            swimAutoEndMargin: null,
            
            // Camera
            cameraZ: 10,
            fov: 50,
            
            // Effects
            enableParticles: false,
            particleCount: 150,
            enableFog: true,
            fogNear: 25,
            fogFar: 100,
            enableLightRays: false,
            
            // Colors
            backgroundColor: 0x0a1628,
            fogColor: 0x1a5a8a,
            ambientColor: 0x88aacc,
            directionalColor: 0xffffff,
            
            swimAnimation: 'FastBreather_Anim',
            swimAnimationTrimStart: 0.2,
            swimAnimationTrimEnd: null,
            
            // Animation cleanup
            removePositionTracks: ['Bone', 'MasterBone.006'],
        };
        this.dynamicPath = {
            startX: this.config.swimStartX,
            endX: this.config.swimEndX
        };
        
        // Setup DRACO loader for compressed models
        this.setupDracoLoader();
        
        this.init();
    }
    
    setupDracoLoader() {
        // Create DRACO loader instance for compressed GLB files
        this.dracoLoader = new THREE.DRACOLoader();
        // Use Google's hosted DRACO decoder files
        this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        this.dracoLoader.setDecoderConfig({ type: 'js' });
    }
    
    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = null; // Transparent background
        
        if (this.config.enableFog) {
            this.scene.fog = new THREE.Fog(
                this.config.fogColor,
                this.config.fogNear,
                this.config.fogFar
            );
        }
        
        // Camera
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(this.config.fov, aspect, 0.1, 1000);
        this.camera.position.z = this.config.cameraZ;
        this.updateSwimBounds();
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.3; // Brighter exposure for dark whale
        this.container.appendChild(this.renderer.domElement);
        
        // Setup scene elements
        this.setupLighting();
        if (this.config.enableParticles) {
            this.setupParticles();
        }
        if (this.config.enableLightRays) {
            this.setupLightRays();
        }
        
        // Load whale model
        this.loadModel();
        
        // Event listeners
        window.addEventListener('resize', () => this.onResize());
        
        // Start render loop
        this.animate();
    }
    
    setupLighting() {
        // Brighter ambient light for dark sperm whale
        const ambient = new THREE.AmbientLight(this.config.ambientColor, 1.0);
        this.scene.add(ambient);
        
        // Main directional light (sun from above) - very bright
        const directional = new THREE.DirectionalLight(this.config.directionalColor, 1.5);
        directional.position.set(5, 10, 5);
        this.scene.add(directional);
        
        // Secondary top light
        const topLight = new THREE.DirectionalLight(0xffffff, 0.8);
        topLight.position.set(-3, 15, 0);
        this.scene.add(topLight);
        
        // Fill light from below (water reflection)
        const fillLight = new THREE.DirectionalLight(0x6699bb, 0.6);
        fillLight.position.set(-5, -5, 0);
        this.scene.add(fillLight);
        
        // Rim light for whale silhouette
        const rimLight = new THREE.DirectionalLight(0x88ccff, 0.7);
        rimLight.position.set(0, 0, -10);
        this.scene.add(rimLight);
        
        // Front fill light - key for seeing dark whale
        const frontFill = new THREE.DirectionalLight(0xaaddff, 0.6);
        frontFill.position.set(0, 2, 12);
        this.scene.add(frontFill);
        
        // Side lights for dimension
        const sideLeft = new THREE.DirectionalLight(0x99bbdd, 0.4);
        sideLeft.position.set(-10, 0, 0);
        this.scene.add(sideLeft);
        
        const sideRight = new THREE.DirectionalLight(0x99bbdd, 0.4);
        sideRight.position.set(10, 0, 0);
        this.scene.add(sideRight);
    }
    
    setupParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const sizes = [];
        
        for (let i = 0; i < this.config.particleCount; i++) {
            positions.push(
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20
            );
            sizes.push(Math.random() * 0.1 + 0.02);
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        
        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.08,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    
    setupLightRays() {
        // Volumetric light rays from surface
        this.lightRays = new THREE.Group();
        
        const rayGeometry = new THREE.PlaneGeometry(0.5, 30);
        const rayMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.03,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        
        for (let i = 0; i < 6; i++) {
            const ray = new THREE.Mesh(rayGeometry, rayMaterial.clone());
            ray.position.set(
                (Math.random() - 0.5) * 30,
                10,
                (Math.random() - 0.5) * 10 - 5
            );
            ray.rotation.x = Math.PI * 0.1;
            ray.rotation.z = (Math.random() - 0.5) * 0.3;
            this.lightRays.add(ray);
        }
        
        this.scene.add(this.lightRays);
    }
    
    // Remove duplicate static meshes (common issue with rigged GLB exports)
    removeDuplicateMeshes(scene) {
        const meshesToRemove = [];
        const skinnedMeshNames = new Set();
        
        // First pass: find all skinned mesh names
        scene.traverse((child) => {
            if (child.isSkinnedMesh) {
                skinnedMeshNames.add(child.name);
                if (child.geometry) {
                    child.geometry._isAnimated = true;
                }
            }
        });
        
        // Second pass: find regular meshes that duplicate skinned meshes
        scene.traverse((child) => {
            if (child.isMesh && !child.isSkinnedMesh) {
                if (skinnedMeshNames.size > 0) {
                    meshesToRemove.push(child);
                }
            }
        });
        
        // Remove the duplicates
        meshesToRemove.forEach(mesh => {
            if (mesh.parent) {
                console.log('Removing duplicate static mesh:', mesh.name);
                mesh.parent.remove(mesh);
            }
        });
        
        if (meshesToRemove.length > 0) {
            console.log(`Removed ${meshesToRemove.length} duplicate static mesh(es)`);
        }
    }
    
    loadModel() {
        const loader = new THREE.GLTFLoader();
        
        // Set DRACO loader for compressed models
        loader.setDRACOLoader(this.dracoLoader);
        
        loader.load(
            this.modelPath,
            (gltf) => {
                this.whale = gltf.scene;
                
                // Remove duplicate static meshes
                this.removeDuplicateMeshes(this.whale);
                
                // Center the model
                const box = new THREE.Box3().setFromObject(this.whale);
                const center = box.getCenter(new THREE.Vector3());
                this.whale.position.sub(center);
                
                // Create a parent group for easier transforms
                this.whaleGroup = new THREE.Group();
                this.whaleGroup.add(this.whale);
                this.scene.add(this.whaleGroup);
                
                // Set initial position, rotation, scale from config
                const startX = this.getSwimStartX();
                const startY = this.config.swimStartY ?? this.config.swimY ?? 0;
                this.whaleGroup.position.set(startX, startY, this.config.swimStartZ);
                const rotationX = this.config.swimRotationX ?? 0;
                const rotationY = this.config.swimRotationY ?? Math.PI / 2;
                const rotationZ = this.config.swimRotationZ ?? 0;
                this.whaleGroup.rotation.set(rotationX, rotationY, rotationZ);
                const initialScale = this.config.swimScaleStart || this.config.scale || 1;
                this.whaleGroup.scale.setScalar(initialScale);
                
                // Setup swim animation
                if (gltf.animations && gltf.animations.length > 0) {
                    this.mixer = new THREE.AnimationMixer(this.whale);
                    
                    let swimClip = gltf.animations.find(a => a.name === this.config.swimAnimation);
                    if (swimClip) {
                        swimClip = this.prepareAnimationClip(swimClip);
                        const action = this.mixer.clipAction(swimClip);
                        action.setLoop(THREE.LoopRepeat);
                        action.timeScale = this.config.swimSpeed;
                        action.clampWhenFinished = false;
                        action.play();
                    }
                }
                
                this.isLoaded = true;
            },
            (progress) => {
                const percent = (progress.loaded / progress.total * 100).toFixed(0);
                console.log('Loading sperm whale model:', percent + '%');
            },
            (error) => {
                console.error('Error loading sperm whale model:', error);
            }
        );
    }
    
    prepareAnimationClip(clip) {
        if (!clip) return null;
        
        const prepared = clip.clone();
        
        if (Array.isArray(this.config.removePositionTracks) && this.config.removePositionTracks.length > 0) {
            const blockedNames = new Set(
                this.config.removePositionTracks.map(name => `${name}.position`)
            );
            prepared.tracks = prepared.tracks.filter(track => !blockedNames.has(track.name));
        }
        
        this.trimClipToWindow(
            prepared,
            this.config.swimAnimationTrimStart,
            this.config.swimAnimationTrimEnd
        );
        
        this.makeLoopSeamless(prepared);
        prepared.resetDuration();
        prepared.optimize();
        return prepared;
    }
    
    makeLoopSeamless(clip) {
        clip.tracks.forEach(track => {
            if (!track || track.times.length < 2) return;
            
            const valueSize = track.getValueSize();
            const firstValues = track.values.slice(0, valueSize);
            const lastOffset = track.values.length - valueSize;
            
            for (let i = 0; i < valueSize; i++) {
                track.values[lastOffset + i] = firstValues[i];
            }
        });
    }
    
    trimClipToWindow(clip, startTime, endTime) {
        if (!clip) return;
        const duration = clip.duration;
        const hasStart = typeof startTime === 'number' && startTime > 0;
        const hasEnd = typeof endTime === 'number' && endTime > 0 && endTime < duration;
        if (!hasStart && !hasEnd) return;
        
        const safeStart = hasStart ? Math.min(Math.max(startTime, 0), duration) : 0;
        const safeEnd = hasEnd ? Math.min(Math.max(endTime, safeStart), duration) : duration;
        
        clip.tracks = clip.tracks
            .map(track => this.trimTrack(track, safeStart, safeEnd))
            .filter(track => !!track);
    }
    
    trimTrack(track, startTime, endTime) {
        if (!track || !track.times || track.times.length === 0) return track;
        
        const times = track.times;
        const values = track.values;
        const valueSize = track.getValueSize();
        const newTimes = [];
        const newValues = [];
        
        for (let i = 0; i < times.length; i++) {
            const time = times[i];
            if (time < startTime) continue;
            if (time > endTime) break;
            
            newTimes.push(time - startTime);
            const valueOffset = i * valueSize;
            for (let j = 0; j < valueSize; j++) {
                newValues.push(values[valueOffset + j]);
            }
        }
        
        if (newTimes.length === 0) {
            return null;
        }
        
        track.times = new track.times.constructor(newTimes);
        track.values = new track.values.constructor(newValues);
        return track;
    }
    
    getSwimStartX() {
        if (this.dynamicPath && typeof this.dynamicPath.startX === 'number') {
            return this.dynamicPath.startX;
        }
        return this.config.swimStartX;
    }
    
    getSwimEndX() {
        if (this.dynamicPath && typeof this.dynamicPath.endX === 'number') {
            return this.dynamicPath.endX;
        }
        return this.config.swimEndX;
    }
    
    updateSwimBounds() {
        if (!this.camera || !this.config.swimAutoStart) return;
        
        const startZ = this.config.swimStartZ ?? 0;
        const cameraZ = this.camera.position.z;
        const distance = Math.abs(cameraZ - startZ);
        if (distance === 0) return;
        
        const halfFov = THREE.MathUtils.degToRad(this.camera.fov) / 2;
        const fullHeight = 2 * Math.tan(halfFov) * distance;
        const halfWidth = (fullHeight * this.camera.aspect) / 2;
        const margin = this.config.swimStartMargin ?? 0;
        
        this.dynamicPath.startX = -(halfWidth + margin);
        if (typeof this.config.swimAutoEndMargin === 'number') {
            this.dynamicPath.endX = halfWidth + this.config.swimAutoEndMargin;
        }
        
        if (this.whaleGroup) {
            this.updateWhaleTransform(this.scrollProgress);
        }
    }
    
    updateWhaleTransform(progress) {
        if (!this.whaleGroup) return;
        
        progress = Math.max(0, Math.min(1, progress));
        
        const lead = Math.max(0, this.config.swimProgressLead || 0);
        const adjusted = Math.max(0, Math.min(1, progress + lead));
        
        // easeOutCubic so the whale slows as it nears the viewer
        const eased = 1 - Math.pow(1 - adjusted, 3);
        
        const startX = this.getSwimStartX();
        const endX = this.getSwimEndX();
        const startZ = this.config.swimStartZ ?? this.whaleGroup.position.z;
        const endZ = this.config.swimEndZ ?? startZ;
        const x = startX + (endX - startX) * eased;
        const z = startZ + (endZ - startZ) * eased;
        const startY = this.config.swimStartY ?? this.whaleGroup.position.y;
        const endY = this.config.swimEndY ?? startY;
        const y = startY + (endY - startY) * eased;
        const startScale = this.config.swimScaleStart ?? this.whaleGroup.scale.x;
        const endScale = this.config.swimScaleEnd ?? startScale;
        const scale = startScale + (endScale - startScale) * eased;

        this.whaleGroup.position.set(x, y, z);
        this.whaleGroup.scale.setScalar(scale);
    }
    
    setScrollProgress(progress) {
        this.scrollProgress = progress;
        this.updateWhaleTransform(progress);
    }
    
    updateParticles(delta) {
        if (!this.particles) return;
        
        const positions = this.particles.geometry.attributes.position.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            // Slow upward drift
            positions[i + 1] += delta * 0.3;
            
            // Reset if too high
            if (positions[i + 1] > 15) {
                positions[i + 1] = -15;
            }
            
            // Gentle horizontal drift
            positions[i] += Math.sin(Date.now() * 0.001 + i) * delta * 0.1;
        }
        
        this.particles.geometry.attributes.position.needsUpdate = true;
    }
    
    onResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(width, height);
        
        this.updateSwimBounds();
        this.updateWhaleTransform(this.scrollProgress);
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        // Update swim animation
        if (this.mixer) {
            this.mixer.update(delta);
        }
        
        // Update particles
        this.updateParticles(delta);
        
        // Gentle light ray movement
        if (this.lightRays) {
            this.lightRays.children.forEach((ray, i) => {
                ray.material.opacity = 0.02 + Math.sin(Date.now() * 0.0005 + i) * 0.015;
            });
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    // Cleanup
    dispose() {
        if (this.renderer) {
            this.renderer.dispose();
        }
        if (this.particles) {
            this.particles.geometry.dispose();
            this.particles.material.dispose();
        }
        window.removeEventListener('resize', this.onResize);
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpermWhaleScene;
}
