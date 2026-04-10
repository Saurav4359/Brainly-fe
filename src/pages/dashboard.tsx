import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh, deleteContent } = useContent();
  const navigate = useNavigate();

  useEffect(() => {
    refresh();
  }, [modalOpen, refresh]);

  const totalItems = contents.length;
  const youtubeCount = contents.filter((item) => item.type === "youtube").length;
  const twitterCount = contents.filter((item) => item.type === "twitter").length;

  function logout() {
    localStorage.removeItem("token");
    alert("You have been logged out");
    navigate("/", { replace: true });
  }

  async function handleDelete(contentId: string) {
    const shouldDelete = window.confirm("Delete this item?");
    if (!shouldDelete) {
      return;
    }

    try {
      await deleteContent(contentId);
    } catch {
      alert("Could not delete the item. Please try again.");
    }
  }

  return (
    <main className="app-shell min-h-screen px-4 py-4 sm:px-6 sm:py-6">
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Sidebar />

        <section className="space-y-6">
          <div className="rounded-[2rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,243,238,0.9))] p-6 shadow-[0_20px_50px_rgba(28,40,58,0.05)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Dashboard</p>
                <h1 className="font-display mt-3 text-5xl leading-none tracking-[-0.05em] text-[#182331] sm:text-6xl">
                  Your saved items.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#657382]">
                  Track links, videos, and posts from one place.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  text="Add item"
                  startIcon={<PlusIcon />}
                />
                <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
                <Button onClick={logout} variant="ghost" text="Log out" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.4rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Total items</p>
                <p className="font-display mt-3 text-5xl text-[#182331]">{totalItems}</p>
              </div>
              <div className="rounded-[1.4rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">YouTube</p>
                <p className="font-display mt-3 text-5xl text-[#182331]">{youtubeCount}</p>
              </div>
              <div className="rounded-[1.4rem] border border-[#dde3ec] bg-[linear-gradient(135deg,rgba(111,141,247,0.14),rgba(255,255,255,0.96))] p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[#5f6f8b]">X / Twitter</p>
                <p className="font-display mt-3 text-5xl text-[#182331]">{twitterCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(249,246,241,0.92))] p-4 shadow-[0_20px_50px_rgba(28,40,58,0.05)] backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Collection</p>
                <h2 className="font-display text-3xl text-[#182331]">Saved items</h2>
              </div>
              <div className="rounded-full border border-[#dde3ec] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#738091]">
                {contents.length === 0 ? "Empty" : `${contents.length} visible`}
              </div>
            </div>

            {contents.length === 0 ? (
              <div className="rounded-[1.65rem] border border-dashed border-[#dde3ec] bg-white/82 px-6 py-14 text-center">
                <p className="font-display text-4xl text-[#182331]">Nothing saved yet.</p>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#657382]">
                  Add your first link to see it appear here.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant="primary"
                    text="Add first item"
                    startIcon={<PlusIcon />}
                  />
                </div>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-2">
                {contents.map(({ _id, type, link, title }) => (
                  <Card
                    key={_id}
                    contentId={_id}
                    type={type}
                    link={link}
                    title={title}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
