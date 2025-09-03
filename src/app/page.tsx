import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ProgramSection from '@/components/landing/program-section';
import TargetAudienceSection from '@/components/landing/target-audience-section';
import ApplicationProcessSection from '@/components/landing/application-process-section';
import VacanciesSection from '@/components/landing/vacancies-section';
import AboutSection from '@/components/landing/about-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProgramSection />
        <TargetAudienceSection />
        <ApplicationProcessSection />
        <VacanciesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
