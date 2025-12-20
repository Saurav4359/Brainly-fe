import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";

export function Signin() {
    return <div className=" h-screen w-screen bg-gray-300 flex justify-center items-center">

        <div className="bg-white rounded-xl border min-w-48 p-8 ">
        <Input placeholder="Username"/>
        <Input placeholder="Password"/>
        <div className="flex justify-center pt-4">
        <Button variant="primary" text="Signin" fullwidth={true} loading={false} />
        </div>
        </div>
    </div>
}