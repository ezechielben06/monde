'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Upload, RefreshCw, Eye, Share2, ArrowLeft, RotateCw, Gem, Sparkles, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function VirtualTryOnPage() {
  const [step, setStep] = useState<'upload' | 'processing' | 'mirror'>('upload');
  const defaultImg = "https://picsum.photos/seed/ai-mirror-vip/800/1000";

  const startProcessing = () => {
    setStep('processing');
    setTimeout(() => setStep('mirror'), 4500);
  };

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Link href="/services/shopping" className="flex items-center gap-4 text-zinc-600 hover:text-primary transition-colors group">
              <ArrowLeft size={24} className="group-hover:-translate-x-4 transition-transform" /> 
              <span className="text-[10px] font-bold uppercase tracking-[0.6em]">Retour à la boutique</span>
            </Link>
            <h1 className="text-8xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">Miroir <br/> Virtuel IA.</h1>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Badge className="bg-primary text-black px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.6em] shadow-3xl border-none">Technologie B-right AI v2.5</Badge>
            <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.8em]">Morphologie 3D & Textures HD</p>
          </div>
        </header>

        <section className="max-w-7xl mx-auto">
          {step === 'upload' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 soft-reveal">
              <Card 
                className="bg-zinc-900/40 border-white/5 rounded-[4rem] p-32 flex flex-col items-center justify-center text-center space-y-16 hover:border-primary/40 transition-all group cursor-pointer shadow-3xl" 
                onClick={startProcessing}
              >
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-1000">
                  <Camera size={64} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl font-serif font-bold uppercase tracking-tight">Capture Royale</h3>
                  <p className="text-zinc-500 text-xl font-light italic leading-relaxed">Utilisez votre caméra pour une analyse instantanée de votre morphologie par notre IA.</p>
                </div>
                <Button className="rounded-full bg-primary text-black px-20 h-24 font-bold uppercase tracking-[0.4em] text-lg border-none shadow-2xl">Activer la Vision</Button>
              </Card>

              <Card 
                className="bg-zinc-900/40 border-white/5 rounded-[4rem] p-32 flex flex-col items-center justify-center text-center space-y-16 hover:border-primary/40 transition-all group cursor-pointer shadow-3xl" 
                onClick={startProcessing}
              >
                <div className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-1000">
                  <Upload size={64} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-5xl font-serif font-bold uppercase tracking-tight">Portrait Existant</h3>
                  <p className="text-zinc-500 text-xl font-light italic leading-relaxed">Sélectionnez une photographie haute résolution pour un rendu optimal de votre avatar.</p>
                </div>
                <Button variant="outline" className="rounded-full border-white/10 px-20 h-24 font-bold uppercase tracking-[0.4em] text-lg hover:bg-white/10 transition-all">Choisir Fichier</Button>
              </Card>
            </div>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-48 space-y-20 soft-reveal text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 blur-[200px] animate-pulse" />
              <div className="relative">
                <div className="w-80 h-80 border-4 border-primary/20 rounded-full animate-ping" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-primary/40 rounded-full animate-spin duration-[3000ms]" />
                  <RefreshCw size={100} className="text-primary absolute animate-spin-slow" />
                </div>
              </div>
              <div className="space-y-10 relative z-10">
                <div className="flex items-center justify-center gap-6">
                  <Sparkles className="text-primary animate-bounce" size={40} />
                  <h3 className="text-6xl md:text-8xl font-serif font-bold luxury-gold-gradient uppercase tracking-tighter">Éveil de l'Avatar...</h3>
                </div>
                <p className="text-zinc-600 text-xs font-bold uppercase tracking-[1.5em] animate-pulse">Scan Morphologique • Textures Onyx • Rendu 4K</p>
                <div className="flex justify-center gap-6">
                   <div className="w-3 h-3 rounded-full bg-primary animate-bounce delay-0" />
                   <div className="w-3 h-3 rounded-full bg-primary animate-bounce delay-150" />
                   <div className="w-3 h-3 rounded-full bg-primary animate-bounce delay-300" />
                </div>
              </div>
            </div>
          )}

          {step === 'mirror' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 soft-reveal">
              <div className="lg:col-span-8 relative aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(212,175,55,0.1)] bg-zinc-900/40 group">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === 'ai-avatar-tryon')?.imageUrl || defaultImg} 
                  alt="AI Avatar Mirror" 
                  fill 
                  className="object-cover transition-transform duration-[5000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-20 flex justify-between items-end">
                   <div className="flex flex-col gap-8">
                     <div className="flex gap-6 items-center bg-black/40 backdrop-blur-2xl px-10 py-6 rounded-full border border-white/10 group/btn cursor-pointer">
                       <RotateCw size={32} className="text-primary group-hover/btn:rotate-180 transition-transform duration-1000" />
                       <span className="text-xs font-bold uppercase tracking-[0.4em] text-white">Rotation 360° Élite</span>
                     </div>
                     <div className="flex gap-4">
                        <Badge className="bg-primary text-black font-bold uppercase tracking-widest px-6 py-2">Face</Badge>
                        <Badge variant="outline" className="border-white/10 text-white/40 font-bold uppercase tracking-widest px-6 py-2">Profil</Badge>
                        <Badge variant="outline" className="border-white/10 text-white/40 font-bold uppercase tracking-widest px-6 py-2">Dos</Badge>
                     </div>
                   </div>
                   <Button size="icon" className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-3xl hover:bg-primary hover:text-black transition-all border border-white/10">
                      <Eye size={36} />
                   </Button>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-16">
                <div className="p-16 bg-zinc-900/60 rounded-[4rem] border border-white/10 space-y-12 shadow-3xl">
                  <header className="space-y-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase tracking-[0.4em] px-6 py-2 rounded-full font-bold">Sélection en Essayage</Badge>
                    <h3 className="text-4xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight leading-tight">Robe Émeraude <br/> Impériale</h3>
                  </header>
                  
                  <div className="p-10 bg-black/40 rounded-[2.5rem] border border-white/5 flex items-center gap-10 group hover:border-primary/40 transition-all">
                    <div className="w-28 h-28 relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image src={PlaceHolderImages.find(p => p.id === 'shopping-fashion')?.imageUrl || defaultImg} alt="Item" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold luxury-gold-gradient tracking-tight">450,000 FCFA</p>
                      <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">Réf: RT-4421-VIP</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8 pt-8">
                    <Link href="/cart">
                       <Button className="w-full rounded-full bg-primary text-black h-24 font-bold uppercase tracking-[0.4em] text-xl border-none shadow-2xl hover:scale-105 transition-all">
                          Acquérir l'Article
                       </Button>
                    </Link>
                    <Button variant="outline" className="rounded-full border-white/10 h-24 font-bold uppercase tracking-[0.4em] text-sm flex gap-6 hover:bg-white/5 transition-all">
                      <Share2 size={24} className="text-primary" /> Partager l'Apparence
                    </Button>
                  </div>
                </div>

                <div className="p-16 bg-primary/5 rounded-[4rem] border border-primary/20 space-y-10 shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                    <Sparkles size={100} />
                  </div>
                  <div className="flex items-center gap-6 relative z-10">
                    <Gem size={28} className="text-primary" />
                    <h4 className="text-2xl font-bold uppercase tracking-tight">Accords de Prestige</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-8 relative z-10">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer group shadow-2xl">
                         <Image src={`https://picsum.photos/seed/reco-tryon-${i}/400/400`} alt="Reco" width={400} height={400} className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] text-center relative z-10">Suggestions basées sur votre morphologie Élite</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
