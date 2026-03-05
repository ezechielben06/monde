"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Utensils, Dumbbell, Brain, MessageSquare, Crown } from 'lucide-react';
import { aiWellnessRecommenderTool, type AiWellnessRecommenderToolOutput } from '@/ai/flows/ai-wellness-recommender-tool';

export function AIRecommender() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AiWellnessRecommenderToolOutput | null>(null);

  const getRecommendations = async () => {
    setLoading(true);
    try {
      const result = await aiWellnessRecommenderTool({
        userPreferences: "Aime le yoga de luxe, régime gastronomique végétarien, préfère les sessions privées du matin.",
        userGoals: "Maintenir son prestige physique, flexibilité mentale, sérénité au sommet.",
        recentProgress: "A complété ses rituels Élite. Performance exceptionnelle en méditation."
      });
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'activity': return <Dumbbell className="text-primary" size={20} />;
      case 'recipe': return <Utensils className="text-primary" size={20} />;
      case 'mindfulness_exercise': return <Brain className="text-primary" size={20} />;
      case 'coaching_insight': return <MessageSquare className="text-primary" size={20} />;
      default: return <Crown className="text-primary" size={20} />;
    }
  };

  return (
    <Card className="border border-primary/20 bg-zinc-900/50 rounded-[2.5rem] overflow-hidden shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-6 border-b border-white/5 p-10">
        <div className="space-y-1">
          <CardTitle className="text-3xl font-headline flex items-center gap-3 uppercase">
            <Sparkles className="text-primary animate-pulse" size={24} />
            Assistant Élite
          </CardTitle>
          <CardDescription className="text-zinc-500 italic">Rituels exclusifs générés par l'IA B-right</CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={getRecommendations} 
          disabled={loading}
          className="rounded-full border-primary/20 text-primary hover:bg-primary/10 px-6 uppercase font-bold text-[10px] tracking-widest"
        >
          {loading ? <Loader2 className="animate-spin" size={16} /> : "Actualiser"}
        </Button>
      </CardHeader>
      <CardContent className="p-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-6">
            <Loader2 className="animate-spin text-primary" size={48} />
            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">Calcul de votre Excellence...</p>
          </div>
        ) : data ? (
          <div className="space-y-6">
            {data.recommendations.map((rec, i) => (
              <div key={i} className="flex gap-6 p-6 bg-zinc-800/30 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
                <div className="mt-1 p-3 bg-zinc-900 rounded-2xl group-hover:scale-110 transition-transform">
                  {getIcon(rec.type)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-lg uppercase tracking-tight">{rec.title}</h4>
                    <Badge variant="secondary" className="text-[9px] uppercase bg-primary/10 text-primary border-none font-bold px-3">
                      {rec.type.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium italic">
                    {rec.description}
                  </p>
                  {rec.details && (
                    <div className="text-[11px] text-zinc-400 bg-black/40 p-4 rounded-xl mt-4 border-l-2 border-primary">
                      <span className="font-bold text-primary uppercase block mb-1">Protocole :</span>
                      {rec.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {data.overallInsight && (
              <div className="mt-8 p-8 bg-primary/5 border border-primary/10 rounded-[2rem] text-center">
                <p className="text-lg font-headline text-primary italic leading-relaxed">
                  "{data.overallInsight}"
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-600 font-bold uppercase text-xs tracking-widest">Initialisez votre assistant de prestige.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
