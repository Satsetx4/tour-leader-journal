import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, X } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface Postcard {
  id: string;
  sender: string;
  trip: string;
  date: string;
  origin: string;
  stampText: string;
  message: string;
  rating: number;
  highlight: string;
  bgTone: string;
}

const postcards: Postcard[] = [
  {
    id: 'nz-family',
    sender: 'Keluarga Besar Hartono',
    trip: 'New Zealand Autumn Explorer (14 Hari)',
    date: 'April 2025',
    origin: 'Queenstown, NZ',
    stampText: 'AIR MAIL • NZ POST 70c',
    message:
      'Mas Ardian bener-bener sabar luar biasa! Bawa rombongan 14 orang dari kakek 74 tahun sampai cucu 5 tahun bukan hal gampang, tapi Mas Ard bisa atur ritme jalan santai tanpa ada yang kecapekan. Oma sampe sekarang masih kangen masakan sup hangat yang Mas Ard rekomendasiin!',
    rating: 5,
    highlight: 'Keluarga Multi-Generasi & Ramah Kursi Roda',
    bgTone: '#fdfbf7'
  },
  {
    id: 'corporate-bajo',
    sender: 'Divisi Digital BUMN',
    trip: 'Labuan Bajo Corporate Retreat (48 Pax)',
    date: 'Oktober 2024',
    origin: 'Labuan Bajo, Flores',
    stampText: 'POS INDONESIA • KILAT KHUSUS',
    message:
      'Event gathering perusahaan terbaik yang pernah kami rasakan. Disiplin waktunya sangat ketat tapi penyampaiannya santai dan selalu bikin rombongan tertawa. Koordinasi liveaboard 3 kapal phinisi berjalan mulus tanpa ada komplain satupun!',
    rating: 5,
    highlight: 'Corporate Handling & High Discipline',
    bgTone: '#fcf8ec'
  },
  {
    id: 'arctic-aurora',
    sender: 'Andini & Sahabat',
    trip: 'Chasing Northern Lights (Tromsø)',
    date: 'Februari 2025',
    origin: 'Tromsø, Norway',
    stampText: 'POSTEN NORGE • POLAR EXPRESS',
    message:
      'Waktu badai salju datang dan jalanan ditutup, kami udah pasrah gabakal liat aurora. Tapi dedikasi Mas Ard mantau radar cuaca dan bawa kami ke spot rahasia bikin kami dapat dancing aurora terindah seumur hidup. Unforgettable!',
    rating: 5,
    highlight: 'Weather Instinct & Resilience',
    bgTone: '#f8fafc'
  },
  {
    id: 'japan-cherry',
    sender: 'dr. Haryo & Istri',
    trip: 'Exclusive Private Honeymoon Japan',
    date: 'April 2024',
    origin: 'Kyoto, Japan',
    stampText: 'JAPAN POST • 84 YEN SAKURA',
    message:
      'Privasi kami sangat terjaga, rekomendasi restoran Michelin lokalnya autentik bukan restoran turis biasa, dan foto-foto candid yang diambil Mas Ard hasilnya sekelas fotografer profesional. Very recommended!',
    rating: 5,
    highlight: 'Private Luxury & Concierge Service',
    bgTone: '#fff1f2'
  }
];

export const PostcardsPage: React.FC = () => {
  const [activePostcard, setActivePostcard] = useState<Postcard | null>(null);

  const openCard = (card: Postcard) => {
    sounds.playPop();
    setActivePostcard(card);
  };

  const closeCard = () => {
    sounds.playSlide();
    setActivePostcard(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full relative">
      {/* LEFT SPREAD: Pinned Postcard Collection */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#8c6b48]/30 pb-2 mb-3">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
                LEMBAR 4 • POSTCARDS FROM THE ROAD
              </span>
              <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
                Kartu Pos & Ulasan Wisatawan
              </h3>
            </div>
            <Mail className="w-5 h-5 text-[#8c6b48]" />
          </div>

          <p className="text-xs font-typewriter text-[#5c442d] mb-4">
            Catatan apresiasi dan kartu pos asli yang dikirimkan oleh peserta trip dari berbagai penjuru dunia. Klik
            kartu pos untuk membaca pesan lengkapnya:
          </p>

          {/* Grid of Postcards */}
          <div className="grid grid-cols-2 gap-3">
            {postcards.map((card, idx) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 1 : -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openCard(card)}
                className="p-3 rounded-lg border border-[#cbb396] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: card.bgTone }}
              >
                {/* Washi tape visual on corner */}
                <div className="absolute -top-1 -right-4 w-12 h-3.5 bg-[#fde68a]/70 rotate-45 border border-amber-300/40" />

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[8px] font-mono uppercase text-[#8c6b48] truncate max-w-[80px]">
                      {card.origin}
                    </span>
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-journal font-bold text-xs text-[#2b1810] line-clamp-1">{card.sender}</h4>
                  <p className="text-[9px] font-typewriter text-[#7c5e40] line-clamp-1">{card.trip}</p>
                </div>

                <div className="mt-2 pt-1 border-t border-dashed border-[#dfceb9]">
                  <span className="text-[8px] font-mono text-emerald-800 font-bold block truncate">
                    ✓ {card.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guest Happiness Metric */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] flex items-center justify-between text-[11px] font-typewriter text-[#785c40]">
          <span>🌟 Tingkat Kepuasan Tamu: 100% Bintang 5</span>
          <span className="text-amber-800 font-bold">160+ Testimoni Terverifikasi</span>
        </div>
      </div>

      {/* RIGHT SPREAD: Detailed Postcard Viewer */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#8c6b48]/30 pb-2 mb-4">
            <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
              POSTAL AIRMAIL INSPECTOR
            </span>
            <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
              {activePostcard ? `Surat dari ${activePostcard.sender}` : 'Pratinjau Kartu Pos'}
            </h3>
          </div>

          {activePostcard ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#fefcf8] border-2 border-[#b89f82] rounded-lg p-4 shadow-md relative"
            >
              {/* Close Button & Postage Stamp */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <button
                  onClick={closeCard}
                  className="p-1 rounded-full bg-[#f4ebe0] hover:bg-[#e2d5c3] text-[#5c442d] transition-colors cursor-pointer"
                  title="Tutup Kartu Pos"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="w-12 h-14 border-2 border-dashed border-[#b91c1c] p-1 flex flex-col items-center justify-center text-center bg-[#fff1f2] rotate-3 shadow-xs">
                  <span className="text-[6px] font-mono text-[#b91c1c] font-black uppercase tracking-tighter leading-tight">
                    {activePostcard.stampText}
                  </span>
                  <span className="text-xs">📮</span>
                </div>
              </div>

              {/* Sender Details */}
              <div className="mb-3 pr-16">
                <span className="text-[9px] font-typewriter text-[#8c6b48] uppercase block">PENGIRIM KARTU:</span>
                <strong className="font-journal text-sm text-[#2a170d]">{activePostcard.sender}</strong>
                <p className="text-[10px] font-typewriter text-[#61472e]">
                  {activePostcard.trip} • {activePostcard.date}
                </p>
              </div>

              {/* Hand-written Message */}
              <div className="bg-[#fdfaf3] p-3 rounded border border-[#e5d5be] my-3">
                <p className="font-handwriting text-base text-[#29170e] leading-relaxed">
                  "{activePostcard.message}"
                </p>
              </div>

              {/* Postmark stamp */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#785b3e] pt-1">
                <span>📍 Asal: {activePostcard.origin}</span>
                <span className="text-emerald-700 font-bold">Terverifikasi Wisatawan Asli</span>
              </div>
            </motion.div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-[#f7efe3] rounded-lg border-2 border-dashed border-[#cdba9f]">
              <div className="w-14 h-14 rounded-full bg-[#ede0ca] flex items-center justify-center text-2xl mb-3 shadow-inner">
                💌
              </div>
              <h4 className="font-journal font-bold text-sm text-[#3d2714] mb-1">Pilih Kartu Pos di Sebelah Kiri</h4>
              <p className="text-xs font-typewriter text-[#7c634a] max-w-xs">
                Sentuh salah satu kartu pos berangko untuk membaca cerita jujur dari peserta trip yang pernah didampingi.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] text-center">
          <p className="text-[11px] font-handwriting text-[#664b32]">
            “Ulasan terbaik bukan sekadar pujian pemandangan, tapi rasa terima kasih karena pulang dengan selamat.”
          </p>
        </div>
      </div>
    </div>
  );
};
