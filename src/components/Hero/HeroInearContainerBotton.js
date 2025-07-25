// import HeroInearContainerBottomLeft from "./HeroInearContainerBottomLeft"
// import HeroInearContainerBottomRight from "./HeroInearContainerBottomRight"
import "../Hero/Mobile/Mobile.css"

export default function HeroInearContainerBottom(){
    return(
        <div className="hero-inear-container-bottom items-center relative w-full flex h-[30vh] ">
            
            {/* <HeroInearContainerBottomLeft />
            <HeroInearContainerBottomRight /> */}
            <div className="bg-[#1f1b1c] w-full h-[25vh]  flex items-center rounded-[2vh] justify-between">
                <div className="m-[1vh] flex ">
                    <img 
                    src="/images/Akairis/Headphone.svg"
                    className="bg-white w-[15vh] transition-transform hover:scale-105 duration-400 h-[15vh] rounded-[2vh] object-cover"
                    />
                    <div className="flex flex-col text-[2.3vh] justify-center m-[2vh]">
                        <span>Personal elements can take many</span>
                        <span>forms in architecture, ranging form</span>
                        <span>cherished belongs</span>
                    </div>
                </div>

                <div className="m-[1vh] flex ">
                    <img 
                    src="/images/Akairis/PC.svg"
                    className="bg-white w-[15vh] h-[15vh] rounded-[2vh] object-cover transition-transform hover:scale-105 duration-400"
                    />
                    <div className="flex flex-col text-[2.3vh] justify-center m-[2vh]">
                        <span>Personal elements can take many</span>
                        <span>forms in architecture, ranging form</span>
                        <span>cherished belongs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}