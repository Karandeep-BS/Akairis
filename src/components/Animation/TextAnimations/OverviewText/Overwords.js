"use client";

export default function OverWords() {
  const lines = [
    "With over a decade of experience, we specialize in delivering",
    "strategic, future-ready IT solutions to businesses of all sizes. From",
    "modernizing legacy systems to full-scale digital transformation, our",

  ];

  return (
    <div className="flex flex-col font-medium  ">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="text-[2vh] ">
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block OverviewWords text-[3vh] text-[#2b2b2b] transition-transform duration-300 hover:-translate-y-1 hover:scale-110 mr-[0.35rem]"
            >
              {word}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
