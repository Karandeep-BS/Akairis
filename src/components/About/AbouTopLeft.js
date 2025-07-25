import AboutText1 from "../Animation/TextAnimations/AboutText1"
import AboutText2 from "../Animation/TextAnimations/AboutText2"
export default function AbouTopLeft(){
    return(
        <div className="abou-top-left w-[50%] h-[40vh] flex justify-center items-center-safe ">
            <div className="abou-top-left-text text-[8vh] text-[#0D0D0D] flex flex-col ">
                <AboutText1 />
                <AboutText2 />
            </div>
        </div>
    )
}