import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import { BACKEND_URL } from "../config";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username?.trim() || !password?.trim()) {
      setError("Enter username and password.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username: username.trim(),
        password,
      });
      navigate("/signin");
      alert("You have signed up");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.code === "ERR_NETWORK" || err.message === "Network Error") {
          setError("Cannot reach server. Check backend URL or CORS.");
        } else {
          setError(err.response?.data?.message || err.response?.data?.error || err.message || "Signup failed.");
        }
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="app-shell flex min-h-screen items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(241,249,255,0.88))] shadow-[0_30px_70px_rgba(120,186,232,0.2)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-xs uppercase tracking-[0.34em] text-[#7894ae]">Create account</p>
            <h1 className="font-display mt-4 text-5xl leading-none text-[#163653] sm:text-6xl">
              Build a cleaner archive.
            </h1>
            <p className="mt-6 text-base leading-8 text-[#67839d]">
              Start with a white sky-blue workspace for saved links, media, and research fragments.
            </p>

            <div className="mt-8 space-y-3">
              <Input ref={usernameRef} placeholder="Username" />
              <Input ref={passwordRef} type="password" placeholder="Password" />
            </div>

            {error ? (
              <p className="mt-4 rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </p>
            ) : null}

            <div className="mt-6">
              <Button onClick={signup} variant="primary" text="Create vault" fullwidth loading={loading} />
            </div>

            <p className="mt-6 text-sm text-[#7894ae]">
              Already inside?{" "}
              <button
                type="button"
                className="text-[#4aa8ff] transition hover:text-[#163653]"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        <div className="border-t border-[#dceefe] bg-gradient-to-br from-[#ffffff] to-[#ebf7ff] p-8 lg:border-l lg:border-t-0 lg:p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-[#7894ae]">Atmosphere</p>
          <h2 className="font-display mt-4 text-5xl leading-none text-[#163653]">Classy without the cliches.</h2>
          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.6rem] border border-[#dceefe] bg-white/76 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Tone</p>
              <p className="mt-3 text-sm leading-7 text-[#67839d]">
                The gradients stay cool and soft so the page feels composed without falling back to a dark theme.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-[#c9e8ff] bg-[linear-gradient(135deg,rgba(120,199,255,0.18),rgba(255,255,255,0.96))] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#5695c5]">Designed for</p>
              <p className="mt-3 text-sm leading-7 text-[#4c7394]">
                Founders, builders, and researchers who want their saved knowledge to look intentional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
