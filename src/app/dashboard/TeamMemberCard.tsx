interface TeamMemberCardProps {
  role: string;
  idx: number;
  name: string;
  registrationNumber: string;
  branch: string;
}
export default function TeamMemberCard({
  branch,
  idx,
  name,
  registrationNumber,
  role,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white w-56 h-64 backdrop-blur-md bg-opacity-20 relative flex items-center flex-col justify-center border border-white">
      <div className="absolute right-3 top-0 bg-white size-8 flex items-center justify-center -translate-y-1/4    ">
        {idx}
      </div>
      <h1 className="text-white text-wrap text-3xl text-center uppercase">
        <span className="text-main-orange">team</span> {role}
      </h1>
      <div className="h-px bg-main-orange w-2/3 mx-auto my-4" />
      <div className="text-white text-center">
        <h3 className="text-wrap break-all">{name}</h3>
        <h3 className="text-wrap">{registrationNumber}</h3>
        <h3 className="text-wrap">{branch}</h3>
      </div>
    </div>
  );
}
