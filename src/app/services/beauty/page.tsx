
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, Scissors, Fingerprint, Palette, Flower2, Zap, User, Star } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { 
    id: 'hair-woman', 
    title: 'Coiffure Femme', 
    icon: <Scissors size={20} />,
    items: ['Rallonges Élite', 'Tresses Artistiques', 'Perruques de Luxe', 'Chignons Événementiels'],
    img: 'beauty-hair',
    desc: 'Des créations capillaires uniques pour sublimer votre port de tête.'
  },
  { 
    id: 'hair-man', 
    title: 'Coiffure Homme', 
    icon: <User size={20} />,
    items: ['Coupe Signature', 'Dégradé Américain', 'Coupe + Barbe VIP', 'Entretien Barbe'],
    img: 'beauty-hair',
    desc: 'L\'excellence du grooming pour l\'homme moderne et exigeant.'
  },
  { 
    id: 'nails', 
    title: 'Onglerie & Pieds', 
    icon: <Fingerprint size={20} />,
    items: ['Gel & Résine Or', 'Nail Art Custom', 'Pédicure Spa Royal', 'Soin Complet Onyx'],
    img: 'beauty-nails',
    desc: 'L\'art du détail jusqu\'au bout des doigts avec nos maîtres prothésistes.'
  },
  { 
    id: 'makeup', 
    title: 'Maquillage VIP', 
    icon: <Palette size={20} />,
    items: ['Soirée de Gala', 'Mariée Impériale', 'Shooting Pro', 'Signature B-right'],
    img: 'beauty-makeup',
    desc: 'Révélez votre éclat avec des produits d\'exception et une expertise haute couture.'
  },
  { 
    id: 'skin', 
    title: 'Soins Visage & Corps', 
    icon: <Flower2 size={20} />,
    items: ['Nettoyage Diamant', 'Anti-Âge Cellulaire', 'Massage Holistique', 'Soin Minceur Sculpt'],
    img: 'beauty-face',
    desc: 'Une renaissance corporelle guidée par la science et le bien-être absolu.'
  }
];

export default function BeautyPage() {
  const defaultImg = "https://picsum.photos/seed/beauty-fallback/800/800";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20 space-y-24 md:space-y-40">
        <header className="space-y-8 md:space-y-12 soft-reveal text-center md:text-left">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 md:px-12 py-3 uppercase text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.8em] font-bold rounded-full">Sanctuaire de Beauté VIP</Badge>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">L'Art de la <br className="hidden md:block"/> Sublimation.</h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">"La beauté est la signature de l'âme. Nous en sommes les calligraphes les plus passionnés."</p>
          </div>
        </header>

        <Tabs defaultValue="hair-woman" className="space-y-16 md:space-y-32">
          <TabsList className="bg-transparent h-auto flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 border-none p-0 overflow-x-auto scrollbar-hide pb-4">
            {CATEGORIES.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-border data-[state=active]:border-primary/40 px-8 md:px-12 py-5 md:py-8 rounded-2xl md:rounded-3xl text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all hover:border-primary/20 whitespace-nowrap"
              >
                <span className="mr-3 md:mr-5">{cat.icon}</span> {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="soft-reveal focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                <div className="relative aspect-square rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-border shadow-3xl group">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === cat.img)?.imageUrl || defaultImg}
                    alt={cat.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[4000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="space-y-10 md:space-y-16">
                  <div className="space-y-6 md:space-y-10 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 text-primary">
                       <Star size={24} fill="currentColor" />
                       <Star size={24} fill="currentColor" />
                       <Star size={24} fill="currentColor" />
                    </div>
                    <h3 className="text-4xl md:text-7xl font-serif font-bold luxury-gold-gradient uppercase leading-tight">{cat.title}</h3>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light italic leading-relaxed">{cat.desc}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="p-8 md:p-10 bg-card/40 rounded-[2rem] md:rounded-[3rem] border border-border hover:border-primary/30 transition-all group flex justify-between items-center shadow-lg">
                        <span className="text-lg md:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">{item}</span>
                        <Zap size={20} className="text-primary/20 group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 md:pt-16 flex flex-col sm:flex-row gap-6 md:gap-10">
                    <Link href="/booking" className="w-full sm:w-auto">
                      <Button className="w-full px-16 md:px-20 h-20 md:h-24 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-[0.4em] border-none shadow-2xl hover:scale-105 transition-all text-sm md:text-base">
                        Réserver mon Excellence
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full sm:w-auto px-16 md:px-20 h-20 md:h-24 rounded-full border-border uppercase font-bold tracking-[0.4em] text-sm md:text-base hover:bg-primary/5">
                      Tarifs de Prestige
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
