
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, Camera, Heart, ShoppingCart, ArrowRight, Gem, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20 space-y-24 md:space-y-40">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-16 soft-reveal">
          <div className="space-y-8 md:space-y-12 text-center md:text-left">
            <Badge variant="outline" className="border-primary/40 text-primary px-8 md:px-12 py-3 uppercase text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-bold rounded-full">Boutique des Maîtres</Badge>
            <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">La Haute <br className="hidden md:block"/> Acquisition.</h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">Une sélection pointue de pièces d'exception, sublimée par l'innovation IA.</p>
          </div>
          <Link href="/services/shopping/virtual-try-on" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full px-12 md:px-20 h-20 md:h-28 font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] shadow-3xl transition-all group border-none text-sm md:text-lg h-auto py-6">
              <Camera size={28} className="mr-4 md:mr-6 group-hover:rotate-12 transition-transform" /> Essayage Virtuel IA
            </Button>
          </Link>
        </header>

        <Tabs defaultValue="woman" className="space-y-16 md:space-y-32">
          <TabsList className="bg-transparent h-auto flex gap-4 md:gap-12 border-none p-0 overflow-x-auto pb-6 scrollbar-hide justify-start md:justify-center">
            {CATEGORIES.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-border px-10 md:px-16 py-5 md:py-10 rounded-2xl md:rounded-[2.5rem] text-[10px] md:text-base font-bold uppercase tracking-[0.3em] md:tracking-[0.6em] transition-all whitespace-nowrap"
              >
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="soft-reveal focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
                <div className="lg:col-span-4 xl:col-span-3 space-y-16">
                  {cat.sections.map((section, sidx) => (
                    <div key={sidx} className="space-y-8 md:space-y-12">
                      <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-widest border-l-4 border-primary pl-6 md:pl-10">{section.name}</h4>
                      <ul className="space-y-4 md:space-y-6">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors text-xl md:text-2xl font-light italic flex items-center justify-between group">
                            {item} <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:translate-x-0" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16">
                   {FEATURED_PRODUCTS.map((product) => (
                    <Card key={product.id} className="group relative overflow-hidden border-border bg-card/40 rounded-[3rem] md:rounded-[4rem] transition-all hover:border-primary/40 shadow-3xl">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image 
                          src={PlaceHolderImages.find(p => p.id === product.img)?.imageUrl || defaultImg}
                          alt={product.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute top-8 md:top-12 left-8 md:left-12">
                          <Badge className="bg-primary text-primary-foreground font-bold uppercase text-[9px] md:text-[11px] px-6 md:px-8 py-2 md:py-3 rounded-full tracking-[0.3em] md:tracking-[0.5em] shadow-2xl border-none">{product.badge}</Badge>
                        </div>
                        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center gap-6 md:gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <Button size="icon" className="rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground w-16 h-16 md:w-24 md:h-24 shadow-3xl border-none active:scale-90 transition-transform">
                            <ShoppingCart size={32} />
                          </Button>
                          <Button size="icon" className="rounded-full bg-background/80 text-primary hover:bg-foreground hover:text-background w-16 h-16 md:w-24 md:h-24 border border-border shadow-3xl active:scale-90 transition-transform">
                            <Heart size={32} />
                          </Button>
                        </div>
                      </div>
                      <div className="p-10 md:p-16 space-y-4 md:space-y-6">
                        <h3 className="text-2xl md:text-4xl font-serif font-bold group-hover:text-primary transition-colors leading-tight uppercase">{product.title}</h3>
                        <p className="text-2xl md:text-3xl font-bold luxury-gold-gradient">{product.price}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <section className="bg-primary/5 rounded-[4rem] md:rounded-[6rem] p-16 md:p-32 border border-primary/20 flex flex-col items-center text-center space-y-12 soft-reveal relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-[3000ms] scale-[2]">
              <Sparkles size={150} />
           </div>
           <Gem className="text-primary animate-pulse" size={64} />
           <div className="space-y-8 max-w-4xl relative z-10">
             <h2 className="text-4xl md:text-7xl font-serif font-bold luxury-gold-gradient uppercase leading-tight">Privilèges de <br/> Haute Couture.</h2>
             <p className="text-muted-foreground text-xl md:text-3xl font-light italic leading-relaxed">Accédez à des pièces uniques et des services de conciergerie shopping personnalisés.</p>
           </div>
           <Button className="rounded-full bg-primary text-primary-foreground px-16 md:px-24 h-20 md:h-28 font-bold uppercase tracking-[0.4em] text-lg md:text-xl shadow-3xl hover:scale-105 transition-all relative z-10 h-auto py-6">
              Devenir Membre Privilège
           </Button>
        </section>
      </main>
    </div>
  );
}
