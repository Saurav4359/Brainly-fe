import { BarIcon } from "../icons/bar";
import { Brain } from "../icons/brain";
import { XIcon } from "../icons/XIcon";
import { YtIcon } from "../icons/YtIcon";

import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-3 ">
      <div className="text-4xl text-[#7164c0] pt-8 flex items-center font-serif">
        <div onClick={() => {}} className="text-black mr-6 cursor-pointer">
          <BarIcon />
        </div>
        <div className="pr-4">
          <Brain />
        </div>
        Brainly
      </div>

      <div className="pt-8 pl-4 ">
        <SidebarItem text="Twitter" icon={<XIcon />} />
        <SidebarItem text="Youtube" icon={<YtIcon />} />
      </div>
    </div>
  );
}
