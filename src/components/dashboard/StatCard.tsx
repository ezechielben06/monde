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
      "overflow-hidden border border-white/5 bg-zinc-900/10 hover:border-primary/30 transition-all duration-[1200ms] rounded-[3.5rem] group shadow-2xl backdrop-blur-sm",
      className
    )}>
      <CardContent className="p-12">
        <div className="flex justify-between items-start mb-10">
          <div className="space-y-4">
            <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-[0.5em]">{label}</p>
            <h3 className="text-5xl font-bold font-headline luxury-gold-gradient leading-none tracking-tighter">{value}</h3>
            {subValue && <p className="text-sm text-zinc-700 font-medium italic tracking-wide">{subValue}</p>}
          </div>
          <div className="p-6 rounded-[1.5rem] bg-zinc-900/60 border border-white/5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-[1200ms] shadow-inner">
            {icon}
          </div>
        </div>
        {trend && (
          <div className="flex items-center gap-4">
            <span className={cn(
              "text-[10px] font-bold px-5 py-2 rounded-full border tracking-widest uppercase",
              trend.isUp ? "bg-primary/5 text-primary border-primary/20" : "bg-zinc-900 text-zinc-500 border-white/5"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}
            </span>
            <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-[0.4em]">Performance</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}