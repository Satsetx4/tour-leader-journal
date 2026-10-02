import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, HeartPulse, Stamp as StampIcon, Sparkles, QrCode } from 'lucide-react';
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
    { id: 1, country: 'TOKYO • NARITA INTL AIRPORT', date: '2025-10-18', x: 65, y: 78, rotate: -6, color: '#f97316' },
    { id: 2, country: 'OSLO • GARDERMOEN SCHENGEN', date: '2026-02-14', x: 28, y: 84, rotate: 8, color: '#0ea5e9' }
  ]);

  const addRandomStamp = () => {
    sounds.playStamp();
    const destinations = [
      { name: 'ZURICH KLOTEN • SWISS BORDER', color: '#ef4444' },
      { name: 'REYKJAVIK • ARCTIC GATEWAY', color: '#06b6d4' },
      { name: 'QUEENSTOWN • FIORDLAND ENTRY', color: '#10b981' },
      { name: 'LABUAN BAJO • KOMODO EXPEDITION', color: '#f59e0b' }
    ];
    const picked = destinations[Math.floor(Math.random() * destinations.length)];
    const newStamp: StampData = {
      id: Date.now(),
      country: picked.name,
      date: new Date().toISOString().slice(0, 10),
      x: 20 + Math.random() * 55,
      y: 68 + Math.random() * 20,
      rotate: Math.random() * 24 - 12,
      color: picked.color
    };
    setStamps((prev) => [...prev, newStamp]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
      {/* LEFT SPREAD: Modern Biometric Tour Leader Passport */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        {/* Subtle Topographic Background Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />

        <div>
          {/* Modern Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                OFFICIAL DIGITAL CREDENTIAL
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Lead Expeditionist Passport
              </h3>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 text-orange-400 font-mono text-[10px] font-bold shadow-xs">
              <span>TL-GLOBAL</span>
            </div>
          </div>

          {/* Identity & Modern Card */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
            {/* Cropped Photo Card with Clean Modern Border */}
            <div className="relative shrink-0 mx-auto sm:mx-0 group">
              <div className="w-32 h-40 rounded-xl overflow-hidden shadow-lg border-2 border-slate-900 relative bg-gradient-to-b from-slate-800 to-slate-950">
                {/* Modern Cropped Expeditionist Photo */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
                  alt="Ardian Pratama"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-2 text-center">
                  <span className="text-[11px] font-bold font-display text-white block tracking-wider">
                    ARD PRATAMA
                  </span>
                  <span className="text-[8px] font-mono text-orange-400 uppercase tracking-widest">
                    Tour Specialist
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-md shadow-md border border-slate-200">
                <QrCode className="w-5 h-5 text-slate-800" />
              </div>
            </div>

            {/* Credential Data Grid */}
            <div className="flex-1 w-full space-y-2 text-xs font-sans text-slate-700">
              <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">FULL NAME</span>
                  <strong className="text-sm font-display text-slate-900">Ardian Pratama</strong>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">BNSP LICENSE</span>
                  <span className="font-mono font-bold text-orange-600">BNSP-TL-8829104</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">SPECIALTY</span>
                  <span className="font-semibold text-slate-800">Extreme & VIP Leisure</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">MEDICAL PROTOCOL</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                    <HeartPulse className="w-3.5 h-3.5 text-red-500" /> Wilderness CPR Active
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase block">FLUENT LANGUAGES</span>
                <p className="text-[11px] font-medium text-slate-800">
                  Indonesian (Native), English (C1 Professional), Japanese (Daily Conversational)
                </p>
              </div>
            </div>
          </div>

          {/* Modern Trust Badges */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-[10px] font-sans font-bold text-slate-800 leading-tight">
                Safety First Standard
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-orange-600 shrink-0" />
              <span className="text-[10px] font-sans font-bold text-slate-800 leading-tight">
                WFTGA Certified
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-[10px] font-sans font-bold text-slate-800 leading-tight">
                VIP Concierge
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Stamp Area */}
        <div className="relative min-h-[90px] mt-3 pt-2 border-t border-dashed border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
              DIGITAL IMMIGRATION ENTRY STAMPS
            </span>
            <button
              onClick={addRandomStamp}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-slate-900 hover:bg-orange-600 text-white rounded-lg shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <StampIcon className="w-3 h-3 text-orange-400" />
              <span>Cap Paspor!</span>
            </button>
          </div>

          <AnimatePresence>
            {stamps.map((st) => (
              <motion.div
                key={st.id}
                initial={{ scale: 2.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="absolute pointer-events-none select-none px-2.5 py-1 rounded-md border-2 border-dashed font-mono font-black text-[9px] uppercase tracking-tighter"
                style={{
                  left: `${st.x}%`,
                  top: `${st.y}%`,
                  transform: `translate(-50%, -50%) rotate(${st.rotate}deg)`,
                  color: st.color,
                  borderColor: st.color,
                  backgroundColor: `${st.color}10`
                }}
              >
                <div>✦ {st.country} ✦</div>
                <div className="text-[8px] font-mono text-center tracking-normal">{st.date} • VERIFIED</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT SPREAD: Modern 3D Pop-Up Cropped Image Diorama */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
              3D POP-UP CROPPED IMAGE DIORAMA
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
              Mt. Bromo Sunrise • Expedition Basecamp
            </h3>
          </div>

          {/* 3D Modern Diorama Stage with Layered Cropped Photography */}
          <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden perspective-1800 bg-gradient-to-b from-sky-900 via-indigo-950 to-slate-950 shadow-inner flex items-end justify-center p-3 group">
            {/* Background Sky Layer: Rising Golden Sun & Nebula Clouds */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-3 w-28 h-28 rounded-full bg-gradient-to-t from-amber-500 to-orange-400 blur-sm opacity-80"
            />
            <div className="absolute top-6 left-6 text-white/40 font-mono text-[9px]">
              ELEVATION: 2,329M • LAT: -7.9425° S
            </div>

            {/* POP-UP LAYER 1 (Far Depth): Cropped Mountain Ridge Photography */}
            <motion.div
              initial={{ rotateX: -75, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 14, stiffness: 90, delay: 0.2 }}
              className="absolute bottom-8 inset-x-2 z-10 flex justify-center pointer-events-none transform-style-preserve-3d"
            >
              <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-white/20 shadow-popup-layer">
                <img
                  src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80"
                  alt="Bromo Ridge Cutout"
                  className="w-full h-full object-cover object-center filter contrast-125"
                />
                <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-xs text-orange-400 text-[8px] font-mono px-2 py-0.5 rounded border border-orange-500/30">
                  🏔️ VOLCANIC CALDERA
                </div>
              </div>
            </motion.div>

            {/* POP-UP LAYER 2 (Mid Depth): Cropped 4x4 Expedition Vehicle Stand-Up */}
            <motion.div
              initial={{ rotateX: -85, y: 30, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 85, delay: 0.4 }}
              className="relative z-20 w-full flex items-end justify-between px-3 pb-1"
            >
              {/* Cropped 4x4 Vehicle Stand-Up with White Border */}
              <div className="w-36 h-20 rounded-lg overflow-hidden border-2 border-white shadow-2xl bg-slate-900 rotate-[-2deg] hover:rotate-0 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&auto=format&fit=crop&q=80"
                  alt="Expedition Vehicle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-1 bg-black/80 text-white text-[8px] font-mono px-1.5 py-0.5 rounded">
                  🚙 4X4 EXPEDITION
                </div>
              </div>

              {/* Cropped Explorer Badge Stand-Up */}
              <div className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-lg border-2 border-orange-500 shadow-2xl text-[10px] font-mono font-bold rotate-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>DAWN SUMMIT TEAM</span>
              </div>
            </motion.div>

            {/* Floor Fold Line */}
            <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          <p className="text-[10px] text-center font-mono text-slate-400 mt-2">
            ✦ Layer foto cropped mekar berdiri 3D saat halaman dibuka
          </p>
        </div>

        {/* Proven Track Record Stats */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-2xl font-black font-display text-slate-900">48+</span>
              <span className="text-[10px] font-sans font-semibold text-slate-500">Negara Dijelajahi</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-2xl font-black font-display text-orange-600">160+</span>
              <span className="text-[10px] font-sans font-semibold text-slate-500">Tur Rombongan</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-2xl font-black font-display text-emerald-600">99.8%</span>
              <span className="text-[10px] font-sans font-semibold text-slate-500">Safety Record</span>
            </div>
          </div>

          {/* Tour Leader Statement */}
          <blockquote className="text-xs font-sans text-slate-700 bg-orange-50/60 p-3 rounded-xl border-l-3 border-orange-500 leading-relaxed">
            “Bagi saya, tugas Tour Leader modern bukan cuma memandu arah jalan, tapi menciptakan **rasa aman total**,
            memastikan setiap momen terasa berkelas, dan mengubah destinasi impian jadi pengalaman seumur hidup.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};
