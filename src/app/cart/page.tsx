
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CART_ITEMS = [
  { id: 1, title: 'Robe de Soirée Émeraude', price: 450000, qty: 1, img: 'https://picsum.photos/seed/cart1/400/400' },
  { id: 2, title: 'Poke Bowl Prestige', price: 18500, qty: 2, img: 'https://picsum.photos/seed/cart2/400/400' },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 5000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="space-y-12 soft-reveal">
          <Badge variant="outline" className="border-primary/40 text-primary px-10 py-3 uppercase text-[10px] tracking-[0.6em] font-bold rounded-full">Votre Inventaire Impérial</Badge>
          <div className="space-y-6">
            <h1 className="text-7xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">Panier de <br/> Prestige.</h1>
            <p className="text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed">Vérifiez vos sélections avant la confirmation de votre transformation impériale.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-10">
            {CART_ITEMS.length > 0 ? (
              CART_ITEMS.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center gap-16 p-12 bg-zinc-900/20 rounded-[3.5rem] border border-white/5 hover:border-primary/20 transition-all duration-700 group shadow-2xl">
                  <div className="relative w-48 h-48 rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                      <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Référence Élite</p>
                      <h3 className="text-4xl font-serif font-bold tracking-tight uppercase leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-primary text-2xl font-bold luxury-gold-gradient">{item.price.toLocaleString()} FCFA</p>
                  </div>
                  <div className="flex items-center gap-10 bg-black/40 px-10 py-6 rounded-full border border-white/5">
                    <button className="text-zinc-600 hover:text-white transition-colors active:scale-90"><Minus size={22} /></button>
                    <span className="font-bold text-2xl min-w-[2ch] text-center font-headline">{item.qty}</span>
                    <button className="text-zinc-600 hover:text-white transition-colors active:scale-90"><Plus size={22} /></button>
                  </div>
                  <button className="text-zinc-700 hover:text-red-500 transition-colors p-6 bg-white/5 rounded-full hover:bg-white/10 transition-all">
                    <Trash2 size={28} />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-40 space-y-8 bg-zinc-900/20 rounded-[4rem] border border-white/5 text-center">
                 <ShoppingCart size={80} className="text-zinc-800" />
                 <h2 className="text-4xl font-serif font-bold uppercase">Votre panier est vide</h2>
                 <Link href="/services">
                   <Button className="rounded-full bg-primary text-black px-16 h-20 font-bold uppercase tracking-widest border-none">Explorer les Univers</Button>
                 </Link>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="p-16 bg-zinc-900/60 rounded-[4rem] border border-white/10 space-y-16 shadow-3xl sticky top-40 backdrop-blur-3xl">
              <div className="space-y-4">
                <h2 className="text-5xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight">Résumé</h2>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Protocoles de facturation active</p>
              </div>
              
              <div className="space-y-10">
                <div className="flex justify-between text-xl">
                  <span className="text-zinc-500 font-light italic">Sous-total</span>
                  <span className="font-bold">{subtotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-xl">
                  <span className="text-zinc-500 font-light italic">Logistique Privée</span>
                  <span className="font-bold">{shipping.toLocaleString()} FCFA</span>
                </div>
                <Separator className="bg-white/5" />
                <div className="flex justify-between text-4xl">
                  <span className="font-serif font-bold luxury-gold-gradient uppercase leading-none">Total</span>
                  <span className="font-bold text-white font-headline leading-none">{total.toLocaleString()} FCFA</span>
                </div>
              </div>

              <div className="space-y-6">
                <Link href="/checkout">
                  <Button className="w-full h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] text-xl shadow-2xl hover:bg-white transition-all border-none">
                    Confirmer la Commande <ArrowRight className="ml-4" />
                  </Button>
                </Link>
                <p className="text-center text-[9px] text-zinc-600 font-bold uppercase tracking-[0.5em] pt-4">TVA incluse selon le pays de résidence</p>
              </div>

              <div className="flex flex-col items-center gap-6 pt-10 border-t border-white/5">
                 <div className="flex gap-8 text-zinc-600 opacity-40">
                    <CreditCard size={24} />
                    <ShieldCheck size={24} />
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 text-center">Sécurité B-right Élite • Cryptage 256-bit</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-24 text-center border-t border-white/5 opacity-40">
        <Gem className="text-primary mx-auto mb-8 animate-pulse" size={32} />
        <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-zinc-600">© 2024 Monde de Transformation • Expérience de Conciergerie Digitale</p>
      </footer>
    </div>
  );
}
