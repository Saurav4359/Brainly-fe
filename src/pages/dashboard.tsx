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
  const { contents, refresh } = useContent();
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
          <div className="rounded-[2rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,248,255,0.86))] p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-[#7894ae]">Dashboard</p>
                <h1 className="font-display mt-3 text-5xl leading-none text-[#163653] sm:text-6xl">
                  Your archive, opened up.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#67839d]">
                  The dashboard now stays fully bright with white surfaces and sky gradients instead
                  of any dark-theme base.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  text="Add Content"
                  startIcon={<PlusIcon />}
                />
                <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
                <Button onClick={logout} variant="ghost" text="Logout" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.6rem] border border-[#dceefe] bg-white/78 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Total items</p>
                <p className="font-display mt-3 text-5xl text-[#163653]">{totalItems}</p>
              </div>
              <div className="rounded-[1.6rem] border border-[#dceefe] bg-white/72 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">YouTube</p>
                <p className="font-display mt-3 text-5xl text-[#163653]">{youtubeCount}</p>
              </div>
              <div className="rounded-[1.6rem] border border-[#c9e8ff] bg-[linear-gradient(135deg,rgba(120,199,255,0.18),rgba(255,255,255,0.92))] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#5695c5]">X / Twitter</p>
                <p className="font-display mt-3 text-5xl text-[#163653]">{twitterCount}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(243,250,255,0.82))] p-4 backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7894ae]">Collection</p>
                <h2 className="font-display text-3xl text-[#163653]">Saved references</h2>
              </div>
              <div className="rounded-full border border-[#dceefe] bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#7894ae]">
                {contents.length === 0 ? "Empty" : `${contents.length} visible`}
              </div>
            </div>

            {contents.length === 0 ? (
              <div className="rounded-[1.8rem] border border-dashed border-[#dceefe] bg-white/72 px-6 py-14 text-center">
                <p className="font-display text-4xl text-[#163653]">Nothing stored yet.</p>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#67839d]">
                  Add your first YouTube link or X post to see the new card system populate here.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant="primary"
                    text="Add first capture"
                    startIcon={<PlusIcon />}
                  />
                </div>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-2">
                {contents.map(({ type, link, title }) => (
                  <Card key={`${type}-${link}-${title}`} type={type} link={link} title={title} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
