
import Link from 'next/link';
import { GitCommit, Terminal, CheckCircle, UploadCloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GitCommitGuidePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-lg font-semibold hover:underline">
            &larr; Voltar para a Home
          </Link>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <GitCommit className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Como Fazer um Commit no Git
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-10">
            "Fazer um commit" significa salvar suas alterações no histórico do projeto. É como criar um ponto de salvamento (save point) no seu trabalho. Siga estes passos para fazer isso de forma correta.
          </p>

          <div className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Terminal className="w-6 h-6 text-primary" />
                  Passo 1: Verifique o Status das Mudanças
                </CardTitle>
                <Badge variant="secondary">git status</Badge>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-base leading-relaxed">
                  Antes de tudo, abra seu terminal na pasta do projeto e use o comando `git status`. Ele mostrará quais arquivos foram modificados, quais são novos (untracked) e quais estão prontos para serem salvos (staged).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
                  <code>
{`$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/app/page.tsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/app/nova-pagina.tsx

no changes added to commit (use "git add" and/or "git commit -a")`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Passo 2: Adicione os Arquivos (Stage)
                </CardTitle>
                <Badge variant="secondary">git add</Badge>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-base leading-relaxed">
                  Agora, você precisa dizer ao Git quais arquivos quer salvar neste commit. Isso é chamado de "staging".
                </p>
                <ul className="space-y-4">
                  <li>
                    <p><strong>Para adicionar todas as alterações:</strong></p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm mt-2"><code>$ git add .</code></pre>
                  </li>
                  <li>
                    <p><strong>Para adicionar um arquivo específico:</strong></p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm mt-2"><code>$ git add src/app/page.tsx</code></pre>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GitCommit className="w-6 h-6 text-primary" />
                  Passo 3: Faça o Commit
                </CardTitle>
                <Badge variant="secondary">git commit</Badge>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-base leading-relaxed">
                  Com os arquivos em "stage", é hora de criar o ponto de salvamento com uma mensagem descritiva. A mensagem deve explicar o que você fez.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm"><code>$ git commit -m "feat: Adiciona guia de como fazer commit"</code></pre>
                <p className="mt-4 text-sm text-muted-foreground"><strong>Dica:</strong> Uma boa mensagem de commit é curta, clara e começa com um verbo no presente (ex: "Adiciona", "Corrige", "Altera").</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <UploadCloud className="w-6 h-6 text-primary" />
                  Passo 4: Envie para o Repositório Remoto
                </CardTitle>
                <Badge variant="secondary">git push</Badge>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-base leading-relaxed">
                  Por fim, envie seus commits locais para o servidor remoto (como GitHub ou Firebase App Hosting) para que outros possam ver suas alterações e para que fiquem salvas na nuvem.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm"><code>$ git push</code></pre>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold">Parabéns!</h2>
            <p className="text-muted-foreground mt-2">Você completou o ciclo básico do Git e salvou seu trabalho com sucesso.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
