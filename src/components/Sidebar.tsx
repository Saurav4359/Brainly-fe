import { Brain } from "../icons/brain";
import { XIcon } from "../icons/XIcon";
import { YtIcon } from "../icons/YtIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside className="ice-panel flex w-full flex-col justify-between rounded-[2rem] border border-[#dceefe] p-5 backdrop-blur-xl lg:h-[calc(100vh-3rem)] lg:sticky lg:top-6">
      <div className="space-y-8">
        <div className="rounded-[1.75rem] border border-[#dceefe] bg-white/78 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl border border-[#9fd6ff]/40 bg-[#e7f6ff] p-3 text-[#5ab8ff]">
              <Brain />
            </div>
            <div>
              <p className="font-display text-2xl text-[#163653]">Sky Archive</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[#7894ae]">
                Private knowledge system
              </p>
            </div>
          </div>
          <p className="text-sm leading-6 text-[#67839d]">
            Keep important links in a lighter workspace with clean sky-blue accents and softer contrast.
          </p>
        </div>

        <div className="space-y-3">
          <p className="px-1 text-xs uppercase tracking-[0.3em] text-[#7894ae]">
            Channels
          </p>
          <SidebarItem text="X / Twitter" icon={<XIcon />} active meta="Live" />
          <SidebarItem text="YouTube" icon={<YtIcon />} meta="Media" />
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-[#cfe9ff] bg-gradient-to-br from-[#f9fdff] via-[#edf8ff] to-[#dff3ff] p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Mood</p>
        <p className="mt-2 font-display text-3xl text-[#163653]">Light. Airy. Precise.</p>
        <p className="mt-2 text-sm leading-6 text-[#67839d]">
          The interface now stays fully in white and sky-blue without any dark-theme carryover.
        </p>
      </div>
    </aside>
  );
}
