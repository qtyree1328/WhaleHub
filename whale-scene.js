/**
 * Three.js Whale Scene
 * Syncs whale animation to scroll progress through the hero section
 * Optimized for performance - particles/effects handled by CSS background
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

        // Detect mobile for performance optimizations
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || window.innerWidth < 768;

        // Configuration - tighter path on mobile so whale stays visible longer
        this.config = {
            // Whale path control points (start, middle, end)
            startPos: this.isMobile
                ? { x: -4, y: -0.8, z: 0 }
                : { x: -10, y: -1.2, z: 0 },
            midPos: this.isMobile
                ? { x: 1, y: -2.5, z: 0 }
                : { x: 3, y: -4, z: 0 },
            endPos: this.isMobile
                ? { x: 4, y: -3.5, z: 0 }
                : { x: 10, y: -6, z: 0 },

            // Whale rotation (in radians) - less rotation on mobile
            startRotation: this.isMobile
                ? { x: 0, y: Math.PI * 0.2, z: 0.03 }
                : { x: 0, y: Math.PI * 0.3, z: 0.05 },
            endRotation: this.isMobile
                ? { x: 0, y: -Math.PI * 0.2, z: -0.03 }
                : { x: 0, y: -Math.PI * 0.3, z: -0.05 },

            // Whale scale - slightly larger on mobile for visibility
            startScale: this.isMobile ? 0.25 : 0.2,
            endScale: this.isMobile ? 0.6 : 0.7,

            // Camera
            cameraZ: 14,
            fov: 45,

            // Colors
            backgroundColor: 0x0a1628,
            ambientColor: 0x4488cc,
            directionalColor: 0xffffff,

            // Animation
            animationName: 'Jump1_Anim',
            clipStart: 0.0,
            clipEnd: 0.37,
        };

        // Setup DRACO loader for compressed models
        this.setupDracoLoader();

        this.init();
    }

    setupDracoLoader() {
        this.dracoLoader = new THREE.DRACOLoader();
        this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        this.dracoLoader.setDecoderConfig({ type: 'js' });
    }

    init() {
        // Scene - transparent background lets CSS particles show through
        this.scene = new THREE.Scene();
        this.scene.background = null;

        // Camera
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(this.config.fov, aspect, 0.1, 1000);
        this.camera.position.z = this.config.cameraZ;

        // Renderer with mobile optimizations
        this.renderer = new THREE.WebGLRenderer({
            antialias: !this.isMobile, // Disable antialiasing on mobile
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

        // Lower pixel ratio on mobile for better performance
        const maxPixelRatio = this.isMobile ? 1.5 : 2;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));

        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.container.appendChild(this.renderer.domElement);

        // Simplified lighting
        this.setupLighting();

        // Load whale model
        this.loadModel();

        // Event listeners
        window.addEventListener('resize', () => this.onResize());

        // Start render loop
        this.animate();
    }

    setupLighting() {
        // Ambient light (underwater feel)
        const ambient = new THREE.AmbientLight(this.config.ambientColor, 0.7);
        this.scene.add(ambient);

        // Main directional light (sun from above)
        const directional = new THREE.DirectionalLight(this.config.directionalColor, 1.0);
        directional.position.set(5, 10, 5);
        this.scene.add(directional);

        // Fill light from below (water reflection) - simplified
        const fillLight = new THREE.DirectionalLight(0x4488aa, 0.4);
        fillLight.position.set(-5, -5, 0);
        this.scene.add(fillLight);
    }

    loadModel() {
        const loader = new THREE.GLTFLoader();
        loader.setDRACOLoader(this.dracoLoader);

        loader.load(
            this.modelPath,
            (gltf) => {
                this.whale = gltf.scene;

                // Get model size and center
                const box = new THREE.Box3().setFromObject(this.whale);
                const center = box.getCenter(new THREE.Vector3());

                // Center the model
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
                    this.action.timeScale = 0;
                }

                // Initial position
                this.updateWhaleTransform(0);
                this.isLoaded = true;
            },
            undefined,
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

        // Rotation
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
            const startF = Math.max(0, Math.min(1, this.config.clipStart ?? 0));
            const endF = Math.max(0, Math.min(1, this.config.clipEnd ?? 1));
            const clipF = startF + (endF - startF) * progress;
            let targetTime = clipF * this.animationDuration;
            targetTime = Math.max(0, Math.min(this.animationDuration, targetTime));
            this.action.time = targetTime;
            this.mixer.update(0);
        }
    }

    setScrollProgress(progress) {
        this.scrollProgress = progress;
        this.updateWhaleTransform(progress);
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
        this.renderer.render(this.scene, this.camera);
    }

    // Cleanup
    dispose() {
        if (this.renderer) {
            this.renderer.dispose();
            if (this.renderer.domElement && this.renderer.domElement.parentNode) {
                this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
            }
        }
        if (this.dracoLoader) {
            this.dracoLoader.dispose();
        }
        window.removeEventListener('resize', this.onResize);
    }
}

// Export for use
window.WhaleScene = WhaleScene;
