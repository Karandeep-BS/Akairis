'use client'

import "@/components/Animation/Bubbles/Bubbles.css"
import {
  Code2,
  GitBranch,
  Bug,
  TerminalSquare,
  FileCode2,
  Puzzle,
  Squirrel,
  Wrench,
  Layers,
  Cpu,
  Package2,
  Braces,
} from "lucide-react"

export default function Bubbles3() {
  const iconColor = "gray" // Easily change icon color here

  const bubbles = [
    { height: "15vh", width: "15vh", bottom: "10vh", left: "5vh", duration: "3.2s", icon: Code2 },
    { height: "15vh", width: "15vh", bottom: "3vh", left: "40vh", duration: "3.4s", icon: GitBranch },
    { height: "15vh", width: "15vh", bottom: "30vh", left: "50vh", duration: "2.3s", icon: Bug },
    { height: "15vh", width: "15vh", bottom: "11vh", left: "70vh", duration: "3.2s", icon: TerminalSquare },
    { height: "15vh", width: "15vh", bottom: "26vh", left: "90vh", duration: "2.7s", icon: FileCode2 },
    { height: "15vh", width: "15vh", bottom: "30vh", left: "110vh", duration: "5.5s", icon: Puzzle },
    { height: "15vh", width: "15vh", bottom: "50vh", left: "130vh", duration: "4.1s", icon: Squirrel },
    { height: "15vh", width: "15vh", bottom: "34vh", left: "170vh", duration: "2.5s", icon: Wrench },
    { height: "15vh", width: "15vh", bottom: "3vh", left: "130vh", duration: "4.2s", icon: Layers },
    { height: "25vh", width: "25vh", bottom: "3vh", left: "100vh", duration: "3.8s", icon: Cpu },
    { height: "25vh", width: "25vh", bottom: "23vh", left: "135vh", duration: "4.5s", icon: Package2 },
    { height: "25vh", width: "25vh", bottom: "55vh", left: "160vh", duration: "3.3s", icon: Braces },
  ]

  return (
    <div className="Bubbles w-full h-[110vh] absolute top-0">
      {bubbles.map((bubble, index) => {
        const IconComponent = bubble.icon
        return (
          <div
            key={index}
            className="ball absolute rounded-full flex justify-center items-center overflow-hidden bg-white hover:bg-[#eeeeee] transition-colors"
            style={{
              height: bubble.height,
              width: bubble.width,
              bottom: bubble.bottom,
              left: bubble.left,
              boxShadow: "-3vh 2vh 6vh rgba(30, 32, 36, 0.15)",
              animation: `float ${bubble.duration} ease-in-out infinite`,
            }}
          >
            <IconComponent color={iconColor} size="36" />
          </div>
        )
      })}
    </div>
  )
}
