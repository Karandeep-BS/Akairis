'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'
import "../Animation/Scroll.css"
import "../Logoipsum/MobileBox/Boxes.css"
export default function Box2() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="fade-start  Box w-[30vh]">
      <img
        src="/images/Akairis/Vector-2.svg"
        alt="Akairis Vector"
        className="Boximg w-[30vh] h-[10vh]"
      />
    </div>
  )
}
