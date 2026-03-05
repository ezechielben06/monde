import Link from 'next/link';
import { Sparkles, Dumbbell, User, Home, BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-border md:top-0 md:bottom-auto md:border-b md:border-t-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:bg-accent transition-colors shadow-lg shadow-primary/20">
            <Sparkles size={18} />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-primary">B-right</span>
        </Link>

        <div className="flex flex-1 justify-around md:justify-end md:gap-8 items-center h-full ml-4">
          <NavLink href="/" icon={<Home size={20} />} label="Accueil" />
          <NavLink href="/booking" icon={<Sparkles size={20} />} label="Services" />
          <NavLink href="/fitness" icon={<Dumbbell size={20} />} label="Sport" />
          <NavLink href="/library" icon={<BookOpen size={20} />} label="Ressources" />
          <NavLink href="/profile" icon={<User size={20} />} label="Profil" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md">
      {icon}
      <span className="text-[10px] md:text-sm font-medium">{label}</span>
    </Link>
  );
}
