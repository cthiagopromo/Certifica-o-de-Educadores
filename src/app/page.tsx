import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      <main className="flex flex-col items-center">
        <div className="w-full pt-8 bg-background flex flex-col justify-center items-center gap-12 overflow-hidden">
            <div className="w-full max-w-[1312px] p-14 bg-purple-900 rounded-[48px] flex flex-col justify-center items-start gap-10">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="w-[583px] inline-flex flex-col justify-start items-start gap-8">
                        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                            <div data-aparence="White" data-product="SóEducador" data-size="Large" data-typo="Logo" className="w-80 h-12 flex flex-col justify-start items-center gap-2.5">
                                <div className="text-4xl font-bold text-violet-100">SóEducador</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-6">
                            <div className="self-stretch justify-center text-white text-6xl font-bold leading-[64.96px]">Imagine ser lembrado como o professor(a) que mudou a vida de seus alunos.</div>
                            <div className="w-[555px] justify-center"><span className="text-gray-100 text-xl font-medium leading-normal">Abrimos inscrições para a Certificação de Educadores, com </span><span className="text-pink-500 text-xl font-medium leading-normal">bolsas de 50% de desconto.</span><span className="text-gray-100 text-xl font-medium leading-normal"> Acreditamos que cada professor carrega dentro de si o poder de transformar o futuro.</span></div>
                        </div>
                        <div className="w-[541px] inline-flex justify-center items-center gap-5">
                            <Button asChild className="px-12 py-6 bg-white text-primary rounded-2xl hover:bg-gray-200 text-xl font-medium">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                            <div className="flex-1 justify-center text-purple-200 text-lg font-normal leading-snug">Agora chegou a sua vez de ser essa inspiração.</div>
                        </div>
                    </div>
                    <Image className="w-[475px] h-96 rounded-xl hidden lg:block" width={475} height={384} src="https://picsum.photos/475/384" alt="Professor inspirador" data-ai-hint="inspiring teacher" />
                </div>
            </div>
            <div className="self-stretch px-16 flex flex-col justify-start items-center gap-20">
                <div className="self-stretch py-14 inline-flex justify-center items-center">
                    <div className="w-full max-w-[1312px] flex justify-between items-center">
                        <div className="w-[651px] inline-flex flex-col justify-start items-start gap-4">
                            <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                                <div className="inline-flex justify-start items-center gap-2">
                                    <div className="justify-center text-primary text-lg font-bold leading-snug">Conheça a formação contemplada</div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <div className="self-stretch justify-center text-foreground text-5xl font-semibold leading-[57.60px]">Um programa feito para apoiar você em cada passo.</div>
                                <div className="self-stretch justify-center text-muted-foreground text-xl font-normal leading-normal">A Certificação de Educadores reúne de 1 a 3 cursos online, com conteúdo pensado para o dia a dia da sala de aula. Nada de teoria distante ou inacessível. Aqui, você vai encontrar formações práticas, aplicáveis e inspiradoras.</div>
                            </div>
                            <div className="self-stretch py-4 flex flex-col justify-start items-start gap-1">
                                <div className="self-stretch justify-center"><span className="text-foreground text-base font-normal leading-tight">Quer tornar suas aulas mais envolventes?</span><span className="text-foreground text-base font-semibold leading-tight"> </span><span className="text-accent text-base font-semibold underline leading-tight">Temos materiais para isso.</span></div>
                                <div className="self-stretch justify-center"><span className="text-foreground text-base font-normal leading-tight">Quer se sentir mais seguro em frente aos alunos? </span><span className="text-accent text-base font-semibold underline leading-tight">Você vai conquistar essa confiança.</span></div>
                                <div className="self-stretch justify-center"><span className="text-foreground text-base font-normal leading-tight">Quer abrir caminhos para novas oportunidades na educação? </span><span className="text-accent text-base font-semibold underline leading-tight">A certificação abre portas.</span></div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                                    <Link href="#apply">QUERO MINHA BOLSA</Link>
                                </Button>
                                <div className="self-stretch justify-center text-muted-foreground text-xl font-normal leading-normal">E o melhor: você faz tudo no seu ritmo, de onde estiver, sem deixar de lado sua rotina.</div>
                            </div>
                        </div>
                        <div className="w-[556px] inline-flex flex-col justify-center items-start gap-2">
                            <div className="self-stretch inline-flex justify-start items-center gap-4">
                                <div className="flex-1 h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-lg inline-flex flex-col justify-center items-start">
                                    <div className="self-stretch justify-center text-muted-foreground text-2xl font-medium leading-7">✅ Torne-se referência entre colegas e alunos.</div>
                                </div>
                                <div className="flex-1 h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-lg inline-flex flex-col justify-center items-start">
                                    <div className="self-stretch justify-center text-muted-foreground text-2xl font-medium leading-7">✅ Traga mais criatividade e inovação para suas aulas.</div>
                                </div>
                            </div>
                            <div className="w-64 h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-lg flex flex-col justify-center items-start">
                                <div className="self-stretch justify-center text-muted-foreground text-2xl font-medium leading-7">✅ Viva a satisfação de ensinar com ainda mais impacto.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px bg-border" />
                <div className="self-stretch px-16 flex flex-col justify-center items-center gap-2.5">
                    <div className="w-full max-w-[1312px] flex flex-col justify-start items-center gap-10">
                        <div className="flex flex-col justify-start items-center gap-6">
                            <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                                <div className="inline-flex justify-start items-center gap-2">
                                    <div className="justify-center text-primary text-lg font-bold leading-snug">Quem pode se inscrever?</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div className="w-[672px] text-center justify-center text-foreground text-5xl font-semibold leading-[57.60px]">Se você acredita no poder da educação, este programa é para você.</div>
                                <div className="self-stretch text-center justify-center text-muted-foreground text-xl font-normal leading-normal">A Certificação de Educadores é destinada a todos que têm a missão de ensinar e aprender:</div>
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start">
                            <div className="w-72 inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
                                <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/192" alt="Professor atualizado" data-ai-hint="teacher classroom" />
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <div className="w-32 h-0.5 bg-primary" />
                                    <div className="self-stretch justify-center text-foreground text-xl font-normal leading-normal">Professores que querem se atualizar e se destacar.</div>
                                </div>
                            </div>
                            <div className="w-72 inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
                                <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/193" alt="Coordenadores e gestores" data-ai-hint="school coordinator meeting" />
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <div className="w-32 h-0.5 bg-primary" />
                                    <div className="self-stretch justify-center text-foreground text-xl font-normal leading-normal">Coordenadores e gestores que buscam novas perspectivas para a escola.</div>
                                </div>
                            </div>
                            <div className="w-72 inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
                                <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/194" alt="Estudantes de pedagogia" data-ai-hint="pedagogy student studying" />
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <div className="w-32 h-0.5 bg-primary" />
                                    <div className="self-stretch justify-center text-foreground text-xl font-normal leading-normal">Estudantes de Pedagogia que desejam entrar no mercado mais preparados.</div>
                                </div>
                            </div>
                            <div className="w-72 inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
                                <Image className="self-stretch h-48 rounded-3xl object-cover" width={288} height={192} src="https://picsum.photos/288/195" alt="Pais e educadores" data-ai-hint="parents helping child" />
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <div className="w-32 h-0.5 bg-primary" />
                                    <div className="self-stretch justify-center text-foreground text-xl font-normal leading-normal">Pais, mães e educadores que acreditam na educação como caminho de transformação.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px bg-border" />
                <div className="self-stretch px-16 flex flex-col justify-center items-center gap-2.5">
                    <div className="w-full max-w-[1312px] flex flex-col justify-start items-center gap-10">
                        <div className="flex flex-col justify-start items-center gap-6">
                            <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                                <div className="inline-flex justify-start items-center gap-2">
                                    <div className="justify-center text-primary text-lg font-bold leading-snug">Como funciona o processo seletivo</div>
                                </div>
                            </div>
                            <div className="w-[672px] text-center justify-center text-foreground text-5xl font-semibold leading-[57.60px]">O processo é simples, humano e rápido.</div>
                        </div>
                        <div className="self-stretch inline-flex justify-center items-start gap-10">
                            <div className="w-96 inline-flex flex-col justify-start items-start">
                                <div className="self-stretch flex flex-col justify-start items-center gap-7">
                                    <div className="self-stretch relative inline-flex justify-center items-center overflow-hidden">
                                        <div className="w-96 h-px left-[1px] top-[14.50px] absolute bg-primary/20" />
                                        <div className="px-2.5 py-0.5 relative bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                            <div className="text-primary-foreground text-lg font-bold leading-snug">1</div>
                                        </div>
                                    </div>
                                    <div className="w-full h-60 max-w-[1280px] px-12 bg-muted rounded-3xl shadow-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-start">
                                        <div className="self-stretch justify-center text-foreground text-2xl font-normal leading-7 text-center">Você preenche o formulário com seus dados.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-96 inline-flex flex-col justify-start items-start">
                                <div className="self-stretch pt-8 flex flex-col justify-start items-center gap-7">
                                    <div className="self-stretch relative inline-flex justify-center items-center overflow-hidden">
                                        <div className="w-96 h-px left-[1px] top-[14.50px] absolute bg-primary/20" />
                                        <div className="px-2.5 py-0.5 relative bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                            <div className="text-primary-foreground text-lg font-bold leading-snug">2</div>
                                        </div>
                                    </div>
                                    <div className="w-full h-60 max-w-[1280px] px-8 bg-muted rounded-3xl shadow-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-start">
                                        <div className="self-stretch justify-center text-center"><span className="text-foreground text-2xl font-normal leading-7">Nossa equipe analisa cada perfil com cuidado, valorizando o </span><span className="text-foreground text-2xl font-bold leading-7">potencial impacto</span><span className="text-foreground text-2xl font-normal leading-7"> que você pode gerar na educação.</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-96 inline-flex flex-col justify-start items-start">
                                <div className="self-stretch pt-16 flex flex-col justify-start items-center gap-7">
                                    <div className="self-stretch relative inline-flex justify-center items-center overflow-hidden">
                                        <div className="w-96 h-px left-[1px] top-[14.50px] absolute bg-primary/20" />
                                        <div className="px-2.5 py-0.5 relative bg-primary rounded-full flex justify-center items-center border-2 border-background">
                                            <div className="text-primary-foreground text-lg font-bold leading-snug">3</div>
                                        </div>
                                    </div>
                                    <div className="w-full h-60 max-w-[1280px] px-8 bg-muted rounded-3xl shadow-lg outline outline-1 outline-offset-[-1px] outline-border flex flex-col justify-center items-start">
                                        <div className="self-stretch justify-center text-center"><span className="text-foreground text-2xl font-normal leading-7">Se aprovado, você recebe uma mensagem de parabéns e o link para garantir sua matrícula com</span><span className="text-foreground text-2xl font-bold leading-7"> 50% de bolsa.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-center items-center gap-4">
                            <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                            <div className="self-stretch text-center justify-center text-muted-foreground text-xl font-normal leading-normal">É direto, sem burocracia e pensado para não tirar seu foco do que realmente importa: ensinar.</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px bg-border" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch px-16 py-24 bg-primary rounded-3xl inline-flex justify-center items-center overflow-hidden relative">
                         <Image src="https://picsum.photos/1312/400" alt="Vagas limitadas" layout="fill" objectFit="cover" className="z-0 opacity-20" data-ai-hint="abstract texture" />
                        <div className="relative z-10 inline-flex flex-col justify-start items-center gap-6">
                            <div className="w-24 h-24 p-6 bg-[#F8B6FE] rounded-2xl shadow-lg inline-flex justify-center items-center overflow-hidden">
                                <div className="text-center justify-center text-gray-900 text-4xl font-bold leading-10">🚨</div>
                            </div>
                            <div className="self-stretch flex flex-col justify-center items-center gap-4">
                                <div className="w-[672px] text-center justify-center text-white text-6xl font-bold leading-[64.96px]"> As bolsas são limitadas.</div>
                                <div className="self-stretch text-center justify-center text-white/90 text-lg font-normal leading-snug">As bolsas realmente são concedidas conforme a ordem de inscrição.<br/>Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.</div>
                            </div>
                            <Button asChild className="px-12 py-6 bg-[#16A349] hover:bg-[#16A349]/90 text-white rounded-2xl text-xl font-medium">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px bg-border" />
                <div className="w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center">
                    <div className="w-full max-w-[1312px] flex flex-col justify-start items-start gap-6 py-14">
                        <div className="w-[803px] flex flex-col justify-start items-start gap-2">
                            <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                                <div className="inline-flex justify-start items-center gap-2">
                                    <div className="justify-center text-primary text-base font-semibold leading-normal">Sobre a SóEducador</div>
                                </div>
                            </div>
                            <div className="w-[494px] justify-center text-foreground text-5xl font-semibold leading-[57.60px]">Quem somos e por que fazemos isso</div>
                            <div className="self-stretch justify-center text-muted-foreground text-xl font-normal leading-normal">A SóEducador nasceu com um propósito simples e poderoso: estar ao lado dos professores. Sabemos que a educação no Brasil é cheia de desafios — mas também sabemos que cada professor carrega dentro de si a chama da transformação.</div>
                        </div>
                        <div className="w-full max-w-[1280px] inline-flex justify-start items-start gap-4">
                            <Image className="w-96 self-stretch rounded-2xl object-cover" width={384} height={609} src="https://picsum.photos/384/609" alt="Educator" data-ai-hint="educator teaching" />
                            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-4">
                                <div className="self-stretch inline-flex justify-start items-start gap-4">
                                    <Image className="flex-1 h-80 object-cover rounded-2xl" width={416} height={320} src="https://picsum.photos/416/320" alt="Classroom" data-ai-hint="classroom students" />
                                    <Image className="flex-1 h-80 object-cover rounded-2xl" width={416} height={320} src="https://picsum.photos/417/320" alt="Teacher helping student" data-ai-hint="teacher student" />
                                </div>
                                <div className="self-stretch py-14 bg-primary rounded-2xl flex flex-col justify-center items-center">
                                    <div className="max-w-[848px] px-12 flex flex-col justify-start items-start">
                                        <div className="self-stretch text-center justify-center text-white text-3xl font-medium leading-loose">Nossa missão é celebrar suas conquistas, espalhar amor pela educação e apoiar quem dedica a vida a ensinar. Porque, no fim das contas, quando apoiamos professores, transformamos o futuro de todos.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px bg-border" />
            </div>
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
