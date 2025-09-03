import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VacanciesSection() {
  return (
    <section id="vacancies" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
            <div style={{width: 90, height: 90, padding: 24, background: 'var(--Sufarce-Brand-Secondary-surface-brand-secondary--disabled, #F8B6FE)', boxShadow: '0px 2px 2px -1px rgba(10, 13, 18, 0.03)', overflow: 'hidden', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--Text-Global-text-title, #171717)', fontSize: 40, fontFamily: 'Rethink Sans', fontWeight: '700', lineHeight: '43.20px', wordWrap: 'break-word'}}>🚨</div>
            </div>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex'}}>
                <div style={{width: 672, textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--Text-Global-text-global-inverted--default, #FAFAFA)', fontSize: 56, fontFamily: 'Rethink Sans', fontWeight: '700', lineHeight: '64.96px', wordWrap: 'break-word'}}> As bolsas são limitadas.</div>
                <div style={{width: '100%', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--Text-Global-text-global-inverted--default, #FAFAFA)', fontSize: 18, fontFamily: 'Rethink Sans', fontWeight: 400, lineHeight: '21.60px', wordWrap: 'break-word'}}>As bolsas realmente são concedidas conforme a ordem de inscrição.<br/>Cada vaga preenchida é uma oportunidade a menos para outro educador.  Então, se você sente que esse chamado é para você, aproveite agora.</div>
            </div>
            <div style={{paddingLeft: 48, paddingRight: 48, paddingTop: 24, paddingBottom: 24, background: 'var(--Button-Success-button-success--default, #16A34A)', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                  <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 px-12 py-6 text-xl rounded-2xl">
                    <Link href="#apply">QUERO MINHA BOLSA</Link>
                  </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
