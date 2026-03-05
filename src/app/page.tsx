import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, Flame, Heart, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wellness');

  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header / Hero */}
        <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden group">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center px-8 text-white">
            <h1 className="text-3xl md:text-5xl font-headline font-bold">Bonjour, Bright 👋</h1>
            <p className="mt-2 text-white/90 font-medium max-w-md">Prête pour votre transformation d'aujourd'hui ?</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            label="Calories" 
            value="1,840" 
            subValue="Objectif: 2,100 kcal"
            icon={<Flame className="text-orange-500" />}
            trend={{ value: "12%", isUp: true }}
            colorClass="group-hover:bg-orange-50"
          />
          <StatCard 
            label="Entraînement" 
            value="45 min" 
            subValue="Séance HIIT complétée"
            icon={<Activity className="text-blue-500" />}
            trend={{ value: "5 min", isUp: true }}
            colorClass="group-hover:bg-blue-50"
          />
          <StatCard 
            label="Sommeil" 
            value="7h 12m" 
            subValue="Qualité: 85%"
            icon={<Heart className="text-rose-500" />}
            trend={{ value: "20m", isUp: false }}
            colorClass="group-hover:bg-rose-50"
          />
          <StatCard 
            label="Transformation" 
            value="Stage 2" 
            subValue="65% vers l'objectif"
            icon={<TrendingUp className="text-accent" />}
            trend={{ value: "4%", isUp: true }}
            colorClass="group-hover:bg-purple-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <AIRecommender />

            <Card className="border-none shadow-sm overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-headline">Planning d'Aujourd'hui</CardTitle>
                <Link href="/calendar">
                  <Button variant="ghost" size="sm" className="text-primary gap-2">
                    Voir tout <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { time: "08:00", title: "Yoga Matinal", type: "Fitness", duration: "45 min", color: "bg-blue-100 text-blue-700" },
                  { time: "12:30", title: "Soin Visage Hydratant", type: "Beauté", duration: "60 min", color: "bg-purple-100 text-purple-700" },
                  { time: "18:00", title: "Coaching Confiance en Soi", type: "Mental", duration: "30 min", color: "bg-accent/10 text-accent" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                    <span className="font-bold text-sm text-muted-foreground w-12">{event.time}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.duration}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${event.color}`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-none shadow-lg overflow-hidden">
              <CardContent className="p-8 space-y-4 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Calendar size={120} />
                </div>
                <h3 className="text-2xl font-headline font-bold">Abonnement Global</h3>
                <p className="text-primary-foreground/80 text-sm">Profitez de tous les services en illimité avec votre abonnement Premium.</p>
                <div className="pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Prochaine facture</p>
                    <p className="text-xl font-bold">12 Octobre</p>
                  </div>
                  <Link href="/profile">
                    <Button variant="secondary" size="sm" className="rounded-full">Gérer</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-headline">Communauté</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <Image src="https://picsum.photos/seed/user1/100" alt="user" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Housna G.</p>
                    <p className="text-xs text-muted-foreground">Vient de finir un marathon ! 🏅</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <Image src="https://picsum.photos/seed/user2/100" alt="user" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Johanès A.</p>
                    <p className="text-xs text-muted-foreground">Aime votre recette de smoothie 🥤</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
