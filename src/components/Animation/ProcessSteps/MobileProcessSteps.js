'use client'
import { motion } from 'framer-motion'
import "../ProcessSteps/ProcessSteps.css"

export default function MobileProgressSteps() {
  const steps = [
    {
      number: <img src="/images/Akairis/tick-svgrepo-com.svg" alt="Step 1" className="w-[4vh] h-[4vh]" />,
      heading: "Explore",
      content: ["We uncover needs and opportunities", "through clear insight"],
      color: "",
    },
    {
      number: <img src="/images/Akairis/tick-svgrepo-com.svg" alt="Step 2" className="w-[4vh] h-[4vh]" />,
      heading: "Build",
      content: ["We craft secure, scalable,", "and user-friendly solutions"],
      color: "",
    },
    {
      number: <img src="/images/Akairis/tick-svgrepo-com.svg" alt="Step 3" className="w-[4vh] h-[4vh]" />,
      heading: "Launch",
      content: ["We ensure a smooth rollout", "with ongoing support"],
      color: "",
    },
  ]

  return (
    <div className="mobile-progress-container flex flex-col h-[60vh] overflow-hidden scroll-smooth px-2">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="mobile-step-group flex flex-row w-full h-[15vh]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* Left: Step Block & Line */}
          <div className="mobile-wraps-L h-[30vh] flex flex-col">
            <div className={`mobile-step ${step.color} w-[5vh] h-[5vh] flex items-center justify-center text-white`}>
              <div className="mobile-step-block rounded-full w-[3vh] h-[3vh] bg-[gray] flex items-center justify-center text-white">
                {step.number}
              </div>
            </div>
            <div className="mobile-step-line h-[10vh] flex items-center justify-center text-white">
              <div className="mobile-step-line-block w-[0.4vh] h-[10vh] bg-black" />
            </div>
          </div>

          {/* Right: Heading & Content */}
          <div className="mobile-wraps-R h-[30vh] flex flex-col">
            <div className="mobile-step-Heading w-[50vw] h-[10vh] flex items-center justify-center text-[black]">
              {step.heading}
            </div>
            <div className="mobile-step-Contents h-[20vh] w-[50vh] flex flex-col text-[#9b9b9b]">
              {step.content.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
