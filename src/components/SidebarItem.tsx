import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
  active = false,
  meta,
}: {
  text: string;
  icon: ReactElement;
  active?: boolean;
  meta?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
        active
          ? "border-[#78c7ff]/40 bg-[#e4f5ff] text-[#173b5b]"
          : "border-[#d8ebfb] bg-white/75 text-[#69859f] hover:border-[#9cd3ff] hover:bg-[#f3faff]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-[#78c7ff]">{icon}</div>
        <span className="text-sm tracking-[0.12em] uppercase">{text}</span>
      </div>
      {meta ? (
        <span className="rounded-full border border-[#d7ebfb] bg-[#f6fbff] px-2 py-1 text-[10px] tracking-[0.18em] uppercase text-[#6f8ba5]">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
