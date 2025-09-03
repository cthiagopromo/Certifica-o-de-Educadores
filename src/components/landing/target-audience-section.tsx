import Image from 'next/image';

const audiences = [
  {
    image: "https://picsum.photos/292/195",
    description: 'Professores que querem se atualizar e se destacar.',
    aiHint: 'teacher classroom',
  },
  {
    image: "https://picsum.photos/292/195",
    description: 'Coordenadores e gestores que buscam novas perspectivas para a escola.',
    aiHint: 'school coordinator meeting',
  },
  {
    image: "https://picsum.photos/292/195",
    description: 'Estudantes de Pedagogia que desejam entrar no mercado mais preparados.',
    aiHint: 'pedagogy student studying',
  },
  {
    image: "https://picsum.photos/292/195",
    description: 'Pais, mães e educadores que acreditam na educação como caminho de transformação.',
    aiHint: 'parents helping child',
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-10">
            <div className="flex flex-col justify-start items-center gap-6 text-center">
                <div className="px-4 py-2 bg-muted rounded-lg inline-block">
                    <div className="text-primary text-lg font-bold leading-snug">Quem pode se inscrever?</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h2 className="max-w-2xl text-foreground text-5xl font-semibold leading-[57.60px]">Se você acredita no poder da educação, este programa é para você.</h2>
                    <p className="text-muted-foreground text-xl">A Certificação de Educadores é destinada a todos que têm a missão de ensinar e aprender:</p>
                </div>
            </div>
            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {audiences.map((audience, index) => (
                    <div key={index} className="flex flex-col justify-start items-center gap-6 overflow-hidden">
                        <Image
                            src={audience.image}
                            alt={audience.description}
                            width={292}
                            height={195}
                            className="self-stretch h-48 rounded-3xl object-cover"
                            data-ai-hint={audience.aiHint}
                        />
                        <div className="self-stretch flex flex-col justify-start items-start gap-2">
                            <div className="w-32 h-0.5 bg-primary"></div>
                            <p className="self-stretch text-foreground text-xl">{audience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}