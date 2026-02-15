import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulsePhase: number;
}

const AdvancedParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Colors for particles
    const colors = ['#00FF41', '#00FFFF', '#008F11', '#00cc33'];

    // Check if touch device and adjust particle count
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // Initialize particles - fewer on touch devices
    const particleCount = isTouchDevice ? 15 : (window.innerWidth < 768 ? 25 : 50);
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, isActive: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      frameCountRef.current++;
      
      // Render every frame for smoothness
      ctx.fillStyle = 'rgba(13, 2, 8, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulsePhase += 0.02;

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.9;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.9;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Mouse interaction - particles are attracted to mouse
        if (mouse.isActive && i % 3 === 0) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            const force = (200 - dist) / 200 * 0.02;
            particle.vx += dx * force * 0.01;
            particle.vy += dy * force * 0.01;
          }
        }

        // Apply slight friction
        particle.vx *= 0.999;
        particle.vy *= 0.999;

        // Pulsing alpha
        const pulsingAlpha = particle.alpha + Math.sin(particle.pulsePhase) * 0.2;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, particle.color + '40');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = Math.max(0.2, Math.min(1, pulsingAlpha));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connections (optimized)
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.08)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length && connections < 2; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 15000) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / 122) * 0.15;
            ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }

      // Mouse connections
      if (mouse.isActive) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        particles.slice(0, 10).forEach((particle) => {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AdvancedParticles;
