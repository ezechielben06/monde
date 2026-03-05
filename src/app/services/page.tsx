
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Dumbbell, Utensils, ShoppingBag, Brain, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const UNIVERSES = [
  { id: 'beauty', title: 'Beauté & Esthétique', icon: <Sparkles />, desc: 'Coiffure, Manucure, Soins Visage & Corps.', img: 'beauty-face' },
  { id: 'fitness', title: 'Sport & Fitness', icon: <Dumbbell />, desc: 'Accès salle, Coach privé, Programmes sur mesure.', img: 'hiit-workout' },
  { id: 'nutrition', title: 'Nutrition & Gastronomie', icon: <Utensils />, desc: 'Menus équilibrés, Diet sportive, Smoothies detox.', img: 'healthy-meal' },
  { id: 'shopping', title: 'Luxury Shopping', icon: <ShoppingBag />, desc: 'Habillement, Chaussures, Accessoires & Essayage IA.', img: 'shopping-fashion' },
  { id: 'coaching', title: 'Coaching & Mental', icon: <Brain />, desc: 'Confiance en soi, Transformation, Mentalité Élite.', img: 'coaching-meditation' },
];

export default function ServicesMenuPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="space-y-8 soft-reveal">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 py-2 uppercase text-[10px] tracking-[0.5em] font-bold rounded-full">Univers des Services</Badge>
          <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.85]">Nos Univers <br/> de Prestige.</h1>
          <p className="text-2xl text-zinc-500 font-light max-w-3xl italic">Sélectionnez votre voie vers la sublimation.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {UNIVERSES.map((universe, idx) => (
            <Link key={universe.id} href={`/services/${universe.id}`}>
              <Card className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border-white/5 bg-zinc-900/20 hover:border-primary/40 transition-all duration-700 shadow-2xl">
                <Image src={`https://picsum.photos/seed/${universe.id}/600/800`} alt={universe.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110 opacity-50 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end gap-6">
                  <div className="text-primary p-4 bg-zinc-900/60 w-fit rounded-2xl group-hover:bg-primary group-hover:text-black transition-all duration-700">
                    {universe.icon}
                  </div>
                  <h3 className="text-4xl font-serif font-bold uppercase leading-none">{universe.title}</h3>
                  <p className="text-zinc-400 font-light italic text-sm">{universe.desc}</p>
                  <div className="flex items-center gap-4 text-primary font-bold uppercase text-[10px] tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-700">
                    Explorer <ArrowRight size={14} />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
