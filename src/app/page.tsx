import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Flame, Heart, Trophy, Zap, Star, Crown, ShieldCheck, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wellness');

  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20 bg-[#050505]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-10 space-y-16">
        {/* Luxury Hero Section */}
        <section className="relative h-[600px] md:h-[700px] rounded-[3.5rem] overflow-hidden group border border-primary/20 soft-reveal">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-10 md:p-16 text-white">
            <div className="max-w-4xl space-y-8">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary border border-primary/30 py-2 px-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md">
                  Conciergerie B-right Élite
                </Badge>
                <div className="h-px w-20 bg-primary/30 hidden md:block" />
              </div>
              <h1 className="text-6xl md:text-9xl font-headline font-bold leading-[0.9] tracking-tighter luxury-gold-gradient">
                Le Prestige <br/> sans <br/> compromis.
              </h1>
              <p className="text-zinc-400 font-light max-w-xl text-xl leading-relaxed tracking-wide">
                Bienvenue dans votre sanctuaire. Aujourd'hui, votre vitalité atteint un sommet de <span className="text-primary font-bold">92%</span>. L'excellence vous attend.
              </p>
              <div className="flex flex-wrap gap-6 pt-6">
                <Button className="rounded-full px-14 py-8 bg-primary text-black hover:bg-white hover:scale-105 transition-all duration-500 font-bold text-lg shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
                  Entrer dans l'expérience
                </Button>
                <Button variant="outline" className="rounded-full px-14 py-8 border-primary/30 text-primary hover:bg-primary/10 font-bold text-lg backdrop-blur-md transition-all duration-500">
                  Mon Bilan Privé
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 soft-reveal [animation-delay:200ms]">
          <StatCard 
            label="Énergie Consommée" 
            value="2,150" 
            subValue="Kcal / Optimal"
            icon={<Zap className="text-primary" size={24} />}
            trend={{ value: "15%", isUp: true }}
          />
          <StatCard 
            label="Focus Mental" 
            value="Excellence" 
            subValue="État de Flow"
            icon={<Brain className="text-primary" size={24} />}
            trend={{ value: "4 pts", isUp: true }}
          />
          <StatCard 
            label="Régénération" 
            value="7h 45m" 
            subValue="Sommeil Profond"
            icon={<Moon className="text-primary" size={24} />}
            trend={{ value: "30m", isUp: true }}
          />
          <StatCard 
            label="Rang Prestige" 
            value="Platinum" 
            subValue="Cercle des Initiés"
            icon={<Crown className="text-primary" size={24} />}
            trend={{ value: "Top 0.5%", isUp: true }}
          />
        </div>

        {/* AI & Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div className="soft-reveal [animation-delay:400ms]">
              <AIRecommender />
            </div>
            <div className="soft-reveal [animation-delay:600ms]">
              <ActivityChart />
            </div>

            {/* Exclusive Planning */}
            <Card className="premium-card soft-reveal [animation-delay:800ms]">
              <CardHeader className="flex flex-row items-center justify-between p-12 border-b border-white/5">
                <div>
                  <CardTitle className="text-4xl font-headline font-bold mb-2 tracking-tighter">Votre Agenda VIP</CardTitle>
                  <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">Privilèges et rendez-vous</p>
                </div>
                <Link href="/booking">
                  <Button variant="ghost" className="text-primary hover:text-white flex items-center gap-3 font-bold tracking-[0.2em] text-xs uppercase transition-all">
                    Explorer <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="p-12 space-y-8">
                {[
                  { time: "07:30", title: "Méditation Solaire Privée", type: "Esprit", duration: "30 min", status: "Confirmé", color: "text-primary bg-primary/10" },
                  { time: "11:00", title: "Soin Signature 'Or Pur'", type: "Beauté", duration: "90 min", status: "En attente", color: "text-zinc-500 bg-zinc-500/10" },
                  { time: "17:30", title: "Masterclass Performance", type: "Sport", duration: "45 min", status: "À venir", color: "text-zinc-500 bg-zinc-500/10" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-10 p-8 rounded-3xl hover:bg-zinc-800/30 transition-all border border-transparent hover:border-white/5 group cursor-pointer">
                    <span className="font-headline font-bold text-3xl text-zinc-800 w-24 group-hover:text-primary transition-colors">{event.time}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-2xl group-hover:text-white transition-colors">{event.title}</h4>
                      <div className="flex items-center gap-6 mt-3">
                        <p className="text-sm text-zinc-500 flex items-center gap-2 font-medium"><Calendar size={16} className="text-primary" /> {event.duration}</p>
                        <Badge variant="outline" className="text-[9px] uppercase font-bold px-4 py-1 border-zinc-800 text-zinc-500 tracking-widest">{event.type}</Badge>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-5 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-lg ${event.color}`}>
                      {event.status}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Member Exclusive */}
          <div className="space-y-10">
            <Card className="bg-zinc-900 border border-primary/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[3rem] overflow-hidden relative soft-reveal [animation-delay:1000ms]">
              <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-[2s]">
                <Crown size={220} />
              </div>
              <CardContent className="p-12 space-y-10 relative z-10">
                <Badge className="bg-primary text-black font-bold tracking-widest px-4 py-1.5">DÉFI IMPÉRIAL</Badge>
                <h3 className="text-4xl font-headline font-bold leading-tight tracking-tighter">Éveil de Vitalité</h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">Hydratez votre excellence avec 2.5L d'eau de source aujourd'hui.</p>
                <div className="space-y-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-[0.3em]">
                    <span className="text-zinc-500">Progression</span>
                    <span className="text-primary">1.8L / 2.5L</span>
                  </div>
                  <div className="h-2.5 bg-zinc-800/50 rounded-full overflow-hidden p-[2px]">
                    <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-[72%] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-[2s]" />
                  </div>
                </div>
                <Button className="w-full bg-white text-black hover:bg-primary rounded-full font-bold py-8 transition-all duration-500 text-base uppercase tracking-widest shadow-xl">
                  Mettre à jour mes rituels
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-card p-10 soft-reveal [animation-delay:1200ms]">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-headline font-bold tracking-tight">Le Cercle Privé</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">En direct</span>
                </div>
              </div>
              <div className="space-y-8">
                {[
                  { name: "Sonia D.", action: "A débloqué le rang Émeraude 💎", seed: "vip1" },
                  { name: "Jean-Philippe", action: "Nouveau record au HIIT Master ⚡", seed: "vip2" },
                  { name: "Léa M.", action: "Soin facial Platinum complété ✨", seed: "vip3" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-2 border-primary/20 overflow-hidden group-hover:border-primary transition-all duration-500">
                        <Image src={`https://picsum.photos/seed/${user.seed}/100`} alt={user.name} width={64} height={64} className="grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary border-[3px] border-black rounded-full shadow-lg" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold group-hover:text-primary transition-colors duration-300">{user.name}</p>
                      <p className="text-xs text-zinc-500 italic font-light">"{user.action}"</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full rounded-full mt-10 border-zinc-800 text-zinc-500 hover:text-primary hover:border-primary transition-all duration-500 font-bold text-[10px] uppercase tracking-[0.3em] py-6">
                Accéder au Salon Privé
              </Button>
            </Card>

            <div className="flex items-center justify-center gap-4 p-8 border border-white/5 rounded-[2.5rem] opacity-30 hover:opacity-100 transition-opacity duration-700">
              <ShieldCheck size={24} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 text-center">Protocoles de Sécurité B-right Élite</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Brain(props: any) {
  return <Sparkles {...props} />
}

function Moon(props: any) {
  return <Heart {...props} />
}