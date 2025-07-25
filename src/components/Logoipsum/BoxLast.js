'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'
import "../Animation/Scroll.css"
import "../Logoipsum/MobileBox/Boxes.css"
export default function BoxLast({ speed = '0.7s' }) {
  const ref = useScrollAnimation({ duration: speed })

  return (
    <div ref={ref} className="fade-start Box w-[30vh]">
      <img
        src="/images/Akairis/Vector-last.svg"
        alt="Akairis Vector"
        className="Boximg w-[30vh] h-[10vh]"
      />
    </div>
  )
}
