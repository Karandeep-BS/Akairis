"use client";

export default function AnimatedTextBlock() {
  const lines = [
    "we empower business with secure, scalable, and",
    "intelligent IT services from infrastructure and cloud to",
    "software development and ongoing support",
  ];

  return (
    <div className="flex flex-col font-medium ">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="text-[2vh] ">
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-110 mr-[0.35rem]"
            >
              {word}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
