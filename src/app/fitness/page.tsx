import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Flame, Dumbbell, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WORKOUTS = [
  { 
    id: 1, 
    title: "HIIT Brûle-Graisse", 
    level: "Intermédiaire", 
    duration: "25 min", 
    calories: "350 kcal", 
    img: "hiit-workout",
    category: "Cardio"
  },
  { 
    id: 2, 
    title: "Yoga Flow Couché de Soleil", 
    level: "Débutant", 
    duration: "45 min", 
    calories: "180 kcal", 
    img: "yoga-stretch",
    category: "Mobilité"
  },
  { 
    id: 3, 
    title: "Force & Sculpt", 
    level: "Avancé", 
    duration: "50 min", 
    calories: "450 kcal", 
    img: "fitness-session",
    category: "Musculation"
  },
];

const CATEGORIES = [
  { name: "Musculation", icon: <Dumbbell />, count: 12 },
  { name: "Yoga", icon: <TrendingUp />, count: 8 },
  { name: "Cardio", icon: <Zap />, count: 15 },
  { name: "Pilates", icon: <CheckCircle2 />, count: 6 },
];

export default function FitnessPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20 bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary border-none font-bold">MON ESPACE SPORT</Badge>
            <h1 className="text-5xl font-headline font-bold text-slate-900">Domptez votre corps.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">Découvrez des programmes conçus par des experts pour transformer votre physique et votre mental.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center p-4 bg-white rounded-3xl shadow-sm border border-slate-100 min-w-[120px]">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Séances ce mois</p>
            </div>
            <div className="text-center p-4 bg-white rounded-3xl shadow-sm border border-slate-100 min-w-[120px]">
              <p className="text-3xl font-bold text-accent">4.2k</p>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Kcal brûlées</p>
            </div>
          </div>
        </header>

        {/* Categories */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Card key={cat.name} className="border-none shadow-sm hover:shadow-xl transition-all cursor-pointer group rounded-[2rem] bg-white overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">{cat.count} programmes</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Featured Workout */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-headline font-bold">Programmes à la une</h2>
            <Button variant="link" className="text-primary font-bold">Voir tout</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORKOUTS.map((workout) => (
              <Card key={workout.id} className="group overflow-hidden border-none shadow-lg rounded-[2.5rem] bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === workout.img)?.imageUrl || ""}
                    alt={workout.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl scale-50 group-hover:scale-100 transition-transform">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/90 backdrop-blur-md text-primary border-none font-bold uppercase text-[10px]">
                      {workout.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">{workout.title}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1"><Clock size={16} className="text-primary" /> {workout.duration}</span>
                    <span className="flex items-center gap-1"><Flame size={16} className="text-orange-500" /> {workout.calories}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full bg-slate-100 text-slate-600 px-4 py-1">{workout.level}</Badge>
                  <Button size="sm" className="rounded-full px-6 bg-slate-900 hover:bg-primary font-bold transition-colors">Démarrer</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily Motivation */}
        <section className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">"La douleur est temporaire, la fierté est éternelle."</h2>
            <p className="text-white/60 text-lg">Prêt pour votre transformation ? Ne remettez pas à demain ce que vous pouvez accomplir aujourd'hui. Nos coachs sont là pour vous pousser au bout de vos limites.</p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 rounded-2xl px-10 py-6 text-lg font-bold">Réserver un coach</Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-2xl px-10 py-6 text-lg font-bold">Explorer les cours</Button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-20 rotate-12">
            <Dumbbell size={400} />
          </div>
        </section>
      </main>
    </div>
  );
}
