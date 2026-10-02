import React, { useState } from 'react';
import { Send, Check, Copy, PlaneTakeoff, Phone, MapPin } from 'lucide-react';
import { sounds } from '../../lib/sounds';

export const BoardingPassPage: React.FC = () => {
  const [destination, setDestination] = useState('Norwegia & Kutub Utara (Aurora Chaser)');
  const [groupType, setGroupType] = useState('Private Family Trip');
  const [paxCount, setPaxCount] = useState('6 - 12 Orang');
  const [travelMonth, setTravelMonth] = useState('Desember 2026');
  const [copied, setCopied] = useState(false);

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Halo Mas Ardian (Lead Tour Specialist)!\n\nSaya ingin berkonsultasi mengenai rencana perjalanan:\n• Destinasi Impian: ${destination}\n• Tipe Rombongan: ${groupType}\n• Estimasi Peserta: ${paxCount}\n• Periode: ${travelMonth}\n\nApakah jadwal Mas Ardian masih available untuk periode ini? Terima kasih!`
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
      {/* LEFT SPREAD: Modern Apple-Wallet Style Boarding Pass */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                PAGE 5 • VIP BOARDING PASS & RESERVATION
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Digital Boarding Pass
              </h3>
            </div>
            <PlaneTakeoff className="w-5 h-5 text-orange-600" />
          </div>

          {/* Modern Boarding Pass Card */}
          <div className="bg-slate-950 text-white rounded-2xl shadow-xl overflow-hidden relative border border-slate-800">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-2.5 flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-widest uppercase">EXPEDITION AIRLINES</span>
              <span className="text-[10px] font-mono bg-black/40 px-2.5 py-0.5 rounded-full text-orange-200 font-bold">
                FIRST CLASS LEAD
              </span>
            </div>

            {/* Flight Route Visual */}
            <div className="p-4 grid grid-cols-3 items-center text-center border-b border-slate-800 bg-slate-900/60">
              <div>
                <span className="text-2xl font-black font-display text-white">JKT</span>
                <span className="text-[9px] font-mono text-slate-400 block uppercase">Base Departure</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-orange-400">✈────────</span>
                <span className="text-[9px] font-mono text-orange-400 font-bold">FLIGHT TL-777</span>
              </div>
              <div>
                <span className="text-2xl font-black font-display text-emerald-400">DEST</span>
                <span className="text-[9px] font-mono text-slate-400 block uppercase truncate max-w-[85px] mx-auto">
                  {destination.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Passenger & Flight Details */}
            <div className="p-4 grid grid-cols-2 gap-3 text-[10px] font-mono bg-slate-950">
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">LEAD EXPEDITIONIST</span>
                <strong className="text-xs text-white font-display">ARDIAN PRATAMA</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">BOOKING AVAILABILITY</span>
                <span className="text-emerald-400 font-bold">2026/2027 ACTIVE</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">TRIP CATEGORY</span>
                <span className="font-semibold text-slate-300">{groupType}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[8px] uppercase">GROUP SIZE</span>
                <span className="font-semibold text-slate-300">{paxCount}</span>
              </div>
            </div>

            {/* Barcode & Seat */}
            <div className="border-t border-dashed border-slate-800 p-3 flex items-center justify-between bg-slate-900/40">
              <div className="space-y-1">
                <span className="text-[8px] font-mono text-slate-500 uppercase block">BNSP CERTIFIED BARCODE</span>
                <div className="h-6 flex items-center gap-0.5">
                  {[4, 2, 6, 1, 3, 5, 2, 4, 1, 3, 7, 2, 4, 3, 6, 2, 5, 1, 4, 3, 5].map((w, i) => (
                    <div key={i} className="bg-white/80 h-full" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[8px] font-mono text-slate-400 uppercase block">SEAT</span>
                <strong className="text-lg font-display text-orange-400 font-bold">01A (VIP)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Links */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-600">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-600" /> Base: Jakarta & Bali • Siap Terbang Global
          </span>
          <span className="flex items-center gap-1.5 font-bold text-slate-900">
            <Phone className="w-3.5 h-3.5 text-emerald-600" /> +62 812-3456-7890
          </span>
        </div>
      </div>

      {/* RIGHT SPREAD: Interactive Modern Booking Configurator */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
              KONSULTASI & AMANKAN JADWAL TUR
            </span>
            <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
              Rancang Rencana Perjalanan
            </h3>
          </div>

          {/* Form Fields */}
          <div className="space-y-3 font-sans text-xs">
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                PILIH DESTINASI IMPIAN:
              </label>
              <select
                value={destination}
                onChange={(e) => {
                  sounds.playPop();
                  setDestination(e.target.value);
                }}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
              >
                <option value="Norwegia & Kutub Utara (Aurora Chaser)">❄️ Norwegia & Kutub Utara (Aurora Chaser)</option>
                <option value="Komodo & Raja Ampat (Phinisi Luxury)">⛵ Komodo & Raja Ampat (Liveaboard Phinisi)</option>
                <option value="Kyoto & Swiss Alps (Heritage)">🌸 Kyoto & Swiss Alps (Heritage & Alps)</option>
                <option value="New Zealand Autumn Roadtrip">🚗 New Zealand Autumn Scenic Roadtrip</option>
                <option value="Himalaya Nepal Basecamp Trek">🏔️ Himalaya Nepal Basecamp Trekking</option>
                <option value="Custom Rute Khusus Keluarga / Korporat">✨ Custom Rute Khusus (Konsultasi Bebas)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  TIPE PERJALANAN:
                </label>
                <select
                  value={groupType}
                  onChange={(e) => {
                    sounds.playPop();
                    setGroupType(e.target.value);
                  }}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="Private Family Trip">Private Family Trip</option>
                  <option value="Corporate / BUMN Gathering">Corporate Gathering</option>
                  <option value="VIP Private Expedition">VIP Private Expedition</option>
                  <option value="Open Trip / Komunitas">Open Trip Komunitas</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                  JUMLAH PESERTA:
                </label>
                <select
                  value={paxCount}
                  onChange={(e) => {
                    sounds.playPop();
                    setPaxCount(e.target.value);
                  }}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs text-slate-900 focus:outline-hidden focus:border-orange-500"
                >
                  <option value="2-6 Orang (Intimate)">2 - 6 Orang (Intimate)</option>
                  <option value="6-12 Orang">6 - 12 Orang (Medium)</option>
                  <option value="15-35 Orang (Standard)">15 - 35 Orang (Standard)</option>
                  <option value="40-100+ Orang (Mega Corporate)">40 - 100+ Orang (Corporate)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase mb-1">
                PERKIRAAN BULAN BERANGKAT:
              </label>
              <input
                type="text"
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                placeholder="Contoh: Desember 2026 / Liburan Sekolah"
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
            <span>KIRIM RENCANA VIA WHATSAPP RESMI</span>
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
                <span>Salin Ringkasan Rencana Trip</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
