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
        
        // Configuration optimized for Sperm Whale
        this.config = {
            // Whale path control points (start, middle, end)
            // Phase 1: Swim LEFT to RIGHT across screen
            // Phase 2: Turn RIGHT and swim TOWARD camera
            startPos: { x: -14, y: 0, z: 0 },     // Start far LEFT
            midPos: { x: 3, y: 0, z: 0 },         // Right of center (where turn happens)
            endPos: { x: 3, y: -1, z: 18 },       // Swim TOWARD camera (positive Z)
            
            // Whale rotation (in radians)
            // In Three.js with default setup:
            //   y = 0: facing +Z (toward camera)
            //   y = PI/2 (90°): facing +X (right side of screen)
            //   y = -PI/2 (-90°): facing -X (left side of screen)  
            //   y = PI (180°): facing -Z (away from camera)
            //
            // To swim LEFT→RIGHT: whale nose points RIGHT = y: Math.PI/2
            // After turning RIGHT by 90°: nose points TOWARD camera = y: 0
            startRotation: { x: 0, y: Math.PI / 2, z: 0 },     // Facing RIGHT (swimming left to right)
            midRotation: { x: 0, y: Math.PI / 2, z: 0 },       // Still facing right at turn point  
            endRotation: { x: 0.15, y: 0, z: 0 },              // Facing CAMERA (after turning right 90°)
            
            // Whale scale - gets bigger as it approaches
            startScale: 0.4,
            midScale: 0.7,
            endScale: 1.6,  // Much bigger when close to camera
            
            // Camera
            cameraZ: 16,
            fov: 50,
            
            // Underwater effects
            enableParticles: true,
            particleCount: 150,
            enableFog: true,
            fogNear: 25,
            fogFar: 100,
            
            // Colors - brighter for dark sperm whale
            backgroundColor: 0x0a1628,
            fogColor: 0x1a5a8a,
            ambientColor: 0x88aacc,
            directionalColor: 0xffffff,
            
            // Animation settings
            swimAnimation: 'Swim1_Anim',
            turnAnimation: 'TurnRight_Start_Anim',
            
            // Turn timing
            turnPoint: 0.45,   // Turn starts at 45% scroll
            turnDuration: 0.3, // Turn takes 30% of scroll (45% to 75%)
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
        this.setupLightRays();
        
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
                
                // Setup animations - load both swim and turn
                if (gltf.animations && gltf.animations.length > 0) {
                    this.mixer = new THREE.AnimationMixer(this.whale);
                    this.animations = {};
                    
                    // Find swim animation
                    const swimClip = gltf.animations.find(a => a.name === this.config.swimAnimation);
                    if (swimClip) {
                        this.animations.swim = this.mixer.clipAction(swimClip);
                        this.animations.swim.setLoop(THREE.LoopRepeat);
                        this.animations.swimDuration = swimClip.duration;
                        console.log('Loaded swim animation:', swimClip.name, 'Duration:', swimClip.duration);
                    }
                    
                    // Find turn animation
                    const turnClip = gltf.animations.find(a => a.name === this.config.turnAnimation);
                    if (turnClip) {
                        this.animations.turn = this.mixer.clipAction(turnClip);
                        this.animations.turn.setLoop(THREE.LoopOnce);
                        this.animations.turn.clampWhenFinished = true;
                        this.animations.turnDuration = turnClip.duration;
                        console.log('Loaded turn animation:', turnClip.name, 'Duration:', turnClip.duration);
                    }
                    
                    // Start with swim animation
                    if (this.animations.swim) {
                        this.animations.swim.play();
                        this.currentAnimation = 'swim';
                    }
                    
                    console.log('Available animations:', gltf.animations.map(a => a.name));
                }
                
                // Initial position
                this.updateWhaleTransform(0);
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
    
    // Quadratic bezier curve for smooth path
    bezierPoint(t, p0, p1, p2) {
        const mt = 1 - t;
        return {
            x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
            y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
            z: mt * mt * p0.z + 2 * mt * t * p1.z + t * t * p2.z
        };
    }
    
    // Linear interpolation
    lerp(a, b, t) {
        return a + (b - a) * t;
    }
    
    // Smooth step for easing
    smoothstep(t) {
        return t * t * (3 - 2 * t);
    }
    
    // Ease out for more natural deceleration
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    updateWhaleTransform(progress) {
        if (!this.whaleGroup) return;
        
        // Clamp progress
        progress = Math.max(0, Math.min(1, progress));
        
        const turnPoint = this.config.turnPoint || 0.45;
        const turnDuration = this.config.turnDuration || 0.2;
        const turnEnd = turnPoint + turnDuration;
        
        let pos, rotX, rotY, rotZ, scale;
        
        // Determine which phase we're in
        if (progress < turnPoint) {
            // ===== PHASE 1: Swimming across (left to right) =====
            const phaseProgress = progress / turnPoint;
            const eased = this.smoothstep(phaseProgress);
            
            // Linear path from start to mid
            pos = {
                x: this.lerp(this.config.startPos.x, this.config.midPos.x, eased),
                y: this.lerp(this.config.startPos.y, this.config.midPos.y, eased),
                z: this.lerp(this.config.startPos.z, this.config.midPos.z, eased)
            };
            
            // Rotation: facing right during swim across
            rotX = this.config.startRotation.x;
            rotY = this.config.startRotation.y;
            rotZ = this.config.startRotation.z;
            
            // Scale: gradual increase
            scale = this.lerp(this.config.startScale, this.config.midScale, eased);
            
            // Animation: Swimming
            this.setAnimationPhase('swim', phaseProgress);
            
        } else if (progress < turnEnd) {
            // ===== PHASE 2: Turning right =====
            const phaseProgress = (progress - turnPoint) / turnDuration;
            const eased = this.smoothstep(phaseProgress);
            
            // Stay roughly in place during turn, slight movement toward camera
            pos = {
                x: this.config.midPos.x,
                y: this.config.midPos.y,
                z: this.lerp(this.config.midPos.z, this.config.midPos.z + 2, eased)
            };
            
            // Rotation: turn from facing right to facing camera
            rotX = this.lerp(this.config.midRotation.x, this.config.endRotation.x, eased);
            rotY = this.lerp(this.config.midRotation.y, this.config.endRotation.y, eased);
            rotZ = this.lerp(this.config.midRotation.z, this.config.endRotation.z, eased);
            
            // Scale: slight increase during turn
            scale = this.lerp(this.config.midScale, this.config.midScale * 1.15, eased);
            
            // Animation: Turning
            this.setAnimationPhase('turn', phaseProgress);
            
        } else {
            // ===== PHASE 3: Swimming toward camera =====
            const phaseProgress = (progress - turnEnd) / (1 - turnEnd);
            const eased = this.easeOutCubic(phaseProgress);
            
            // Path from turn end position to final position (toward camera = positive Z)
            const phase3Start = {
                x: this.config.midPos.x,
                y: this.config.midPos.y,
                z: this.config.midPos.z + 2
            };
            
            pos = {
                x: this.lerp(phase3Start.x, this.config.endPos.x, eased),
                y: this.lerp(phase3Start.y, this.config.endPos.y, eased),
                z: this.lerp(phase3Start.z, this.config.endPos.z, eased)
            };
            
            // Rotation: hold facing camera
            rotX = this.config.endRotation.x;
            rotY = this.config.endRotation.y;
            rotZ = this.config.endRotation.z;
            
            // Scale: get much bigger as approaching camera
            scale = this.lerp(this.config.midScale * 1.15, this.config.endScale, eased);
            
            // Animation: Back to swimming
            this.setAnimationPhase('swim', phaseProgress);
        }
        
        // Add gentle swimming motion (subtle bobbing)
        const swimBob = Math.sin(progress * Math.PI * 6) * 0.15;
        pos.y += swimBob;
        
        // Apply transforms
        this.whaleGroup.position.set(pos.x, pos.y, pos.z);
        
        // Add subtle body roll while swimming
        const bodyRoll = Math.sin(progress * Math.PI * 4) * 0.03;
        this.whaleGroup.rotation.set(rotX, rotY, rotZ + bodyRoll);
        
        // Scale
        this.whaleGroup.scale.setScalar(scale);
    }
    
    setAnimationPhase(phase, phaseProgress) {
        if (!this.mixer || !this.animations) return;
        
        if (phase === 'swim' && this.animations.swim) {
            // Continuous swimming - loop based on progress
            if (this.currentAnimation !== 'swim') {
                // Transition to swim
                if (this.animations.turn) {
                    this.animations.turn.fadeOut(0.3);
                }
                this.animations.swim.reset();
                this.animations.swim.fadeIn(0.3);
                this.animations.swim.play();
                this.currentAnimation = 'swim';
            }
            // Let swim animation play continuously
            this.animations.swim.timeScale = 1;
            
        } else if (phase === 'turn' && this.animations.turn) {
            // Turn animation - scrub based on progress
            if (this.currentAnimation !== 'turn') {
                // Transition to turn
                if (this.animations.swim) {
                    this.animations.swim.fadeOut(0.2);
                }
                this.animations.turn.reset();
                this.animations.turn.fadeIn(0.2);
                this.animations.turn.play();
                this.currentAnimation = 'turn';
            }
            // Scrub turn animation based on phase progress
            this.animations.turn.timeScale = 0;
            const turnTime = phaseProgress * (this.animations.turnDuration || 1);
            this.animations.turn.time = turnTime;
        }
        
        // Update mixer
        this.mixer.update(0.016); // ~60fps
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
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
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
    
    // Public method to change animation
    setAnimation(name) {
        if (!this.mixer || !this.whale) return;
        console.log('To change animation, set config.animationName before loading');
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