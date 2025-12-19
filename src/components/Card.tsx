import { DeleteIcon } from "../icons/DeleteIcon";
import { NoteBookIcon } from "../icons/NoteBookIcon";
import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="p-2 bg-white rounded-md shadow-[0_0_5px_rgba(0,0,0,0.15)] max-w-65 max-h-70">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <NoteBookIcon />
            Project ideas
          </div>
          <div className="flex gap-2">
            <ShareIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
