import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Flame, Heart, Trophy, Zap, Star, Crown, ShieldCheck, ArrowRight, Calendar, Sparkles, Check, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PRICING_PLANS = [
  {
    name: "Cercle Éclat",
    price: "25,000",
    period: "par mois",
    description: "L'essentiel de la transformation pour les esprits en quête d'harmonie.",
    features: [
      "Accès illimité aux installations",
      "Bilan vitalité trimestriel",
      "Assistant IA personnalisé",
      "Accès à la bibliothèque de savoir",
      "2 séances collectives par semaine"
    ],
    isPopular: false,
    cta: "Commencer l'ascension"
  },
  {
    name: "Cercle Impérial",
    price: "45,000",
    period: "par mois",
    description: "L'expérience B-right complète pour une excellence sans compromis.",
    features: [
      "Tout le Cercle Éclat",
      "Coaching privé mensuel",
      "Accès Prioritaire aux soins Spa",
      "Programme nutritionnel sur mesure",
      "Invitations aux événements VIP",
      "Conciergerie bien-être 7j/7"
    ],
    isPopular: true,
    cta: "Rejoindre l'élite"
  },
  {
    name: "Cercle Diamond",
    price: "120,000",
    period: "par mois",
    description: "L'ultime privilège. Une transformation totale pilotée par des maîtres.",
    features: [
      "Tout le Cercle Impérial",
      "Entraîneur privé dédié illimité",
      "Soin signature hebdomadaire",
      "Accès exclusif au Salon Privé",
      "Services de chauffeur privé",
      "Protocole de régénération avancé"
    ],
    isPopular: false,
    cta: "Incarner la légende"
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wellness');

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-24 bg-[#050505]">
      <Navbar />
      
      <main className="max-w-[1600px] mx-auto container-padding space-y-32">
        {/* Ultra-Luxury Hero Section */}
        <section className="relative h-[85vh] rounded-[4rem] overflow-hidden group border border-white/5 soft-reveal">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[6000ms] ease-out"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex flex-col justify-end p-12 md:p-24 text-white">
            <div className="max-w-5xl space-y-12">
              <div className="flex items-center gap-4">
                <Badge className="bg-primary/10 text-primary border border-primary/20 py-3 px-8 rounded-full text-[12px] font-bold tracking-[0.4em] uppercase backdrop-blur-xl">
                  B-right Conciergerie Privée
                </Badge>
                <div className="h-px w-32 bg-primary/20 hidden md:block" />
              </div>
              <h1 className="text-7xl md:text-[10rem] font-headline font-bold leading-[0.85] tracking-tighter luxury-gold-gradient">
                L'Excellence <br/> Absolue.
              </h1>
              <p className="text-zinc-400 font-light max-w-2xl text-2xl leading-relaxed tracking-wide opacity-80">
                L'art de la transformation globale. Aujourd'hui, votre indice de vitalité prestige atteint <span className="text-primary font-bold">96%</span>.
              </p>
              <div className="flex flex-wrap gap-8 pt-8">
                <Button className="rounded-full px-16 py-10 bg-primary text-black hover:bg-white hover:scale-105 transition-all duration-700 font-bold text-xl shadow-[0_25px_60px_rgba(212,175,55,0.25)]">
                  Lancer l'Expérience
                </Button>
                <Button variant="outline" className="rounded-full px-16 py-10 border-white/10 text-white hover:bg-white/10 font-bold text-xl backdrop-blur-xl transition-all duration-700">
                  Consulter mon Bilan VIP
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 soft-reveal [animation-delay:200ms]">
          <StatCard 
            label="Énergie Vitale" 
            value="2,480" 
            subValue="Kcal / Niveau Optimal"
            icon={<Zap className="text-primary" size={28} />}
            trend={{ value: "18%", isUp: true }}
          />
          <StatCard 
            label="Clarté Cognitive" 
            value="Elite" 
            subValue="Zone de Performance"
            icon={<Sparkles className="text-primary" size={28} />}
            trend={{ value: "6 pts", isUp: true }}
          />
          <StatCard 
            label="Régénération" 
            value="8h 12m" 
            subValue="Sommeil Profond"
            icon={<Heart className="text-primary" size={28} />}
            trend={{ value: "45m", isUp: true }}
          />
          <StatCard 
            label="Statut Membre" 
            value="Diamond" 
            subValue="Cercle des Initiés"
            icon={<Crown className="text-primary" size={28} />}
            trend={{ value: "Top 0.1%", isUp: true }}
          />
        </div>

        {/* PRICING SECTION: Cercles d'Excellence */}
        <section className="space-y-24 soft-reveal">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary/30 text-primary px-8 py-2 rounded-full font-bold tracking-[0.4em] uppercase text-[10px]">Adhésion Exclusive</Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter">Les Cercles <br/><span className="luxury-gold-gradient">d'Excellence</span></h2>
            <p className="text-zinc-500 text-xl font-light leading-relaxed">Choisissez le degré d'accompagnement qui sied à votre ambition. Une transformation sans limites vous attend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {PRICING_PLANS.map((plan, i) => (
              <Card key={i} className={`relative overflow-hidden transition-all duration-[1200ms] rounded-[4rem] group border-white/5 bg-zinc-900/20 backdrop-blur-xl ${plan.isPopular ? 'border-primary/40 shadow-[0_0_80px_rgba(212,175,55,0.15)] scale-105' : 'hover:border-primary/20 shadow-2xl'}`}>
                {plan.isPopular && (
                  <div className="absolute top-10 right-10">
                    <Badge className="bg-primary text-black font-bold uppercase tracking-widest text-[9px] px-4 py-1.5 rounded-full">Plus Prisé</Badge>
                  </div>
                )}
                <CardHeader className="p-12 space-y-6 text-center">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 shadow-inner">
                      {plan.name === "Cercle Diamond" ? <Gem size={32} /> : plan.name === "Cercle Impérial" ? <Crown size={32} /> : <Star size={32} />}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-4xl font-headline font-bold uppercase tracking-tight">{plan.name}</CardTitle>
                    <CardDescription className="text-zinc-500 font-medium italic">{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-12 space-y-12">
                  <div className="text-center space-y-1">
                    <span className="text-6xl font-headline font-bold luxury-gold-gradient">{plan.price}</span>
                    <span className="block text-xs text-zinc-600 font-bold uppercase tracking-[0.4em]">{plan.period}</span>
                  </div>
                  <div className="space-y-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-black transition-all duration-500">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-sm text-zinc-400 font-medium tracking-wide group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-12 pt-0">
                  <Button className={`w-full py-10 rounded-full font-bold text-lg uppercase tracking-[0.3em] transition-all duration-1000 shadow-2xl ${plan.isPopular ? 'bg-primary text-black hover:bg-white' : 'bg-white/5 text-white hover:bg-primary hover:text-black border border-white/10'}`}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* AI & Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            <div className="soft-reveal">
              <AIRecommender />
            </div>
            <div className="soft-reveal">
              <ActivityChart />
            </div>

            {/* Premium Planning Card */}
            <Card className="premium-card soft-reveal">
              <CardHeader className="flex flex-row items-center justify-between p-16 border-b border-white/5">
                <div className="space-y-2">
                  <CardTitle className="text-5xl font-headline font-bold tracking-tighter">Votre Agenda VIP</CardTitle>
                  <p className="text-zinc-500 text-sm font-bold tracking-[0.4em] uppercase">Privilèges & Protocoles</p>
                </div>
                <Link href="/booking">
                  <Button variant="ghost" className="text-primary hover:text-white flex items-center gap-4 font-bold tracking-[0.3em] text-sm uppercase transition-all duration-500">
                    Découvrir l'Exclusivité <ArrowRight size={20} />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="p-16 space-y-12">
                {[
                  { time: "07:30", title: "Méditation Solaire Privée", type: "Esprit", duration: "45 min", status: "Confirmé", color: "text-primary bg-primary/10" },
                  { time: "11:00", title: "Soin Signature 'Or Pur'", type: "Beauté", duration: "90 min", status: "En attente", color: "text-zinc-500 bg-zinc-500/10" },
                  { time: "17:30", title: "Masterclass Performance High-Intensity", type: "Sport", duration: "60 min", status: "À venir", color: "text-zinc-500 bg-zinc-500/10" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-12 p-10 rounded-[3rem] hover:bg-zinc-800/20 transition-all duration-700 border border-transparent hover:border-white/5 group cursor-pointer">
                    <span className="font-headline font-bold text-5xl text-zinc-900 w-32 group-hover:text-primary transition-colors duration-500">{event.time}</span>
                    <div className="flex-1 space-y-3">
                      <h4 className="font-bold text-3xl group-hover:text-white transition-colors duration-500">{event.title}</h4>
                      <div className="flex items-center gap-8">
                        <p className="text-base text-zinc-500 flex items-center gap-3 font-medium"><Calendar size={18} className="text-primary" /> {event.duration}</p>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold px-6 py-2 border-zinc-800 text-zinc-500 tracking-widest">{event.type}</Badge>
                      </div>
                    </div>
                    <span className={`text-[11px] font-bold px-8 py-4 rounded-full uppercase tracking-[0.3em] shadow-xl ${event.color}`}>
                      {event.status}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-16">
            <Card className="bg-zinc-900/40 border border-primary/20 shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-[4rem] overflow-hidden relative soft-reveal">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
                <Crown size={300} />
              </div>
              <CardContent className="p-16 space-y-12 relative z-10">
                <Badge className="bg-primary text-black font-bold tracking-[0.3em] px-6 py-2 rounded-full text-[10px]">DÉFI IMPÉRIAL</Badge>
                <div className="space-y-4">
                  <h3 className="text-5xl font-headline font-bold leading-[1.1] tracking-tighter">Éveil de la <br/>Vitalité Pure</h3>
                  <p className="text-zinc-400 text-xl font-light leading-relaxed">Sublimez votre excellence avec 3.0L d'eau de source artisanale aujourd'hui.</p>
                </div>
                <div className="space-y-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-[0.4em]">
                    <span className="text-zinc-600">Progression</span>
                    <span className="text-primary">2.1L / 3.0L</span>
                  </div>
                  <div className="h-3 bg-zinc-800/40 rounded-full overflow-hidden p-[3px]">
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary w-[70%] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-[3000ms]" />
                  </div>
                </div>
                <Button className="w-full bg-white text-black hover:bg-primary rounded-full font-bold py-10 transition-all duration-700 text-lg uppercase tracking-[0.3em] shadow-2xl">
                  Actualiser mes Rituels
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card p-16 soft-reveal">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-headline font-bold tracking-tighter">Le Salon Privé</h3>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.4em]">Live</span>
                </div>
              </div>
              <div className="space-y-10">
                {[
                  { name: "Sonia D.", action: "Membre Émeraude 💎", seed: "vip1" },
                  { name: "Marc-André", action: "Record Masterclass HIIT ⚡", seed: "vip2" },
                  { name: "Hélène L.", action: "Soin facial Platinum complété ✨", seed: "vip3" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-8 group cursor-pointer">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-2 border-primary/10 overflow-hidden group-hover:border-primary transition-all duration-1000">
                        <Image src={`https://picsum.photos/seed/${user.seed}/120`} alt={user.name} width={80} height={80} className="grayscale group-hover:grayscale-0 transition-all duration-[1500ms]" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary border-[4px] border-black rounded-full shadow-2xl" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold group-hover:text-primary transition-colors duration-500">{user.name}</p>
                      <p className="text-sm text-zinc-500 italic font-light opacity-60">"{user.action}"</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full rounded-full mt-12 border-zinc-800 text-zinc-600 hover:text-primary hover:border-primary transition-all duration-700 font-bold text-[11px] uppercase tracking-[0.4em] py-8">
                Accéder au Cercle
              </Button>
            </Card>

            <div className="flex items-center justify-center gap-6 p-12 border border-white/5 rounded-[3.5rem] opacity-30 hover:opacity-100 transition-opacity duration-1000">
              <ShieldCheck size={28} className="text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500 text-center">Protocoles de Sécurité B-right Diamond</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
