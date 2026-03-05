
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Dumbbell, Sparkles, Brain, Heart, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const GOALS = [
  { id: 'weight', title: 'Perdre du Poids', desc: 'Affiner votre silhouette avec élégance et précision.', icon: <Target size={32} />, category: 'Physique' },
  { id: 'muscle', title: 'Prendre du Muscle', desc: 'Sculpter un corps athlétique et puissant.', icon: <Dumbbell size={32} />, category: 'Athlétique' },
  { id: 'style', title: 'Améliorer son Style', desc: 'Redéfinir votre image et votre prestance.', icon: <Sparkles size={32} />, category: 'Esthétique' },
  { id: 'confidence', title: 'Améliorer sa Confiance', desc: 'Maîtriser votre mentalité pour un leadership total.', icon: <Brain size={32} />, category: 'Mental' },
];

export default function GoalsPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="space-y-8 soft-reveal">
          <Link href="/tracking" className="flex items-center gap-4 text-zinc-600 hover:text-primary transition-colors group">
            <ArrowLeft size={18} />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Retour au suivi</span>
          </Link>
          <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">Mes Objectifs <br/> d'Excellence.</h1>
          <p className="text-2xl text-zinc-500 font-light italic">Définissez votre quête. Nous tracerons le chemin.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {GOALS.map((goal) => (
            <Card key={goal.id} className="bg-zinc-900/40 border-white/5 rounded-[3.5rem] p-16 hover:border-primary/40 transition-all group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 scale-150">
                {goal.icon}
              </div>
              <div className="relative z-10 space-y-8">
                <div className="text-primary group-hover:scale-110 transition-transform origin-left">{goal.icon}</div>
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-none px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest">{goal.category}</Badge>
                  <h3 className="text-5xl font-serif font-bold leading-tight">{goal.title}</h3>
                  <p className="text-zinc-500 text-xl font-light italic leading-relaxed">{goal.desc}</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Badge variant="outline" className="border-white/5 bg-white/5 text-[9px] uppercase tracking-widest px-5 py-2">Sport</Badge>
                  <Badge variant="outline" className="border-white/5 bg-white/5 text-[9px] uppercase tracking-widest px-5 py-2">Nutrition</Badge>
                  <Badge variant="outline" className="border-white/5 bg-white/5 text-[9px] uppercase tracking-widest px-5 py-2">Coaching</Badge>
                </div>
                <Button className="rounded-full bg-white text-black group-hover:bg-primary transition-all px-12 h-16 uppercase font-bold tracking-widest text-xs">Sélectionner</Button>
              </div>
            </Card>
          ))}
        </section>

        <section className="bg-primary/5 rounded-[4rem] p-24 border border-primary/20 text-center space-y-12 soft-reveal shadow-3xl">
           <Heart size={64} className="text-primary mx-auto animate-pulse" />
           <div className="space-y-6 max-w-4xl mx-auto">
             <h2 className="text-6xl font-serif font-bold uppercase leading-tight">Prêt pour votre <br/> <span className="luxury-gold-gradient">Héritage Personnel</span> ?</h2>
             <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Une fois vos objectifs validés, nos algorithmes de prestige assembleront votre planning sur mesure intégrant soins, entraînements et rituels culinaires.</p>
           </div>
           <Button size="lg" className="rounded-full px-32 h-24 bg-primary text-black font-bold uppercase tracking-[0.4em] text-xl shadow-2xl hover:bg-white transition-all">
             Valider mes Quêtes
           </Button>
        </section>
      </main>
    </div>
  );
}
