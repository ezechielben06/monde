import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Flame, Dumbbell, Zap, TrendingUp, CheckCircle2, ChevronRight, Activity, Trophy } from 'lucide-react';
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
    category: "Cardio",
    coach: "Jean-Pierre"
  },
  { 
    id: 2, 
    title: "Yoga Flow Solaire", 
    level: "Débutant", 
    duration: "45 min", 
    calories: "180 kcal", 
    img: "yoga-stretch",
    category: "Mobilité",
    coach: "Sarah"
  },
  { 
    id: 3, 
    title: "Force & Sculpt Pro", 
    level: "Avancé", 
    duration: "50 min", 
    calories: "450 kcal", 
    img: "fitness-session",
    category: "Musculation",
    coach: "Marc"
  },
  { 
    id: 4, 
    title: "Pilates Gainage Profond", 
    level: "Intermédiaire", 
    duration: "40 min", 
    calories: "220 kcal", 
    img: "beauty-face",
    category: "Pilates",
    coach: "Lucie"
  },
  { 
    id: 5, 
    title: "Cardio Kickboxing", 
    level: "Avancé", 
    duration: "45 min", 
    calories: "600 kcal", 
    img: "hiit-workout",
    category: "Cardio",
    coach: "Koffi"
  },
  { 
    id: 6, 
    title: "Mobilité Articulaire", 
    level: "Tout niveau", 
    duration: "30 min", 
    calories: "120 kcal", 
    img: "yoga-stretch",
    category: "Mobilité",
    coach: "Elena"
  },
];

const CATEGORIES = [
  { name: "Musculation", icon: <Dumbbell />, count: 12 },
  { name: "Yoga", icon: <Activity />, count: 8 },
  { name: "Cardio", icon: <Zap />, count: 15 },
  { name: "Pilates", icon: <CheckCircle2 />, count: 6 },
];

export default function FitnessPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-bold px-6 py-2 rounded-full uppercase text-[10px] tracking-widest">Performance Athlétique</Badge>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter leading-none">Domptez <br/><span className="luxury-gold-gradient">votre Corps</span>.</h1>
            <p className="text-xl text-zinc-500 max-w-2xl font-light leading-relaxed">Des programmes d'élite conçus par des préparateurs physiques de renommée internationale.</p>
          </div>
          <div className="flex gap-6">
            <div className="text-center p-8 bg-zinc-900/40 rounded-3xl border border-white/5 min-w-[160px] shadow-2xl">
              <p className="text-4xl font-bold luxury-gold-gradient">12</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-2">Séances complétées</p>
            </div>
            <div className="text-center p-8 bg-zinc-900/40 rounded-3xl border border-white/5 min-w-[160px] shadow-2xl">
              <p className="text-4xl font-bold luxury-gold-gradient">4.2k</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-2">Kcal brûlées</p>
            </div>
          </div>
        </header>

        {/* Dynamic Categories Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <Card key={cat.name} className="border-white/5 bg-zinc-900/20 hover:border-primary/30 transition-all cursor-pointer group rounded-3xl overflow-hidden p-8 flex flex-col items-center gap-6">
              <div className="p-6 rounded-2xl bg-zinc-800 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                {cat.icon}
              </div>
              <div className="text-center space-y-1">
                <p className="font-bold text-xl uppercase tracking-widest">{cat.name}</p>
                <p className="text-xs text-zinc-500">{cat.count} programmes d'élite</p>
              </div>
            </Card>
          ))}
        </section>

        {/* Featured Programs Section */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-headline font-bold tracking-tighter">Programmes <span className="luxury-gold-gradient">Signatures</span></h2>
            <Button variant="link" className="text-primary font-bold uppercase text-xs tracking-widest flex items-center gap-2">Voir tout le catalogue <ChevronRight size={14} /></Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WORKOUTS.map((workout) => (
              <Card key={workout.id} className="group overflow-hidden border-white/5 bg-zinc-900/20 rounded-3xl transition-all hover:shadow-2xl">
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === workout.img)?.imageUrl || ""}
                    alt={workout.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/10 backdrop-blur-md text-white border-white/10 font-bold uppercase text-[9px] px-4 py-1 rounded-full">
                      {workout.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-8 space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">{workout.title}</CardTitle>
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Coach {workout.coach}</p>
                  </div>
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {workout.duration}</span>
                    <span className="flex items-center gap-2"><Flame size={14} className="text-orange-500" /> {workout.calories}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full border-zinc-800 text-zinc-500 px-4 py-1 text-[9px]">{workout.level}</Badge>
                  <Button size="sm" className="rounded-full px-8 py-5 bg-white text-black hover:bg-primary transition-all font-bold h-auto uppercase text-xs tracking-widest">Démarrer</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Weekly Challenge Section */}
        <section className="bg-zinc-900/60 rounded-3xl p-12 md:p-20 relative overflow-hidden border border-white/5 group">
          <div className="relative z-10 max-w-3xl space-y-10">
            <div className="space-y-4">
              <Badge className="bg-primary text-black font-bold uppercase text-[10px] tracking-widest px-6 py-2 rounded-full">Défi de la Semaine</Badge>
              <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter">La Conquête du <span className="luxury-gold-gradient">Sommet Émeraude</span></h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">Réalisez 5 séances de HIIT cette semaine et débloquez un accès exclusif à la masterclass nutritionnelle du mois prochain.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Button className="bg-primary text-black hover:bg-white rounded-full px-12 py-7 text-lg font-bold h-auto uppercase tracking-widest transition-all">Accepter le défi</Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/10 rounded-full px-12 py-7 text-lg font-bold h-auto uppercase tracking-widest transition-all">Voir les récompenses</Button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Trophy size={500} />
          </div>
        </section>
      </main>
    </div>
  );
}
