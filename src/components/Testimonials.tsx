import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "A Dra. Fernanda Lóren foi fundamental para a concessão da minha aposentadoria. O atendimento é humano e muito transparente. Recomendo a todos que precisam de ajuda com o INSS.",
    role: "Aposentada por Idade"
  },
  {
    name: "João Pereira",
    location: "Curitiba, PR",
    text: "Depois de várias negativas do INSS, a Dra. Fernanda conseguiu reverter a situação. O profissionalismo e a dedicação dela são admiráveis. Serei eternamente grato.",
    role: "Aposentado por Tempo de Contribuição"
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "O que mais me impressionou foi a clareza nas explicações. Eu me senti segura durante todo o processo. Uma advogada que realmente se importa com o cliente.",
    role: "Beneficiária de Pensão por Morte"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-32 px-6 bg-bg-light relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 md:mb-24 text-center space-y-4">
          <span className="text-accent font-sans font-bold text-[10px] uppercase tracking-[0.5em]">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-7xl font-serif text-primary">Histórias que nos <span className="italic text-accent">inspiram</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-6 md:p-12 rounded-sm shadow-sm border border-primary/5 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-4 right-4 md:top-8 md:right-8 size-8 md:size-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
              <div className="space-y-6 md:space-y-8">
                <p className="text-xl font-serif text-primary/80 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="space-y-2">
                  <h4 className="text-lg font-serif font-bold text-primary">{t.name}</h4>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary/40">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
