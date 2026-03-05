import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isUp: boolean;
  };
  className?: string;
}

export function StatCard({ label, value, subValue, icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden border border-white/5 bg-zinc-900/30 hover:border-primary/40 transition-all duration-700 rounded-[2.5rem] group shadow-2xl",
      className
    )}>
      <CardContent className="p-10">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">{label}</p>
            <h3 className="text-4xl font-bold font-headline luxury-gold-gradient leading-none tracking-tighter">{value}</h3>
            {subValue && <p className="text-xs text-zinc-600 font-medium italic tracking-wide">{subValue}</p>}
          </div>
          <div className="p-4 rounded-2xl bg-zinc-800/40 border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
            {icon}
          </div>
        </div>
        {trend && (
          <div className="mt-8 flex items-center gap-3">
            <span className={cn(
              "text-[10px] font-bold px-4 py-1.5 rounded-full border",
              trend.isUp ? "bg-primary/10 text-primary border-primary/20" : "bg-zinc-800 text-zinc-400 border-white/5"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}
            </span>
            <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-[0.3em]">Performance</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}