import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import InputBox from "@/components/creation/InputBox";
import { useState } from "react";

export default function Stage1() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  const [branch, setBranch] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [achievements, setAchievements] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");

  let blocks = [
    ...Array.from(
      { length: 20 },
      (_, i) => `MH-${String.fromCharCode(65 + i)}`
    ),
    ...Array.from(
      { length: 10 },
      (_, i) => `LH-${String.fromCharCode(65 + i)}`
    ),
  ];

  // from blocks remove MH-I, MH-O, LH-I
  const toRemove = ["MH-I", "MH-O", "LH-I"];
  blocks = blocks.filter((block) => !toRemove.includes(block));

  return (
    <div className="my-10 md:my-20">
      <Heading text="CREATE YOUR ACCOUNT" />
      <Progressbar currentStep={1} />
      <h1 className="text-center text-white">
        *All the fields are mandatory to be filled
      </h1>
      <div className="w-full max-w-4xl mx-auto p-6 space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <InputBox placeholder="Name" value={name} onChange={setName} />
          <InputBox placeholder="Phone No" value={phone} onChange={setPhone} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <InputBox placeholder="Reg No" value={regNo} onChange={setRegNo} />
          <InputBox placeholder="Branch" value={branch} onChange={setBranch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative w-full max-w-md">
            <select
              className="bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={hostelBlock}
              onChange={(e) => setHostelBlock(e.target.value)}
            >
              <option value="" className="text-gray-400">
                Hostel Block
              </option>
              {blocks.map((block) => (
                <option
                  key={block}
                  value={block}
                  className="bg-transparent text-white py-2 px-4 hover:bg-white/10"
                >
                  {block}
                </option>
              ))}
            </select>
          </div>
          <InputBox placeholder="Room No" value={roomNo} onChange={setRoomNo} />
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

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="agreement"
            className="w-4 h-4 rounded border-white/20"
          />
          <label htmlFor="agreement" className="text-white">
            I agree to follow the Yantra Code of Conduct
          </label>
        </div>
      </div>
    </div>
  );
}
