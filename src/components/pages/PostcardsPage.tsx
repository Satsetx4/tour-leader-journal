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
    id: 'smk1-probolinggo',
    sender: 'SMK Negeri 1 Probolinggo',
    role: 'Panitia Kunjungan Industri (120+ Siswa)',
    trip: 'Kunjungan Industri Sekawan Media & OJK Malang',
    date: 'September 2026',
    origin: 'Probolinggo - Malang',
    guestImg: '/images/trip-1.webp',
    message:
      'Mbak Neni luar biasa sigap dan telaten mengawal 4 bus siswa kami! Pengaturan waktu kunjungan industri ke OJK dan Sekawan Media sangat tepat waktu. Anak-anak sangat senang karena Mbak Neni ramah dan interaktif saat memandu di bus.',
    rating: 5,
    highlight: 'Kunjungan Industri Sukses & 100% On-Time'
  },
  {
    id: 'smk2-probolinggo',
    sender: 'SMK Negeri 2 Probolinggo',
    role: 'Koordinator Pengembangan SDM',
    trip: 'Program Pengembangan SDM Malang - Batu',
    date: 'Agustus 2026',
    origin: 'Malang & Kota Batu',
    guestImg: '/images/trip-7.webp',
    message:
      'Kerjasama yang sangat profesional. Pembagian kamar hotel cepat sekali tanpa rombongan harus antre lama di lobi malam-malam. Komunikasi dengan pihak bus dan resto transit sangat rapi dan tertata.',
    rating: 5,
    highlight: 'Koordinasi Hotel & Armada Bus Sangat Rapi'
  },
  {
    id: 'kharisma-agency',
    sender: 'Kharisma Tour and Travel',
    role: 'Operational Travel Management',
    trip: 'Partner Tour Leader Reguler & Charter',
    date: 'Aktif 2025 - 2026',
    origin: 'Jawa Timur & Bali',
    guestImg: '/images/neni-4.webp',
    message:
      'Neni Suryani adalah Tour Leader yang sangat berdedikasi. Punya kemampuan public speaking yang ceria, tanggap menyelesaikan kendala mendadak di lapangan, dan selalu menjaga nama baik biro perjalanan kami.',
    rating: 5,
    highlight: 'Tour Leader Andalan Biro Perjalanan'
  },
  {
    id: 'family-bali',
    sender: 'Ibu Ratna Dewi & Keluarga',
    role: 'Klien Private Tour Keluarga (12 Pax)',
    trip: 'Private Holiday Bali & Danau Bedugul',
    date: 'Juli 2026',
    origin: 'Denpasar - Bedugul, Bali',
    guestImg: '/images/neni-6.webp',
    message:
      'Liburan keluarga ke Bali jadi sangat tenang dan berkesan. Anak-anak dan orang tua kami sangat nyaman karena Mbak Neni selalu memastikan jadwal makan dan istirahat pas. Foto-foto dokumentasi yang diambilkan juga bagus-bagus!',
    rating: 5,
    highlight: 'Private Client Friendly & Dokumentasi Bagus'
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
                PAGE 4 • APRESIASI & TESTIMONI KLIEN
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Ulasan Sekolah, Agency & Klien
              </h3>
            </div>
            <MessageSquareQuote className="w-5 h-5 text-orange-600" />
          </div>

          <p className="text-xs font-sans text-slate-600 mb-4">
            Testimoni nyata dari sekolah, pimpinan instansi, biro perjalanan wisata, dan keluarga yang pernah dipandu oleh
            Neni Suryani:
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
                      className="w-8 h-8 rounded-full object-cover border border-slate-300"
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
          <span>🌟 Tingkat Kepuasan Klien: 100% Bintang 5</span>
          <span className="text-orange-600 font-bold">Terverifikasi di Lapangan</span>
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
                {activeReview ? `Ulasan dari ${activeReview.sender}` : 'Pratinjau Testimoni'}
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
              {/* Header with photo and trip info */}
              <div className="flex items-center gap-3">
                <img
                  src={activeReview.guestImg}
                  alt={activeReview.sender}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-orange-500 shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">{activeReview.sender}</h4>
                  <p className="text-[10px] font-mono text-slate-500">
                    {activeReview.role} • {activeReview.date}
                  </p>
                  <span className="text-[10px] font-mono text-orange-600">📍 Rute: {activeReview.origin}</span>
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
                Pilih Ulasan Klien di Sebelah Kiri
              </h4>
              <p className="text-xs font-sans text-slate-500 max-w-xs">
                Sentuh salah satu kartu untuk membaca feedback pengalaman sekolah, travel agency, dan rombongan wisata
                yang telah dipandu.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <p className="text-xs font-sans text-slate-500 italic">
            “Kepuasan dan senyum bahagia rombongan adalah motivasi terbesar dalam setiap perjalanan.”
          </p>
        </div>
      </div>
    </div>
  );
};
