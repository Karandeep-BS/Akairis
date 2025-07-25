'use client'
import { Facebook, Linkedin, Instagram } from 'lucide-react'
import { useScrollAnimation } from '../Function/useScrollAnimation'

export default function LeftContainer({ width, padding }) {
  const ref = useScrollAnimation({ duration: '2s' }) // Change '2s' to any custom duration

  return (
    <div ref={ref} className={`fade-start ${width}`}>
      <h2 className="text-[5vh] font-bold text-black mb-3">Akairis</h2>
      <p className="text-[2vh] leading-relaxed flex flex-col text-gray-500">
        <span>We offer a comprehensive suite of digital marketing services that cover all aspects of our online presence.</span>
        <span>From SEO and social media marketing to content creation and PPC advertising,</span>
        <span>they have the expertise and resources to handle our diverse marketing needs.</span>
      </p>
      <div className="flex mt-4 space-x-4 text-gray-400">
        <Facebook className="w-[3vh] h-[3vh] hover:text-black cursor-pointer" />
        <Linkedin className="w-[3vh] h-[3vh] hover:text-black cursor-pointer" />
        <Instagram className="w-[3vh] h-[3vh] hover:text-black cursor-pointer" />
      </div>
    </div>
  )
}
