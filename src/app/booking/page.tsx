import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const BEAUTY_SERVICES = [
  {
    id: 's1',
    title: 'Coiffure Femme & Homme',
    desc: 'Tresses, perruques, dégradés, barbes et coiffures événementielles',
    img: 'beauty-hair'
  },
  {
    id: 's2',
    title: 'Manucure & Pédicure',
    desc: 'Gel, résine, nail art et soins spa complets',
    img: 'beauty-nails'
  },
  {
    id: 's3',
    title: 'Maquillage',
    desc: 'Soirée, mariée, professionnel et maquillage personnalisé',
    img: 'beauty-makeup'
  },
  {
    id: 's4',
    title: 'Soins Visage & Corps',
    desc: 'Hydratation, anti-âge, gommage, massage et soins minceur',
    img: 'beauty-face'
  }
];

export default function BookingPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        {/* Header Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight">
            Services Beauté & Esthétique
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
            Des soins professionnels pour sublimer votre apparence
          </p>
        </section>

        {/* Circular Services Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {BEAUTY_SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="flex flex-col gap-8 group animate-in fade-in slide-in-from-bottom-8 duration-[1200ms]"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-full overflow-hidden border-2 border-white/5 group-hover:border-primary/40 transition-all duration-1000 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image 
                  src={PlaceHolderImages.find(p => p.id === service.img)?.imageUrl || ""}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
              
              <div className="space-y-4 text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-medium leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 max-w-xl">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 rounded-full font-bold tracking-[0.3em] uppercase text-[10px]">Expérience Signature</Badge>
            <h2 className="text-4xl font-serif">Une excellence sans compromis.</h2>
            <p className="text-zinc-500 text-lg italic">"La beauté est l'expression de votre force intérieure. Chez B-right, nous la révélons avec art."</p>
          </div>
          <button className="w-full md:w-auto px-16 py-8 bg-primary text-black font-bold rounded-full text-xl hover:bg-white transition-all duration-700 shadow-2xl uppercase tracking-[0.2em]">
            Prendre un rendez-vous
          </button>
        </section>
      </main>

      {/* Security/Trust Footer */}
      <footer className="py-20 bg-black/40 border-t border-white/5 flex justify-center items-center gap-8 opacity-40">
        <div className="h-px w-24 bg-zinc-800" />
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600">Protocoles B-right Élite</span>
        <div className="h-px w-24 bg-zinc-800" />
      </footer>
    </div>
  );
}
