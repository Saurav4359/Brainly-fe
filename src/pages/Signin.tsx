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
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2.25rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,238,0.92))] shadow-[0_30px_70px_rgba(28,40,58,0.08)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-[#dde3ec] p-8 lg:border-b-0 lg:border-r lg:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Access</p>
          <h1 className="font-display mt-4 text-5xl leading-none text-[#182331] sm:text-6xl">
            Welcome back.
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-[#657382]">
            Sign in to access the links, videos, and notes you saved.
          </p>
          <div className="mt-10 space-y-4">
            <div className="rounded-[1.4rem] border border-[#dde3ec] bg-white/82 p-5 shadow-[0_10px_24px_rgba(28,40,58,0.04)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Workspace</p>
              <p className="mt-3 text-sm leading-7 text-[#657382]">
                A simple layout keeps the focus on your saved items.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-xs uppercase tracking-[0.28em] text-[#738091]">Sign in</p>
            <div className="mt-4 space-y-3">
              <Input ref={usernameRef} placeholder="Username" />
              <Input ref={passwordRef} type="password" placeholder="Password" />
            </div>
            {error ? (
              <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            ) : null}
            <div className="mt-6">
              <Button onClick={signin} variant="primary" text="Sign in" fullwidth loading={loading} />
            </div>
            <p className="mt-6 text-sm text-[#7894ae]">
              Need an account?{" "}
              <button
                type="button"
                className="text-[#4b6ef0] transition hover:text-[#182331]"
                onClick={() => navigate("/signup")}
              >
                Create account
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
