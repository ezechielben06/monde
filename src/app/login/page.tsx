'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Crown, ArrowRight, Github, Mail, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('hello@b-right.com');
  const [password, setPassword] = useState('password123');
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden px-6">
      {/* Immersive Luxury Orbs */}
      <div className="absolute top-0 -left-60 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute bottom-0 -right-60 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] animate-pulse delay-1000" />

      <Card className="w-full max-w-2xl border border-primary/20 shadow-[0_0_100px_rgba(212,175,55,0.15)] rounded-[4rem] bg-zinc-900/40 backdrop-blur-3xl z-10 animate-in fade-in zoom-in duration-1000 overflow-hidden p-8 md:p-12">
        <div className="h-2.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 mb-12" />
        
        <CardHeader className="space-y-10 text-center pb-12">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center text-black shadow-[0_20px_50px_rgba(212,175,55,0.4)] rotate-12 hover:rotate-0 transition-all duration-[1200ms] cursor-pointer">
              <Crown size={48} />
            </div>
          </div>
          <div className="space-y-4">
            <CardTitle className="text-5xl md:text-7xl font-headline font-bold tracking-tighter luxury-gold-gradient uppercase">
              {isLogin ? 'Accès Privé' : 'Cercle B-right'}
            </CardTitle>
            <CardDescription className="text-xl text-zinc-500 font-medium tracking-wide">
              {isLogin 
                ? 'Veuillez présenter vos identifiants de prestige.' 
                : 'Intégrez la nouvelle élite du bien-être global.'}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-12">
          <form onSubmit={handleAuth} className="grid gap-10">
            <div className="grid gap-4">
              <Label htmlFor="email" className="text-zinc-600 text-xs uppercase tracking-[0.4em] font-bold ml-2">Email Membre</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vip@b-right.com" 
                className="rounded-[2rem] border-white/5 bg-white/5 h-20 px-8 focus:border-primary/40 focus:ring-0 transition-all text-xl placeholder:text-zinc-800" 
                required
              />
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between ml-2">
                <Label htmlFor="password" className="text-zinc-600 text-xs uppercase tracking-[0.4em] font-bold">Clé d'Accès</Label>
                {isLogin && (
                  <Button variant="link" className="px-0 font-bold text-primary text-[11px] uppercase tracking-[0.3em]">Oubliée ?</Button>
                )}
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-[2rem] border-white/5 bg-white/5 h-20 px-8 focus:border-primary/40 focus:ring-0 transition-all text-xl" 
                required
              />
            </div>
            
            <Button type="submit" className="w-full h-20 rounded-full bg-primary hover:bg-white text-black text-xl font-bold shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all active:scale-[0.97] mt-6 uppercase tracking-[0.3em]">
              {isLogin ? 'Entrer au Club' : 'Créer mon Profil'} <ArrowRight className="ml-5" size={24} />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-[12px] uppercase tracking-[0.5em] font-bold">
              <span className="bg-[#121212] px-6 text-zinc-700">Sécurité Diamond</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Button variant="outline" className="rounded-[2rem] h-16 border-white/5 bg-white/5 hover:bg-white/10 text-zinc-500 font-bold uppercase text-[11px] tracking-[0.4em]">
              <Github className="mr-4 text-primary" size={20} /> GitHub
            </Button>
            <Button variant="outline" className="rounded-[2rem] h-16 border-white/5 bg-white/5 hover:bg-white/10 text-zinc-500 font-bold uppercase text-[11px] tracking-[0.4em]">
              <Mail className="mr-4 text-primary" size={20} /> Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="pb-16 pt-8 justify-center border-t border-white/5">
          <p className="text-sm text-zinc-600 font-bold tracking-[0.4em] uppercase">
            {isLogin ? 'Pas encore membre ?' : 'Déjà au cercle ?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-4 text-primary hover:underline transition-all"
            >
              {isLogin ? 'Demander une invitation' : 'S\'identifier'}
            </button>
          </p>
        </CardFooter>
      </Card>

      <div className="absolute bottom-16 flex items-center gap-6 text-zinc-900 animate-pulse">
        <ShieldCheck size={20} />
        <span className="text-[11px] uppercase tracking-[0.6em] font-bold">Protocole de sécurité B-right Élite</span>
      </div>
    </div>
  );
}