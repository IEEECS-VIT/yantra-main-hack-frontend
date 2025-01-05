"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Stage1 from "./stage1";
import Stage2 from "../create-team/stage2";
import Stage3 from "./stage3";
import Stage4 from "./stage4";
import ProtectedRoute from "@/components/protectedRoutes";
import Stage1Skeleton from "./stageskeleton";

export default function CreateProfile() {
  const searchParams = useSearchParams();
  const givenStage = Number(searchParams.get("currStage")); // Safely parse Givenstage from URL
  const getDefaultStage = () =>
    givenStage >= 1 && givenStage <= 4 ? givenStage : 1;

  const [stage, setStage] = useState(getDefaultStage);
  const [teamSize, setTeamSize] = useState(3);

  useEffect(() => {
    console.log(`Current Stage: ${stage}`);
  }, [stage]);

  return (
    <ProtectedRoute skeletonComponent={<Stage1Skeleton />}>
      <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
        {stage === 1 && <Stage1 setStage={setStage} />}
      </main>
    </ProtectedRoute>
  );
}
