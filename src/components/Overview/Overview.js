import { dimensionValueTypes } from "framer-motion";
import OverviewUpperContainer from "./UpperContainer/OverviewupperContainer";
import OverviewDownContainer from "./DownContainer/OverviewdownContainer";
import "../Overview/Mobile/OverView.css"
export default function Overview(){
    return (
        <div className="w-full OverView h-[110vh] flex flex-col bg-amber-300">
            <OverviewUpperContainer />
            <OverviewDownContainer />
        </div>
    )
}