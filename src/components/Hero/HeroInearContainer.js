import HeroInearContainerBottom from "./HeroInearContainerBotton"
import HeroInearContainerTop from "./HeroInearContainerTop"
import "../Hero/Mobile/Mobile.css"
export default function HeroInearContainer(){
    return(
        <div className="hero-inear-container absolute w-[90vw] flex flex-col justify-between h-[100vh] ">
            <HeroInearContainerTop />
            <HeroInearContainerBottom />
        </div>
    )
}