'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'
import ReviewButton from "./ReviewButton"
import  useSmallScreen  from "../Function/useSmallScreen"
import MReviewButton from './Mobile/MReviewButton'

export default function WithUs() {
  const isSmallScreen = useSmallScreen();
  const ref = useScrollAnimation({ duration: '0.4s' })
  const inside = useScrollAnimation({duration: '2s'})
  return (
    <div
      ref={ref}
      className="WithUSCode fade-start h-[30vh] w-[80%] flex gap-[25vh] justify-center items-center bg-black rounded-[3vh]"
    >
      <div ref={inside} className="R-B-T fade-start text-[8vh]">Ready to work with us?</div>
        {isSmallScreen ? <MReviewButton /> : <ReviewButton />}  
    </div>
  )
}