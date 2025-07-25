"use client";

export default function OverWords3() {
  const lines = [
    'In the book "Healing Trauma Uniting Brain Mind,"',
    'and Body for Lasting Recovery," we delve into the',
    "intricate interplay",
  ];

  return (
    <div className="flex flex-col font-medium  ">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="text-[2vh] ">
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block text-[2.5vh] transition-transform duration-300 hover:-translate-y-1 hover:scale-110 mr-[0.35rem]"
            >
              {word}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
