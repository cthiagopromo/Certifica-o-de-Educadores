import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">💜 Quem somos e por que fazemos isso</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A Sóeducador nasceu com um propósito simples e poderoso: estar ao lado dos professores. Sabemos que a educação no Brasil é cheia de desafios — mas também sabemos que cada professor carrega dentro de si a chama da transformação.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Por isso, criamos uma plataforma que une:
            </p>
            <ul className="mt-4 list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li>Formações de qualidade, acessíveis e atuais.</li>
              <li>Um tom humano e inspirador, porque educação é feita de pessoas.</li>
              <li>Apoio constante, para que nenhum educador se sinta sozinho em sua caminhada.</li>
            </ul>
             <p className="mt-4 text-lg text-muted-foreground">
              Nossa missão é celebrar suas conquistas, espalhar amor pela educação e apoiar quem dedica a vida a ensinar. Porque, no fim das contas, quando apoiamos professores, transformamos o futuro de todos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <Image
              src="https://picsum.photos/300/400"
              alt="Educator photo 1"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="educator classroom"
            />
            <Image
              src="https://picsum.photos/300/400"
              alt="Educator photo 2"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="teacher smiling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
