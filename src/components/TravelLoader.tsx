import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Hotel, Bus, Sparkles } from 'lucide-react';
import { sounds } from '../lib/sounds';

interface TravelLoaderProps {
  onComplete: () => void;
}

const STEPS = [
  {
    label: 'PLANNING TRAVEL & ITINERARY...',
    sub: 'Menyusun rute terbaik Yogyakarta, Semarang, Malang, Batu & Bali.',
    icon: <MapPin className="w-8 h-8 text-orange-500 animate-bounce" />,
    color: 'from-orange-500 to-amber-500',
    progress: 25
  },
  {
    label: 'BOOKING HOTEL & VENDOR CHECK...',
    sub: 'Koordinasi rooming list hotel, transit resto, dan perizinan destinasi.',
    icon: <Hotel className="w-8 h-8 text-blue-500 animate-pulse" />,
    color: 'from-blue-500 to-cyan-500',
    progress: 55
  },
  {
    label: 'BOARDING BUS & FLEET CHECK...',
    sub: 'Pemeriksaan armada Jetbus & Pandawa 87 siap kawal rombongan.',
    icon: <Bus className="w-8 h-8 text-emerald-500 animate-bounce" />,
    color: 'from-emerald-500 to-teal-500',
    progress: 85
  },
  {
    label: "LET'S GOOOOO! 🚀",
    sub: 'Neni Suryani Tour Leader siap memandu perjalanan seru Anda!',
    icon: <Sparkles className="w-10 h-10 text-yellow-400 animate-spin" />,
    color: 'from-orange-500 via-rose-500 to-yellow-400',
    progress: 100
  }
];

export const TravelLoader: React.FC<TravelLoaderProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStep(1);
      sounds.playPop();
    }, 900);

    const timer2 = setTimeout(() => {
      setCurrentStep(2);
      sounds.playSlide();
    }, 1800);

    const timer3 = setTimeout(() => {
      setCurrentStep(3);
      sounds.playStamp();
    }, 2800);

    const timer4 = setTimeout(() => {
      sounds.playPageTurn();
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const active = STEPS[currentStep];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-[#070a0f] flex flex-col items-center justify-center p-6 text-white overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Brand Logo */}
      <div className="absolute top-8 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
          NENI SURYANI • TOUR LEADER SPECIALIST
        </span>
      </div>

      {/* Central Step Card */}
      <div className="relative z-10 w-full max-w-md text-center flex flex-col items-center">
        {/* Animated Icon Container */}
        <div className="w-20 h-20 rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-[0_0_40px_rgba(249,115,22,0.2)] flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 1.2, opacity: 0, rotate: 15 }}
              transition={{ duration: 0.25 }}
            >
              {active.icon}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 mb-6"
          >
            <h2
              className={`text-2xl sm:text-3xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${active.color}`}
            >
              {active.label}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-xs mx-auto">
              {active.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Modern Progress Line */}
        <div className="w-full bg-slate-800/80 rounded-full h-2 p-0.5 overflow-hidden border border-slate-700/50 mb-3 shadow-inner">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${active.color}`}
            initial={{ width: '10%' }}
            animate={{ width: `${active.progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* Step Counter */}
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-500">
          <span>PROGRESS: {active.progress}%</span>
          <span>STEP {currentStep + 1} OF {STEPS.length}</span>
        </div>
      </div>

      {/* Skip Button Bottom */}
      <button
        onClick={() => {
          sounds.playPop();
          onComplete();
        }}
        className="absolute bottom-8 text-xs font-mono text-slate-500 hover:text-orange-400 transition-colors cursor-pointer underline underline-offset-4"
      >
        Lewati Animasi (Masuk ke Portofolio) →
      </button>
    </motion.div>
  );
};
