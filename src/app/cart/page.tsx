
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CART_ITEMS = [
  { id: 1, title: 'Robe de Soirée Émeraude', price: 450000, qty: 1, img: 'https://picsum.photos/seed/cart1/200/200' },
  { id: 2, title: 'Poke Bowl Prestige', price: 18500, qty: 2, img: 'https://picsum.photos/seed/cart2/200/200' },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 5000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pb-32 md:pb-0 md:pt-28 bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 space-y-24">
        <header className="space-y-8 soft-reveal">
          <h1 className="text-7xl md:text-9xl font-serif luxury-gold-gradient tracking-tighter leading-[0.8] font-bold uppercase">Votre Panier <br/> de Prestige.</h1>
          <p className="text-2xl text-zinc-500 font-light italic">Vérifiez vos sélections avant la confirmation impériale.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-8">
            {CART_ITEMS.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-12 p-10 bg-zinc-900/20 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all group">
                <div className="relative w-40 h-40 rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-3xl font-bold tracking-tight uppercase">{item.title}</h3>
                  <p className="text-primary text-xl font-bold">{item.price.toLocaleString()} FCFA</p>
                </div>
                <div className="flex items-center gap-8 bg-black/40 px-8 py-4 rounded-full border border-white/5">
                  <button className="text-zinc-600 hover:text-white transition-colors"><Minus size={18} /></button>
                  <span className="font-bold text-xl min-w-[2ch] text-center">{item.qty}</span>
                  <button className="text-zinc-600 hover:text-white transition-colors"><Plus size={18} /></button>
                </div>
                <button className="text-zinc-700 hover:text-red-500 transition-colors p-4">
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="p-12 bg-zinc-900/60 rounded-[3.5rem] border border-white/10 space-y-12 shadow-3xl sticky top-40">
              <h2 className="text-4xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight">Récapitulatif</h2>
              <div className="space-y-6">
                <div className="flex justify-between text-lg">
                  <span className="text-zinc-500 font-light italic">Sous-total</span>
                  <span className="font-bold">{subtotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-zinc-500 font-light italic">Logistique Privée</span>
                  <span className="font-bold">{shipping.toLocaleString()} FCFA</span>
                </div>
                <Separator className="bg-white/5" />
                <div className="flex justify-between text-3xl">
                  <span className="font-serif font-bold luxury-gold-gradient uppercase">Total</span>
                  <span className="font-bold text-white">{total.toLocaleString()} FCFA</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full h-24 rounded-full bg-primary text-black font-bold uppercase tracking-[0.4em] text-xl shadow-2xl hover:bg-white transition-all mt-8">
                  Passer au Paiement <ArrowRight className="ml-4" />
                </Button>
              </Link>
              <div className="flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600 pt-8 opacity-40">
                 <CreditCard size={16} /> Sécurité B-right Élite Active
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
