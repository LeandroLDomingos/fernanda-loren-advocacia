import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`transition-all duration-500 border rounded-full px-8 py-4 flex items-center justify-between w-full max-w-[1100px] shadow-lg ${
          isScrolled 
            ? "bg-bg-light/90 backdrop-blur-md border-primary/10" 
            : "bg-primary/20 backdrop-blur-sm border-white/10"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className={`font-serif text-2xl tracking-tight font-bold transition-colors duration-500 ${
              isScrolled ? "text-primary" : "text-bg-light"
            }`}>{BRAND.NAME}</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-accent font-sans font-bold mt-1">{BRAND.SUBTITLE}</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Início', 'Serviços', 'Sobre', 'Metodologia', 'Depoimentos'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500 relative group ${
                isScrolled ? "text-primary/70 hover:text-primary" : "text-bg-light/70 hover:text-bg-light"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <button className={`px-8 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-md ${
          isScrolled 
            ? "bg-primary text-bg-light hover:bg-accent hover:text-primary" 
            : "bg-bg-light text-primary hover:bg-accent hover:text-primary"
        }`}>
          Consultoria
        </button>
      </motion.div>
    </nav>
  );
}
