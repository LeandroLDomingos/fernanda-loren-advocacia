import { BRAND, CONTACT } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-primary text-bg-light pt-16 md:pt-32 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col leading-none mb-8 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-brand)] font-bold tracking-tight text-bg-light uppercase">{BRAND.NAME}</h2>
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-bold mt-2">{BRAND.SUBTITLE}</span>
            </div>
            <p className="text-bg-light/50 text-base md:text-xl max-w-md leading-relaxed font-serif italic">
              "{BRAND.TAGLINE}"
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-sans font-bold text-accent mb-8 md:mb-10 uppercase tracking-[0.4em]">Navegação</h3>
            <ul className="space-y-5 font-sans font-medium uppercase tracking-[0.2em] text-[10px]">
              <li><a href="#início" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#serviços" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#metodologia" className="hover:text-accent transition-colors">Metodologia</a></li>
              <li><a href="#depoimentos" className="hover:text-accent transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-sans font-bold text-accent mb-8 md:mb-10 uppercase tracking-[0.4em]">Contato</h3>
            <ul className="space-y-5 text-bg-light/60 font-light text-sm">
              <li className="hover:text-accent transition-colors cursor-pointer">atendimento@fernandalorenadvocacia.com.br</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{CONTACT.PHONE_DISPLAY}</li>
              <li className="pt-6 border-t border-bg-light/10 text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
                Av. Rodoviária 155 - Lundceia - Em frente ao INSS Lagoa Santa - CEP 33232-054
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-bg-light/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-bg-light/30 text-[10px] uppercase tracking-[0.3em] font-sans">
            © 2024 {BRAND.NAME} / Direitos Reservados
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex gap-6 md:gap-8">
              <a href="https://www.instagram.com/fernandalorenadvocacia/" className="text-bg-light/40 hover:text-accent transition-colors uppercase text-[10px] font-bold tracking-[0.3em]">Instagram</a>
            </div>
            <div className="bg-bg-light/5 px-4 md:px-6 py-2.5 border border-bg-light/10 font-mono text-[9px] tracking-[0.4em] uppercase text-accent">
              FERNANDA LÓREN ADVOCACIA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
