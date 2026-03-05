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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/5 md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:scale-110 transition-transform">
            <Crown size={22} />
          </div>
          <span className="font-headline font-bold text-2xl tracking-tighter luxury-gold-gradient">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-10 items-center h-full ml-8">
          <NavLink href="/" icon={<Home size={20} />} label="Palais" active={pathname === '/'} />
          <NavLink href="/booking" icon={<Sparkles size={20} />} label="Services VIP" active={pathname === '/booking'} />
          <NavLink href="/fitness" icon={<Dumbbell size={20} />} label="Athlète" active={pathname === '/fitness'} />
          <NavLink href="/library" icon={<BookOpen size={20} />} label="Savoir" active={pathname === '/library'} />
          <NavLink href="/profile" icon={<User size={20} />} label="Espace Élite" active={pathname === '/profile'} />
          
          <button 
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 text-zinc-600 hover:text-primary transition-all px-3 py-1.5 rounded-full border border-transparent hover:border-primary/20"
          >
             <LogOut size={16} />
             <span className="text-[10px] font-bold uppercase tracking-widest">Quitter</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col md:flex-row items-center gap-1.5 md:gap-2.5 transition-all px-3 py-2 rounded-xl",
      active 
        ? "text-primary bg-primary/5 shadow-[inset_0_0_10px_rgba(255,215,0,0.05)]" 
        : "text-zinc-600 hover:text-white"
    )}>
      <span className={cn("transition-transform duration-300", active && "scale-110")}>{icon}</span>
      <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">{label}</span>
    </Link>
  );
}
