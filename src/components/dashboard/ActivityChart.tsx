"use client";

import { useState, useEffect } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const chartData = [
  { day: 'Lun', active: 45, rest: 20 },
  { day: 'Mar', active: 52, rest: 15 },
  { day: 'Mer', active: 38, rest: 25 },
  { day: 'Jeu', active: 65, rest: 10 },
  { day: 'Ven', active: 48, rest: 20 },
  { day: 'Sam', active: 75, rest: 5 },
  { day: 'Dim', active: 30, rest: 40 },
];

export function ActivityChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-headline">Activité Hebdomadaire</CardTitle>
            <CardDescription>Chargement des données...</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-headline">Activité Hebdomadaire</CardTitle>
          <CardDescription>Minutes d'activité vs Temps de repos</CardDescription>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary" /> Actif</Badge>
          <Badge variant="outline" className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent" /> Repos</Badge>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#888', fontSize: 12 }} 
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="active" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="rest" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
