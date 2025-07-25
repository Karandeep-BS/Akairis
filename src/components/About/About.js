// import ProcessSteps from "../Animation/ProcessSteps/ProcessSteps"
import AbouTop from "./AbouTop"
import AboutButtom from "./AboutButtom"
import "../About/Mobile/About.css"
export default function About(){
    return(
        <div className=" About h-[110vh] bg-[#fafafa] w-full relative">
            {/* <ProcessSteps /> */}
            <AbouTop />
            <AboutButtom />
        </div>
    )
}