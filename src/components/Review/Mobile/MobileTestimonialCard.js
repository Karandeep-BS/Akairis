'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '@/components/Function/useScrollAnimation'

// =============================[Mobile Config]===========================//
const cardStyles = {
  padding: 'p-4',
  textSize: 'text-[2.2vh]',
  titleSize: 'text-[2vh]',
  avatarSize: 40,
  bgColor: 'bg-black',
  textColor: 'text-white',
  textSubtle: 'text-gray-400',
  shadow: 'shadow-lg',
  rounded: 'rounded-2xl',
  spacing: 'space-y-4',
  fadeDuration: 300,
}

const testimonials = [
  {
    quote:
      'Studying at Akairis is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.',
    name: 'Mr. Mahvi',
    title: 'Product Designer at Ellocent',
    image: '/images/Akairis/Info.svg',
  },
  {
    quote: 'The hands‑on projects helped me build confidence in real‑world development.',
    name: 'Ms. Riya',
    title: 'Software Engineer at Codelane',
    image: '/images/Akairis/Info.svg',
  },
  {
    quote: 'Great mentors and very relevant curriculum. Highly recommend Akairis!',
    name: 'John Doe',
    title: 'CTO at DevHub',
    image: '/images/Akairis/Info.svg',
  },
  {
    quote: 'An amazing learning experience that bridges the gap between theory and practice.',
    name: 'Anita K.',
    title: 'UX Researcher at Thinkbox',
    image: '/images/Akairis/Info.svg',
  },
]

export default function MobileTestimonialCard({ speed = '2.5s' }) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const ref = useScrollAnimation({ duration: speed })

  const prev = () => {
    setFade(false)
    setTimeout(() => {
      setIndex((index - 1 + testimonials.length) % testimonials.length)
      setFade(true)
    }, cardStyles.fadeDuration)
  }

  const next = () => {
    setFade(false)
    setTimeout(() => {
      setIndex((index + 1) % testimonials.length)
      setFade(true)
    }, cardStyles.fadeDuration)
  }

  const testimonial = testimonials[index]

  return (
    <div
      ref={ref}
      className={`fade-start ${cardStyles.bgColor} ${cardStyles.textColor} w-[90vw] mx-auto h-[45vh] flex flex-col justify-between relative ${cardStyles.rounded} ${cardStyles.spacing} ${cardStyles.shadow} overflow-hidden`}
    >
      {/* ==================[Top Bar: Title + Dots]================== */}
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className={`font-bold ${cardStyles.titleSize}`}>What they say</h2>
        <div className="flex space-x-1">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === index ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ==================[Quote Box]================== */}
      <div
        className={` -bg-amber-700 transition-opacity duration-${cardStyles.fadeDuration} ${
          fade ? 'opacity-100' : 'opacity-0'
        } px-4 ${cardStyles.padding}`}
      >
        <p className={`${cardStyles.textSize} h-[22vh] -bg-amber-300 leading-relaxed`}>
          “{testimonial.quote}”
        </p>
      </div>

      {/* ==================[Bottom: Avatar + Arrows]================== */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center space-x-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={cardStyles.avatarSize}
            height={cardStyles.avatarSize}
            className="rounded-full"
          />
          <div className="text-[2vh]">
            <p className="font-bold">{testimonial.name}</p>
            <p className={`${cardStyles.textSubtle} text-sm`}>{testimonial.title}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={prev}
            className="border border-white rounded-full p-1.5 hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="border border-white rounded-full p-1.5 hover:bg-white hover:text-black transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
