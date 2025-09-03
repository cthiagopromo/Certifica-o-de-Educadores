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
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0 justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
              <span className="text-xl font-bold">Sóeducador</span>
            </Link>
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-primary-foreground/80">
              &copy; {year} Sóeducador. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
