import GTButton from "@/components/Animation/Button/GT-button"
export default function MobileHeroInearContainerTop(){
    return(
        <div className="w-full h-[50vh] flex justify-center gap-[4vh] items-center flex-col ">
            <div className=" text-[4.5vh] font-bold ">
                <div className="">Solution That</div>
                <div className="ml-[vh]">Innovation ans</div>
                <div className="ml-[vh]">Growth</div>
            </div>
            <div className=" text-[1.8vh]">
                <div>we empower business with secure, scalable, and</div>
                <div>intelligent IT services from infrastructure and cloud to</div>
                <div>software development and ongoing support</div>
            </div>
            <GTButton />
        </div>
    )
}