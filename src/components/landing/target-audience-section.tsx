import { User, Users, GraduationCap, Heart } from 'lucide-react';

const audiences = [
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: 'Professores',
    description: 'Que querem se atualizar e se destacar.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Coordenadores e Gestores',
    description: 'Que buscam novas perspectivas para a escola.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: 'Estudantes de Pedagogia',
    description: 'Que desejam entrar no mercado mais preparados.',
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Pais e Educadores',
    description: 'Que acreditam na educação como caminho de transformação.',
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">👩‍🏫 Se você acredita no poder da educação, este programa é para você.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A Certificação de Educadores é destinada a todos que têm a missão de ensinar e aprender. Se você faz parte dessa missão, essa bolsa é sua chance de crescer.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="p-8 bg-card rounded-lg shadow-sm border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  {audience.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
