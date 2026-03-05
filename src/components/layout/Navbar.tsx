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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-3xl border-t border-white/5 md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-primary rounded-[1.25rem] flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            <Crown size={26} />
          </div>
          <span className="font-headline font-bold text-3xl tracking-tighter luxury-gold-gradient hidden sm:block">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-12 items-center h-full ml-10">
          <NavLink href="/" icon={<Home size={22} />} label="Palais" active={pathname === '/'} />
          <NavLink href="/booking" icon={<Sparkles size={22} />} label="Privilèges" active={pathname === '/booking'} />
          <NavLink href="/fitness" icon={<Dumbbell size={22} />} label="Athlète" active={pathname === '/fitness'} />
          <NavLink href="/library" icon={<BookOpen size={22} />} label="Savoir" active={pathname === '/library'} />
          <NavLink href="/profile" icon={<User size={22} />} label="Profil Élite" active={pathname === '/profile'} />
          
          <button 
            onClick={handleLogout}
            className="hidden md:flex items-center gap-3 text-zinc-500 hover:text-primary transition-all duration-500 px-5 py-2.5 rounded-full border border-transparent hover:border-primary/20 hover:bg-primary/5"
          >
             <LogOut size={18} />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Quitter</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col md:flex-row items-center gap-2 md:gap-3 transition-all px-4 py-3 rounded-2xl group",
      active 
        ? "text-primary bg-primary/5 shadow-[inset_0_0_20px_rgba(212,175,55,0.1)]" 
        : "text-zinc-500 hover:text-white"
    )}>
      <span className={cn("transition-all duration-500 group-hover:scale-110", active && "scale-110 rotate-6")}>{icon}</span>
      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.25em]">{label}</span>
    </Link>
  );
}