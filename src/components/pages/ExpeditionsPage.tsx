import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, AlertTriangle, CheckCircle2, ChevronRight, Bus, Ship, Train } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface ExpeditionItem {
  id: string;
  name: string;
  location: string;
  tagline: string;
  season: string;
  groupSize: string;
  transportBadge: string;
  transportIcon: React.ReactNode;
  bgGradient: string;
  landscapeImg: string;
  vehicleImg: string;
  foregroundImg?: string;
  crisisStory: string;
  solution: string;
  itinerary: string[];
}

const expeditions: ExpeditionItem[] = [
  {
    id: 'arctic',
    name: 'Arctic Aurora & Fjord Expedition',
    location: 'Tromsø & Lofoten, Norwegia',
    tagline: 'Mengejar Aurora Borealis & Petualangan Fjord Kutub Utara',
    season: 'Nov - Feb (Winter Peak)',
    groupSize: '16 Pax Exclusive VIP',
    transportBadge: 'MERCEDES 4X4 SPRINTER COACH',
    transportIcon: <Bus className="w-3.5 h-3.5" />,
    bgGradient: 'from-slate-950 via-[#064e3b] to-slate-900',
    landscapeImg: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=800&auto=format&fit=crop&q=80',
    vehicleImg: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&auto=format&fit=crop&q=80',
    crisisStory: 'Badai salju esktrem -18°C menutup rute jalan E10; feri utama dibatalkan mendadak.',
    solution: 'Berhasil mengamankan kapal carter pemecah es lokal dalam 45 menit, seluruh rombongan tiba di lodge hangat tanpa panik.',
    itinerary: ['D1: Tromsø Cable Car & Ice Domes', 'D2: Chasing Aurora with Sami Reindeer Sled', 'D3: Fjord Speedboat Wildlife Safari', 'D4: Lofoten Traditional Rorbu Villa']
  },
  {
    id: 'ocean',
    name: 'Phinisi Luxury Liveaboard',
    location: 'Komodo & Raja Ampat, Indonesia',
    tagline: 'Pelayaran Mewah Mengarungi Gugusan Karst & Surga Bawah Laut',
    season: 'Mei - Okt (Calm Seas)',
    groupSize: '22 Pax Private Charter',
    transportBadge: 'LUXURY TRADITIONAL PHINISI',
    transportIcon: <Ship className="w-3.5 h-3.5" />,
    bgGradient: 'from-cyan-950 via-teal-900 to-slate-950',
    landscapeImg: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&auto=format&fit=crop&q=80',
    vehicleImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80',
    crisisStory: 'Arus pusaran Selat Lintah mendadak kencang saat sesi snorkeling Manta Point.',
    solution: 'Penerapan formasi buddy ganda & tender boat siaga; 100% peserta dievakuasi ke geladak dalam 3 menit tanpa cedera.',
    itinerary: ['D1: Sunset Padar Island Trekking', 'D2: Komodo Dragon Ranger Encounter', 'D3: Manta Point Drift Snorkel', 'D4: Taka Makassar Sandbar Private Dinner']
  },
  {
    id: 'alpine',
    name: 'Glacier Express & Sakura Heritage',
    location: 'Kyoto (Jepang) & Swiss Alps',
    tagline: 'Perpaduan Kuil Zen Sakura dan Kemegahan Puncak Salju Matterhorn',
    season: 'Apr - Mei (Spring Awakening)',
    groupSize: '28 Pax Multi-Generasi',
    transportBadge: 'PANORAMIC GLACIER EXPRESS',
    transportIcon: <Train className="w-3.5 h-3.5" />,
    bgGradient: 'from-slate-950 via-rose-950 to-slate-900',
    landscapeImg: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80',
    vehicleImg: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=500&auto=format&fit=crop&q=80',
    crisisStory: 'Kereta cepat mengalami kendala teknis listrik; 4 lansia membutuhkan transit nyaman.',
    solution: 'Alih moda ke bus carter VIP dengan kursi reclining, seluruh koper dipindahkan tim handling tanpa peserta repot.',
    itinerary: ['D1: Fushimi Inari & Arashiyama Bamboo Grove', 'D2: Private Tea Ceremony Gion', 'D3: Glacier Express Panoramic Mountain Train', 'D4: Zermatt Matterhorn Sunrise Viewing']
  }
];

export const ExpeditionsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('arctic');
  const [isPullTabOpen, setIsPullTabOpen] = useState<boolean>(false);

  const activeExp = expeditions.find((e) => e.id === selectedId) || expeditions[0];

  const handleSelect = (id: string) => {
    sounds.playPageTurn();
    setSelectedId(id);
    setIsPullTabOpen(false);
  };

  const togglePullTab = () => {
    sounds.playSlide();
    setIsPullTabOpen(!isPullTabOpen);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
      {/* LEFT SPREAD: Modern Destination Tabs & 3D Cropped Pop-Up Stage */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                PAGE 2 • CURATED EXPEDITIONS
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Pop-Up Rute Unggulan
              </h3>
            </div>
            <Compass className="w-5 h-5 text-orange-600" />
          </div>

          {/* Modern Destination Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl mb-4">
            {expeditions.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`text-xs font-mono font-bold py-2 px-2 rounded-lg transition-all cursor-pointer truncate flex items-center justify-center gap-1.5 ${
                  selectedId === item.id
                    ? 'bg-slate-900 text-white shadow-md scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {item.transportIcon}
                <span>{item.id === 'arctic' ? 'ARCTIC' : item.id === 'ocean' ? 'KOMODO' : 'ALPS'}</span>
              </button>
            ))}
          </div>

          {/* 3D Modern Diorama Stage with Cropped Photo Layers */}
          <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden perspective-1800 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, rotateY: 15 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -15 }}
                transition={{ duration: 0.4 }}
                className={`w-full h-full bg-gradient-to-b ${activeExp.bgGradient} p-4 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Meta Badges */}
                <div className="relative z-20 flex justify-between items-start">
                  <span className="bg-black/70 backdrop-blur-md text-orange-300 text-[10px] font-mono px-2.5 py-1 rounded-full border border-orange-500/30">
                    📍 {activeExp.location}
                  </span>
                  <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/20">
                    👥 {activeExp.groupSize}
                  </span>
                </div>

                {/* 3D CROPPED PHOTO POP-UP LAYERS (Standing Up in Perspective) */}
                <div className="relative w-full h-36 flex items-end justify-center">
                  {/* Layer 1 (Back): Cropped Landscape Panorama */}
                  <motion.div
                    initial={{ rotateX: -70, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 14, stiffness: 85, delay: 0.15 }}
                    className="absolute bottom-4 inset-x-1 h-28 rounded-lg overflow-hidden border-2 border-white/30 shadow-popup-layer"
                  >
                    <img
                      src={activeExp.landscapeImg}
                      alt={activeExp.name}
                      className="w-full h-full object-cover filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>

                  {/* Layer 2 (Front): Cropped Transport / Vehicle Cutout Card */}
                  <motion.div
                    initial={{ rotateX: -85, y: 25, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 90, delay: 0.35 }}
                    className="relative z-30 w-full flex items-end justify-between px-3 pb-1"
                  >
                    <div className="w-36 h-20 rounded-lg overflow-hidden border-2 border-white shadow-2xl bg-slate-900 rotate-[-2deg] hover:rotate-0 transition-transform">
                      <img
                        src={activeExp.vehicleImg}
                        alt="Vehicle"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 left-1 bg-black/80 text-orange-300 text-[8px] font-mono px-1.5 py-0.5 rounded">
                        {activeExp.transportBadge.split(' ')[0]}
                      </div>
                    </div>

                    <div className="bg-white text-slate-900 px-3 py-1.5 rounded-lg border-2 border-orange-500 shadow-2xl text-[10px] font-mono font-bold rotate-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{activeExp.transportBadge}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Ground plane shadow */}
                <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-t from-slate-950 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Destination Brief */}
        <div className="mt-3 pt-2 border-t border-slate-100">
          <h4 className="font-display font-bold text-base text-slate-900">{activeExp.name}</h4>
          <p className="text-xs font-sans text-slate-600 mb-1">{activeExp.tagline}</p>
          <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
            <span>📅 {activeExp.season}</span>
            <span>•</span>
            <span className="text-emerald-600 font-bold">✓ Zero-Incident Verified</span>
          </div>
        </div>
      </div>

      {/* RIGHT SPREAD: Modern Case Study & Interactive Pull-Tab */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
              OPERATIONAL CRISIS & LOGISTICS DOSSIER
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
              Mitigasi Krisis Lapangan
            </h3>
          </div>

          {/* Real Tour Leader Crisis Management Story */}
          <div className="space-y-3 font-sans text-xs">
            <div className="bg-rose-50/80 p-3.5 rounded-xl border border-rose-200">
              <div className="flex items-center gap-1.5 text-rose-800 font-bold text-xs mb-1">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>TANTANGAN DI LAPANGAN:</span>
              </div>
              <p className="leading-relaxed text-rose-900">{activeExp.crisisStory}</p>
            </div>

            <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>SOLUSI CEPAT TOUR LEADER:</span>
              </div>
              <p className="leading-relaxed text-emerald-900">{activeExp.solution}</p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE PULL-TAB DRAWER */}
        <div className="mt-4 pt-3 border-t border-slate-100 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
              BLUEPRINT ITINERARY DOSSIER
            </span>
            <button
              onClick={togglePullTab}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-mono font-bold shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <span>{isPullTabOpen ? 'Tutup Tab' : '🏷️ Tarik Tab Itinerary'}</span>
              <ChevronRight
                className={`w-3.5 h-3.5 transition-transform ${isPullTabOpen ? 'rotate-90' : ''}`}
              />
            </button>
          </div>

          {/* Sliding Modern Card */}
          <AnimatePresence>
            {isPullTabOpen ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-inner text-slate-900"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 mb-2">
                  <span className="font-display font-bold text-xs">BLUEPRINT ITINERARY RESMI</span>
                  <span className="text-[9px] font-mono bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">
                    CURATED BY ARD
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs font-sans">
                  {activeExp.itinerary.map((day, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{day}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <div
                onClick={togglePullTab}
                className="bg-slate-50 border border-dashed border-slate-300 p-3 rounded-xl text-center cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <p className="text-xs font-sans text-slate-600">
                  👉 <em>Klik tombol untuk menarik kartu rute rahasia & logistik</em>
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
