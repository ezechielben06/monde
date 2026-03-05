
'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Globe, Banknote, Sparkles, Activity, ShieldCheck, Heart, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function OnboardingPage() {
  const [screen, setScreen] = useState<'splash' | 'language' | 'currency' | 'main'>('splash');
  const [language, setLanguage] = useState('Français');
  const [currency, setCurrency] = useState('Euro (EUR)');

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('language'), 3500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  if (screen === 'splash') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[180px] animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-16 animate-in fade-in zoom-in duration-1000">
          <div className="w-56 h-56 bg-primary rounded-[3.5rem] flex items-center justify-center text-black shadow-[0_0_100px_rgba(212,175,55,0.7)] rotate-12">
            <Crown size={100} />
          </div>
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-8xl font-serif luxury-gold-gradient tracking-tighter uppercase leading-none">Monde de <br/> Transformation</h1>
            <p className="text-zinc-600 font-bold uppercase tracking-[1em] text-[10px] md:text-xs">Excellence & Prestige Absolu</p>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'language') {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-12">
        <div className="max-w-4xl w-full space-y-24 text-center soft-reveal">
          <Globe className="text-primary mx-auto animate-bounce" size={80} />
          <h2 className="text-6xl md:text-8xl font-serif luxury-gold-gradient leading-tight">Choisissez <br/> votre langue</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Français', 'English', 'Español', 'Deutsch', 'Italiano', 'Português', 'Русский', '中文', '日本語', '한국어', 'हिन्दी'].map((lang) => (
              <Button 
                key={lang} 
                variant={language === lang ? 'default' : 'outline'}
                onClick={() => setLanguage(lang)}
                className={`rounded-2xl min-h-[5rem] text-sm font-bold uppercase tracking-widest transition-all ${language === lang ? 'bg-primary scale-105' : 'border-white/10 hover:border-primary/40'}`}
              >
                {lang}
              </Button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('currency')} className="w-full md:w-fit px-32 h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.5em] shadow-3xl text-xl hover:bg-white transition-all">
            Continuer
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'currency') {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-12">
        <div className="max-w-4xl w-full space-y-24 text-center soft-reveal">
          <Banknote className="text-primary mx-auto animate-pulse" size={80} />
          <h2 className="text-6xl md:text-8xl font-serif luxury-gold-gradient leading-tight">Choisissez <br/> votre monnaie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'Dollar (USD)', 'Euro (EUR)', 'Franc CFA (XOF)', 
              'Livre Sterling (GBP)', 'Yuan (CNY)', 'Yen (JPY)', 
              'Won Coréen (KRW)', 'Roupie Indienne (INR)', 'Real Brésilien (BRL)'
            ].map((curr) => (
              <Button 
                key={curr} 
                variant={currency === curr ? 'default' : 'outline'}
                onClick={() => setCurrency(curr)}
                className={`rounded-2xl min-h-[5rem] text-sm font-bold uppercase tracking-widest transition-all ${currency === curr ? 'bg-primary scale-105' : 'border-white/10 hover:border-primary/40'}`}
              >
                {curr}
              </Button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('main')} className="w-full md:w-fit px-32 h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.5em] shadow-3xl text-xl hover:bg-white transition-all">
            Entrer dans l'application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <header className="space-y-12 soft-reveal text-center md:text-left">
          <Badge className="bg-primary/10 text-primary border-primary/30 py-3 px-10 rounded-full text-[10px] font-bold tracking-[0.6em] uppercase">Bienvenue au Palais de l'Excellence</Badge>
          <h1 className="text-7xl md:text-[9.5rem] font-serif font-bold leading-[0.8] tracking-tighter luxury-gold-gradient">
            Monde de <br/> Transformation
          </h1>
          <p className="text-zinc-500 text-3xl font-light max-w-4xl italic mx-auto md:mx-0 leading-relaxed">
            "L'excellence n'est pas un acte, c'est une habitude." <br/>
            Redéfinissez votre héritage physique et mental.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <Link href="/services" className="group">
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/5 transition-all duration-1000 group-hover:border-primary/50 shadow-3xl">
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'beauty-hair')?.imageUrl || ""}
                alt="Univers des Services" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-105 opacity-50 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-16 flex flex-col justify-end gap-8">
                <Sparkles size={60} className="text-primary animate-pulse" />
                <div className="space-y-4">
                  <h2 className="text-6xl font-serif font-bold uppercase tracking-tight">Univers des <br/> Services</h2>
                  <p className="text-zinc-400 text-xl font-light leading-relaxed italic">Beauté, Sport, Nutrition, Luxury Shopping & Coaching Privé.</p>
                </div>
                <div className="flex items-center gap-6 text-primary font-bold uppercase text-xs tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 duration-700">
                  Découvrir les services <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tracking" className="group">
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/5 transition-all duration-1000 group-hover:border-primary/50 shadow-3xl">
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'tracking-evolution')?.imageUrl || ""}
                alt="Mon Suivi de Transformation" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-105 opacity-50 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-16 flex flex-col justify-end gap-8">
                <Activity size={60} className="text-primary animate-pulse" />
                <div className="space-y-4">
                  <h2 className="text-6xl font-serif font-bold uppercase tracking-tight">Mon Suivi de <br/> Transformation</h2>
                  <p className="text-zinc-400 text-xl font-light leading-relaxed italic">Progression, Santé, Analyse corporelle & Évolution IA.</p>
                </div>
                <div className="flex items-center gap-6 text-primary font-bold uppercase text-xs tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 duration-700">
                  Voir mon évolution <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-24 pt-40 border-t border-white/5">
          {[
            { title: "Confidentialité Diamond", icon: <ShieldCheck size={50} />, desc: "Vos données et votre parcours sont protégés par les protocoles de sécurité les plus stricts au monde." },
            { title: "Accompagnement Élite", icon: <Heart size={50} />, desc: "Une synergie unique entre experts humains et intelligence artificielle de pointe pour votre réussite." },
            { title: "Cercle Privé B-right", icon: <User size={50} />, desc: "Accès exclusif à une communauté de leaders partageant la même quête de perfection." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-8 group">
              <div className="text-primary mx-auto opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">{item.icon}</div>
              <h4 className="text-3xl font-headline font-bold uppercase tracking-tight">{item.title}</h4>
              <p className="text-zinc-500 font-light italic leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className="py-24 text-center border-t border-white/5 opacity-40">
        <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600">© 2024 Monde de Transformation • L'Héritage de l'Excellence</p>
      </footer>
    </div>
  );
}
