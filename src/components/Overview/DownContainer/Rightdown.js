import ScrollFade from "@/components/Animation/ScrollFade"

export default function RightDownContainer() {
  return (
    <div className="w-[30%] rounded-4xl flex flex-col text-[black] border-[0.3vh] border-[#555] h-[60vh] p-[4vh]">
      <div className="w-full h-[10vh] text-[4vh] text-[black] flex items-center">
        Related Book
      </div>

      <ScrollFade delay={0.1}>
        <div className="w-full h-[16.6vh] flex hover:bg-[#ebebeb] border-[#888] border-y-[0.2vh]">
          <div className="w-[20vh] h-full flex justify-center items-center">
            <img src="/images/Akairis/Overview1.svg" className="w-[12vh] h-full" />
          </div>
          <div className="w-full h-full ml-[2vh] flex flex-col justify-center text-[3vh]">
            <span>The hidden Source of Love</span>
            <span>and Achievement</span>
          </div>
        </div>
      </ScrollFade>

      <ScrollFade delay={0.3}>
        <div className="w-full h-[16.6vh] hover:bg-[#ebebeb] flex">
          <div className="w-[20vh] flex justify-center items-center h-full">
            <img src="/images/Akairis/Overview2.svg" className="w-[12vh] h-full" />
          </div>
          <div className="w-full h-full ml-[2vh] flex flex-col justify-center text-[3vh]">
            <span>12 Revolutionary Strategies</span>
            <span>Child's Developing</span>
          </div>
        </div>
      </ScrollFade>

      <ScrollFade delay={0.5}>
        <div className="w-full h-[16.6vh] flex hover:bg-[#ebebeb] border-[#888] border-y-[0.2vh]">
          <div className="w-[20vh] flex justify-center items-center h-full">
            <img src="/images/Akairis/Overview3.svg" className="w-[12vh] h-full" />
          </div>
          <div className="w-full h-full ml-[2vh] flex flex-col justify-center text-[3vh]">
            <span>The Power of Passion and</span>
            <span>Perverance</span>
          </div>
        </div>
      </ScrollFade>
    </div>
  )
}
