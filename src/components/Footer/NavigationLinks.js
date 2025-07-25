'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'

export default function NavigationLinks({ speed = '4s' }) {
  const ref = useScrollAnimation({ duration: speed })

  return (
    <div ref={ref} className="fade-start">
      <h3 className="font-semibold text-black mb-[2vh] text-[2.5vh]">Navigation</h3>
      <ul className="space-y-2 text-[2vh]">
        <li>Service</li>
        <li>Agency</li>
        <li>Case Study</li>
        <li>Resource</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
