import { DeleteIcon } from "../icons/DeleteIcon";
import { NoteBookIcon } from "../icons/NoteBookIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  contentId: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
  onDelete: (contentId: string) => void | Promise<void>;
}

function getEmbedUrl(link: string) {
  return link.replace("watch", "embed").replace("?v=", "/");
}

export function Card({ contentId, title, link, type, onDelete }: CardProps) {
  const sourceLabel = type === "youtube" ? "YouTube" : "X";

  return (
    <article className="group overflow-hidden rounded-[1.65rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,238,0.92))] p-5 shadow-[0_16px_40px_rgba(28,40,58,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#cfd8e8]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[#182331]">
            <div className="rounded-xl border border-[#dde3ec] bg-white p-2 text-[#6f8df7]">
              <NoteBookIcon />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">{sourceLabel}</p>
              <h3 className="font-display text-2xl leading-tight text-[#182331]">{title}</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#738091]">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#dde3ec] bg-white p-2 transition hover:border-[#cfd8e8] hover:text-[#182331]"
            aria-label="Open link"
          >
            <ShareIcon />
          </a>
          <button
            type="button"
            className="rounded-full border border-[#dde3ec] bg-white p-2 transition hover:border-[#cfd8e8] hover:text-[#182331]"
            aria-label="Delete item"
            onClick={() => void onDelete(contentId)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.35rem] border border-[#dde3ec] bg-[#fbfaf8]">
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
              <span className="rounded-full border border-[#dde3ec] bg-white px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#738091]">
                Social capture
              </span>
              <span className="text-xs text-[#738091]">Embedded post</span>
            </div>
            <blockquote className="twitter-tweet !m-0">
              <a href={link.replace("x.com", "twitter.com")}>Open post</a>
            </blockquote>
          </div>
        )}
      </div>
    </article>
  );
}
