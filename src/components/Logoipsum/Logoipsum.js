import Box1 from "./Box1"
import Box2 from "./Box2"
import Box3 from "./Box3"
import Box4 from "./Box4"
import BoxFirst from "./BoxFirst"
import BoxLast from "./BoxLast"
import "../Logoipsum/MobileBox/Boxes.css"
// import Box5 from "./Box5"
export default function Logoipsum(){
    return(
        <div className="logoipsum logoipsum-marquee h-[30vh] bg-white w-full relative  flex justify-between items-center ">
            <BoxFirst />
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
            <BoxLast />
        </div>
    )
}