import SideContainersLeft from "./SidesContainers/SidesContainerLeft"
import SideContainersRight from "./SidesContainers/SidesContainerRight"

export default function OverviewUpperContainer(){
    return (
        <div className="OverViewUp w-full h-[50vh] flex bg-[#ffffff]">
            <SideContainersLeft />
            <SideContainersRight />
        </div>
    )
}