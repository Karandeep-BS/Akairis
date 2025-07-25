'use client'
import { useScrollAnimation } from '../Function/useScrollAnimation'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactInfo() {
  const ref = useScrollAnimation({ duration: '2s' }) // you can adjust this to '3s', etc.

  return (
    <div ref={ref} className="fade-start">
      <h3 className="font-semibold text-black mb-[2vh] text-[2.5vh]">Contact</h3>
      <ul className="space-y-3 text-[2vh]">
        <li className="flex items-center space-x-2">
          <Phone className="w-[3vh] h-[3vh]" />
          <span>(406) 555-0120</span>
        </li>
        <li className="flex items-center space-x-2">
          <Mail className="w-[3vh] h-[3vh]" />
          <span>abc@c.com</span>
        </li>
        <li className="flex items-center space-x-2">
          <MapPin className="w-[3vh] h-[3vh]" />
          <span>2972, Mohali, India 85486</span>
        </li>
      </ul>
    </div>
  )
}
