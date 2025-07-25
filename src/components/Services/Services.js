'use client'

import { useState } from "react"
import ServicesUPtext from "./ServicesUPtext"
import ServicesDowntext from "./ServicesDowntext"
import ServiceTabs from "./ServicesTabs"
// import ServicesButtons from "./ServicesButtons"
import MobileServiceTabs from "./Mobile/MobileServiceTabs"
import useSmallScreen from "../Function/useSmallScreen"
import Bubbles1 from "./Bubbles/Bubbles1"
import Bubbles2 from "./Bubbles/Bubbles2"
import Bubbles3 from "./Bubbles/Bubbles3"
import Bubbles4 from "./Bubbles/Bubbles4"
import MBubbles1 from "./Mobile/MobileBubbles/MBubbles1"
import MBubbles2 from "./Mobile/MobileBubbles/MBubbles2"
import MBubbles3 from "./Mobile/MobileBubbles/MBubbles3"
import MBubbles4 from "./Mobile/MobileBubbles/MBubbles4"
import "../Services/Mobile/Services.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Services() {
  const [activeBubble, setActiveBubble] = useState(0)
  const isSmallScreen = useSmallScreen();

  const renderBubble = () => {
  switch (activeBubble) {
    case 0:
      return isSmallScreen ? <MBubbles1 /> : <Bubbles1 />
    case 1:
      return isSmallScreen ? <MBubbles2 /> : <Bubbles2 />
    case 2:
      return isSmallScreen ? <MBubbles3 /> : <Bubbles3 />
    case 3:
      return isSmallScreen ? <MBubbles4 /> : <Bubbles4 />
    default:
      return <Bubbles1 />
  }
}


  return (
    <div className="services h-[120vh] bg-white relative overflow-hidden">
      <div className="z-10 relative -bg-amber-200 w-auto">
        <ServicesUPtext />
        <ServicesDowntext />
        {isSmallScreen ? <MobileServiceTabs setActiveBubble={setActiveBubble} /> : <ServiceTabs setActiveBubble={setActiveBubble} />}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeBubble}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {renderBubble()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
