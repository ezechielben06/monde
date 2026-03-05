import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Flame, Heart, Trophy, Zap, Star, Crown, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wellness');

  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20 bg-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Luxury Hero Section */}
        <section className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden group shadow-[0_0_50px_rgba(255,215,0,0.1)] border border-primary/20">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
              priority
              data-ai-hint="luxury spa"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-12 text-white">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-primary/20 text-primary border border-primary/30 py-1.5 px-6 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                Conciergerie Privée B-right
              </Badge>
              <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter luxury-gold-gradient">
                L'Excellence <br/> devient votre <br/> quotidien.
              </h1>
              <p className="text-zinc-400 font-medium max-w-lg text-lg leading-relaxed">
                Bienvenue dans votre sanctuaire de transformation. Aujourd'hui, vous avez atteint <span className="text-primary">85%</span> de votre potentiel hebdomadaire.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="rounded-full px-12 py-7 bg-primary text-black hover:bg-white hover:scale-105 transition-all font-bold text-lg shadow-[0_10px_30px_rgba(255,215,0,0.3)]">
                  Reprendre mon voyage
                </Button>
                <Button variant="outline" className="rounded-full px-12 py-7 border-primary/50 text-primary hover:bg-primary/10 font-bold text-lg backdrop-blur-md">
                  Voir mon bilan VIP
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            label="Énergie Brûlée" 
            value="1,840" 
            subValue="Kcal / Jour"
            icon={<Zap className="text-primary" />}
            trend={{ value: "12%", isUp: true }}
            colorClass="bg-primary/5 border border-primary/10"
          />
          <StatCard 
            label="Vitalité" 
            value="45 min" 
            subValue="Entraînement"
            icon={<Crown className="text-primary" />}
            trend={{ value: "18%", isUp: true }}
            colorClass="bg-primary/5 border border-primary/10"
          />
          <StatCard 
            label="Récupération" 
            value="7h 12m" 
            subValue="Sommeil Profond"
            icon={<Heart className="text-primary" />}
            trend={{ value: "20m", isUp: false }}
            colorClass="bg-primary/5 border border-primary/10"
          />
          <StatCard 
            label="Prestige Rank" 
            value="Élite Gold" 
            subValue="Top 1% Club"
            icon={<Star className="text-primary" />}
            trend={{ value: "2 pts", isUp: true }}
            colorClass="bg-primary/5 border border-primary/10"
          />
        </div>

        {/* AI & Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AIRecommender />
            <ActivityChart />

            {/* Exclusive Planning */}
            <Card className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between p-10 border-b border-white/5">
                <div>
                  <CardTitle className="text-3xl font-headline font-bold mb-1">Agenda de Privilège</CardTitle>
                  <p className="text-zinc-500 text-sm">Vos prochains rendez-vous exclusifs</p>
                </div>
                <Link href="/booking">
                  <Button variant="link" className="text-primary flex items-center gap-2 font-bold tracking-widest text-xs uppercase">
                    Consulter <ArrowRight size={14} />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="p-10 space-y-6">
                {[
                  { time: "08:00", title: "Rituel Yoga Solaire", type: "Wellness", duration: "45 min", status: "Validé", color: "text-emerald-500 bg-emerald-500/10" },
                  { time: "12:30", title: "Soin Visage Signature Or", type: "Beauté", duration: "60 min", status: "À venir", color: "text-primary bg-primary/10" },
                  { time: "18:00", title: "Consultation Performance", type: "Coaching", duration: "30 min", status: "À venir", color: "text-zinc-400 bg-zinc-400/10" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-8 p-6 rounded-2xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-white/5 group cursor-pointer">
                    <span className="font-headline font-bold text-2xl text-zinc-700 w-16">{event.time}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl group-hover:text-primary transition-colors">{event.title}</h4>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-zinc-500 flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> {event.duration}</p>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold px-3 py-0.5 border-zinc-800 text-zinc-400">{event.type}</Badge>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest ${event.color}`}>
                      {event.status}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Member Exclusive */}
          <div className="space-y-8">
            <Card className="bg-zinc-900 border border-primary/20 shadow-[0_0_30px_rgba(255,215,0,0.05)] rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                <Crown size={180} />
              </div>
              <CardContent className="p-10 space-y-8 relative z-10">
                <Badge className="bg-primary text-black font-bold mb-2">QUÊTE LÉGENDAIRE</Badge>
                <h3 className="text-3xl font-headline font-bold leading-tight">Hydratation Impériale</h3>
                <p className="text-zinc-400 text-lg">Sublimez votre corps avec 2L d'eau pure aujourd'hui.</p>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                    <span className="text-zinc-500">Progression</span>
                    <span className="text-primary">1.2L / 2L</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[60%] rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all duration-1000" />
                  </div>
                </div>
                <Button className="w-full bg-white text-black hover:bg-primary rounded-full font-bold py-7 transition-all">
                  Actualiser mes rituels
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-headline font-bold">Cercle B-right</h3>
                <Badge variant="outline" className="border-zinc-800 text-zinc-500">Direct</Badge>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Sonia D.", action: "Vient de débloquer le rang Platine 💎", seed: "vip1" },
                  { name: "Marc K.", action: "A partagé son secret de longévité 🧬", seed: "vip2" },
                  { name: "Léa V.", action: "Expérience Spa validée à Cotonou ✨", seed: "vip3" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-pointer">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full border-2 border-primary/20 overflow-hidden group-hover:border-primary transition-all">
                        <Image src={`https://picsum.photos/seed/${user.seed}/100`} alt={user.name} width={56} height={56} className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-zinc-900 rounded-full" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold group-hover:text-primary transition-colors">{user.name}</p>
                      <p className="text-xs text-zinc-500 italic">"{user.action}"</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full rounded-full mt-8 border-zinc-800 text-zinc-500 hover:text-primary hover:border-primary transition-all font-bold text-xs uppercase tracking-widest">
                Rejoindre le salon privé
              </Button>
            </Card>

            {/* Quality Badge */}
            <div className="flex items-center justify-center gap-3 p-6 border border-zinc-800 rounded-3xl opacity-50">
              <ShieldCheck size={20} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Protection Privée de Données B-right</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
