import React, { useState } from 'react';
import { Send, Check, Copy, PlaneTakeoff, Phone, MapPin } from 'lucide-react';
import { sounds } from '../../lib/sounds';

export const BoardingPassPage: React.FC = () => {
  const [destination, setDestination] = useState('Norwegia & Kutub Utara (Aurora)');
  const [groupType, setGroupType] = useState('Private Family Trip');
  const [paxCount, setPaxCount] = useState('6-12 Orang');
  const [travelMonth, setTravelMonth] = useState('Desember 2026');
  const [copied, setCopied] = useState(false);

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Halo Mas Ardian (Tour Leader Specialist)!\n\nSaya tertarik berkonsultasi mengenai rencana perjalanan:\n• Destinasi Impian: ${destination}\n• Tipe Rombongan: ${groupType}\n• Perkiraan Peserta: ${paxCount}\n• Rencana Bulan: ${travelMonth}\n\nApakah jadwal Mas Ardian masih tersedia untuk periode tersebut? Terima kasih!`
    );
  };

  const handleCopy = () => {
    sounds.playPop();
    const text = `Rencana Trip Bersama Tour Leader Ardian Pratama:\n- Destinasi: ${destination}\n- Tipe: ${groupType}\n- Peserta: ${paxCount}\n- Bulan: ${travelMonth}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppClick = () => {
    sounds.playStamp();
    window.open(`https://wa.me/6281234567890?text=${getWhatsAppMessage()}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
      {/* LEFT SPREAD: Authentic Perforated Boarding Pass */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#8c6b48]/30 pb-2 mb-3">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
                LEMBAR 5 • BOARDING PASS & RESERVASI
              </span>
              <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
                Tiket Penerbangan Ekspedisi
              </h3>
            </div>
            <PlaneTakeoff className="w-5 h-5 text-amber-700" />
          </div>

          {/* Boarding Pass Ticket UI with Perforation */}
          <div className="bg-[#fffdfa] border-2 border-[#b89f82] rounded-xl shadow-md overflow-hidden relative font-mono text-[#2b1810]">
            {/* Top Bar */}
            <div className="bg-[#2a1d15] text-[#fbbf24] px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-widest uppercase">EXPEDITION AIRLINES</span>
              <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">
                CLASS: VIP TOUR LEADER
              </span>
            </div>

            {/* Flight Route */}
            <div className="p-4 grid grid-cols-3 items-center text-center border-b border-[#ebdcca] bg-gradient-to-r from-amber-50/50 via-white to-amber-50/50">
              <div>
                <span className="text-2xl font-black font-journal text-[#3d2714]">JKT</span>
                <span className="text-[9px] text-[#785b3e] block uppercase">Base Departure</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-amber-700">✈───────</span>
                <span className="text-[8px] text-[#8c6b48] font-bold">FLIGHT TL-777</span>
              </div>
              <div>
                <span className="text-2xl font-black font-journal text-emerald-800">DEST</span>
                <span className="text-[9px] text-[#785b3e] block uppercase truncate max-w-[90px] mx-auto">
                  {destination.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Passenger & Schedule Data */}
            <div className="p-4 grid grid-cols-2 gap-3 text-[10px] bg-[#fbf8f2]">
              <div>
                <span className="text-[#8c6b48] block text-[8px] uppercase">LEAD EXPEDITIONIST</span>
                <strong className="text-xs text-[#2a170d]">ARDIAN PRATAMA</strong>
              </div>
              <div>
                <span className="text-[#8c6b48] block text-[8px] uppercase">STATUS RESERVASI</span>
                <span className="text-emerald-700 font-bold">TERBUKA UNTUK 2026/2027</span>
              </div>
              <div>
                <span className="text-[#8c6b48] block text-[8px] uppercase">TIPE ROMBONGAN</span>
                <span className="font-semibold text-[#452c1a]">{groupType}</span>
              </div>
              <div>
                <span className="text-[#8c6b48] block text-[8px] uppercase">ESTIMASI PAX</span>
                <span className="font-semibold text-[#452c1a]">{paxCount}</span>
              </div>
            </div>

            {/* Perforation Line & Barcode */}
            <div className="border-t-2 border-dashed border-[#bfa990] p-3 flex items-center justify-between bg-white">
              <div className="space-y-0.5">
                <span className="text-[8px] text-[#8c6b48] uppercase block">BARCODE VALIDASI BNSP</span>
                <div className="h-6 flex items-center gap-0.5">
                  {[4, 2, 6, 1, 3, 5, 2, 4, 1, 3, 7, 2, 4, 3, 6, 2, 5, 1, 4].map((w, i) => (
                    <div key={i} className="bg-slate-900 h-full" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[8px] text-[#8c6b48] uppercase block">SEAT</span>
                <strong className="text-base text-amber-900 font-bold">01A (VIP)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Links */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] flex flex-wrap items-center justify-between gap-2 text-[10px] font-typewriter text-[#61472e]">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-700" /> Jakarta / Bali / Siap Terbang Global
          </span>
          <span className="flex items-center gap-1 font-bold text-[#2a170d]">
            <Phone className="w-3.5 h-3.5 text-emerald-700" /> +62 812-3456-7890
          </span>
        </div>
      </div>

      {/* RIGHT SPREAD: Interactive Booking Configurator */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#8c6b48]/30 pb-2 mb-4">
            <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
              KONSULTASI & AMANKAN TANGGAL TUR
            </span>
            <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
              Rancang Petualangan Anda
            </h3>
          </div>

          {/* Form Fields */}
          <div className="space-y-3 font-typewriter text-xs text-[#3a2818]">
            <div>
              <label className="block text-[10px] font-bold text-[#785b3e] uppercase mb-1">
                PILIH DESTINASI IMPIAN:
              </label>
              <select
                value={destination}
                onChange={(e) => {
                  sounds.playPop();
                  setDestination(e.target.value);
                }}
                className="w-full p-2 bg-[#f4ece0] border border-[#cfbeaa] rounded-md font-typewriter text-xs text-[#2b1810] focus:outline-hidden focus:border-[#b45309]"
              >
                <option value="Norwegia & Kutub Utara (Aurora)">❄️ Norwegia & Kutub Utara (Aurora Chaser)</option>
                <option value="Komodo & Raja Ampat (Phinisi Luxury)">⛵ Komodo & Raja Ampat (Liveaboard Phinisi)</option>
                <option value="Kyoto & Swiss Alps (Heritage)">🌸 Kyoto & Swiss Alps (Heritage & Nature)</option>
                <option value="New Zealand Autumn Roadtrip">🚗 New Zealand Autumn Scenic Roadtrip</option>
                <option value="Himalaya Nepal Basecamp Trek">🏔️ Himalaya Nepal Basecamp Trekking</option>
                <option value="Custom Rute Khusus Keluarga / Korporat">✨ Custom Rute Khusus (Konsultasi Bebas)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-[#785b3e] uppercase mb-1">TIPE PERJALANAN:</label>
                <select
                  value={groupType}
                  onChange={(e) => {
                    sounds.playPop();
                    setGroupType(e.target.value);
                  }}
                  className="w-full p-2 bg-[#f4ece0] border border-[#cfbeaa] rounded-md font-typewriter text-xs text-[#2b1810] focus:outline-hidden focus:border-[#b45309]"
                >
                  <option value="Private Family Trip">Private Family Trip</option>
                  <option value="Corporate / BUMN Gathering">Corporate Gathering</option>
                  <option value="VIP Private Expedition">VIP Private Expedition</option>
                  <option value="Open Trip / Komunitas">Open Trip Komunitas</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#785b3e] uppercase mb-1">JUMLAH ROMBONGAN:</label>
                <select
                  value={paxCount}
                  onChange={(e) => {
                    sounds.playPop();
                    setPaxCount(e.target.value);
                  }}
                  className="w-full p-2 bg-[#f4ece0] border border-[#cfbeaa] rounded-md font-typewriter text-xs text-[#2b1810] focus:outline-hidden focus:border-[#b45309]"
                >
                  <option value="2-6 Orang (Intimate)">2 - 6 Orang (Intimate)</option>
                  <option value="7-15 Orang (Small Group)">7 - 15 Orang (Medium)</option>
                  <option value="16-35 Orang (Standard)">16 - 35 Orang (Standard)</option>
                  <option value="40-100+ Orang (Mega Corporate)">40 - 100+ Orang (Corporate)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#785b3e] uppercase mb-1">
                PERKIRAAN BULAN BERANGKAT:
              </label>
              <input
                type="text"
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                placeholder="Contoh: Desember 2026 / Musim Liburan"
                className="w-full p-2 bg-[#f4ece0] border border-[#cfbeaa] rounded-md font-typewriter text-xs text-[#2b1810] focus:outline-hidden focus:border-[#b45309]"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] space-y-2">
          {/* Main WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-3 px-4 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white font-typewriter font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>KIRIM RENCANA VIA WHATSAPP RESMI</span>
          </button>

          {/* Copy summary button */}
          <button
            onClick={handleCopy}
            className="w-full py-2 px-3 rounded-lg bg-[#ede1ce] hover:bg-[#e4d3bc] text-[#4d3725] font-typewriter text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800 font-bold">Ringkasan Disalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Ringkasan Rencana Trip</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
