import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">
              🌟 Imagine ser lembrado como o professor que mudou a vida de seus alunos.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Abrimos inscrições para a Certificação de Educadores, com bolsas de 50% de desconto. A SóEducador acredita que cada professor carrega dentro de si o poder de transformar o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
                <Link href="#apply">QUERO MINHA BOLSA</Link>
              </Button>
            </div>
             <p className="text-md md:text-lg text-primary-foreground/80">
              Todo grande educador tem algo em comum: em algum momento, foi inspirado por alguém que acreditou nele. Agora chegou a sua vez de ser essa inspiração.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/500"
              alt="Professor sorrindo"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              data-ai-hint="smiling teacher"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
