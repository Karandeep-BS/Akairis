'use client'

import { motion } from 'framer-motion'

export default function AboutButtomLeft() {
  const items = [
    {
      title: "Explore",
      desc: ["We uncover needs and opportunities", "through clear insight"]
    },
    {
      title: "Build",
      desc: ["We craft secure , scalable, and user-", "friendly solutions using modern tech"]
    },
    {
      title: "Launch",
      desc: ["We ensure a smooth rollout with", "ongoing support and optimization to ", "fuel continuous growth."]
    }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <div className="abou-Buttom-left w-[50%] h-[60vh] flex justify-center items-center text-black">
      <div className="h-[60vh] w-[70vh] flex">
        
        {/* Timeline icons + lines */}
        <div className="h-[60vh] w-[7vh] flex flex-col items-center">
          {items.map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                className="h-[7vh] w-[7vh] flex justify-center items-center"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 2}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 24 24">
                  <path fill="#B7B7B7" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
                </svg>
              </motion.div>

              {i < items.length - 1 && (
                <motion.div
                  className="h-[13vh] w-[0.5vh] bg-[#1c145c]"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i * 2 + 1}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content Timeline */}
        <div className="bg-[#fafafa] h-[60vh] w-[65vh] flex flex-col overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col">
              <motion.div
                className="h-[7vh] w-full text-[4vh] font-bold flex items-center"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 2}
              >
                {item.title}
              </motion.div>
              <motion.div
                className="h-[13vh] w-full flex flex-col justify-center text-[#353535] text-[2.5vh] pl-[1vh]"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 2 + 1}
              >
                {item.desc.map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
