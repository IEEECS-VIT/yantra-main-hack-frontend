"use client";
import Text from "@/components/hero/text";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProtectedRoute from "@/components/protectedRoutes";
import {
  InfoIcon,
  Loader2,
  MoveUpRightIcon,
  UserPlus2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTeamDetails, TeamResponseData } from "./actions";
import LeaveTeamDialog from "./LeaveTeamDialog";
import TaskSubmmisionDialog from "./TaskSubmmisionDialog";
import TeamMemberCard from "./TeamMemberCard";
import AddMembersDialog from "./AddMembersDialog";
import BackButton from "@/components/ui/backbutton";

const MAX_TEAM_SIZE = 5;
const MIN_TEAM_SIZE = 3;

export default function DashboardPage() {
  const router = useRouter();
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showLeaveTeamAlert, setShowLeaveTeamAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [teamDetails, setTeamDetails] = useState<TeamResponseData | null>(null);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        setLoading(true);
        const response = await getTeamDetails();
        if (response.success && response.data) {
          setTeamDetails(response.data);
        } else {
          setError(response.errors || "User not part of any team");
          console.error(response.errors);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTeamDetails();
  }, []);

  return (
    <ProtectedRoute>
      <TaskSubmmisionDialog open={showDialog} setOpen={setShowDialog} />
      <LeaveTeamDialog
        open={showLeaveTeamAlert}
        setOpen={setShowLeaveTeamAlert}
      />
      <AddMembersDialog
        open={showAddMemberDialog}
        setOpen={setShowAddMemberDialog}
        teamCode={teamDetails?.team?.teamCode as string}
      />
      <main className="relative min-h-screen pt-10 bg-custom-gradient">
        <div className="relative z-10   ">
          <MaxWidthWrapper>
            <div className="flex flex-col items-center gap-4 my-8">
              <Text
                text="DASHBOARD"
                animation
                className="!text-main-orange"
                textSize="text-4xl md:text-7xl"
                layerCount={3}
              />
              {teamDetails && (
                <div className="text-white mt-4">
                  <h6>Team Name : {teamDetails.team.teamName}</h6>
                  <h6>Team Code : {teamDetails.team.teamCode}</h6>
                </div>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-96">
                <Loader2 className="size-8 animate-spin text-white mr-2" />
                <h1 className="text-lg text-center text-white">
                  Loading team details...
                </h1>
              </div>
            ) : error ? (
              <div className="flex justify-center flex-col items-center h-96">
                <h1 className="text-lg text-center text-white">
                  {"You are not a part of a team yet"}
                </h1>
                {(error === "User not found or not part of any team" ||
                  error === "User not part of any team") && (
                  <div className="flex flex-col gap-8 pt-2">
                    <button
                      className="text-white px-10 py-7 bg-gradient-to-l from-[#A240A5] to-[#322A55] border border-white rounded-sm text-sm md:w-[500px] w-[350px] mt-6"
                      onClick={() => {
                        router.push("/create-team");
                      }}
                    >
                      Create Team
                    </button>
                    <button
                      className="text-white px-10 py-7 bg-gradient-to-l from-[#A240A5] to-[#322A55] border border-white rounded-sm text-sm md:w-[500px] w-[350px] mt-6"
                      onClick={() => {
                        router.push("/join-team");
                      }}
                    >
                      Join Team
                    </button>
                  </div>
                )}
              </div>
            ) : teamDetails?.members?.length && teamDetails.memberCount > 0 ? (
              <>
                <div className="flex justify-center md:justify-end gap-4">
                  {teamDetails.memberCount < MAX_TEAM_SIZE && (
                    <button
                      className="bg-main-orange text-white p-2 rounded-full flex items-center tracking-wider hover:scale-105 transition-transform active:scale-95"
                      onClick={() => setShowAddMemberDialog(true)}
                    >
                      Add Members
                      <UserPlus2Icon className="bg-blue-500 text-white p-1 rounded-full shrink-0 ml-2 size-6 " />
                    </button>
                  )}
                  <button
                    className="bg-main-orange text-white p-2 rounded-full flex items-center tracking-wider group hover:scale-105 transition-transform active:scale-95"
                    onClick={() => setShowLeaveTeamAlert(true)}
                  >
                    Leave Team
                    <MoveUpRightIcon className="bg-blue-500 text-white p-1 rounded-full shrink-0 ml-2 size-6 group-hover:rotate-[15deg] transition-transform" />
                  </button>
                </div>

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
                {teamDetails.members.length < MIN_TEAM_SIZE ? (
                  <p className="bg-white/20 backdrop-blur-md flex items-center text-white gap-4 p-2 rounded-lg text-sm max-w-prose mx-auto">
                    <InfoIcon />A minimum of {MIN_TEAM_SIZE} members is required
                    to form a team. Idea submission is allowed only after
                    meeting this requirement.
                  </p>
                ) : teamDetails.isLeader ? (
                  <div className="flex w-full justify-center mt-6">
                    <button
                      className="border p-2 rounded-lg uppercase hover:scale-105 transition-all active:scale-95"
                      onClick={() => setShowDialog(true)}
                    >
                      <span className="text-main-orange">Submit</span>{" "}
                      <span className="text-white">Idea</span>
                    </button>
                  </div>
                ) : (
                  <p className="text-center text-white">
                    Only team leader can submit the idea.
                  </p>
                )}
              </>
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
  );
}
