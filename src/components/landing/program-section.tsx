import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProgramSection() {
  return (
    <section id="programs" className="py-14 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="w-[651px] inline-flex flex-col justify-start items-start gap-4">
            <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
              <div className="inline-flex justify-start items-center gap-2">
                <div className="justify-center text-primary text-lg font-bold font-headline leading-snug">Conheça a formação contemplada</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <h2 className="self-stretch justify-center text-foreground text-5xl font-semibold font-headline leading-[57.60px]">Um programa feito para apoiar você em cada passo.</h2>
              <p className="self-stretch justify-center text-muted-foreground text-xl font-normal leading-normal">A Certificação de Educadores reúne de 1 a 3 cursos online, com conteúdo pensado para o dia a dia da sala de aula. Nada de teoria distante ou inacessível. Aqui, você vai encontrar formações práticas, aplicáveis e inspiradoras.</p>
            </div>
            <div className="self-stretch py-4 flex flex-col justify-start items-start gap-1">
              <p className="self-stretch justify-center"><span className="text-foreground text-base font-normal leading-tight">Quer tornar suas aulas mais envolventes?</span><span className="text-foreground text-base font-semibold leading-tight"> </span><span className="text-accent text-base font-semibold underline leading-tight">Temos materiais para isso.</span></p>
              <p className="self-stretch justify-center"><span className="text-foreground text-base font-normal leading-tight">Quer se sentir mais seguro em frente aos alunos? </span><span className="text-accent text-base font-semibold underline leading-tight">Você vai conquistar essa confiança.</span></p>
              <p className="self-stretch justify-center"><span className="text-foreground text-base font-normal leading-tight">Quer abrir caminhos para novas oportunidades na educação? </span><span className="text-accent text-base font-semibold underline leading-tight">A certificação abre portas.</span></p>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
               <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90 px-12 py-6 text-xl">
                    <Link href="#apply">QUERO MINHA BOLSA</Link>
                </Button>
              <p className="self-stretch justify-center text-muted-foreground text-xl font-normal leading-normal">E o melhor: você faz tudo no seu ritmo, de onde estiver, sem deixar de lado sua rotina.</p>
            </div>
          </div>
          <div className="w-[556px] inline-flex flex-col justify-center items-start gap-2">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              <div className="flex-1 h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-md inline-flex flex-col justify-center items-start">
                <p className="self-stretch justify-center text-muted-foreground text-2xl font-medium leading-7">✅ Torne-se referência entre colegas e alunos.</p>
              </div>
              <div className="flex-1 h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-md inline-flex flex-col justify-center items-start">
                <p className="self-stretch justify-center text-muted-foreground text-2xl font-medium leading-7">✅ Traga mais criatividade e inovação para suas aulas.</p>
              </div>
            </div>
            <div className="w-64 h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-md flex flex-col justify-center items-start">
              <p className="self-stretch justify-center text-muted-foreground text-2xl font-medium leading-7">✅ Viva a satisfação de ensinar com ainda mais impacto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}