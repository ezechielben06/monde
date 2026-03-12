'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard, ShieldCheck, Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const INITIAL_ITEMS = [
  { id: 1, title: 'Robe de Soirée Émeraude', price: 450000, qty: 1, img: 'https://picsum.photos/seed/cart1-vip/400/400' },
  { id: 2, title: 'Poke Bowl Prestige', price: 18500, qty: 2, img: 'https://picsum.photos/seed/cart2-vip/400/400' },
  { id: 3, title: 'Montre Chrono v2', price: 1200000, qty: 1, img: 'https://picsum.photos/seed/cart3-vip/400/400' },
];

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const logistics = items.length > 0 ? 15000 : 0; 
  const total = subtotal + logistics;

  const formatPrice = (val: number) => {
    if (!mounted) return "...";
    return val.toLocaleString('fr-FR').replace(/\s/g, ' ');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20 space-y-16 md:space-y-32">
        <header className="space-y-8 soft-reveal text-center md:text-left">
          <Badge variant="outline" className="border-primary/40 text-primary px-8 md:px-12 py-3 uppercase text-[10px] tracking-[0.5em] font-bold rounded-full">Inventaire Impérial</Badge>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-[10rem] font-serif luxury-gold-gradient tracking-tighter leading-none font-bold uppercase">Panier de <br className="hidden md:block"/> Prestige.</h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-4xl italic leading-relaxed mx-auto md:mx-0">Validez vos sélections pour déclencher les protocoles de transformation.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-8 space-y-8">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 md:gap-16 p-8 md:p-12 bg-card/40 rounded-[3rem] md:rounded-[4rem] border border-border hover:border-primary/30 transition-all duration-700 shadow-xl group">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shrink-0">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="flex-1 space-y-6 md:space-y-10 text-center sm:text-left">
                    <div className="space-y-2">
                      <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Référence Certifiée</p>
                      <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight uppercase leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-primary text-2xl md:text-4xl font-bold luxury-gold-gradient">{formatPrice(item.price)} FCFA</p>
                  </div>
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-8 bg-muted px-8 py-4 rounded-full border border-border">
                      <button onClick={() => updateQty(item.id, -1)} className="text-muted-foreground hover:text-foreground transition-colors active:scale-75"><Minus size={20} /></button>
                      <span className="font-bold text-2xl md:text-4xl min-w-[2ch] text-center font-headline">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="text-muted-foreground hover:text-foreground transition-colors active:scale-75"><Plus size={20} /></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors p-4 hover:bg-destructive/10 rounded-full active:scale-90 transition-all">
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-32 space-y-10 bg-card/40 rounded-[4rem] border border-border text-center px-8">
                 <ShoppingCart className="w-32 h-32 text-muted" />
                 <h2 className="text-3xl md:text-6xl font-serif font-bold uppercase">Votre inventaire est vide</h2>
                 <Link href="/services">
                   <Button className="rounded-full bg-primary text-primary-foreground px-16 h-20 font-bold uppercase tracking-widest text-lg shadow-3xl">Explorer les Univers</Button>
                 </Link>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="p-12 md:p-16 bg-card/60 backdrop-blur-3xl rounded-[4rem] md:rounded-[5rem] border border-border space-y-12 md:space-y-20 shadow-3xl lg:sticky lg:top-32 overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 scale-[2.5]">
                <Gem size={100} />
              </div>
              <div className="space-y-4 relative z-10 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-serif font-bold luxury-gold-gradient uppercase tracking-tight">Récapitulatif</h2>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Facturation active • B-Right Élite</p>
              </div>
              
              <div className="space-y-8 md:space-y-12 relative z-10">
                <div className="flex justify-between text-xl md:text-2xl">
                  <span className="text-muted-foreground font-light italic">Sous-total</span>
                  <span className="font-bold">{formatPrice(subtotal)} FCFA</span>
                </div>
                <div className="flex justify-between text-xl md:text-2xl">
                  <span className="text-muted-foreground font-light italic">Logistique Gants Blancs</span>
                  <span className="font-bold">{formatPrice(logistics)} FCFA</span>
                </div>
                <Separator className="bg-border" />
                <div className="flex justify-between items-baseline gap-6">
                  <span className="font-serif font-bold luxury-gold-gradient uppercase text-4xl md:text-6xl">Total</span>
                  <span className="font-bold text-foreground font-headline text-4xl md:text-6xl">{formatPrice(total)} FCFA</span>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <Link href="/checkout">
                  <Button className="w-full h-24 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xl shadow-3xl hover:scale-[1.03] transition-all border-none active:scale-95 h-auto py-6">
                    Passer à l'Acquisition <ArrowRight size={28} className="ml-6" />
                  </Button>
                </Link>
                <div className="flex flex-col items-center gap-6 pt-10 border-t border-border">
                   <div className="flex gap-10 text-muted-foreground opacity-60">
                      <CreditCard size={32} />
                      <ShieldCheck size={32} />
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center leading-relaxed">Paiement 100% Sécurisé • Conciergerie B-right</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}