'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Ruler, Weight, User, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AnalysisPage() {
  const [weight, setWeight] = useState(72.5);
  const [height, setHeight] = useState(178);
  const [age, setAge] = useState(30);

  const bmi = weight / ((height / 100) * (height / 100));
  
  const getStatus = (val: number) => {
    if (val < 18.5) return { label: 'Sous-poids', color: 'text-blue-400' };
    if (val < 25) return { label: 'Normal', color: 'text-green-500' };
    if (val < 30) return { label: 'Surpoids', color: 'text-orange-500' };
    return { label: 'Obésité', color: 'text-red-500' };
  };

  const status = getStatus(bmi);

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-16 space-y-16 md:space-y-24">
        <header className="space-y-6 md:space-y-8 soft-reveal text-center md:text-left">
           <Link href="/tracking" className="flex items-center justify-center md:justify-start gap-4 text-zinc-600 hover:text-primary transition-colors group">
            <ArrowLeft size={18} />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em]">Retour au suivi</span>
          </Link>
          <h1 className="text-5xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">Analyse <br/> Corporelle.</h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light italic mx-auto md:mx-0">Comprendre votre temple biologique pour mieux le transformer.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          <div className="lg:col-span-6 space-y-8 md:space-y-12">
            <Card className="bg-zinc-900/40 border-white/5 rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 space-y-10 md:space-y-12 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <div className="grid gap-4 md:gap-6">
                  <Label className="flex items-center gap-3 md:gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold ml-2">
                    <Ruler size={16} /> Taille (cm)
                  </Label>
                  <Input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))} 
                    className="h-16 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border-white/10 text-xl md:text-2xl px-6 md:px-8 text-primary font-bold focus:ring-primary/40"
                  />
                </div>
                <div className="grid gap-4 md:gap-6">
                  <Label className="flex items-center gap-3 md:gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold ml-2">
                    <Weight size={16} /> Poids (kg)
                  </Label>
                  <Input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))} 
                    className="h-16 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border-white/10 text-xl md:text-2xl px-6 md:px-8 text-primary font-bold focus:ring-primary/40"
                  />
                </div>
                <div className="grid gap-4 md:gap-6">
                  <Label className="flex items-center gap-3 md:gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold ml-2">
                    <User size={16} /> Âge
                  </Label>
                  <Input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(Number(e.target.value))} 
                    className="h-16 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border-white/10 text-xl md:text-2xl px-6 md:px-8 text-primary font-bold focus:ring-primary/40"
                  />
                </div>
                <div className="grid gap-4 md:gap-6">
                  <Label className="flex items-center gap-3 md:gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold ml-2">
                    <Activity size={16} /> Sexe
                  </Label>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 rounded-xl md:rounded-2xl h-16 md:h-20 border-white/10 bg-white/5 font-bold uppercase tracking-widest text-[10px] md:text-xs">Homme</Button>
                    <Button variant="outline" className="flex-1 rounded-xl md:rounded-2xl h-16 md:h-20 border-white/10 bg-white/5 font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-40">Femme</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <Card className="bg-primary/5 border-primary/20 rounded-[2rem] md:rounded-[3.5rem] p-10 md:p-16 flex flex-col items-center justify-center text-center space-y-8 md:space-y-10 shadow-3xl">
              <div className="space-y-4">
                <p className="text-zinc-600 text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold">Votre IMC Actuel</p>
                <h3 className="text-7xl md:text-[10rem] font-serif font-bold luxury-gold-gradient leading-none">{bmi.toFixed(1)}</h3>
                <Badge className={`${status.color} bg-white/5 border-none px-6 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold uppercase tracking-widest`}>
                  {status.label}
                </Badge>
              </div>
              <div className="w-full max-w-sm space-y-4 md:space-y-6">
                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                   <span>Performance Idéale</span>
                   <span>82%</span>
                 </div>
                 <Progress value={82} className="h-2 md:h-3 bg-zinc-900" />
              </div>
              <p className="text-zinc-500 font-light italic text-lg md:text-xl leading-relaxed max-w-md">"Votre structure biologique est dans une phase optimale de transformation. Continuez vos rituels nutritifs Élite."</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
