import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-headline">
              Transform Your Teaching Journey
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join our innovative program designed for educators ready to lead the change in modern education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#programs">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/500"
              alt="An inspiring image of a modern classroom with a teacher and students"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              data-ai-hint="teacher students"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
