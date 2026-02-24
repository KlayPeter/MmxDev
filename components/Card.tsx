
import React, { useRef, useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden
        bg-white/70 rounded-[2.5rem] border border-white/50 glass
        p-8 transition-all duration-500 ease-out
        ${hoverable ? 'hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:scale-[1.03] group' : ''}
        ${className}
      `}
    >
      {/* 动态鼠标跟随发光效果 */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.12), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
