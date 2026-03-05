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
      <Card className="border border-white/5 bg-zinc-900/20 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between p-10 pb-4">
          <div className="space-y-1">
            <CardTitle className="text-3xl font-headline font-bold uppercase tracking-tight">Activité Hebdomadaire</CardTitle>
            <CardDescription className="text-zinc-500">Chargement de votre performance...</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center p-10">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-white/5 bg-zinc-900/20 rounded-[2.5rem] overflow-hidden backdrop-blur-xl shadow-2xl group hover:border-primary/20 transition-all duration-700">
      <CardHeader className="flex flex-row items-center justify-between p-10 pb-6 border-b border-white/5">
        <div className="space-y-1">
          <CardTitle className="text-3xl font-headline font-bold uppercase tracking-tight">Activité Hebdomadaire</CardTitle>
          <CardDescription className="text-zinc-500 font-medium italic">Analyse de votre vitalité prestige</CardDescription>
        </div>
        <div className="flex gap-4">
          <Badge variant="outline" className="flex items-center gap-2 border-zinc-800 text-zinc-400 bg-zinc-900/50 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]" /> 
            <span className="text-[10px] font-bold uppercase tracking-widest">Actif</span>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2 border-zinc-800 text-zinc-400 bg-zinc-900/50 px-4 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-zinc-700" /> 
            <span className="text-[10px] font-bold uppercase tracking-widest">Repos</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] p-10 pt-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#52525b', fontSize: 11, fontWeight: 700 }} 
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }}
              contentStyle={{ 
                backgroundColor: '#0a0a0a', 
                border: '1px solid rgba(212, 175, 55, 0.2)', 
                borderRadius: '1.5rem', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                padding: '12px 20px'
              }}
              itemStyle={{ color: '#d4af37', fontWeight: 'bold', fontSize: '12px' }}
              labelStyle={{ color: '#fff', marginBottom: '4px', fontWeight: 'bold', letterSpacing: '0.1em' }}
            />
            <Bar 
              dataKey="active" 
              fill="hsl(var(--primary))" 
              radius={[6, 6, 0, 0]} 
              barSize={24}
              className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
            />
            <Bar 
              dataKey="rest" 
              fill="#27272a" 
              radius={[6, 6, 0, 0]} 
              barSize={24} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
