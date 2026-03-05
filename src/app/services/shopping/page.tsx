
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingBag, Star, Camera, Eye, Heart, ShoppingCart, ArrowRight, Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PRODUCTS = [
  { id: 1, title: "Robe de Soirée Émeraude", price: "450,000 FCFA", category: "Femme - Haute Couture", img: "shopping-fashion", badge: "Nouveau" },
  { id: 2, title: "Montre Chrono Or Rose", price: "1,200,000 FCFA", category: "Accessoires - Prestige", img: "shopping-accessories", badge: "Rare" },
  { id: 3, title: "Costume Trois-Pièces Noir", price: "550,000 FCFA", category: "Homme - Business VIP", img: "shopping-fashion", badge: "Promotion" },
  { id: 4, title: "Sac à Main Cuir Crocodile", price: "3,500,000 FCFA", category: "Accessoires - Luxe", img: "shopping-accessories", badge: "Prestige" },
];

export default function ShoppingPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-16 soft-reveal">
          <div className="space-y-12">
            <Badge className="bg-primary/10 text-primary border-primary/30 px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Luxury Shopping & IA</Badge>
            <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">La Boutique <br/> des Maîtres.</h1>
            <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Une sélection pointue de pièces d'exception, sublimée par l'innovation.</p>
          </div>
          <Link href="/services/shopping/virtual-try-on">
            <Button size="lg" className="bg-white text-black hover:bg-primary rounded-full px-16 h-24 font-bold uppercase tracking-[0.5em] shadow-3xl transition-all group">
              <Camera size={24} className="mr-6 group-hover:rotate-12 transition-transform" /> Essayage Virtuel IA
            </Button>
          </Link>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden border-white/5 bg-zinc-900/20 rounded-[3rem] transition-all hover:border-primary/40 shadow-2xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === product.img)?.imageUrl || ""}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-10 left-10">
                  <Badge className="bg-primary text-black font-bold uppercase text-[9px] px-6 py-2 rounded-full tracking-[0.3em] shadow-lg">{product.badge}</Badge>
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Button size="icon" className="rounded-full bg-white text-black hover:bg-primary w-20 h-20 shadow-2xl">
                    <ShoppingCart size={30} />
                  </Button>
                  <Button size="icon" className="rounded-full bg-zinc-900/80 text-primary hover:bg-white hover:text-black w-20 h-20 border border-white/10 shadow-2xl">
                    <Heart size={30} />
                  </Button>
                </div>
              </div>
              <div className="p-12 space-y-4">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.5em]">{product.category}</p>
                <h3 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-2xl font-bold luxury-gold-gradient">{product.price}</p>
              </div>
            </Card>
          ))}
        </section>

        <section className="bg-zinc-900/60 rounded-[4rem] p-24 border border-white/5 relative overflow-hidden shadow-3xl flex flex-col md:flex-row items-center gap-24 group">
          <div className="relative w-full md:w-[600px] aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src={PlaceHolderImages.find(p => p.id === 'ai-avatar-tryon')?.imageUrl || ""} 
              alt="AI Tryon" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]" 
            />
          </div>
          <div className="space-y-12 flex-1 text-center md:text-left">
            <div className="space-y-6">
              <Gem className="text-primary mx-auto md:mx-0 animate-pulse" size={48} />
              <h2 className="text-6xl font-serif font-bold leading-tight uppercase">Miroir Virtuel <br/> Révolutionnaire.</h2>
              <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Créez votre avatar 3D et essayez nos collections en temps réel. Visualisez chaque détail à 360° avant votre acquisition.</p>
            </div>
            <Link href="/services/shopping/virtual-try-on">
              <Button size="lg" className="rounded-full px-20 bg-primary text-black font-bold uppercase tracking-[0.4em] shadow-2xl text-xl hover:scale-105 transition-all">
                Démarrer l'Expérience IA
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
