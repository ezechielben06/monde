'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, Scissors, Fingerprint, Palette, Flower2, Zap, User } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { 
    id: 'hair-woman', 
    title: 'Coiffure Femme', 
    icon: <Scissors size={20} />,
    items: ['Rallonges', 'Tresses', 'Perruques', 'Chignons Événementiels'],
    img: 'beauty-hair'
  },
  { 
    id: 'hair-man', 
    title: 'Coiffure Homme', 
    icon: <User size={20} />,
    items: ['Coupe Simple', 'Dégradé Américain', 'Coupe + Barbe', 'Entretien Barbe'],
    img: 'beauty-hair'
  },
  { 
    id: 'nails', 
    title: 'Onglerie & Pieds', 
    icon: <Fingerprint size={20} />,
    items: ['Gel & Résine', 'Nail Art (S/M/L)', 'Pédicure Spa', 'Soin Complet'],
    img: 'beauty-nails'
  },
  { 
    id: 'makeup', 
    title: 'Maquillage VIP', 
    icon: <Palette size={20} />,
    items: ['Soirée', 'Mariée', 'Professionnel', 'Signature B-right'],
    img: 'beauty-makeup'
  },
  { 
    id: 'skin', 
    title: 'Soins Visage & Corps', 
    icon: <Flower2 size={20} />,
    items: ['Nettoyage Profond', 'Anti-Âge Global', 'Massage Relaxant', 'Soin Minceur'],
    img: 'beauty-face'
  }
];

export default function BeautyPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-16 space-y-24 md:space-y-32">
        <header className="space-y-8 md:space-y-12 soft-reveal text-center md:text-left">
          <Badge variant="outline" className="border-primary/40 text-primary px-6 md:px-10 py-2 md:py-3 uppercase text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] font-bold rounded-full">Sanctuaire de Beauté VIP</Badge>
          <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold">L'Art de la <br className="hidden md:block"/> Sublimation.</h1>
          <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">Chaque geste est une caresse, chaque soin est une transformation vers votre excellence.</p>
        </header>

        <Tabs defaultValue="hair-woman" className="space-y-16 md:space-y-24">
          <TabsList className="bg-transparent h-auto flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 border-none p-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-white/5 data-[state=active]:border-primary/40 px-6 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-3xl text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] transition-all hover:border-primary/20 whitespace-nowrap"
              >
                <span className="mr-2 md:mr-4">{cat.icon}</span> {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="soft-reveal focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="relative aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl group">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === cat.img)?.imageUrl || "https://picsum.photos/seed/beauty/800/800"}
                    alt={cat.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                <div className="space-y-8 md:space-y-12">
                  <div className="space-y-4 md:space-y-6 text-center md:text-left">
                    <h3 className="text-4xl md:text-6xl font-serif font-bold luxury-gold-gradient uppercase">{cat.title}</h3>
                    <p className="text-lg md:text-2xl text-zinc-500 font-light italic leading-relaxed">Nos maîtres praticiens utilisent exclusivement des protocoles certifiés Élite.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="p-6 md:p-8 bg-zinc-900/40 rounded-2xl md:rounded-3xl border border-white/5 hover:border-primary/30 transition-all group flex justify-between items-center">
                        <span className="text-lg md:text-xl font-medium tracking-tight group-hover:text-primary transition-colors">{item}</span>
                        <Zap size={16} className="text-primary/20 group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 md:pt-12 flex flex-col sm:flex-row gap-4 md:gap-8">
                    <Link href="/booking" className="w-full sm:w-auto">
                      <Button className="w-full px-12 md:px-16 h-16 md:h-20 rounded-full bg-primary text-black font-bold uppercase tracking-widest border-none shadow-2xl hover:scale-105 transition-all text-sm">
                        Réserver ma séance
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full sm:w-auto px-12 md:px-16 h-16 md:h-20 rounded-full border-white/10 uppercase font-bold tracking-widest text-sm">
                      Détails des tarifs
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
