'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'

export default function LicenceLinks({ speed = '3s' }) {
  const ref = useScrollAnimation({ duration: speed })

  return (
    <div ref={ref} className="fade-start">
      <h3 className="font-semibold text-black mb-[2vh] text-[2.5vh]">Licence</h3>
      <ul className="space-y-2 text-[2vh]">
        <li>Privacy Policy</li>
        <li>Copyright</li>
        <li>Email Address</li>
      </ul>
    </div>
  )
}
