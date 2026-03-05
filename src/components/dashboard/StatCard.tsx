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
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
            <h3 className="text-2xl font-bold font-headline">{value}</h3>
            {subValue && <p className="text-xs text-muted-foreground">{subValue}</p>}
          </div>
          <div className={cn("p-2 rounded-xl bg-muted transition-colors", colorClass)}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className="mt-4 flex items-center gap-1">
            <span className={cn(
              "text-xs font-semibold px-1.5 py-0.5 rounded-full",
              trend.isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}
            </span>
            <span className="text-xs text-muted-foreground">vs hier</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
