import { motion } from 'motion/react';
import { IMAGES, BRAND } from '../constants';

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img
              src="/sobre.jpeg"
              alt="Fernanda Loren"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 -z-10 rounded-full blur-3xl"></div>
          <div className="absolute top-10 -left-10 w-48 h-48 bg-primary/5 -z-10 rounded-full blur-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-[0.5em]">A PROFISSIONAL</span>
            <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight">
              {BRAND.NAME}
            </h2>
            <div className="h-[1px] w-24 bg-accent"></div>
          </div>

          <div className="space-y-6 text-lg font-serif text-primary/80 leading-relaxed">
            <p>
              Com especialização em Direito Previdenciário e anos de atuação dedicada exclusivamente à defesa dos direitos de quem contribuiu para o desenvolvimento do nosso país.
            </p>
            <p>
              Minha missão é humanizar o atendimento jurídico, transformando processos complexos em soluções claras e acolhedoras. Acredito que cada cliente possui uma história única que merece ser respeitada e protegida.
            </p>
            <p className="italic font-medium text-primary">
              "Justiça não é apenas sobre leis, é sobre dignidade humana e o reconhecimento de uma vida de trabalho."
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-3xl font-serif text-primary">10+</span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary/40">Anos de Experiência</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-primary">2k+</span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary/40">Vidas Transformadas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
