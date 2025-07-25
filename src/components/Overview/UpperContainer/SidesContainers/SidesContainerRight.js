import OverWords from "@/components/Animation/TextAnimations/OverviewText/Overwords"
import SeeMoreButton from "@/components/Animation/Button/SeeMore"
import ScrollFade from "@/components/Animation/ScrollFade"

export default function SideContainersRight() {
  return (
    <div className="w-[50%] OverViewT2 flex flex-col h-full">
      <ScrollFade delay={0.2}>
        <div className="text-[4vh] OverViewWords ml-[5vh] items-center text-[black] flex h-[30vh]">
          <OverWords />
        </div>
      </ScrollFade>

      <ScrollFade delay={0.4}>
        <div className="h-[10vh]  ">
          <div className="ml-[5vh] OverViewButton  h-[8vh] w-[16vh]">
            <SeeMoreButton />
          </div>
        </div>
      </ScrollFade>
    </div>
  )
}
