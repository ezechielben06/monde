
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Dumbbell, Utensils, ShoppingBag, Brain, ArrowRight, Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const UNIVERSES = [
  { 
    id: 'beauty', 
    title: 'Beauté & Esthétique', 
    icon: <Sparkles />, 
    desc: 'Coiffure, Manucure, Soins Visage & Corps de prestige.', 
    img: 'beauty-hair',
    href: '/services/beauty'
  },
  { 
    id: 'fitness', 
    title: 'Sport & Fitness', 
    icon: <Dumbbell />, 
    desc: 'Accès salle VIP, Coach privé, Programmes d\'élite.', 
    img: 'hiit-workout',
    href: '/fitness'
  },
  { 
    id: 'nutrition', 
    title: 'Nutrition & Gastronomie', 
    icon: <Utensils />, 
    desc: 'Menus gastronomiques équilibrés, Diet sportive haute couture.', 
    img: 'healthy-meal',
    href: '/services/nutrition'
  },
  { 
    id: 'shopping', 
    title: 'Luxury Shopping', 
    icon: <ShoppingBag />, 
    desc: 'Habillement, Accessoires & Essayage Virtuel par IA.', 
    img: 'shopping-fashion',
    href: '/services/shopping'
  },
  { 
    id: 'coaching', 
    title: 'Coaching & Mental', 
    icon: <Brain />, 
    desc: 'Développement personnel, Mentalité Élite & Transformation.', 
    img: 'coaching-meditation',
    href: '/library'
  },
];

export default function ServicesUniversePage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="space-y-12 soft-reveal">
          <Badge variant="outline" className="border-primary/40 text-primary px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Univers des Services VIP</Badge>
          <div className="space-y-6">
            <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">Nos Univers <br/> de Prestige.</h1>
            <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Choisissez votre voie vers la sublimation totale.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {UNIVERSES.map((universe, idx) => (
            <Link key={universe.id} href={universe.href}>
              <Card className="group relative aspect-[3/4] rounded-[3.5rem] overflow-hidden border border-white/5 bg-zinc-900/20 hover:border-primary/50 transition-all duration-[1200ms] shadow-3xl">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === universe.img)?.imageUrl || `https://picsum.photos/seed/${universe.id}/600/800`} 
                  alt={universe.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-110 opacity-50 group-hover:opacity-100" 
                  data-ai-hint="luxury service"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-16 flex flex-col justify-end gap-10">
                  <div className="text-primary p-6 bg-zinc-900/80 w-fit rounded-3xl group-hover:bg-primary group-hover:text-black transition-all duration-1000 shadow-2xl">
                    {universe.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-5xl font-serif font-bold uppercase leading-none">{universe.title}</h3>
                    <p className="text-zinc-400 font-light italic text-lg leading-relaxed">{universe.desc}</p>
                  </div>
                  <div className="flex items-center gap-6 text-primary font-bold uppercase text-[10px] tracking-[0.6em] opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 duration-1000">
                    Explorer l'univers <ArrowRight size={18} />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <section className="bg-zinc-900/40 rounded-[4rem] p-24 border border-white/5 shadow-3xl flex flex-col items-center text-center space-y-12 soft-reveal">
          <Gem className="text-primary animate-pulse" size={64} />
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-6xl font-serif font-bold">Un Service Sur Mesure ?</h2>
            <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Nos concierges sont disponibles 24/7 pour organiser vos sessions personnalisées et répondre à vos besoins les plus spécifiques.</p>
          </div>
          <Link href="/booking">
            <Button size="lg" className="px-24 h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.5em] text-xl hover:bg-white transition-all shadow-2xl">
              Contacter un Concierge
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
