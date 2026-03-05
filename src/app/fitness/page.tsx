import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Flame, Dumbbell, Zap, CheckCircle2, ChevronRight, Activity, Trophy } from 'lucide-react';
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
    coach: "Jean-Pierre",
    desc: "Un entraînement intensif pour stimuler votre métabolisme."
  },
  { 
    id: 2, 
    title: "Yoga Flow Solaire", 
    level: "Débutant", 
    duration: "45 min", 
    calories: "180 kcal", 
    img: "yoga-stretch",
    category: "Mobilité",
    coach: "Sarah",
    desc: "Réveillez votre corps avec des salutations au soleil fluides."
  },
  { 
    id: 3, 
    title: "Force & Sculpt Pro", 
    level: "Avancé", 
    duration: "50 min", 
    calories: "450 kcal", 
    img: "fitness-session",
    category: "Musculation",
    coach: "Marc",
    desc: "Travaillez votre puissance musculaire avec des techniques pro."
  }
];

const CATEGORIES = [
  { name: "Musculation", icon: <Dumbbell />, count: 12 },
  { name: "Yoga", icon: <Activity />, count: 8 },
  { name: "Cardio", icon: <Zap />, count: 15 },
  { name: "Pilates", icon: <CheckCircle2 />, count: 6 },
];

export default function FitnessPage() {
  const defaultImg = "https://picsum.photos/seed/fitness/800/600";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-8 md:px-12 py-16 space-y-32">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/40 text-primary px-8 py-2 rounded-full uppercase text-[10px] tracking-[0.4em] font-bold">Performance Athlétique</Badge>
            <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.85]">Domptez <br/><span className="luxury-gold-gradient">votre Corps</span>.</h1>
            <p className="text-xl text-zinc-500 max-w-2xl font-light leading-relaxed italic">Des programmes d'élite conçus par des préparateurs physiques de renommée internationale.</p>
          </div>
          <div className="flex gap-8">
            <div className="text-center p-10 bg-zinc-900/40 rounded-3xl border border-white/5 min-w-[180px] shadow-2xl group hover:border-primary/20 transition-all">
              <p className="text-5xl font-bold luxury-gold-gradient group-hover:scale-110 transition-transform">12</p>
              <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-[0.3em] mt-3">Séances</p>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-10 soft-reveal">
          {CATEGORIES.map((cat) => (
            <Card key={cat.name} className="border-white/5 bg-zinc-900/20 hover:border-primary/40 transition-all cursor-pointer group rounded-3xl overflow-hidden p-10 flex flex-col items-center gap-8">
              <div className="p-8 rounded-2xl bg-zinc-800 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-700 shadow-xl">
                {cat.icon}
              </div>
              <div className="text-center space-y-2">
                <p className="font-bold text-2xl uppercase tracking-tighter leading-none">{cat.name}</p>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{cat.count} programmes</p>
              </div>
            </Card>
          ))}
        </section>

        <section className="space-y-16 soft-reveal">
          <div className="flex items-center justify-between border-b border-white/5 pb-8">
            <h2 className="text-5xl font-serif font-bold tracking-tight">Programmes <span className="luxury-gold-gradient">Signatures</span></h2>
            <Button variant="link" size="sm" className="text-primary font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-3">Catalogue complet <ChevronRight size={14} /></Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {WORKOUTS.map((workout) => (
              <Card key={workout.id} className="group overflow-hidden border-white/5 bg-zinc-900/20 rounded-3xl transition-all hover:shadow-primary/5 hover:shadow-3xl">
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === workout.img)?.imageUrl || defaultImg}
                    alt={workout.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-8 left-8">
                    <Badge className="bg-white/10 backdrop-blur-xl text-white border-white/20 font-bold uppercase text-[9px] px-4 py-1.5 rounded-full tracking-widest">
                      {workout.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-10 space-y-4">
                  <div className="space-y-3">
                    <CardTitle className="text-3xl font-headline font-bold group-hover:text-primary transition-colors leading-tight">{workout.title}</CardTitle>
                    <p className="text-zinc-500 text-sm font-light italic leading-relaxed">{workout.desc}</p>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] pt-2">Coach {workout.coach}</p>
                  </div>
                  <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 pt-4">
                    <span className="flex items-center gap-3"><Clock size={16} className="text-primary/60" /> {workout.duration}</span>
                    <span className="flex items-center gap-3"><Flame size={16} className="text-orange-500/60" /> {workout.calories}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-10 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                  <Badge variant="outline" className="rounded-full border-zinc-800 text-zinc-600 px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest">{workout.level}</Badge>
                  <Button size="sm" className="rounded-full px-10 bg-white text-black hover:bg-primary transition-all font-bold h-auto py-3 uppercase text-[10px] tracking-widest">Démarrer</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900/40 rounded-[3rem] p-16 md:p-24 relative overflow-hidden border border-white/10 group soft-reveal shadow-2xl text-center md:text-left">
          <div className="relative z-10 max-w-4xl space-y-12">
            <div className="space-y-6">
              <Badge className="bg-primary text-black font-bold uppercase text-[10px] tracking-[0.5em] px-10 py-3 rounded-full shadow-lg">Défi de la Semaine</Badge>
              <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.85]">La Conquête du <br/><span className="luxury-gold-gradient">Sommet Émeraude</span></h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed italic max-w-2xl">Réalisez 5 séances de HIIT cette semaine et débloquez un accès exclusif à la masterclass nutritionnelle du mois prochain.</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              <Button size="lg" className="bg-primary text-black hover:bg-white rounded-full px-16 font-bold uppercase tracking-widest shadow-2xl transition-all">Accepter le défi</Button>
            </div>
          </div>
          <div className="absolute -right-40 -bottom-40 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-[3000ms] group-hover:scale-110">
            <Trophy size={600} />
          </div>
        </section>
      </main>
    </div>
  );
}
