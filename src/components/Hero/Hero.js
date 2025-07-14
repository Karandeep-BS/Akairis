import Navbar from "./Navbar"
import HeroInearContainer from "./HeroInearContainer"
export default  function Hero(){
    return (
        <div className="w-full h-full ">
            <div className="hero w-full h-[130vh]  flex flex-col relative">
             <img
                src="/images/Akairis/Hero Sections.svg"
                alt="Hero Section"
                className="w-full h-full object-cover bg-black opacity-80 absolute"
                />
           
                <Navbar />
               
                <div className="flex justify-center w-full h-full items-center relative ">
                <HeroInearContainer />
            </div>
        </div>
        </div>
    )
}