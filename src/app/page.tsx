
'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Globe, Banknote, ArrowRight, Sparkles, Activity, ShieldCheck, Heart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [screen, setScreen] = useState<'splash' | 'language' | 'currency' | 'main'>('splash');
  const [language, setLanguage] = useState('Français');
  const [currency, setCurrency] = useState('Euro (EUR)');

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('language'), 3000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  if (screen === 'splash') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-12 animate-in fade-in zoom-in duration-1000">
          <div className="w-48 h-48 bg-primary rounded-[3rem] flex items-center justify-center text-black shadow-[0_0_80px_rgba(212,175,55,0.6)] rotate-12">
            <Crown size={80} />
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif luxury-gold-gradient tracking-tighter uppercase">Monde de Transformation</h1>
            <p className="text-zinc-600 font-bold uppercase tracking-[0.8em] text-xs">Excellence & Prestige</p>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'language') {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl w-full space-y-16 text-center">
          <Globe className="text-primary mx-auto mb-8 animate-bounce" size={60} />
          <h2 className="text-5xl font-serif luxury-gold-gradient">Choisissez votre langue</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Français', 'English', 'Español', 'Deutsch', 'Italiano', 'Português', 'Русский', '中文', '日本語'].map((lang) => (
              <Button 
                key={lang} 
                variant={language === lang ? 'default' : 'outline'}
                onClick={() => setLanguage(lang)}
                className={`rounded-2xl h-16 text-sm font-bold uppercase tracking-widest ${language === lang ? 'bg-primary' : 'border-white/10'}`}
              >
                {lang}
              </Button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('currency')} className="w-full h-20 rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] shadow-2xl">
            Continuer
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'currency') {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl w-full space-y-16 text-center">
          <Banknote className="text-primary mx-auto mb-8 animate-pulse" size={60} />
          <h2 className="text-5xl font-serif luxury-gold-gradient">Choisissez votre monnaie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Dollar (USD)', 'Euro (EUR)', 'Franc CFA (XOF)', 'Livre (GBP)', 'Yuan (CNY)', 'Yen (JPY)'].map((curr) => (
              <Button 
                key={curr} 
                variant={currency === curr ? 'default' : 'outline'}
                onClick={() => setCurrency(curr)}
                className={`rounded-2xl h-16 text-sm font-bold uppercase tracking-widest ${currency === curr ? 'bg-primary' : 'border-white/10'}`}
              >
                {curr}
              </Button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('main')} className="w-full h-20 rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] shadow-2xl">
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
        {/* Main Hub Title */}
        <header className="space-y-8 soft-reveal text-center md:text-left">
          <Badge className="bg-primary/10 text-primary border-primary/30 py-2 px-8 rounded-full text-[10px] font-bold tracking-[0.5em] uppercase">Bienvenue au Sommet</Badge>
          <h1 className="text-7xl md:text-[9rem] font-serif font-bold leading-[0.85] tracking-tighter luxury-gold-gradient">
            Monde de <br/> Transformation
          </h1>
          <p className="text-zinc-500 text-2xl font-light max-w-3xl italic mx-auto md:mx-0">L'écosystème ultime pour votre évolution physique et mentale.</p>
        </header>

        {/* Two Main Universes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <Link href="/services" className="group">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-primary/40 shadow-3xl">
              <Image src="https://picsum.photos/seed/univers-serv/800/1000" alt="Univers des Services" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end gap-6">
                <Sparkles size={48} className="text-primary" />
                <h2 className="text-5xl font-serif font-bold uppercase tracking-tighter">Univers des Services</h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">Beauté, Sport, Nutrition, Shopping et Coaching.</p>
                <Button className="w-fit bg-primary text-black rounded-full px-10 font-bold uppercase tracking-widest mt-4">Découvrir les services</Button>
              </div>
            </div>
          </Link>

          <Link href="/tracking" className="group">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-primary/40 shadow-3xl">
              <Image src="https://picsum.photos/seed/univers-track/800/1000" alt="Suivi de Transformation" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end gap-6">
                <Activity size={48} className="text-primary" />
                <h2 className="text-5xl font-serif font-bold uppercase tracking-tighter">Mon Suivi de Transformation</h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">Progression, Santé, Analyse corporelle et Evolution.</p>
                <Button className="w-fit border border-primary text-primary rounded-full px-10 font-bold uppercase tracking-widest mt-4 hover:bg-primary hover:text-black">Voir mon évolution</Button>
              </div>
            </div>
          </Link>
        </section>

        {/* Exclusive Trust Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-32 border-t border-white/5">
          <div className="text-center space-y-6">
            <ShieldCheck size={40} className="text-primary mx-auto opacity-40" />
            <h4 className="text-2xl font-bold uppercase tracking-tight">Confidentialité Élite</h4>
            <p className="text-zinc-500 font-light italic leading-relaxed text-sm">Vos données et votre transformation sont protégées par les standards de sécurité les plus élevés.</p>
          </div>
          <div className="text-center space-y-6">
            <Heart size={40} className="text-primary mx-auto opacity-40" />
            <h4 className="text-2xl font-bold uppercase tracking-tight">Accompagnement Dédié</h4>
            <p className="text-zinc-500 font-light italic leading-relaxed text-sm">Nos experts et notre IA travaillent de concert pour votre réussite absolue.</p>
          </div>
          <div className="text-center space-y-6">
            <User size={40} className="text-primary mx-auto opacity-40" />
            <h4 className="text-2xl font-bold uppercase tracking-tight">Cercle Privé</h4>
            <p className="text-zinc-500 font-light italic leading-relaxed text-sm">Accédez à un réseau exclusif de personnalités partageant la même quête d'excellence.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
