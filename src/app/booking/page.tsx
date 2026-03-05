import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Clock, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const BEAUTY_SERVICES = [
  {
    id: 's1',
    title: 'Coiffure Haute Couture',
    desc: 'Tresses artistiques, perruques de luxe et colorations sur mesure.',
    details: 'Nos experts formés aux techniques internationales subliment votre chevelure avec des produits organiques de prestige.',
    img: 'beauty-hair',
    duration: '1h30 - 3h00',
    price: 'À partir de 15,000 FCFA'
  },
  {
    id: 's2',
    title: 'Nail Art & Soins Spa',
    desc: 'Gel résine, nail art complexe et rituels détente pour mains et pieds.',
    details: 'Un moment de pure relaxation incluant gommage, massage et pose de vernis longue durée.',
    img: 'beauty-nails',
    duration: '1h00',
    price: 'À partir de 10,000 FCFA'
  },
  {
    id: 's3',
    title: 'Maquillage Signature',
    desc: 'Maquillage événementiel, mariée et shooting professionnel.',
    details: 'Réalisation d\'un look personnalisé qui révèle votre beauté naturelle tout en garantissant une tenue infaillible.',
    img: 'beauty-makeup',
    duration: '1h00',
    price: 'À partir de 25,000 FCFA'
  },
  {
    id: 's4',
    title: 'Soins Visage Avancés',
    desc: 'Hydratation profonde, anti-âge et soins éclat instantané.',
    details: 'Protocoles utilisant les dernières technologies de radiofréquence et sérums hautement concentrés.',
    img: 'beauty-face',
    duration: '45 min - 1h15',
    price: 'À partir de 30,000 FCFA'
  }
];

export default function BookingPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        {/* Elegant Header */}
        <section className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge variant="outline" className="border-primary/30 text-primary px-6 py-1 uppercase text-[10px] tracking-[0.4em]">Services VIP</Badge>
          <h1 className="text-6xl md:text-8xl font-serif text-primary tracking-tight leading-none">
            L'Art de <br/> la Sublimation.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed italic">
            "La beauté est la signature de l'âme. Nous en sommes les calligraphes."
          </p>
        </section>

        {/* Circular Services Grid - Refined Spacing */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {BEAUTY_SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="flex flex-col gap-10 group animate-in fade-in slide-in-from-bottom-8 duration-[1200ms]"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-full overflow-hidden border border-white/5 group-hover:border-primary/40 transition-all duration-1000 shadow-2xl">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === service.img)?.imageUrl || ""}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="space-y-6 text-center md:text-left">
                <div className="space-y-2">
                   <h3 className="text-3xl font-serif font-medium leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-widest text-primary/60">
                  <span className="flex items-center gap-2"><Clock size={12} /> {service.duration}</span>
                  <span className="flex items-center gap-2"><Sparkles size={12} /> {service.price}</span>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase text-[11px] tracking-[0.3em] flex items-center gap-3">
                  En savoir plus <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* Exclusive Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
          {[
            { title: "Produits Élite", content: "Utilisation exclusive de marques haut de gamme certifiées Bio et Luxe.", icon: <ShieldCheck /> },
            { title: "Experts Dédiés", content: "Une équipe formée aux derniers standards de la haute esthétique mondiale.", icon: <Star /> },
            { title: "Hygiène Draconienne", content: "Protocoles de stérilisation et de propreté conformes aux normes médicales.", icon: <CheckCircle /> }
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="text-primary mb-2 opacity-50">{benefit.icon}</div>
              <h4 className="text-xl font-headline font-bold uppercase tracking-widest">{benefit.title}</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{benefit.content}</p>
            </div>
          ))}
        </section>

        {/* CTA Section Refined */}
        <section className="bg-zinc-900/40 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 border border-white/5">
          <div className="space-y-6 max-w-xl">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full text-[10px] tracking-widest">Réservation Prioritaire</Badge>
            <h2 className="text-4xl md:text-5xl font-serif">Planifiez votre moment d'exception.</h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">Nos concierges sont à votre disposition pour organiser une session personnalisée qui répond à vos moindres désirs.</p>
          </div>
          <Button className="w-full md:w-auto px-16 py-8 bg-primary text-black font-bold rounded-full text-lg hover:bg-white transition-all duration-500 uppercase tracking-[0.2em] h-auto shadow-2xl">
            Prendre Rendez-vous
          </Button>
        </section>
      </main>

      <footer className="py-20 bg-black/40 border-t border-white/5 flex justify-center items-center gap-8 opacity-40">
        <div className="h-px w-24 bg-zinc-800" />
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600">Protocoles B-right Élite</span>
        <div className="h-px w-24 bg-zinc-800" />
      </footer>
    </div>
  );
}
