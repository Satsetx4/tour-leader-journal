import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HeartPulse, Stamp as StampIcon, Sparkles, QrCode, Bus } from 'lucide-react';
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
    { id: 1, country: 'MALANG • KUNJUNGAN INDUSTRI', date: '2026-09-24', x: 65, y: 78, rotate: -6, color: '#f97316' },
    { id: 2, country: 'BALI • DEWATA ISLAND DISPATCH', date: '2026-08-10', x: 28, y: 84, rotate: 8, color: '#0ea5e9' }
  ]);

  const addRandomStamp = () => {
    sounds.playStamp();
    const destinations = [
      { name: 'YOGYAKARTA • CULTURAL HERITAGE', color: '#10b981' },
      { name: 'SEMARANG • KOTA LAMA EXPEDITION', color: '#f59e0b' },
      { name: 'BATU • AGRO & LEISURE TOUR', color: '#8b5cf6' },
      { name: 'KHARISMA TRAVEL • VERIFIED CREW', color: '#ef4444' }
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
      {/* LEFT SPREAD: Modern Tour Leader Credential Card */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        {/* Subtle Topographic Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />

        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                PROFESSIONAL TOUR LEADER DOSSIER
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Official Credential Card
              </h3>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 text-orange-400 font-mono text-[10px] font-bold shadow-xs">
              <span>KHARISMA TRAVEL</span>
            </div>
          </div>

          {/* Photo & Identity Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
            {/* Real Photo of Neni Suryani */}
            <div className="relative shrink-0 mx-auto sm:mx-0 group">
              <div className="w-32 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-slate-900 relative bg-slate-900">
                <img
                  src="/images/neni-1.webp"
                  alt="Neni Suryani Tour Leader"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-2 text-center">
                  <span className="text-[11px] font-bold font-display text-white block tracking-wider">
                    NENI SURYANI
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

            {/* Credential Data Fields */}
            <div className="flex-1 w-full space-y-2 text-xs font-sans text-slate-700">
              <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">NAMA LENGKAP</span>
                  <strong className="text-sm font-display text-slate-900">Neni Suryani</strong>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">AFILIASI RESMI</span>
                  <span className="font-mono font-bold text-orange-600">Kharisma Tour & Travel</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">SPESIALISASI RUTE</span>
                  <span className="font-semibold text-slate-800">Jogja, Malang, Batu, Bali</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">KESIAPAN MEDIS</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                    <HeartPulse className="w-3.5 h-3.5 text-red-500" /> Emergency & P3K Ready
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase block">KEAHLIAN INTI</span>
                <p className="text-[11px] font-medium text-slate-800">
                  Group Coordination, Itinerary & Vendor Management, Public Speaking, Handling Complain, Documentation
                </p>
              </div>
            </div>
          </div>

          {/* Modern Trust Badges */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-[10px] font-sans font-bold text-slate-800 leading-tight">
                Safety & Emergency
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bus className="w-4 h-4 text-orange-600 shrink-0" />
              <span className="text-[10px] font-sans font-bold text-slate-800 leading-tight">
                Fleet & Logistics
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-[10px] font-sans font-bold text-slate-800 leading-tight">
                Group Hospitality
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Stamp Area */}
        <div className="relative min-h-[90px] mt-3 pt-2 border-t border-dashed border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
              LOGBOOK STEMPEL TOUR RESMI
            </span>
            <button
              onClick={addRandomStamp}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-slate-900 hover:bg-orange-600 text-white rounded-lg shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <StampIcon className="w-3 h-3 text-orange-400" />
              <span>Cap Stempel Tour!</span>
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

      {/* RIGHT SPREAD: 3D Pop-Up Cropped Image Diorama (Real Documentation) */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
              3D POP-UP CROPPED IMAGE DIORAMA
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
              Kunjungan Industri & Study Tour Malang - Batu
            </h3>
          </div>

          {/* 3D Modern Diorama Stage with Real Cropped Photography */}
          <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden perspective-1800 bg-gradient-to-b from-sky-900 via-indigo-950 to-slate-950 shadow-inner flex items-end justify-center p-3 group">
            {/* Background Sky Layer */}
            <div className="absolute top-4 left-4 text-white/50 font-mono text-[9px] z-10">
              SMK NEGERI 1 PROBOLINGGO • SEKAWAN MEDIA MALANG
            </div>

            {/* POP-UP LAYER 1 (Far Depth): Panorama Foto Rombongan & Resort Malang */}
            <motion.div
              initial={{ rotateX: -75, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 14, stiffness: 90, delay: 0.2 }}
              className="absolute bottom-8 inset-x-2 z-10 flex justify-center pointer-events-none transform-style-preserve-3d"
            >
              <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-white/20 shadow-popup-layer">
                <img
                  src="/images/trip-8.webp"
                  alt="Rombongan Bus Jetbus di Malang"
                  className="w-full h-full object-cover object-center filter contrast-110"
                />
                <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-xs text-orange-400 text-[8px] font-mono px-2 py-0.5 rounded border border-orange-500/30">
                  📍 MALANG RESORT BASE
                </div>
              </div>
            </motion.div>

            {/* POP-UP LAYER 2 (Mid Depth): Cropped Real Photos of Neni & Bus Stand-Up */}
            <motion.div
              initial={{ rotateX: -85, y: 30, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 85, delay: 0.4 }}
              className="relative z-20 w-full flex items-end justify-between px-3 pb-1"
            >
              {/* Cropped Bus Photo Stand-Up with White Border */}
              <div className="w-36 h-22 rounded-lg overflow-hidden border-2 border-white shadow-2xl bg-slate-900 rotate-[-2deg] hover:rotate-0 transition-transform">
                <img
                  src="/images/neni-5.webp"
                  alt="Bus Pandawa 87 Nak Ji Nak Beh"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-1 left-1 bg-black/80 text-orange-300 text-[8px] font-mono px-1.5 py-0.5 rounded">
                  🚌 PANDAWA 87
                </div>
              </div>

              {/* Cropped Delegation Stand-Up */}
              <div className="w-36 h-22 rounded-lg overflow-hidden border-2 border-white shadow-2xl bg-slate-900 rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="/images/trip-1.webp"
                  alt="Kunjungan Industri Sekawan Media"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 text-emerald-300 text-[8px] font-mono px-1.5 py-0.5 rounded">
                  👥 100+ DELEGASI
                </div>
              </div>
            </motion.div>

            {/* Floor Fold Line */}
            <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          <p className="text-[10px] text-center font-mono text-slate-400 mt-2">
            ✦ Layer foto dokumentasi nyata berdiri mekar saat jurnal dibuka
          </p>
        </div>

        {/* Proven Track Record Stats */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="grid grid-cols-3 gap-2 text-center mb-3">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-2xl font-black font-display text-slate-900">50+</span>
              <span className="text-[10px] font-sans font-semibold text-slate-500">Trip Sukses</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-2xl font-black font-display text-orange-600">2,500+</span>
              <span className="text-[10px] font-sans font-semibold text-slate-500">Peserta Rombongan</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-2xl font-black font-display text-emerald-600">100%</span>
              <span className="text-[10px] font-sans font-semibold text-slate-500">Disiplin Waktu</span>
            </div>
          </div>

          {/* Tour Leader Statement */}
          <blockquote className="text-xs font-sans text-slate-700 bg-orange-50/60 p-3 rounded-xl border-l-3 border-orange-500 leading-relaxed">
            “Sebagai Tour Leader, prioritas saya adalah memastikan seluruh rombongan merasa **nyaman, aman, dan
            bahagia**. Dari koordinasi multi-armada bus, ketepatan waktu kunjungan industri, hingga kenyamanan kamar
            hotel peserta.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};
