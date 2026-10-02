import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, HeartPulse, Stamp as StampIcon, Sparkles } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface StampData {
  id: number;
  country: string;
  date: string;
  x: number;
  y: number;
  rotate: number;
  color: string;
}

export const PassportPage: React.FC = () => {
  const [stamps, setStamps] = useState<StampData[]>([
    { id: 1, country: 'JAPAN IMMIGRATION • NARITA', date: '2024-11-12', x: 70, y: 75, rotate: -8, color: '#dc2626' },
    { id: 2, country: 'SCHENGEN BORDER • REYKJAVIK', date: '2025-02-04', x: 25, y: 82, rotate: 12, color: '#2563eb' }
  ]);

  const addRandomStamp = () => {
    sounds.playStamp();
    const destinations = [
      { name: 'NEW ZEALAND • QUEENSTOWN ENTRY', color: '#16a34a' },
      { name: 'SWISS BORDER CONTROL • ZURICH', color: '#dc2626' },
      { name: 'KOMODO NATIONAL PARK • LABUAN BAJO', color: '#ea580c' },
      { name: 'KINGDOM OF BHUTAN • PARO AIRPORT', color: '#9333ea' }
    ];
    const picked = destinations[Math.floor(Math.random() * destinations.length)];
    const newStamp: StampData = {
      id: Date.now(),
      country: picked.name,
      date: new Date().toISOString().slice(0, 10),
      x: 20 + Math.random() * 55,
      y: 68 + Math.random() * 22,
      rotate: Math.random() * 26 - 13,
      color: picked.color
    };
    setStamps(prev => [...prev, newStamp]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
      {/* LEFT SPREAD: Tour Leader Official Passport */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        {/* Subtle Watermark BG */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-80 h-80 fill-current text-[#451a03]">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Passport Header */}
        <div>
          <div className="flex items-center justify-between border-b-2 border-[#8c6b48]/30 pb-3 mb-4">
            <div>
              <p className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
                PASPOR RESMI EKSPEDISI & WISATA
              </p>
              <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
                LEAD EXPEDITIONIST PASSPORT
              </h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-[#2a1d15] text-[#eab308] font-typewriter font-bold shadow-inner">
              TL-SPECIALIST
            </span>
          </div>

          {/* Photo & Identity Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
            {/* Polaroid Photo with Washi Tape */}
            <div className="relative group shrink-0 mx-auto sm:mx-0">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#fde68a]/80 backdrop-blur-xs border border-[#eab308]/40 rotate-1 shadow-xs z-10" />
              <div className="w-28 h-36 bg-white p-2 pb-5 border border-[#cbb396] shadow-md rounded-xs rotate-[-1.5deg] group-hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-gradient-to-tr from-[#2d4a3e] via-[#475569] to-[#1e293b] rounded-xs flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-[#f8fafc]/20 border-2 border-white/60 flex items-center justify-center mb-1 text-white font-bold text-xl shadow">
                    AP
                  </div>
                  <span className="text-[10px] text-white/90 font-mono font-bold tracking-tight">ARD PRATAMA</span>
                  <span className="text-[8px] text-[#fbbf24] font-typewriter uppercase">Tour Leader</span>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border border-amber-300/40 opacity-40 flex items-center justify-center rotate-12" />
                </div>
              </div>
            </div>

            {/* Passport Data Fields */}
            <div className="flex-1 w-full space-y-1.5 text-xs font-typewriter text-[#423223]">
              <div className="grid grid-cols-2 gap-2 border-b border-[#e2d5c3] pb-1">
                <div>
                  <span className="text-[9px] text-[#8c6b48] block">NAMA LENGKAP</span>
                  <strong className="text-sm tracking-wide text-[#2b1810]">ARDIAN PRATAMA</strong>
                </div>
                <div>
                  <span className="text-[9px] text-[#8c6b48] block">NOMOR LISENSI BNSP</span>
                  <span className="font-bold text-[#b45309]">BNSP-TL-8829104</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-[#e2d5c3] pb-1">
                <div>
                  <span className="text-[9px] text-[#8c6b48] block">SPESIALISASI</span>
                  <span className="font-medium text-[#2d4a3e]">Extreme & Cultural Tour</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#8c6b48] block">STATUS STATUS MEDIS</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800">
                    <HeartPulse className="w-3 h-3 text-red-600" /> Wilderness CPR Active
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-[#8c6b48] block">BAHASA AKTIF</span>
                <p className="text-[11px] font-medium text-[#443322]">
                  Bahasa Indonesia (Native), English (Fluent C1), Japanese (Conversational)
                </p>
              </div>
            </div>
          </div>

          {/* Badges / Trust Seals */}
          <div className="grid grid-cols-3 gap-2 bg-[#f4ebe1] p-2.5 rounded-lg border border-[#dfceb9]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="text-[10px] font-typewriter font-semibold text-[#452c1a] leading-tight">
                Safety First Protocol
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="text-[10px] font-typewriter font-semibold text-[#452c1a] leading-tight">
                WFTGA Standard
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-700 shrink-0" />
              <span className="text-[10px] font-typewriter font-semibold text-[#452c1a] leading-tight">
                VIP Handling
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Passport Visa Stamps */}
        <div className="relative min-h-[90px] mt-3 pt-2 border-t border-dashed border-[#bfa990]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-typewriter uppercase text-[#8c6b48] font-bold">
              VISA ENTRY STAMPS (INTERAKTIF)
            </span>
            <button
              onClick={addRandomStamp}
              className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-typewriter font-bold bg-[#dc2626] text-white rounded-md shadow-xs hover:bg-[#b91c1c] active:scale-95 transition-all cursor-pointer"
            >
              <StampIcon className="w-3 h-3" />
              <span>Cap Paspor!</span>
            </button>
          </div>

          {/* Rendered ink stamps */}
          <AnimatePresence>
            {stamps.map((st) => (
              <motion.div
                key={st.id}
                initial={{ scale: 2.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.85 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="absolute pointer-events-none select-none px-2 py-1 rounded border-2 border-dashed font-typewriter font-black text-[9px] uppercase tracking-tighter"
                style={{
                  left: `${st.x}%`,
                  top: `${st.y}%`,
                  transform: `translate(-50%, -50%) rotate(${st.rotate}deg)`,
                  color: st.color,
                  borderColor: st.color,
                  boxShadow: `0 0 1px ${st.color}`
                }}
              >
                <div>★ {st.country} ★</div>
                <div className="text-[8px] font-mono text-center tracking-normal">{st.date} • ADMITTED</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT SPREAD: 3D Pop-Up Diorama & Tour Leader Manifesto */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#8c6b48]/30 pb-2 mb-4">
            <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
              DIORAMA 3D LEMBAR PERTAMA
            </span>
            <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
              Mt. Bromo Expedition • Dawn Awakening
            </h3>
          </div>

          {/* 3D Pop-Up Stand-Up Diorama Stage */}
          <div className="relative w-full h-44 sm:h-52 bg-gradient-to-b from-[#fef3c7] via-[#fed7aa] to-[#d97706]/20 rounded-lg border border-[#e5d5be] overflow-hidden perspective-1500 flex items-end justify-center p-3 shadow-inner">
            {/* Background Layer: Golden Rising Sun & Clouds */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="absolute top-4 w-20 h-20 rounded-full bg-gradient-to-t from-[#f59e0b] to-[#fbbf24] shadow-[0_0_35px_rgba(245,158,11,0.6)]"
            />
            <div className="absolute top-8 left-6 w-24 h-6 bg-white/60 rounded-full blur-[1px]" />
            <div className="absolute top-12 right-8 w-28 h-7 bg-white/50 rounded-full blur-[1px]" />

            {/* Pop-Up Layer 1: Semeru & Batok Mountain Silhouette (Standing Up) */}
            <motion.div
              initial={{ rotateX: -75, transformOrigin: 'bottom' }}
              animate={{ rotateX: 0 }}
              transition={{ type: 'spring', damping: 14, stiffness: 90, delay: 0.3 }}
              className="absolute bottom-6 z-10 w-full flex items-end justify-center pointer-events-none"
            >
              {/* Mountain paper cut-out silhouettes */}
              <svg viewBox="0 0 400 120" className="w-full h-24 sm:h-28 filter drop-shadow-[0_8px_6px_rgba(0,0,0,0.3)]">
                {/* Back peaks */}
                <polygon points="40,120 120,30 200,120" fill="#78350f" opacity="0.8" />
                <polygon points="140,120 250,15 360,120" fill="#451a03" />
                {/* Batok ridge ridges */}
                <polygon points="220,120 290,45 380,120" fill="#582405" />
                {/* Volcanic smoke paper fold */}
                <circle cx="250" cy="18" r="8" fill="#e2e8f0" opacity="0.6" />
                <circle cx="258" cy="10" r="11" fill="#cbd5e1" opacity="0.5" />
              </svg>
            </motion.div>

            {/* Pop-Up Layer 2: 4x4 Expedition Jeep & Camping Tent (Front Fold) */}
            <motion.div
              initial={{ rotateX: -85, transformOrigin: 'bottom' }}
              animate={{ rotateX: 0 }}
              transition={{ type: 'spring', damping: 12, stiffness: 85, delay: 0.5 }}
              className="relative z-20 w-full flex items-end justify-between px-4 pb-1"
            >
              {/* Paper Pop-up 4x4 Land Cruiser */}
              <div className="bg-[#1e293b] text-white px-2.5 py-1.5 rounded-sm border border-slate-600 shadow-lg text-[9px] font-mono flex items-center gap-1.5 -rotate-2">
                <span className="text-amber-400 font-bold">4X4 EXPEDITION</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Tent paper cutout */}
              <div className="bg-[#b91c1c] text-[#fef2f2] px-3 py-1 rounded-t-lg border-2 border-[#7f1d1d] shadow-xl text-[10px] font-typewriter font-bold rotate-1">
                ⛺ BASECAMP DAWN
              </div>
            </motion.div>

            {/* Diorama Paper Base Fold Line */}
            <div className="absolute bottom-0 inset-x-0 h-4 bg-[#b45309]/30 border-t border-[#92400e]/40 shadow-inner" />
          </div>

          <p className="text-[10px] text-center font-typewriter text-[#8c6b48] mt-1.5 italic">
            *Diorama mekar berdiri otomatis saat lembar jurnal dibuka
          </p>
        </div>

        {/* Proven Track Record Stats */}
        <div className="mt-4 pt-3 border-t border-[#dccbb4]">
          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            <div className="bg-[#f2e7d5] p-2 rounded-lg border border-[#d8c5aa]">
              <span className="block text-xl font-black font-journal text-[#3d2714]">48+</span>
              <span className="text-[9px] font-typewriter text-[#785b3e] font-semibold">Negara Dijelajahi</span>
            </div>
            <div className="bg-[#f2e7d5] p-2 rounded-lg border border-[#d8c5aa]">
              <span className="block text-xl font-black font-journal text-[#1e3a5f]">160+</span>
              <span className="text-[9px] font-typewriter text-[#785b3e] font-semibold">Grup Tur Sukses</span>
            </div>
            <div className="bg-[#f2e7d5] p-2 rounded-lg border border-[#d8c5aa]">
              <span className="block text-xl font-black font-journal text-[#065f46]">99.8%</span>
              <span className="text-[9px] font-typewriter text-[#785b3e] font-semibold">Safety Record</span>
            </div>
          </div>

          {/* Tour Leader Manifesto */}
          <blockquote className="text-[12px] font-handwriting text-[#3d2714] text-center leading-relaxed bg-[#fbf3e4] p-2 rounded border-l-3 border-[#c59b27] italic">
            “Bagi saya, tugas Tour Leader bukan cuma memastikan semua orang naik bus tepat waktu. Tugas saya adalah
            menjaga rasa aman, menciptakan tawa tanpa cemas, dan mengubah destinasi asing jadi kenangan paling berharga
            seumur hidup.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};
