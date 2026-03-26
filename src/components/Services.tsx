import { Microscope, Gavel, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section className="py-32 px-6 bg-bg-light relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-8">
          <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight max-w-2xl text-primary leading-[1.1]">
            Instrumentos projetados para <span className="italic text-accent">garantia</span> de direitos
          </h2>
          <div className="mt-8 md:mt-0 flex flex-col items-end">
            <span className="text-primary/60 font-sans font-bold text-[10px] block mb-4 uppercase tracking-[0.4em]">LOREN ADVOCACY</span>
            <div className="h-[1px] w-48 bg-primary/20"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-7 bg-white p-16 border border-primary/5 flex flex-col justify-between min-h-[450px] rounded-sm shadow-sm relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Microscope className="size-32 text-primary" strokeWidth={0.5} />
            </div>
            <Microscope className="size-10 text-primary/40" strokeWidth={1.5} />
            <div>
              <h3 className="text-4xl font-serif font-medium mb-6 text-primary">Diagnóstico Preciso</h3>
              <p className="text-primary/70 text-lg leading-relaxed max-w-md font-light">
                Mapeamento granular de dados históricos para neutralizar riscos antes do protocolo administrativo ou judicial.
              </p>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 bg-primary text-bg-light p-16 flex flex-col justify-between min-h-[450px] rounded-sm shadow-xl relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <Gavel className="size-64 text-bg-light" strokeWidth={0.5} />
            </div>
            <Gavel className="size-10 text-accent" strokeWidth={1.5} />
            <div>
              <h3 className="text-4xl font-serif font-medium mb-6 text-bg-light">Atuação Técnica</h3>
              <p className="text-bg-light/70 text-lg leading-relaxed font-light">
                Jurisprudência aplicada com rigor científico nos tribunais federais para garantir o melhor benefício.
              </p>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 bg-surface p-16 border border-primary/5 flex flex-col justify-between min-h-[400px] rounded-sm shadow-sm"
          >
            <div className="text-[9px] font-sans font-bold uppercase text-primary/40 mb-12 tracking-[0.3em]">Ref: 992-01 / SYSTEM</div>
            <div>
              <h3 className="text-4xl font-serif font-medium mb-6 text-primary">Efetivação</h3>
              <p className="text-primary/70 text-lg leading-relaxed font-light">
                Conversão imediata de mérito jurídico em benefício financeiro real e vitalício para nossos clientes.
              </p>
            </div>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-7 bg-white p-16 border border-primary/5 flex items-center justify-between min-h-[250px] rounded-sm shadow-sm"
          >
            <div className="flex items-center gap-10">
              <span className="text-7xl font-serif font-light text-primary/10 italic">#01</span>
              <p className="text-2xl font-serif font-medium text-primary tracking-tight">Liderança em Direito Previdenciário de Alta Complexidade</p>
            </div>
            <ShieldCheck className="size-10 text-primary/20" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
