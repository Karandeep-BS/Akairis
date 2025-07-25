'use client'
import TestimonialCard from "./TestimonialCard"
import ReviewText from "./ReviewTexts"
import  useSmallScreen  from "../Function/useSmallScreen"
// import use
import MobileTestimonialCard from "./Mobile/MobileTestimonialCard"
import WithUs from "./WithUs"
import "../Review/Mobile/ReviewMobile.css"

export default function Review(){
    const isSmallScreen = useSmallScreen();
    return (
        <div className="bg-[#ffffff] flex ReviewMainContainer flex-col w-full h-[130vh]">
            <div className="flex R-UP">
                <div className=" w-[80vh] ReviewTextContainer h-[80vh] flex justify-center items-center">
                    <ReviewText />
                </div>
                <div className="TTC w-full h-[80vh] flex justify-center items-center">
                    {isSmallScreen ? <MobileTestimonialCard /> : <TestimonialCard />}
                </div>
            </div>
            <div className="R-DO ">
                <div className="WithUS w-full h-[50vh] flex justify-center items-center">
                    <WithUs />
                </div>
            </div>
        </div>
    )
} 