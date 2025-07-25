import LeftDownContainer from "./Leftdown"
import RightDownContainer from "./Rightdown"
export default function OverviewDownContainer(){
    return (
        <div className="w-full OverViewDown h-[60vh] flex flex-row gap-[4vh] bg-[white]">
            <LeftDownContainer />
            <RightDownContainer />
        </div>
    )
}