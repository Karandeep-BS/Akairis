'use client'

import "@/components/Animation/Bubbles/Bubbles.css"
import {
  Code,
  Bug,
  GitBranch,
  Terminal,
  Settings,
  FileCode,
  Monitor,
  Server,
  Database,
  Cpu,
  Activity,
  FileText,
  ShieldCheck,
} from "lucide-react"

export default function MBubbles3() {
  const iconColor = "#2d3748"

  const icons = [
    Code,
    Bug,
    GitBranch,
    Terminal,
    Settings,
    FileCode,
    Monitor,
    Server,
    Database,
    Cpu,
    Activity,
    FileText,
    ShieldCheck,
  ]

  // Group icons into arrays of 3
  const groupedIcons = []
  for (let i = 0; i < icons.length; i += 3) {
    groupedIcons.push(icons.slice(i, i + 3))
  }

  return (
    <div className="Bubbles w-full h-[170vh] relative flex flex-col justify-center items-center gap-[4vh]">
      {groupedIcons.map((group, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row justify-center items-center gap-[4vh]"
        >
          {group.map((IconComponent, index) => {
            const size = `${Math.floor(Math.random() * 11 + 5)}vh` // 5–15vh
            const duration = `${(Math.random() * 3 + 2).toFixed(1)}s` // 2–5s
            return (
              <div
                key={index}
                className="ball rounded-full flex justify-center items-center bg-white hover:bg-[#eeeeee] transition-colors"
                style={{
                  height: size,
                  width: size,
                  boxShadow: "-3vh 2vh 6vh rgba(30, 32, 36, 0.15)",
                  animation: `float ${duration} ease-in-out infinite`,
                }}
              >
                <IconComponent color={iconColor} size="36" />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
