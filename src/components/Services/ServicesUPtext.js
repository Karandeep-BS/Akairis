import ServicesText1 from "../Animation/TextAnimations/ServicesText1"
import ServicesText2 from "../Animation/TextAnimations/ServicesText2"
export default function ServicesUPtext(){
    return(
        <div className="Services w-[50%] -bg-amber-400 ml-[10vh] mt-[10vh]  h-[25vh] flex  items-center-safe ">
            <div className="ServicesText text-[8vh] text-[#0D0D0D] flex flex-col ">
                <ServicesText1 />
                <ServicesText2 />
            </div>
        </div>
    )
}