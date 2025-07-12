"use client";

export default function Logo() {
  const letters = ["L", "O", "G", "O"];

  return (
    <div>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-300 hover:-translate-y-3 hover:scale-125 "
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
