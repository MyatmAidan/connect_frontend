import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface DashboardShortcutItem {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
}

interface DashboardShortcutsProps {
  title: string;
  items: DashboardShortcutItem[];
  className?: string;
}

export function DashboardShortcuts({ title, items, className }: DashboardShortcutsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:bg-muted/60 flex items-start gap-3 rounded-xl border p-4 transition-colors",
              )}
            >
              <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="font-medium">{item.title}</p>
                {item.description ? (
                  <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                ) : null}
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
