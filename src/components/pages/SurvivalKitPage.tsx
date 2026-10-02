import React, { useState } from 'react';
import { HeartPulse, Compass, X, CheckCircle, Bus, Hotel, Users, Mic } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface GearSkill {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  level: string;
  badgeColor: string;
  imgUrl: string;
  summary: string;
  anecdote: string;
  checklist: string[];
}

const gearSkills: GearSkill[] = [
  {
    id: 'group',
    name: 'Group Coordination & Fleet Control',
    category: 'Manajemen Rombongan Massal',
    icon: <Users className="w-5 h-5 text-orange-600" />,
    level: '100+ Pax Multi-Bus',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    imgUrl: '/images/trip-1.webp',
    summary: 'Pengendalian rombongan sekolah dan korporat skala besar, pengelompokan peserta, dan koordinasi antar kru bus.',
    anecdote: 'Membimbing rombongan 4 bus SMK Negeri 1 Probolinggo untuk kunjungan industri ke Malang; memastikan 100% siswa tertib, absen presisi di setiap titik transit, dan zero peserta tertinggal.',
    checklist: ['Sistem Presensi Barcode/Checklist', 'Koordinasi Walkie-Talkie Antar Kru', 'Pemberian Identitas Badge Peserta', 'Protokol Titik Kumpul Aman']
  },
  {
    id: 'hotel',
    name: 'Hotel & Rooming List Coordination',
    category: 'Akomodasi & Hospitality',
    icon: <Hotel className="w-5 h-5 text-blue-600" />,
    level: 'Fast Check-In Expert',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    imgUrl: '/images/neni-2.webp',
    summary: 'Penyusunan rooming list, distribusi kunci kamar kilat rombongan besar, dan koordinasi jam sarapan/dinner hotel.',
    anecdote: 'Sebelum bus tiba di hotel transit Malang pada malam hari, seluruh kunci kamar dan pembagian kartu lift telah siap di amplop per-kamar; peserta bisa langsung istirahat dalam waktu kurang dari 10 menit.',
    checklist: ['Pre-Checkin & Room Key Packaging', 'Manajemen Permintaan Kamar Guru/VIP', 'Koordinasi Buffet Breakfast Terjadwal', 'Inspeksi Fasilitas & Keamanan Kamar']
  },
  {
    id: 'vendor',
    name: 'Vendor & Armada Bus Coordination',
    category: 'Logistik & Transportasi',
    icon: <Bus className="w-5 h-5 text-emerald-600" />,
    level: 'Top Fleet Synergy',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    imgUrl: '/images/neni-5.webp',
    summary: 'Sinergi langsung dengan PO Bus Pariwisata eksekutif (Jetbus 5, Pandawa 87), sopir profesional, rumah makan, dan tiket destinasi.',
    anecdote: 'Menjaga komunikasi aktif dengan kapten sopir bus untuk memilih rute alternatif saat jam padat tol Jawa Timur, memastikan rombongan tiba di destinasi tepat sesuai jadwal rundown industri.',
    checklist: ['Briefing Driver & Kru Bus Sebelum Berangkat', 'Reservasi Rumah Makan Transit Siap Saji', 'Ticketing Terpadu Tanpa Antre Loket', 'Pemeriksaan Fasilitas AC & Audio Bus']
  },
  {
    id: 'emergency',
    name: 'Emergency Handling & Handling Complain',
    category: 'Mitigasi & Resolusi Lapangan',
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    level: 'Responsive & Solutive',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    imgUrl: '/images/neni-6.webp',
    summary: 'Penanganan keluhan secara tenang dan santun, tanggap pertolongan pertama (P3K) mabuk perjalanan, asma, atau cedera ringan.',
    anecdote: 'Saat seorang siswi mengalami mual hebat dan demam saat melintasi jalur pegunungan Batu, tim medis bus langsung memberikan obat lambung, minyak aromaterapi, dan tempat istirahat khusus hingga kondisi pulih stabil.',
    checklist: ['Kotak P3K Lengkap & Obat Darurat', 'Pendekatan Komunikasi Empatik & Tenang', 'Kontak Darurat Rumah Sakit Terdekat', 'Resolusi Kendala Kamar / Konsumsi Kilat']
  },
  {
    id: 'publicspeaking',
    name: 'Public Speaking, Ice Breaking & Documentation',
    category: 'Pemandu & Dokumentasi',
    icon: <Mic className="w-5 h-5 text-purple-600" />,
    level: 'Engaging & Cheerful',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    imgUrl: '/images/trip-2.webp',
    summary: 'Menghidupkan suasana bus selama berjam-jam dengan kuis seru, edukasi rute, serta dokumentasi foto/video estetik.',
    anecdote: 'Mengubah perjalanan panjang antarkota menjadi sesi trivia interaktif berhadiah yang disambut antusias oleh seluruh siswa, sekaligus mengambil foto-foto candid rombongan yang siap dibagikan ke media sosial sekolah.',
    checklist: ['Ice Breaking Tanpa Canggung di Mic Bus', 'Penjelasan Edukatif Sejarah Objek Wisata', 'Dokumentasi Foto & Video Resolusi Tinggi', 'Pemberian Kenang-kenangan & Yel-Yel Seru']
  }
];

export const SurvivalKitPage: React.FC = () => {
  const [selectedGear, setSelectedGear] = useState<GearSkill | null>(null);

  const openGear = (gear: GearSkill) => {
    sounds.playPop();
    setSelectedGear(gear);
  };

  const closeGear = () => {
    sounds.playSlide();
    setSelectedGear(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full relative">
      {/* LEFT SPREAD: Neni's Core Professional Skills */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                PAGE 3 • KOMPETENSI TOUR LEADER
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                Keahlian & Layanan Profesional
              </h3>
            </div>
            <Compass className="w-5 h-5 text-orange-600" />
          </div>

          <p className="text-xs font-sans text-slate-600 mb-3">
            Kompetensi resmi Neni Suryani yang teruji mengawal rombongan study tour, kunjungan industri, dan liburan
            keluarga. Klik untuk melihat detail penerapan lapangan:
          </p>

          {/* Clickable Modern Gear Cards */}
          <div className="space-y-2">
            {gearSkills.map((gear) => (
              <div
                key={gear.id}
                onClick={() => openGear(gear)}
                className="group p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-500 hover:bg-orange-50/30 transition-all cursor-pointer shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs group-hover:scale-105 transition-transform">
                    {gear.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-display text-slate-900 group-hover:text-orange-600 transition-colors">
                      {gear.name}
                    </h4>
                    <span className="text-[10px] font-sans text-slate-500">{gear.category}</span>
                  </div>
                </div>

                <span
                  className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${gear.badgeColor}`}
                >
                  {gear.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>💼 Afiliasi: Kharisma Tour & Travel</span>
          <span className="text-emerald-600 font-bold">● Siap Bertugas Domestik</span>
        </div>
      </div>

      {/* RIGHT SPREAD: Detailed Field Note Inspector with Cropped Visual */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                BUKTI PENERAPAN LAPANGAN
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                {selectedGear ? selectedGear.name : 'Inspeksi Keahlian'}
              </h3>
            </div>
            {selectedGear && (
              <button
                onClick={closeGear}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                title="Tutup Detail"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {selectedGear ? (
            <div className="space-y-3 font-sans text-xs">
              {/* Cropped Photo Card of Neni in Action */}
              <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                <img
                  src={selectedGear.imgUrl}
                  alt={selectedGear.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-white text-[11px] font-mono font-bold">
                    DOKUMENTASI ASLI: {selectedGear.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 font-mono font-bold block mb-1 uppercase">
                  DESKRIPSI TANGGUNG JAWAB
                </span>
                <p className="text-slate-800 leading-relaxed">{selectedGear.summary}</p>
              </div>

              <div className="bg-orange-50/80 p-3 rounded-xl border border-orange-200">
                <span className="text-[10px] text-orange-800 font-mono font-bold block mb-1 uppercase">
                  📌 PENGALAMAN NYATA DI LAPANGAN:
                </span>
                <p className="text-xs text-orange-950 leading-relaxed font-medium">
                  "{selectedGear.anecdote}"
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-mono font-bold block mb-1.5 uppercase">
                  STANDAR CHECKLIST KINERJA:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {selectedGear.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-100 text-[10px]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-slate-800 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl mb-3 shadow-xs">
                🧭
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                Pilih Keahlian di Halaman Kiri
              </h4>
              <p className="text-xs font-sans text-slate-500 max-w-xs">
                Sentuh salah satu kompetensi untuk melihat bagaimana Neni Suryani mengelola rombongan, hotel, bus, dan
                situasi darurat di lapangan.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
          <p className="text-xs font-sans text-slate-500 italic">
            “Kenyamanan peserta dan kepercayaan pihak sekolah/travel adalah kehormatan bagi saya.”
          </p>
        </div>
      </div>
    </div>
  );
};
