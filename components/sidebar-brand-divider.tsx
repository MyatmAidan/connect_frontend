export function SidebarBrandDivider() {
  return (
    <div
      aria-hidden
      className="mx-3 flex items-center gap-2 group-data-[collapsible=icon]:hidden"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-primary/25" />
      <span className="size-1 shrink-0 rounded-full bg-primary/60" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/40 to-primary/25" />
    </div>
  );
}
