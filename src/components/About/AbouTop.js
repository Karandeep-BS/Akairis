'use client'
import AbouTopLeft from "./AbouTopLeft"
import AbouTopRight from "./AbouTopRight"
import useSmallScreen from "../Function/useSmallScreen"
import MobileAboutLeft from "./Mobile/MobileAbouLeft";
import MobileAboutRight from "./Mobile/MobileAboutRight";
export default function AbouTop(){
    const isSmallScreen = useSmallScreen();
    return(
        <div className="abou-top w-full h-[40vh] flex ">
            {isSmallScreen ? <MobileAboutLeft /> : <AbouTopLeft />}
            {isSmallScreen ? <MobileAboutRight /> : <AbouTopRight />}
        </div>
    )
} 