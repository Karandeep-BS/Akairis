'use client'
// import Box1 from "./Box1"
// import Box2 from "./Box2"
// import Box3 from "./Box3"
// import Box4 from "./Box4"
// import BoxFirst from "./BoxFirst"
// import BoxLast from "./BoxLast"
// import Box5 from "./Box5"
import "../MobileBox/Boxes.css"

export default function MLogoipsum() {
  return (
    <div className="logoipsum-container overflow-hidden  w-full relative">
      <div className="logoipsum-marquee flex w-max  animate-marquee">
        {/* =================== First Set =================== */}
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex justify-between w-[220vh] ">
              <div className="flex justify-center items-center h-[20vh] w-[30vh]">
                <img
                  src="/images/Akairis/Vector-First.svg"
                  alt="Akairis Vector"
                  className="Boximg w-[30vh] h-[10vh]"
                />
              </div>
              <div className="flex justify-center items-center h-[20vh] w-[30vh]">
                <img
                  src="/images/Akairis/Vector-1.svg"
                  alt="Akairis Vector"
                  className="Boximg w-[30vh] h-[10vh]"
                />
              </div>
              <div className="flex justify-center items-center h-[20vh] w-[30vh]">
                <img
                  src="/images/Akairis/Vector-2.svg"
                  alt="Akairis Vector"
                  className="Boximg w-[30vh] h-[10vh]"
                />
              </div>
              <div className="flex justify-center items-center h-[20vh] w-[30vh]">
                <img
                  src="/images/Akairis/Vector-3.svg"
                  alt="Akairis Vector"
                  className="Boximg w-[30vh] h-[10vh]"
                />
              </div>
              <div className="flex justify-center items-center h-[20vh] w-[30vh]">
                <img
                  src="/images/Akairis/Vector-4.svg"
                  alt="Akairis Vector"
                  className="Boximg w-[30vh] h-[10vh]"
                />
              </div>
              <div className="flex justify-center  mr-[6vh] items-center h-[20vh] w-[30vh]">
                <img
                  src="/images/Akairis/Vector-last.svg"
                  alt="Akairis Vector"
                  className="Boximg w-[30vh] h-[10vh]"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
