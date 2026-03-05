
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Plus, Share2, ArrowLeft, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Link href="/tracking" className="flex items-center gap-4 text-zinc-600 hover:text-primary transition-colors group">
              <ArrowLeft size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Retour au suivi</span>
            </Link>
            <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">Avant / <br/> Après.</h1>
          </div>
          <Button size="lg" className="rounded-full bg-primary text-black px-16 h-20 font-bold uppercase tracking-widest gap-4 shadow-2xl">
            <Camera size={24} /> Nouvelle Capture
          </Button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Compare Card 1 */}
          <div className="space-y-12 soft-reveal">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
              <h2 className="text-3xl font-serif font-bold uppercase tracking-tight">Cycle Solaire - Octobre</h2>
              <Badge className="bg-primary/10 text-primary border-none px-6 py-2 rounded-full font-bold uppercase text-[9px] tracking-widest">- 4.5 KG</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="relative rounded-[3rem] overflow-hidden border border-white/5 group">
                <Image src="https://picsum.photos/seed/before1/600/1000" alt="Before" fill className="object-cover grayscale" />
                <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-xl px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Avant</div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden border border-primary/40 group">
                <Image src="https://picsum.photos/seed/after1/600/1000" alt="After" fill className="object-cover" />
                <div className="absolute top-8 left-8 bg-primary text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Après</div>
                <div className="absolute bottom-8 right-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" className="rounded-full bg-white/10 backdrop-blur-xl hover:bg-white hover:text-black"><Maximize2 size={18} /></Button>
                  <Button size="icon" className="rounded-full bg-white/10 backdrop-blur-xl hover:bg-white hover:text-black"><Share2 size={18} /></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Cycles */}
          <div className="space-y-12 soft-reveal delay-150">
             <h2 className="text-3xl font-serif font-bold uppercase tracking-tight border-b border-white/5 pb-6">Archives de Transformation</h2>
             <div className="grid grid-cols-2 gap-10">
               {[1, 2, 3, 4].map((i) => (
                 <Card key={i} className="bg-zinc-900/40 border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-primary/20 transition-all cursor-pointer aspect-square relative">
                    <Image src={`https://picsum.photos/seed/arch-${i}/400/400`} alt="Archive" fill className="object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-10 flex flex-col justify-end">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Mars 2024</p>
                      <h4 className="text-xl font-bold uppercase">Phase ÉmeraUDE</h4>
                    </div>
                 </Card>
               ))}
             </div>
             <Button variant="outline" className="w-full rounded-full h-20 border-white/10 uppercase font-bold tracking-[0.4em] text-xs">Charger Plus d'Archives</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
