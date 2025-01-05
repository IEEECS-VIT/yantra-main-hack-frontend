"use client";
import Text from "@/components/hero/text";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProtectedRoute from "@/components/protectedRoutes";
import Navbar from "@/components/ui/navbar/navbar";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getTeamDetails, TeamResponseData } from "./actions";
import LeaveTeamDialog from "./LeaveTeamDialog";
import TaskSubmmisionDialog from "./TaskSubmmisionDialog";
import TeamMemberCard from "./TeamMemberCard";

export default function DashboardPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [showLeaveTeamAlert, setShowLeaveTeamAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [teamDetails, setTeamDetails] = useState<TeamResponseData | null>(null);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      setLoading(true);
      const response = await getTeamDetails();
      console.log(response.data);
      if (response.success && response.data) {
        setTeamDetails(response.data);
      } else {
        setError(response.errors || "An unknown error occurred.");
      }
      setLoading(false);
    };
    fetchTeamDetails();
  }, []);

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
              {loading && (
                <div className="flex justify-center items-center h-96">
                  <Loader2 className="size-8 animate-spin text-white mr-2" />
                  <h1 className="text-lg text-center text-white">
                    Loading team details...
                  </h1>
                </div>
              )}
              {teamDetails &&
              teamDetails.members &&
              teamDetails.members.length > 0 ? (
                <div className="flex gap-8 flex-wrap justify-center py-8">
                  {teamDetails.members.map((member, idx) => (
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
              ) : (
                <div className="flex justify-center items-center h-96 text-center">
                  <h1 className="text-white text-lg">
                    No team members found. Create or join a team.
                  </h1>
                </div>
              )}
            </MaxWidthWrapper>
          </div>
        </main>
      </ProtectedRoute>
    </>
  );
}
