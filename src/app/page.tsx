import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      <main className="flex flex-col items-center">
        <section id="hero" className="w-full flex justify-center px-4 md:px-10 lg:px-12 py-14 my-8">
            <div className="w-full max-w-7xl bg-purple-900 rounded-[48px] text-primary-foreground flex justify-between items-center p-12">
                <div className="flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                        <div data-aparence="White" data-product="SóEducador" data-size="Large" data-typo="Logo" className="w-80 h-12 flex flex-col justify-start items-center gap-2.5">
                            <div className="self-stretch flex-1 relative">
                                <div className="text-4xl font-bold text-violet-100">SóEducador</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-6">
                        <h1 className="w-[706px] justify-center text-white text-6xl font-bold leading-[64.96px]">Imagine ser lembrado como o professor(a) que mudou a vida de seus alunos.</h1>
                        <p className="w-[555px] justify-center"><span className="text-gray-100 text-xl font-medium">Abrimos inscrições para a Certificação de Educadores, com </span><span className="text-pink-500 text-xl font-medium">bolsas de 50% de desconto.</span><span className="text-gray-100 text-xl font-medium"> Acreditamos que cada professor carrega dentro de si o poder de transformar o futuro.</span></p>
                    </div>
                    <div className="w-[541px] inline-flex justify-center items-center gap-5">
                        <Button asChild className="px-12 py-6 bg-white text-primary rounded-2xl hover:bg-gray-200 text-xl font-medium">
                            <Link href="#apply">QUERO MINHA BOLSA</Link>
                        </Button>
                        <p className="flex-1 justify-center text-purple-200 text-lg font-normal leading-snug">Agora chegou a sua vez de ser essa inspiração.</p>
                    </div>
                </div>
                <Image className="w-[697px] h-[652px] rounded-xl hidden xl:block" src="https://picsum.photos/697/652" width={697} height={652} alt="Professor inspirador" data-ai-hint="inspiring teacher" />
            </div>
        </section>

        <section id="programs" className="w-full flex justify-center px-4 md:px-10 lg:px-12 py-14">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
                    <div className="px-4 py-2 bg-muted rounded-lg">
                        <div className="text-primary text-lg font-bold leading-snug">Conheça a formação contemplada</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <h2 className="self-stretch text-foreground text-5xl font-semibold leading-tight">Um programa feito para apoiar você em cada passo.</h2>
                        <p className="self-stretch text-muted-foreground text-xl font-normal leading-normal">A Certificação de Educadores reúne de 1 a 3 cursos online, com conteúdo pensado para o dia a dia da sala de aula. Nada de teoria distante ou inacessível. Aqui, você vai encontrar formações práticas, aplicáveis e inspiradoras.</p>
                    </div>
                    <div className="self-stretch py-4 flex flex-col justify-start items-start gap-1">
                        <p className="self-stretch"><span className="text-foreground text-base font-normal leading-tight">Quer tornar suas aulas mais envolventes?</span><span className="text-foreground text-base font-semibold leading-tight"> </span><span className="text-accent text-base font-semibold underline leading-tight">Temos materiais para isso.</span></p>
                        <p className="self-stretch"><span className="text-foreground text-base font-normal leading-tight">Quer se sentir mais seguro em frente aos alunos? </span><span className="text-accent text-base font-semibold underline leading-tight">Você vai conquistar essa confiança.</span></p>
                        <p className="self-stretch"><span className="text-foreground text-base font-normal leading-tight">Quer abrir caminhos para novas oportunidades na educação? </span><span className="text-accent text-base font-semibold underline leading-tight">A certificação abre portas.</span></p>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                         <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                            <Link href="#apply">QUERO MINHA BOLSA</Link>
                        </Button>
                        <p className="self-stretch text-muted-foreground text-xl font-normal leading-normal">E o melhor: você faz tudo no seu ritmo, de onde estiver, sem deixar de lado sua rotina.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-2 mt-10 lg:mt-0 lg:pl-10">
                    <div className="self-stretch flex flex-col sm:flex-row justify-start items-center gap-4">
                        <div className="flex-1 w-full h-60 px-8 sm:px-12 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-start">
                            <p className="self-stretch text-muted-foreground text-2xl font-medium leading-7">✅ Torne-se referência entre colegas e alunos.</p>
                        </div>
                        <div className="flex-1 w-full h-60 px-8 sm:px-12 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-start">
                            <p className="self-stretch text-muted-foreground text-2xl font-medium leading-7">✅ Traga mais criatividade e inovação para suas aulas.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-64 h-60 px-12 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-start">
                        <p className="self-stretch text-muted-foreground text-2xl font-medium leading-7">✅ Viva a satisfação de ensinar com ainda mais impacto.</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="w-full max-w-7xl h-px bg-border my-12" />

        <section id="target-audience" className="w-full flex justify-center px-4 md:px-10 lg:px-12 py-14">
            <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col justify-start items-center gap-6 text-center">
                    <div className="px-4 py-2 bg-muted rounded-lg">
                        <div className="text-primary text-lg font-bold leading-snug">Quem pode se inscrever?</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h2 className="max-w-2xl text-foreground text-5xl font-semibold leading-tight">Se você acredita no poder da educação, este programa é para você.</h2>
                        <p className="text-muted-foreground text-xl">A Certificação de Educadores é destinada a todos que têm a missão de ensinar e aprender:</p>
                    </div>
                </div>
                <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[{
                        image: "https://picsum.photos/292/195",
                        description: 'Professores que querem se atualizar e se destacar.',
                        aiHint: 'teacher classroom'
                      }, {
                        image: "https://picsum.photos/292/195",
                        description: 'Coordenadores e gestores que buscam novas perspectivas para a escola.',
                        aiHint: 'school coordinator meeting'
                      }, {
                        image: "https://picsum.photos/292/195",
                        description: 'Estudantes de Pedagogia que desejam entrar no mercado mais preparados.',
                        aiHint: 'pedagogy student studying'
                      }, {
                        image: "https://picsum.photos/292/195",
                        description: 'Pais, mães e educadores que acreditam na educação como caminho de transformação.',
                        aiHint: 'parents helping child'
                      }].map((audience, index) => (
                        <div key={index} className="flex flex-col justify-start items-center gap-6 overflow-hidden">
                            <Image src={audience.image} alt={audience.description} width={292} height={195} className="self-stretch h-48 rounded-3xl object-cover" data-ai-hint={audience.aiHint} />
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <div className="w-32 h-0.5 bg-primary" />
                                <p className="self-stretch text-foreground text-xl">{audience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div className="w-full max-w-7xl h-px bg-border my-12" />

        <section id="apply" className="w-full flex justify-center px-4 md:px-10 lg:px-12 py-14">
            <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-10">
                <div className="flex flex-col justify-start items-center gap-6 text-center">
                    <div className="px-4 py-2 bg-muted rounded-lg">
                        <div className="text-primary text-lg font-bold leading-snug">Como funciona o processo seletivo</div>
                    </div>
                    <h2 className="max-w-2xl text-foreground text-5xl font-semibold leading-tight">O processo é simples, humano e rápido.</h2>
                </div>
                <div className="self-stretch grid md:grid-cols-3 gap-10 items-start">
                    {[{
                        paddingTop: 'md:pt-0',
                        description: 'Você preenche o formulário com seus dados.'
                      }, {
                        paddingTop: 'md:pt-8',
                        description: <>Nossa equipe analisa cada perfil com cuidado, valorizando o <span className="font-bold">potencial impacto</span> que você pode gerar na educação.</>
                      }, {
                        paddingTop: 'md:pt-16',
                        description: <>Se aprovado, você recebe uma mensagem de parabéns e o link para garantir sua matrícula com <span className="font-bold">50% de bolsa.</span></>
                      }].map((step, index) => (
                        <div key={index} className={`flex flex-col justify-start items-start w-full ${step.paddingTop}`}>
                            <div className="self-stretch flex flex-col justify-start items-center gap-7">
                                <div className="self-stretch relative inline-flex justify-center items-center">
                                    <div className="w-full h-px absolute top-1/2 -translate-y-1/2 bg-primary/20" />
                                    <div className="relative px-2.5 py-0.5 bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                        <span className="text-primary-foreground text-lg font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                <div className="w-full h-60 max-w-sm px-8 bg-muted rounded-3xl shadow-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-start">
                                    <p className="self-stretch text-foreground text-xl md:text-2xl leading-7 text-center">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                        <Link href="#apply">QUERO MINHA BOLSA</Link>
                    </Button>
                    <p className="text-muted-foreground text-xl">É direto, sem burocracia e pensado para não tirar seu foco do que realmente importa: ensinar.</p>
                </div>
            </div>
        </section>

        <div className="w-full max-w-7xl h-px bg-border my-12" />

        <section id="vacancies" className="w-full flex justify-center px-4 md:px-10 lg:px-12 py-14 my-8">
          <div className="w-full max-w-7xl py-24 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden">
            <Image src="https://picsum.photos/1280/400" alt="Vagas limitadas" layout="fill" objectFit="cover" className="z-0 opacity-20" data-ai-hint="abstract texture" />
            <div className="relative z-10 flex flex-col justify-start items-center gap-6 text-center max-w-3xl mx-auto">
                <div className="p-6 bg-[#F8B6FE] rounded-2xl shadow-lg">
                    <div className="text-4xl text-gray-900 font-bold">🚨</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">As bolsas são limitadas.</h2>
                    <p className="self-stretch text-center justify-center text-lg text-white/90">As bolsas realmente são concedidas conforme a ordem de inscrição.<br/>Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.</p>
                </div>
                <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                    <Link href="#apply">QUERO MINHA BOLSA</Link>
                </Button>
            </div>
          </div>
        </section>

        <div className="w-full max-w-7xl h-px bg-border my-12" />

        <section id="about" className="w-full flex justify-center px-4 md:px-10 lg:px-12 py-14 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col justify-start items-start gap-6">
                    <div className="w-full max-w-3xl flex flex-col justify-start items-start gap-2">
                        <div className="px-4 py-2 bg-muted rounded-lg">
                            <div className="text-primary text-base font-semibold leading-normal">Sobre a SóEducador</div>
                        </div>
                        <h2 className="w-full max-w-lg text-foreground text-5xl font-semibold leading-tight">Quem somos e por que fazemos isso</h2>
                        <p className="self-stretch text-muted-foreground text-xl font-normal leading-normal">A SóEducador nasceu com um propósito simples e poderoso: estar ao lado dos professores. Sabemos que a educação no Brasil é cheia de desafios — mas também sabemos que cada professor carrega dentro de si a chama da transformação.</p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-4">
                        <Image className="w-full md:w-1/3 grow self-stretch rounded-2xl object-cover" src="https://picsum.photos/416/609" width={416} height={609} alt="Educator" data-ai-hint="educator teaching" />
                        <div className="w-full md:w-2/3 grow flex flex-col justify-start items-start gap-4">
                            <div className="w-full flex justify-start items-start gap-4">
                                <Image className="w-1/2 h-80 object-cover rounded-2xl" src="https://picsum.photos/416/345" width={416} height={345} alt="Classroom" data-ai-hint="classroom students" />
                                <Image className="w-1/2 h-80 object-cover rounded-2xl" src="https://picsum.photos/416/345" width={416} height={345} alt="Teacher helping student" data-ai-hint="teacher student" />
                            </div>
                            <div className="w-full py-14 bg-primary rounded-2xl flex flex-col justify-center items-center">
                                <div className="max-w-3xl px-6 md:px-12 flex flex-col justify-start items-start">
                                    <p className="self-stretch text-center text-white text-[28px] font-medium leading-[33.60px]">Nossa missão é celebrar suas conquistas, espalhar amor pela educação e apoiar quem dedica a vida a ensinar.<br />Porque, no fim das contas, quando apoiamos professores, transformamos o futuro de todos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <footer className="w-full bg-primary text-primary-foreground">
        <div className="bg-accent h-5 self-stretch" />
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold">SóEducador</span>
                    </Link>
                    <p className="text-base text-primary-foreground/90">Inspirando você a mudar o mundo 🌎</p>
                </div>
                <div className="h-px w-full bg-primary-foreground/20" />
                <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-primary-foreground/80">
                    COPYRIGHT ©{new Date().getFullYear()}. INCI - INSTITUTO NACIONAL DE APERFEIÇOAMENTO PROFISSIONAL - CNPJ: 36.692.668/0001-94
                    </p>
                    <div className="flex justify-center space-x-6">
                        <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
