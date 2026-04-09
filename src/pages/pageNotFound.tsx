import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="app-shell flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-3xl rounded-[2.2rem] border border-[#dde3ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,245,240,0.94))] p-10 text-center shadow-[0_30px_70px_rgba(28,40,58,0.08)] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.34em] text-[#7894ae]">404</p>
        <h1 className="font-display mt-4 text-6xl leading-none text-[#182331] sm:text-7xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#657382]">
          The page you are looking for is unavailable.
        </p>
        <div className="mt-8 flex justify-center">
          <Button text="Back to home" variant="primary" onClick={() => navigate("/", { replace: true })} />
        </div>
      </div>
    </main>
  );
}
