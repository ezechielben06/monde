'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Activity, User, Home, Crown, LogOut, Settings, ShoppingCart, Sun, Moon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) return null;

  const hideOn = ['/login'];
  if (hideOn.includes(pathname)) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-background/90 backdrop-blur-3xl border-t border-border md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-2xl transition-all duration-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-primary rounded-[1rem] md:rounded-[1.25rem] flex items-center justify-center text-primary-foreground shadow-xl group-hover:scale-110 transition-all duration-500">
            <Crown size={24} className="md:w-8 md:h-8" />
          </div>
          <span className="font-serif font-bold text-xl md:text-3xl tracking-tighter luxury-gold-gradient hidden sm:block uppercase">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-6 lg:gap-12 items-center h-full px-2 md:px-0">
          <NavLink href="/" icon={<Home size={22} />} label="Palais" active={pathname === '/'} />
          <NavLink href="/services" icon={<Sparkles size={22} />} label="Services" active={pathname.startsWith('/services')} />
          <NavLink href="/tracking" icon={<Activity size={22} />} label="Suivi" active={pathname.startsWith('/tracking')} />
          <NavLink href="/cart" icon={<ShoppingCart size={22} />} label="Panier" active={pathname === '/cart'} />
          <NavLink href="/profile" icon={<User size={22} />} label="Profil" active={pathname === '/profile'} />
          
          <div className="flex items-center gap-2 md:gap-6 md:ml-6 md:pl-10 md:border-l border-border h-12">
            <button 
              onClick={toggleTheme} 
              className="text-muted-foreground hover:text-primary transition-all p-3 rounded-full hover:bg-primary/10 active:scale-90"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={24} className="md:w-7 md:h-7" /> : <Moon size={24} className="md:w-7 md:h-7" />}
            </button>
            <div className="hidden md:flex items-center gap-4">
              <button onClick={() => router.push('/settings')} className="text-muted-foreground hover:text-primary transition-all p-3 hover:bg-muted rounded-full">
                <Settings size={26} />
              </button>
              <button onClick={() => router.push('/login')} className="text-muted-foreground hover:text-destructive transition-all p-3 hover:bg-destructive/10 rounded-full">
                <LogOut size={26} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col md:flex-row items-center gap-1.5 md:gap-4 transition-all px-2 md:px-5 py-2 md:py-3 rounded-2xl group min-w-[60px] md:min-w-0",
      active 
        ? "text-primary bg-primary/10 shadow-inner" 
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    )}>
      <span className={cn("transition-transform duration-500 group-hover:scale-125", active && "scale-110")}>{icon}</span>
      <span className="text-[8px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">{label}</span>
    </Link>
  );
}
