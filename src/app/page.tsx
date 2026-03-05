'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Globe, 
  Banknote, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Heart, 
  User, 
  ArrowRight, 
  Star, 
  Gem, 
  Target, 
  TrendingUp, 
  Utensils, 
  ShoppingBag 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function OnboardingPage() {
  const [screen, setScreen] = useState<'splash' | 'language' | 'currency' | 'main'>('splash');
  const [language, setLanguage] = useState('Français');
  const [currency, setCurrency] = useState('Euro (EUR)');

  const defaultPlaceholder = "https://picsum.photos/seed/placeholder/800/1000";

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('language'), 3000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  if (screen === 'splash') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden p-6 text-center">
        <div className="absolute inset-0 bg-primary/10 blur-[180px] animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-10 md:gap-16 animate-in fade-in zoom-in duration-1000">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-primary rounded-[2rem] flex items-center justify-center text-black shadow-[0_0_80px_rgba(212,175,55,0.6)] rotate-12">
            <Crown className="w-16 h-16 md:w-24 md:h-24" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-6xl font-serif luxury-gold-gradient tracking-tighter uppercase leading-none">Monde de <br/> Transformation</h1>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[8px] md:text-xs">Excellence & Prestige Absolu</p>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'language') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-4xl w-full space-y-12 md:space-y-20 text-center soft-reveal">
          <Globe className="text-primary mx-auto animate-bounce w-12 h-12 md:w-16 md:h-16" />
          <h2 className="text-4xl md:text-7xl font-serif luxury-gold-gradient leading-tight">Choisissez <br/> votre langue</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
            {['Français', 'English', 'Español', 'Deutsch', 'Italiano', 'Português', 'Русский', '中文', '日本語', '한국어', 'हिन्दी'].map((lang) => (
              <Button 
                key={lang} 
                variant={language === lang ? 'default' : 'outline'}
                onClick={() => setLanguage(lang)}
                className={`rounded-2xl h-14 md:h-16 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${language === lang ? 'bg-primary scale-105' : 'border-border hover:border-primary/40'}`}
              >
                {lang}
              </Button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('currency')} className="w-full md:w-fit px-12 md:px-24 h-16 md:h-20 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
            Continuer
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'currency') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-4xl w-full space-y-12 md:space-y-20 text-center soft-reveal">
          <Banknote className="text-primary mx-auto animate-pulse w-12 h-12 md:w-16 md:h-16" />
          <h2 className="text-4xl md:text-7xl font-serif luxury-gold-gradient leading-tight">Choisissez <br/> votre monnaie</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
            {[
              'Dollar (USD)', 'Euro (EUR)', 'Franc CFA (XOF)', 
              'Livre Sterling (GBP)', 'Yuan (CNY)', 'Yen (JPY)', 
              'Won Coréen (KRW)', 'Roupie Indienne (INR)', 'Real Brésilien (BRL)'
            ].map((curr) => (
              <Button 
                key={curr} 
                variant={currency === curr ? 'default' : 'outline'}
                onClick={() => setCurrency(curr)}
                className={`rounded-2xl h-14 md:h-16 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${currency === curr ? 'bg-primary scale-105' : 'border-border hover:border-primary/40'}`}
              >
                {curr}
              </Button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('main')} className="w-full md:w-fit px-12 md:px-24 h-16 md:h-20 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
            Entrer dans l'application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-24 bg-background text-foreground">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-20 md:space-y-32">
        <header className="space-y-6 md:space-y-10 soft-reveal text-center md:text-left">
          <Badge className="bg-primary/10 text-primary border-primary/20 py-2 px-6 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase">Bienvenue au Palais de l'Excellence</Badge>
          <h1 className="text-4xl md:text-[8rem] font-serif font-bold leading-tight tracking-tighter luxury-gold-gradient">
            Monde de <br/> Transformation
          </h1>
          <p className="text-muted-foreground text-lg md:text-2xl font-light max-w-3xl italic mx-auto md:mx-0 leading-relaxed">
            "L'excellence n'est pas un acte, c'est une habitude." <br/>
            Redéfinissez votre héritage physique et mental.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Link href="/services" className="group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border transition-all duration-700 group-hover:border-primary/50 shadow-2xl bg-card">
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'beauty-hair')?.imageUrl || defaultPlaceholder}
                alt="Univers des Services" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-8 md:p-12 flex flex-col justify-end gap-6">
                <div className="flex gap-3">
                  <Sparkles size={28} className="text-primary" />
                  <Utensils size={28} className="text-primary/60" />
                  <ShoppingBag size={28} className="text-primary/40" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight">Univers des <br/> Services</h2>
                  <p className="text-muted-foreground text-sm md:text-lg font-light italic">Beauté, Sport, Nutrition, Shopping & Coaching Privé.</p>
                </div>
                <div className="flex items-center gap-3 text-primary font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  Découvrir les services <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tracking" className="group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border transition-all duration-700 group-hover:border-primary/50 shadow-2xl bg-card">
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'tracking-evolution')?.imageUrl || defaultPlaceholder}
                alt="Mon Suivi de Transformation" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-8 md:p-12 flex flex-col justify-end gap-6">
                <div className="flex gap-3">
                  <Activity size={28} className="text-primary" />
                  <Target size={28} className="text-primary/60" />
                  <TrendingUp size={28} className="text-primary/40" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight">Mon Suivi de <br/> Transformation</h2>
                  <p className="text-muted-foreground text-sm md:text-lg font-light italic">Progression, Santé, Analyse corporelle & Évolution IA.</p>
                </div>
                <div className="flex items-center gap-3 text-primary font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  Voir mon évolution <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Pricing Sections */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-7xl font-serif luxury-gold-gradient font-bold leading-tight">Les Cercles <br/> d'Excellence.</h2>
            <p className="text-muted-foreground text-lg italic">Choisissez votre palier d'immersion dans le luxe absolu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cercle Éclat", price: "25k FCFA", period: "mois", features: ["Accès salle VIP", "1 Coaching privé/mois", "Analyse corporelle IA", "Privilèges Shopping"], badge: "Essentiel" },
              { title: "Cercle Impérial", price: "55k FCFA", period: "mois", features: ["Accès illimité 24/7", "4 Coachings privés/mois", "Menu Nutrition sur mesure", "Conciergerie Beauté", "Miroir Virtuel IA"], badge: "Populaire", featured: true },
              { title: "Cercle Diamond", price: "150k FCFA", period: "mois", features: ["Accès total Prestige", "Coaching quotidien privé", "Chef à domicile (2/sem)", "Soins Beauté illimités", "Essayage VIP Prioritaire"], badge: "Élite" }
            ].map((tier, i) => (
              <div key={i} className={`relative p-10 rounded-3xl border ${tier.featured ? 'border-primary bg-primary/5 shadow-2xl' : 'border-border bg-card/50'} space-y-8 transition-all hover:scale-[1.02] duration-500`}>
                <div className="space-y-2">
                  <Badge className="bg-primary text-primary-foreground font-bold uppercase text-[9px] tracking-widest">{tier.badge}</Badge>
                  <h3 className="text-3xl font-serif font-bold">{tier.title}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold luxury-gold-gradient">{tier.price}</span>
                  <span className="text-muted-foreground font-bold uppercase text-[10px]">/{tier.period}</span>
                </div>
                <ul className="space-y-4">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm italic">
                      <Star size={14} className="text-primary/60 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full h-14 rounded-full font-bold uppercase tracking-widest ${tier.featured ? 'bg-primary text-primary-foreground' : 'bg-foreground text-background'}`}>Rejoindre le Cercle</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Heritage Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-border">
          {[
            { title: "Confidentialité Diamond", icon: <ShieldCheck size={40} />, desc: "Vos données et votre parcours sont protégés par les protocoles de sécurité les plus stricts au monde." },
            { title: "Accompagnement Élite", icon: <Heart size={40} />, desc: "Une synergie unique entre experts humains et intelligence artificielle de pointe pour votre réussite." },
            { title: "Cercle Privé B-right", icon: <User size={40} />, desc: "Accès exclusif à une communauté de leaders partageant la même quête de perfection." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6 group">
              <div className="text-primary mx-auto opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">{item.icon}</div>
              <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground font-light italic leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className="py-16 text-center border-t border-border opacity-60">
        <Gem className="text-primary mx-auto mb-6 animate-pulse" size={28} />
        <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-muted-foreground px-6">© 2024 Monde de Transformation • L'Héritage de l'Excellence</p>
      </footer>
    </div>
  );
}
