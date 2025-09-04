
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Users, GraduationCap, Briefcase, HeartHandshake } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      <main className="flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center gap-12 overflow-hidden px-4 sm:px-8 md:px-16">
            <section id="hero" className="w-full max-w-[82rem] p-6 md:p-14 my-8 bg-primary rounded-[3rem] text-primary-foreground">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col justify-start items-start gap-4 max-w-xl">
                    <Image 
                        src="https://soeducador.com.br/assets/img/site/logo/logo-wide-white-full.png"
                        alt="SóEducador Logo"
                        width={250}
                        height={39}
                        className="w-60 h-auto"
                    />
                        <div className="self-stretch flex flex-col justify-start items-start gap-6">
                            <h1 className="self-stretch text-white text-3xl md:text-4xl font-bold leading-tight md:leading-10">Imagine ser lembrado como o professor(a) que mudou a vida de seus alunos.</h1>
                            <p className="self-stretch text-lg text-gray-200">
                              Abrimos inscrições para a Certificação de Educadores, com <span className="text-[#F8B6FE]">bolsas de 50% de desconto.</span> Acreditamos que cada professor carrega dentro de si o poder de transformar o futuro.
                            </p>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-5">
                            <Button asChild className="px-12 py-8 bg-white text-black rounded-2xl text-xl font-medium hover:bg-gray-200 transform hover:scale-105 transition-all duration-200">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                            <div className="text-lg font-normal leading-snug text-[#F8B6FE]">Agora chegou a sua vez de ser essa inspiração.</div>
                        </div>
                    </div>
                    <div className="w-full max-w-md">
                        <Image 
                            className="rounded-3xl w-full h-auto" 
                            width={616}
                            height={444}
                            src="https://i.postimg.cc/j23qDSfr/professor-s-educador.webp" 
                            alt="Professora inspiradora sorrindo"
                            data-ai-hint="inspiring teacher"
                        />
                    </div>
                </div>
            </section>
            <section id="programs" className="self-stretch py-10 md:py-14 flex justify-center items-center">
                <div className="w-full max-w-[82rem] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 px-4">
                    <div className="flex flex-col items-start gap-6 lg:w-1/2">
                        <div className="px-4 py-2 bg-muted rounded-lg flex justify-start items-start">
                            <div className="text-primary text-base md:text-lg font-bold leading-snug">Conheça a formação contemplada</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                            <h2 className="self-stretch text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight -tracking-tight">Um programa feito para apoiar você em cada passo.</h2>
                            <p className="self-stretch text-muted-foreground text-base md:text-lg lg:text-xl font-normal leading-normal">A Certificação de Educadores reúne de 1 a 3 cursos online, com conteúdo pensado para o dia a dia da sala de aula. Nada de teoria distante ou inacessível. Aqui, você vai encontrar formações práticas, aplicáveis e inspiradoras.</p>
                        </div>
                        <div className="self-stretch py-4 flex flex-col justify-start items-start gap-2 text-base text-foreground">
                            <p>
                                <span className="font-normal">Quer tornar suas aulas mais envolventes?</span>
                                <span className="font-semibold text-primary underline"> Temos materiais para isso.</span>
                            </p>
                            <p>
                                <span className="font-normal">Quer se sentir mais seguro em frente aos alunos? </span> 
                                <span className="font-semibold text-primary underline">Você vai conquistar essa confiança.</span>
                            </p>
                            <p>
                                <span className="font-normal">Quer abrir caminhos para novas oportunidades na educação? </span> 
                                <span className="font-semibold text-primary underline">A certificação abre portas.</span>
                            </p>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                           <Button asChild className="px-12 py-8 rounded-2xl text-lg md:text-xl font-medium bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200">
                                <Link href="#apply">QUERO MINHA BOLSA</Link>
                            </Button>
                            <p className="self-stretch text-muted-foreground text-base md:text-lg lg:text-xl font-normal leading-normal">E o melhor: você faz tudo no seu ritmo, de onde estiver, sem deixar de lado sua rotina.</p>
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
                        <div className="p-6 bg-muted rounded-3xl shadow-custom flex flex-col justify-center items-start transform hover:scale-105 transition-all duration-200 hover:shadow-md">
                            <p className="self-stretch text-muted-foreground text-xl md:text-2xl font-medium leading-7">✅ Torne-se referência entre colegas e alunos.</p>
                        </div>
                        <div className="p-6 bg-muted rounded-3xl shadow-custom flex flex-col justify-center items-start transform hover:scale-105 transition-all duration-200 hover:shadow-md">
                            <p className="self-stretch text-muted-foreground text-xl md:text-2xl font-medium leading-7">✅ Traga mais criatividade e inovação para suas aulas.</p>
                        </div>
                        <div className="p-6 bg-muted rounded-3xl shadow-custom flex flex-col justify-center items-start transform hover:scale-105 transition-all duration-200 hover:shadow-md">
                           <p className="self-stretch text-muted-foreground text-xl md:text-2xl font-medium leading-7">✅ Viva a satisfação de ensinar com ainda mais impacto.</p>
                        </div>
                        <div className="p-6 bg-transparent rounded-3xl flex flex-col justify-center items-start">
                        </div>
                    </div>
                </div>
            </section>
            <div className="self-stretch h-px bg-border" />
            <div className="self-stretch px-4 flex flex-col justify-center items-center gap-2.5">
                <div className="w-full max-w-[82rem] flex flex-col justify-start items-center gap-10 py-10 md:py-14">
                    <div className="flex flex-col justify-start items-center gap-6">
                        <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="justify-center text-primary text-base md:text-lg font-bold leading-snug">Quem pode se inscrever?</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h2 className="w-full max-w-[42rem] text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight">Se você acredita no poder da educação, este programa é para você.</h2>
                            <p className="self-stretch text-center text-muted-foreground text-lg md:text-xl font-normal max-w-[42rem] leading-tight tracking-tight">A Certificação de Educadores é destinada a todos que têm a missão de ensinar e aprender:</p>
                        </div>
                    </div>
                    <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
                        
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-32 h-0.5 bg-primary/20" />
                            <div className="self-stretch p-6 bg-primary/5 rounded-3xl flex flex-col justify-start items-start gap-4">
                                <div className="w-10 h-10 p-2 bg-primary/10 rounded-lg flex justify-center items-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Professores que querem se atualizar e se destacar.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-32 h-0.5 bg-primary/20" />
                            <div className="self-stretch p-6 bg-primary/5 rounded-3xl flex flex-col justify-start items-start gap-4">
                                <div className="w-10 h-10 p-2 bg-primary/10 rounded-lg flex justify-center items-center">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Coordenadores e gestores que buscam novas perspectivas para a escola.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-32 h-0.5 bg-primary/20" />
                            <div className="self-stretch p-6 bg-primary/5 rounded-3xl flex flex-col justify-start items-start gap-4">
                                <div className="w-10 h-10 p-2 bg-primary/10 rounded-lg flex justify-center items-center">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <p className="self-stretch text-foreground text-xl font-normal leading-normal">Estudantes de Pedagogia que desejam entrar no mercado mais preparados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border" />
            <section id="how-it-works" className="w-full max-w-[82rem] py-10 md:py-14 flex flex-col items-center gap-10 px-4">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="px-4 py-2 bg-muted rounded-lg">
                        <span className="text-primary text-base md:text-lg font-bold">Como funciona o processo seletivo</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-foreground max-w-2xl text-center leading-tight -tracking-tighter">O processo é simples, humano e rápido.</h2>
                </div>
                <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="w-full flex flex-col items-center gap-8">
                        <div className="self-stretch relative flex justify-center items-center">
                            <div className="w-full h-px absolute top-1/2 bg-[#EDD9FF]"></div>
                            <div className="relative px-2.5 py-0.5 bg-primary rounded-[0.625rem] border-[0.09375rem] border-white flex justify-center items-center z-10">
                                <span className="text-lg font-bold text-primary-foreground">1</span>
                            </div>
                        </div>
                        <div className="w-full min-h-[15rem] p-8 bg-muted rounded-3xl shadow-md outline outline-1 outline-offset-[-0.0625rem] outline-border flex flex-col justify-center items-start text-left transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                            <p className="self-stretch text-xl md:text-2xl text-foreground">Você preenche o formulário com seus dados.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-8 md:mt-8">
                        <div className="self-stretch relative flex justify-center items-center">
                            <div className="w-full h-px absolute top-1/2 bg-[#EDD9FF]"></div>
                            <div className="relative px-2.5 py-0.5 bg-primary rounded-[0.625rem] border-[0.09375rem] border-white flex justify-center items-center z-10">
                                <span className="text-lg font-bold text-primary-foreground">2</span>
                            </div>
                        </div>
                        <div className="w-full min-h-[15rem] p-8 bg-muted rounded-3xl shadow-md outline outline-1 outline-offset-[-0.0625rem] outline-border flex flex-col justify-center items-start text-left transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                           <p className="self-stretch text-xl md:text-2xl text-foreground">
                                <span className="font-normal">Nossa equipe analisa cada perfil com cuidado, valorizando o </span>
                                <span className="font-bold">potencial impacto</span>
                                <span className="font-normal"> que você pode gerar na educação.</span>
                           </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-8 md:mt-16">
                        <div className="self-stretch relative flex justify-center items-center">
                            <div className="w-full h-px absolute top-1/2 bg-[#EDD9FF]"></div>
                            <div className="relative px-2.5 py-0.5 bg-primary rounded-[0.625rem] border-[0.09375rem] border-white flex justify-center items-center z-10">
                                <span className="text-lg font-bold text-primary-foreground">3</span>
                            </div>
                        </div>
                        <div className="w-full min-h-[15rem] p-8 bg-muted rounded-3xl shadow-md outline outline-1 outline-offset-[-0.0625rem] outline-border flex flex-col justify-center items-start text-left transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                           <p className="self-stretch text-xl md:text-2xl text-foreground">
                               <span className="font-normal">Se aprovado, você recebe uma mensagem de parabéns e o link para garantir sua matrícula com</span>
                               <span className="font-bold"> 50% de bolsa.</span>
                           </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                   <Button asChild className="px-12 py-8 rounded-2xl text-lg md:text-xl font-medium bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200">
                        <Link href="#apply">QUERO MINHA BOLSA</Link>
                    </Button>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl">É direto, sem burocracia e pensado para não tirar seu foco do que realmente importa: ensinar.</p>
                </div>
            </section>
            <div className="self-stretch h-px bg-border" />
            <div className="w-full max-w-[82rem]">
                <div
                    className="relative w-full bg-primary px-4 md:px-8 py-24 rounded-3xl flex justify-center items-center overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-3xl">
                        <div className="w-24 h-24 p-6 bg-[#F8B6FE] rounded-2xl shadow-lg flex justify-center items-center">
                            <span className="text-5xl leading-10">🚨</span>
                        </div>
                        <div className="self-stretch flex flex-col justify-center items-center gap-4">
                            <h2 className="text-white text-6xl font-bold leading-tight animate-fade-in"> As bolsas são limitadas.</h2>
                            <p className="self-stretch text-white text-lg font-normal leading-snug">
                                As bolsas realmente são concedidas conforme a ordem de inscrição.
                                <br />
                                Cada vaga preenchida é uma oportunidade a menos para outro educador. Então, se você sente que esse chamado é para você, aproveite agora.
                            </p>
                        </div>
                         <Button asChild className="px-12 py-8 rounded-2xl text-lg md:text-xl font-medium bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200">
                            <Link href="#apply">QUERO MINHA BOLSA</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border my-12" />
            <div className="w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center px-4 md:px-8">
                <div className="w-full max-w-[82rem] flex flex-col justify-start items-start gap-6 py-10 md:py-14">
                    <div className="w-full max-w-[50.1875rem] flex flex-col justify-start items-start gap-2">
                        <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                            <div className="inline-flex justify-start items-center gap-2">
                                <div className="justify-center text-primary text-base font-semibold leading-normal">Sobre a SóEducador</div>
                            </div>
                        </div>
                        <h2 className="w-full text-foreground text-4xl md:text-5xl font-semibold leading-tight">Quem somos e por que fazemos isso</h2>
                        <p className="self-stretch text-muted-foreground text-lg md:text-xl font-normal leading-normal">A SóEducador nasceu com um propósito simples e poderoso: estar ao lado dos professores. Sabemos que a educação no Brasil é cheia de desafios — mas também sabemos que cada professor carrega dentro de si a chama da transformação.</p>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
                        <Image className="w-full lg:w-96 self-stretch rounded-2xl object-cover" width={384} height={609} src="https://i.postimg.cc/cJF7hPV4/professor-rosa-s-educador.webp" alt="Educadora sorrindo" data-ai-hint="educator teaching" />
                        <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-4">
                            <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-4">
                                <Image className="flex-1 h-80 object-cover rounded-2xl" width={416} height={320} src="https://i.postimg.cc/xjwv6vFH/professora-amarela-s-educador.webp" alt="Professora com blusa amarela" data-ai-hint="teacher smiling" />
                                <Image className="flex-1 h-80 object-cover rounded-2xl" width={417} height={320} src="https://i.postimg.cc/RZDVTRgx/professora-azul-s-educador.webp" alt="Teacher helping student" data-ai-hint="teacher student" />
                            </div>
                            <div className="self-stretch flex-1 p-8 md:py-14 md:px-12 bg-primary rounded-2xl flex flex-col justify-center items-center text-center">
                                <div className="max-w-[53rem] flex flex-col justify-start items-start">
                                    <p className="self-stretch text-white text-2xl md:text-[1.75rem] font-medium leading-snug md:leading-[1.2] tracking-tighter">Nossa missão é celebrar suas conquistas, espalhar amor pela educação e apoiar quem dedica a vida a ensinar. Porque, no fim das contas, quando apoiamos professores, transformamos o futuro de todos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-px bg-border mt-12" />
        </div>
      </main>
      <footer className="w-full bg-primary text-primary-foreground">
        <div className="bg-[#ED42FD] h-5 self-stretch" />
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="https://soeducador.com.br/assets/img/site/logo/logo-wide-white-full.png" alt="SóEducador Logo" width={720} height={112} className="h-auto w-88" />
                    </Link>
                    <p className="text-base text-primary-foreground/90 flex items-center gap-2">Inspirando você a mudar o mundo 🌎</p>
                </div>
                <div className="h-px w-full bg-primary-foreground/20" />
                <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-center md:text-left text-primary-foreground/80">
                    COPYRIGHT ©{new Date().getFullYear()}. INCI - INSTITUTO NACIONAL DE APERFEIÇOAMENTO PROFISSIONAL - CNPJ: 36.692.668/0001-94
                    </p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
