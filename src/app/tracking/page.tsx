
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
    { label: 'Poids Actuel', value: '72.5 kg', icon: <Weight />, color: 'text-primary' },
    { label: 'Objectif', value: '68.0 kg', icon: <Target />, color: 'text-orange-500' },
    { label: 'Taille', value: '178 cm', icon: <Ruler />, color: 'text-blue-500' },
    { label: 'IMC', value: '22.9', sub: 'Normal', icon: <Info />, color: 'text-green-500' },
  ];

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/40 text-primary px-8 py-2 uppercase text-[10px] tracking-[0.5em] font-bold rounded-full">Mon Évolution</Badge>
            <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.85]">Suivi de <br/> Transformation.</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full border-white/10 h-16 px-8 font-bold uppercase tracking-widest gap-4">
              <Camera size={20} /> Avant / Après
            </Button>
            <Button className="rounded-full bg-primary text-black h-16 px-8 font-bold uppercase tracking-widest">
              Nouvelle Mesure
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-zinc-900/20 border-white/5 rounded-[2.5rem] p-10 hover:border-primary/30 transition-all duration-700 shadow-2xl group">
              <div className={`p-4 rounded-2xl bg-zinc-800 w-fit mb-8 group-hover:bg-primary group-hover:text-black transition-all ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{stat.label}</p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-4xl font-bold font-headline">{stat.value}</h3>
                  {stat.sub && <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{stat.sub}</span>}
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* BMI & Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <ActivityChart />
          </div>
          <div className="lg:col-span-4 space-y-12">
            <Card className="bg-zinc-900/40 border-white/10 rounded-[2.5rem] p-12 space-y-8 shadow-3xl">
              <h3 className="text-3xl font-serif font-bold luxury-gold-gradient">Objectif Fitness</h3>
              <div className="space-y-6">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-zinc-500">Progression Perte de Poids</span>
                  <span className="text-primary">65%</span>
                </div>
                <Progress value={65} className="h-2 bg-zinc-800" />
                <p className="text-zinc-500 text-sm italic font-light">Encore 4.5kg pour atteindre votre poids de forme idéal.</p>
              </div>
              <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase text-[10px] tracking-widest flex items-center gap-4">
                Modifier mes objectifs <TrendingUp size={14} />
              </Button>
            </Card>

            <Card className="bg-primary/5 border-primary/20 rounded-[2.5rem] p-12 space-y-6 shadow-3xl">
              <Calendar className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold uppercase tracking-tight">Prochain Rendez-vous</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed italic">Analyse corporelle complète avec Dr. Thomas le <br/> <span className="text-white font-bold">Lundi 12 Octobre à 09:30</span>.</p>
              <Button size="sm" className="bg-primary text-black rounded-full font-bold uppercase tracking-widest w-full mt-4">Confirmer</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
