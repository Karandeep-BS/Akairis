import ServicesUPtext from "./ServicesUPtext"
import ServicesDowntext from "./ServicesDowntext"
import ServicesButtons from "./ServicesButtons"
export default function Services(){
    return(
        <div className="services h-[200vh] bg-amber-700">
            <ServicesUPtext />
            <ServicesDowntext />
            <ServicesButtons />
        </div>
    )
}