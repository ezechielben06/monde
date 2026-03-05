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
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">
      {/* Cinematic Background Orbs */}
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse delay-1000" />

      <Card className="w-full max-w-lg border border-primary/20 shadow-[0_0_80px_rgba(255,215,0,0.1)] rounded-[3rem] bg-zinc-900/60 backdrop-blur-3xl z-10 animate-in fade-in zoom-in duration-1000 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <CardHeader className="space-y-6 text-center pt-14 px-12">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-black shadow-[0_15px_40px_rgba(255,215,0,0.3)] rotate-12 hover:rotate-0 transition-transform duration-500">
              <Crown size={40} />
            </div>
          </div>
          <div className="space-y-3">
            <CardTitle className="text-4xl md:text-5xl font-headline font-bold tracking-tighter luxury-gold-gradient uppercase">
              {isLogin ? 'Accès Privé' : 'Cercle B-right'}
            </CardTitle>
            <CardDescription className="text-lg text-zinc-500 font-medium">
              {isLogin 
                ? 'Veuillez présenter vos identifiants de prestige.' 
                : 'Intégrez la nouvelle élite du bien-être global.'}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 px-12 pb-10">
          <form onSubmit={handleAuth} className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-zinc-500 text-xs uppercase tracking-widest font-bold ml-1">Email Membre</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vip@b-right.com" 
                className="rounded-2xl border-white/5 bg-white/5 h-16 px-6 focus:border-primary/40 focus:ring-0 transition-all text-lg placeholder:text-zinc-700" 
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center justify-between ml-1">
                <Label htmlFor="password" className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Clé d'Accès</Label>
                {isLogin && (
                  <Button variant="link" className="px-0 font-bold text-primary text-[10px] uppercase tracking-tighter">Oubliée ?</Button>
                )}
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-2xl border-white/5 bg-white/5 h-16 px-6 focus:border-primary/40 focus:ring-0 transition-all text-lg" 
                required
              />
            </div>
            
            <Button type="submit" className="w-full h-16 rounded-full bg-primary hover:bg-white text-black text-lg font-bold shadow-[0_10px_30px_rgba(255,215,0,0.2)] transition-all active:scale-[0.98] mt-4 uppercase tracking-[0.2em]">
              {isLogin ? 'Entrer au Club' : 'Créer mon Profil'} <ArrowRight className="ml-3" size={20} />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-bold">
              <span className="bg-zinc-900 px-4 text-zinc-600">Authentification Sécurisée</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-2xl h-14 border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
              <Github className="mr-3 text-primary" size={18} /> GitHub
            </Button>
            <Button variant="outline" className="rounded-2xl h-14 border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
              <Mail className="mr-3 text-primary" size={18} /> Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="pb-14 pt-4 px-12 justify-center border-t border-white/5">
          <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase">
            {isLogin ? 'Pas encore membre ?' : 'Déjà au cercle ?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary hover:underline transition-all"
            >
              {isLogin ? 'Demander une invitation' : 'S\'identifier'}
            </button>
          </p>
        </CardFooter>
      </Card>

      <div className="absolute bottom-10 flex items-center gap-3 text-zinc-800 animate-pulse">
        <ShieldCheck size={16} />
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Protocole de sécurité B-right Élite</span>
      </div>
    </div>
  );
}
