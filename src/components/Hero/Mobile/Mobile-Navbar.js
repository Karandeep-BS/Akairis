'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import SignUpFreeButton from '@/components/Animation/Button/SignUpFree'

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  const navItems = ['Home', 'About', 'Services', 'Contact']

  return (
    <div className="w-full h-[8vh] flex items-center justify-between px-4 z-50 relative bg-transparent">
      {/* Logo */}
      <div className="text-[3vh] text-white font-bold">Logo</div>

      {/* Hamburger Menu Button */}
      <button onClick={() => setOpen(!open)} className="z-50">
        {open ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
      </button>

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70vw] bg-[#1a1a1a] text-white transform transition-transform duration-300 ease-in-out z-40 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-6 pt-[10vh] space-y-6 text-[2.5vh]">
          {navItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer hover:text-gray-400"
              onClick={() => setOpen(false)}
            >
              {item}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <div className="mt-8 w-full">
            <SignUpFreeButton />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  )
}
