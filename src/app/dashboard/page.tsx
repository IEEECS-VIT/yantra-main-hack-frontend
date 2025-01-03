import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TeamMemberCard from "./TeamMemberCard";
import Text from "@/components/hero/text";
import { MoveUpRightIcon } from "lucide-react";

const TEAM_DETAILS = [
  {
    name: "Arjun Bector",
    role: "Leader",
    registrationNumber: "20BCE0312",
    branch: "CSE",
  },
  {
    name: "John Doe",
    role: "Member",
    registrationNumber: "20BCE0456",
    branch: "CSE",
  },
  {
    name: "Jane Smith",
    role: "Member",
    registrationNumber: "20BCE0789",
    branch: "CSE",
  },
  {
    name: "Alice Johnson",
    role: "Member",
    registrationNumber: "20BCE0123",
    branch: "CSE",
  },
  {
    name: "Bob Brown",
    role: "Member",
    registrationNumber: "20BCE0345",
    branch: "CSE",
  },
];

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient and noise overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-custom-gradient" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
          }}
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

          <div className="flex justify-center md:justify-end">
            <button className="bg-main-orange text-white px-2 py-1 rounded-full flex items-center tracking-wider group hover:scale-105 transition-transform active:scale-95">
              leave team
              <MoveUpRightIcon className="bg-blue-500 text-white p-1 rounded-full shrink-0 ml-2 size-6 group-hover:rotate-[15deg] transition-transform" />
            </button>
          </div>

          <div className="flex gap-8 flex-wrap justify-center py-8">
            {TEAM_DETAILS.map((member, idx) => (
              <TeamMemberCard
                key={idx}
                name={member.name}
                idx={idx + 1}
                role={member.role}
                registrationNumber={member.registrationNumber}
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
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
