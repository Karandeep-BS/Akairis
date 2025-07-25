'use client'
import AboutButtomLeft from "./AboutButtomLeft"
import AboutButtomRight from "./AboutButtomRight"
import useSmallScreen from "../Function/useSmallScreen"
import MobileAboutBottomLeft from "./Mobile/MobileAboutBottomLeft";
import MobileAboutBottomRight from "./Mobile/MobileAboutBottomRight";
export default function AboutButtom(){
    const isSmallScreen = useSmallScreen();
    return(
        <div className="abou-Buttom w-full h-[60vh] flex -bg-green-400">
            {isSmallScreen ? <MobileAboutBottomLeft /> : <AboutButtomLeft />}
            {isSmallScreen ? <MobileAboutBottomRight /> : <AboutButtomRight />}
        </div>
    )
}
            