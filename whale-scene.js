/**
 * Three.js Whale Scene
 * Syncs whale animation to scroll progress through the hero section
 */
            


class WhaleScene {
    constructor(container, modelPath) {
        this.container = container;
        this.modelPath = modelPath;
        this.mixer = null;
        this.action = null;
        this.whale = null;
        this.clock = new THREE.Clock();
        this.scrollProgress = 0;
        this.animationDuration = 0;
        this.isLoaded = false;
        
        // Configuration
        this.config = {
            // Whale path control points (start, middle, end)
            // Keeping z more consistent so whale doesn't "zoom" toward camera
            startPos: { x: -9, y: -1.2, z: 0 },
            midPos: { x: 3, y: -7 ,z: 0 },
            endPos: { x: 14, y: -4.5, z: 0 },
            
            // Whale rotation (in radians)
            startRotation: { x: 0, y: Math.PI * 0.3, z: 0.05 },
            endRotation: { x: 0, y: -Math.PI * 0.3, z: -0.05 },
            
            // Whale scale - keep more consistent
            startScale: 0.2,
            endScale: 0.6,
            
            // Camera - move back for wider view
            cameraZ: 15,
            fov: 45,
            
            // Underwater effects
            enableParticles: true,
            particleCount: 200,
            enableFog: true,
            fogNear: 10,
            fogFar: 50,
            
            // Colors
            backgroundColor: 0x0a1628,
            fogColor: 0x134e7a,
            ambientColor: 0x4488cc,
            directionalColor: 0xffffff,
            
            // Animation
            animationName: 'Jump1_Anim', // Set to null for first available
            animationSpeed: .6, // 0.5 = animation plays at half speed relative to scroll (use less of the animation)
        };
        
        this.init();
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
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Particles
        if (this.config.enableParticles) {
            this.setupParticles();
        }
        
        // Light rays
        this.setupLightRays();
        
        // Load whale model
        this.loadModel();
        
        // Event listeners
        window.addEventListener('resize', () => this.onResize());
        
        // Start render loop
        this.animate();
    }
    
    setupLighting() {
        // Ambient light (underwater feel)
        const ambient = new THREE.AmbientLight(this.config.ambientColor, 0.6);
        this.scene.add(ambient);
        
        // Main directional light (sun from above)
        const directional = new THREE.DirectionalLight(this.config.directionalColor, 1.0);
        directional.position.set(5, 10, 5);
        this.scene.add(directional);
        
        // Fill light from below (water reflection)
        const fillLight = new THREE.DirectionalLight(0x4488aa, 0.3);
        fillLight.position.set(-5, -5, 0);
        this.scene.add(fillLight);
        
        // Rim light for whale silhouette
        const rimLight = new THREE.DirectionalLight(0x88ccff, 0.4);
        rimLight.position.set(0, 0, -10);
        this.scene.add(rimLight);
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
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    
    setupLightRays() {
        // Volumetric light ray effect using simple planes
        const rayGeometry = new THREE.PlaneGeometry(0.3, 30);
        const rayMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.03,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        
        this.lightRays = new THREE.Group();
        
        for (let i = 0; i < 8; i++) {
            const ray = new THREE.Mesh(rayGeometry, rayMaterial.clone());
            ray.position.set(
                (Math.random() - 0.5) * 30,
                15,
                (Math.random() - 0.5) * 10 - 5
            );
            ray.rotation.x = Math.PI * 0.1;
            ray.rotation.z = (Math.random() - 0.5) * 0.3;
            ray.material.opacity = 0.02 + Math.random() * 0.03;
            this.lightRays.add(ray);
        }
        
        this.scene.add(this.lightRays);
    }
    
    loadModel() {
        const loader = new THREE.GLTFLoader();
        
        loader.load(
            this.modelPath,
            (gltf) => {
                this.whale = gltf.scene;
                
                // Center the model
                const box = new THREE.Box3().setFromObject(this.whale);
                const center = box.getCenter(new THREE.Vector3());
                this.whale.position.sub(center);
                
                // Create a parent group for easier transforms
                this.whaleGroup = new THREE.Group();
                this.whaleGroup.add(this.whale);
                this.scene.add(this.whaleGroup);
                
                // Setup animation
                if (gltf.animations && gltf.animations.length > 0) {
                    this.mixer = new THREE.AnimationMixer(this.whale);
                    
                    // Find the requested animation or use the first one
                    let clip = gltf.animations[0];
                    if (this.config.animationName) {
                        const found = gltf.animations.find(a => a.name === this.config.animationName);
                        if (found) clip = found;
                    }
                    
                    this.animationClip = clip;
                    this.action = this.mixer.clipAction(clip);
                    this.action.play();
                    this.animationDuration = clip.duration;
                    
                    // Set to not loop and clamp at end
                    this.action.setLoop(THREE.LoopOnce);
                    this.action.clampWhenFinished = true;
                    
                    // Enable manual time control
                    this.action.timeScale = 0; // Pause automatic playback
                    
                    console.log('Loaded animation:', clip.name, 'Duration:', this.animationDuration);
                    console.log('Available animations:', gltf.animations.map(a => a.name));
                }
                
                // Initial position
                this.updateWhaleTransform(0);
                this.isLoaded = true;
            },
            (progress) => {
                const percent = (progress.loaded / progress.total * 100).toFixed(0);
                console.log('Loading whale model:', percent + '%');
            },
            (error) => {
                console.error('Error loading whale model:', error);
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
    
    lerp(a, b, t) {
        return a + (b - a) * t;
    }
    
    updateWhaleTransform(progress) {
        if (!this.whaleGroup) return;
        
        // Clamp progress
        progress = Math.max(0, Math.min(1, progress));
        
        // Position along bezier curve
        const pos = this.bezierPoint(
            progress,
            this.config.startPos,
            this.config.midPos,
            this.config.endPos
        );
        
        // Add gentle swimming motion
        const swimOffset = Math.sin(progress * Math.PI * 4) * 0.3;
        pos.y += swimOffset;
        
        this.whaleGroup.position.set(pos.x, pos.y, pos.z);
        
        // Rotation - interpolate and add swimming motion
        const rotX = this.lerp(this.config.startRotation.x, this.config.endRotation.x, progress);
        const rotY = this.lerp(this.config.startRotation.y, this.config.endRotation.y, progress);
        const rotZ = this.lerp(this.config.startRotation.z, this.config.endRotation.z, progress);
        
        // Add subtle swimming rotation
        const swimRotZ = Math.sin(progress * Math.PI * 3) * 0.1;
        
        this.whaleGroup.rotation.set(rotX, rotY, rotZ + swimRotZ);
        
        // Scale
        const scale = this.lerp(this.config.startScale, this.config.endScale, progress);
        this.whaleGroup.scale.setScalar(scale);
        
        // Update animation time (sync to scroll)
        if (this.mixer && this.action && this.animationDuration > 0) {
            // Calculate the target time in the animation
            // animationSpeed controls how much of the animation plays during scroll
            // 1.0 = full animation, 0.5 = half the animation, 0.3 = 30% of animation
            let targetTime = progress * this.animationDuration * this.config.animationSpeed;
            
            // Clamp to animation duration
            targetTime = Math.min(targetTime, this.animationDuration);
            
            // Directly set the action's time
            this.action.time = targetTime;
            
            // Force the mixer to update (with 0 delta since we set time directly)
            this.mixer.update(0);
        }
    }
    
    setScrollProgress(progress) {
        this.scrollProgress = progress;
        this.updateWhaleTransform(progress);
        
        // Debug: log occasionally to see if animationSpeed is being used
        if (Math.random() < 0.01) {
            console.log('Scroll progress:', progress.toFixed(3), 
                        'Animation speed:', this.config.animationSpeed,
                        'Target time:', (progress * this.animationDuration * this.config.animationSpeed).toFixed(3),
                        'Duration:', this.animationDuration);
        }
    }
    
    updateParticles(delta) {
        if (!this.particles) return;
        
        const positions = this.particles.geometry.attributes.position.array;
        
        for (let i = 0; i < positions.length; i += 3) {
            // Slowly float upward
            positions[i + 1] += delta * 0.5;
            
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
        
        // This would require reloading or storing all clips
        // For now, set via config before loading
        console.log('To change animation, set config.animationName before loading');
    }
    
    // Cleanup
    dispose() {
        this.renderer.dispose();
        this.container.removeChild(this.renderer.domElement);
        window.removeEventListener('resize', this.onResize);
    }
}

// Export for use
window.WhaleScene = WhaleScene;

