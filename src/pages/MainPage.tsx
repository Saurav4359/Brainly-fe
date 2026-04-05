import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const highlights = [
  "White editorial shell",
  "Sky gradients without visual noise",
  "Library split by source and intent",
];

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <main className="app-shell min-h-screen overflow-hidden bg-transparent text-[#163653]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 lg:px-10">
        <header className="mb-10 flex items-center justify-between rounded-full border border-[#dceefe] bg-white/72 px-5 py-4 backdrop-blur-xl">
          <div>
            <p className="font-display text-2xl text-[#163653]">Sky Archive</p>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#7894ae]">
              Archive what matters
            </p>
          </div>
          <nav className="flex items-center gap-3">
            <Button text="Sign in" variant="ghost" onClick={() => navigate("/signin")} />
            <Button text="Start free" variant="primary" onClick={() => navigate("/signup")} />
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-[#b7ddff] bg-[#edf8ff] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-[#5898c7]">
              Private second-brain system
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-6xl leading-none sm:text-7xl lg:text-8xl">
                Clear space for sharp thinking.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#67839d]">
                Save links, videos, and threads in a white and sky-blue interface designed to feel
                crisp, airy, and human-made.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button text="Enter vault" variant="primary" onClick={() => navigate("/signup")} />
              <Button text="I already have access" variant="secondary" onClick={() => navigate("/signin")} />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[#dceefe] bg-white/76 p-4 text-sm leading-6 text-[#67839d]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#88d3ff]/28 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-52 w-52 rounded-full bg-[#cdeeff]/60 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.4rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(238,247,255,0.95))] p-5 shadow-[0_30px_70px_rgba(120,186,232,0.22)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[#7894ae]">Preview</p>
                  <p className="font-display text-3xl">Curated intelligence</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#d8eeff]" />
                  <span className="h-3 w-3 rounded-full bg-[#78c7ff]" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.8rem] border border-[#dceefe] bg-white/74 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Signal board</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-[#dceefe] bg-[#fafdff] p-4">
                      <p className="text-sm text-[#7692ac]">Captured this week</p>
                      <p className="mt-2 font-display text-5xl">148</p>
                    </div>
                    <div className="rounded-[1.4rem] border border-[#c9e8ff] bg-[linear-gradient(135deg,rgba(120,199,255,0.18),rgba(255,255,255,0.9))] p-4">
                      <p className="text-sm text-[#4e8fc0]">High-priority ideas</p>
                      <p className="mt-2 font-display text-5xl text-[#163653]">27</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.8rem] border border-[#dceefe] bg-white/74 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Recent capture</p>
                    <p className="mt-3 font-display text-3xl">Design references for a stealth fintech brand</p>
                    <p className="mt-3 text-sm leading-7 text-[#67839d]">
                      Saved from a long YouTube breakdown, an X thread, and your own internal notes.
                    </p>
                  </div>
                  <div className="rounded-[1.8rem] border border-[#dceefe] bg-gradient-to-br from-[#ffffff] to-[#e9f7ff] p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Retrieval</p>
                    <ul className="mt-4 space-y-3 text-sm text-[#597892]">
                      <li>Video references in one lane</li>
                      <li>Thread captures in another</li>
                      <li>Search-ready vault structure</li>
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
