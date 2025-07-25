import OverText1 from "./OverText1"
import OverText2 from "./OverText2"
import OverText3 from "./OverText3"
import OverText4 from "./OverText4"
import ScrollFade from "@/components/Animation/ScrollFade"

export default function OverviewTexts() {
  return (
    <div className="ml-[10vh] THEtexts">
      <ScrollFade delay={0.1}><OverText1 /></ScrollFade>
      <ScrollFade delay={0.3}><OverText2 /></ScrollFade>
      <ScrollFade delay={0.5}><OverText3 /></ScrollFade>
      <ScrollFade delay={0.7}><OverText4 /></ScrollFade>
    </div>
  )
}
