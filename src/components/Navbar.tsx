import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BRAND, CONTACT } from '../constants';

const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT.WHATSAPP_MESSAGE)}`;

const navLinks = [
  { label: 'Início',      id: 'início' },
  { label: 'Serviços',    id: 'serviços' },
  { label: 'Sobre',       id: 'sobre' },
  { label: 'Metodologia', id: 'metodologia' },
  { label: 'Depoimentos', id: 'depoimentos' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 100;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const hidden = isMobile && !isScrolled;

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`transition-colors duration-500 border rounded-full px-4 md:px-8 py-4 flex items-center justify-between w-full max-w-[1100px] shadow-lg bg-bg-light/90 backdrop-blur-md border-primary/10 ${
          hidden ? 'pointer-events-none' : ''
        }`}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-brand)] text-lg md:text-2xl tracking-tight font-bold text-primary">
              {BRAND.NAME}
            </span>
            <span className="hidden md:block text-[8px] uppercase tracking-[0.4em] text-accent font-sans font-bold mt-1">{BRAND.SUBTITLE}</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-500 relative group text-primary/70 hover:text-primary"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 md:px-8 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-md bg-primary text-bg-light hover:bg-accent hover:text-primary"
        >
          Consultoria
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full transition-colors duration-300 text-primary"
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
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => { scrollTo(id); setMenuOpen(false); }}
                className="text-left text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-primary/70 hover:text-primary transition-colors"
              >
                {label}
              </button>
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
