import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, AlertTriangle, CheckCircle2, ChevronRight, Bus, Landmark, Palmtree } from 'lucide-react';
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
  crisisStory: string;
  solution: string;
  itinerary: string[];
}

const expeditions: ExpeditionItem[] = [
  {
    id: 'malang',
    name: 'Kunjungan Industri & Edukasi Malang - Batu',
    location: 'Malang & Kota Batu, Jawa Timur',
    tagline: 'Study Tour Edukatif, Kunjungan Industri Teknologi & Rekreasi Pegunungan',
    season: 'Sepanjang Tahun (Fleksibel)',
    groupSize: '80 - 150+ Siswa/Mahasiswa (Multi-Bus)',
    transportBadge: 'MERCEDES JETBUS 5 PANDAWA 87',
    transportIcon: <Bus className="w-3.5 h-3.5" />,
    bgGradient: 'from-slate-950 via-[#1e293b] to-emerald-950',
    landscapeImg: '/images/trip-5.webp',
    vehicleImg: '/images/neni-4.webp',
    crisisStory: 'Pergeseran jadwal presentasi mendadak dari pihak industri mitra akibat rapat pimpinan internal.',
    solution: 'Langsung memajukan sesi kunjungan UMKM edukatif (Madu Kembang Joyo) tanpa membuang waktu, seluruh agenda industri dan rekreasi Jatim Park tetap selesai 100% tuntas.',
    itinerary: [
      'H1: Keberangkatan & Check-in Hotel Bintang di Malang',
      'H2: Kunjungan Industri Resmi (OJK / Sekawan Media) & Kampus',
      'H3: Sentra Edukasi Madu Kembang Joyo & Petik Apel Batu',
      'H4: Rekreasi Jatim Park / Museum Angkut & Belanja Oleh-Oleh'
    ]
  },
  {
    id: 'jogja',
    name: 'Heritage & Lava Tour Yogyakarta - Semarang',
    location: 'D.I. Yogyakarta & Semarang',
    tagline: 'Eksplorasi Warisan Budaya Keraton, Candi Megah & Sejarah Kolonial',
    season: 'Musim Liburan & Karyawan',
    groupSize: '40 - 100 Pax (Instansi / Komunitas)',
    transportBadge: 'SUPER EXECUTIVE TOURIST COACH',
    transportIcon: <Landmark className="w-3.5 h-3.5" />,
    bgGradient: 'from-slate-950 via-[#451a03] to-amber-950',
    landscapeImg: '/images/trip-7.webp',
    vehicleImg: '/images/neni-6.webp',
    crisisStory: 'Kepadatan arus lalu lintas ekstrem di Malioboro & rekayasa jalan searah bus pariwisata.',
    solution: 'Penerapan sistem drop-zone cepat dan koordinasi titik kumpul terjadwal via grup perwakilan bus; seluruh peserta kembali ke bus tanpa ada yang terpisah.',
    itinerary: [
      'H1: Lawang Sewu & Eksplorasi Kota Lama Semarang',
      'H2: Candi Prambanan & Lava Tour Merapi Jeep Adventure',
      'H3: Keraton Yogyakarta, Sentra Bakpia & Malioboro Walk',
      'H4: Sunset Tebing Breksi & Perjalanan Pulang Nyaman'
    ]
  },
  {
    id: 'bali',
    name: 'Exotic Island & Cultural Odyssey Bali',
    location: 'Pulau Dewata Bali',
    tagline: 'Pesona Bahari Tropis, Sunset Tanah Lot & Pertunjukan Budaya Sakral',
    season: 'Liburan Sekolah & Gathering',
    groupSize: '50 - 120 Pax (Corporate & Family)',
    transportBadge: 'FULL AC PARIWISATA & FERI CHARTER',
    transportIcon: <Palmtree className="w-3.5 h-3.5" />,
    bgGradient: 'from-slate-950 via-cyan-950 to-blue-950',
    landscapeImg: '/images/trip-8.webp',
    vehicleImg: '/images/neni-2.webp',
    crisisStory: 'Antrean padat penyeberangan feri Pelabuhan Ketapang - Gilimanuk di tengah malam.',
    solution: 'Manajemen istirahat peserta di dalam bus dengan pembagian konsumsi teratur serta pendataan manifes kilat di pelabuhan; rombongan tiba di hotel Denpasar dalam kondisi segar.',
    itinerary: [
      'H1: Penyeberangan Selat Bali & Sarapan Transit Gilimanuk',
      'H2: Pura Tanah Lot, Pantai Pandawa & Tari Kecak Melasti',
      'H3: Wisata Danau Bedugul & Oleh-oleh Krisna / Joger',
      'H4: Sunset Dinner Pantai Jimbaran & Sayonara Bali'
    ]
  }
];

export const ExpeditionsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('malang');
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
                PAGE 2 • SPESIALISASI DESTINASI NENI
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Pop-Up Rute Favorit
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
                <span>{item.id === 'malang' ? 'MALANG-BATU' : item.id === 'jogja' ? 'JOGJA-SEMARANG' : 'BALI'}</span>
              </button>
            ))}
          </div>

          {/* 3D Modern Diorama Stage with Real Cropped Photo Layers */}
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
                    👥 {activeExp.groupSize.split(' ')[0]} Pax
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
                      className="w-full h-full object-cover object-top filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>

                  {/* Layer 2 (Front): Cropped Real Tour Leader & Bus Cutout */}
                  <motion.div
                    initial={{ rotateX: -85, y: 25, opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 90, delay: 0.35 }}
                    className="relative z-30 w-full flex items-end justify-between px-3 pb-1"
                  >
                    <div className="w-36 h-22 rounded-lg overflow-hidden border-2 border-white shadow-2xl bg-slate-900 rotate-[-2deg] hover:rotate-0 transition-transform">
                      <img
                        src={activeExp.vehicleImg}
                        alt="Armada Bus Pariwisata"
                        className="w-full h-full object-cover object-top"
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
            <span className="text-emerald-600 font-bold">✓ Teruji di Lapangan</span>
          </div>
        </div>
      </div>

      {/* RIGHT SPREAD: Case Study & Interactive Pull-Tab */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
              HANDLING COMPLAIN & CRISIS MANAGEMENT
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
              Pengalaman Lapangan & Solusi
            </h3>
          </div>

          {/* Real Crisis Management Story */}
          <div className="space-y-3 font-sans text-xs">
            <div className="bg-rose-50/80 p-3.5 rounded-xl border border-rose-200">
              <div className="flex items-center gap-1.5 text-rose-800 font-bold text-xs mb-1">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>KENDALA LAPANGAN:</span>
              </div>
              <p className="leading-relaxed text-rose-900">{activeExp.crisisStory}</p>
            </div>

            <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>SOLUSI KILAT TOUR LEADER:</span>
              </div>
              <p className="leading-relaxed text-emerald-900">{activeExp.solution}</p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE PULL-TAB DRAWER */}
        <div className="mt-4 pt-3 border-t border-slate-100 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
              BLUEPRINT ITINERARY RESMI
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
                  <span className="font-display font-bold text-xs">SUSUNAN JADWAL RUTE TRIP</span>
                  <span className="text-[9px] font-mono bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">
                    NENI SURYANI SPECIALIST
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
                  👉 <em>Klik tombol untuk menarik susunan itinerary & alur kegiatan</em>
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
