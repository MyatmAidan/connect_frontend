import Link from "next/link";
import { Button, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonLinkProps = VariantProps<typeof buttonVariants> &
  Omit<React.ComponentProps<typeof Button>, "render" | "nativeButton"> & {
    href: string;
  };

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Button
      nativeButton={false}
      render={<Link href={href} />}
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
