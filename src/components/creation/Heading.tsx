import { useEffect, useState } from "react";
import React from "react";

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  const [final, setFinal] = useState<React.ReactNode>(text);

  useEffect(() => {
    const words = text.split(" ");
    const lastWord = words[words.length - 1];
    words[words.length - 1] = `${lastWord}`; // Convert to string first
    setFinal(
      <>
        {words.slice(0, -1).join(" ")}{" "}
        <span className="text-main-orange">{lastWord}</span>
      </>
    );
  }, [text]);

  return (
    <h1 className="text-4xl text-center font-monumentBold text-white">
      {final}
    </h1>
  );
}
