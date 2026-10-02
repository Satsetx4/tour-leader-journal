import { BookContainer } from './components/BookContainer';
import { CompassRose } from './components/CompassRose';
import { AudioToggle } from './components/AudioToggle';
import { Compass, ShieldCheck, Phone, MapPin } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-wood-desk text-[#f3eedd] relative selection:bg-[#b45309] selection:text-white flex flex-col justify-between p-3 sm:p-6 lg:p-8">
      {/* Sound Toggle Floating Top Right */}
      <AudioToggle />

      {/* Top Expedition Header */}
      <header className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-2 border-b border-[#634932]/40 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2a1d15] border-2 border-[#b8860b] flex items-center justify-center shadow-md">
            <Compass className="w-5 h-5 text-[#eab308]" />
          </div>
          <div>
            <h2 className="font-journal font-bold text-base sm:text-lg text-[#fef08a] tracking-wider leading-tight">
              ARDIAN PRATAMA
            </h2>
            <p className="text-[10px] font-typewriter text-[#d4af37]/80 uppercase tracking-widest flex items-center gap-1.5">
              <span>LEAD EXPEDITIONIST</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">BNSP CERTIFIED TOUR LEADER</span>
            </p>
          </div>
        </div>

        {/* Quick direct badge & status */}
        <div className="flex items-center gap-3 text-xs font-typewriter">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e140d]/80 border border-[#8c6b48]/50 text-[#e6d5bc]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Terdaftar Resmi WFTGA & BNSP</span>
          </span>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Mas%20Ardian,%20saya%20tertarik%20konsultasi%20jadwal%20tur%20ekspedisi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white font-bold text-[11px] shadow-md transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Interactive Pop-Up Book */}
      <main className="w-full flex-1 flex items-center justify-center my-auto py-2">
        <BookContainer />
      </main>

      {/* Floating Vintage Compass on the Desk (Desktop bottom-left) */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-40">
        <CompassRose />
        <span className="block text-[8px] font-mono text-[#a89078] text-center mt-1">
          MAGNETIC BEARING
        </span>
      </div>

      {/* Footer Desk Notes */}
      <footer className="w-full max-w-6xl mx-auto mt-8 pt-4 border-t border-[#634932]/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-typewriter text-[#a89078]">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span>Basecamp: Jakarta & Bali • Siap Bertugas ke Seluruh Benua</span>
        </div>
        <div className="text-center sm:text-right">
          <span>© 2026 Ardian Pratama • Interactive 3D Pop-Up Journal Portfolio</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
