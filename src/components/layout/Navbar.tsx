'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Activity, User, Home, Crown, LogOut, Settings, ShoppingCart, Sun, Moon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
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

  const hideOn = ['/login'];
  if (hideOn.includes(pathname)) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-2xl border-t border-border md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <Crown size={20} />
          </div>
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tighter luxury-gold-gradient hidden sm:block uppercase">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-6 lg:gap-10 items-center h-full">
          <NavLink href="/" icon={<Home size={18} />} label="Palais" active={pathname === '/'} />
          <NavLink href="/services" icon={<Sparkles size={18} />} label="Services" active={pathname.startsWith('/services')} />
          <NavLink href="/tracking" icon={<Activity size={18} />} label="Suivi" active={pathname.startsWith('/tracking')} />
          <NavLink href="/cart" icon={<ShoppingCart size={18} />} label="Panier" active={pathname === '/cart'} />
          <NavLink href="/profile" icon={<User size={18} />} label="Profil" active={pathname === '/profile'} />
          
          <div className="hidden md:flex items-center gap-4 pl-6 border-l border-border h-10">
            <button 
              onClick={toggleTheme} 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => router.push('/settings')} className="text-muted-foreground hover:text-primary transition-colors">
              <Settings size={20} />
            </button>
            <button onClick={() => router.push('/login')} className="text-muted-foreground hover:text-destructive transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col md:flex-row items-center gap-1 md:gap-2 transition-all px-2 md:px-3 py-1.5 rounded-xl group",
      active 
        ? "text-primary bg-primary/5" 
        : "text-muted-foreground hover:text-foreground"
    )}>
      <span className={cn("transition-transform duration-500 group-hover:scale-110", active && "scale-110")}>{icon}</span>
      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </Link>
  );
}
