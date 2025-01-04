"use client";

import { useState } from "react";
import Stage1 from "./stage1";
import Stage3 from "./stage3";
import Stage2 from "./stage2";
import Stage4 from "./stage4";

export default function Create() {
  const [stage, setStage] = useState(4); // 1-4

  return (
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      {stage === 1 && <Stage1 setStage={setStage} />}
      {stage === 2 && <Stage2 setStage={setStage} />}
      {stage === 3 && <Stage3 setStage={setStage} />}
      {stage === 4 && <Stage4 setStage={setStage} />}
    </main>
  );
}
