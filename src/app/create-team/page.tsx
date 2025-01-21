"use client";
import { useEffect } from "react";

import Stage2 from "./stage2";
import { redirect } from "next/navigation";

export default function CreateTeam() {
  useEffect(() => {
    redirect("/");
  }, []);
  return (
    // <ProtectedRoute skeletonComponent={<Stage1Skeleton />}>
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      <Stage2 />
    </main>
    // </ProtectedRoute>
  );
}
