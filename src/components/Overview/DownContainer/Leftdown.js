
import OverWords2 from "@/components/Animation/TextAnimations/OverviewText/OverViewWords2"
import OverWords3 from "@/components/Animation/TextAnimations/OverviewText/OverViewWords3"
import OverviewButton from "@/components/Animation/Button/OverViewButton"
import ScrollFade from "@/components/Animation/ScrollFade"

export default function LeftDownContainer() {
  return (
    <div className="w-[60%] ml-[8vh] rounded-4xl border-y-[0.3vh] border-[0.3vh] border-[#888] flex flex-row h-[60vh]">
      <img
        src="/images/Akairis/Overviewbig.svg"
        className="w-[50%] h-full object-cover rounded-l-[4vh]"
      />
      <div className="w-[50%] h-full rounded-r-[4vh] border-y-[0.3vh]">
        <ScrollFade delay={0.1}>
          <div className="h-[16vh] ml-[2vh] w-full flex items-end gap-[1.5vh] rounded-tr-[4vh]">
            <div className="h-[5vh] w-[15vh] text-[2.5vh] rounded-[3vh] border-[gray] border-[0.1vh] bg-[white] hover:bg-[#bdbdbd] flex justify-center items-center text-[#444444]">Postivity</div>
            <div className="h-[5vh] w-[15vh] text-[2.5vh] rounded-[3vh] border-[gray] border-[0.1vh] bg-[white] hover:bg-[#bdbdbd] flex justify-center items-center text-[#444444]">Thoughts</div>
          </div>
        </ScrollFade>

        <ScrollFade delay={0.3}>
          <div className="h-[16vh] ml-[2vh] flex items-center text-[black] w-full">
            <OverWords2 />
          </div>
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <div className="h-[18vh] ml-[2vh] flex items-center text-[black] w-full">
            <OverWords3 />
          </div>
        </ScrollFade>

        <ScrollFade delay={0.7}>
          <div className="h-[10vh] ml-[2vh] w-full  rounded-br-[4vh]">
            <OverviewButton />
          </div>
        </ScrollFade>
      </div>
    </div>
  )
}
