'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard, ShieldCheck, Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CART_ITEMS = [
  { id: 1, title: 'Robe de Soirée Émeraude', price: 450000, qty: 1, img: 'https://picsum.photos/seed/cart1-vip/400/400' },
  { id: 2, title: 'Poke Bowl Prestige', price: 18500, qty: 2, img: 'https://picsum.photos/seed/cart2-vip/400/400' },
  { id: 3, title: 'Montre Chrono v2', price: 1200000, qty: 1, img: 'https://picsum.photos/seed/cart3-vip/400/400' },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const logistics = 15000; // Logistique privée
  const total = subtotal + logistics;

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-16 space-y-16 md:space-y-24">
        <header className="space-y-8 md:space-y-12 soft-reveal text-center md:text-left">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 md:px-10 py-2 md:py-3 uppercase text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] font-bold rounded-full">Inventaire Impérial</Badge>
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-[0.9] md:leading-[0.8] font-bold uppercase">Panier de <br className="hidden md:block"/> Prestige.</h1>
            <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">Validez vos sélections pour déclencher les protocoles de transformation.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            {CART_ITEMS.length > 0 ? (
              CART_ITEMS.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-12 bg-zinc-900/20 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-3xl group">
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em]">Référence Certifiée</p>
                      <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight uppercase leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-primary text-xl md:text-3xl font-bold luxury-gold-gradient">{item.price.toLocaleString()} FCFA</p>
                  </div>
                  <div className="flex items-center gap-6 md:gap-10 bg-black/60 px-6 md:px-10 py-4 md:py-6 rounded-full border border-white/5 shadow-inner">
                    <button className="text-zinc-600 hover:text-white transition-colors active:scale-75"><Minus size={22} /></button>
                    <span className="font-bold text-xl md:text-3xl min-w-[2ch] text-center font-headline">{item.qty}</span>
                    <button className="text-zinc-600 hover:text-white transition-colors active:scale-75"><Plus size={22} /></button>
                  </div>
                  <button className="text-zinc-800 hover:text-red-500 transition-colors p-6 md:p-8 bg-white/5 rounded-full hover:bg-white/10 active:scale-90 transition-all">
                    <Trash2 size={28} />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-24 md:py-40 space-y-8 md:space-y-10 bg-zinc-900/20 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 text-center px-6">
                 <ShoppingCart className="w-20 h-20 md:w-28 md:h-28 text-zinc-900" />
                 <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase">Votre inventaire est vide</h2>
                 <Link href="/services">
                   <Button className="rounded-full bg-primary text-black px-12 md:px-20 h-16 md:h-24 font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-lg md:text-xl border-none shadow-3xl">Explorer les Univers</Button>
                 </Link>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="p-10 md:p-16 bg-zinc-900/60 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 space-y-12 md:space-y-16 shadow-3xl lg:sticky lg:top-40 backdrop-blur-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 scale-[2]">
                <Gem className="w-20 h-20 md:w-24 md:h-24" />
              </div>
              <div className="space-y-3 md:space-y-4 relative z-10 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight">Récapitulatif</h2>
                <p className="text-[8px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-[0.4em] md:tracking-[0.6em]">Protocoles de facturation active</p>
              </div>
              
              <div className="space-y-8 md:space-y-12 relative z-10">
                <div className="flex justify-between text-lg md:text-2xl">
                  <span className="text-zinc-500 font-light italic">Sous-total</span>
                  <span className="font-bold">{subtotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-lg md:text-2xl">
                  <span className="text-zinc-500 font-light italic">Logistique Gants Blancs</span>
                  <span className="font-bold">{logistics.toLocaleString()} FCFA</span>
                </div>
                <Separator className="bg-white/5" />
                <div className="flex justify-between text-3xl md:text-5xl">
                  <span className="font-serif font-bold luxury-gold-gradient uppercase leading-none">Total</span>
                  <span className="font-bold text-white font-headline leading-none">{total.toLocaleString()} FCFA</span>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8 relative z-10">
                <Link href="/checkout">
                  <Button className="w-full h-16 md:h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-lg md:text-xl shadow-2xl hover:bg-white transition-all border-none">
                    Passer à l'Acquisition <ArrowRight className="ml-4 md:ml-6" />
                  </Button>
                </Link>
                <div className="flex flex-col items-center gap-4 md:gap-6 pt-6 md:pt-10 border-t border-white/5">
                   <div className="flex gap-6 md:gap-10 text-zinc-600">
                      <CreditCard size={28} />
                      <ShieldCheck size={28} />
                   </div>
                   <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-700 text-center">Sécurité B-right Élite • Cryptage 256-bit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
