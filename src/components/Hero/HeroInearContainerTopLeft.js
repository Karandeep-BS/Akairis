import HeroText1 from "../Animation/TextAnimations/HeroText1"
import HeroText2 from "../Animation/TextAnimations/HeroText2"
import HeroTopWords from "../Animation/TextAnimations/HeroTopWords"
import "../Animation/Button/Button.css"
import Button from "../Animation/Button/GT-button"

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
                    <HeroTopWords />
                </div>

                <Button />
            </div>
            
        </div>
    )
}