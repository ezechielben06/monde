'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Activity, Target, TrendingUp, User, Ruler, Weight, Info, Camera, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function TrackingDashboardPage() {
  const stats = [
    { label: 'Poids Actuel', value: '72.5 kg', icon: <Weight size={20} />, color: 'text-primary' },
    { label: 'Objectif', value: '68.0 kg', icon: <Target size={20} />, color: 'text-orange-500' },
    { label: 'Taille', value: '178 cm', icon: <Ruler size={20} />, color: 'text-blue-500' },
    { label: 'IMC', value: '22.9', sub: 'Normal', icon: <Info size={20} />, color: 'text-green-500' },
  ];

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-10 md:py-16 space-y-12 md:space-y-24">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 soft-reveal text-center md:text-left">
          <div className="space-y-6 md:space-y-8">
            <Badge variant="outline" className="border-primary/40 text-primary px-6 md:px-8 py-2 uppercase text-[9px] md:text-[10px] tracking-widest font-bold rounded-full">Mon Évolution</Badge>
            <h1 className="text-4xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-tight font-bold uppercase">Suivi de <br/> Transformation.</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button variant="outline" className="rounded-full border-border h-14 md:h-16 px-8 font-bold uppercase tracking-widest gap-3 w-full sm:w-auto">
              <Camera size={18} /> Avant / Après
            </Button>
            <Button className="rounded-full bg-primary text-primary-foreground h-14 md:h-16 px-8 font-bold uppercase tracking-widest w-full sm:w-auto shadow-xl">
              Nouvelle Mesure
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-card/40 border-border rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 hover:border-primary/30 transition-all duration-700 shadow-xl group">
              <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-muted w-fit mb-4 md:mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-[8px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                  <h3 className="text-xl md:text-4xl font-bold font-headline">{stat.value}</h3>
                  {stat.sub && <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-zinc-500">{stat.sub}</span>}
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* BMI & Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          <div className="lg:col-span-8">
            <ActivityChart />
          </div>
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            <Card className="bg-card/60 backdrop-blur-xl border-border rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 space-y-6 md:space-y-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-serif font-bold luxury-gold-gradient uppercase">Objectif Fitness</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">Progression</span>
                  <span className="text-primary">65%</span>
                </div>
                <Progress value={65} className="h-2 bg-muted" />
                <p className="text-muted-foreground text-xs md:text-sm italic font-light">Encore 4.5kg pour atteindre votre objectif de forme.</p>
              </div>
              <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase text-[9px] md:text-[10px] tracking-widest flex items-center gap-3">
                Modifier mes objectifs <TrendingUp size={14} />
              </Button>
            </Card>

            <Card className="bg-primary/5 border-primary/20 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 space-y-4 md:space-y-6 shadow-2xl">
              <Calendar className="text-primary mb-2" size={24} className="md:w-8 md:h-8" />
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">Prochain RDV</h3>
              <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed italic">Analyse corporelle complète avec Dr. Thomas le <br className="hidden sm:block" /> <span className="text-foreground font-bold">Lundi 12 Octobre à 09:30</span>.</p>
              <Button size="sm" className="bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest w-full mt-2 h-12">Confirmer</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
