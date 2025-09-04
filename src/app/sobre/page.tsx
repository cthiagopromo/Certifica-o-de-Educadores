// src/app/sobre/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="text-center max-w-2xl mx-auto p-8 rounded-lg shadow-lg bg-card">
        <h1 className="text-4xl font-bold mb-4 text-primary">Como Fazer um Commit no Git</h1>
        <p className="text-lg mb-8 text-muted-foreground">
          Siga estes passos para salvar suas alterações no Git. Um "commit" é como tirar uma foto do seu projeto em um momento específico.
        </p>
        
        <div className="text-left space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Passo 1: Verifique as Alterações</h2>
            <p className="mb-2">Primeiro, verifique quais arquivos você modificou. Use o comando:</p>
            <code className="block bg-muted p-3 rounded-md text-sm font-mono">git status</code>
            <p className="mt-2 text-sm text-muted-foreground">Isso listará todos os arquivos que foram alterados.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Passo 2: Adicione os Arquivos ao "Pacote"</h2>
            <p className="mb-2">Agora, diga ao Git quais arquivos incluir no seu commit. Para adicionar todos os arquivos modificados, use:</p>
            <code className="block bg-muted p-3 rounded-md text-sm font-mono">git add .</code>
            <p className="mt-2 text-sm text-muted-foreground">O `.` significa "adicione tudo neste diretório e subdiretórios".</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Passo 3: Crie o "Pacote" com uma Mensagem (Commit)</h2>
            <p className="mb-2">Este é o passo em que você salva as alterações. Cada commit precisa de uma mensagem descritiva:</p>
            <code className="block bg-muted p-3 rounded-md text-sm font-mono">git commit -m "Descreva suas alterações aqui"</code>
            <p className="mt-2 text-sm text-muted-foreground">Exemplo: <code className="text-xs">git commit -m "Refatora a seção 'Como funciona' e ajusta responsividade"</code></p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Passo 4: Envie suas Alterações (Push)</h2>
            <p className="mb-2">Se você estiver trabalhando com um repositório remoto (como no GitHub), envie seus commits para lá:</p>
            <code className="block bg-muted p-3 rounded-md text-sm font-mono">git push</code>
            <p className="mt-2 text-sm text-muted-foreground">E pronto! Suas alterações foram salvas e enviadas.</p>
          </div>
        </div>

        <Button asChild className="mt-8">
          <Link href="/">
            Voltar para a Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
