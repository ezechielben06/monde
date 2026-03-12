'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Activity, User, Home, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname === '/login') return null;

  const NAV_ITEMS = [
    { href: '/', icon: <Home size={22} />, label: 'Accueil' },
    { href: '/services', icon: <Sparkles size={22} />, label: 'Univers' },
    { href: '/tracking', icon: <Activity size={22} />, label: 'Suivi' },
    { href: '/cart', icon: <ShoppingCart size={22} />, label: 'Panier' },
    { href: '/profile', icon: <User size={22} />, label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-2xl border-t border-border md:top-0 md:bottom-auto md:border-b md:border-t-0 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 h-24 flex items-center justify-around md:justify-end md:gap-8 lg:gap-12">
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={cn(
              "flex flex-col items-center gap-1.5 transition-all px-4 py-2 rounded-2xl group relative",
              pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className={cn(
              "transition-transform duration-300",
              (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) && "scale-110"
            )}>
              {item.icon}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] md:block hidden">
              {item.label}
            </span>
            {(pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) && (
              <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}