import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    title: 'Preencha o formulário',
    description: 'Você preenche o formulário com seus dados.',
    paddingTop: 'pt-0',
  },
  {
    title: 'Análise de perfil',
    description: (
      <>
        Nossa equipe analisa cada perfil com cuidado, valorizando o{' '}
        <span className="font-bold">potencial impacto</span> que você pode gerar
        na educação.
      </>
    ),
    paddingTop: 'md:pt-8',
  },
  {
    title: 'Aprovação e Matrícula',
    description: (
      <>
        Se aprovado, você recebe uma mensagem de parabéns e o link para
        garantir sua matrícula com{' '}
        <span className="font-bold">50% de bolsa.</span>
      </>
    ),
    paddingTop: 'md:pt-16',
  },
];

export default function ApplicationProcessSection() {
  return (
    <section id="apply" className="py-20 md:py-28 bg-card border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-10">
          <div className="flex flex-col justify-start items-center gap-6 text-center">
            <div className="px-4 py-2 bg-muted rounded-lg inline-block">
              <div className="text-primary text-lg font-bold leading-snug">
                Como funciona o processo seletivo
              </div>
            </div>
            <h2 className="max-w-2xl text-foreground text-5xl font-semibold leading-tight">
              O processo é simples, humano e rápido.
            </h2>
          </div>

          <div className="self-stretch grid md:grid-cols-3 gap-10 items-start">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col justify-start items-start w-full ${step.paddingTop}`}
              >
                <div className="self-stretch flex flex-col justify-start items-center gap-7">
                  <div className="self-stretch relative inline-flex justify-center items-center">
                    <div className="w-full h-px absolute top-1/2 -translate-y-1/2 bg-primary/20" />
                    <div className="relative px-2.5 py-0.5 bg-primary rounded-full flex justify-center items-center border-2 border-background">
                      <span className="text-primary-foreground text-lg font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-60 max-w-sm px-8 bg-muted rounded-3xl shadow-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-start">
                    <p className="self-stretch text-foreground text-xl md:text-2xl leading-7 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <Button asChild style={{display: 'flex', padding: '24px 48px', alignItems: 'flex-start'}} className="bg-green-500 rounded-2xl hover:bg-green-600">
                <Link href="#apply" className="text-white text-xl font-medium leading-normal">QUERO MINHA BOLSA</Link>
            </Button>
            <p className="text-muted-foreground text-xl">
              É direto, sem burocracia e pensado para não tirar seu foco do que
              realmente importa: ensinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}