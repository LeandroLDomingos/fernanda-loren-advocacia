import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES, BRAND, CONTACT } from '../constants';

const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT.WHATSAPP_MESSAGE)}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-stretch bg-primary overflow-hidden">
      {/* Text Content Side */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 md:p-24 z-10">
        <div className="max-w-xl text-center md:text-left space-y-5 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-[family-name:var(--font-brand)] leading-snug text-bg-light">
              {BRAND.TAGLINE}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-5 md:space-y-8"
          >
            <p className="text-sm sm:text-base md:text-2xl font-serif leading-relaxed text-bg-light/80">
              Se você enfrenta dúvidas, negativas ou precisa de orientação sobre seus direitos no INSS, conte com um atendimento acolhedor e transparente.
            </p>

            <div className="pt-2 md:pt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-light text-primary px-6 md:px-12 py-5 text-[10px] font-sans font-bold flex items-center justify-center gap-4 md:gap-8 hover:bg-accent hover:text-primary transition-all duration-700 uppercase tracking-[0.5em] rounded-sm group shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">Agendar Consultoria</span>
                <ArrowRight className="size-4 group-hover:translate-x-3 transition-transform duration-700 relative z-10" />
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 relative min-h-[280px] md:min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={IMAGES.HERO_PROFESSIONAL}
            alt="Fernanda Lóren - Advocacia Previdenciária"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 right-12 text-right z-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-white/80">
            {BRAND.NAME}
          </span>
          <div className="h-[1px] w-24 bg-accent/50 mt-2 ml-auto"></div>
        </div>
      </div>
    </section>
  );
}
