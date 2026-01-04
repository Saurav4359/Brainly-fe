import { useNavigate } from "react-router-dom";

export function PageNotFound({ data }: { data: boolean }) {
const navigate=useNavigate();
function home() {
    navigate("/");
}
navigate("/");
  return (
    <>
      <div className="h-screen bg-cyan-100 w-screen flex justify-center items-center">
       { data  ? (
          <div className="text-black text-2xl font-mono">
            4😵‍💫2 Access Denied! ! Plz Signup
            <button onClick={home} className="text-black h-10 w-25 rounded-xl border-black bg-blue-500 flex justify-center items-center text-sm ml-40">Home page </button>
          </div>
        ) : (
          <div className="text-black text-2xl font-mono">
            4😵‍💫4 Page not found
          </div>
        ) }
      </div>
      
    </>
  );
}
