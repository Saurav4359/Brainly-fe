import { Brain } from "../icons/brain";
import { XIcon } from "../icons/XIcon";
import { YtIcon } from "../icons/YtIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside className="ice-panel flex w-full flex-col justify-between rounded-[2rem] border border-[#dde3ec] p-5 shadow-[0_20px_50px_rgba(28,40,58,0.05)] backdrop-blur-xl lg:h-[calc(100vh-3rem)] lg:sticky lg:top-6">
      <div className="space-y-8">
        <div className="rounded-[1.55rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl border border-[#d5dbea] bg-[#f4f6fb] p-3 text-[#6172ad]">
              <Brain />
            </div>
            <div>
              <p className="font-display text-2xl text-[#182331]">Brainly</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[#738091]">Saved workspace</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-[#657382]">
            Keep useful links in one place with a layout that stays easy to read.
          </p>
        </div>

        <div className="space-y-3">
          <p className="px-1 text-xs uppercase tracking-[0.28em] text-[#738091]">Sources</p>
          <SidebarItem text="X / Twitter" icon={<XIcon />} active meta="Pinned" />
          <SidebarItem text="YouTube" icon={<YtIcon />} meta="Video" />
        </div>
      </div>

      <div className="rounded-[1.55rem] border border-[#dde3ec] bg-gradient-to-br from-[#ffffff] to-[#f2efe8] p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
        <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Focus</p>
        <p className="mt-2 font-display text-3xl text-[#182331]">Simple and steady.</p>
        <p className="mt-2 text-sm leading-6 text-[#657382]">
          A quiet interface helps you review things faster.
        </p>
      </div>
    </aside>
  );
}
