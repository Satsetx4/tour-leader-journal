import React, { useEffect, useState, useRef } from 'react';

export const CompassRose: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const compassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!compassRef.current) return;
      const rect = compassRef.current.getBoundingClientRect();
      const compassX = rect.left + rect.width / 2;
      const compassY = rect.top + rect.height / 2;
      const deltaX = e.clientX - compassX;
      const deltaY = e.clientY - compassY;
      const rad = Math.atan2(deltaY, deltaX);
      const deg = (rad * (180 / Math.PI)) + 90;
      setAngle(deg);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={compassRef}
      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#8c6b48] bg-[#1a1410] shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center justify-center p-1 select-none pointer-events-none"
    >
      {/* Outer brass ring tick marks */}
      <div className="absolute inset-1 rounded-full border border-dashed border-[#b8860b]/40" />
      
      {/* Cardinal directions */}
      <span className="absolute top-1 text-[9px] font-bold text-[#eab308] font-typewriter">N</span>
      <span className="absolute bottom-1 text-[9px] font-bold text-[#d4af37]/70 font-typewriter">S</span>
      <span className="absolute left-1 text-[9px] font-bold text-[#d4af37]/70 font-typewriter">W</span>
      <span className="absolute right-1 text-[9px] font-bold text-[#d4af37]/70 font-typewriter">E</span>

      {/* Rotating needle */}
      <div
        className="w-1.5 h-16 sm:h-20 relative transition-transform duration-100 ease-out"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {/* North needle (Crimson Red) */}
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[32px] sm:border-b-[40px] border-b-[#dc2626] mx-auto filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
        {/* South needle (Brass Gold) */}
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[32px] sm:border-t-[40px] border-t-[#d4af37] mx-auto filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Center brass pivot rivet */}
      <div className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#92400e] to-[#fde047] border border-[#78350f] shadow" />
    </div>
  );
};
