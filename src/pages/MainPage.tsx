 
import mainpage from "../assets/mainpage.png"
import { useNavigate } from "react-router-dom"
export const MainPage=()=> {
    const navigate=useNavigate();
    return <>
    <header className="  bg-linear-to-l from-[#8a87d6] to-[#79bded] h-20 flex justify-evenly">
        <div className="  w-70 text-4xl flex justify-center items-center ">Second Brain</div>
        <div className=" flex justify-center items-center gap-15 w-60 ml-130 text-xl font-serif ">
            <h2 className="hover:cursor-pointer hover:underline" onClick={()=>{
                navigate("/signup")
            }}>Signup</h2>
            <h2 className="hover:cursor-pointer hover:underline" onClick={()=> {
                navigate("/signin")
            }}>Signin</h2>
        </div>
    </header>
    <div className="min-h-screen w-full bg-red-50">
        <img className="min-h-screen w-full " src={mainpage} alt="" />
    </div>
    </>
}