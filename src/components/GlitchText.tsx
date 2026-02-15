import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 500);
      }

      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 z-20 text-red-500 animate-glitch-1"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
          >
            {displayText}
          </span>
          <span 
            className="absolute top-0 left-0 z-20 text-cyan-500 animate-glitch-2"
            style={{ clipPath: 'inset(50% 0 0 0)' }}
          >
            {displayText}
          </span>
        </>
      )}
      
      {/* Glow effect */}
      <span className="absolute top-0 left-0 z-0 blur-sm text-matrix-green opacity-50">
        {displayText}
      </span>
    </span>
  );
};

export default GlitchText;
