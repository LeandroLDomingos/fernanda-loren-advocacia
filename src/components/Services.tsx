import { motion } from 'motion/react';

const services = [
  {
    title: "INSS",
    lines: [
      "Atendimento e orientação completa sobre contribuições, aposentadorias e regularização junto ao INSS.",
      "Auxílio em processos administrativos e revisão de benefícios.",
    ],
  },
  {
    title: "AUXÍLIO-ACIDENTE",
    lines: [
      "Benefício pago ao trabalhador que ficou com sequelas após acidente e teve redução da capacidade de trabalho.",
      "Pode ser acumulado com salário, conforme a lei.",
    ],
  },
  {
    title: "AUXÍLIO-RECLUSÃO",
    lines: [
      "Benefício destinado aos dependentes de segurado de baixa renda que está preso.",
      "Garantia de amparo financeiro durante o período de reclusão.",
    ],
  },
  {
    title: "BENEFÍCIOS PREVIDENCIÁRIOS",
    lines: [
      "Incluem aposentadorias, auxílios e pensões concedidos pelo INSS.",
      "Análise e encaminhamento para garantir o melhor benefício possível.",
    ],
  },
  {
    title: "BENEFÍCIO ASSISTENCIAL (BPC/LOAS)",
    lines: [
      "Destinado a idosos e pessoas com deficiência de baixa renda, sem necessidade de contribuição ao INSS.",
      "Garante um salário mínimo mensal.",
    ],
  },
  {
    title: "PLANEJAMENTO PREVIDENCIÁRIO",
    lines: [
      "Estudo estratégico para identificar o melhor momento e valor da aposentadoria.",
      "Evita perdas financeiras e garante maior segurança no futuro.",
    ],
  },
  {
    title: "SALÁRIO-MATERNIDADE",
    lines: [
      "Benefício pago à segurada durante o período de afastamento por nascimento ou adoção.",
      "Assegura renda durante a licença maternidade.",
    ],
  },
  {
    title: "PENSÃO POR MORTE",
    lines: [
      "Benefício pago aos dependentes do segurado falecido.",
      "Garante suporte financeiro após a perda do provedor.",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-bg-light relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-8">
          <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight max-w-2xl text-primary leading-[1.1]">
            Áreas de <span className="italic text-accent">atuação</span>
          </h2>
          <div className="mt-8 md:mt-0 flex flex-col items-end">
            <span className="text-primary/60 font-sans font-bold text-[10px] block mb-4 uppercase tracking-[0.4em]">LOREN ADVOCACY</span>
            <div className="h-[1px] w-48 bg-primary/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white p-10 border border-primary/5 flex flex-col gap-4 rounded-sm shadow-sm group"
            >
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-serif font-semibold text-primary">
                {service.title}
              </h3>
              <div className="space-y-2">
                {service.lines.map((line, i) => (
                  <p key={i} className="text-primary/70 text-base leading-relaxed font-light">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
