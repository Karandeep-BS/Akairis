export default function HeroInearContainerTopRight() {
  return (
    <div className="hero-inear-container-right relative w-[20%] flex flex-col justify-end items-end h-[50vh] bg-amber-800-100">
      <div className="w-[10vh] h-[17vh] flex flex-col items-center justify-between">
        {/* Facebook Icon */}
        <div className="group hover:bg-white transition-colors duration-500 border-white border-solid border-[0.2vh] h-[5vh] w-[5vh] rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.5vh"
            height="3.5vh"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-white group-hover:fill-black transition-colors duration-500"
              d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
            />
          </svg>
        </div>

        {/* Instagram Icon */}
        <div className="group border-white border-solid border-[0.2vh] h-[5vh] w-[5vh] rounded-full flex justify-center items-center hover:bg-white transition-colors duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="3.5vh" height="3.5vh" viewBox="0 0 24 24">
              <g fill="none">
                <path
                  className="stroke-white group-hover:stroke-black transition-colors duration-500"
                  strokeWidth="2"
                  d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                />
                <circle
                  cx="16.5"
                  cy="7.5"
                  r="1.5"
                  className="fill-white group-hover:fill-black transition-colors duration-500"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  className="stroke-white group-hover:stroke-black transition-colors duration-500"
                  strokeWidth="2"
                />
              </g>
            </svg>
        </div>


        {/* Twitter / Custom Icon */}
        <div className="group hover:bg-white transition-colors duration-500 border-white border-solid border-[0.2vh] h-[5vh] w-[5vh] rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.5vh"
            height="3.5vh"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-white group-hover:fill-black transition-colors duration-500"
              d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
