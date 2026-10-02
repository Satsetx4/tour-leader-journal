import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface ExpeditionItem {
  id: string;
  name: string;
  location: string;
  tagline: string;
  season: string;
  groupSize: string;
  bgColor: string;
  skyGradient: string;
  dioramaType: 'arctic' | 'ocean' | 'alpine';
  crisisStory: string;
  solution: string;
  itinerary: string[];
}

const expeditions: ExpeditionItem[] = [
  {
    id: 'arctic',
    name: 'Arctic Aurora & Fjord Odyssey',
    location: 'Tromsø & Lofoten, Norwegia',
    tagline: 'Mengejar Aurora Borealis & Petualangan Fjord Kutub Utara',
    season: 'Musim Dingin (Nov - Feb)',
    groupSize: '16 Pax Exclusive VIP',
    bgColor: '#0f172a',
    skyGradient: 'from-[#030712] via-[#064e3b] to-[#042f2e]',
    dioramaType: 'arctic',
    crisisStory: 'Badai salju -18°C menutup jalur darat E10; feri utama dibatalkan.',
    solution: 'Berhasil mengamankan kapal carter lokal pemecah es dalam 45 menit, semua peserta sampai di lodge tepat waktu tanpa cemas.',
    itinerary: ['D1: Tromsø Cable Car & Ice Dome', 'D2: Chasing Aurora with Sami Reindeer', 'D3: Fjord Rib Boat Wildlife Safari', 'D4: Lofoten Traditional Rorbu Stay']
  },
  {
    id: 'ocean',
    name: 'Phinisi & Jurassic Realm',
    location: 'Komodo & Raja Ampat, Indonesia',
    tagline: 'Liveaboard Mewah Mengarungi Surga Karst Bahari Dunia',
    season: 'Sepanjang Tahun (Mei - Okt)',
    groupSize: '22 Pax Private Charter',
    bgColor: '#0c4a6e',
    skyGradient: 'from-[#082f49] via-[#0e7490] to-[#0284c7]',
    dioramaType: 'ocean',
    crisisStory: 'Arus pusaran Selat Lintah mendadak kencang saat sesi snorkeling Manta Point.',
    solution: 'Penerapan formasi buddy ganda & tender boat siaga; 100% peserta dievakuasi ke geladak dalam 3 menit tanpa cedera.',
    itinerary: ['D1: Sunset Padar Island Trek', 'D2: Komodo Dragon Ranger Trail', 'D3: Manta Point Drift Snorkel', 'D4: Taka Makassar Sandbar Feast']
  },
  {
    id: 'alpine',
    name: 'Heritage & Alpine Sakura',
    location: 'Kyoto (Jepang) & Swiss Alps',
    tagline: 'Perpaduan Zen Kuno Kuil Sakura dan Kemegahan Puncak Matterhorn',
    season: 'Musim Semi (Apr - Mei)',
    groupSize: '28 Pax Multi-Generasi (Anak-Lansia)',
    bgColor: '#4a044e',
    skyGradient: 'from-[#2e1065] via-[#701a75] to-[#f43f5e]/30',
    dioramaType: 'alpine',
    crisisStory: 'Kereta cepat mengalami kendala teknis listrik; 4 lansia membutuhkan transit nyaman.',
    solution: 'Alih moda ke bus VIP privat dengan kursi reclining, seluruh koper dipindahkan tim handling tanpa peserta repot.',
    itinerary: ['D1: Fushimi Inari & Arashiyama Bamboo', 'D2: Private Tea Ceremony Gion', 'D3: Glacier Express Scenic Train', 'D4: Zermatt Matterhorn Sunrise Viewing']
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
      {/* LEFT SPREAD: Interactive Destination Tabs & 3D Standup Diorama */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#8c6b48]/30 pb-2 mb-3">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
                LEMBAR 2 • EXPEDITION SHOWCASE
              </span>
              <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
                Diorama Rute Unggulan
              </h3>
            </div>
            <Compass className="w-5 h-5 text-[#8c6b48]" />
          </div>

          {/* Destination Selector Tabs (Like Index tabs on a real leather book) */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#ede0cb] rounded-lg mb-4">
            {expeditions.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`text-[10px] sm:text-[11px] font-typewriter font-bold py-1.5 px-2 rounded transition-all cursor-pointer truncate ${
                  selectedId === item.id
                    ? 'bg-[#2a1d15] text-[#fbbf24] shadow-md scale-[1.02]'
                    : 'text-[#5c442d] hover:bg-[#dfd0ba]'
                }`}
              >
                {item.id === 'arctic' && '❄️ ARCTIC'}
                {item.id === 'ocean' && '⛵ KOMODO'}
                {item.id === 'alpine' && '🌸 SAKURA'}
              </button>
            ))}
          </div>

          {/* Interactive 3D Diorama Stage */}
          <div className="relative w-full h-48 sm:h-56 rounded-lg border-2 border-[#c5ad8d] overflow-hidden perspective-1500 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, rotateY: 15 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -15 }}
                transition={{ duration: 0.4 }}
                className={`w-full h-full bg-gradient-to-b ${activeExp.skyGradient} p-4 flex flex-col justify-between relative`}
              >
                {/* Weather / Ambient Effect */}
                {activeExp.dioramaType === 'arctic' && (
                  <>
                    {/* Aurora green glow wave */}
                    <motion.div
                      animate={{ opacity: [0.4, 0.85, 0.4], x: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-2 inset-x-0 h-16 bg-gradient-to-r from-transparent via-[#34d399]/40 to-transparent blur-md"
                    />
                    {/* Stars */}
                    <div className="absolute top-3 left-8 w-1 h-1 bg-white rounded-full animate-ping" />
                    <div className="absolute top-6 right-16 w-1.5 h-1.5 bg-white rounded-full" />
                  </>
                )}

                {activeExp.dioramaType === 'ocean' && (
                  <>
                    {/* Tropical sun and ocean shimmer */}
                    <div className="absolute top-3 right-6 w-14 h-14 rounded-full bg-amber-400/80 blur-xs shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
                    <div className="absolute bottom-10 inset-x-0 h-8 bg-cyan-400/20 blur-sm" />
                  </>
                )}

                {activeExp.dioramaType === 'alpine' && (
                  <>
                    {/* Sakura petals floating */}
                    <div className="absolute top-4 left-6 text-pink-300 text-xs animate-bounce">🌸</div>
                    <div className="absolute top-10 right-10 text-pink-300 text-xs">🌸</div>
                  </>
                )}

                {/* Destination Badge Top */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-[#1e140d]/80 text-[#fde68a] text-[9px] font-mono px-2 py-0.5 rounded border border-amber-600/40 backdrop-blur-xs">
                    📍 {activeExp.location}
                  </span>
                  <span className="bg-[#1e140d]/80 text-white text-[9px] font-mono px-2 py-0.5 rounded border border-white/20">
                    👥 {activeExp.groupSize}
                  </span>
                </div>

                {/* 3D Pop-Up Paper Cut-Out Figures (Standing Up) */}
                <motion.div
                  initial={{ rotateX: -85, transformOrigin: 'bottom' }}
                  animate={{ rotateX: 0 }}
                  transition={{ type: 'spring', damping: 13, stiffness: 85, delay: 0.15 }}
                  className="relative z-20 flex items-end justify-between px-2 pb-1"
                >
                  {activeExp.dioramaType === 'arctic' && (
                    <>
                      {/* Iceberg Cutout */}
                      <div className="w-24 h-20 bg-gradient-to-t from-[#e0f2fe] to-[#38bdf8] clip-polygon shadow-2xl border-t-2 border-white/80 rotate-[-4deg] flex items-center justify-center text-[10px] font-bold text-slate-800">
                        🏔️ ICEBERG
                      </div>
                      {/* Red Cabin / Sami Tent */}
                      <div className="bg-[#dc2626] text-white px-2.5 py-1 rounded-sm border border-red-950 shadow-xl text-[9px] font-typewriter font-bold rotate-2">
                        🏠 FJORD LODGE
                      </div>
                    </>
                  )}

                  {activeExp.dioramaType === 'ocean' && (
                    <>
                      {/* Phinisi Boat Cutout */}
                      <div className="bg-[#78350f] text-amber-200 px-3 py-1.5 rounded-sm border-2 border-[#b45309] shadow-2xl text-[10px] font-bold font-journal rotate-[-2deg]">
                        ⛵ PHINISI CHARTER
                      </div>
                      {/* Island Peak */}
                      <div className="w-20 h-16 bg-[#15803d] rounded-t-full shadow-lg border-t-2 border-emerald-300 flex items-center justify-center text-[9px] text-white font-mono">
                        🏝️ KOMODO
                      </div>
                    </>
                  )}

                  {activeExp.dioramaType === 'alpine' && (
                    <>
                      {/* Torii Gate & Alpine Chalet */}
                      <div className="bg-[#b91c1c] text-white px-2.5 py-1 rounded-xs border border-red-900 shadow-xl text-[10px] font-bold">
                        ⛩️ TORII GATE
                      </div>
                      <div className="bg-[#334155] text-amber-300 px-2.5 py-1 rounded border border-slate-600 shadow-xl text-[9px] font-mono">
                        🚠 MATTERHORN 4478M
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Ground plane shadow */}
                <div className="absolute bottom-0 inset-x-0 h-3 bg-black/40 border-t border-white/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Destination Brief */}
        <div className="mt-3 pt-2 border-t border-[#d8c8b0]">
          <h4 className="font-journal font-bold text-sm text-[#2a170d]">{activeExp.name}</h4>
          <p className="text-[11px] font-typewriter text-[#61472e] italic mb-1">{activeExp.tagline}</p>
          <div className="flex items-center gap-3 text-[10px] font-typewriter text-[#8c6b48]">
            <span>📅 {activeExp.season}</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">Status: Rute Terverifikasi Aman</span>
          </div>
        </div>
      </div>

      {/* RIGHT SPREAD: Case Study & Interactive Kraft Pull-Tab */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#8c6b48]/30 pb-2 mb-4">
            <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
              CRISIS MANAGEMENT & LOGISTICS DOSSIER
            </span>
            <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
              Studi Kasus & Manajemen Risiko
            </h3>
          </div>

          {/* Real Tour Leader Crisis Management Story */}
          <div className="space-y-3 font-typewriter text-xs text-[#3a2818]">
            <div className="bg-[#fee2e2]/70 p-3 rounded-lg border border-red-300">
              <div className="flex items-center gap-1.5 text-red-800 font-bold text-[11px] mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>TANTANGAN DI LAPANGAN:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#7f1d1d]">{activeExp.crisisStory}</p>
            </div>

            <div className="bg-[#dcfce7]/70 p-3 rounded-lg border border-emerald-300">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px] mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SOLUSI RESPON CEPAT TOUR LEADER:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#14532d]">{activeExp.solution}</p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE PULL-TAB (Tarik Tab Kertas untuk Lihat Itinerary Lengkap) */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-typewriter uppercase text-[#8c6b48] font-bold">
              ITINERARY DOSSIER CARD
            </span>
            <button
              onClick={togglePullTab}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#b45309] text-white rounded-md text-[11px] font-typewriter font-bold shadow-md hover:bg-[#92400e] active:scale-95 transition-all cursor-pointer"
            >
              <span>{isPullTabOpen ? 'Tutup Tab' : '🏷️ Tarik Tab Kertas'}</span>
              <ChevronRight
                className={`w-3.5 h-3.5 transition-transform ${isPullTabOpen ? 'rotate-90' : ''}`}
              />
            </button>
          </div>

          {/* Sliding Kraft Paper Card */}
          <AnimatePresence>
            {isPullTabOpen ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="bg-[#f0e3cc] border-2 border-dashed border-[#8c6b48] p-3 rounded-lg shadow-inner text-[#3d2714]"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-[#c8b398] mb-2">
                  <span className="font-journal font-bold text-xs">BLUEPRINT ITINERARY</span>
                  <span className="text-[9px] font-mono bg-[#2a1d15] text-[#fbbf24] px-1.5 py-0.5 rounded">
                    CURATED BY ARD
                  </span>
                </div>
                <ul className="space-y-1 text-[11px] font-typewriter">
                  {activeExp.itinerary.map((day, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{day}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <div
                onClick={togglePullTab}
                className="bg-[#ede0ca] border border-dashed border-[#b39b7f] p-2.5 rounded-lg text-center cursor-pointer hover:bg-[#e4d4ba] transition-colors"
              >
                <p className="text-[11px] font-typewriter text-[#73583f]">
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
