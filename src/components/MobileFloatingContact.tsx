import React from 'react';
import { Mail } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface MobileFloatingContactProps {
  onOpenContact: () => void;
  currentLang: Language;
}

export const MobileFloatingContact: React.FC<MobileFloatingContactProps> = ({
  onOpenContact,
  currentLang
}) => {
  const getLabel = () => {
    if (currentLang === 'de') return 'Direkt Kontakt aufnehmen';
    if (currentLang === 'fa') return 'تماس مستقیم';
    return 'Contact SchirZan';
  };

  return (
    <button
      onClick={onOpenContact}
      className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-40 lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-xl hover:shadow-2xl border border-stone-700/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {/* Dezent pulsierender Amber-Ring für Aufmerksamkeit */}
      <span className="absolute -inset-1 rounded-full bg-amber-500/25 animate-ping opacity-50 pointer-events-none" />

      {/* Kontakt-Icon */}
      <Mail className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors shrink-0" />
    </button>
  );
};
