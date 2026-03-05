import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, PlayCircle, FileText, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const RESOURCES = [
  { id: 1, title: "Guide de la Routine Matinale", category: "Mindfulness", type: "article", img: "coaching-meditation", duration: "5 min" },
  { id: 2, title: "15 Recettes Détox Rapides", category: "Nutrition", type: "article", img: "healthy-meal", duration: "10 min" },
  { id: 3, title: "Yoga pour Débutants (Vidéo)", category: "Fitness", type: "video", img: "fitness-session", duration: "25 min" },
  { id: 4, title: "Les Secrets du Soin de Peau", category: "Beauté", type: "article", img: "beauty-service", duration: "8 min" },
  { id: 5, title: "Méditation de Pleine Conscience", category: "Mindfulness", type: "video", img: "coaching-meditation", duration: "15 min" },
  { id: 6, title: "Entraînement HIIT à Domicile", category: "Fitness", type: "video", img: "fitness-session", duration: "20 min" },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-bold text-primary">Ressources Bien-être</h1>
            <p className="text-muted-foreground">Apprenez et grandissez avec nos experts.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input className="pl-10 rounded-full border-none shadow-sm bg-white" placeholder="Chercher un sujet..." />
          </div>
        </header>

        <div className="flex flex-wrap gap-2">
          {["Tout", "Fitness", "Nutrition", "Mindfulness", "Beauté", "Coaching"].map((cat) => (
            <Badge key={cat} variant={cat === "Tout" ? "default" : "secondary"} className="rounded-full px-4 py-1 cursor-pointer hover:opacity-80 transition-opacity">
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((res) => (
            <Card key={res.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all cursor-pointer group rounded-2xl">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === res.img)?.imageUrl || ""}
                  alt={res.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {res.type === 'video' ? <PlayCircle size={48} className="text-white" /> : <FileText size={48} className="text-white" />}
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-primary border-none text-[10px] font-bold uppercase">
                    {res.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-5">
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-headline leading-tight">{res.title}</CardTitle>
                    <CardDescription>{res.duration} de lecture/visionnage</CardDescription>
                  </div>
                  <ChevronRight size={20} className="text-primary mt-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
