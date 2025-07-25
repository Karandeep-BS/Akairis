import Navbar from "./Navbar"
import HeroInearContainer from "./HeroInearContainer"
import useSmallScreen from '../Function/useSmallScreen.js';
import MobileNavbar from './Mobile/Mobile-Navbar.js';
import MobileHeroInearContainerTop from "./Mobile/Mobile-HeroInearContainer";
import "../Hero/Mobile/Mobile.css"
export default  function Hero(){
    const isSmallScreen = useSmallScreen();
    return (
        <div className="w-full h-full ">
            <div className="hero w-full h-[130vh]  flex flex-col relative">
             <img
                src="/images/Akairis/Hero Sections.svg"
                alt="Hero Section"
                className="w-full h-full object-cover bg-black opacity-80 absolute"
                />
           
                {isSmallScreen ? <MobileNavbar /> : <Navbar />}
               
                <div className="flex HeroContainer justify-center w-full h-full items-center relative ">
                {isSmallScreen ? <MobileHeroInearContainerTop /> : <HeroInearContainer />}
            </div>
        </div>
        </div>
    )
}

