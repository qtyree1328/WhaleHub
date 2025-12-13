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
            // Whale path - simple swim from left to right with subtle curve at end
            startPos: { x: -10, y: -1, z: -2 },    // Start far LEFT, slightly back
            endPos: { x: 10, y: -2, z: 2 },     // End RIGHT, slightly forward and down
            
            // Whale rotation (in radians)
            // Swim left to right with subtle turn toward camera at end
            startRotation: { x: 0, y: Math.PI / 2, z: 0 },      // Facing RIGHT
            endRotation: { x: 0.08, y: Math.PI / 2.5, z: 0 },   // Slight turn toward camera
            
            // Whale scale - subtle growth as it passes
            startScale: 1,
            endScale: 1.3,
            
            // Camera
            cameraZ: 10,
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
            
            // Animation settings - just swim, no turn
            swimAnimation: 'Swim1_Anim',
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
                
                // Setup animations - just swim animation
                if (gltf.animations && gltf.animations.length > 0) {
                    this.mixer = new THREE.AnimationMixer(this.whale);
                    this.animations = {};
                    
                    // Find swim animation
                    const swimClip = gltf.animations.find(a => a.name === this.config.swimAnimation);
                    if (swimClip) {
                        this.animations.swim = this.mixer.clipAction(swimClip);
                        this.animations.swim.setLoop(THREE.LoopRepeat);
                        this.animations.swimDuration = swimClip.duration;
                        this.animations.swim.play();
                        this.currentAnimation = 'swim';
                        console.log('Loaded swim animation:', swimClip.name, 'Duration:', swimClip.duration);
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
        
        // Smooth easing for the whole journey
        const eased = this.smoothstep(progress);
        
        // Simple interpolation from start to end
        const pos = {
            x: this.lerp(this.config.startPos.x, this.config.endPos.x, eased),
            y: this.lerp(this.config.startPos.y, this.config.endPos.y, eased),
            z: this.lerp(this.config.startPos.z, this.config.endPos.z, eased)
        };
        
        // Rotation - subtle turn happens in last 30% of journey
        let rotX, rotY, rotZ;
        if (progress < 0.7) {
            // First 70%: maintain starting rotation
            rotX = this.config.startRotation.x;
            rotY = this.config.startRotation.y;
            rotZ = this.config.startRotation.z;
        } else {
            // Last 30%: subtle turn toward camera
            const turnProgress = (progress - 0.7) / 0.3;
            const turnEased = this.smoothstep(turnProgress);
            rotX = this.lerp(this.config.startRotation.x, this.config.endRotation.x, turnEased);
            rotY = this.lerp(this.config.startRotation.y, this.config.endRotation.y, turnEased);
            rotZ = this.lerp(this.config.startRotation.z, this.config.endRotation.z, turnEased);
        }
        
        // Scale: gradual increase throughout
        const scale = this.lerp(this.config.startScale, this.config.endScale, eased);
        
        // Keep swim animation playing throughout
        if (this.animations && this.animations.swim) {
            if (this.currentAnimation !== 'swim') {
                this.animations.swim.reset();
                this.animations.swim.fadeIn(0.3);
                this.animations.swim.play();
                this.currentAnimation = 'swim';
            }
            this.animations.swim.timeScale = 1;
            if (this.mixer) {
                this.mixer.update(0.016);
            }
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