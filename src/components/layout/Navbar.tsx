'use client';

import Link from 'next/link';
import { Sparkles, Activity, User, Home, Crown, LogOut, Settings, ShoppingCart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const hideOn = ['/login'];
  if (hideOn.includes(pathname)) return null;

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-2xl border-t border-white/5 md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 md:gap-6 group">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-black shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
            <Crown size={24} className="md:w-7 md:h-7" />
          </div>
          <span className="font-serif font-bold text-2xl md:text-4xl tracking-tighter luxury-gold-gradient hidden sm:block uppercase">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-8 lg:gap-12 items-center h-full">
          <NavLink href="/" icon={<Home size={20} />} label="Palais" active={pathname === '/'} />
          <NavLink href="/services" icon={<Sparkles size={20} />} label="Services" active={pathname.startsWith('/services')} />
          <NavLink href="/tracking" icon={<Activity size={20} />} label="Suivi" active={pathname.startsWith('/tracking')} />
          <NavLink href="/cart" icon={<ShoppingCart size={20} />} label="Panier" active={pathname === '/cart'} />
          <NavLink href="/profile" icon={<User size={20} />} label="Profil" active={pathname === '/profile'} />
          
          <div className="hidden md:flex items-center gap-4 lg:gap-6 pl-6 lg:pl-8 border-l border-white/5 h-12">
            <button onClick={() => router.push('/settings')} className="text-zinc-600 hover:text-primary transition-colors">
              <Settings size={20} />
            </button>
            <button onClick={handleLogout} className="text-zinc-600 hover:text-red-500 transition-colors">
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
      "flex flex-col md:flex-row items-center gap-1 md:gap-3 transition-all px-2 md:px-4 py-2 rounded-2xl group",
      active 
        ? "text-primary bg-primary/5" 
        : "text-zinc-600 hover:text-white"
    )}>
      <span className={cn("transition-all duration-1000 group-hover:scale-110", active && "scale-110 rotate-6")}>{icon}</span>
      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">{label}</span>
    </Link>
  );
}
