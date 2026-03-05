import { Navbar } from '@/components/layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Dumbbell, Brain, Clock, Star, MapPin, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SERVICES = {
  beauty: [
    { id: 'b1', title: "Facial Éclat Instantané", price: "15,000 FCFA", duration: "45 min", rating: 4.8, img: "beauty-service", desc: "Redonnez vie à votre teint avec notre soin signature." },
    { id: 'b2', title: "Massage Relaxant Global", price: "25,000 FCFA", duration: "60 min", rating: 4.9, img: "spa-relax", desc: "Une déconnexion totale pour libérer les tensions musculaires." },
    { id: 'b3', title: "Manucure Deluxe", price: "12,000 FCFA", duration: "90 min", rating: 4.7, img: "beauty-service", desc: "Le soin complet pour des mains sublimées." },
  ],
  fitness: [
    { id: 'f1', title: "Session Coaching Privé", price: "10,000 FCFA", duration: "60 min", rating: 5.0, img: "fitness-session", desc: "Un accompagnement sur mesure pour vos objectifs." },
    { id: 'f2', title: "Cours de HIIT Groupé", price: "5,000 FCFA", duration: "45 min", rating: 4.5, img: "hiit-workout", desc: "Brûlez un maximum de calories dans une ambiance explosive." },
    { id: 'f3', title: "Yoga Vinyasa", price: "7,000 FCFA", duration: "75 min", rating: 4.8, img: "yoga-stretch", desc: "Fluidité et respiration pour un corps plus souple." },
  ],
  coaching: [
    { id: 'c1', title: "Bilan Transformation", price: "Gratuit", duration: "30 min", rating: 4.9, img: "coaching-meditation", desc: "Analysez vos besoins avec un expert MondeTransfo." },
    { id: 'c2', title: "Nutrition Personnalisée", price: "15,000 FCFA", duration: "45 min", rating: 4.7, img: "healthy-meal", desc: "Optimisez votre alimentation pour des résultats durables." },
  ]
};

export default function BookingPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20 bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <Badge className="bg-accent/10 text-accent border-none font-bold">RÉSERVATIONS</Badge>
          <h1 className="text-6xl font-headline font-bold text-slate-900 tracking-tighter">Votre moment.<br/><span className="text-primary">À votre rythme.</span></h1>
          <p className="text-xl text-muted-foreground">Sélectionnez le service qui correspond à votre étape actuelle de transformation. Nos experts vous attendent.</p>
        </header>

        {/* Trending Section */}
        <section className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
              <TrendingUp size={24} />
            </div>
            <h2 className="text-2xl font-headline font-bold">Populaire en ce moment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[SERVICES.beauty[1], SERVICES.fitness[0]].map((service) => (
              <div key={service.id} className="flex gap-6 p-6 rounded-[2rem] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer group">
                <div className="relative w-32 h-32 rounded-3xl overflow-hidden shrink-0">
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === service.img)?.imageUrl || ""}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-xl group-hover:text-primary transition-colors">{service.title}</h4>
                    <span className="font-bold text-primary">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{service.desc}</p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-tighter">
                      <Clock size={14} className="text-primary" /> {service.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-tighter">
                      <Star size={14} className="text-amber-500 fill-amber-500" /> {service.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Tabs defaultValue="beauty" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-10 h-16 bg-white shadow-sm p-1.5 rounded-[1.5rem] border border-slate-100">
            <TabsTrigger value="beauty" className="rounded-[1.2rem] flex items-center gap-3 data-[state=active]:bg-primary data-[state=active]:text-white text-lg font-bold transition-all">
              <Sparkles size={20} /> <span className="hidden md:inline">Beauté & Spa</span>
            </TabsTrigger>
            <TabsTrigger value="fitness" className="rounded-[1.2rem] flex items-center gap-3 data-[state=active]:bg-primary data-[state=active]:text-white text-lg font-bold transition-all">
              <Dumbbell size={20} /> <span className="hidden md:inline">Sport & HIIT</span>
            </TabsTrigger>
            <TabsTrigger value="coaching" className="rounded-[1.2rem] flex items-center gap-3 data-[state=active]:bg-primary data-[state=active]:text-white text-lg font-bold transition-all">
              <Brain size={20} /> <span className="hidden md:inline">Coaching Mental</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(SERVICES).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((service) => (
                  <Card key={service.id} className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all group rounded-[2.5rem] bg-white flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image 
                        src={PlaceHolderImages.find(p => p.id === service.img)?.imageUrl || ""}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-white/90 backdrop-blur-md border-none font-bold text-primary py-1.5 px-4 shadow-sm">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-8 pb-4">
                      <CardTitle className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-2 line-clamp-2">{service.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 space-y-4 flex-1">
                      <div className="flex items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-tight">
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-primary" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star size={16} className="text-amber-500 fill-amber-500" />
                          <span>{service.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Badge variant="outline" className="rounded-full border-slate-100 flex items-center gap-1 text-[10px]"><ShieldCheck size={12} className="text-emerald-500"/> Certifié MondeTransfo</Badge>
                        <Badge variant="outline" className="rounded-full border-slate-100 flex items-center gap-1 text-[10px]"><Heart size={12} className="text-rose-500"/> Inclus Premium</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-8 pt-0">
                      <Button className="w-full rounded-2xl bg-slate-900 hover:bg-primary py-7 font-bold text-lg shadow-lg transition-all group-hover:-translate-y-1">Réserver ce créneau</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Footer info */}
        <section className="flex flex-col md:flex-row gap-8 items-center justify-between p-12 bg-primary/5 rounded-[3rem] border border-primary/10">
          <div className="flex gap-6 items-center">
            <div className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-primary/20 shrink-0">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline">Centre MondeTransfo</h3>
              <p className="text-muted-foreground font-medium">Cotonou, Quartier Haie Vive, Rue 241</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-2xl px-8 border-primary/20 text-primary font-bold">Itinéraire</Button>
            <Button className="rounded-2xl px-8 bg-primary font-bold">Contacter le centre</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
