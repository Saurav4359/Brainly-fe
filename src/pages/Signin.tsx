import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import { BACKEND_URL } from "../config";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username?.trim() || !password?.trim()) {
      setError("Enter username and password.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username: username.trim(),
        password,
      });

      const jwt = response.data.token;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/dashboard", { replace: true });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.code === "ERR_NETWORK" || err.message === "Network Error") {
          setError("Cannot reach server. Check backend URL or CORS.");
        } else {
          setError(err.response?.data?.message || err.response?.data?.error || err.message || "Sign in failed.");
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
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#dceefe] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(241,249,255,0.88))] shadow-[0_30px_70px_rgba(120,186,232,0.2)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-[#dceefe]   from-[#ffffff] to-[#ebf7ff] p-8 lg:border-b-0 lg:border-r lg:p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-[#7894ae]">Access</p>
          <h1 className="font-display mt-4 text-5xl leading-none text-[#163653] sm:text-6xl">
            Return to your archive.
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-[#67839d]">
            Sign in to a clean white workspace with soft sky accents for the links and media you want to keep close.
          </p>
          <div className="mt-10 space-y-4">
            <div className="rounded-[1.6rem] border border-[#dceefe] bg-white/76 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#7894ae]">Design note</p>
              <p className="mt-3 text-sm leading-7 text-[#67839d]">
                The palette is now white and sky-blue only, with no dark-theme framing left.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-xs uppercase tracking-[0.34em] text-[#7894ae]">Sign in</p>
            <div className="mt-4 space-y-3">
              <Input ref={usernameRef} placeholder="Username" />
              <Input ref={passwordRef} type="password" placeholder="Password" />
            </div>
            {error ? (
              <p className="mt-4 rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </p>
            ) : null}
            <div className="mt-6">
              <Button onClick={signin} variant="primary" text="Unlock workspace" fullwidth loading={loading} />
            </div>
            <p className="mt-6 text-sm text-[#7894ae]">
              Need an account?{" "}
              <button
                type="button"
                className="text-[#4aa8ff] transition hover:text-[#163653]"
                onClick={() => navigate("/signup")}
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
