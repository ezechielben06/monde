
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ShieldCheck, CreditCard, Smartphone, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [method, setMethod] = useState('card');
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-12 text-center space-y-12">
        <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-black shadow-3xl animate-bounce">
          <CheckCircle size={64} />
        </div>
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-6xl font-serif luxury-gold-gradient font-bold uppercase tracking-tighter">Paiement Confirmé</h1>
          <p className="text-zinc-500 text-2xl font-light italic leading-relaxed">Votre commande impériale est en cours de préparation. Un concierge vous contactera sous peu.</p>
        </div>
        <Link href="/">
          <Button size="lg" className="px-16 h-20 rounded-full bg-primary text-black font-bold uppercase tracking-widest">Retour au Palais</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="space-y-8 soft-reveal">
          <Link href="/cart" className="flex items-center gap-4 text-zinc-600 hover:text-primary transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Retour au panier</span>
          </Link>
          <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">Paiement <br/> Sécurisé.</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 space-y-16">
            <section className="space-y-10">
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tight border-b border-white/5 pb-6">Mode de Règlement</h2>
              <RadioGroup defaultValue="card" onValueChange={setMethod} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Label htmlFor="card" className={`flex items-center justify-between p-10 rounded-[2.5rem] border cursor-pointer transition-all ${method === 'card' ? 'border-primary bg-primary/5' : 'border-white/5 bg-zinc-900/20 hover:border-white/20'}`}>
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-zinc-800 text-primary"><CreditCard size={24} /></div>
                    <div>
                      <p className="font-bold text-xl uppercase tracking-tight">Cartes Bancaires</p>
                      <p className="text-xs text-zinc-500 font-light italic">Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                  <RadioGroupItem value="card" id="card" className="sr-only" />
                </Label>
                <Label htmlFor="momo" className={`flex items-center justify-between p-10 rounded-[2.5rem] border cursor-pointer transition-all ${method === 'momo' ? 'border-primary bg-primary/5' : 'border-white/5 bg-zinc-900/20 hover:border-white/20'}`}>
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-zinc-800 text-primary"><Smartphone size={24} /></div>
                    <div>
                      <p className="font-bold text-xl uppercase tracking-tight">Mobile Money</p>
                      <p className="text-xs text-zinc-500 font-light italic">MTN, Orange, Moov</p>
                    </div>
                  </div>
                  <RadioGroupItem value="momo" id="momo" className="sr-only" />
                </Label>
              </RadioGroup>
            </section>

            <section className="p-12 bg-zinc-900/40 rounded-[3rem] border border-white/5 space-y-10">
              {method === 'card' ? (
                <div className="grid gap-10">
                  <div className="grid gap-4">
                    <Label className="text-zinc-600 text-xs uppercase tracking-widest font-bold ml-2">Numéro de Carte</Label>
                    <Input className="h-20 rounded-3xl bg-white/5 border-white/10 text-xl px-8" placeholder="**** **** **** 4421" />
                  </div>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="grid gap-4">
                      <Label className="text-zinc-600 text-xs uppercase tracking-widest font-bold ml-2">Expiration</Label>
                      <Input className="h-20 rounded-3xl bg-white/5 border-white/10 text-xl px-8" placeholder="MM/YY" />
                    </div>
                    <div className="grid gap-4">
                      <Label className="text-zinc-600 text-xs uppercase tracking-widest font-bold ml-2">CVC</Label>
                      <Input className="h-20 rounded-3xl bg-white/5 border-white/10 text-xl px-8" placeholder="***" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-10">
                   <div className="grid gap-4">
                    <Label className="text-zinc-600 text-xs uppercase tracking-widest font-bold ml-2">Numéro de téléphone</Label>
                    <Input className="h-20 rounded-3xl bg-white/5 border-white/10 text-xl px-8" placeholder="+229 ** ** ** **" />
                  </div>
                  <p className="text-zinc-500 font-light italic text-center">Vous recevrez une notification sur votre mobile pour valider la transaction.</p>
                </div>
              )}
            </section>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="p-12 bg-primary/5 rounded-[3.5rem] border border-primary/20 space-y-10 shadow-3xl text-center">
               <ShieldCheck size={64} className="text-primary mx-auto animate-pulse" />
               <div className="space-y-4">
                 <h3 className="text-3xl font-serif font-bold uppercase">Garantie Élite</h3>
                 <p className="text-zinc-500 font-light italic leading-relaxed">Toutes vos transactions sont protégées par un cryptage militaire 256-bit et supervisées par notre conciergerie financière.</p>
               </div>
               <Button onClick={() => setConfirmed(true)} className="w-full h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] text-xl shadow-2xl hover:bg-white transition-all">
                 Confirmer le Paiement
               </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
