import Navbar from "./Navbar"
import HeroInearContainer from "./HeroInearContainer"
export default  function Hero(){
    return (
        <div className="hero w-full h-[130vh] bg-blue-600 flex flex-col absolute">
            
            <Navbar />
            <div className="flex justify-center w-full h-full items-center relative bg-green-600">
                <HeroInearContainer />
            </div>
            
        </div>
    )
}