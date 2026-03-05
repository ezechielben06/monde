
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Globe, Bell, Palette, LogOut, ChevronRight, Lock } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="space-y-8 soft-reveal">
           <h1 className="text-7xl md:text-[9rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold">Paramètres <br/> du Palais.</h1>
           <p className="text-2xl text-zinc-500 font-light max-w-3xl italic">Configurez votre environnement d'excellence.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 soft-reveal">
          <div className="lg:col-span-4 space-y-12">
            <Card className="bg-zinc-900/40 border-white/5 rounded-[3rem] overflow-hidden shadow-3xl">
              <div className="p-10 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter leading-none">Compte Élite</h3>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-2">Bright Ahounou</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-6 bg-zinc-800/20 rounded-2xl border border-white/5 hover:border-primary/40 transition-all text-left group">
                    <div className="flex items-center gap-4">
                      <Lock size={18} className="text-zinc-600 group-hover:text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest">Sécurité</span>
                    </div>
                    <ChevronRight size={16} className="text-zinc-700" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 bg-zinc-800/20 rounded-2xl border border-white/5 hover:border-red-900/40 transition-all text-left group">
                    <div className="flex items-center gap-4 text-red-900 group-hover:text-red-500 transition-colors">
                      <LogOut size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">Déconnexion</span>
                    </div>
                  </button>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <section className="space-y-10">
              <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                <Globe className="text-primary" size={24} />
                <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Préférences Globales</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <Label className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest ml-4">Langue de l'interface</Label>
                  <Select defaultValue="fr">
                    <SelectTrigger className="h-16 rounded-2xl bg-zinc-900/40 border-white/10 text-white focus:ring-primary/40">
                      <SelectValue placeholder="Langue" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-white/10 text-white">
                      <SelectItem value="fr">Français (Prestige)</SelectItem>
                      <SelectItem value="en">English (Elite)</SelectItem>
                      <SelectItem value="es">Español (Lujo)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest ml-4">Monnaie d'affichage</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger className="h-16 rounded-2xl bg-zinc-900/40 border-white/10 text-white focus:ring-primary/40">
                      <SelectValue placeholder="Monnaie" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-white/10 text-white">
                      <SelectItem value="eur">Euro (EUR)</SelectItem>
                      <SelectItem value="usd">Dollar (USD)</SelectItem>
                      <SelectItem value="xof">Franc CFA (XOF)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                <Bell className="text-primary" size={24} />
                <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Alertes & Notifications</h2>
              </div>
              <div className="space-y-8 p-10 bg-zinc-900/20 rounded-[3rem] border border-white/5">
                {[
                  { label: "Rappels de Transformation", desc: "Soyez alerté de vos prochains rendez-vous coaching et sport.", default: true },
                  { label: "Offres Exclusives", desc: "Recevez les invitations aux ventes privées et nouveaux services.", default: true },
                  { label: "Alertes Santé IA", desc: "Analyse en temps réel de vos métriques corporelles.", default: false }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-10">
                    <div className="space-y-1">
                      <p className="font-bold text-lg">{item.label}</p>
                      <p className="text-xs text-zinc-500 font-light italic">{item.desc}</p>
                    </div>
                    <Switch defaultChecked={item.default} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
