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
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2.25rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,238,0.92))] shadow-[0_30px_70px_rgba(28,40,58,0.08)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Create account</p>
            <h1 className="font-display mt-4 text-5xl leading-none text-[#182331] sm:text-6xl">
              Create your account.
            </h1>
            <p className="mt-6 text-base leading-8 text-[#657382]">
              Save links, posts, and videos in one place.
            </p>

            <div className="mt-8 space-y-3">
              <Input ref={usernameRef} placeholder="Username" />
              <Input ref={passwordRef} type="password" placeholder="Password" />
            </div>

            {error ? (
              <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <div className="mt-6">
              <Button onClick={signup} variant="primary" text="Create account" fullwidth loading={loading} />
            </div>

            <p className="mt-6 text-sm text-[#738091]">
              Already inside?{" "}
              <button
                type="button"
                className="text-[#4b6ef0] transition hover:text-[#182331]"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        <div className="border-t border-[#dde3ec] bg-gradient-to-br from-[#ffffff] to-[#f2efe8] p-8 lg:border-l lg:border-t-0 lg:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Why it works</p>
          <h2 className="font-display mt-4 text-5xl leading-none text-[#182331]">Built for quick review.</h2>
          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.4rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Layout</p>
              <p className="mt-3 text-sm leading-7 text-[#657382]">
                Clear spacing and soft contrast keep the interface easy to scan.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-[#dde3ec] bg-[linear-gradient(135deg,rgba(111,141,247,0.14),rgba(255,255,255,0.96))] p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#5f6f8b]">Use case</p>
              <p className="mt-3 text-sm leading-7 text-[#657382]">
                People who want saved things organized without extra noise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
