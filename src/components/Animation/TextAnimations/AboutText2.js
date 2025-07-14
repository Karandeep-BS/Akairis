"use client";

export default function AboutText2() {
  const text = "Dreams into Reality";
  const letters = [...text]; // Spread to preserve spaces too

  return (
    <div className="">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-300 hover:-translate-y-3 hover:scale-125 "
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
