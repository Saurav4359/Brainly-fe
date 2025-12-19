import { DeleteIcon } from "../icons/DeleteIcon";
import { NoteBookIcon } from "../icons/NoteBookIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-2 bg-white rounded-md shadow-[0_0_5px_rgba(0,0,0,0.15)] max-w-70 max-h-80">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm">
            <NoteBookIcon />
            {title}
          </div>
          <div className="flex gap-5 text-gray-500">
            <ShareIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className="mt-4 ">
          {type === "youtube" && (
            <iframe
              width="260"
              height="150"
              src={link.replace("watch","embed").replace("?v=","/")}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              {" "}
              <a href={link.replace("x.com","twitter.com")}>
                December 18, 2025
              </a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
