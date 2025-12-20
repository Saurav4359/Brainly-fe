 
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

// controlled component
export function CreateContentModal({ open, onClose }:{open:boolean,onClose:()=> void}) {
    
  return <div> { open && <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-70 flex justify-center">
    <div className="flex flex-col justify-center "> 
      <span className="bg-white opacity-100 p-4 rounded ">
        <div className="flex justify-end cursor-pointer" onClick={onClose} >
            <CrossIcon/>
        </div>
          <div>
            <Input placeholder={"Title"}/>
            <Input placeholder={"Link"}/>
          </div>
          <div className="flex justify-center "> 
          <Button variant="primary" text="Submit" />
          </div>
      </span>
      
      </div>
  </div>}
  </div>
}

 
export function Input({onChange,placeholder}:{onChange ? :()=> void,placeholder :string} ) {
    return <div className="pb-1">
        <input type={"text"} className="px-6 py-2 border rounded" placeholder={placeholder} id="" onChange={onChange}/>
    </div>
}