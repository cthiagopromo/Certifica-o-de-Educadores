import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function VacanciesSection() {
  return (
    <section id="vacancies" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline">🚨 As bolsas são limitadas.</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            E não falamos isso como recurso de marketing. As bolsas realmente são concedidas conforme a ordem de inscrição. Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
              <Link href="#apply">QUERO MINHA INSCRIÇÃO</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
