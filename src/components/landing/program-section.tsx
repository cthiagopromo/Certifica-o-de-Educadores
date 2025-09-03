import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Innovative Pedagogy',
    description: 'Master cutting-edge teaching methodologies and technologies to create dynamic learning environments.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Collaborative Learning',
    description: 'Connect with a diverse network of passionate educators and grow together in a supportive community.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Career Advancement',
    description: 'Unlock new opportunities and leadership roles within the educational landscape.',
  },
];

export default function ProgramSection() {
  return (
    <section id="programs" className="py-20 md:py-28 bg-card border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose EduTransform?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our program is meticulously designed to provide you with the skills, community, and vision to excel.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center pt-8">
                <div className="bg-primary/10 p-4 rounded-full">
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
