import { useState } from 'react';
import { BookContainer } from './components/BookContainer';
import { AudioToggle } from './components/AudioToggle';
import { TravelLoader } from './components/TravelLoader';
import { Compass, ShieldCheck, Phone, MapPin, Play } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-modern-desk text-slate-100 relative selection:bg-orange-500 selection:text-white flex flex-col justify-between p-3 sm:p-6 lg:p-8">
      {/* Travel Milestone Loading Page */}
      <AnimatePresence>
        {isLoading && <TravelLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Sound Toggle Floating Top Right */}
      <AudioToggle />

      {/* Top Modern Expedition Header */}
      <header className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-2 border-b border-slate-800/80 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Compass className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <h2 className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight">
              ARDIAN PRATAMA
            </h2>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="text-orange-400 font-bold">LEAD EXPEDITIONIST</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">BNSP CERTIFIED TOUR LEADER</span>
            </p>
          </div>
        </div>

        {/* Quick Actions & Replay Intro */}
        <div className="flex items-center gap-2.5 text-xs font-mono">
          <button
            onClick={() => setIsLoading(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 text-[11px] transition-colors cursor-pointer"
            title="Putar Ulang Animasi Loading Perjalanan"
          >
            <Play className="w-3 h-3 text-orange-400" />
            <span className="hidden sm:inline">Replay Intro</span>
          </button>

          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>WFTGA & BNSP Certified</span>
          </span>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Mas%20Ardian,%20saya%20tertarik%20konsultasi%20jadwal%20tur%20ekspedisi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-[11px] shadow-lg shadow-orange-600/20 transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Interactive Modern Pop-Up Book */}
      <main className="w-full flex-1 flex items-center justify-center my-auto py-2">
        <BookContainer />
      </main>

      {/* Footer Modern Notes */}
      <footer className="w-full max-w-6xl mx-auto mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-orange-500" />
          <span>Basecamp: Jakarta & Bali • Siap Bertugas ke Seluruh Benua</span>
        </div>
        <div className="text-center sm:text-right">
          <span>© 2026 Ardian Pratama • Modern 3D Pop-Up Lookbook Portfolio</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
