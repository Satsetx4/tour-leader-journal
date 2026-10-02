import React, { useState } from 'react';
import { Send, Check, Copy, Bus, Phone, MapPin } from 'lucide-react';
import { sounds } from '../../lib/sounds';

export const BoardingPassPage: React.FC = () => {
  const [destination, setDestination] = useState('Malang & Batu (Kunjungan Industri & Edukasi)');
  const [collaborationType, setCollaborationType] = useState('Sekolah / Kampus (Study Tour / Kunjungan Industri)');
  const [paxCount, setPaxCount] = useState('2 - 4 Bus Pariwisata (80 - 180 Siswa)');
  const [travelMonth, setTravelMonth] = useState('Semester Depan / Musim Liburan');
  const [copied, setCopied] = useState(false);

  // Real WhatsApp number from PDF (with Indonesia code)
  const whatsappNumber = '628988989898';

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Halo Mbak Neni Suryani (Tour Leader & Specialist)!\n\nSaya ingin berkonsultasi mengenai pendampingan perjalanan wisata:\n• Destinasi Rencana: ${destination}\n• Kategori Klien: ${collaborationType}\n• Estimasi Rombongan: ${paxCount}\n• Rencana Waktu: ${travelMonth}\n\nApakah jadwal Mbak Neni tersedia untuk periode tersebut? Terima kasih banyak!`
    );
  };

  const handleCopy = () => {
    sounds.playPop();
    const text = `Rencana Kerjasama Tour Leader Neni Suryani:\n- Destinasi: ${destination}\n- Kategori: ${collaborationType}\n- Estimasi Armada: ${paxCount}\n- Waktu: ${travelMonth}\n- WhatsApp: 08988989898\n- Afiliasi: Kharisma Tour and Travel`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppClick = () => {
    sounds.playStamp();
    window.open(`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage()}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
      {/* LEFT SPREAD: Modern Executive Bus Pass */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                PAGE 5 • VIP TOUR PASS & RESERVASI
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Official Boarding Pass
              </h3>
            </div>
            <Bus className="w-5 h-5 text-orange-600" />
          </div>

          {/* Modern Boarding Pass Card */}
          <div className="bg-slate-950 text-white rounded-2xl shadow-xl overflow-hidden relative border border-slate-800">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 px-4 py-2.5 flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                KHARISMA TOUR & TRAVEL PASS
              </span>
              <span className="text-[10px] font-mono bg-black/40 px-2.5 py-0.5 rounded-full text-orange-200 font-bold">
                LEAD TOUR SPECIALIST
              </span>
            </div>

            {/* Route Visual */}
            <div className="p-4 grid grid-cols-3 items-center text-center border-b border-slate-800 bg-slate-900/60">
              <div>
                <span className="text-2xl font-black font-display text-white">DEP</span>
                <span className="text-[9px] font-mono text-slate-400 block uppercase">Jawa Timur</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-orange-400">🚌────────</span>
                <span className="text-[9px] font-mono text-orange-400 font-bold">FLEET TL-01</span>
              </div>
              <div>
                <span className="text-2xl font-black font-display text-emerald-400">DEST</span>
                <span className="text-[9px] font-mono text-slate-400 block uppercase truncate max-w-[85px] mx-auto">
                  {destination.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Passenger & Crew Details */}
            <div className="p-4 grid grid-cols-2 gap-3 text-[10px] font-mono bg-slate-950">
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">LEAD TOUR SPECIALIST</span>
                <strong className="text-xs text-white font-display">NENI SURYANI</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">AFILIASI RESMI</span>
                <span className="text-emerald-400 font-bold">KHARISMA TRAVEL</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">KATEGORI TRIP</span>
                <span className="font-semibold text-slate-300 truncate block">{collaborationType}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">ESTIMASI FLEET</span>
                <span className="font-semibold text-slate-300">{paxCount}</span>
              </div>
            </div>

            {/* Barcode & Seat */}
            <div className="border-t border-dashed border-slate-800 p-3 flex items-center justify-between bg-slate-900/40">
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-slate-500 uppercase block">KHARISMA DISPATCH BARCODE</span>
                <div className="h-6 flex items-center gap-0.5">
                  {[4, 2, 6, 1, 3, 5, 2, 4, 1, 3, 7, 2, 4, 3, 6, 2, 5, 1, 4, 3, 5].map((w, i) => (
                    <div key={i} className="bg-white/80 h-full" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[8px] font-mono text-slate-400 uppercase block">SEAT</span>
                <strong className="text-lg font-display text-orange-400 font-bold">TL-01 (CREW)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Links */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-600">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-600" /> Siap Kawal: Malang, Jogja, Semarang, Bali
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-bold text-slate-900">
              <Phone className="w-3.5 h-3.5 text-emerald-600" /> 08988989898
            </span>
            <span className="flex items-center gap-1 font-semibold text-slate-600">
              <svg className="w-3.5 h-3.5 text-pink-600 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@instagram</span>
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SPREAD: Interactive Booking / Agency Inquiry Form */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
              KONSULTASI JADWAL & AGENSI PARTNERSHIP
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
              Hubungi Neni Suryani
            </h3>
          </div>

          {/* Form Fields */}
          <div className="space-y-3 font-sans text-xs">
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                PILIH DESTINASI TUJUAN:
              </label>
              <select
                value={destination}
                onChange={(e) => {
                  sounds.playPop();
                  setDestination(e.target.value);
                }}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
              >
                <option value="Malang & Batu (Kunjungan Industri & Edukasi)">
                  🏭 Malang & Batu (Kunjungan Industri & Edukasi)
                </option>
                <option value="Yogyakarta & Merapi (Heritage & Lava Tour)">
                  🏛️ Yogyakarta & Merapi (Heritage & Lava Tour)
                </option>
                <option value="Semarang (Kota Lama & Lawang Sewu)">
                  ⚓ Semarang (Kota Lama & Wisata Sejarah)
                </option>
                <option value="Bali (Dewata Beach, Bedugul & Budaya)">
                  🌴 Bali (Dewata Beach, Bedugul & Budaya)
                </option>
                <option value="Custom Rute Wisata / Kunjungan Lainnya">
                  ✨ Custom Rute Wisata / Kunjungan Lainnya
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  KATEGORI KERJASAMA:
                </label>
                <select
                  value={collaborationType}
                  onChange={(e) => {
                    sounds.playPop();
                    setCollaborationType(e.target.value);
                  }}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="Sekolah / Kampus (Study Tour / Kunjungan Industri)">
                    Sekolah / Kampus
                  </option>
                  <option value="Travel Agency (Freelance / Contract TL)">
                    Travel Agency (Hire TL)
                  </option>
                  <option value="Perusahaan / Instansi (Corporate Gathering)">
                    Corporate Gathering
                  </option>
                  <option value="Private Family Tour">
                    Private Family Tour
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  ESTIMASI PESERTA / ARMADA:
                </label>
                <select
                  value={paxCount}
                  onChange={(e) => {
                    sounds.playPop();
                    setPaxCount(e.target.value);
                  }}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="1 Bus (35 - 50 Peserta)">1 Bus (35 - 50 Pax)</option>
                  <option value="2 - 4 Bus (80 - 180 Peserta)">2 - 4 Bus (Multi-Fleet)</option>
                  <option value="5+ Bus Mega Delegation (200+ Peserta)">5+ Bus (Mega Group)</option>
                  <option value="HiAce / Mobil Pribadi (6 - 15 Pax)">HiAce / Elf (Private)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                PERKIRAAN WAKTU KEBERANGKATAN:
              </label>
              <input
                type="text"
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                placeholder="Contoh: Bulan Depan / Jadwal Semester Genap"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
          {/* Main WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 active:scale-98 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>KIRIM KONSULTASI VIA WHATSAPP RESMI</span>
          </button>

          {/* Copy summary button */}
          <button
            onClick={handleCopy}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Ringkasan Disalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Ringkasan Rencana Perjalanan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
