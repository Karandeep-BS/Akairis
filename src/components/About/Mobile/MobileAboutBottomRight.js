'use client'
import { motion } from 'framer-motion'

export default function MobileAboutBottomRight() {
  return (
    <motion.div
      className=" bg-amber-600 rounded-full h-[40vh]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative w-[40vh] h-[40vh]">
        <img 
          src="/images/Akairis/Frame1.svg"
          alt="Frame 1"
          className="w-full h-full  rounded-[4vh] object-cover"
        />
      </div>
    </motion.div>
  )
}
