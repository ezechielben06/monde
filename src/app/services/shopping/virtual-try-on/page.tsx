
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Upload, RefreshCw, Eye, Share2, ArrowLeft, RotateCw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function VirtualTryOnPage() {
  const [step, setStep] = useState<'upload' | 'processing' | 'mirror'>('upload');

  const startProcessing = () => {
    setStep('processing');
    setTimeout(() => setStep('mirror'), 3000);
  };

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Link href="/services/shopping" className="flex items-center gap-4 text-zinc-600 hover:text-primary transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> 
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Retour à la boutique</span>
            </Link>
            <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">Miroir <br/> Virtuel IA.</h1>
          </div>
          <Badge className="bg-primary text-black px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.6em] shadow-3xl">Technologie B-right AI v2.5</Badge>
        </header>

        <section className="max-w-6xl mx-auto">
          {step === 'upload' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 soft-reveal">
              <Card className="bg-zinc-900/40 border-white/5 rounded-[4rem] p-24 flex flex-col items-center justify-center text-center space-y-12 hover:border-primary/40 transition-all group cursor-pointer" onClick={startProcessing}>
                <Camera size={100} className="text-primary group-hover:scale-110 transition-transform duration-1000" />
                <div className="space-y-4">
                  <h3 className="text-4xl font-serif font-bold">Prendre une Photo</h3>
                  <p className="text-zinc-500 font-light italic">Utilisez votre caméra pour une analyse instantanée.</p>
                </div>
                <Button className="rounded-full bg-primary text-black px-16 h-20 font-bold uppercase tracking-widest text-sm">Activer Caméra</Button>
              </Card>

              <Card className="bg-zinc-900/40 border-white/5 rounded-[4rem] p-24 flex flex-col items-center justify-center text-center space-y-12 hover:border-primary/40 transition-all group cursor-pointer" onClick={startProcessing}>
                <Upload size={100} className="text-primary group-hover:scale-110 transition-transform duration-1000" />
                <div className="space-y-4">
                  <h3 className="text-4xl font-serif font-bold">Télécharger Photo</h3>
                  <p className="text-zinc-500 font-light italic">Sélectionnez un portrait haute résolution.</p>
                </div>
                <Button variant="outline" className="rounded-full border-white/10 px-16 h-20 font-bold uppercase tracking-widest text-sm">Choisir Fichier</Button>
              </Card>
            </div>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-40 space-y-16 soft-reveal">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-primary/20 rounded-full animate-ping" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw size={80} className="text-primary animate-spin" />
                </div>
              </div>
              <div className="text-center space-y-6">
                <h3 className="text-5xl font-serif font-bold luxury-gold-gradient animate-pulse">Création de votre Avatar IA...</h3>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[1em]">Analyse faciale • Morphologie • Textures</p>
              </div>
            </div>
          )}

          {step === 'mirror' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 soft-reveal">
              <div className="lg:col-span-8 relative aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl bg-zinc-900/20">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === 'ai-avatar-tryon')?.imageUrl || ""} 
                  alt="AI Avatar" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-16 flex justify-between items-end">
                   <div className="flex gap-6">
                     <Button size="icon" className="rounded-full w-20 h-20 bg-white/10 backdrop-blur-3xl hover:bg-primary hover:text-black transition-all">
                       <RotateCw size={32} />
                     </Button>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 self-center">Rotation 360° Activée</p>
                   </div>
                   <div className="flex gap-6">
                     <Button size="sm" variant="outline" className="rounded-full px-10 h-16 border-white/10 bg-black/40 backdrop-blur-xl uppercase font-bold text-[10px] tracking-[0.4em]">Face</Button>
                     <Button size="sm" variant="outline" className="rounded-full px-10 h-16 border-white/10 bg-black/40 backdrop-blur-xl uppercase font-bold text-[10px] tracking-[0.4em] opacity-40">Profil</Button>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12">
                <div className="p-12 bg-zinc-900/40 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl">
                  <h3 className="text-3xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight">Essayage Actuel</h3>
                  <div className="flex items-center gap-8 p-6 bg-zinc-800/40 rounded-3xl border border-white/5">
                    <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-lg">
                      <Image src={PlaceHolderImages.find(p => p.id === 'shopping-fashion')?.imageUrl || ""} alt="Item" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Robe de Soirée</p>
                      <p className="text-xl font-bold luxury-gold-gradient">450,000 FCFA</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <Button className="rounded-full bg-primary text-black h-16 font-bold uppercase tracking-widest text-[10px]">Acheter</Button>
                    <Button variant="outline" className="rounded-full border-white/10 h-16 font-bold uppercase tracking-widest text-[10px]">Partager</Button>
                  </div>
                </div>

                <div className="p-12 bg-primary/5 rounded-[3rem] border border-primary/20 space-y-6 shadow-2xl">
                  <h4 className="text-xl font-bold uppercase tracking-tighter">Collections Recommandées</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all cursor-pointer">
                         <Image src={`https://picsum.photos/seed/reco-${i}/200/200`} alt="Reco" width={200} height={200} className="object-cover grayscale hover:grayscale-0 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
