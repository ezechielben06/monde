"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Utensils, Dumbbell, Brain, MessageSquare } from 'lucide-react';
import { aiWellnessRecommenderTool, type AiWellnessRecommenderToolOutput } from '@/ai/flows/ai-wellness-recommender-tool';

export function AIRecommender() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AiWellnessRecommenderToolOutput | null>(null);

  const getRecommendations = async () => {
    setLoading(true);
    try {
      const result = await aiWellnessRecommenderTool({
        userPreferences: "Aime le yoga, régime végétarien, préfère les sessions du matin.",
        userGoals: "Perdre 2kg, améliorer la flexibilité, réduire le stress au travail.",
        recentProgress: "A complété 3 séances de yoga cette semaine. A bien mangé mais a eu du mal avec le sommeil."
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
      case 'activity': return <Dumbbell className="text-blue-500" size={18} />;
      case 'recipe': return <Utensils className="text-green-500" size={18} />;
      case 'mindfulness_exercise': return <Brain className="text-purple-500" size={18} />;
      case 'coaching_insight': return <MessageSquare className="text-amber-500" size={18} />;
      default: return <Sparkles className="text-primary" size={18} />;
    }
  };

  return (
    <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-headline flex items-center gap-2">
            <Sparkles className="text-accent animate-pulse" size={20} />
            Conseils AI du Jour
          </CardTitle>
          <CardDescription>Recommandations personnalisées pour votre transformation</CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={getRecommendations} 
          disabled={loading}
          className="rounded-full"
        >
          {loading ? <Loader2 className="animate-spin" size={16} /> : "Actualiser"}
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="animate-spin text-primary" size={40} />
            <p className="text-muted-foreground animate-pulse">Analyse de vos progrès en cours...</p>
          </div>
        ) : data ? (
          <div className="space-y-4">
            {data.recommendations.map((rec, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100/50">
                <div className="mt-1">
                  {getIcon(rec.type)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">{rec.title}</h4>
                    <Badge variant="secondary" className="text-[10px] capitalize">
                      {rec.type.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {rec.description}
                  </p>
                  {rec.details && (
                    <p className="text-[11px] text-primary/80 bg-primary/5 p-2 rounded-md mt-2 italic">
                      {rec.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {data.overallInsight && (
              <div className="mt-4 p-4 bg-accent/5 border border-accent/10 rounded-xl">
                <p className="text-sm font-medium text-accent italic">
                  "{data.overallInsight}"
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Appuyez sur actualiser pour voir vos conseils.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
