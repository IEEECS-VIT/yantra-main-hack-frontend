"use client";
import Text from "@/components/hero/text";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProtectedRoute from "@/components/protectedRoutes";
import Navbar from "@/components/ui/navbar/navbar";
import { Loader2, MoveUpRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getTeamDetails } from "./actions";
import LeaveTeamDialog from "./LeaveTeamDialog";
import TaskSubmmisionDialog from "./TaskSubmmisionDialog";
import TeamMemberCard from "./TeamMemberCard";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [showLeaveTeamAlert, setShowLeaveTeamAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [teamDetails, setTeamDetails] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTeamDetails = async () => {
      setLoading(true);
      try {
        const { data, errors } = await getTeamDetails();

        // Check if data exists and has the m (status) property
        if (!data || !data.m) {
          setError(errors || "Failed to fetch team details");
          return;
        }

        // Handle different status codes
        if (data.m === 200 && data.data?.members) {
          setTeamDetails(data.data.members);
        } else if (data.m === 404) {
          // User not in team
          router.push("/create?currStage=2");
        } else if (data.m === 401) {
          // User not found/unauthorized
          router.push("/");
        } else {
          setError(errors || "An unexpected error occurred");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamDetails();
  }, [router]);

  return (
    <>
      <ProtectedRoute>
        <TaskSubmmisionDialog open={showDialog} setOpen={setShowDialog} />
        <LeaveTeamDialog
          open={showLeaveTeamAlert}
          setOpen={setShowLeaveTeamAlert}
        />
        <Navbar />
        <main className="relative min-h-screen pt-20">
          {/* Background gradient and noise overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-custom-gradient" />
            <div className="absolute inset-0 mix-blend-overlay opacity-25" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-10">
            <MaxWidthWrapper>
              <div className="flex flex-col items-center gap-4 my-8">
                <Text
                  text="DASHBOARD"
                  animation={false}
                  className="!text-main-orange"
                  textSize="text-4xl md:text-7xl"
                  layerCount={3}
                />
                <p className="max-w-96 md:max-w-[35rem] text-white text-center text-opacity-90 text-xs md:text-sm">
                  The given dashboard displays the information about you and
                  your team mates
                </p>
              </div>
              {error && (
                <div className="flex flex-col justify-center items-center h-96">
                  <h1 className="text-center text-white text-xl">{error}</h1>
                </div>
              )}
              {loading && (
                <div className="flex justify-center items-center h-96">
                  <Loader2 className="size-8 animate-spin text-white mr-2" />
                  <h1 className="text-lg text-center text-white">
                    Loading team details...
                  </h1>
                </div>
              )}
              {teamDetails && (
                <>
                  <div className="flex justify-center md:justify-end">
                    <button
                      className="bg-main-orange text-white p-2 rounded-full flex items-center tracking-wider group hover:scale-105 transition-transform active:scale-95"
                      onClick={() => {
                        setShowLeaveTeamAlert(true);
                      }}
                    >
                      leave team
                      <MoveUpRightIcon className="bg-blue-500 text-white p-1 rounded-full shrink-0 ml-2 size-6 group-hover:rotate-[15deg] transition-transform" />
                    </button>
                  </div>

                  <div className="flex gap-8 flex-wrap justify-center py-8">
                    {teamDetails.map((member: any, idx: number) => (
                      <TeamMemberCard
                        key={idx}
                        name={member.name}
                        idx={idx + 1}
                        role={member.isLeader ? "Leader" : "Member"}
                        registrationNumber={member.regNo}
                        branch={member.branch}
                      />
                    ))}
                  </div>

                  <div className="flex w-full justify-center">
                    <button
                      className="border p-2 rounded-lg uppercase hover:scale-105 transition-all active:scale-95"
                      onClick={() => {
                        setShowDialog(true);
                      }}
                    >
                      <span className="text-main-orange">Submit</span>{" "}
                      <span className="text-white">Idea</span>
                    </button>
                  </div>
                </>
              )}
            </MaxWidthWrapper>
          </div>
        </main>
      </ProtectedRoute>
    </>
  );
}
