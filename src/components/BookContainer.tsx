import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { sounds } from '../lib/sounds';
import { PassportPage } from './pages/PassportPage';
import { ExpeditionsPage } from './pages/ExpeditionsPage';
import { SurvivalKitPage } from './pages/SurvivalKitPage';
import { PostcardsPage } from './pages/PostcardsPage';
import { BoardingPassPage } from './pages/BoardingPassPage';

const SPREADS = [
  { id: 0, title: 'Cover Depan', short: 'Cover' },
  { id: 1, title: 'Lembar 1: Paspor & Diorama Bromo', short: 'Paspor' },
  { id: 2, title: 'Lembar 2: Diorama Ekspedisi Rute', short: 'Ekspedisi' },
  { id: 3, title: 'Lembar 3: Survival Kit & Keahlian', short: 'Keahlian' },
  { id: 4, title: 'Lembar 4: Kartu Pos & Ulasan Tamu', short: 'Ulasan' },
  { id: 5, title: 'Lembar 5: Boarding Pass & Kontak', short: 'Booking' }
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
      {/* Top Leather Ribbon Quick Navigation */}
      <div className="w-full flex items-center justify-between mb-4 px-2 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-typewriter text-[#d4af37] font-bold tracking-wide uppercase">
            {SPREADS[currentSpread].title}
          </span>
        </div>

        {/* Index Bookmark Tabs */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          {SPREADS.map((sp) => (
            <button
              key={sp.id}
              onClick={() => goToSpread(sp.id)}
              className={`text-[10px] sm:text-xs font-typewriter px-2.5 py-1 rounded transition-all cursor-pointer whitespace-nowrap ${
                currentSpread === sp.id
                  ? 'bg-[#c59b27] text-[#1a1410] font-bold shadow-md scale-105'
                  : 'bg-[#2a1e16] text-[#cbb89e] hover:bg-[#3d2b20] border border-[#6b5139]/40'
              }`}
            >
              {sp.short}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN 3D BOOK DESK CONTAINER */}
      <div className="relative w-full perspective-1500">
        {/* Animated Page Flip Container */}
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
            {/* SPREAD 0: THE CLOSED HARDCOVER BOOK */}
            {currentSpread === 0 ? (
              <div className="w-full max-w-3xl mx-auto bg-leather rounded-2xl border-4 border-[#8c6b48] shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-6 sm:p-12 relative overflow-hidden text-[#f4ecd8] flex flex-col items-center justify-between min-h-[520px] sm:min-h-[580px]">
                {/* Brass Corner Protectors */}
                <div className="absolute top-2 left-2 w-10 h-10 border-t-4 border-l-4 border-[#d4af37] rounded-tl-lg pointer-events-none" />
                <div className="absolute top-2 right-2 w-10 h-10 border-t-4 border-r-4 border-[#d4af37] rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-10 h-10 border-b-4 border-l-4 border-[#d4af37] rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-10 h-10 border-b-4 border-r-4 border-[#d4af37] rounded-br-lg pointer-events-none" />

                {/* Stitched Edge Detail */}
                <div className="absolute inset-3 border border-dashed border-[#a17e57]/50 rounded-xl pointer-events-none" />

                {/* Cover Header */}
                <div className="text-center relative z-10 space-y-2 mt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a0e08]/70 border border-[#b8860b]/50 text-[10px] sm:text-xs font-typewriter text-[#fef08a] uppercase tracking-widest shadow-inner">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>BNSP CERTIFIED TOUR LEADER • EXPEDITION DIARY</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black font-journal tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#fef08a] via-[#eab308] to-[#92400e] drop-shadow-md">
                    THE EXPLORER'S JOURNAL
                  </h1>
                  <p className="text-xs sm:text-sm font-typewriter text-[#d6c4aa] tracking-widest uppercase">
                    ARDIAN "ARD" PRATAMA • TRAVEL SPECIALIST
                  </p>
                </div>

                {/* Center Embossed Emblem */}
                <div className="relative z-10 my-6 flex flex-col items-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-double border-[#d4af37] bg-gradient-to-tr from-[#1f140c] to-[#3a2012] flex items-center justify-center p-3 shadow-[0_10px_25px_rgba(0,0,0,0.6)] group">
                    <div className="text-center space-y-1">
                      <Compass className="w-10 h-10 sm:w-14 sm:h-14 mx-auto text-[#eab308] group-hover:rotate-45 transition-transform duration-700" />
                      <span className="block text-[9px] font-mono text-[#d4af37] tracking-widest">
                        GLOBAL ODYSSEY
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-handwriting text-[#e2cfb4] mt-3 italic text-center max-w-sm">
                    “Dunia ini terlalu megah untuk dijelajahi dengan terburu-buru.”
                  </span>
                </div>

                {/* Open Book Interactive Clasp */}
                <div className="relative z-10 text-center w-full max-w-sm mb-2">
                  <button
                    onClick={nextSpread}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#b45309] hover:from-[#92400e] hover:to-[#92400e] text-[#fffbeb] font-journal font-bold text-sm tracking-widest uppercase shadow-[0_8px_25px_rgba(180,83,9,0.5)] border border-[#fde68a]/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <BookOpen className="w-4 h-4 text-[#fef08a] group-hover:scale-110 transition-transform" />
                    <span>BUKA BUKU JURNAL PERJALANAN</span>
                    <ChevronRight className="w-4 h-4 text-[#fef08a] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] font-typewriter text-[#aa957f] mt-2">
                    *Klik untuk membuka halaman paspor & diorama pop-up interaktif
                  </p>
                </div>
              </div>
            ) : (
              /* SPREADS 1 TO 5: THE OPENED TWO-PAGE POP-UP SPREAD */
              <div className="w-full bg-parchment rounded-2xl border-4 border-[#785b3e] shadow-[0_30px_70px_rgba(0,0,0,0.85)] p-4 sm:p-8 relative min-h-[540px] sm:min-h-[620px] flex flex-col justify-between">
                {/* Book Spine Center Crease & Realistic Fold Shadow (Visible on MD screens up) */}
                <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none bg-gradient-to-r from-transparent via-[#452b14]/15 to-transparent z-20 book-spine-shadow" />

                {/* Stitched Top/Bottom Gutter Details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-[#452b14] rounded-b-md shadow-sm z-30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-[#452b14] rounded-t-md shadow-sm z-30" />

                {/* Ribbon Bookmark Hanging on top right */}
                <div className="absolute -top-3 right-10 w-7 h-16 bg-[#b91c1c] shadow-md z-30 flex flex-col justify-end items-center pointer-events-none">
                  <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[8px] border-b-parchment" />
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
                <div className="relative z-30 flex items-center justify-between pt-4 mt-4 border-t border-[#d8c8b0]">
                  <button
                    onClick={prevSpread}
                    disabled={currentSpread === 0}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ede0ca] hover:bg-[#e2d0b5] disabled:opacity-30 disabled:pointer-events-none text-[#452c1a] font-typewriter text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Halaman Sebelumnya</span>
                    <span className="sm:hidden">Kembali</span>
                  </button>

                  <div className="text-center">
                    <span className="text-xs font-journal font-bold text-[#3d2714]">
                      Lembar {currentSpread} dari {SPREADS.length - 1}
                    </span>
                    <span className="block text-[9px] font-typewriter text-[#8c6b48]">
                      Gunakan tombol atau tab di atas
                    </span>
                  </div>

                  {currentSpread < SPREADS.length - 1 ? (
                    <button
                      onClick={nextSpread}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-typewriter text-xs font-bold transition-all cursor-pointer shadow-md active:scale-95"
                    >
                      <span className="hidden sm:inline">Halaman Berikutnya</span>
                      <span className="sm:hidden">Lanjut</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => goToSpread(1)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white font-typewriter text-xs font-bold transition-all cursor-pointer shadow-md active:scale-95"
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
