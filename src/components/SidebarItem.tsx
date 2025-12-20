import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center  py-1 text-gray-600 cursor-pointer hover:bg-gray-200 rounded  max-w-48 pl-4 transition-all duration-150">
      <div className="pr-6">{icon}</div>
      <div className="flex">
        <div className="">{text}</div>
      </div>
    </div>
  );
}
