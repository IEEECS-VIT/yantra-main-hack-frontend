"use client";

import { useState, useEffect } from "react";
import Stage1 from "./stage1";
import Stage2 from "./stage2";
import Stage3 from "./stage3";
import Stage4 from "./stage4";
import ProtectedRoute from "@/components/protectedRoutes";
import Stage1Skeleton from "./stageskeleton";

export default function Create() {
  const [stage, setStage] = useState(1);
  const [teamSize, setTeamSize] = useState(3);

  useEffect(() => {
    console.log(`Current Stage: ${stage}`);
  }, [stage]);

  return (
    <ProtectedRoute skeletonComponent={<Stage1Skeleton />}>
      <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
        {stage === 1 && <Stage1 />}
        {stage === 2 && (
          <Stage2 setStage={setStage} setTeamSizes={setTeamSize} />
        )}
        {stage === 3 && <Stage3 teamSize={teamSize} />}
        {stage === 4 && <Stage4 setStage={setStage} />}
      </main>
    </ProtectedRoute>
  );
}
