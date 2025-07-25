'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../Function/useScrollAnimation'   // ⬅️ added

// =============================[Config: Easy to Modify]===========================//
const cardStyles = {
  padding: 'p-6',
  textSize: 'text-[3vh]',
  titleSize: 'text-[2.5vh]',
  avatarSize: 50,
  bgColor: 'bg-black',
  textColor: 'text-white',
  textSubtle: 'text-gray-400',
  shadow: 'shadow-xl',
  rounded: 'rounded-xl',
  spacing: 'space-y-6',
  fadeDuration: 300, // in ms
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
    quote:
      'The hands‑on projects helped me build confidence in real‑world development.',
    name: 'Ms. Riya',
    title: 'Software Engineer at Codelane',
    image: '/images/Akairis/Info.svg',
  },
  {
    quote:
      'Great mentors and very relevant curriculum. Highly recommend Akairis!',
    name: 'John Doe',
    title: 'CTO at DevHub',
    image: '/images/Akairis/Info.svg',
  },
  {
    quote:
      'An amazing learning experience that bridges the gap between theory and practice.',
    name: 'Anita K.',
    title: 'UX Researcher at Thinkbox',
    image: '/images/Akairis/Info.svg',
  },
]

export default function TestimonialCard({ speed = '2.5s' }) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const ref = useScrollAnimation({ duration: speed })            // ⬅️ added

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
      ref={ref}                                           // ⬅️ added
      className={`fade-start ${cardStyles.bgColor} ${cardStyles.textColor} relative w-[100vh] flex flex-col justify-center px-4 h-[60vh] rounded-[3vh] py-10 ${cardStyles.spacing}`}
    >
      {/* =============================[Heading + Dots]=========================== */}
      <div className="flex justify-between items-center h-[5vh] absolute top-[1vh]">
        <h2 className={`font-bold mr-[70vh] ${cardStyles.titleSize}`}>What they say</h2>
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === index ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* =============================[Testimonial Box]=========================== */}
      <div
        className={`transition-opacity duration-${cardStyles.fadeDuration} ${
          fade ? 'opacity-100' : 'opacity-0'
        } ${cardStyles.bgColor} ${cardStyles.rounded} ${cardStyles.shadow} ${cardStyles.padding}`}
      >
        <p className={`${cardStyles.textSize} h-[20vh] leading-relaxed mb-6`}>
          “{testimonial.quote}”
        </p>

        <div className="flex items-center bottom-[3vh] absolute w-[90vh] justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={cardStyles.avatarSize}
              height={cardStyles.avatarSize}
              className="rounded-full"
            />
            <div className="text-[3vh]">
              <p className="font-bold">{testimonial.name}</p>
              <p className={`text-sm ${cardStyles.textSubtle}`}>{testimonial.title}</p>
            </div>
          </div>

          {/* =============================[Arrow Buttons]=========================== */}
          <div className="flex space-x-2">
            <button
              onClick={prev}
              className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
