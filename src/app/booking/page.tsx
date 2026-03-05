import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Clock, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Gem, MapPin } from 'lucide-react';

const BEAUTY_SERVICES = [
  {
    id: 's1',
    title: 'Coiffure Haute Couture',
    desc: 'Tresses artistiques, perruques de luxe et colorations sur mesure.',
    img: 'beauty-hair',
    duration: '1h30 - 3h00',
    price: 'À partir de 15,000 FCFA'
  },
  {
    id: 's2',
    title: 'Nail Art & Soins Spa',
    desc: 'Gel résine, nail art complexe et rituels détente pour mains et pieds.',
    img: 'beauty-nails',
    duration: '1h00',
    price: 'À partir de 10,000 FCFA'
  },
  {
    id: 's3',
    title: 'Maquillage Signature',
    desc: 'Maquillage événementiel, mariée et shooting professionnel.',
    img: 'beauty-makeup',
    duration: '1h00',
    price: 'À partir de 25,000 FCFA'
  },
  {
    id: 's4',
    title: 'Soins Visage Avancés',
    desc: 'Hydratation profonde, anti-âge et soins éclat instantané.',
    img: 'beauty-face',
    duration: '45 min - 1h15',
    price: 'À partir de 30,000 FCFA'
  }
];

export default function BookingPage() {
  const defaultImg = "https://picsum.photos/seed/beauty/800/800";

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-32">
        <section className="max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 py-2 uppercase text-[10px] tracking-[0.5em] font-bold rounded-full">Services VIP</Badge>
          <h1 className="text-7xl md:text-[9rem] font-serif text-primary tracking-tighter leading-[0.85]">
            L'Art de <br/> la Sublimation.
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-500 font-light max-w-3xl leading-relaxed italic">
            "La beauté est la signature de l'âme. Nous en sommes les calligraphes les plus passionnés."
          </p>
          <div className="flex items-center gap-4 text-zinc-600 font-bold uppercase text-[10px] tracking-[0.4em]">
             <MapPin size={16} className="text-primary/60" /> Sanctuaire de Prestige, Cotonou
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          {BEAUTY_SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="flex flex-col gap-12 group animate-in fade-in slide-in-from-bottom-8 duration-[1200ms]"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square w-full max-w-[320px] mx-auto rounded-full overflow-hidden border border-white/10 group-hover:border-primary/40 transition-all duration-1000 shadow-2xl">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === service.img)?.imageUrl || defaultImg}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>
              
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-4">
                   <h3 className="text-3xl font-serif font-medium leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  <span className="flex items-center gap-3"><Clock size={14} className="text-primary/60" /> {service.duration}</span>
                  <span className="flex items-center gap-3"><Sparkles size={14} className="text-primary/60" /> {service.price}</span>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary font-bold uppercase text-[11px] tracking-[0.4em] flex items-center gap-4 group">
                  Détails du soin <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-24 border-t border-white/5">
          {[
            { title: "Produits Élite", content: "Utilisation exclusive de marques haut de gamme certifiées Bio et Luxe.", icon: <ShieldCheck size={32} /> },
            { title: "Experts Dédiés", content: "Une équipe formée aux derniers standards de la haute esthétique mondiale.", icon: <Star size={32} /> },
            { title: "Hygiène Royale", content: "Protocoles de stérilisation et de propreté conformes aux normes médicales.", icon: <CheckCircle size={32} /> }
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 group">
              <div className="text-primary mb-2 opacity-40 group-hover:opacity-100 transition-opacity group-hover:scale-110 transition-transform duration-700">{benefit.icon}</div>
              <h4 className="text-2xl font-headline font-bold uppercase tracking-tight">{benefit.title}</h4>
              <p className="text-zinc-500 text-base font-light leading-relaxed italic">{benefit.content}</p>
            </div>
          ))}
        </section>

        <section className="bg-zinc-900/40 rounded-[3rem] p-16 md:p-24 flex flex-col md:flex-row justify-between items-center gap-16 border border-white/10 shadow-3xl group relative overflow-hidden">
          <div className="absolute top-0 left-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-[5000ms] scale-[2.5] origin-top-left">
             <Gem size={300} />
          </div>
          <div className="space-y-8 max-w-2xl relative z-10 text-center md:text-left">
            <Badge className="bg-primary/20 text-primary border-none px-6 py-2 rounded-full text-[10px] tracking-[0.4em] font-bold">Réservation Prioritaire</Badge>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Planifiez votre moment <br/><span className="luxury-gold-gradient">d'Exception</span>.</h2>
            <p className="text-zinc-500 text-xl font-light leading-relaxed italic">Nos concierges sont à votre entière disposition pour organiser une session personnalisée.</p>
          </div>
          <Button size="lg" className="w-full md:w-auto px-20 py-10 bg-primary text-black font-bold rounded-full text-xl hover:bg-white transition-all duration-700 uppercase tracking-[0.3em] h-auto shadow-2xl relative z-10">
            Prendre Rendez-vous
          </Button>
        </section>
      </main>
    </div>
  );
}
