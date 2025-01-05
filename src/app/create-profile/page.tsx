"use client";

import { useState, useEffect } from "react";
import Stage1 from "./stage1";
import ProtectedRoute from "@/components/protectedRoutes";
import Stage1Skeleton from "./stageskeleton";

export default function CreateProfile() {
  const [stage, setStage] = useState(1);


  return (
    <ProtectedRoute skeletonComponent={<Stage1Skeleton />}>
      <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
        {stage === 1 && <Stage1 />}
      </main>
    </ProtectedRoute>
  );
}
