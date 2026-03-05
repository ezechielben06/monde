import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, PlayCircle, FileText, ChevronRight, Book, Video, Clock, Eye, Download } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const RESOURCES = [
  { id: 1, title: "L'Art de la Routine Matinale", category: "Mindfulness", type: "article", img: "coaching-meditation", duration: "8 min", views: "1.2k", author: "Dr. Elena" },
  { id: 2, title: "Nutrition Cellulaire : Les Fondements", category: "Nutrition", type: "article", img: "healthy-meal", duration: "12 min", views: "3.4k", author: "Marc Leroy" },
  { id: 3, title: "Yoga Flow : Alignement & Éveil", category: "Fitness", type: "video", img: "fitness-session", duration: "35 min", views: "850", author: "Sarah B." },
  { id: 4, title: "Secrets de Peau : Anti-Âge Global", category: "Beauté", type: "article", img: "beauty-face", duration: "10 min", views: "2.1k", author: "Julie V." },
  { id: 5, title: "Méditation Transcendantale", category: "Mindfulness", type: "video", img: "coaching-meditation", duration: "20 min", views: "1.5k", author: "Maître Zen" },
  { id: 6, title: "Masterclass HIIT Performance", category: "Fitness", type: "video", img: "fitness-session", duration: "45 min", views: "4.2k", author: "Jean-Pierre" },
  { id: 7, title: "La Science du Sommeil Profond", category: "Mindfulness", type: "article", img: "beauty-face", duration: "15 min", views: "2.8k", author: "Dr. Thomas" },
  { id: 8, title: "Recettes Détox Gastronomiques", category: "Nutrition", type: "article", img: "healthy-meal", duration: "14 min", views: "1.9k", author: "Chef Amara" },
];

export default function LibraryPage() {
  const defaultImg = "https://picsum.photos/seed/library/800/600";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-8 md:px-12 py-16 space-y-24">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 soft-reveal">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/40 text-primary px-8 py-2 rounded-full uppercase text-[10px] tracking-[0.5em] font-bold">Bibliothèque du Savoir</Badge>
            <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.85]">Cercle de <br/><span className="luxury-gold-gradient">Connaissance</span>.</h1>
            <p className="text-xl text-zinc-500 max-w-2xl font-light italic leading-relaxed">Accédez à l'expertise mondiale en bien-être, nutrition et performance.</p>
          </div>
          <div className="relative w-full md:w-[450px] group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-primary transition-colors" size={24} />
            <Input className="pl-20 min-h-[5rem] rounded-full border-white/10 bg-zinc-900/40 text-xl placeholder:text-zinc-800 focus:border-primary/40 focus:ring-0 transition-all shadow-2xl" placeholder="Chercher une masterclass..." />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 soft-reveal">
          {RESOURCES.map((res) => (
            <Card key={res.id} className="overflow-hidden border-white/5 bg-zinc-900/20 hover:border-primary/40 transition-all cursor-pointer group rounded-3xl shadow-xl hover:shadow-primary/5">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === res.img)?.imageUrl || defaultImg}
                  alt={res.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {res.type === 'video' ? <PlayCircle size={80} className="text-primary drop-shadow-2xl" /> : <FileText size={80} className="text-primary drop-shadow-2xl" />}
                </div>
                <div className="absolute bottom-8 left-8">
                  <Badge className="bg-white/10 backdrop-blur-xl text-white border-white/20 text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full">
                    {res.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-10 space-y-6">
                <div className="flex justify-between items-start gap-6">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-headline font-bold uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{res.title}</CardTitle>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">Expert : {res.author}</p>
                    <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700 pt-2">
                      <span className="flex items-center gap-3"><Clock size={14} /> {res.duration}</span>
                      <span className="flex items-center gap-3"><Eye size={14} /> {res.views}</span>
                    </div>
                  </div>
                  <ChevronRight size={28} className="text-primary mt-1 opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 transition-all duration-700" />
                </div>
              </CardHeader>
              <CardContent className="px-10 pb-10 flex items-center justify-between border-t border-white/5 pt-6">
                <Badge variant="outline" className="text-[9px] uppercase border-zinc-800 text-zinc-600 px-4 py-1.5 font-bold tracking-widest bg-zinc-900/40">
                   {res.type === 'video' ? <span className="flex items-center gap-2"><Video size={12} /> Vidéo HD</span> : <span className="flex items-center gap-2"><Book size={12} /> Guide PDF</span>}
                </Badge>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-zinc-700 hover:text-primary group">
                  <Download size={18} className="group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
