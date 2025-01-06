import Stage2 from "./stage2";

export default function CreateTeam() {
  return (
    // <ProtectedRoute skeletonComponent={<Stage1Skeleton />}>
    <main className="flex flex-col items-center min-h-screen bg-custom-gradient">
      <Stage2 />
    </main>
    // </ProtectedRoute>
  );
}
