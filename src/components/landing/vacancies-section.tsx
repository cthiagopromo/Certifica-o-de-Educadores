import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VacanciesSection() {
  return (
    <section id="vacancies" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex flex-col justify-start items-center gap-6 text-center max-w-3xl mx-auto">
            <div className="w-24 h-24 p-6 bg-accent/20 rounded-2xl shadow-lg inline-flex justify-center items-center overflow-hidden">
                <div className="text-center justify-center text-accent text-4xl font-bold leading-10">🚨</div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">As bolsas são limitadas.</h2>
                <p className="self-stretch text-center justify-center text-lg text-primary-foreground/90">
                    As bolsas realmente são concedidas conforme a ordem de inscrição.
                    <br/>
                    Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.
                </p>
            </div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-xl">
                <Link href="#apply">QUERO MINHA BOLSA</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
