import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BRAND, CONTACT } from '../constants';

const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT.WHATSAPP_MESSAGE)}`;

const navLinks = ['Início', 'Serviços', 'Sobre', 'Metodologia', 'Depoimentos'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={`transition-all duration-500 border rounded-full px-4 md:px-8 py-4 flex items-center justify-between w-full max-w-[1100px] shadow-lg ${
          isScrolled
            ? "bg-bg-light/90 backdrop-blur-md border-primary/10"
            : "bg-primary/20 backdrop-blur-sm border-white/10"
        }`}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className={`font-[family-name:var(--font-brand)] text-lg md:text-2xl tracking-tight font-bold transition-colors duration-500 ${
              isScrolled ? "text-primary" : "text-bg-light"
            }`}>{BRAND.NAME}</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-accent font-sans font-bold mt-1">{BRAND.SUBTITLE}</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
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

        {/* Desktop CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:block px-6 md:px-8 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-md ${
            isScrolled
              ? "bg-primary text-bg-light hover:bg-accent hover:text-primary"
              : "bg-bg-light text-primary hover:bg-accent hover:text-primary"
          }`}>
          Consultoria
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-bg-light"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </motion.div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-4 right-4 bg-bg-light/95 backdrop-blur-md rounded-2xl shadow-xl border border-primary/10 p-6 flex flex-col gap-5"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-primary/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-primary text-bg-light px-6 py-3 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-center"
            >
              Consultoria
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
