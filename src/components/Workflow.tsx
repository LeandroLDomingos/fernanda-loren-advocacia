import { Ruler, Settings, Award } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    id: '01',
    phase: '// FASE DE AUDITORIA',
    title: 'Análise Inicial Tática',
    description: 'Mapeamento cirúrgico de lacunas documentais e reconstrução de histórico contributivo.',
    icon: Ruler
  },
  {
    id: '02',
    phase: '// EXECUÇÃO TÉCNICA',
    title: 'Processamento Previdenciário',
    description: 'Gestão ativa de petições e prazos com monitoramento em tempo real dos sistemas judiciais.',
    icon: Settings
  },
  {
    id: '03',
    phase: '// RESULTADO FINAL',
    title: 'Efetivação do Benefício',
    description: 'Cálculo de valores retroativos e implementação do benefício em folha de pagamento.',
    icon: Award
  }
];

export default function Workflow() {
  return (
    <section className="py-32 px-6 bg-bg-light">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-accent font-sans font-semibold text-[10px] block mb-4 uppercase tracking-[0.4em]">METODOLOGIA</span>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-primary">Protocolo de <span className="italic text-accent">Atuação</span></h2>
          </div>
          <p className="text-mocha/50 font-sans text-[10px] uppercase tracking-[0.2em] max-w-[200px] leading-relaxed">
            Workflow Standard Operating Procedure / Loren Advocacy V3
          </p>
        </div>
        
        <div className="space-y-6">
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-accent/10 p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-12 group hover:bg-surface transition-all duration-500 rounded-sm shadow-sm"
            >
              <div className="text-8xl font-serif font-light text-accent/10 group-hover:text-accent/30 transition-colors duration-500 italic">
                {step.id}
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-sans font-bold text-accent mb-4 uppercase tracking-[0.3em]">
                  {step.phase}
                </div>
                <h3 className="text-4xl font-serif font-medium mb-6 text-primary tracking-tight">
                  {step.title}
                </h3>
                <p className="text-mocha/70 max-w-xl text-lg font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="hidden md:block">
                <step.icon className="size-12 text-accent/20 group-hover:text-accent transition-all duration-500" strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
