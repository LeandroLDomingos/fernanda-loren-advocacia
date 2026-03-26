import { motion } from 'motion/react';

export default function Manifesto() {
  return (
    <section className="bg-primary py-16 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-bg-light text-3xl md:text-8xl font-serif font-light tracking-tight leading-[1.1]"
        >
          <span className="text-accent block mb-8 md:mb-12 text-sm uppercase font-sans font-bold tracking-[0.5em]">O MANIFESTO</span>
          A advocacia tradicional foca em <span className="text-accent/60 italic">burocracia</span>.{' '}
          <br className="hidden md:block" />
          Nós focamos na sua <span className="text-accent italic font-medium">história</span>.
        </motion.h2>
      </div>
      <div className="absolute bottom-0 right-0 p-6 md:p-12 opacity-5">
        <span className="text-[20vw] font-serif font-black text-bg-light leading-none">LÓREN</span>
      </div>
    </section>
  );
}
