"use client";

import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-accent h-5 self-stretch" />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    <span className="text-2xl font-bold">SóEducador</span>
                </Link>
                <p className="text-base text-primary-foreground/90">Inspirando você a mudar o mundo 🌎</p>
            </div>
            <div className="h-px w-full bg-primary-foreground/20" />
            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-xs text-primary-foreground/80">
                COPYRIGHT ©{year}. INCI - INSTITUTO NACIONAL DE APERFEIÇOAMENTO PROFISSIONAL - CNPJ: 36.692.668/0001-94
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
  );
}