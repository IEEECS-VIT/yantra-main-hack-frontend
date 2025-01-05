"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TeamMemberCard from "./TeamMemberCard";
import Text from "@/components/hero/text";
import { Loader2, MoveUpRightIcon } from "lucide-react";
import Navbar from "@/components/ui/navbar/navbar";
import ProtectedRoute from "@/components/protectedRoutes";
import DashboardSkeleton from "./dashboardSkeleton";
import { useEffect, useState } from "react";
import { getTeamDetails } from "./actions";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [teamDetails, setTeamDetails] = useState<any>(null);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      setLoading(true);
      const { data, errors, status } = await getTeamDetails();
      console.log(data, errors, status);
      if (status === 200) {
        // @ts-ignore
        setTeamDetails(data.data.members);
      } else {
        setError(errors);
      }
      setLoading(false);
    };
    fetchTeamDetails();
  }, []);
  return (
    <ProtectedRoute>
      <Navbar />

      <main className="relative min-h-screen pt-20">
        {/* Background gradient and noise overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-custom-gradient" />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-25"
            // style={{
            //   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            //   backgroundRepeat: "repeat",
            //   width: "100%",
            //   height: "100%",
            // }}
          />
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
                The given dashboard displays the information about you and your
                team mates
              </p>
            </div>
            {error && (
              <div className="flex flex-col justify-center items-center h-96">
                <h1 className="text-center text-white text-xl">
                  Error fetching team details
                </h1>
                <p className="text-white mt-2 opacity-90">Please try again.</p>
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
                  <button className="bg-main-orange text-white px-2 py-1 rounded-full flex items-center tracking-wider group hover:scale-105 transition-transform active:scale-95">
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
                  <button className="border p-2 rounded-lg uppercase hover:scale-105 transition-all active:scale-95">
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
  );
}
