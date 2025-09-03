import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      <main className="flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center gap-12 overflow-hidden px-4 md:px-8">
            <section id="hero" className="w-full max-w-[1312px] p-14 my-8 bg-primary rounded-[48px] text-primary-foreground">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col justify-start items-start gap-8 max-w-xl">
                        <div className="text-4xl font-bold text-primary-foreground">SóEducador</div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-6">
                            <h1 className="self-stretch text-white text-5xl md:text-6xl font-bold leading-tight">Imagine ser lembrado como o professor(a) que mudou a vida de seus alunos.</h1>
                            <p className="self-stretch text-lg md:text-xl text-gray-200">
                              Abrimos inscrições para a Certificação de Educadores, com <span className="text-pink-400">bolsas de 50% de desconto.</span> Acreditamos que cada professor carrega dentro de si o poder de transformar o futuro.
                            </p>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-5">
                            <Button asChild className="px-12 py-7 text-xl font-medium bg-white text-primary rounded-2xl hover:bg-gray-200 flex-shrink-0">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                            <div className="text-purple-200 text-lg">Agora chegou a sua vez de ser essa inspiração.</div>
                        </div>
                    </div>
                    <Image className="w-full max-w-[475px] h-auto rounded-xl hidden lg:block" width={475} height={444} src="https://picsum.photos/475/444" alt="Professor inspirador" data-ai-hint="inspiring teacher" />
                </div>
            </section>
            <section id="programs" className="self-stretch py-14 flex justify-center items-center">
                <div className="w-full max-w-[1312px] flex flex-col lg:flex-row justify-between items-center gap-10 px-4">
                    <div className="w-full lg:w-[651px] flex flex-col justify-start items-start gap-4">
                        <div className="px-4 py-2 bg-muted rounded-lg flex justify-start items-start">
                            <div className="text-primary text-lg font-bold leading-snug">Conheça a formação contemplada</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-2">
                            <h2 className="self-stretch text-foreground text-5xl font-semibold leading-tight">Um programa feito para apoiar você em cada passo.</h2>
                            <p className="self-stretch text-muted-foreground text-xl font-normal leading-normal">A Certificação de Educadores reúne de 1 a 3 cursos online, com conteúdo pensado para o dia a dia da sala de aula. Nada de teoria distante ou inacessível. Aqui, você vai encontrar formações práticas, aplicáveis e inspiradoras.</p>
                        </div>
                        <div className="self-stretch py-4 flex flex-col justify-start items-start gap-1">
                            <p className="self-stretch"><span className="text-foreground text-base font-normal leading-tight">Quer tornar suas aulas mais envolventes?</span><Link href="#" className="text-accent text-base font-semibold underline leading-tight"> Temos materiais para isso.</Link></p>
                            <p className="self-stretch"><span className="text-foreground text-base font-normal leading-tight">Quer se sentir mais seguro em frente aos alunos? </span><Link href="#" className="text-accent text-base font-semibold underline leading-tight">Você vai conquistar essa confiança.</Link></p>
                            <p className="self-stretch"><span className="text-foreground text-base font-normal leading-tight">Quer abrir caminhos para novas oportunidades na educação? </span><Link href="#" className="text-accent text-base font-semibold underline leading-tight">A certificação abre portas.</Link></p>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                            <Button asChild className="px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl text-xl font-medium">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                            <p className="self-stretch text-muted-foreground text-xl font-normal leading-normal">E o melhor: você faz tudo no seu ritmo, de onde estiver, sem deixar de lado sua rotina.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[556px] flex flex-col justify-center items-start gap-4">
                        <div className="self-stretch flex flex-col sm:flex-row justify-start items-center gap-4">
                            <div className="flex-1 w-full p-8 bg-muted rounded-3xl shadow-lg flex justify-center items-start">
                                <p className="text-muted-foreground text-2xl font-medium leading-7">✅ Torne-se referência entre colegas e alunos.</p>
                            </div>
                            <div className="flex-1 w-full p-8 bg-muted rounded-3xl shadow-lg flex justify-center items-start">
                                <p className="text-muted-foreground text-2xl font-medium leading-7">✅ Traga mais criatividade e inovação para suas aulas.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-auto p-8 bg-muted rounded-3xl shadow-lg flex justify-center items-start">
                            <p className="text-muted-foreground text-2xl font-medium leading-7">✅ Viva a satisfação de ensinar com ainda mais impacto.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="self-stretch h-px bg-border" />
            <div className="self-stretch px-4 md:px-16 flex flex-col justify-center items-center gap-2.5">
                <div className="w-full max-w-[1312px] flex flex-col justify-start items-center gap-10">
                    <div className="flex flex-col justify-start items-center gap-6">
                        <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="justify-center text-primary text-lg font-bold leading-snug">Quem pode se inscrever?</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h2 className="w-full max-w-[672px] text-center text-foreground text-5xl font-semibold leading-tight">Se você acredita no poder da educação, este programa é para você.</h2>
                            <p className="self-stretch text-center text-muted-foreground text-xl font-normal leading-normal">A Certificação de Educadores é destinada a todos que têm a missão de ensinar e aprender:</p>
                        </div>
                    </div>
                    <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col justify-start items-center gap-6">
                            <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/192" alt="Professor atualizado" data-ai-hint="teacher classroom" />
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <div className="w-32 h-0.5 bg-primary" />
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Professores que querem se atualizar e se destacar.</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center gap-6">
                            <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/193" alt="Coordenadores e gestores" data-ai-hint="school coordinator meeting" />
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <div className="w-32 h-0.5 bg-primary" />
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Coordenadores e gestores que buscam novas perspectivas para a escola.</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center gap-6">
                            <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/194" alt="Estudantes de pedagogia" data-ai-hint="pedagogy student studying" />
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <div className="w-32 h-0.5 bg-primary" />
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Estudantes de Pedagogia que desejam entrar no mercado mais preparados.</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center gap-6">
                            <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/195" alt="Pais e educadores" data-ai-hint="parents helping child" />
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <div className="w-32 h-0.5 bg-primary" />
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Pais, mães e educadores que acreditam na educação como caminho de transformação.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border" />
            <div className="self-stretch px-4 md:px-16 flex flex-col justify-center items-center gap-2.5">
                <div className="w-full max-w-[1312px] flex flex-col justify-start items-center gap-10">
                    <div className="flex flex-col justify-start items-center gap-6">
                        <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="justify-center text-primary text-lg font-bold leading-snug">Como funciona o processo seletivo</div>
                            </div>
                        </div>
                        <h2 className="w-full max-w-[672px] text-center text-foreground text-5xl font-semibold leading-tight">O processo é simples, humano e rápido.</h2>
                    </div>
                    <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col justify-start items-start">
                            <div className="self-stretch flex flex-col justify-start items-center gap-7">
                                <div className="self-stretch relative flex justify-center items-center">
                                    <div className="w-full h-px absolute top-1/2 -translate-y-1/2 bg-primary/20" />
                                    <div className="px-2.5 py-0.5 relative bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                        <div className="text-primary-foreground text-lg font-bold">1</div>
                                    </div>
                                </div>
                                <div className="w-full h-60 p-8 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-center text-center">
                                    <p className="text-foreground text-2xl font-normal leading-7">Você preenche o formulário com seus dados.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start mt-0 md:mt-8">
                            <div className="self-stretch flex flex-col justify-start items-center gap-7">
                                <div className="self-stretch relative flex justify-center items-center">
                                    <div className="w-full h-px absolute top-1/2 -translate-y-1/2 bg-primary/20" />
                                    <div className="px-2.5 py-0.5 relative bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                        <div className="text-primary-foreground text-lg font-bold">2</div>
                                    </div>
                                </div>
                                <div className="w-full h-60 p-8 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-center text-center">
                                    <p className="text-foreground text-2xl font-normal leading-7">Nossa equipe analisa cada perfil com cuidado, valorizando o <span className="font-bold">potencial impacto</span> que você pode gerar na educação.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start mt-0 md:mt-16">
                            <div className="self-stretch flex flex-col justify-start items-center gap-7">
                                <div className="self-stretch relative flex justify-center items-center">
                                    <div className="w-full h-px absolute top-1/2 -translate-y-1/2 bg-primary/20" />
                                    <div className="px-2.5 py-0.5 relative bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                        <div className="text-primary-foreground text-lg font-bold">3</div>
                                    </div>
                                </div>
                                <div className="w-full h-60 p-8 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-center text-center">
                                    <p className="text-foreground text-2xl font-normal leading-7">Se aprovado, você recebe uma mensagem de parabéns e o link para garantir sua matrícula com<span className="font-bold"> 50% de bolsa.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-center items-center gap-4">
                        <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                            <Link href="#apply">QUERO MINHA BOLSA</Link>
                        </Button>
                        <p className="self-stretch text-center text-muted-foreground text-xl font-normal leading-normal">É direto, sem burocracia e pensado para não tirar seu foco do que realmente importa: ensinar.</p>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border" />
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch px-4 md:px-16 py-24 bg-primary rounded-3xl flex justify-center items-center overflow-hidden relative">
                     <Image src="https://picsum.photos/1312/400" alt="Vagas limitadas" layout="fill" objectFit="cover" className="z-0 opacity-20" data-ai-hint="abstract texture" />
                    <div className="relative z-10 flex flex-col justify-start items-center gap-6 max-w-2xl text-center">
                        <div className="w-24 h-24 p-6 bg-[#F8B6FE] rounded-2xl shadow-lg flex justify-center items-center">
                            <span className="text-4xl font-bold">🚨</span>
                        </div>
                        <div className="self-stretch flex flex-col justify-center items-center gap-4">
                            <h2 className="text-white text-6xl font-bold leading-tight"> As bolsas são limitadas.</h2>
                            <p className="self-stretch text-white/90 text-lg font-normal leading-snug">As bolsas realmente são concedidas conforme a ordem de inscrição.<br/>Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.</p>
                        </div>
                        <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                            <Link href="#apply">QUERO MINHA BOLSA</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border" />
            <div className="w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center px-4 md:px-8">
                <div className="w-full max-w-[1312px] flex flex-col justify-start items-start gap-6 py-14">
                    <div className="w-full max-w-[803px] flex flex-col justify-start items-start gap-2">
                        <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="justify-center text-primary text-base font-semibold leading-normal">Sobre a SóEducador</div>
                            </div>
                        </div>
                        <h2 className="w-full max-w-[494px] text-foreground text-5xl font-semibold leading-tight">Quem somos e por que fazemos isso</h2>
                        <p className="self-stretch text-muted-foreground text-xl font-normal leading-normal">A SóEducador nasceu com um propósito simples e poderoso: estar ao lado dos professores. Sabemos que a educação no Brasil é cheia de desafios — mas também sabemos que cada professor carrega dentro de si a chama da transformação.</p>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
                        <Image className="w-full lg:w-96 self-stretch rounded-2xl object-cover" width={384} height={609} src="https://picsum.photos/384/609" alt="Educator" data-ai-hint="educator teaching" />
                        <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-4">
                            <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4">
                                <Image className="flex-1 h-80 object-cover rounded-2xl" width={416} height={320} src="https://picsum.photos/416/320" alt="Classroom" data-ai-hint="classroom students" />
                                <Image className="flex-1 h-80 object-cover rounded-2xl" width={416} height={320} src="https://picsum.photos/417/320" alt="Teacher helping student" data-ai-hint="teacher student" />
                            </div>
                            <div className="self-stretch py-14 bg-primary rounded-2xl flex flex-col justify-center items-center text-center">
                                <div className="max-w-[848px] px-12 flex flex-col justify-start items-start">
                                    <p className="self-stretch text-white text-3xl font-medium leading-loose">Nossa missão é celebrar suas conquistas, espalhar amor pela educação e apoiar quem dedica a vida a ensinar. Porque, no fim das contas, quando apoiamos professores, transformamos o futuro de todos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border" />
        </div>
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
