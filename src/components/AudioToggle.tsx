import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../lib/sounds';

export const AudioToggle: React.FC = () => {
  const [enabled, setEnabled] = useState(sounds.enabled);

  const toggle = () => {
    sounds.enabled = !sounds.enabled;
    setEnabled(sounds.enabled);
    if (sounds.enabled) {
      sounds.playPop();
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-[#2a1d15]/90 border border-[#8c6b48]/60 text-[#f5ebd7] text-xs font-typewriter shadow-lg hover:bg-[#3d2c1e] hover:border-[#c59b27] transition-all cursor-pointer backdrop-blur-sm group"
      title={enabled ? "Matikan Efek Suara Buku" : "Nyalakan Efek Suara Buku"}
    >
      {enabled ? (
        <>
          <Volume2 className="w-4 h-4 text-[#eab308] animate-pulse" />
          <span className="hidden sm:inline">Sound FX: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-[#a89984]" />
          <span className="hidden sm:inline text-[#a89984]">Sound FX: OFF</span>
        </>
      )}
    </button>
  );
};
