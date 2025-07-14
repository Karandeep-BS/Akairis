'use client'

import { useState } from 'react'

const tabs = [
  "IT Infrastructure",
  "Cloud Solutions",
  "Software Development",
  "Managed Services",
]

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="flex gap-4 p-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-300
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
