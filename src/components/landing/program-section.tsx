import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle className="w-10 h-10 text-accent" />,
    title: 'Torne-se referência',
    description: 'Torne-se referência entre colegas e alunos.',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-accent" />,
    title: 'Mais criatividade',
    description: 'Traga mais criatividade e inovação para suas aulas.',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-accent" />,
    title: 'Ensine com impacto',
    description: 'Viva a satisfação de ensinar com ainda mais impacto.',
  },
];

export default function ProgramSection() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-card border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">📘 Um programa feito para apoiar você em cada passo.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A Certificação de Educadores reúne de 1 a 3 cursos online, com conteúdo pensado para o dia a dia da sala de aula. Nada de teoria distante ou inacessível. Aqui, você vai encontrar formações práticas, aplicáveis e inspiradoras.
          </p>
           <ul className="mt-4 text-left space-y-2 text-muted-foreground">
                <li>🔹 Quer tornar suas aulas mais envolventes? Temos ferramentas para isso.</li>
                <li>🔹 Quer se sentir mais seguro em frente aos alunos? Você vai conquistar essa confiança.</li>
                <li>🔹 Quer abrir caminhos para novas oportunidades na educação? A certificação abre portas.</li>
            </ul>
            <p className="mt-4 text-lg text-muted-foreground">E o melhor: você faz tudo no seu ritmo, de onde estiver, sem deixar de lado sua rotina.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center pt-8">
                <div className="bg-accent/10 p-4 rounded-full">
                  {benefit.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <CardTitle className="text-xl font-semibold mb-2">{benefit.title}</CardTitle>
                <p className="text-muted-foreground flex-grow">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
