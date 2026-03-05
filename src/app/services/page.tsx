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
  const defaultImg = "https://picsum.photos/seed/services/800/1000";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-24 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-20 md:space-y-32">
        <header className="space-y-8 md:space-y-12 soft-reveal">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 py-2 uppercase text-[10px] tracking-widest font-bold rounded-full">Univers des Services VIP</Badge>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-[8rem] font-serif luxury-gold-gradient tracking-tighter leading-none font-bold">Nos Univers <br/> de Prestige.</h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl italic leading-relaxed">Choisissez votre voie vers la sublimation totale.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {UNIVERSES.map((universe) => (
            <Link key={universe.id} href={universe.href}>
              <Card className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-border bg-card/50 hover:border-primary/50 transition-all duration-700 shadow-xl">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === universe.img)?.imageUrl || defaultImg} 
                  alt={universe.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-12 flex flex-col justify-end gap-8">
                  <div className="text-primary p-4 bg-background/80 w-fit rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                    {universe.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-4xl font-serif font-bold uppercase leading-none">{universe.title}</h3>
                    <p className="text-muted-foreground font-light italic text-base leading-relaxed">{universe.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 text-primary font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                    Explorer l'univers <ArrowRight size={16} />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <section className="bg-card rounded-[2.5rem] p-16 md:p-24 border border-border shadow-2xl flex flex-col items-center text-center space-y-10 soft-reveal">
          <Gem className="text-primary animate-pulse" size={56} />
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Un Service Sur Mesure ?</h2>
            <p className="text-muted-foreground text-xl md:text-2xl font-light italic leading-relaxed">Nos concierges sont disponibles 24/7 pour organiser vos sessions personnalisées et répondre à vos besoins les plus spécifiques.</p>
          </div>
          <Link href="/booking">
            <Button size="lg" className="px-16 md:px-24 h-20 md:h-24 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-lg md:text-xl hover:scale-105 transition-all shadow-2xl">
              Contacter un Concierge
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
