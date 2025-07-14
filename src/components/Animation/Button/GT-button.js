import "../Button/Button.css"; // Ensure this import exists in your _app.js or here

export default function GTButton({ text = "Get Started", onClick }) {
  return (
    <div className="animated-border-wrapper w-[18vh] h-[8vh] flex items-center justify-center rounded-[1.4vh]">
      <div
        onClick={onClick}
        className="text-center w-full h-full flex items-center justify-center text-[2.5vh] text-black bg-white rounded-[1vh] cursor-pointer font-medium select-none"
      >
        {text}
      </div>
    </div>
  );
}
