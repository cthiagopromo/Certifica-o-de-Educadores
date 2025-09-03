import { FileText, UserCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="w-8 h-8 text-primary-foreground" />,
    title: 'Preencha o formulário',
    description: 'Você preenche o formulário com seus dados.',
  },
  {
    icon: <UserCheck className="w-8 h-8 text-primary-foreground" />,
    title: 'Análise de perfil',
    description: 'Nossa equipe analisa cada perfil com cuidado, valorizando o potencial impacto que você pode gerar na educação.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary-foreground" />,
    title: 'Aprovação e Matrícula',
    description: 'Se aprovado, você recebe uma mensagem de parabéns e o link para garantir sua matrícula com 50% de bolsa.',
  },
];

export default function ApplicationProcessSection() {
  return (
    <section id="apply" className="py-20 md:py-28 bg-card border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">📌 O processo é simples, humano e rápido.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            É direto, sem burocracia e pensado para não tirar seu foco do que realmente importa: ensinar.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px bg-border -translate-x-1/2 md:hidden" aria-hidden="true"></div>
          <div className="absolute left-0 top-6 w-full h-px bg-border hidden md:block" aria-hidden="true"></div>
          <div className="grid md:grid-cols-3 gap-y-16 md:gap-x-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary z-10 relative">
                      {step.icon}
                    </div>
                </div>
                 <div className="hidden md:flex justify-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary z-10 relative">
                      {step.icon}
                    </div>
                 </div>
                <h3 className="text-xl font-semibold mb-2 mt-12 md:mt-0">{`${index + 1}. ${step.title}`}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
