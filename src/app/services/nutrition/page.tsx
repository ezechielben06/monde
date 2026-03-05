
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Utensils, Leaf, Flame, Sparkles, Clock, ArrowRight, Star } from 'lucide-react';

const MENU_CATEGORIES = [
  { id: 'balanced', title: 'Menu Équilibré', icon: <Utensils size={24} />, price: '15,000 FCFA' },
  { id: 'slim', title: 'Menu Minceur', icon: <Leaf size={24} />, price: '12,500 FCFA' },
  { id: 'sport', title: 'Menu Sportif', icon: <Flame size={24} />, price: '18,000 FCFA' },
  { id: 'premium', title: 'Menu Premium', icon: <Sparkles size={24} />, price: '35,000 FCFA' },
];

const DISHES = [
  { id: 1, title: 'Saumon Atlantique Bio', desc: 'Pavé de saumon rôti, quinoa aux herbes et asperges croquantes du jardin.', calories: '450 kcal', price: '22,000 FCFA', img: 'healthy-meal' },
  { id: 2, title: 'Poke Bowl Prestige', desc: 'Thon rouge de ligne, avocat mûr, mangue fraîche et riz noir impérial.', calories: '380 kcal', price: '18,500 FCFA', img: 'healthy-meal' },
  { id: 3, title: 'Filet de Bœuf Wagyu', desc: 'Bœuf A5 haute qualité, purée de patate douce fumée et sauce truffe.', calories: '620 kcal', price: '45,000 FCFA', img: 'healthy-meal' },
  { id: 4, title: 'Salade de Chèvre Chaud', desc: 'Mélange de jeunes pousses, miel de lavande bio et noix de pécan caramélisées.', calories: '320 kcal', price: '14,000 FCFA', img: 'healthy-meal' },
];

export default function NutritionPage() {
  const defaultImg = "https://picsum.photos/seed/gourmet-default/800/600";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20 space-y-24 md:space-y-40">
        <header className="space-y-10 md:space-y-16 soft-reveal text-center md:text-left">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 md:px-12 py-3 uppercase text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-bold rounded-full">Nutrition & Gastronomie VIP</Badge>
          <div className="space-y-6 md:space-y-10">
            <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">L'Art de se <br className="hidden md:block"/> Nourrir.</h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">Une cuisine haute couture pour une performance biologique et hédoniste optimale.</p>
          </div>
        </header>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {MENU_CATEGORIES.map((cat) => (
            <Card key={cat.id} className="bg-card/40 border-border rounded-[3rem] p-12 hover:border-primary/40 transition-all group cursor-pointer shadow-xl text-center md:text-left">
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform flex justify-center md:justify-start">{cat.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">{cat.title}</h3>
              <p className="text-primary font-bold text-xl md:text-2xl luxury-gold-gradient">{cat.price}</p>
            </Card>
          ))}
        </section>

        {/* Featured Dishes */}
        <section className="space-y-16 md:space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
             <h2 className="text-4xl md:text-7xl font-serif font-bold luxury-gold-gradient uppercase leading-none">La Carte du Chef</h2>
             <p className="text-muted-foreground font-light italic text-xl">"Chaque ingrédient est une promesse de vitalité."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {DISHES.map((dish) => (
              <div key={dish.id} className="flex flex-col lg:flex-row gap-10 md:gap-16 group">
                <div className="relative w-full lg:w-72 aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-border shadow-2xl">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === dish.img)?.imageUrl || defaultImg} 
                    alt={dish.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="flex-1 space-y-6 md:space-y-10 py-4">
                  <div className="space-y-4 text-center lg:text-left">
                    <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{dish.title}</h4>
                    <p className="text-muted-foreground font-light italic text-lg md:text-xl leading-relaxed">{dish.desc}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground">
                    <span className="flex items-center gap-3"><Flame size={20} className="text-orange-500/60" /> {dish.calories}</span>
                    <span className="text-primary font-bold">{dish.price}</span>
                  </div>
                  <Button variant="outline" className="w-full lg:w-auto rounded-full border-border px-12 h-16 uppercase font-bold text-[10px] md:text-xs tracking-[0.4em] hover:bg-primary hover:text-primary-foreground shadow-xl">
                    Ajouter au Panier
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detox Section */}
        <section className="bg-card/60 backdrop-blur-3xl rounded-[4rem] md:rounded-[6rem] p-12 md:p-32 border border-border flex flex-col md:flex-row items-center gap-16 md:gap-32 group shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 left-0 p-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-[3000ms]">
              <Star size={150} className="text-primary" />
           </div>
           <div className="space-y-12 flex-1 relative z-10 text-center md:text-left">
             <div className="space-y-8">
               <Badge className="bg-green-500/10 text-green-500 border-none px-10 py-3 rounded-full font-bold uppercase text-[10px] tracking-[0.5em]">Cure Détox Royale</Badge>
               <h2 className="text-5xl md:text-8xl font-serif font-bold leading-tight uppercase">Éveil <br className="hidden md:block"/> <span className="luxury-gold-gradient">Solaire</span>.</h2>
               <p className="text-muted-foreground text-xl md:text-3xl font-light italic leading-relaxed">Nos jus pressés à froid et nos nectars protéinés sont conçus pour régénérer votre système en profondeur après vos sessions Élite.</p>
             </div>
             <Button size="lg" className="w-full md:w-auto rounded-full px-20 md:px-32 h-20 md:h-28 bg-foreground text-background font-bold uppercase tracking-[0.5em] shadow-3xl hover:bg-primary hover:text-primary-foreground transition-all text-lg h-auto py-6">
                Explorer les Élixirs
             </Button>
           </div>
           <div className="relative w-full md:w-[450px] aspect-[3/4] rounded-[4rem] md:rounded-[6rem] overflow-hidden border border-border shadow-3xl">
             <Image src="https://picsum.photos/seed/detox-juice/600/800" alt="Detox" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] opacity-80 group-hover:opacity-100" />
           </div>
        </section>
      </main>
    </div>
  );
}
