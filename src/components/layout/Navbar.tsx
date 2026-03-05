
'use client';

import Link from 'next/link';
import { Sparkles, Dumbbell, User, Home, BookOpen, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Don't show navbar on login page
  if (pathname === '/login') return null;

  const handleLogout = () => {
    // Simuler une déconnexion en redirigeant vers /login
    router.push('/login');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-border md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:bg-accent transition-colors shadow-lg shadow-primary/20">
            <Sparkles size={18} />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-primary">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-8 items-center h-full ml-4">
          <NavLink href="/" icon={<Home size={20} />} label="Accueil" active={pathname === '/'} />
          <NavLink href="/booking" icon={<Sparkles size={20} />} label="Services" active={pathname === '/booking'} />
          <NavLink href="/fitness" icon={<Dumbbell size={20} />} label="Sport" active={pathname === '/fitness'} />
          <NavLink href="/library" icon={<BookOpen size={20} />} label="Ressources" active={pathname === '/library'} />
          <NavLink href="/profile" icon={<User size={20} />} label="Profil" active={pathname === '/profile'} />
          
          <button 
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors px-2 py-1"
          >
             <LogOut size={18} />
             <span className="text-sm font-bold">Déconnexion</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string, active?: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col md:flex-row items-center gap-1 md:gap-2 transition-colors px-2 py-1 rounded-md",
      active ? "text-primary" : "text-muted-foreground hover:text-primary"
    )}>
      {icon}
      <span className="text-[10px] md:text-sm font-bold tracking-tight">{label}</span>
    </Link>
  );
}
