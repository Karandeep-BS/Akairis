'use client'

import Box1 from "./Box1"
import Box2 from "./Box2"
import Box3 from "./Box3"
import Box4 from "./Box4"
import BoxFirst from "./BoxFirst"
import BoxLast from "./BoxLast"
import "../Logoipsum/Animation.css"

export default function Logoipsum() {
  const boxComponents = [
    <BoxFirst key="first" />,
    <Box1 key="1" />,
    <Box2 key="2" />,
    <Box3 key="3" />,
    <Box4 key="4" />,
    <BoxLast key="last" />
  ];

  return (
    <div className="D-logoipsum-container w-full h-[30vh] overflow-hidden flex justify-between items-center bg-[#fffefe] relative">
      <div className="logoipsum D-logoipsum-marquee flex w-max ">
        {[...boxComponents, ...boxComponents].map((Component, i) => (
          <div key={i} className="flex justify-center items-center ml-[3vh] mr-[3vh] -bg-pink-400">
            {Component}
          </div>
        ))}
      </div>
    </div>
  )
}
