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
  colorClass?: string;
}

export function StatCard({ label, value, subValue, icon, trend, colorClass }: StatCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden border border-white/5 bg-zinc-900/40 hover:border-primary/30 transition-all duration-500 rounded-3xl group shadow-sm",
      colorClass
    )}>
      <CardContent className="p-8">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{label}</p>
            <h3 className="text-3xl font-bold font-headline luxury-gold-gradient leading-tight">{value}</h3>
            {subValue && <p className="text-xs text-zinc-600 font-medium italic">{subValue}</p>}
          </div>
          <div className="p-3 rounded-2xl bg-zinc-800/50 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        </div>
        {trend && (
          <div className="mt-6 flex items-center gap-2">
            <span className={cn(
              "text-[10px] font-bold px-3 py-1 rounded-full",
              trend.isUp ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-rose-500/10 text-rose-500 border border-rose-500/20"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}
            </span>
            <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest">Performance</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
