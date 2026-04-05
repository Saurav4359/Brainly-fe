import axios from "axios";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const linkRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState(ContentType.Youtube);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function addContent() {
    const title = titleRef.current?.value?.trim();
    const link = linkRef.current?.value?.trim();

    if (!title || !link) {
      setError("Title and link are both required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          title,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      onClose();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message || "Could not save content.");
      } else {
        setError("Could not save content.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        className="absolute inset-0 bg-[#dff3ff]/70 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,248,255,0.96))] p-7 shadow-[0_30px_70px_rgba(120,186,232,0.24)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#7894ae]">New capture</p>
            <h2 className="font-display text-4xl text-[#163653]">Add to the archive</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-[#d7ebfb] bg-[#f7fbff] p-3 text-[#7a93ac] transition hover:border-[#b7ddff] hover:text-[#163653]"
            onClick={onClose}
            aria-label="Close"
          >
            <CrossIcon />
          </button>
        </div>

        <div className="space-y-4">
          <Input ref={titleRef} placeholder="Title" />
          <Input ref={linkRef} placeholder="https://..." />

          <div className="rounded-[1.5rem] border border-[#dceefe] bg-white/75 p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#7894ae]">Source type</p>
            <div className="flex flex-wrap gap-3">
              <Button
                text="YouTube"
                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Youtube)}
              />
              <Button
                text="Twitter / X"
                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Twitter)}
              />
            </div>
          </div>

          {error ? (
            <p className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <div className="flex justify-end gap-3 pt-2">
            <Button text="Cancel" variant="ghost" onClick={onClose} />
            <Button text="Save Content" variant="primary" onClick={addContent} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputProps {
  ref?: React.Ref<HTMLInputElement>;
  placeholder: string;
  type?: string;
}

export function Input({ ref, placeholder, type = "text" }: InputProps) {
  return (
    <input
      type={type}
      className="w-full rounded-[1.35rem] border border-[#d7ebfb] bg-white px-5 py-4 text-[#163653] outline-none transition placeholder:text-[#89a0b5] focus:border-[#8ed0ff] focus:bg-[#fafdff]"
      placeholder={placeholder}
      ref={ref}
    />
  );
}
