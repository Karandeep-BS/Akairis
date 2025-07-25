'use client'

import { useScrollAnimation } from '@/components/Function/useScrollAnimation'
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function MFooter() {
  const leftRef = useScrollAnimation({ duration: '2s' })
  const rightRef = useScrollAnimation({ duration: '2s' })
  const navRef = useScrollAnimation({ duration: '4s' })
  const licenceRef = useScrollAnimation({ duration: '3s' })
  const contactRef = useScrollAnimation({ duration: '2s' })

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 px-4 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* =============================[Left Section]=========================== */}
        <div ref={leftRef} className="fade-start w-full md:w-1/2">
          <h2 className="text-[4vh] md:text-[5vh] font-bold text-black mb-3">Akairis</h2>
          <p className="text-[2vh] leading-relaxed flex flex-col text-gray-500">
            <span>We offer a comprehensive suite of digital marketing services that cover all aspects of your online presence.</span>
            <span>From SEO and social media marketing to content creation and PPC advertising,</span>
            <span>we have the expertise and resources to handle your diverse marketing needs.</span>
          </p>
          <div className="flex mt-4 justify-start space-x-4 text-gray-400">
            <Facebook className="w-[3vh] h-[3vh] hover:text-black cursor-pointer" />
            <Linkedin className="w-[3vh] h-[3vh] hover:text-black cursor-pointer" />
            <Instagram className="w-[3vh] h-[3vh] hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* =============================[Right Section]=========================== */}
        <div
          ref={rightRef}
          className="fade-start w-full md:w-1/2 flex flex-row sm:flex-row justify-start gap-6"
        >
          {/* Navigation */}
          <div ref={navRef} className="fade-start text-center sm:text-left">
            <h3 className="font-semibold text-black mb-[2vh] text-[2.5vh]">Navigation</h3>
            <ul className="space-y-2 flex items-start flex-col text-[2vh]">
              <li>Service</li>
              <li>Agency</li>
              <li>Case Study</li>
              <li>Resource</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Licence */}
          <div ref={licenceRef} className="fade-start text-center sm:text-left">
            <h3 className="font-semibold text-black mb-[2vh] text-[2.5vh]">Licence</h3>
            <ul className="space-y-2 flex items-start flex-col text-[2vh]">
              <li>Privacy Policy</li>
              <li>Copyright</li>
              <li>Email Address</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="fade-start text-center sm:text-left">
            <h3 className="font-semibold text-black mb-[2vh] text-[2.5vh]">Contact</h3>
            <ul className="space-y-3 text-[2vh]">
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="w-[3vh] h-[3vh]" />
                <span>(406) 555-0120</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="w-[3vh] h-[3vh]" />
                <span>abc@c.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin className="w-[3vh] h-[3vh]" />
                <span>2972, Mohali, India 85486</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
