import { BRAND_SIDEBAR_WATERMARK_SRC } from "@/lib/brand";

export function SidebarWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden group-data-[collapsible=icon]:hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BRAND_SIDEBAR_WATERMARK_SRC}
        alt=""
        className="absolute -right-6 bottom-10 h-auto w-[min(72%,320px)] max-w-none select-none object-contain object-center opacity-[0.14] dark:opacity-[0.11]"
        draggable={false}
      />
    </div>
  );
}
