import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50 flex justify-center">
      <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="w-[1312px] flex flex-col justify-start items-start gap-6">
            <div className="w-[803px] flex flex-col justify-start items-start gap-2">
              <div className="px-4 py-2 bg-muted rounded-lg flex flex-col justify-start items-start">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="justify-center text-primary text-base font-semibold leading-normal">Sobre a SóEducador</div>
                </div>
              </div>
              <div className="w-[494px] justify-center text-foreground text-5xl font-semibold leading-[57.60px]">Quem somos e por que fazemos isso</div>
              <div className="self-stretch justify-center text-muted-foreground text-xl font-normal leading-normal">A SóEducador nasceu com um propósito simples e poderoso: estar ao lado dos professores. Sabemos que a educação no Brasil é cheia de desafios — mas também sabemos que cada professor carrega dentro de si a chama da transformação.</div>
            </div>
            <div className="w-[1280px] inline-flex justify-start items-start gap-4">
              <Image className="w-96 self-stretch rounded-2xl" src="https://picsum.photos/416/609" width={416} height={609} alt="Educator" data-ai-hint="educator teaching" />
              <div className="w-[848px] self-stretch inline-flex flex-col justify-start items-start gap-4">
                <div className="w-[848px] inline-flex justify-start items-start gap-4">
                  <Image className="w-96 h-80" src="https://picsum.photos/416/345" width={416} height={345} alt="Classroom" data-ai-hint="classroom students" />
                  <Image className="w-96 h-80" src="https://picsum.photos/416/345" width={416} height={345} alt="Teacher helping student" data-ai-hint="teacher student" />
                </div>
                <div className="w-[848px] py-14 bg-primary rounded-2xl flex flex-col justify-center items-center">
                  <div className="max-w-[848px] px-12 flex flex-col justify-start items-start">
                    <div className="self-stretch text-center justify-center text-white text-3xl font-medium leading-loose">Nossa missão é celebrar suas conquistas, espalhar amor pela educação e apoiar quem dedica a vida a ensinar.<br />             Porque, no fim das contas, quando apoiamos professores, transformamos o futuro de todos.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
