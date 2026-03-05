import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Flame, Heart, Trophy, Zap, Star, Crown, ShieldCheck, ArrowRight, Calendar, Sparkles, Check, Gem, Users, Quote, Fingerprint, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PRICING_PLANS = [
  {
    name: "Cercle Éclat",
    price: "25,000",
    period: "par mois",
    description: "L'essentiel de la transformation pour les esprits en quête d'harmonie.",
    features: [
      "Accès illimité aux installations",
      "Bilan vitalité trimestriel",
      "Assistant IA personnalisé",
      "Accès à la bibliothèque de savoir",
      "2 séances collectives par semaine"
    ],
    isPopular: false,
    cta: "Commencer l'ascension"
  },
  {
    name: "Cercle Impérial",
    price: "45,000",
    period: "par mois",
    description: "L'expérience B-right complète pour une excellence sans compromis.",
    features: [
      "Tout le Cercle Éclat",
      "Coaching privé mensuel",
      "Accès Prioritaire aux soins Spa",
      "Programme nutritionnel sur mesure",
      "Invitations aux événements VIP",
      "Conciergerie bien-être 7j/7"
    ],
    isPopular: true,
    cta: "Rejoindre l'élite"
  },
  {
    name: "Cercle Diamond",
    price: "120,000",
    period: "par mois",
    description: "L'ultime privilège. Une transformation totale pilotée par des maîtres.",
    features: [
      "Tout le Cercle Impérial",
      "Entraîneur privé dédié illimité",
      "Soin signature hebdomadaire",
      "Accès exclusif au Salon Privé",
      "Services de chauffeur privé",
      "Protocole de régénération avancé"
    ],
    isPopular: false,
    cta: "Incarner la légende"
  }
];

const TESTIMONIALS = [
  { name: "Alexandra V.", role: "CEO & Philanthrope", content: "B-right a transformé ma vision du bien-être. Ce n'est plus une contrainte, c'est un art de vivre.", seed: "v1" },
  { name: "Julien M.", role: "Athlète de haut niveau", content: "L'accompagnement IA et humain est d'une précision chirurgicale. Mes performances ont doublé en 6 mois.", seed: "v2" },
  { name: "Elena R.", role: "Artiste Designer", content: "L'esthétique du lieu et la qualité des soins sont inégalées. Un sanctuaire de sérénité.", seed: "v3" }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wellness');

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-24 bg-[#050505]">
      <Navbar />
      
      <main className="max-w-[1600px] mx-auto container-padding space-y-32">
        {/* Hero Section Refined */}
        <section className="relative h-[85vh] rounded-[2rem] overflow-hidden group border border-white/5 soft-reveal shadow-2xl">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-[10000ms] ease-out"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex flex-col justify-end p-10 md:p-24 text-white">
            <div className="max-w-5xl space-y-10">
              <Badge className="bg-primary/10 text-primary border border-primary/30 py-2 px-8 rounded-full text-[10px] font-bold tracking-[0.5em] uppercase backdrop-blur-2xl">
                L'Excellence à votre portée
              </Badge>
              <h1 className="text-7xl md:text-[10rem] font-headline font-bold leading-[0.85] tracking-tighter luxury-gold-gradient">
                Incarnez <br/> la Perfection.
              </h1>
              <p className="text-zinc-400 font-light max-w-2xl text-xl md:text-2xl leading-relaxed opacity-90 italic">
                Redéfinissez vos limites avec B-right. Une expérience holistique où la technologie de pointe rencontre le luxe ancestral.
              </p>
              <div className="flex flex-wrap gap-8 pt-6">
                <Button size="lg" className="rounded-full px-16 bg-primary text-black font-bold uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
                  Débuter le Voyage
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-16 border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-widest transition-all">
                  Découvrir nos Cercles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center soft-reveal">
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/40 text-primary px-6 py-1.5 uppercase text-[10px] tracking-widest font-bold">Notre Héritage</Badge>
              <h2 className="text-6xl font-headline font-bold tracking-tighter leading-none">La Science du <br/><span className="luxury-gold-gradient">Bien-être Global</span></h2>
            </div>
            <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-xl">
              Chez B-right, nous croyons que la performance n'est pas une destination, mais un état d'équilibre constant. Notre approche repose sur trois piliers fondamentaux : la régénération biologique, la clarté mentale et la force physique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4 p-8 bg-zinc-900/40 rounded-3xl border border-white/5 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                   <Fingerprint size={28} />
                </div>
                <h4 className="font-bold uppercase text-base tracking-widest">Personnalisation</h4>
                <p className="text-zinc-500 text-sm italic font-light leading-relaxed">Chaque protocole est unique, adapté à votre ADN et vos objectifs personnels.</p>
              </div>
              <div className="space-y-4 p-8 bg-zinc-900/40 rounded-3xl border border-white/5 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                   <ShieldCheck size={28} />
                </div>
                <h4 className="font-bold uppercase text-base tracking-widest">Confidentialité</h4>
                <p className="text-zinc-500 text-sm italic font-light leading-relaxed">Un sanctuaire sécurisé pour les leaders et visionnaires de ce monde.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
             <Image src="https://picsum.photos/seed/philosophy-lux/1200/1200" alt="B-right Philosophy" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-20 soft-reveal">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="space-y-6">
               <Badge className="bg-primary/20 text-primary border-none px-6 py-2 rounded-full uppercase text-[10px] tracking-widest font-bold">L'Expérience</Badge>
               <h2 className="text-6xl font-headline font-bold">Voyage <br/><span className="luxury-gold-gradient">Sensationnel</span></h2>
            </div>
            <p className="text-zinc-500 text-lg max-w-md font-light italic">"L'excellence est le seul standard que nous acceptons pour votre transformation."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Régénération", icon: <Zap />, desc: "Protocoles de récupération avancés pour une vitalité sans faille." },
              { title: "Exploration", icon: <Compass />, desc: "Découvrez de nouveaux sommets physiques avec nos guides experts." },
              { title: "Harmonie", icon: <Heart />, desc: "L'équilibre parfait entre corps et esprit, au cœur de votre quotidien." }
            ].map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-6 p-12 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-primary/30 transition-all group">
                <div className="text-primary group-hover:scale-110 transition-transform">{exp.icon}</div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{exp.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{exp.desc}</p>
                <Button variant="link" className="w-fit p-0 uppercase text-[10px] font-bold tracking-widest text-primary/60 group-hover:text-primary">Découvrir <ArrowRight size={12} className="ml-2" /></Button>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid Refined */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 soft-reveal">
          <StatCard label="Indice Vitalité" value="98%" subValue="Performance Maximale" icon={<Zap className="text-primary" size={24} />} trend={{ value: "12%", isUp: true }} />
          <StatCard label="Membres Actifs" value="1,240" subValue="Cercle des Initiés" icon={<Users className="text-primary" size={24} />} trend={{ value: "5%", isUp: true }} />
          <StatCard label="Savoir Partagé" value="450+" subValue="Articles & Vidéos" icon={<Star className="text-primary" size={24} />} trend={{ value: "15", isUp: true }} />
          <StatCard label="Statut Élite" value="Gold" subValue="Récompense Mensuelle" icon={<Trophy className="text-primary" size={24} />} trend={{ value: "Top 1%", isUp: true }} />
        </div>

        {/* AI & Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            <AIRecommender />
            <ActivityChart />
          </div>

          <div className="lg:col-span-4 space-y-12">
            <Card className="premium-card p-12 bg-zinc-900/40 relative overflow-hidden group border-white/10">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <Gem size={200} />
              </div>
              <div className="space-y-10 relative z-10">
                <Badge className="bg-primary text-black font-bold text-[10px] tracking-widest px-6 py-2 rounded-full">NOUVEAUTÉ</Badge>
                <h3 className="text-4xl font-headline font-bold uppercase leading-tight">Le Rituel de l'Aurore</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-light italic">Découvrez notre nouveau programme de méditation guidée conçu pour booster votre cortisol naturellement dès le réveil.</p>
                <Button variant="link" className="text-primary font-bold uppercase text-xs p-0 flex items-center gap-3 group-hover:translate-x-2 transition-transform">Découvrir le Rituel <ArrowRight size={16} /></Button>
              </div>
            </Card>

            <Card className="premium-card p-12 border-white/5">
              <h3 className="text-3xl font-headline font-bold mb-10 tracking-tight">Dernières Actualités</h3>
              <div className="space-y-10">
                {[
                  { title: "Ouverture du Spa à Cotonou", date: "Jan 20, 2024" },
                  { title: "Masterclass avec Maître Zen", date: "Fév 05, 2024" },
                  { title: "Mise à jour de l'IA Elite v2", date: "Mar 12, 2024" }
                ].map((news, i) => (
                  <div key={i} className="flex flex-col gap-2 border-b border-white/5 pb-6 last:border-0 last:pb-0 group cursor-pointer">
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em]">{news.date}</span>
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors leading-snug">{news.title}</h4>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="space-y-24 soft-reveal">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge className="bg-white/5 text-zinc-500 border-zinc-800 px-8 py-2 rounded-full font-bold uppercase text-[10px] tracking-[0.5em]">Investissement</Badge>
            <h2 className="text-7xl font-headline font-bold leading-none">Choisissez votre <br/><span className="luxury-gold-gradient">Cercle d'Excellence</span></h2>
            <p className="text-zinc-500 italic text-xl font-light">"Un investissement pour votre futur soi. Sans compromis."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRICING_PLANS.map((plan, i) => (
              <Card key={i} className={`rounded-[2.5rem] border-white/5 bg-zinc-900/10 backdrop-blur-xl p-12 flex flex-col justify-between transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/10 hover:shadow-2xl ${plan.isPopular ? 'border-primary/40 shadow-2xl relative' : ''}`}>
                {plan.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-bold text-[10px] px-8 py-2 rounded-full uppercase tracking-widest shadow-xl">Recommandé</div>}
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-headline font-bold uppercase">{plan.name}</h3>
                    <p className="text-zinc-500 text-sm font-light italic leading-relaxed">{plan.description}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-6xl font-bold luxury-gold-gradient tracking-tighter">{plan.price}</span>
                    <span className="block text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-bold">{plan.period}</span>
                  </div>
                  <ul className="space-y-5">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-sm text-zinc-400 font-light">
                        <Check size={16} className="text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button size="lg" className={`w-full mt-12 rounded-full font-bold uppercase tracking-widest ${plan.isPopular ? 'bg-primary text-black' : 'bg-white/5 text-white border border-white/10 hover:bg-primary hover:text-black'}`}>
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-24 soft-reveal pb-32">
          <div className="text-center space-y-4">
             <h2 className="text-5xl font-headline font-bold">La voix de <br/><span className="luxury-gold-gradient">nos Ambassadeurs</span></h2>
             <p className="text-zinc-600 font-light uppercase tracking-widest text-xs">Rejoignez ceux qui ont déjà franchi le seuil</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="premium-card p-12 space-y-10 text-center border-white/5">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/40 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${t.seed}/300`} alt={t.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Quote className="text-primary/10 mx-auto" size={48} />
                  <p className="text-zinc-400 text-lg italic leading-relaxed font-light">"{t.content}"</p>
                </div>
                <div className="space-y-1 pt-4 border-t border-white/5">
                  <h4 className="font-bold uppercase text-sm tracking-[0.2em]">{t.name}</h4>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{t.role}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
