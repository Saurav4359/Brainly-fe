import { useNavigate } from "react-router-dom";

export function PageNotFound() {
const navigate=useNavigate();
function home() {
    navigate("/",{replace: true});
}
 
  return (
    <>
      <div className="h-screen bg-cyan-100 w-screen flex justify-center items-center">
        
          <div className="text-black text-2xl font-mono">
                  4😵‍💫4 Page not found
            <button onClick={home} className="text-black h-10 w-25 rounded-xl border-black bg-blue-500 flex justify-center items-center text-sm ml-40">Home page </button>
          </div>
      
      
      </div>
      
    </>
  );
}
