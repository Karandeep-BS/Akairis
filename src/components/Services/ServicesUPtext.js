import ServicesText1 from "../Animation/TextAnimations/ServicesText1"
import ServicesText2 from "../Animation/TextAnimations/ServicesText2"
export default function ServicesUPtext(){
    return(
        <div className=" w-[50%] mt-[10vh] bg-amber-900 h-[25vh] flex justify-center items-center-safe ">
            <div className="text-[8vh] text-[#0D0D0D] flex flex-col ">
                <ServicesText1 />
                <ServicesText2 />
            </div>
        </div>
    )
}