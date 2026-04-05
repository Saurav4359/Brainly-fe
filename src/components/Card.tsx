import { DeleteIcon } from "../icons/DeleteIcon";
import { NoteBookIcon } from "../icons/NoteBookIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

function getEmbedUrl(link: string) {
  return link.replace("watch", "embed").replace("?v=", "/");
}

export function Card({ title, link, type }: CardProps) {
  const sourceLabel = type === "youtube" ? "YouTube" : "X Post";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,249,255,0.92))] p-5 shadow-[0_20px_40px_rgba(132,186,228,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8ed0ff]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[#163653]">
            <div className="rounded-xl border border-[#cde9ff] bg-[#eef8ff] p-2 text-[#5ab8ff]">
              <NoteBookIcon />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">{sourceLabel}</p>
              <h3 className="font-display text-2xl leading-tight">{title}</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#7a93ac]">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d7ebfb] bg-[#f7fbff] p-2 transition hover:border-[#8ed0ff] hover:text-[#163653]"
            aria-label="Open source"
          >
            <ShareIcon />
          </a>
          <button
            type="button"
            className="rounded-full border border-[#d7ebfb] bg-[#f7fbff] p-2 transition hover:border-[#b7ddff] hover:text-[#163653]"
            aria-label="Delete item"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.4rem] border border-[#dceefe] bg-[#fafdff]">
        {type === "youtube" ? (
          <iframe
            className="aspect-video w-full"
            src={getEmbedUrl(link)}
            title={title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[#d7ebfb] bg-[#f6fbff] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#6f8ba5]">
                Social capture
              </span>
              <span className="text-xs text-[#7894ae]">Embedded post</span>
            </div>
            <blockquote className="twitter-tweet !m-0">
              <a href={link.replace("x.com", "twitter.com")}>Open the original post</a>
            </blockquote>
          </div>
        )}
      </div>
    </article>
  );
}
