'use client';

import Link from 'next/link';
import { Sparkles, Dumbbell, User, Home, BookOpen, LogOut, Crown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  if (pathname === '/login') return null;

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-2xl border-t border-white/5 md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
      <div className="max-w-[1600px] mx-auto px-12 md:px-20 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-6 group">
          <div className="w-14 h-14 bg-primary rounded-[1.5rem] flex items-center justify-center text-black shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
            <Crown size={30} />
          </div>
          <span className="font-headline font-bold text-4xl tracking-tighter luxury-gold-gradient hidden sm:block">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-16 items-center h-full">
          <NavLink href="/" icon={<Home size={24} />} label="Palais" active={pathname === '/'} />
          <NavLink href="/booking" icon={<Sparkles size={24} />} label="Privilèges" active={pathname === '/booking'} />
          <NavLink href="/fitness" icon={<Dumbbell size={24} />} label="Athlète" active={pathname === '/fitness'} />
          <NavLink href="/library" icon={<BookOpen size={24} />} label="Savoir" active={pathname === '/library'} />
          <NavLink href="/profile" icon={<User size={24} />} label="Profil Élite" active={pathname === '/profile'} />
          
          <button 
            onClick={handleLogout}
            className="hidden md:flex items-center gap-4 text-zinc-600 hover:text-primary transition-all duration-1000 px-8 py-3 rounded-full border border-transparent hover:border-primary/30 hover:bg-primary/5"
          >
             <LogOut size={20} />
             <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Quitter</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col md:flex-row items-center gap-3 md:gap-4 transition-all px-6 py-4 rounded-2xl group",
      active 
        ? "text-primary bg-primary/5 shadow-[inset_0_0_30px_rgba(212,175,55,0.05)]" 
        : "text-zinc-600 hover:text-white"
    )}>
      <span className={cn("transition-all duration-1000 group-hover:scale-110", active && "scale-110 rotate-6")}>{icon}</span>
      <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em]">{label}</span>
    </Link>
  );
}