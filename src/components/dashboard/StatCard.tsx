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
      "overflow-hidden border border-border bg-card/50 hover:border-primary/30 transition-all duration-700 rounded-3xl group shadow-xl backdrop-blur-sm",
      className
    )}>
      <CardContent className="p-8 md:p-10">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
            <h3 className="text-4xl md:text-5xl font-bold font-headline luxury-gold-gradient leading-none tracking-tighter">{value}</h3>
            {subValue && <p className="text-xs text-muted-foreground font-medium italic tracking-wide">{subValue}</p>}
          </div>
          <div className="p-5 rounded-2xl bg-muted border border-border group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
            {icon}
          </div>
        </div>
        {trend && (
          <div className="flex items-center gap-3">
            <span className={cn(
              "text-[9px] font-bold px-4 py-1.5 rounded-full border tracking-widest uppercase",
              trend.isUp ? "bg-primary/10 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}
            </span>
            <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Performance</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
