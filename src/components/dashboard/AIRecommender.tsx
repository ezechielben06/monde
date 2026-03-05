"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Utensils, Dumbbell, Brain, MessageSquare, Crown, AlertCircle } from 'lucide-react';
import { aiWellnessRecommenderTool, type AiWellnessRecommenderToolOutput } from '@/ai/flows/ai-wellness-recommender-tool';

export function AIRecommender() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AiWellnessRecommenderToolOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getRecommendations = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await aiWellnessRecommenderTool({
        userPreferences: "Aime le yoga de luxe, régime gastronomique végétarien, préfère les sessions privées du matin.",
        userGoals: "Maintenir son prestige physique, flexibilité mentale, sérénité au sommet.",
        recentProgress: "A complété ses rituels Élite. Performance exceptionnelle en méditation."
      });
      setData(result);
    } catch (err: any) {
      if (err.message?.includes('429') || err.message?.includes('quota')) {
        setError("L'assistant est actuellement très sollicité par le Cercle. Veuillez réessayer dans quelques instants.");
      } else {
        setError("Une erreur de connexion au protocole Élite est survenue.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'activity': return <Dumbbell className="text-primary" size={18} />;
      case 'recipe': return <Utensils className="text-primary" size={18} />;
      case 'mindfulness_exercise': return <Brain className="text-primary" size={18} />;
      case 'coaching_insight': return <MessageSquare className="text-primary" size={18} />;
      default: return <Crown className="text-primary" size={18} />;
    }
  };

  return (
    <Card className="border border-white/5 bg-zinc-900/40 rounded-3xl overflow-hidden shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between p-8 md:p-12 pb-6 border-b border-white/5">
        <div className="space-y-2">
          <CardTitle className="text-2xl font-headline flex items-center gap-3 uppercase tracking-tight">
            <Sparkles className="text-primary" size={20} />
            Assistant Élite
          </CardTitle>
          <CardDescription className="text-zinc-500 italic font-light">Rituels personnalisés par IA B-right</CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={getRecommendations} 
          disabled={loading}
          className="rounded-full border-primary/20 text-primary hover:bg-primary/10 px-6 uppercase font-bold text-[10px] tracking-widest h-auto py-2"
        >
          {loading ? <Loader2 className="animate-spin" size={14} /> : "Actualiser"}
        </Button>
      </CardHeader>
      <CardContent className="p-8 md:p-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-6">
            <Loader2 className="animate-spin text-primary" size={40} />
            <p className="text-zinc-600 font-bold uppercase tracking-[0.3em] text-[10px]">Analyse de votre Excellence...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
            <AlertCircle className="text-zinc-700" size={32} />
            <p className="text-zinc-500 text-sm max-w-xs font-light italic">{error}</p>
            <Button variant="link" onClick={getRecommendations} className="text-primary uppercase text-[10px] font-bold tracking-widest">Réessayer</Button>
          </div>
        ) : data ? (
          <div className="space-y-6">
            {data.recommendations.map((rec, i) => (
              <div key={i} className="flex gap-6 p-6 bg-zinc-800/20 rounded-2xl border border-white/5 hover:border-primary/10 transition-all group">
                <div className="mt-1 p-3 bg-zinc-900 rounded-xl group-hover:scale-105 transition-transform shrink-0 h-fit">
                  {getIcon(rec.type)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="font-bold text-base uppercase tracking-tight">{rec.title}</h4>
                    <Badge variant="outline" className="text-[8px] uppercase border-primary/20 text-primary font-bold px-2 py-0">
                      {rec.type.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light italic">
                    {rec.description}
                  </p>
                  {rec.details && (
                    <div className="text-[11px] text-zinc-400 bg-black/40 p-4 rounded-xl mt-4 border-l-2 border-primary/40">
                      <span className="font-bold text-primary/80 uppercase block mb-1 tracking-wider">Protocole :</span>
                      {rec.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {data.overallInsight && (
              <div className="mt-10 p-8 bg-primary/5 border border-primary/10 rounded-2xl text-center">
                <p className="text-base font-serif text-primary/90 italic leading-relaxed">
                  "{data.overallInsight}"
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-700 font-bold uppercase text-[10px] tracking-widest">Initialisez votre assistant de prestige.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
