import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, X, CheckCircle2 } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface ReviewStory {
  id: string;
  sender: string;
  role: string;
  trip: string;
  date: string;
  origin: string;
  guestImg: string;
  message: string;
  rating: number;
  highlight: string;
}

const reviews: ReviewStory[] = [
  {
    id: 'nz-family',
    sender: 'Keluarga Besar Hartono',
    role: 'Private Family Trip (14 Pax)',
    trip: 'New Zealand Autumn Scenic Roadtrip',
    date: 'April 2025',
    origin: 'Queenstown, New Zealand',
    guestImg: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&auto=format&fit=crop&q=80',
    message:
      'Mas Ardian luar biasa sabar! Bawa 14 orang dari kakek 74 tahun sampai anak 5 tahun bukan hal mudah, tapi ritme jalannya sangat santai tanpa ada yang merasa kelelahan. Rekomendasi kuliner lokalnya jempolan!',
    rating: 5,
    highlight: 'Multi-Generasi & Ramah Kursi Roda'
  },
  {
    id: 'corporate-bajo',
    sender: 'Divisi Digital BUMN',
    role: 'Corporate Retreat (48 Pax)',
    trip: 'Labuan Bajo 3-Phinisi Liveaboard',
    date: 'Oktober 2024',
    origin: 'Labuan Bajo, Flores',
    guestImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80',
    message:
      'Event gathering perusahaan paling berkesan. Manajemen waktunya sangat presisi tanpa terkesan kaku, koordinasi 3 kapal phinisi berjalan mulus, dan sesi ice-breaking malam harinya bikin seluruh tim makin kompak.',
    rating: 5,
    highlight: 'High Discipline & Corporate Harmony'
  },
  {
    id: 'arctic-aurora',
    sender: 'Andini & Sahabat',
    role: 'Small Group Expedition (6 Pax)',
    trip: 'Chasing Arctic Aurora Tromsø',
    date: 'Februari 2025',
    origin: 'Tromsø, Norwegia',
    guestImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    message:
      'Waktu badai salju datang dan jalan ditutup, kami kira impian liat aurora bakal pupus. Naluri cuaca Mas Ardian yang tajam dan relasi lokalnya berhasil bawa kita ke spot tersembunyi hingga dapat aurora spektakuler!',
    rating: 5,
    highlight: 'Weather Resilience & Arctic Survival'
  },
  {
    id: 'japan-cherry',
    sender: 'dr. Haryo & Istri',
    role: 'VIP Honeymoon Couple',
    trip: 'Exclusive Private Luxury Japan',
    date: 'April 2024',
    origin: 'Kyoto, Japan',
    guestImg: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    message:
      'Privasi kami sangat terlindungi. Akses ke restoran kaiseki tersembunyi dan sudut-sudut foto candid yang diambil Mas Ard hasilnya sekelas jepretan fotografer majalah profesional. Pengalaman bintang lima!',
    rating: 5,
    highlight: 'Private Luxury & Concierge Care'
  }
];

export const PostcardsPage: React.FC = () => {
  const [activeReview, setActiveReview] = useState<ReviewStory | null>(null);

  const openCard = (card: ReviewStory) => {
    sounds.playPop();
    setActiveReview(card);
  };

  const closeCard = () => {
    sounds.playSlide();
    setActiveReview(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full relative">
      {/* LEFT SPREAD: Modern Guest Review Cards */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                PAGE 4 • TRAVELERS' VOICES
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Ulasan & Cerita Peserta Trip
              </h3>
            </div>
            <MessageSquareQuote className="w-5 h-5 text-orange-600" />
          </div>

          <p className="text-xs font-sans text-slate-600 mb-4">
            Testimoni jujur dan dokumentasi dari para peserta trip yang telah menjelajahi dunia bersama Ardian Pratama:
          </p>

          {/* Grid of Modern Review Cards */}
          <div className="grid grid-cols-2 gap-3">
            {reviews.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openCard(card)}
                className="p-3 rounded-xl border border-slate-200/90 bg-slate-50 hover:bg-orange-50/30 hover:border-orange-500 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <img
                      src={card.guestImg}
                      alt={card.sender}
                      className="w-7 h-7 rounded-full object-cover border border-slate-300"
                    />
                    <div className="flex">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-xs text-slate-900 line-clamp-1">{card.sender}</h4>
                  <p className="text-[10px] font-sans text-slate-500 line-clamp-1">{card.trip}</p>
                </div>

                <div className="mt-2 pt-1.5 border-t border-slate-200/70">
                  <span className="text-[9px] font-mono text-emerald-700 font-bold block truncate">
                    ✓ {card.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metric Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>🌟 Verified Traveler Satisfaction: 100% 5-Star</span>
          <span className="text-orange-600 font-bold">160+ Testimonials</span>
        </div>
      </div>

      {/* RIGHT SPREAD: Detailed Review Story Inspector */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                EXPERIENCE DOSSIER INSPECTOR
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                {activeReview ? `Kisah dari ${activeReview.sender}` : 'Pratinjau Ulasan'}
              </h3>
            </div>
            {activeReview && (
              <button
                onClick={closeCard}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                title="Tutup Kartu"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {activeReview ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative space-y-3"
            >
              {/* Header with guest photo and location */}
              <div className="flex items-center gap-3">
                <img
                  src={activeReview.guestImg}
                  alt={activeReview.sender}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-orange-500 shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">{activeReview.sender}</h4>
                  <p className="text-[10px] font-mono text-slate-500">
                    {activeReview.role} • {activeReview.date}
                  </p>
                  <span className="text-[10px] font-mono text-orange-600">📍 {activeReview.origin}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-xs font-sans text-slate-800 leading-relaxed italic">
                  "{activeReview.message}"
                </p>
              </div>

              {/* Verified badge */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Terverifikasi Rombongan Asli
                </span>
                <span>Trip: {activeReview.trip}</span>
              </div>
            </motion.div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl mb-3 shadow-xs">
                💬
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                Pilih Cerita Tamu di Sebelah Kiri
              </h4>
              <p className="text-xs font-sans text-slate-500 max-w-xs">
                Sentuh salah satu kartu ulasan untuk membaca feedback lengkap tentang kenyamanan dan standar keamanan di
                lapangan.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <p className="text-xs font-sans text-slate-500 italic">
            “Kebahagiaan wisatawan adalah tolak ukur keberhasilan sebuah ekspedisi.”
          </p>
        </div>
      </div>
    </div>
  );
};
