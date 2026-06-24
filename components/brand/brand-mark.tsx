import { BRAND_ICON_SRC, BRAND_LOGO_SRC, BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Hides baked-in white backgrounds on light surfaces. */
const BRAND_BLEND =
  "mix-blend-multiply dark:mix-blend-screen dark:brightness-110";

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
      className={cn(
        "shrink-0 object-contain object-center",
        BRAND_BLEND,
        className,
      )}
      draggable={false}
    />
  );
}

type BrandLogoProps = {
  className?: string;
  height?: number;
};

export function BrandLogo({ className, height = 40 }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={BRAND_LOGO_SRC}
      alt={BRAND_NAME}
      width={220}
      height={height}
      className={cn(
        "w-auto object-contain object-left",
        BRAND_BLEND,
        className,
      )}
      draggable={false}
    />
  );
}

type BrandTitleProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  iconSize?: number;
};

/** Icon + CONNECT text — matches the header branding style. */
export function BrandTitle({
  className,
  iconClassName,
  textClassName,
  iconSize = 36,
}: BrandTitleProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <BrandIcon
        size={iconSize}
        className={cn("size-9 shrink-0", iconClassName)}
      />
      <span
        className={cn(
          "truncate font-bold tracking-tight text-sidebar-foreground",
          textClassName,
        )}
      >
        {BRAND_NAME}
      </span>
    </div>
  );
}

type ShellHeaderBrandProps = {
  badge: string;
};

/** Icon + CONNECT + role badge for the top tab bar. */
export function ShellHeaderBrand({ badge }: ShellHeaderBrandProps) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <BrandTitle
        iconSize={36}
        iconClassName="size-9"
        textClassName="text-base text-foreground"
      />
      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
        {badge}
      </span>
    </div>
  );
}
