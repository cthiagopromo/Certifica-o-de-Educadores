import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VacanciesSection() {
  return (
    <section id="vacancies" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-6 text-center max-w-3xl mx-auto">
          <div className="p-6 bg-pink-200/30 rounded-2xl shadow-lg">
            <div className="text-4xl">🚨</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">As bolsas são limitadas.</h2>
            <p className="self-stretch text-center justify-center text-lg text-primary-foreground/90">
              As bolsas realmente são concedidas conforme a ordem de inscrição.<br/>Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.
            </p>
          </div>
          <Button asChild style={{display: 'flex', padding: '24px 48px', alignItems: 'flex-start'}} className="bg-green-500 rounded-2xl hover:bg-green-600">
              <Link href="#apply" className="text-white text-xl font-medium leading-normal">QUERO MINHA BOLSA</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
