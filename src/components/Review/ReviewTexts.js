'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'
import "../Animation/Scroll.css"

export default function ReviewText() {
  const outerRef = useScrollAnimation({ duration: '1.5s' })
  const innerRef = useScrollAnimation({ duration: '2s' })
  const headingRef = useScrollAnimation({ duration: '2.5s' })
  const subTextRef = useScrollAnimation({ duration: '3s' })

  return (
    <div ref={outerRef} className="fade-start ml-[5vh] TextMain h-[50vh] w-full text-[black] flex justify-center items-center flex-col">
      <div ref={innerRef} className="fade-start">
        <div className=" flex justify-start items-start ">
          <svg className='SVG_QU' xmlns="http://www.w3.org/2000/svg" width="13vh" height="13vh" viewBox="0 0 16 16"><path fill="#b7b7b7" d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/></svg>
        </div>
        <div ref={headingRef} className=" R-text1 fade-start flex justify-end items-start flex-col text-[7.5vh]">
          <span>what they say</span>
          <span>about Akairis</span>
        </div>
        <div ref={subTextRef} className="R-text2 fade-start flex justify-end items-start flex-col text-[3vh]">
          <span>More than 3000 users have been helped</span>
          <span>by World Online Course</span>
        </div>
      </div>
    </div>
  )
}
