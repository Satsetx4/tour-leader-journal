import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, ShieldCheck } from 'lucide-react';
import { sounds } from '../lib/sounds';
import { PassportPage } from './pages/PassportPage';
import { ExpeditionsPage } from './pages/ExpeditionsPage';
import { SurvivalKitPage } from './pages/SurvivalKitPage';
import { PostcardsPage } from './pages/PostcardsPage';
import { BoardingPassPage } from './pages/BoardingPassPage';

const SPREADS = [
  { id: 0, title: 'Cover Lookbook', short: 'Cover' },
  { id: 1, title: 'Halaman 1: Paspor & Diorama Bromo', short: 'Paspor' },
  { id: 2, title: 'Halaman 2: Pop-Up Rute Ekspedisi', short: 'Ekspedisi' },
  { id: 3, title: 'Halaman 3: Tech-Kit & Keahlian', short: 'Tech-Kit' },
  { id: 4, title: 'Halaman 4: Ulasan Tamu & Testimoni', short: 'Ulasan' },
  { id: 5, title: 'Halaman 5: Boarding Pass & Kontak', short: 'Booking' }
];

export const BookContainer: React.FC = () => {
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const goToSpread = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= SPREADS.length || nextIndex === currentSpread) return;
    sounds.playPageTurn();
    setDirection(nextIndex > currentSpread ? 1 : -1);
    setCurrentSpread(nextIndex);
  };

  const nextSpread = () => goToSpread(currentSpread + 1);
  const prevSpread = () => goToSpread(currentSpread - 1);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Top Modern Quick Navigation Bar */}
      <div className="w-full flex items-center justify-between mb-4 px-2 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-mono text-slate-300 font-bold tracking-wide uppercase">
            {SPREADS[currentSpread].title}
          </span>
        </div>

        {/* Index Bookmark Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {SPREADS.map((sp) => (
            <button
              key={sp.id}
              onClick={() => goToSpread(sp.id)}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentSpread === sp.id
                  ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {sp.short}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN 3D MODERN BOOK CONTAINER */}
      <div className="relative w-full perspective-1800">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSpread}
            custom={direction}
            initial={{ opacity: 0, rotateY: direction * 14, scale: 0.98 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: direction * -14, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="w-full"
          >
            {/* SPREAD 0: THE MODERN EDITORIAL LOOKBOOK COVER */}
            {currentSpread === 0 ? (
              <div className="w-full max-w-3xl mx-auto bg-gradient-to-b from-slate-900 via-slate-950 to-black rounded-3xl border-2 border-slate-700/60 shadow-[0_30px_90px_rgba(0,0,0,0.85)] p-6 sm:p-12 relative overflow-hidden text-white flex flex-col items-center justify-between min-h-[520px] sm:min-h-[580px]">
                {/* Modern Neon Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

                {/* Cover Header */}
                <div className="text-center relative z-10 space-y-2 mt-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono text-orange-400 uppercase tracking-widest shadow-inner">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CERTIFIED TOUR LEADER • EXPEDITION VOL. 01</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white drop-shadow-md">
                    THE MODERN ODYSSEY
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-widest uppercase">
                    ARDIAN "ARD" PRATAMA • INTERNATIONAL TOUR SPECIALIST
                  </p>
                </div>

                {/* Center Hero Cutout Graphic */}
                <div className="relative z-10 my-6 flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center p-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=80"
                      alt="Expedition Cover"
                      className="w-full h-full object-cover rounded-2xl filter contrast-125 opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end justify-center pb-2">
                      <span className="text-[10px] font-mono text-orange-400 font-bold tracking-widest uppercase">
                        GLOBAL EXPEDITIONS
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-sans text-slate-400 mt-3 text-center max-w-sm">
                    “Eksplorasi berkelas dengan kepastian rasa aman, manajemen krisis presisi, dan memori tak terlupakan.”
                  </span>
                </div>

                {/* Open Book Button */}
                <div className="relative z-10 text-center w-full max-w-sm mb-2">
                  <button
                    onClick={nextSpread}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-orange-600 text-slate-950 font-display font-bold text-sm tracking-widest uppercase shadow-[0_10px_35px_rgba(249,115,22,0.35)] border border-orange-300/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <BookOpen className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                    <span>BUKA BUKU JURNAL PORTOFOLIO</span>
                    <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] font-mono text-slate-500 mt-2">
                    ✦ Klik untuk membuka lembar paspor & pop-up image diorama
                  </p>
                </div>
              </div>
            ) : (
              /* SPREADS 1 TO 5: THE OPENED MODERN 2-PAGE EDITORIAL SPREAD */
              <div className="w-full bg-[#f8fafc] rounded-3xl border border-slate-200/80 shadow-[0_30px_90px_rgba(0,0,0,0.6)] p-4 sm:p-8 relative min-h-[540px] sm:min-h-[620px] flex flex-col justify-between">
                {/* Book Spine Center Modern Fold Shadow (Visible on MD screens up) */}
                <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 pointer-events-none bg-gradient-to-r from-transparent via-slate-900/10 to-transparent z-20" />

                {/* Modern Orange Tag Bookmark Hanging top right */}
                <div className="absolute -top-3 right-10 px-3 py-1 bg-orange-600 text-white text-[9px] font-mono font-bold rounded-b-md shadow-md z-30 uppercase tracking-widest">
                  PORTFOLIO 2026
                </div>

                {/* Active Spread Component Content */}
                <div className="w-full flex-1 relative z-10">
                  {currentSpread === 1 && <PassportPage />}
                  {currentSpread === 2 && <ExpeditionsPage />}
                  {currentSpread === 3 && <SurvivalKitPage />}
                  {currentSpread === 4 && <PostcardsPage />}
                  {currentSpread === 5 && <BoardingPassPage />}
                </div>

                {/* Bottom Navigation Buttons (Prev / Next Pages) */}
                <div className="relative z-30 flex items-center justify-between pt-4 mt-4 border-t border-slate-200">
                  <button
                    onClick={prevSpread}
                    disabled={currentSpread === 0}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none text-slate-700 font-mono text-xs font-bold transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Halaman Sebelumnya</span>
                    <span className="sm:hidden">Kembali</span>
                  </button>

                  <div className="text-center">
                    <span className="text-xs font-display font-bold text-slate-800">
                      Halaman {currentSpread} dari {SPREADS.length - 1}
                    </span>
                    <span className="block text-[9px] font-mono text-slate-400">
                      Gunakan navigasi tab di atas
                    </span>
                  </div>

                  {currentSpread < SPREADS.length - 1 ? (
                    <button
                      onClick={nextSpread}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-md active:scale-95"
                    >
                      <span className="hidden sm:inline">Halaman Berikutnya</span>
                      <span className="sm:hidden">Lanjut</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => goToSpread(1)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-md active:scale-95"
                    >
                      <span>Ulangi dari Awal</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
