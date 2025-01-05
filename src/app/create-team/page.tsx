import ProtectedRoute from "@/components/protectedRoutes";
import Stage2 from "./stage2";
import Stage1Skeleton from "../create-profile/stageskeleton";

export default function CreateTeam() {
  return (
    // <ProtectedRoute skeletonComponent={<Stage1Skeleton />}>
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      <Stage2 />
    </main>
    // </ProtectedRoute>
  );
}
