import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Settings, CreditCard, Bell, ShieldCheck, ChevronRight, Weight, Ruler, Target } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-3xl shadow-sm">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10">
            <Image src="https://picsum.photos/seed/profile-bright/200" alt="Bright Ahounou" fill className="object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="text-3xl font-headline font-bold text-primary">Bright Ahounou</h1>
              <Badge className="bg-accent hover:bg-accent/90 w-fit mx-auto md:mx-0">Premium Member</Badge>
            </div>
            <p className="text-muted-foreground">Membre depuis Février 2026 • Cotonou, Bénin</p>
            <div className="flex justify-center md:justify-start gap-2 pt-2">
              <Button size="sm" variant="outline" className="rounded-full gap-2"><Settings size={14} /> Modifier</Button>
              <Button size="sm" variant="outline" className="rounded-full gap-2"><Bell size={14} /> Notifications</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Metrics */}
          <Card className="border-none shadow-sm md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg font-headline">Mes Métriques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                  <Weight size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Poids Actuel</p>
                  <p className="text-lg font-bold">62.5 kg</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
                  <Ruler size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Taille</p>
                  <p className="text-lg font-bold">168 cm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/5 rounded-2xl text-accent">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Objectif</p>
                  <p className="text-lg font-bold text-accent">60.0 kg</p>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium text-muted-foreground">Progression Perte de Poids</span>
                  <span className="font-bold text-primary">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Subscription & Privacy */}
          <div className="md:col-span-2 space-y-8">
            <Card className="border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-headline">Abonnement Global Transformation</CardTitle>
                    <CardDescription className="text-white/70">Facturation mensuelle automatique</CardDescription>
                  </div>
                  <CreditCard size={32} className="opacity-20" />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="font-bold">Plan Premium Illimité</p>
                    <p className="text-sm text-muted-foreground">45,000 FCFA / mois</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Actif</Badge>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Prochaine date de paiement</span>
                    <span className="font-bold">12 Mars 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Méthode de paiement</span>
                    <span className="font-bold">Visa **** 4421</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 flex gap-2">
                <Button variant="ghost" className="text-primary text-xs">Historique des factures</Button>
                <Button variant="ghost" className="text-destructive text-xs ml-auto">Annuler</Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-0">
                <button className="w-full flex items-center justify-between p-6 hover:bg-muted/30 transition-colors text-left">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg"><ShieldCheck size={20} /></div>
                    <div>
                      <p className="font-bold">Sécurité et Confidentialité</p>
                      <p className="text-xs text-muted-foreground">Gérez vos accès et vos données</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </button>
                <Separator />
                <button className="w-full flex items-center justify-between p-6 hover:bg-muted/30 transition-colors text-left">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg"><User size={20} /></div>
                    <div>
                      <p className="font-bold">Mes Informations Personnelles</p>
                      <p className="text-xs text-muted-foreground">Identité, contact, adresse</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
