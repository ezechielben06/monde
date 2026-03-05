import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AIRecommender } from '@/components/dashboard/AIRecommender';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Flame, Heart, Trophy, Zap, Star, Crown, ShieldCheck, ArrowRight, Calendar, Sparkles, Check, Gem, Users, Quote, Fingerprint } from 'lucide-react';
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
        <section className="relative h-[80vh] rounded-3xl overflow-hidden group border border-white/5 soft-reveal">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[8000ms] ease-out"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent flex flex-col justify-end p-8 md:p-20 text-white">
            <div className="max-w-4xl space-y-8">
              <Badge className="bg-primary/10 text-primary border border-primary/20 py-2 px-6 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase backdrop-blur-xl">
                L'Excellence à votre portée
              </Badge>
              <h1 className="text-6xl md:text-[8rem] font-headline font-bold leading-[0.9] tracking-tighter luxury-gold-gradient">
                Incarnez <br/> la Perfection.
              </h1>
              <p className="text-zinc-400 font-light max-w-xl text-xl leading-relaxed opacity-80">
                Redéfinissez vos limites avec B-right. Une expérience holistique où la technologie de pointe rencontre le luxe ancestral.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Button className="rounded-full px-12 py-7 bg-primary text-black hover:bg-white transition-all duration-500 font-bold text-lg uppercase tracking-widest shadow-xl h-auto">
                  Débuter le Voyage
                </Button>
                <Button variant="outline" className="rounded-full px-12 py-7 border-white/10 text-white hover:bg-white/10 font-bold text-lg backdrop-blur-xl transition-all h-auto uppercase tracking-widest">
                  Découvrir nos Cercles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center soft-reveal">
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1 uppercase text-[10px] tracking-widest">Notre Héritage</Badge>
              <h2 className="text-5xl font-headline font-bold tracking-tighter leading-tight">La Science du <br/><span className="luxury-gold-gradient">Bien-être Global</span></h2>
            </div>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Chez B-right, nous croyons que la performance n'est pas une destination, mais un état d'équilibre constant. Notre approche repose sur trois piliers fondamentaux : la régénération biologique, la clarté mentale et la force physique.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <Fingerprint className="text-primary mb-4" size={32} />
                <h4 className="font-bold uppercase text-sm tracking-widest">Personnalisation</h4>
                <p className="text-zinc-500 text-sm italic">Chaque protocole est unique, adapté à votre ADN et vos objectifs.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary mb-4" size={32} />
                <h4 className="font-bold uppercase text-sm tracking-widest">Confidentialité</h4>
                <p className="text-zinc-500 text-sm italic">Un sanctuaire sécurisé pour les leaders et visionnaires de ce monde.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
             <Image src="https://picsum.photos/seed/philosophy/1200/800" alt="B-right Philosophy" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </section>

        {/* Stats Grid Refined */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 soft-reveal">
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
            <Card className="premium-card p-12 bg-zinc-900/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <Gem size={200} />
              </div>
              <div className="space-y-8 relative z-10">
                <Badge className="bg-primary text-black font-bold text-[10px] tracking-widest">NOUVEAUTÉ</Badge>
                <h3 className="text-3xl font-headline font-bold uppercase">Le Rituel de l'Aurore</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Découvrez notre nouveau programme de méditation guidée conçu pour booster votre cortisol naturellement dès le réveil.</p>
                <Button variant="link" className="text-primary font-bold uppercase text-xs p-0 flex items-center gap-2">Découvrir le Rituel <ArrowRight size={14} /></Button>
              </div>
            </Card>

            <Card className="premium-card p-12">
              <h3 className="text-2xl font-headline font-bold mb-8">Dernières Actualités</h3>
              <div className="space-y-8">
                {[
                  { title: "Ouverture du Spa à Cotonou", date: "Jan 20, 2024" },
                  { title: "Masterclass avec Maître Zen", date: "Fév 05, 2024" },
                  { title: "Mise à jour de l'IA Elite v2", date: "Mar 12, 2024" }
                ].map((news, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0">
                    <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">{news.date}</span>
                    <h4 className="font-bold hover:text-primary transition-colors cursor-pointer">{news.title}</h4>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="space-y-20 soft-reveal">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-5xl font-headline font-bold">Choisissez votre <br/><span className="luxury-gold-gradient">Cercle d'Excellence</span></h2>
            <p className="text-zinc-500 italic text-lg">Un investissement pour votre futur soi. Sans compromis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRICING_PLANS.map((plan, i) => (
              <Card key={i} className={`rounded-3xl border-white/5 bg-zinc-900/20 backdrop-blur-xl p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] ${plan.isPopular ? 'border-primary/40 shadow-2xl' : ''}`}>
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-headline font-bold">{plan.name}</h3>
                    {plan.isPopular && <Badge className="bg-primary text-black font-bold text-[9px]">Recommandé</Badge>}
                  </div>
                  <div className="space-y-1">
                    <span className="text-5xl font-bold luxury-gold-gradient">{plan.price}</span>
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">{plan.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                        <Check size={14} className="text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className={`w-full mt-10 rounded-full py-6 font-bold uppercase tracking-widest h-auto ${plan.isPopular ? 'bg-primary text-black hover:bg-white' : 'bg-white/5 text-white hover:bg-primary hover:text-black border border-white/10'}`}>
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-20 soft-reveal pb-20">
          <h2 className="text-4xl font-headline font-bold text-center">La voix de <br/><span className="luxury-gold-gradient">nos Ambassadeurs</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="premium-card p-10 space-y-6 text-center">
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={`https://picsum.photos/seed/${t.seed}/200`} alt={t.name} fill className="object-cover grayscale" />
                </div>
                <div className="space-y-2">
                  <Quote className="text-primary/20 mx-auto" size={32} />
                  <p className="text-zinc-400 text-sm italic italic leading-relaxed">"{t.content}"</p>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest">{t.name}</h4>
                  <span className="text-[10px] text-zinc-600 font-medium">{t.role}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
