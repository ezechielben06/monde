'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, Camera, Heart, ShoppingCart, ArrowRight, Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const CATEGORIES = [
  {
    id: 'woman',
    title: 'Femme',
    sections: [
      { name: 'Prêt-à-Porter', items: ['Robes de Soirée', 'Ensembles Soie', 'Pantalons Couture', 'Jupes Plissées'] },
      { name: 'Souliers', items: ['Talons Aiguilles', 'Bottes Cuir', 'Sandales Bijoux'] }
    ],
    img: 'shopping-fashion'
  },
  {
    id: 'man',
    title: 'Homme',
    sections: [
      { name: 'Tailoring', items: ['Chemises Mesure', 'Ensembles Business', 'Pantalons Flanelle'] },
      { name: 'Souliers', items: ['Richelieus', 'Baskets Prestige', 'Bottes Chelsea'] }
    ],
    img: 'shopping-fashion'
  },
  {
    id: 'accessories',
    title: 'Accessoires & Bijoux',
    sections: [
      { name: 'Joaillerie', items: ['Colliers Or', 'Bracelets Diamant', 'Bagues Signatures', 'Boucles d’Oreilles'] },
      { name: 'Maroquinerie', items: ['Sacs à Main', 'Ceintures Cuir', 'Montres Chrono', 'Lunettes Solaire'] }
    ],
    img: 'shopping-accessories'
  }
];

const FEATURED_PRODUCTS = [
  { id: 1, title: "Robe Émeraude Impériale", price: "450,000 FCFA", img: "shopping-fashion", badge: "Rare" },
  { id: 2, title: "Montre Or Rose v2", price: "1,200,000 FCFA", img: "shopping-accessories", badge: "Prestige" },
  { id: 3, title: "Sac Croco Signature", price: "3,500,000 FCFA", img: "shopping-accessories", badge: "Unique" },
  { id: 4, title: "Costume Trois-Pièces Noir", price: "550,000 FCFA", img: "shopping-fashion", badge: "Sur Mesure" },
];

export default function ShoppingPage() {
  const defaultImg = "https://picsum.photos/seed/shopping-prestige/800/1000";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-16 space-y-24 md:space-y-32">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-16 soft-reveal">
          <div className="space-y-8 md:space-y-12 text-center md:text-left">
            <Badge variant="outline" className="border-primary/40 text-primary px-8 md:px-10 py-2 md:py-3 uppercase text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] font-bold rounded-full">Boutique des Maîtres</Badge>
            <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">La Haute <br className="hidden md:block"/> Acquisition.</h1>
            <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">Une sélection pointue de pièces d'exception, sublimée par l'innovation IA.</p>
          </div>
          <Link href="/services/shopping/virtual-try-on" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto bg-white text-black hover:bg-primary rounded-full px-12 md:px-16 h-20 md:h-24 font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] shadow-3xl transition-all group border-none text-sm md:text-base">
              <Camera size={24} className="mr-4 md:mr-6 group-hover:rotate-12 transition-transform" /> Essayage Virtuel IA
            </Button>
          </Link>
        </header>

        <Tabs defaultValue="woman" className="space-y-16 md:space-y-24">
          <TabsList className="bg-transparent h-auto flex gap-4 md:gap-8 border-none p-0 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
            {CATEGORIES.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-white/5 px-8 md:px-12 py-4 md:py-8 rounded-2xl md:rounded-3xl text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all whitespace-nowrap"
              >
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="soft-reveal focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
                <div className="lg:col-span-4 xl:col-span-3 space-y-12">
                  {cat.sections.map((section, sidx) => (
                    <div key={sidx} className="space-y-6 md:space-y-8">
                      <h4 className="text-xl md:text-2xl font-bold uppercase tracking-widest border-l-2 border-primary pl-4 md:pl-6">{section.name}</h4>
                      <ul className="space-y-3 md:space-y-4">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="text-zinc-500 hover:text-primary cursor-pointer transition-colors text-lg md:text-xl font-light italic flex items-center justify-between group">
                            {item} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                   {FEATURED_PRODUCTS.map((product) => (
                    <Card key={product.id} className="group relative overflow-hidden border-white/5 bg-zinc-900/20 rounded-[2rem] md:rounded-[3rem] transition-all hover:border-primary/40 shadow-2xl">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image 
                          src={PlaceHolderImages.find(p => p.id === product.img)?.imageUrl || defaultImg}
                          alt={product.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute top-6 md:top-10 left-6 md:left-10">
                          <Badge className="bg-primary text-black font-bold uppercase text-[8px] md:text-[9px] px-4 md:px-6 py-1 md:py-2 rounded-full tracking-[0.2em] md:tracking-[0.3em] shadow-lg border-none">{product.badge}</Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 md:gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <Button size="icon" className="rounded-full bg-white text-black hover:bg-primary w-14 h-14 md:w-20 md:h-20 shadow-2xl border-none active:scale-90 transition-transform">
                            <ShoppingCart size={24} />
                          </Button>
                          <Button size="icon" className="rounded-full bg-zinc-900/80 text-primary hover:bg-white hover:text-black w-14 h-14 md:w-20 md:h-20 border border-white/10 shadow-2xl active:scale-90 transition-transform">
                            <Heart size={24} />
                          </Button>
                        </div>
                      </div>
                      <div className="p-8 md:p-12 space-y-3 md:space-y-4">
                        <h3 className="text-xl md:text-3xl font-serif font-bold group-hover:text-primary transition-colors leading-tight uppercase">{product.title}</h3>
                        <p className="text-xl md:text-2xl font-bold luxury-gold-gradient">{product.price}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
