import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-950 border border-stone-200/90 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      aria-label="Nach oben scrollen"
      title="Nach oben"
    >
      <ArrowUp className="w-5 h-5 text-amber-800" />
    </button>
  );
};
