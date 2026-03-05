
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Utensils, Leaf, Flame, Sparkles, Clock, ArrowRight } from 'lucide-react';

const MENU_CATEGORIES = [
  { id: 'balanced', title: 'Menu Équilibré', icon: <Utensils size={20} />, price: '15,000 FCFA' },
  { id: 'slim', title: 'Menu Minceur', icon: <Leaf size={20} />, price: '12,500 FCFA' },
  { id: 'sport', title: 'Menu Sportif', icon: <Flame size={20} />, price: '18,000 FCFA' },
  { id: 'premium', title: 'Menu Premium', icon: <Sparkles size={20} />, price: '35,000 FCFA' },
];

const DISHES = [
  { id: 1, title: 'Saumon Atlantique Bio', desc: 'Pavé de saumon rôti, quinoa aux herbes et asperges croquantes.', calories: '450 kcal', price: '22,000 FCFA', img: 'healthy-meal' },
  { id: 2, title: 'Poke Bowl Prestige', desc: 'Thon rouge, avocat mûr, mangue fraîche et riz noir impérial.', calories: '380 kcal', price: '18,500 FCFA', img: 'healthy-meal' },
  { id: 3, title: 'Filet de Bœuf Wagyu', desc: 'Bœuf de haute qualité, purée de patate douce et sauce truffe.', calories: '620 kcal', price: '45,000 FCFA', img: 'healthy-meal' },
  { id: 4, title: 'Salade de Chèvre Chaud', desc: 'Mélange de jeunes pousses, miel bio et noix de pécan.', calories: '320 kcal', price: '14,000 FCFA', img: 'healthy-meal' },
];

export default function NutritionPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="space-y-12 soft-reveal">
          <Badge variant="outline" className="border-primary/40 text-primary px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Nutrition & Gastronomie VIP</Badge>
          <div className="space-y-6">
            <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">L'Art de se <br/> Nourrir.</h1>
            <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Une cuisine haute couture pour une performance biologique optimale.</p>
          </div>
        </header>

        {/* Categories Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_CATEGORIES.map((cat) => (
            <Card key={cat.id} className="bg-zinc-900/40 border-white/5 rounded-[2.5rem] p-10 hover:border-primary/30 transition-all group cursor-pointer">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{cat.title}</h3>
              <p className="text-primary font-bold text-lg">{cat.price}</p>
            </Card>
          ))}
        </section>

        {/* Featured Dishes */}
        <section className="space-y-16">
          <h2 className="text-5xl font-serif font-bold luxury-gold-gradient">La Carte du Chef</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {DISHES.map((dish) => (
              <div key={dish.id} className="flex flex-col md:flex-row gap-12 group">
                <div className="relative w-full md:w-64 aspect-square rounded-[2rem] overflow-hidden">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === dish.img)?.imageUrl || ""} 
                    alt={dish.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[4000ms]" 
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{dish.title}</h4>
                    <p className="text-zinc-500 font-light italic text-lg leading-relaxed">{dish.desc}</p>
                  </div>
                  <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                    <span className="flex items-center gap-3"><Flame size={14} className="text-orange-500/60" /> {dish.calories}</span>
                    <span className="flex items-center gap-3 text-primary">{dish.price}</span>
                  </div>
                  <Button variant="outline" className="rounded-full border-white/10 px-8 h-12 uppercase font-bold text-[9px] tracking-widest hover:bg-primary hover:text-black">
                    Ajouter au Panier
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detox Section */}
        <section className="bg-zinc-900/60 rounded-[4rem] p-24 border border-white/5 flex flex-col md:flex-row items-center gap-24 group shadow-3xl">
           <div className="space-y-12 flex-1">
             <div className="space-y-6 text-center md:text-left">
               <Badge className="bg-green-500/10 text-green-500 border-none px-8 py-2 rounded-full font-bold uppercase text-[10px] tracking-[0.4em]">Cure Détox</Badge>
               <h2 className="text-6xl font-serif font-bold leading-tight uppercase">Éveil <br/> <span className="luxury-gold-gradient">Solaire</span>.</h2>
               <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Nos jus pressés à froid et nos smoothies détox sont conçus pour régénérer votre système en profondeur.</p>
             </div>
             <Button size="lg" className="w-full md:w-auto rounded-full px-20 bg-primary text-black font-bold uppercase tracking-widest shadow-2xl">Explorer les Boissons</Button>
           </div>
           <div className="relative w-full md:w-96 aspect-[3/4] rounded-[3rem] overflow-hidden">
             <Image src="https://picsum.photos/seed/detox-juice/600/800" alt="Detox" fill className="object-cover" />
           </div>
        </section>
      </main>
    </div>
  );
}
