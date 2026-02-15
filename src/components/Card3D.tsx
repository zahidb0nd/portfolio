import { useRef, useState } from 'react';
import gsap from 'gsap';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D = ({ children, className = '', intensity = 15 }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -intensity;
    const rotateY = (mouseX / (rect.width / 2)) * intensity;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Shine effect */}
      <div
        className={`absolute inset-0 rounded-inherit pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)',
          borderRadius: 'inherit',
        }}
      />
      
      {/* Glow border */}
      <div
        className={`absolute inset-0 rounded-inherit pointer-events-none transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: '0 0 30px rgba(0, 255, 65, 0.3), inset 0 0 30px rgba(0, 255, 65, 0.1)',
          borderRadius: 'inherit',
        }}
      />
    </div>
  );
};

export default Card3D;
