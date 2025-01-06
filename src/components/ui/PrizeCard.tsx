interface PrizeCardProps {
  idx: number;
  position: string;
  content: string;
  prizeMoney: string;
}

export default function PrizeCard({
  idx,
  position,
  content,
  prizeMoney,
}: PrizeCardProps) {
  return (
    <div className="p-5 border border-black bg-slate-200 w-64 min-h-64 md:w-96 md:min-h-64 sm:backdrop-blur-md bg-opacity-20 relative flex items-center flex-col justify-center shadow-xl">
      <div className="absolute right-3 top-0 bg-white size-8 flex items-center justify-center -translate-y-1/4 border border-black">
        {idx}
      </div>
      <h1 className="text-white text-wrap md:text-3xl text-xl text-center uppercase">
        <span className="text-main-orange">{position}</span>
      </h1>
      <div className="h-px bg-main-orange w-2/3 mx-auto my-4" />
      <p className="text-sm mb-4 text-center">{content}</p>
      <h2 className="md:text-3xl text-xl">{prizeMoney}</h2>
    </div>
  );
}
