// src/app/sobre/page.tsx
import Link from 'next/link';

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg mb-8">
          Esta é uma página de exemplo gerada estaticamente com Next.js App Router.
        </p>
        <Link href="/" className="text-primary hover:underline">
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
