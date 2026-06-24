import {
  BRAND_ICON_SRC,
  BRAND_LOGO_SRC,
  BRAND_NAME,
} from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandWordmarkProps = {
  className?: string;
  alt?: string;
};

/** Horizontal CONNECT logo (transparent PNG). */
export function BrandWordmark({
  className,
  alt = BRAND_NAME,
}: BrandWordmarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={BRAND_LOGO_SRC}
      alt={alt}
      className={cn("w-auto object-contain object-left", className)}
      draggable={false}
    />
  );
}

type BrandIconProps = {
  className?: string;
  size?: number;
  alt?: string;
};

export function BrandIcon({
  className,
  size = 28,
  alt = "",
}: BrandIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={BRAND_ICON_SRC}
      alt={alt}
      width={size}
      height={size}
      className={cn("shrink-0 object-contain object-center", className)}
      draggable={false}
    />
  );
}

type BrandLogoProps = {
  className?: string;
  height?: number;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return <BrandWordmark className={cn("object-center", className)} />;
}

type ShellHeaderBrandProps = {
  badge: string;
};

/** Wordmark + role badge for the top tab bar. */
export function ShellHeaderBrand({ badge }: ShellHeaderBrandProps) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <BrandWordmark className="h-9 w-auto max-w-[min(200px,42vw)]" />
      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
        {badge}
      </span>
    </div>
  );
}
