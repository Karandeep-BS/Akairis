import AbouTopLeft from "./AbouTopLeft"
import AbouTopRight from "./AbouTopRight"
export default function AbouTop(){
    return(
        <div className="abou-top w-full h-[40vh] flex ">
            <AbouTopLeft />
            <AbouTopRight />
        </div>
    )
}