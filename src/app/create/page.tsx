"use client";

import { useState } from "react";
import Stage1 from "./stage1";
import Stage2 from "./stage2";

export default function Create() {
  const [stage, setStage] = useState(2); // 1-4

  return (
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      {stage === 1 && <Stage1 setStage={setStage} />}
      {stage === 2 && <Stage2 setStage={setStage} />}
      {/* {state === 3 && ()}
        {state === 4 && ()} */}
    </main>
  );
}
