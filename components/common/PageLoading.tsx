import { Skeleton } from "@/components/ui/skeleton";

interface PageLoadingProps {
  variant?: "default" | "detail" | "table";
}

export function PageLoading({ variant = "default" }: PageLoadingProps) {
  if (variant === "detail") {
    return (
      <div className="dc-page-enter space-y-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <Skeleton className="h-40 w-full rounded-xl" />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-28 rounded-xl" />
          <Skeleton className="h-28 rounded-xl" />
        </div>
      </div>
    );
  }

  if (variant === "table") {
    return (
      <div className="dc-page-enter space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-9 w-28 rounded-md" />
        </div>
        <Skeleton className="h-10 w-full max-w-sm rounded-md" />
        <div className="space-y-2 rounded-xl border p-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dc-page-enter grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-28 rounded-xl" />
      ))}
      <Skeleton className="col-span-full h-64 rounded-xl" />
    </div>
  );
}
