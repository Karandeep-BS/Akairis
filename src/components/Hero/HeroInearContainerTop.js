import HeroInearContainerTopLeft from "./HeroInearContainerTopLeft"
import HeroInearContainerTopRight from "./HeroInearContainerTopRight"
// import "../Hero/Mobile/Mobile.css"
export default function HeroInearContainerTop(){
    return(
        <div className="hero-inear-container-top relative w-full flex h-[50vh] ">
            
            <HeroInearContainerTopLeft />
            <HeroInearContainerTopRight />
        </div>
    )
}