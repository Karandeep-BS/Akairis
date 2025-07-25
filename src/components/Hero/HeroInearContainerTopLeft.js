import HeroText1 from "../Animation/TextAnimations/HeroText1"
import HeroText2 from "../Animation/TextAnimations/HeroText2"
import HeroTopWords from "../Animation/TextAnimations/HeroTopWords"
import "../Animation/Button/Button.css"
import Button from "../Animation/Button/GT-button"
import ScrollFade from "../Animation/ScrollFade";
import "../Hero/Mobile/Mobile.css"
export default function HeroInearContainerTopLeft(){
    return(
        <div className="hero-inear-container-left relative w-[80%] h-[50vh] flex flex-col justify-evenly ">
            <div className="Text w-[80%] h-[50vh]   justify-evenly flex flex-col">
                <div className="flex flex-col leading-[12vh]">
                    <span className="HeroText1 text-[10vh] font-bold">
                      <ScrollFade delay={0.2} duration={1.1}>
                        <HeroText1 />
                      </ScrollFade>
                    </span>
                    
                    <span className="HeroText2 text-[10vh] font-bold">
                      <ScrollFade delay={0.5} duration={1.1}>
                        <HeroText2 />
                      </ScrollFade>
                    </span>
                </div>

                <div className="HeroTopWords flex flex-col font-medium">
                    <ScrollFade delay={0.2} duration={1.2}>
                    <HeroTopWords />
                    </ScrollFade>
                </div>

                <ScrollFade delay={0.2} duration={1.2}>

                <Button />
                </ScrollFade>
            </div>
            
        </div>
    )
}