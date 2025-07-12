export default function PersonalisedCards() {
  const cards = [
    {
      img: "/images/headphones.jpg", // replace with your image path
      text: "Personal elements can take many forms in architecture, ranging from cherished belongings",
    },
    {
      img: "/images/building.jpg", // replace with your image path
      text: "Personalisation allows for customisation and adaptation of architectural features to suit.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 h-[25vh] w-full bg-black rounded-xl">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-center bg-black text-white  rounded-xl max-w-md w-full shadow-md"
        >
          <img
            src={card.img}
            alt="card image"
            className="w-[20vh] h-[20vh] object-cover rounded-md bg-amber-400"
          />
          <p className="text-[2vh]">{card.text}</p>
        </div>
      ))}
    </div>
  );
}
