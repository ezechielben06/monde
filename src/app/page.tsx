'use client';

import { useState, useEffect } from 'react';
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
  Gem, 
  Target, 
  TrendingUp, 
  Utensils, 
  ShoppingBag 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function OnboardingPage() {
  const [screen, setScreen] = useState<'splash' | 'language' | 'currency' | 'main'>('splash');
  const [language, setLanguage] = useState('Français');
  const [currency, setCurrency] = useState('Euro (EUR)');
  const [mounted, setMounted] = useState(false);

  const defaultPlaceholder = "https://picsum.photos/seed/placeholder-luxury/1200/800";

  useEffect(() => {
    setMounted(true);
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('language'), 2500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  if (!mounted) return null;

  if (screen === 'splash') {
    return (
      <div className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-12 animate-in fade-in zoom-in duration-1000">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-primary rounded-[2.5rem] flex items-center justify-center text-primary-foreground shadow-3xl rotate-12">
            <Crown size={64} className="md:w-20 md:h-20" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-serif luxury-gold-gradient tracking-tighter uppercase leading-none font-bold">Monde de <br/> Transformation</h1>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">Excellence & Prestige Absolu</p>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'language') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12 soft-reveal">
        <div className="max-w-4xl w-full space-y-12 md:space-y-20 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
            <Globe size={32} />
          </div>
          <h2 className="text-4xl md:text-7xl font-serif luxury-gold-gradient leading-tight font-bold uppercase">Choisissez <br/> votre langue</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {['Français', 'English', 'Español', 'Deutsch', 'Italiano', 'Português', 'Русский', '中文'].map((lang) => (
              <button 
                key={lang} 
                onClick={() => setLanguage(lang)}
                className={cn(
                  "rounded-2xl h-14 md:h-16 text-[10px] font-bold uppercase tracking-widest transition-all border",
                  language === lang 
                    ? "bg-primary text-primary-foreground border-primary shadow-xl" 
                    : "border-border hover:border-primary/40 text-muted-foreground bg-card/50"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('currency')} className="w-full md:w-fit px-12 md:px-24 rounded-full font-bold uppercase tracking-widest shadow-2xl h-auto py-6 text-sm">
            Suivant
          </Button>
        </div>
      </div>
    );
  }

  if (screen === 'currency') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12 soft-reveal">
        <div className="max-w-4xl w-full space-y-12 md:space-y-20 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
            <Banknote size={32} />
          </div>
          <h2 className="text-4xl md:text-7xl font-serif luxury-gold-gradient leading-tight font-bold uppercase">Choisissez <br/> votre monnaie</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {[
              'Dollar (USD)', 'Euro (EUR)', 'Franc CFA (XOF)', 
              'Livre Sterling (GBP)', 'Yuan (CNY)', 'Yen (JPY)'
            ].map((curr) => (
              <button 
                key={curr} 
                onClick={() => setCurrency(curr)}
                className={cn(
                  "rounded-2xl h-14 md:h-16 text-[10px] font-bold uppercase tracking-widest transition-all border",
                  currency === curr 
                    ? "bg-primary text-primary-foreground border-primary shadow-xl" 
                    : "border-border hover:border-primary/40 text-muted-foreground bg-card/50"
                )}
              >
                {curr}
              </button>
            ))}
          </div>
          <Button size="lg" onClick={() => setScreen('main')} className="w-full md:w-fit px-12 md:px-24 rounded-full font-bold uppercase tracking-widest shadow-2xl h-auto py-6 text-sm">
            Entrer au Cercle
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-20 md:space-y-40">
        <header className="space-y-8 soft-reveal text-center md:text-left">
          <Badge className="bg-primary/10 text-primary border-primary/20 py-2 px-6 rounded-full text-[10px] font-bold tracking-widest uppercase">Bienvenue au Palais de l'Excellence</Badge>
          <h1 className="text-5xl md:text-[10rem] font-serif font-bold leading-tight tracking-tighter luxury-gold-gradient uppercase">
            Monde de <br/> Transformation.
          </h1>
          <p className="text-muted-foreground text-lg md:text-3xl font-light max-w-4xl italic mx-auto md:mx-0 leading-relaxed">
            "L'excellence n'est pas un acte, c'est une habitude." <br/>
            Redéfinissez votre héritage physique et mental.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Link href="/services" className="group">
            <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-border transition-all duration-700 group-hover:border-primary/50 shadow-3xl bg-card">
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'beauty-hair')?.imageUrl || defaultPlaceholder}
                alt="Univers des Services" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent p-10 md:p-16 flex flex-col justify-end gap-8">
                <div className="flex gap-4">
                  <Sparkles size={28} className="text-primary" />
                  <Utensils size={28} className="text-primary/60" />
                  <ShoppingBag size={28} className="text-primary/40" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-6xl font-serif font-bold uppercase tracking-tight leading-none">Univers des <br/> Services</h2>
                  <p className="text-muted-foreground text-sm md:text-xl font-light italic">Beauté, Sport, Nutrition, Shopping & Coaching Privé.</p>
                </div>
                <div className="flex items-center gap-4 text-primary font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  Découvrir les services <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tracking" className="group">
            <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-border transition-all duration-700 group-hover:border-primary/50 shadow-3xl bg-card">
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'tracking-evolution')?.imageUrl || defaultPlaceholder}
                alt="Mon Suivi" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent p-10 md:p-16 flex flex-col justify-end gap-8">
                <div className="flex gap-4">
                  <Activity size={28} className="text-primary" />
                  <Target size={28} className="text-primary/60" />
                  <TrendingUp size={28} className="text-primary/40" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-6xl font-serif font-bold uppercase tracking-tight leading-none">Mon Suivi de <br/> Transformation</h2>
                  <p className="text-muted-foreground text-sm md:text-xl font-light italic">Progression, Santé, Analyse corporelle & Évolution IA.</p>
                </div>
                <div className="flex items-center gap-4 text-primary font-bold uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  Voir mon évolution <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-16 border-t border-border">
          {[
            { title: "Confidentialité Diamond", icon: <ShieldCheck size={40} />, desc: "Vos données et votre parcours sont protégés par les protocoles les plus stricts au monde." },
            { title: "Accompagnement Élite", icon: <Heart size={40} />, desc: "Une synergie unique entre experts humains et intelligence artificielle de pointe." },
            { title: "Cercle Privé B-right", icon: <User size={40} />, desc: "Accès exclusif à une communauté de leaders partageant la même quête." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-8 group">
              <div className="text-primary mx-auto opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">{item.icon}</div>
              <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground font-light italic leading-relaxed text-base">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className="py-20 text-center border-t border-border opacity-40">
        <Gem className="text-primary mx-auto mb-8 animate-pulse" size={32} />
        <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-muted-foreground px-6 leading-relaxed">© 2024 Monde de Transformation • L'Héritage de l'Excellence</p>
      </footer>
    </div>
  );
}