import Logo from "../Animation/TextAnimations/Logo";
export default function Navbar() {
  return (
    <div className="w-full h-[8vh]  Main flex ">
      <div className="Logo w-[10%] bg h-full ml-5 flex items-center relative text-[3vh]">
         <Logo />
      </div>
{/* --------------------------------------------------------------------------------------- */}
      <div className="Options w-[80%] h-full  relative flex justify-center items-center ">
        {/* ------ */}
        <div className="w-[40vw] h-[5.16vh] flex justify-around items-center text-[2.5vh]  text-white font-medium ">
                    <div className="">
                        Home
                    </div>
                    <div className="">
                        About
                    </div>
                    <div className="">
                        Services
                    </div>
                    <div className="">
                        Contact
                    </div>
                </div>
        {/* ------ */}
      </div>
{/* --------------------------------------------------------------------------------------- */}
      <div className="z-10 mt-[1vh]  bg-white w-[18vh] h-[6vh] flex justify-center text-[2.5vh] items-center rounded-[1vh] text-[black]">
        Sign up
      </div>
    </div>
  );
}