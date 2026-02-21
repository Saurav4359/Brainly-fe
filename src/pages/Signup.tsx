import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate=useNavigate();
  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });
    navigate("/signin");
    alert("You have signed up");
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#d9ddee] via-[#e6e9ed] to-[#7164c0]/30">
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-[#9492db]/20 min-w-[320px] max-w-sm p-8 space-y-5">
        <h1 className="text-2xl font-semibold text-[#7164c0] text-center tracking-tight">
          Create account
        </h1>
        <div className="space-y-3">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />
        </div>
        <div className="pt-2">
          <Button
            onClick={signup}
            variant="primary"
            text="Sign up"
            fullwidth={true}
            loading={false}
          />
        </div>
        <p className="text-center text-sm text-[#95989c]">
          Already have an account?{" "}
          <span
            className="text-[#7164c0] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
