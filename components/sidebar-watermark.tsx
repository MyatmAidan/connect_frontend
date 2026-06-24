import { BrandIcon } from "@/components/brand/brand-mark";

export function SidebarWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden group-data-[collapsible=icon]:hidden"
    >
      <BrandIcon
        size={200}
        className="absolute right-8 bottom-24 size-[min(56%,200px)] max-w-none select-none opacity-[0.07] dark:opacity-[0.05]"
      />
    </div>
  );
}
