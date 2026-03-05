import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, PlayCircle, FileText, ChevronRight, Book, Video, Star, Clock } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const RESOURCES = [
  { id: 1, title: "L'Art de la Routine Matinale", category: "Mindfulness", type: "article", img: "coaching-meditation", duration: "8 min", views: "1.2k" },
  { id: 2, title: "Nutrition Cellulaire : Les Fondements", category: "Nutrition", type: "article", img: "healthy-meal", duration: "12 min", views: "3.4k" },
  { id: 3, title: "Yoga Flow : Alignement & Éveil", category: "Fitness", type: "video", img: "fitness-session", duration: "35 min", views: "850" },
  { id: 4, title: "Secrets de Peau : Anti-Âge Global", category: "Beauté", type: "article", img: "beauty-service", duration: "10 min", views: "2.1k" },
  { id: 5, title: "Méditation Transcendantale", category: "Mindfulness", type: "video", img: "coaching-meditation", duration: "20 min", views: "1.5k" },
  { id: 6, title: "Masterclass HIIT Performance", category: "Fitness", type: "video", img: "fitness-session", duration: "45 min", views: "4.2k" },
  { id: 7, title: "La Science du Sommeil Profond", category: "Mindfulness", type: "article", img: "spa-relax", duration: "15 min", views: "2.8k" },
  { id: 8, title: "Recettes Détox Gastronomiques", category: "Nutrition", type: "article", img: "healthy-meal", duration: "14 min", views: "1.9k" },
  { id: 9, title: "Postures & Mobilité Pro", category: "Fitness", type: "video", img: "yoga-stretch", duration: "30 min", views: "900" },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 rounded-full uppercase text-[10px] tracking-widest">Bibliothèque du Savoir</Badge>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none">Cercle de <br/><span className="luxury-gold-gradient">Connaissance</span>.</h1>
            <p className="text-xl text-zinc-500 max-w-2xl font-light">Accédez à l'expertise mondiale en bien-être, nutrition et performance.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
            <Input className="pl-14 h-16 rounded-full border-white/5 bg-zinc-900/40 text-lg placeholder:text-zinc-800 focus:border-primary/40 transition-all shadow-2xl" placeholder="Chercher une masterclass..." />
          </div>
        </header>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4">
          {["Tout", "Fitness", "Nutrition", "Mindfulness", "Beauté", "Masterclass"].map((cat) => (
            <Badge key={cat} variant={cat === "Tout" ? "default" : "outline"} className={`rounded-full px-8 py-3 cursor-pointer hover:bg-primary hover:text-black transition-all duration-500 font-bold uppercase text-[10px] tracking-widest ${cat === "Tout" ? "bg-primary text-black" : "border-zinc-800 text-zinc-500"}`}>
              {cat}
            </Badge>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RESOURCES.map((res) => (
            <Card key={res.id} className="overflow-hidden border-white/5 bg-zinc-900/20 hover:border-primary/30 transition-all cursor-pointer group rounded-3xl shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === res.img)?.imageUrl || ""}
                  alt={res.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {res.type === 'video' ? <PlayCircle size={64} className="text-primary drop-shadow-2xl" /> : <FileText size={64} className="text-primary drop-shadow-2xl" />}
                </div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-white/10 backdrop-blur-md text-white border-white/10 text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    {res.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-8 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-headline font-bold uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{res.title}</CardTitle>
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                      <span className="flex items-center gap-2"><Clock size={12} /> {res.duration}</span>
                      <span className="flex items-center gap-2"><Star size={12} className="text-primary" /> {res.views} vus</span>
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-primary mt-1 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex items-center gap-4">
                <Badge variant="outline" className="text-[9px] uppercase border-zinc-800 text-zinc-500 px-3 py-0.5">
                   {res.type === 'video' ? <span className="flex items-center gap-2"><Video size={10} /> Vidéo HD</span> : <span className="flex items-center gap-2"><Book size={10} /> Guide PDF</span>}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personalized Recommendation Footer */}
        <section className="pt-20 border-t border-white/5 flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-3xl font-headline font-bold uppercase">Besoin d'un parcours sur mesure ?</h3>
            <p className="text-zinc-500 font-light leading-relaxed">Nos curateurs de contenu peuvent assembler pour vous une liste de ressources personnalisée en fonction de votre profil génétique et de vos ambitions.</p>
          </div>
          <Button className="rounded-full px-16 py-8 bg-primary text-black font-bold h-auto uppercase tracking-widest shadow-2xl hover:bg-white transition-all">Demander ma Curie Personnalisée</Button>
        </section>
      </main>
    </div>
  );
}
