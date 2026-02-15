import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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

    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?アイウエオカキクケコ';
    const charArray = chars.split('');

    // Column setup
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Colors
    const colors = ['#00FF41', '#00cc33', '#008F11', '#00FFFF'];

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      
      // Render every 2nd frame for performance
      if (frameCount % 2 === 0) {
        // Semi-transparent black for trail effect
        ctx.fillStyle = 'rgba(13, 2, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

        for (let i = 0; i < drops.length; i++) {
          // Random character
          const char = charArray[Math.floor(Math.random() * charArray.length)];
          
          // Color based on position (brighter at top)
          const colorIndex = Math.floor(Math.random() * colors.length);
          const alpha = Math.random() * 0.5 + 0.5;
          ctx.fillStyle = colors[colorIndex];
          ctx.globalAlpha = alpha;

          // Draw character
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);

          // Reset drop or move down
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

export default MatrixRain;
