'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, Sparkles, Scissors, Fingerprint, Palette, Heart, Flower2, Zap, User, ArrowRight } from 'lucide-react';
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
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="space-y-12 soft-reveal">
          <Badge variant="outline" className="border-primary/40 text-primary px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Sanctuaire de Beauté VIP</Badge>
          <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">L'Art de la <br/> Sublimation.</h1>
          <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Chaque geste est une caresse, chaque soin est une transformation vers votre excellence.</p>
        </header>

        <Tabs defaultValue="hair-woman" className="space-y-24">
          <TabsList className="bg-transparent h-auto flex flex-wrap justify-center md:justify-start gap-8 border-none p-0">
            {CATEGORIES.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-white/5 data-[state=active]:border-primary/40 px-10 py-6 rounded-3xl text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:border-primary/20"
              >
                <span className="mr-4">{cat.icon}</span> {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="soft-reveal focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl group">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === cat.img)?.imageUrl || ""}
                    alt={cat.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-6xl font-serif font-bold luxury-gold-gradient uppercase">{cat.title}</h3>
                    <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Nos maîtres praticiens utilisent exclusivement des protocoles certifiés Élite.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="p-8 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group flex justify-between items-center">
                        <span className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">{item}</span>
                        <Zap size={16} className="text-primary/20 group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-12 flex flex-col md:flex-row gap-8">
                    <Link href="/booking">
                      <Button className="w-full md:w-auto px-16 h-20 rounded-full bg-primary text-black font-bold uppercase tracking-widest border-none shadow-2xl hover:scale-105 transition-all">
                        Réserver ma séance
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full md:w-auto px-16 h-20 rounded-full border-white/10 uppercase font-bold tracking-widest">
                      Détails des tarifs
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <section className="bg-zinc-900/40 rounded-[4rem] p-24 border border-white/5 text-center space-y-16 shadow-3xl">
           <div className="space-y-6 max-w-4xl mx-auto">
             <Heart size={64} className="text-primary mx-auto animate-pulse" />
             <h2 className="text-5xl font-serif font-bold luxury-gold-gradient uppercase leading-tight">L'Engagement de Prestige</h2>
             <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Chaque soin est orchestré avec une précision chirurgicale et une dévotion absolue à votre bien-être global.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: "Hygiène Royale", desc: "Protocoles de stérilisation aux normes médicales." },
               { title: "Produits Élite", desc: "Utilisation exclusive de marques certifiées Luxe." },
               { title: "Experts Dédiés", desc: "Maîtres formés aux derniers standards mondiaux." }
             ].map((benefit, i) => (
               <div key={i} className="space-y-4">
                 <h4 className="text-2xl font-bold uppercase tracking-tight">{benefit.title}</h4>
                 <p className="text-zinc-600 font-light italic text-sm leading-relaxed">{benefit.desc}</p>
               </div>
             ))}
           </div>
        </section>
      </main>
    </div>
  );
}
