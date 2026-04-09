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
        className="absolute inset-0 bg-[#f0ede7]/72 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(248,245,240,0.96))] p-7 shadow-[0_30px_70px_rgba(28,40,58,0.08)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">New item</p>
            <h2 className="font-display text-4xl text-[#182331]">Add an item</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-[#dde3ec] bg-white p-3 text-[#738091] transition hover:border-[#cfd8e8] hover:text-[#182331]"
            onClick={onClose}
            aria-label="Close"
          >
            <CrossIcon />
          </button>
        </div>

        <div className="space-y-4">
          <Input ref={titleRef} placeholder="Title" />
          <Input ref={linkRef} placeholder="https://..." />

          <div className="rounded-[1.45rem] border border-[#dde3ec] bg-white/82 p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#738091]">Source type</p>
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
            <p className="rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <div className="flex justify-end gap-3 pt-2">
            <Button text="Cancel" variant="ghost" onClick={onClose} />
            <Button text="Save item" variant="primary" onClick={addContent} loading={loading} />
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
      className="w-full rounded-[1.2rem] border border-[#dde3ec] bg-white px-5 py-4 text-[#182331] outline-none transition placeholder:text-[#8a96a6] focus:border-[#c8d2e2] focus:bg-[#fcfbfa]"
      placeholder={placeholder}
      ref={ref}
    />
  );
}
