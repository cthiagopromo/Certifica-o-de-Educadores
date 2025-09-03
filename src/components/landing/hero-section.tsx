import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-14 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-start items-start gap-8 md:w-1/2">
            <div className="flex items-center gap-2 text-violet-100">
                <GraduationCap className="h-12 w-14" />
                <span className="text-4xl font-bold">SóEducador</span>
            </div>
            <div className="flex flex-col justify-start items-start gap-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Imagine ser lembrado como o professor(a) que mudou a vida de seus alunos.
              </h1>
              <p className="text-lg lg:text-xl text-gray-100">
                Abrimos inscrições para a Certificação de Educadores, com <span className="text-accent">bolsas de 50% de desconto.</span> Acreditamos que cada professor carrega dentro de si o poder de transformar o futuro.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <Button asChild style={{display: 'flex', padding: '24px 48px', alignItems: 'flex-start'}} className="bg-white text-gray-900 rounded-2xl hover:bg-gray-200">
                    <Link href="#apply" className="text-xl font-medium leading-normal">QUERO MINHA BOLSA</Link>
                </Button>
                <p className="text-lg text-gray-300">
                  Agora chegou a sua vez de ser essa inspiração.
                </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
                src="https://picsum.photos/697/652"
                alt="Professor inspirador"
                width={697}
                height={652}
                className="rounded-xl"
                data-ai-hint="inspiring teacher"
            />
          </div>
        </div>
      </div>
    </section>
  );
}