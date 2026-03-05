import { Navbar } from '@/components/layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Dumbbell, Brain, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SERVICES = {
  beauty: [
    { id: 'b1', title: "Facial Éclat Instantané", price: "15,000 FCFA", duration: "45 min", rating: 4.8, img: "beauty-service" },
    { id: 'b2', title: "Massage Relaxant Global", price: "25,000 FCFA", duration: "60 min", rating: 4.9, img: "beauty-service" },
    { id: 'b3', title: "Manucure & Pédicure Deluxe", price: "12,000 FCFA", duration: "90 min", rating: 4.7, img: "beauty-service" },
  ],
  fitness: [
    { id: 'f1', title: "Session Coaching Privé", price: "10,000 FCFA", duration: "60 min", rating: 5.0, img: "fitness-session" },
    { id: 'f2', title: "Cours de HIIT Groupé", price: "5,000 FCFA", duration: "45 min", rating: 4.5, img: "fitness-session" },
    { id: 'f3', title: "Yoga Vinyasa", price: "7,000 FCFA", duration: "75 min", rating: 4.8, img: "fitness-session" },
  ],
  coaching: [
    { id: 'c1', title: "Bilan Transformation", price: "Libre", duration: "30 min", rating: 4.9, img: "coaching-meditation" },
    { id: 'c2', title: "Nutrition Personnalisée", price: "15,000 FCFA", duration: "45 min", rating: 4.7, img: "healthy-meal" },
  ]
};

export default function BookingPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-headline font-bold text-primary">Réserver un Service</h1>
          <p className="text-muted-foreground">Choisissez votre moment de transformation personnalisée.</p>
        </header>

        <Tabs defaultValue="beauty" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-white/50 backdrop-blur-sm p-1 rounded-2xl shadow-sm border border-border">
            <TabsTrigger value="beauty" className="rounded-xl flex items-center gap-2">
              <Sparkles size={16} /> <span className="hidden md:inline">Beauté</span>
            </TabsTrigger>
            <TabsTrigger value="fitness" className="rounded-xl flex items-center gap-2">
              <Dumbbell size={16} /> <span className="hidden md:inline">Sport</span>
            </TabsTrigger>
            <TabsTrigger value="coaching" className="rounded-xl flex items-center gap-2">
              <Brain size={16} /> <span className="hidden md:inline">Coaching</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(SERVICES).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((service) => (
                  <Card key={service.id} className="overflow-hidden border-none shadow-sm hover:shadow-lg transition-all group rounded-2xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={PlaceHolderImages.find(p => p.id === service.img)?.imageUrl || ""}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={PlaceHolderImages.find(p => p.id === service.img)?.imageHint}
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm border-none font-bold">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-primary" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-amber-500 fill-amber-500" />
                          <span>{service.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">Réserver maintenant</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
