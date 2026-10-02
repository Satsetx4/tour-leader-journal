import React, { useState } from 'react';
import { HeartPulse, Languages, Shield, Compass, Sparkles, X, CheckCircle } from 'lucide-react';
import { sounds } from '../../lib/sounds';

interface GearSkill {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  level: string;
  badgeColor: string;
  summary: string;
  anecdote: string;
  checklist: string[];
}

const gearSkills: GearSkill[] = [
  {
    id: 'medical',
    name: 'Wilderness Medicine & Trauma Protocol',
    category: 'Safety & Emergency',
    icon: <HeartPulse className="w-5 h-5 text-red-600" />,
    level: 'Certified Responder',
    badgeColor: 'bg-red-100 text-red-800 border-red-300',
    summary: 'Keahlian penanganan darurat di alam bebas, hipotermia, trauma fisik, dan mabuk ketinggian (AMS).',
    anecdote: 'Saat mendaki basecamp Annapurna di ketinggian 4.130m, seorang peserta mengalami gejala AMS akut. Protokol oksigen darurat & koordinasi evakuasi medis dilakukan dalam waktu kurang dari 20 menit.',
    checklist: ['Garmin InReach SOS Dispatch', 'Wilderness First Aid (WFA) Active', 'Portable Oxygen Saturation Monitoring', 'Triage Protocol in Remote Area']
  },
  {
    id: 'languages',
    name: 'Multilingual & Cultural Bridge',
    category: 'Communication',
    icon: <Languages className="w-5 h-5 text-blue-600" />,
    level: 'Polyglot Practitioner',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    summary: 'Komunikasi lancar lintas budaya untuk mencairkan birokrasi imigrasi dan menghormati adat lokal.',
    anecdote: 'Mampu bernegosiasi langsung dengan kepala desa adat di Wamena dan pemandu lokal di Kyoto tanpa perantara, memastikan akses ke spot sakral yang jarang dibuka untuk umum.',
    checklist: ['Bahasa Indonesia (Native)', 'English (C1 Professional)', 'Japanese (Daily Conversational)', 'Mandarin (Basic Logistics)']
  },
  {
    id: 'logistics',
    name: 'Airport Fast-Track & Border Crossing',
    category: 'Operations',
    icon: <Shield className="w-5 h-5 text-amber-600" />,
    level: 'Zero-Delay Track Record',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    summary: 'Penguasaan alur imigrasi rombongan besar, klaim bagasi, dan koordinasi transit ketat.',
    anecdote: 'Membimbing 65 peserta BUMN melewati 3 kali transit penerbangan di Timur Tengah dalam kondisi badai pasir tanpa ada satu pun koper yang tertinggal atau tercecer.',
    checklist: ['Group Manifest Preparation', 'Priority Airline Re-Booking', 'Lost Luggage Escalation System', 'Duty-Free Border Regulations']
  },
  {
    id: 'crowd',
    name: 'Crowd Empathy & Family Dynamics',
    category: 'Human Connection',
    icon: <Sparkles className="w-5 h-5 text-purple-600" />,
    level: 'Master Moodmaker',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    summary: 'Mengharmoniskan grup multi-generasi dari kakek-nenek 70+ tahun hingga anak-anak balita.',
    anecdote: 'Mengubah perjalanan bus 8 jam yang membosankan di Norwegia menjadi sesi trivia interaktif berhadiah cokelat lokal yang membuat seluruh rombongan akrab seperti keluarga.',
    checklist: ['Pacing Khusus Lansia & Kursi Roda', 'Menu Makanan Ramah Halal / Alergi', 'Ice Breaking Tanpa Canggung', 'Peka Gejala Kelelahan Peserta']
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
      {/* LEFT SPREAD: Backpack Anatomy & Skill Items */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#8c6b48]/30 pb-2 mb-4">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
                LEMBAR 3 • SURVIVAL & EXPERTISE
              </span>
              <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
                The Specialist Backpack
              </h3>
            </div>
            <Compass className="w-5 h-5 text-[#8c6b48]" />
          </div>

          <p className="text-xs font-typewriter text-[#5c442d] mb-4">
            Isi ransel seorang Tour Leader bukan cuma pakaian ganti, tapi seperangkat kesiapan mental, lisensi, dan
            protokol mitigasi krisis lapangan. Klik perlengkapan untuk melihat catatan misi:
          </p>

          {/* Clickable Gear Cards */}
          <div className="space-y-2.5">
            {gearSkills.map((gear) => (
              <div
                key={gear.id}
                onClick={() => openGear(gear)}
                className="group p-3 rounded-lg bg-[#f4ebe0] border border-[#dfceb9] hover:border-[#c59b27] hover:bg-[#ede0ca] transition-all cursor-pointer shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white border border-[#d8c5aa] shadow-xs group-hover:scale-105 transition-transform">
                    {gear.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-journal text-[#2b1810] group-hover:text-amber-900">
                      {gear.name}
                    </h4>
                    <span className="text-[10px] font-typewriter text-[#7c5e40]">{gear.category}</span>
                  </div>
                </div>

                <span
                  className={`text-[9px] font-typewriter font-bold px-2 py-0.5 rounded border ${gear.badgeColor}`}
                >
                  {gear.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Explorer Tag */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] flex items-center justify-between text-[11px] font-typewriter text-[#785c40]">
          <span>🎒 Kapasitas Ransel: Siap 365 Hari</span>
          <span className="text-emerald-800 font-bold">● Standar Internasional</span>
        </div>
      </div>

      {/* RIGHT SPREAD: Detailed Field Note Inspector */}
      <div className="relative bg-[#fcf8ed] border border-[#d8c8b0] rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-[#8c6b48]/30 pb-2 mb-4">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-typewriter text-[#8c6b48] font-bold">
                FIELD MISSION LOGS & ANECDOTE
              </span>
              <h3 className="text-lg font-bold font-journal tracking-wider text-[#3d2714]">
                {selectedGear ? selectedGear.name : 'Inspeksi Perlengkapan'}
              </h3>
            </div>
            {selectedGear && (
              <button
                onClick={closeGear}
                className="p-1 rounded-full bg-[#f4ebe0] hover:bg-[#e2d5c3] text-[#5c442d] transition-colors cursor-pointer"
                title="Tutup Detail"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {selectedGear ? (
            <div className="space-y-4 font-typewriter text-xs">
              <div className="bg-[#f5ecdd] p-3 rounded-lg border border-[#d8c5aa]">
                <span className="text-[10px] text-[#8c6b48] font-bold block mb-1 uppercase">Deskripsi Protokol</span>
                <p className="text-[#3d2714] leading-relaxed">{selectedGear.summary}</p>
              </div>

              <div className="bg-[#fef9c3] p-3 rounded-lg border border-amber-300 shadow-xs relative">
                <span className="text-[10px] text-amber-900 font-bold block mb-1 uppercase flex items-center gap-1">
                  📌 CATATAN NYATA DARI LAPANGAN:
                </span>
                <p className="font-handwriting text-sm text-[#451a03] leading-snug italic">
                  "{selectedGear.anecdote}"
                </p>
              </div>

              <div>
                <span className="text-[10px] text-[#8c6b48] font-bold block mb-2 uppercase">
                  STANDAR CHECKLIST KESIAPAN:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedGear.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 p-2 bg-[#f4ebd9] rounded border border-[#dfd0bd] text-[10px]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="text-[#3b2817] font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-[#f7efe3] rounded-lg border-2 border-dashed border-[#cdba9f]">
              <div className="w-14 h-14 rounded-full bg-[#ede0ca] flex items-center justify-center text-2xl mb-3 shadow-inner">
                🧭
              </div>
              <h4 className="font-journal font-bold text-sm text-[#3d2714] mb-1">Pilih Perlengkapan di Halaman Kiri</h4>
              <p className="text-xs font-typewriter text-[#7c634a] max-w-xs">
                Klik salah satu keahlian atau modul ransel untuk membaca logbook misi nyata dan standar mitigasi di
                lapangan.
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-[#d8c8b0] text-center">
          <p className="text-[11px] font-handwriting text-[#664b32]">
            “Alat terbaik adalah kepala yang dingin dan persiapan yang matang sebelum berangkat.”
          </p>
        </div>
      </div>
    </div>
  );
};
