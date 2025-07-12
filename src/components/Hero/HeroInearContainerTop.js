import HeroInearContainerTopLeft from "./HeroInearContainerTopLeft"
import HeroInearContainerTopRight from "./HeroInearContainerTopRight"
export default function HeroInearContainerTop(){
    return(
        <div className="hero-inear-container relative w-full flex h-[50vh] ">
            
            <HeroInearContainerTopLeft />
            <HeroInearContainerTopRight />
        </div>
    )
}