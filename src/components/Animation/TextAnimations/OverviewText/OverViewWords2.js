"use client";

export default function OverWords2() {
  const lines = [
    "Brain, Mind, and Body the Healing",
    "of Trauma",
    
  ];

  return (
    <div className="flex flex-col font-medium  ">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="text-[2vh] ">
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block text-[4vh] transition-transform duration-300 hover:-translate-y-1 hover:scale-110 mr-[0.35rem]"
            >
              {word}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
