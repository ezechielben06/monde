'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, Star, Camera, Eye, Heart, ShoppingCart, ArrowRight, Gem, Search } from 'lucide-react';
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
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-16 soft-reveal">
          <div className="space-y-12">
            <Badge variant="outline" className="border-primary/40 text-primary px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Boutique des Maîtres</Badge>
            <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">La Haute <br/> Acquisition.</h1>
            <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Une sélection pointue de pièces d'exception, sublimée par l'innovation IA.</p>
          </div>
          <Link href="/services/shopping/virtual-try-on">
            <Button size="lg" className="bg-white text-black hover:bg-primary rounded-full px-16 h-24 font-bold uppercase tracking-[0.5em] shadow-3xl transition-all group border-none">
              <Camera size={24} className="mr-6 group-hover:rotate-12 transition-transform" /> Essayage Virtuel IA
            </Button>
          </Link>
        </header>

        <Tabs defaultValue="woman" className="space-y-24">
          <TabsList className="bg-transparent h-auto flex gap-8 border-none p-0 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-white/5 px-12 py-8 rounded-3xl text-sm font-bold uppercase tracking-[0.5em] transition-all"
              >
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="soft-reveal focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                <div className="lg:col-span-4 space-y-12">
                  {cat.sections.map((section, sidx) => (
                    <div key={sidx} className="space-y-8">
                      <h4 className="text-2xl font-bold uppercase tracking-widest border-l-2 border-primary pl-6">{section.name}</h4>
                      <ul className="space-y-4">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="text-zinc-500 hover:text-primary cursor-pointer transition-colors text-xl font-light italic flex items-center justify-between group">
                            {item} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                   {FEATURED_PRODUCTS.map((product) => (
                    <Card key={product.id} className="group relative overflow-hidden border-white/5 bg-zinc-900/20 rounded-[3rem] transition-all hover:border-primary/40 shadow-2xl">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image 
                          src={PlaceHolderImages.find(p => p.id === product.img)?.imageUrl || defaultImg}
                          alt={product.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute top-10 left-10">
                          <Badge className="bg-primary text-black font-bold uppercase text-[9px] px-6 py-2 rounded-full tracking-[0.3em] shadow-lg border-none">{product.badge}</Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <Button size="icon" className="rounded-full bg-white text-black hover:bg-primary w-20 h-20 shadow-2xl border-none active:scale-90 transition-transform">
                            <ShoppingCart size={30} />
                          </Button>
                          <Button size="icon" className="rounded-full bg-zinc-900/80 text-primary hover:bg-white hover:text-black w-20 h-20 border border-white/10 shadow-2xl active:scale-90 transition-transform">
                            <Heart size={30} />
                          </Button>
                        </div>
                      </div>
                      <div className="p-12 space-y-4">
                        <h3 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors leading-tight uppercase">{product.title}</h3>
                        <p className="text-2xl font-bold luxury-gold-gradient">{product.price}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <section className="bg-primary/5 rounded-[4rem] p-24 border border-primary/20 shadow-3xl flex flex-col items-center text-center space-y-12 soft-reveal relative overflow-hidden group">
           <Gem className="text-primary animate-pulse" size={64} />
           <div className="space-y-6 max-w-4xl relative z-10">
             <h2 className="text-6xl font-serif font-bold uppercase tracking-tight">Privilèges Conciergerie</h2>
             <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Chaque acquisition est accompagnée d'un certificat d'authenticité numérique et d'un service de livraison gantée à domicile.</p>
           </div>
           <Button className="rounded-full bg-primary text-black px-24 h-24 font-bold uppercase tracking-[0.4em] text-xl shadow-2xl hover:bg-white transition-all border-none relative z-10">
             Découvrir la Collection
           </Button>
           <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-[5000ms] scale-[3]">
             <ShoppingBag size={200} />
           </div>
        </section>
      </main>
    </div>
  );
}
