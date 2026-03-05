
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Upload, RefreshCw, Eye, Share2, ArrowLeft, RotateCw, Gem, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20 space-y-24 md:space-y-40">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Link href="/services/shopping" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft size={24} className="group-hover:-translate-x-4 transition-transform" /> 
              <span className="text-[10px] font-bold uppercase tracking-[0.6em]">Retour à la boutique</span>
            </Link>
            <h1 className="text-6xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.85] font-bold uppercase">Miroir <br/> Virtuel IA.</h1>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <Badge className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.6em] shadow-3xl border-none">Technologie B-right AI v2.5</Badge>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.8em]">Morphologie 3D & Textures HD</p>
          </div>
        </header>

        <section className="max-w-7xl mx-auto">
          {step === 'upload' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 soft-reveal">
              <Card 
                className="bg-card/40 border-border rounded-[3rem] md:rounded-[5rem] p-16 md:p-32 flex flex-col items-center justify-center text-center space-y-12 md:space-y-20 hover:border-primary/40 transition-all group cursor-pointer shadow-3xl" 
                onClick={startProcessing}
              >
                <div className="w-24 h-24 md:w-40 md:h-40 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000 shadow-2xl">
                  <Camera size={64} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight">Capture Royale</h3>
                  <p className="text-muted-foreground text-xl md:text-2xl font-light italic leading-relaxed">Utilisez votre caméra pour une analyse instantanée de votre morphologie par notre IA.</p>
                </div>
                <Button className="rounded-full bg-primary text-primary-foreground px-16 md:px-24 h-20 md:h-28 font-bold uppercase tracking-[0.4em] text-lg md:text-xl border-none shadow-3xl h-auto py-6">Activer la Vision</Button>
              </Card>

              <Card 
                className="bg-card/40 border-border rounded-[3rem] md:rounded-[5rem] p-16 md:p-32 flex flex-col items-center justify-center text-center space-y-12 md:space-y-20 hover:border-primary/40 transition-all group cursor-pointer shadow-3xl" 
                onClick={startProcessing}
              >
                <div className="w-24 h-24 md:w-40 md:h-40 bg-muted rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000 shadow-2xl">
                  <Upload size={64} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight">Portrait Existant</h3>
                  <p className="text-muted-foreground text-xl md:text-2xl font-light italic leading-relaxed">Sélectionnez une photographie haute résolution pour un rendu optimal de votre avatar.</p>
                </div>
                <Button variant="outline" className="rounded-full border-border px-16 md:px-24 h-20 md:h-28 font-bold uppercase tracking-[0.4em] text-lg md:text-xl hover:bg-foreground/5 transition-all h-auto py-6">Choisir Fichier</Button>
              </Card>
            </div>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-32 md:py-48 space-y-16 md:space-y-24 soft-reveal text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 blur-[200px] animate-pulse" />
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 border-4 border-primary/20 rounded-full animate-ping" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-80 md:h-80 border-2 border-primary/40 rounded-full animate-spin duration-[4000ms]" />
                  <RefreshCw size={80} className="text-primary absolute animate-spin-slow" />
                </div>
              </div>
              <div className="space-y-10 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Sparkles className="text-primary animate-bounce" size={48} />
                  <h3 className="text-5xl md:text-9xl font-serif font-bold luxury-gold-gradient uppercase tracking-tighter">Éveil de l'Avatar...</h3>
                </div>
                <p className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-[1.5em] animate-pulse">Scan Morphologique • Textures Onyx • Rendu 4K</p>
              </div>
            </div>
          )}

          {step === 'mirror' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 soft-reveal">
              <div className="lg:col-span-8 relative aspect-[3/4] rounded-[3rem] md:rounded-[6rem] overflow-hidden border border-border shadow-3xl bg-card/40 group">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === 'ai-avatar-tryon')?.imageUrl || defaultImg} 
                  alt="AI Avatar Mirror" 
                  fill 
                  className="object-cover transition-transform duration-[6000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent p-12 md:p-24 flex flex-col md:flex-row justify-between items-end gap-8">
                   <div className="flex flex-col gap-10">
                     <div className="flex gap-8 items-center bg-background/40 backdrop-blur-2xl px-12 py-6 rounded-full border border-border group/btn cursor-pointer shadow-2xl">
                       <RotateCw size={36} className="text-primary group-hover/btn:rotate-180 transition-transform duration-1000" />
                       <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-foreground">Rotation 360° Élite</span>
                     </div>
                     <div className="flex gap-6">
                        <Badge className="bg-primary text-primary-foreground font-bold uppercase tracking-widest px-8 py-3 rounded-full text-xs">Face</Badge>
                        <Badge variant="outline" className="border-border text-muted-foreground font-bold uppercase tracking-widest px-8 py-3 rounded-full text-xs">Profil</Badge>
                        <Badge variant="outline" className="border-border text-muted-foreground font-bold uppercase tracking-widest px-8 py-3 rounded-full text-xs">Dos</Badge>
                     </div>
                   </div>
                   <Button size="icon" className="w-24 h-24 rounded-full bg-background/40 backdrop-blur-3xl hover:bg-primary hover:text-primary-foreground transition-all border border-border shadow-3xl">
                      <Eye size={40} />
                   </Button>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-16">
                <div className="p-12 md:p-16 bg-card/60 backdrop-blur-3xl rounded-[3.5rem] md:rounded-[5rem] border border-border space-y-12 md:space-y-16 shadow-3xl">
                  <header className="space-y-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase tracking-[0.5em] px-8 py-3 rounded-full font-bold">Sélection en Essayage</Badge>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight leading-tight">Robe Émeraude <br/> Impériale</h3>
                  </header>
                  
                  <div className="p-10 bg-background/40 rounded-[3rem] border border-border flex items-center gap-10 group hover:border-primary/40 transition-all shadow-xl">
                    <div className="w-28 h-28 relative rounded-[2rem] overflow-hidden shadow-2xl">
                      <Image src={PlaceHolderImages.find(p => p.id === 'shopping-fashion')?.imageUrl || defaultImg} alt="Item" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl md:text-3xl font-bold luxury-gold-gradient tracking-tight">450,000 FCFA</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em]">Réf: RT-4421-VIP</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8 pt-8">
                    <Link href="/cart">
                       <Button className="w-full rounded-full bg-primary text-primary-foreground h-24 md:h-28 font-bold uppercase tracking-[0.5em] text-xl border-none shadow-3xl hover:scale-105 transition-all h-auto py-6">
                          Acquérir l'Article
                       </Button>
                    </Link>
                    <Button variant="outline" className="rounded-full border-border h-24 md:h-28 font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs flex gap-6 hover:bg-foreground/5 transition-all h-auto py-6">
                      <Share2 size={28} className="text-primary" /> Partager l'Apparence
                    </Button>
                  </div>
                </div>

                <div className="p-12 md:p-16 bg-primary/5 rounded-[3.5rem] md:rounded-[5rem] border border-primary/20 space-y-12 shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-[3000ms]">
                    <Sparkles size={120} />
                  </div>
                  <div className="flex items-center gap-6 relative z-10">
                    <Gem size={32} className="text-primary" />
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">Accords de Prestige</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-8 relative z-10">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer group shadow-2xl">
                         <Image src={`https://picsum.photos/seed/reco-tryon-${i}/400/400`} alt="Reco" width={400} height={400} className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] opacity-60 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.5em] text-center relative z-10 leading-relaxed">Suggestions basées sur votre morphologie Élite</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
