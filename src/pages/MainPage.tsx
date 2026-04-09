import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const highlights = [
  "Capture quickly",
  "Stay organized",
  "Review later",
];

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <main className="app-shell min-h-screen overflow-hidden bg-transparent text-[#182331]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 lg:px-10">
        <header className="mb-10 flex items-center justify-between rounded-[1.6rem] border border-[#dde3ec] bg-white/78 px-5 py-4 shadow-[0_12px_36px_rgba(28,40,58,0.05)] backdrop-blur-xl">
          <div>
            <p className="font-display text-2xl text-[#182331]">Brainly</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#738091]">Save what matters</p>
          </div>
          <nav className="flex items-center gap-3">
            <Button text="Sign in" variant="ghost" onClick={() => navigate("/signin")} />
            <Button text="Get started" variant="primary" onClick={() => navigate("/signup")} />
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-[#d9dfeb] bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#677587]">
              Personal library
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-6xl leading-none tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Keep useful things close.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#657382]">
                Save links, videos, and posts in a space that stays calm and easy to scan.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button text="Create account" variant="primary" onClick={() => navigate("/signup")} />
              <Button text="Sign in" variant="secondary" onClick={() => navigate("/signin")} />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-[#dde3ec] bg-white/82 p-4 text-sm leading-6 text-[#66717f] shadow-[0_10px_24px_rgba(28,40,58,0.04)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#a9b7ff]/20 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-52 w-52 rounded-full bg-[#d7ceb9]/28 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,243,238,0.95))] p-5 shadow-[0_30px_70px_rgba(28,40,58,0.08)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Preview</p>
                  <p className="font-display text-3xl text-[#182331]">Saved at a glance</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#d9dfe7]" />
                  <span className="h-3 w-3 rounded-full bg-[#a8b7ff]" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.65rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_26px_rgba(28,40,58,0.04)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Overview</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-[#dde3ec] bg-[#fbfaf8] p-4">
                      <p className="text-sm text-[#677587]">Saved this week</p>
                      <p className="mt-2 font-display text-5xl">148</p>
                    </div>
                    <div className="rounded-[1.2rem] border border-[#dde3ec] bg-[linear-gradient(135deg,rgba(111,141,247,0.14),rgba(255,255,255,0.96))] p-4">
                      <p className="text-sm text-[#52658c]">Pinned items</p>
                      <p className="mt-2 font-display text-5xl text-[#163653]">27</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.65rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_26px_rgba(28,40,58,0.04)]">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Recent item</p>
                    <p className="mt-3 font-display text-3xl text-[#182331]">Notes for a product launch</p>
                    <p className="mt-3 text-sm leading-7 text-[#657382]">
                      Pulled together from a video, a post, and a short note.
                    </p>
                  </div>
                  <div className="rounded-[1.65rem] border border-[#dde3ec] bg-gradient-to-br from-[#ffffff] to-[#f1efe9] p-5 shadow-[0_10px_26px_rgba(28,40,58,0.04)]">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Organized by</p>
                    <ul className="mt-4 space-y-3 text-sm text-[#5f6b79]">
                      <li>Source type</li>
                      <li>Title and link</li>
                      <li>Fast review later</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
