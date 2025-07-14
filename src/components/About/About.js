// import ProcessSteps from "../Animation/ProcessSteps/ProcessSteps"
import AbouTop from "./AbouTop"
import AboutButtom from "./AboutButtom"

export default function About(){
    return(
        <div className=" h-[110vh] bg-[#fafafa] w-full relative">
            {/* <ProcessSteps /> */}
            <AbouTop />
            <AboutButtom />
        </div>
    )
}