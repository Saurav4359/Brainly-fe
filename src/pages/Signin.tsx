import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);

    {
      jwt && navigate("/dashboard", { replace: true });
    }

    // redirect the user to dashboard
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#e6e9ed] via-[#d9ddee] to-[#9492db]">
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-[#9492db]/20 min-w-[320px] max-w-sm p-8 space-y-5">
        <h1 className="text-2xl font-semibold text-[#7164c0] text-center tracking-tight">
          Welcome back
        </h1>
        <div className="space-y-3">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />
        </div>
        <div className="pt-2">
          <Button
            onClick={signin}
            variant="primary"
            text="Sign in"
            fullwidth={true}
            loading={false}
          />
        </div>
        <p className="text-center text-sm text-[#95989c]">
          Don&apos;t have an account?{" "}
          <span
            className="text-[#7164c0] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
