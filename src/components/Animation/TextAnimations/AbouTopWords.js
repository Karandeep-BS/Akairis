"use client";

export default function AbouTopWords() {
  const lines = [
    "With over a decade of experience, we specialize in delivering",
    "strategic, future-ready IT solutions to businesses of all sizes. From",
    "modernizing legacy systems to full-scale digital transformation, our",
    "team is committed to driving operational excellence and innovation",
  ];

  return (
    <div className="flex flex-col font-medium  ">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="text-[2vh] ">
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block  text-[3vh] text-[#808080] transition-transform duration-300 hover:-translate-y-1 hover:scale-110 mr-[0.35rem]"
            >
              {word}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
