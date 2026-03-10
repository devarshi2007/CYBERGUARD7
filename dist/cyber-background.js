/* ============================================
   CYBERGUARD ANIMATED BACKGROUND SYSTEM
   
   Features:
   - Particle network animation
   - Smooth node connections
   - Interactive particle effects
   - 60fps performance optimized
   - No external dependencies
   ============================================ */

class CyberBackground {
    constructor() {
        // Get canvas element
        this.canvas = document.getElementById('cyber-canvas');
        if (!this.canvas) {
            console.warn('Canvas element not found');
            return;
        }
        
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        
        // Set canvas size
        this.resizeCanvas();
        
        // Particle configuration - Optimized for performance
        this.particleCount = 25; // Reduced from 40 to 25 for better performance
        this.particles = [];
        this.connectionDistance = 130; // Slightly reduced for fewer connections
        this.mousePos = { x: 0, y: 0 };
        
        // Theme detection
        this.currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        this.updateThemeColors();
        
        // Performance optimization flags
        this.lastFrameTime = performance.now();
        this.fps = 60;
        this.frameInterval = 1000 / this.fps;
        
        // Initialize particles
        this.initParticles();
        
        // Event listeners with throttling
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.resizeCanvas(), 150);
        });
        
        // Throttle mouse movement updates
        let mouseThrottle;
        document.addEventListener('mousemove', (e) => {
            if (!mouseThrottle) {
                mouseThrottle = setTimeout(() => {
                    this.updateMousePos(e);
                    mouseThrottle = null;
                }, 50);
            }
        });
        document.addEventListener('mouseleave', () => this.resetMousePos());
        
        // Listen for theme changes
        this.observeThemeChanges();
        
        // Defer animation start for faster page load
        requestIdleCallback(() => {
            this.animate();
        }, { timeout: 1000 });
    }
    
    /* Update colors based on theme */
    updateThemeColors() {
        if (this.currentTheme === 'light') {
            this.particleColor = { r: 13, g: 110, b: 253 };
            this.bgColor = 'rgba(248, 249, 250, 0.05)';
        } else {
            this.particleColor = { r: 0, g: 229, b: 255 };
            this.bgColor = 'rgba(10, 15, 31, 0.05)';
        }
    }
    
    /* Observe theme attribute changes */
    observeThemeChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                    this.updateThemeColors();
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
    
    /* Initialize particle array */
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
    }
    
    /* Resize canvas to window size */
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    /* Update mouse position for interactive effect */
    updateMousePos(e) {
        this.mousePos = { x: e.clientX, y: e.clientY };
    }
    
    /* Reset mouse position on leave */
    resetMousePos() {
        this.mousePos = { x: -9999, y: -9999 };
    }
    
    /* Update particle positions */
    updateParticles() {
        for (let particle of this.particles) {
            // Movement
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
                particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            }
            
            // Update pulse phase
            particle.pulsePhase += 0.02;
            
            // Interactive effect - repel from mouse
            const dx = particle.x - this.mousePos.x;
            const dy = particle.y - this.mousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const angle = Math.atan2(dy, dx);
                const repelForce = (150 - distance) / 150;
                particle.vx += Math.cos(angle) * repelForce * 0.3;
                particle.vy += Math.sin(angle) * repelForce * 0.3;
            }
            
            // Limit velocity
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > 2) {
                particle.vx = (particle.vx / speed) * 2;
                particle.vy = (particle.vy / speed) * 2;
            }
        }
    }
    
    /* Draw particles on canvas */
    drawParticles() {
        for (let particle of this.particles) {
            // Pulsing glow effect
            const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
            const radius = particle.radius * pulse;
            const opacity = particle.opacity * pulse;
            
            const { r, g, b } = this.particleColor;
            
            // Draw particle core
            this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw particle glow
            this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, radius * 2.5, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
    
    /* Draw connections between nearby particles */
    drawConnections() {
        const { r, g, b } = this.particleColor;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Draw line if particles are close enough
                if (distance < this.connectionDistance) {
                    const opacity = (1 - distance / this.connectionDistance) * 0.3;
                    
                    this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    /* Main animation loop - optimized for performance */
    animate() {
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastFrameTime;
        
        // Throttle to maintain consistent FPS and reduce CPU usage
        if (deltaTime < this.frameInterval) {
            requestAnimationFrame(() => this.animate());
            return;
        }
        
        this.lastFrameTime = currentTime - (deltaTime % this.frameInterval);
        
        // Clear canvas with semi-transparent background for motion trail
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
}

/* Initialize background on page load */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CyberBackground();
    });
} else {
    new CyberBackground();
}
