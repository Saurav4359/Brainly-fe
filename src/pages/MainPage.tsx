import mainpage from "../assets/mainpage.png";
import { useNavigate } from "react-router-dom";
export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-gradient-to-r from-[#7164c0] via-[#9492db] to-[#79bded] h-20 flex justify-between items-center px-8 md:px-16 shadow-lg">
        <div className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-sm">
          Second Brain
        </div>
        <nav className="flex items-center gap-4">
          <button
            type="button"
            className="px-5 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-colors font-medium"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors font-medium backdrop-blur-sm"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        </nav>
      </header>
      <div className="min-h-[calc(100vh-5rem)] w-full bg-gradient-to-b from-[#eeeeef] to-[#e6e9ed] relative overflow-hidden">
        <img
          className="min-h-[calc(100vh-5rem)] w-full object-cover object-top"
          src={mainpage}
          alt=""
        />
      </div>
    </>
  );
};
