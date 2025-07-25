'use client'

import { useState } from 'react'

const tabs = [
  "IT Infrastructure",
  "Cloud Solutions",
  "Software Development",
  "Managed Services",
]

export default function MobileServiceTabs({ setActiveBubble }) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleClick = (tab, index) => {
    setActiveTab(tab)
    setActiveBubble(index)
  }

  return (
    <div className="flex -bg-pink-600 flex-col w-full items-center gap-[1.5vh] px-[2vh] py-[2vh]">
      {/* =============================[Row 1] ===========================*/}
      <div className="flex w-full justify-center gap-[2vh]">
        {tabs.slice(0, 2).map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleClick(tab, index)}
            className={`BB-${index + 1}  w-[40vw] h-[6vh] px-4 py-2 text-[2vh] rounded-[1vh] font-medium border transition-all duration-300
              ${activeTab === tab
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* =============================[Row 2] ===========================*/}
      <div className="flex w-full justify-center gap-[2vh]">
        {tabs.slice(2, 4).map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleClick(tab, index + 2)}
            className={`BB-${index + 3} w-[40vw] h-[6vh] px-4 py-2 text-[2vh] rounded-[1vh] font-medium border transition-all duration-300
              ${activeTab === tab
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
