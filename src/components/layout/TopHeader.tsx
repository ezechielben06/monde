'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeft, Crown, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const PATH_TITLES: Record<string, string> = {
  '/': 'Palais B-right',
  '/services': 'Nos Univers',
  '/services/beauty': 'Haute Beauté',
  '/services/nutrition': 'Nutrition Élite',
  '/services/shopping': 'Boutique Maîtres',
  '/services/shopping/virtual-try-on': 'Miroir Virtuel IA',
  '/tracking': 'Transformation',
  '/tracking/analysis': 'Analyse Bio',
  '/tracking/gallery': 'Évolution Visuelle',
  '/tracking/goals': 'Quêtes Élite',
  '/cart': 'Mon Inventaire',
  '/profile': 'Profil Membre',
  '/settings': 'Configuration',
  '/booking': 'Conciergerie',
  '/checkout': 'Acquisition'
};

export function TopHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted || pathname === '/login') return null;

  const showBack = pathname !== '/';
  const title = PATH_TITLES[pathname] || 'B-right';

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] bg-background/80 backdrop-blur-xl border-b border-border/50 h-20 flex items-center px-6">
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBack ? (
            <button 
              onClick={() => router.back()}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          ) : (
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg">
              <Crown size={22} />
            </div>
          )}
          <h2 className="font-serif font-bold text-lg md:text-xl luxury-gold-gradient uppercase tracking-tight">
            {title}
          </h2>
        </div>

        <button 
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-90"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}