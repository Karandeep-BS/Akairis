
export default function Navbar() {
  return (
    <div className="w-full h-[8vh] bg-white Main flex ">
      <div className="Logo w-[10%] text-black h-full ml-5  relative ">
        LOGO
      </div>
{/* --------------------------------------------------------------------------------------- */}
      <div className="Options w-[80%] h-full bg-red-500 relative flex justify-center items-center ">
        {/* ------ */}
        <div className="w-[40vw] h-[5.16vh] flex justify-around items-center text-[2.5vh] bg-amber-400 text-white font-medium ">
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
      <div className="SigUp w-[10%] h-full bg-amber-400 relative">
        sigin in
      </div>
    </div>
  );
}