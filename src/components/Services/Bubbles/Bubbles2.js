'use client'

import "@/components/Animation/Bubbles/Bubbles.css"
import {
  Cloud,
  CloudRain,
  CloudSun,
  UploadCloud,
  DownloadCloud,
  CloudCog,
  Server,
  Network,
  ShieldCheck,
  Link2,
  RefreshCw,
  HardDrive,
} from "lucide-react"

export default function Bubbles2() {
  const iconColor = "#3182ce" // Cloud blue - easy to change

  const bubbles = [
    { height: "15vh", width: "15vh", bottom: "10vh", left: "5vh", duration: "3.2s", icon: Cloud },
    { height: "15vh", width: "15vh", bottom: "3vh", left: "40vh", duration: "3.4s", icon: CloudRain },
    { height: "15vh", width: "15vh", bottom: "30vh", left: "50vh", duration: "2.3s", icon: CloudSun },
    { height: "15vh", width: "15vh", bottom: "11vh", left: "70vh", duration: "3.2s", icon: UploadCloud },
    { height: "15vh", width: "15vh", bottom: "26vh", left: "90vh", duration: "2.7s", icon: DownloadCloud },
    { height: "15vh", width: "15vh", bottom: "30vh", left: "110vh", duration: "5.5s", icon: CloudCog },
    { height: "15vh", width: "15vh", bottom: "50vh", left: "130vh", duration: "4.1s", icon: Server },
    { height: "15vh", width: "15vh", bottom: "34vh", left: "170vh", duration: "2.5s", icon: Network },
    { height: "15vh", width: "15vh", bottom: "3vh", left: "130vh", duration: "4.2s", icon: ShieldCheck },
    { height: "25vh", width: "25vh", bottom: "3vh", left: "100vh", duration: "3.8s", icon: Link2 },
    { height: "25vh", width: "25vh", bottom: "23vh", left: "135vh", duration: "4.5s", icon: RefreshCw },
    { height: "25vh", width: "25vh", bottom: "55vh", left: "160vh", duration: "3.3s", icon: HardDrive },
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
