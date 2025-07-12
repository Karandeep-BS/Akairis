import HeroText1 from "../Animation/TextAnimations/HeroText1"
import HeroText2 from "../Animation/TextAnimations/HeroText2"
export default function HeroInearContainerTopLeft(){
    return(
        <div className="hero-inear-container-left relative w-[80%] h-[50vh] flex flex-col justify-evenly ">
            <div className="Text w-[80%] h-[50vh]   justify-evenly flex flex-col">
                <div className="flex flex-col leading-[12vh]">
                    <span className="text-[10vh] font-bold ">
                    <HeroText1 />
                </span>
                <span className="text-[10vh] font-bold  ">
                    <HeroText2 />
                </span>
                </div>

                <div className="flex flex-col font-medium ">
                    <span className="text-[2vh]">
                        we empower business with secure, scalable, and
                    </span>
                    <span className="text-[2vh]">
                        intelligent IT services from infrastructure and cloud to
                    </span>
                    <span className="text-[2vh]">
                        software development and ongoing support
                    </span>
                </div>

                <div className=" bg-white w-[18vh] h-[6vh] flex justify-center text-[2.5vh] items-center rounded-[1vh] text-[black]">
                    Get Started
                </div>
            </div>
            
        </div>
    )
}