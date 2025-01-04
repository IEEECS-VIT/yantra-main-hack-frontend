import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import InputBox from "@/components/creation/InputBox";
import { useState } from "react";

export default function Stage1({ setStage }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [achievements, setAchievements] = useState("");
  const [hostelType, setHostelType] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");

  const mhBlocks = Array.from(
    { length: 20 },
    (_, i) => `MH-${String.fromCharCode(65 + i)}`
  ).filter((block) => !["MH-I", "MH-O"].includes(block));

  const lhBlocks = Array.from(
    { length: 10 },
    (_, i) => `LH-${String.fromCharCode(65 + i)}`
  ).filter((block) => block !== "LH-I");

  const blocks =
    hostelType === "MH" ? mhBlocks : hostelType === "LH" ? lhBlocks : [];

  const branches = [
    "Computer Science",
    "Electronics and Communication",
    "Electrical and Electronics",
    "Mechanical",
    "Civil",
    "Chemical",
    "Biotechnology",
    "Information Technology",
  ];

  const schools = [
    "School of Computing",
    "School of Electronics",
    "School of Mechanical Sciences",
    "School of Civil Engineering",
    "School of Chemical Sciences",
    "School of Advanced Sciences",
    "School of Management",
  ];

  return (
    <div className="my-10 md:my-20">
      <Heading text="CREATE YOUR ACCOUNT" />
      <Progressbar currentStep={2} />
      <h1 className="text-center text-white">
        *All the fields are mandatory to be filled
      </h1>
      <div className="w-full max-w-4xl mx-auto p-6 space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <InputBox placeholder="Name" value={name} onChange={setName} />
          <InputBox placeholder="Reg Num" value={phone} onChange={setPhone} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <InputBox placeholder="Phone Num" value={regNo} onChange={setRegNo} />
          <InputBox
            placeholder="Room Num"
            value={roomNo}
            onChange={setRoomNo}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative w-full max-w-md">
            <select
              className="bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={hostelType}
              onChange={(e) => {
                setHostelType(e.target.value);
                setHostelBlock("");
              }}
            >
              <option value="" className="text-gray-400">
                Hostel Type
              </option>
              <option value="MH" className="text-main-orange">
                Men's Hostel
              </option>
              <option value="LH" className="text-main-orange">
                Ladies Hostel
              </option>
              <option value="LH" className="text-main-orange">
                Day Scholar
              </option>
            </select>
          </div>

          <div className="relative w-full max-w-md">
            <select
              className="bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={hostelBlock}
              onChange={(e) => setHostelBlock(e.target.value)}
              disabled={!hostelType}
            >
              <option value="" className="text-gray-400">
                Hostel Block
              </option>
              {blocks.map((block) => (
                <option
                  key={block}
                  value={block}
                  className="text-main-orange py-2 px-4 hover:bg-white/10"
                >
                  {block}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative w-full max-w-md">
            <select
              className="bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="" className="text-gray-400">
                Branch
              </option>
              {branches.map((branch) => (
                <option
                  key={branch}
                  value={branch}
                  className="text-main-orange py-2 px-4 hover:bg-white/10"
                >
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full max-w-md">
            <select
              className="bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
            >
              <option value="" className="text-gray-400">
                School
              </option>
              {schools.map((school) => (
                <option
                  key={school}
                  value={school}
                  className="text-main-orange py-2 px-4 hover:bg-white/10"
                >
                  {school}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative w-full">
          <textarea
            className="bg-opacity-30 bg-white w-full p-4 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
            rows={4}
            placeholder="Past Achievements"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center space-x-2">
          <input
            type="checkbox"
            id="agreement"
            className="w-4 h-4 rounded border-white/20"
          />
          <label htmlFor="agreement" className="text-white ">
            I agree to follow the Yantra Code of Conduct
          </label>
        </div>
      </div>
    </div>
  );
}
