"use client";

import { useState } from "react";
import Stage1 from "./stage1";

export default function Create() {
  const [stage, setStage] = useState(1); // 1-4

  return (
    <main className="flex flex-col items-center h-screen bg-custom-gradient">
      {stage === 1 && <Stage1 setStage={setStage} />}
      {/* {state === 2 && ()}
        {state === 3 && ()}
        {state === 4 && ()} */}
    </main>
  );
}
