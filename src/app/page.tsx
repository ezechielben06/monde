import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Activity, Flame, Heart, Calendar, ArrowRight, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wellness');

  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20 bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Header / Hero */}
        <div className="relative h-56 md:h-72 rounded-[2.5rem] overflow-hidden group shadow-2xl">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex flex-col justify-center px-12 text-white">
            <Badge className="w-fit mb-4 bg-white/20 backdrop-blur-md border-none text-white hover:bg-white/30">
              Session Live à 18h00
            </Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Bonjour, Bright 👋</h1>
            <p className="mt-3 text-white/80 font-medium max-w-md text-lg">Votre transformation progresse. Vous avez atteint 85% de vos objectifs cette semaine !</p>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-full px-8 bg-white text-primary hover:bg-white/90 font-bold">Continuer</Button>
              <Button variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10 font-bold">Mon Bilan</Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            label="Calories" 
            value="1,840" 
            subValue="Objectif: 2,100 kcal"
            icon={<Flame className="text-orange-500" />}
            trend={{ value: "12%", isUp: true }}
            colorClass="group-hover:bg-orange-50"
          />
          <StatCard 
            label="Activité" 
            value="45 min" 
            subValue="Moyenne: 38 min"
            icon={<Activity className="text-blue-500" />}
            trend={{ value: "18%", isUp: true }}
            colorClass="group-hover:bg-blue-50"
          />
          <StatCard 
            label="Sommeil" 
            value="7h 12m" 
            subValue="Score: 85/100"
            icon={<Heart className="text-rose-500" />}
            trend={{ value: "20m", isUp: false }}
            colorClass="group-hover:bg-rose-50"
          />
          <StatCard 
            label="Niveau" 
            value="Or 2" 
            subValue="Top 5% des membres"
            icon={<Trophy className="text-amber-500" />}
            trend={{ value: "2 pts", isUp: true }}
            colorClass="group-hover:bg-amber-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <AIRecommender />
            <ActivityChart />

            <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-headline">Planning du Jour</CardTitle>
                <Link href="/calendar">
                  <Button variant="ghost" size="sm" className="text-primary gap-2 hover:bg-primary/5">
                    Voir tout <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: "08:00", title: "Yoga Matinal", type: "Fitness", duration: "45 min", status: "Terminé", color: "bg-emerald-100 text-emerald-700" },
                  { time: "12:30", title: "Soin Visage Hydratant", type: "Beauté", duration: "60 min", status: "À venir", color: "bg-purple-100 text-purple-700" },
                  { time: "18:00", title: "Coaching Mental", type: "Bien-être", duration: "30 min", status: "À venir", color: "bg-accent/10 text-accent" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-6 p-5 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                    <span className="font-bold text-lg text-slate-400 w-12">{event.time}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{event.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-1"><Calendar size={14} /> {event.duration}</p>
                        <Badge variant="outline" className="text-[10px] uppercase font-bold px-2 py-0 border-slate-200">{event.type}</Badge>
                      </div>
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tight ${event.color}`}>
                      {event.status}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary to-accent text-white border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-10 space-y-6 relative">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Zap size={140} />
                </div>
                <h3 className="text-3xl font-headline font-bold leading-tight">Défi Quotidien</h3>
                <p className="text-white/80 text-lg">Buvez 2L d'eau aujourd'hui pour gagner 50 points d'expérience !</p>
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between text-sm font-bold">
                    <span>Progression</span>
                    <span>1.2L / 2L</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[60%] rounded-full shadow-sm" />
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl font-bold py-6">
                    Mettre à jour
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-[2rem] bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-headline">Communauté Active</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { name: "Housna G.", action: "Vient de finir un marathon ! 🏅", seed: "user1" },
                  { name: "Johanès A.", action: "A partagé une nouvelle recette 🥗", seed: "user2" },
                  { name: "Koffi M.", action: "Objectif sommeil atteint 🌙", seed: "user3" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 border-2 border-white shadow-sm overflow-hidden group-hover:scale-110 transition-transform">
                        <Image src={`https://picsum.photos/seed/${user.seed}/100`} alt={user.name} width={48} height={48} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-sm font-bold group-hover:text-primary transition-colors">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.action}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-2xl border-slate-100 text-muted-foreground hover:bg-slate-50">
                  Explorer le feed
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
