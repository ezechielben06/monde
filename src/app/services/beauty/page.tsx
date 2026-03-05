
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Clock, Sparkles, MapPin, ArrowRight, Scissors, Fingerprint, Palette, Heart } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  { id: 'hair', title: 'Haute Coiffure', desc: 'Rallonges, tresses artistiques, perruques de luxe et rituels de soin capillaire.', price: 'À partir de 15,000 FCFA', img: 'beauty-hair' },
  { id: 'nails', title: 'Nail Art Impérial', desc: 'Gel, résine, nail art complexe et soins spa complets pour mains et pieds.', price: 'À partir de 10,000 FCFA', img: 'beauty-nails' },
  { id: 'makeup', title: 'Maquillage Signature', desc: 'Mise en beauté événementielle, mariée et shooting haute performance.', price: 'À partir de 25,000 FCFA', img: 'beauty-makeup' },
  { id: 'face', title: 'Soins Visage Avancés', desc: 'Nettoyage profond, hydratation, protocoles anti-âge et éclat instantané.', price: 'À partir de 30,000 FCFA', img: 'beauty-face' },
];

export default function BeautyPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="space-y-12 soft-reveal">
          <div className="flex items-center gap-6">
            <Badge variant="outline" className="border-primary/40 text-primary px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Beauté & Esthétique VIP</Badge>
          </div>
          <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">L'Art de la <br/> Sublimation.</h1>
          <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Chaque geste est une caresse, chaque soin est une transformation.</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className="group relative bg-zinc-900/20 rounded-[3.5rem] p-12 border border-white/5 hover:border-primary/30 transition-all duration-[1200ms] shadow-3xl">
              <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
                <div className="relative w-full md:w-80 aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === s.img)?.imageUrl || ""}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <div className="flex-1 space-y-8 text-center md:text-left">
                  <div className="space-y-4">
                    <h3 className="text-5xl font-serif font-bold">{s.title}</h3>
                    <p className="text-zinc-500 text-xl font-light italic leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-10 text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
                    <span className="flex items-center gap-4"><Clock size={16} /> Durée variable</span>
                    <span className="flex items-center gap-4"><Sparkles size={16} /> {s.price}</span>
                  </div>
                  <Link href="/booking">
                    <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase text-xs tracking-[0.6em] flex items-center gap-6 mt-8">
                      Prendre rendez-vous <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-primary/5 rounded-[4rem] p-24 border border-primary/20 shadow-3xl relative overflow-hidden group">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-20">
             {[
               { icon: <Scissors />, title: "Coiffure", desc: "Femme (Rallonges, Tresses, Perruques) & Homme (Dégradé, Barbe)." },
               { icon: <Fingerprint />, title: "Onglerie", desc: "Gel, Résine, Nail Art court/moyen/long & Pédicure Spa." },
               { icon: <Palette />, title: "Maquillage", desc: "Soirée, Mariée, Professionnel & Soins Visage Hydratants." }
             ].map((feature, i) => (
               <div key={i} className="space-y-6 text-center md:text-left">
                 <div className="text-primary mb-4">{feature.icon}</div>
                 <h4 className="text-3xl font-bold uppercase tracking-tight">{feature.title}</h4>
                 <p className="text-zinc-500 font-light italic leading-relaxed text-lg">{feature.desc}</p>
               </div>
             ))}
           </div>
        </section>
      </main>
    </div>
  );
}
