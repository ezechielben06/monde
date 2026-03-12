'use client';

import { useState, useEffect } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bmi = height > 0 ? weight / ((height / 100) * (height / 100)) : 0;
  
  const getStatus = (val: number) => {
    if (val < 18.5) return { label: 'Sous-poids', color: 'text-blue-400' };
    if (val < 25) return { label: 'Normal', color: 'text-green-500' };
    if (val < 30) return { label: 'Surpoids', color: 'text-orange-500' };
    return { label: 'Obésité', color: 'text-red-500' };
  };

  const status = getStatus(bmi);

  if (!mounted) return null;

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-background text-foreground transition-colors duration-500">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20 space-y-16 md:space-y-32">
        <header className="space-y-8 md:space-y-12 soft-reveal text-center md:text-left">
           <Link href="/tracking" className="flex items-center justify-center md:justify-start gap-6 text-muted-foreground hover:text-primary transition-colors group">
            <ArrowLeft size={24} className="group-hover:-translate-x-3 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Retour au suivi</span>
          </Link>
          <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">Analyse <br/> Corporelle.</h1>
          <p className="text-xl md:text-3xl text-muted-foreground font-light italic mx-auto md:mx-0 leading-relaxed max-w-4xl">Comprendre votre temple biologique pour mieux le transformer.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-6 space-y-10 md:space-y-16">
            <Card className="bg-card/40 border-border rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 space-y-12 md:space-y-16 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
                <div className="grid gap-6">
                  <Label className="flex items-center gap-4 text-muted-foreground text-[10px] uppercase tracking-widest font-bold ml-2">
                    <Ruler size={20} /> Taille (cm)
                  </Label>
                  <Input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))} 
                    className="h-20 md:h-28 rounded-3xl md:rounded-[2.5rem] bg-muted border-border text-2xl md:text-4xl px-8 md:px-12 text-primary font-bold focus:ring-primary/40 text-center"
                  />
                </div>
                <div className="grid gap-6">
                  <Label className="flex items-center gap-4 text-muted-foreground text-[10px] uppercase tracking-widest font-bold ml-2">
                    <Weight size={20} /> Poids (kg)
                  </Label>
                  <Input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))} 
                    className="h-20 md:h-28 rounded-3xl md:rounded-[2.5rem] bg-muted border-border text-2xl md:text-4xl px-8 md:px-12 text-primary font-bold focus:ring-primary/40 text-center"
                  />
                </div>
                <div className="grid gap-6">
                  <Label className="flex items-center gap-4 text-muted-foreground text-[10px] uppercase tracking-widest font-bold ml-2">
                    <User size={20} /> Âge
                  </Label>
                  <Input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(Number(e.target.value))} 
                    className="h-20 md:h-28 rounded-3xl md:rounded-[2.5rem] bg-muted border-border text-2xl md:text-4xl px-8 md:px-12 text-primary font-bold focus:ring-primary/40 text-center"
                  />
                </div>
                <div className="grid gap-6">
                  <Label className="flex items-center gap-4 text-muted-foreground text-[10px] uppercase tracking-widest font-bold ml-2">
                    <Activity size={20} /> Sexe
                  </Label>
                  <div className="flex gap-4 h-20 md:h-28">
                    <Button variant="outline" className="flex-1 rounded-[1.5rem] md:rounded-[2rem] h-full border-border bg-muted font-bold uppercase tracking-widest text-[10px] md:text-xs hover:border-primary transition-all">Homme</Button>
                    <Button variant="outline" className="flex-1 rounded-[1.5rem] md:rounded-[2rem] h-full border-border bg-muted font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-40 hover:opacity-100 transition-all">Femme</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <Card className="bg-primary/5 border-primary/20 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 flex flex-col items-center justify-center text-center space-y-12 md:space-y-20 shadow-3xl">
              <div className="space-y-6">
                <p className="text-muted-foreground text-[10px] md:text-base uppercase tracking-[0.5em] font-bold">Votre IMC Actuel</p>
                <h3 className="text-7xl md:text-[12rem] font-serif font-bold luxury-gold-gradient leading-none">{bmi.toFixed(1)}</h3>
                <Badge className={`${status.color} bg-background/50 border-border px-10 md:px-16 py-3 md:py-5 rounded-full text-lg md:text-3xl font-bold uppercase tracking-[0.3em] shadow-xl`}>
                  {status.label}
                </Badge>
              </div>
              <div className="w-full max-w-lg space-y-6 md:space-y-10">
                 <div className="flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-muted-foreground">
                   <span>Performance Idéale</span>
                   <span>82%</span>
                 </div>
                 <Progress value={82} className="h-3 md:h-5 bg-muted" />
              </div>
              <p className="text-muted-foreground font-light italic text-xl md:text-3xl leading-relaxed max-w-2xl">"Votre structure biologique est dans une phase optimale de transformation. Continuez vos rituels nutritifs Élite."</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
