import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function VacanciesSection() {
  return (
    <section id="vacancies" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="relative rounded-3xl overflow-hidden flex justify-center items-center">
          <Image
            src="https://picsum.photos/1872/557"
            alt="Background"
            fill
            objectFit="cover"
            className="absolute z-0"
            data-ai-hint="abstract texture"
          />
          <div className="absolute inset-0 bg-primary/70 z-10"></div>
          <div className="relative z-20 flex flex-col justify-start items-center gap-6 text-center max-w-3xl mx-auto px-4 py-24">
            <div className="p-6 bg-[#F8B6FE] rounded-2xl shadow-lg">
              <div className="text-4xl text-[#171717] font-bold">🚨</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">As bolsas são limitadas.</h2>
              <p className="self-stretch text-center justify-center text-lg text-white/90">
                As bolsas realmente são concedidas conforme a ordem de inscrição.<br/>Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.
              </p>
            </div>
            <Button asChild size="lg" className="px-12 py-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 text-xl font-medium">
                <Link href="#apply">QUERO MINHA BOLSA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
