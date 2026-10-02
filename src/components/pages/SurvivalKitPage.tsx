import React, { useState } from 'react';
import { HeartPulse, Languages, Shield, Compass, X, CheckCircle, Radio } from 'lucide-react';
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
    id: 'medical',
    name: 'Wilderness Medicine & Trauma Protocol',
    category: 'Safety & Emergency Response',
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    level: 'Certified Responder',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    imgUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
    summary: 'Keahlian penanganan darurat di alam bebas, hipotermia, trauma fisik, dan mabuk ketinggian (AMS).',
    anecdote: 'Saat mendaki basecamp Annapurna di ketinggian 4.130m, seorang peserta mengalami gejala AMS akut. Protokol oksigen darurat & koordinasi evakuasi medis dilakukan dalam waktu kurang dari 20 menit.',
    checklist: ['Garmin InReach Satellite SOS', 'Wilderness First Aid (WFA) Active', 'Portable O2 Saturation Monitoring', 'Triage Protocol in Remote Area']
  },
  {
    id: 'languages',
    name: 'Multilingual Bridge & Local Access',
    category: 'Cross-Cultural Logistics',
    icon: <Languages className="w-5 h-5 text-blue-600" />,
    level: 'C1 Professional',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    imgUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80',
    summary: 'Komunikasi lancar lintas budaya untuk mencairkan birokrasi imigrasi dan menghormati adat lokal.',
    anecdote: 'Mampu bernegosiasi langsung dengan kepala desa adat di Wamena dan pemandu lokal di Kyoto tanpa perantara, memastikan akses ke spot sakral yang jarang dibuka untuk umum.',
    checklist: ['Bahasa Indonesia (Native)', 'English (C1 Professional)', 'Japanese (Daily Conversational)', 'Mandarin (Basic Logistics)']
  },
  {
    id: 'tech',
    name: 'Satellite Telemetry & Drone Recon',
    category: 'Modern Expedition Tech',
    icon: <Radio className="w-5 h-5 text-orange-600" />,
    level: 'Advanced Field Tech',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    imgUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=500&auto=format&fit=crop&q=80',
    summary: 'Pemantauan rute real-time menggunakan citra satelit cuaca, drone pemantau longsor, dan radio VHF lapangan.',
    anecdote: 'Menggunakan drone rekognisi untuk memeriksa jalur es sebelum rombongan bus melintas di fjord Norwegia, mendeteksi lapisan es hitam (black ice) berbahaya sebelum kendaraan terjebak.',
    checklist: ['DJI Reconnaissance Drone', 'Offline 3D Topographic Maps', 'Dual-Band VHF Radio Walkie', 'Portable Solar Power Station']
  },
  {
    id: 'logistics',
    name: 'Airport VIP Clearance & Transit Agility',
    category: 'Aviation & Border Operations',
    icon: <Shield className="w-5 h-5 text-emerald-600" />,
    level: 'Zero-Delay Guarantee',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    imgUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=80',
    summary: 'Penguasaan alur imigrasi rombongan besar, klaim bagasi cepat, dan re-booking instan saat penerbangan terdampak.',
    anecdote: 'Membimbing 65 peserta BUMN melewati 3 kali transit penerbangan di Timur Tengah dalam kondisi badai pasir tanpa ada satu pun koper yang tertinggal atau tercecer.',
    checklist: ['Group Manifest Preparation', 'Priority Airline Re-Booking', 'Lost Luggage Escalation System', 'Duty-Free Border Regulations']
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
      {/* LEFT SPREAD: Modern Tech & Specialist Equipment */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                PAGE 3 • EXPEDITION TOOLKIT & SKILLS
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                The Specialist Tech-Kit
              </h3>
            </div>
            <Compass className="w-5 h-5 text-orange-600" />
          </div>

          <p className="text-xs font-sans text-slate-600 mb-4">
            Kombinasi lisensi resmi, protokol medis darurat, dan teknologi navigasi satelit modern. Klik salah satu modul
            untuk membaca logbook lapangan:
          </p>

          {/* Clickable Modern Gear Cards */}
          <div className="space-y-2.5">
            {gearSkills.map((gear) => (
              <div
                key={gear.id}
                onClick={() => openGear(gear)}
                className="group p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-500 hover:bg-orange-50/30 transition-all cursor-pointer shadow-xs flex items-center justify-between"
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
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>🎒 Operational Readiness: 365 Days</span>
          <span className="text-emerald-600 font-bold">● WFTGA Compliant</span>
        </div>
      </div>

      {/* RIGHT SPREAD: Detailed Field Note Inspector with Cropped Visual */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-card-elevated flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-orange-600 font-bold">
                FIELD MISSION LOGS & ANECDOTE
              </span>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                {selectedGear ? selectedGear.name : 'Inspeksi Perlengkapan'}
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
              {/* Cropped Photo Card of the Gear/Scenario */}
              <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                <img
                  src={selectedGear.imgUrl}
                  alt={selectedGear.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-white text-[11px] font-mono font-bold">
                    FIELD VERIFICATION: {selectedGear.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] text-slate-500 font-mono font-bold block mb-1 uppercase">
                  DESKRIPSI PROTOKOL
                </span>
                <p className="text-slate-800 leading-relaxed">{selectedGear.summary}</p>
              </div>

              <div className="bg-orange-50/80 p-3 rounded-xl border border-orange-200">
                <span className="text-[10px] text-orange-800 font-mono font-bold block mb-1 uppercase">
                  📌 CATATAN NYATA DARI LAPANGAN:
                </span>
                <p className="text-xs text-orange-950 leading-relaxed font-medium">
                  "{selectedGear.anecdote}"
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-mono font-bold block mb-1.5 uppercase">
                  STANDAR CHECKLIST KESIAPAN:
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
                Pilih Modul di Halaman Kiri
              </h4>
              <p className="text-xs font-sans text-slate-500 max-w-xs">
                Sentuh salah satu keahlian medis, satelit, atau operasional bandara untuk membuka logbook misi nyata.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <p className="text-xs font-sans text-slate-500 italic">
            “Kesiapan logistik yang sempurna adalah kunci kebebasan menikmati petualangan tanpa cemas.”
          </p>
        </div>
      </div>
    </div>
  );
};
