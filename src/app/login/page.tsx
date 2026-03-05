
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Sparkles, ArrowRight, Github, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('hello@b-right.com');
  const [password, setPassword] = useState('password123');
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion : on redirige simplement vers l'accueil
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-4">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      <Card className="w-full max-w-md border-none shadow-2xl rounded-[2.5rem] bg-white/80 backdrop-blur-xl z-10 animate-in fade-in zoom-in duration-500">
        <CardHeader className="space-y-4 text-center pt-10">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
              <Sparkles size={32} />
            </div>
          </div>
          <div className="space-y-2">
            <CardTitle className="text-4xl font-headline font-bold tracking-tight text-slate-900">
              {isLogin ? 'Bon retour !' : 'Rejoignez B-right'}
            </CardTitle>
            <CardDescription className="text-lg">
              {isLogin 
                ? 'Accédez à votre espace transformation.' 
                : 'Commencez votre voyage vers un meilleur vous.'}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 px-8">
          <form onSubmit={handleAuth} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com" 
                className="rounded-xl border-slate-200 h-12" 
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                {isLogin && (
                  <Button variant="link" className="px-0 font-semibold text-primary text-xs">Oublié ?</Button>
                )}
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border-slate-200 h-12" 
                required
              />
            </div>
            {!isLogin && (
               <div className="grid gap-2">
                <Label htmlFor="confirm">Confirmer le mot de passe</Label>
                <Input id="confirm" type="password" className="rounded-xl border-slate-200 h-12" required />
              </div>
            )}
            
            <Button type="submit" className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-4">
              {isLogin ? 'Se connecter' : 'Créer un compte'} <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground font-bold">Ou continuer avec</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-xl h-12 border-slate-200 hover:bg-slate-50">
              <Github className="mr-2" size={18} /> GitHub
            </Button>
            <Button variant="outline" className="rounded-xl h-12 border-slate-200 hover:bg-slate-50">
              <Mail className="mr-2" size={18} /> Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="pb-10 pt-4 px-8 justify-center">
          <p className="text-sm text-muted-foreground font-medium">
            {isLogin ? 'Pas encore de compte ?' : 'Déjà membre ?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-primary font-bold hover:underline"
            >
              {isLogin ? 'S\'inscrire gratuitement' : 'Se connecter'}
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
