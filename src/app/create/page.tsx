"use client";

import { useState } from "react";
import Stage1 from "./stage1";

export default function Create() {
  const [state, setState] = useState(1); // 1-4

  return (
    <main className="flex flex-col items-center pt-[10vh] h-screen bg-custom-gradient">
      {state === 1 && <Stage1 />}
      {/* {state === 2 && ()}
        {state === 3 && ()}
        {state === 4 && ()} */}
    </main>
  );
}
