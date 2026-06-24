"use client";

import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="dc-page-enter min-h-0 flex-1">
      {children}
    </div>
  );
}
