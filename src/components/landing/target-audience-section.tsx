import { PenSquare, BookCopy, Briefcase } from 'lucide-react';

const audiences = [
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: 'K-12 Teachers',
    description: 'Looking to innovate their classroom practices and inspire students.',
  },
  {
    icon: <BookCopy className="w-8 h-8 text-primary" />,
    title: 'Curriculum Coordinators',
    description: 'Aiming to design and implement forward-thinking educational programs.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'School Administrators',
    description: 'Seeking to foster a culture of growth and excellence in their institutions.',
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Who Is This Program For?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We welcome educators from all backgrounds who are passionate about shaping the future of learning.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
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
