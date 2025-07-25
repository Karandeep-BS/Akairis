import Logo from "../Animation/TextAnimations/Logo"
import SignUpFreeButton from "../Animation/Button/SignUpFree"
import ScrollFade from "../Animation/ScrollFade" // Make sure path is correct

export default function Navbar() {
  return (
    <ScrollFade delay={0} duration={1.2}>
      <div className="w-full h-[8vh] Main flex">
        {/* =================== Logo =================== */}
        <div className="Logo w-[10%] bg h-full ml-5 flex items-center relative text-[3vh]">
          <Logo />
        </div>

        {/* =================== Navigation Links =================== */}
        <div className="Options w-[80%] h-full relative flex justify-center items-center">
          <div className="w-[40vw] h-[5.16vh] flex justify-around items-center text-[2.5vh] text-white font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <div
                key={item}
                className="relative group cursor-pointer transition-all duration-300 ease-in-out"
              >
                <span className="transition-colors duration-300">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </div>
        </div>

        {/* =================== CTA Button =================== */}
        <SignUpFreeButton />
      </div>
    </ScrollFade>
  )
}
