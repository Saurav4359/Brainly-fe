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
          ? "border-[#cfd8e8] bg-white text-[#182331] shadow-[0_8px_20px_rgba(28,40,58,0.04)]"
          : "border-[#dde3ec] bg-white/78 text-[#66717f] hover:border-[#cfd8e8] hover:bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-[#6f8df7]">{icon}</div>
        <span className="text-sm tracking-[0.01em]">{text}</span>
      </div>
      {meta ? (
        <span className="rounded-full border border-[#dde3ec] bg-white px-2 py-1 text-[10px] tracking-[0.04em] text-[#738091]">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
