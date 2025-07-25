'use client'

import { useState } from 'react'

const tabs = [
  "IT Infrastructure",
  "Cloud Solutions",
  "Software Development",
  "Managed Services",
]

export default function ServiceTabs({ setActiveBubble }) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleClick = (tab, index) => {
    setActiveTab(tab)
    setActiveBubble(index) // ⬅️ Only control bubble index now
  }

  return (
    <div className="ml-[10vh] buttonContainer h-[12vh] w-[114vh] flex gap-[2vh] p-[2vh]">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => handleClick(tab, index)}
          className={`BB-${index + 1} button px-4 py-2 h-[6vh] rounded-md text-[2.4vh] font-medium border transition-all duration-300
            ${activeTab === tab 
              ? 'bg-black text-white border-black' 
              : 'bg-white text-black border-gray-300 hover:border-black'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
