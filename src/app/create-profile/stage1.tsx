import Heading from "@/components/creation/Heading";
import Progressbar from "@/components/creation/Progressbar";
import InputBox from "@/components/creation/InputBox";
import { useState } from "react";
import LayeredButton from "@/components/ui/orangeButton";
import { createProfile } from "@/actions/createProfile";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Stage1({ setStage }: { setStage: any }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [gender, setGender] = useState("");
  const [hostelType, setHostelType] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState("");

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
    "Computer Science with Specialization",
    "Electronics and Communication",
    "Electrical and Electronics",
    "Electrical and Computer Science",
    "Electronics and Instrumentation",
    "Health Sciences and Technology",
    "Mechanical",
    "Civil",
    "Chemical",
    "Biotechnology",
    "Information Technology",
    "B.Des. Industrial Design",
    "B.Arch",
    "B.Sc. in Hospitality and Hotel Administration",
    "B.Sc. (Hons.) Agriculture",
    "B.Sc. Multimedia & Animation",
    "B.Sc. Visual Communication",
  ];

  const schools = [
    "School of Advanced Sciences (SAS)",
    "School of Bio Sciences & Technology (SBST)",
    "School of Civil Engineering (SCE)",
    "School of Chemical Engineering (SCHEME)",
    "School of Computer Science and Engineering (SCOPE)",
    "School of Computer Science Engineering and Information Systems (SCORE)",
    "School of Electrical Engineering (SELECT)",
    "School of Electronics Engineering (SENSE)",
    "School of Healthcare Science and Engineering (SHINE)",
    "School of Mechanical Engineering (SMEC)",
    "School of Social Sciences and Languages (SSL)",
    "School of Hotel & Tourism Management (HOT)",
    "VIT School of Agricultural Innovations And Advanced Learning (VAIAL)",
    "VIT Business School (VIT BS)",
    "VIT School of Design (V-SIGN)",
    "VIT School of Media, Arts and Technology (V-SMART)",
    "School of Architecture (V-SPARC)",
  ];

  const validateRegNo = (value: string) =>
    /^[0-9]{2}[A-Z]{3}[0-9]{4}$/.test(value);

  async function handleSubmit() {
    // Validate phone number
    const validatePhone = (value: string) => /^[0-9]{10}$/.test(value);

    if (
      !name ||
      !phone ||
      !regNo ||
      (hostelType !== "DS" && (!roomNo || !hostelBlock)) ||
      !gender ||
      !selectedBranch ||
      !selectedSchool ||
      !isAgreed
    ) {
      setError("Please fill out all fields correctly and agree to the terms.");
      return;
    }

    if (!validateRegNo(regNo)) {
      setError("Invalid registration number format. Use 12ABC1234.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Invalid phone number format. It must be exactly 10 digits.");
      return;
    }

    setError(""); // Clear any existing error
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNo", phone);
    formData.append("regNo", regNo);
    formData.append("roomNo", roomNo);
    formData.append("gender", gender);
    formData.append("hostelType", hostelType);
    formData.append("hostelBlock", hostelBlock);
    formData.append("branch", selectedBranch);
    formData.append("school", selectedSchool);

    const response = await createProfile(formData, router);
    if (response.status === 200) {
      router.push("/dashboard");
    } else {
      setError(response.message);
      // reset all fields
      setName("");
      setPhone("");
      setRegNo("");
      setRoomNo("");
      setGender("");
      setHostelType("");
      setHostelBlock("");
      setSelectedBranch("");
      setSelectedSchool("");
      setIsAgreed(false);
    }
  }

  const handleRegNoChange = (value: string) => {
    setRegNo(value.toUpperCase());
  };

  const handleHostelTypeChange = (value: string) => {
    setHostelType(value);
    if (value === "DS") {
      setRoomNo("");
      setHostelBlock("");
    }
  };

  return (
    <div className="mt-10 px-6 ">
      <Heading text="CREATE YOUR ACCOUNT" />
      <Progressbar currentStep={1} />
      <h1 className="text-center text-white">
        *All the fields are mandatory to be filled
      </h1>
      <div className="w-full max-w-4xl mx-auto p-6 space-y-4 md:space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-16">
          <InputBox placeholder="Name" value={name} onChange={setName} />
          <InputBox placeholder="Phone Num" value={phone} onChange={setPhone} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          <InputBox
            placeholder="Reg Num"
            value={regNo}
            onChange={handleRegNoChange}
          />
          <InputBox
            placeholder="Room Num"
            value={roomNo}
            onChange={setRoomNo}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          <div className="relative w-full max-w-md">
            <select
              className="bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={hostelType}
              onChange={(e) => handleHostelTypeChange(e.target.value)}
            >
              <option value="" className="text-gray-400">
                Hostel Type
              </option>
              <option value="MH" className="text-main-orange">
                Mens Hostel
              </option>
              <option value="LH" className="text-main-orange">
                Ladies Hostel
              </option>
              <option value="DS" className="text-main-orange">
                Day Scholar
              </option>
            </select>
          </div>

          <div className="relative w-full max-w-md">
            <select
              className={`bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent ${!hostelType || hostelType === "DS" ? "cursor-not-allowed" : ""}`}
              value={hostelBlock}
              onChange={(e) => setHostelBlock(e.target.value)}
              disabled={!hostelType || hostelType === "DS"}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
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

        <div className="relative w-full flex items-center justify-center">
          <select
            className="bg-opacity-30 bg-white md:w-[50%] w-full p-6 border text-center text-white bg-transparent border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" className="text-gray-400">
              Gender
            </option>
            <option value="male" className="text-main-orange">
              male
            </option>
            <option value="female" className="text-main-orange">
              female
            </option>
          </select>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <input
            type="checkbox"
            id="agreement"
            className="w-4 h-4 rounded border-white/20"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          <label htmlFor="agreement" className="text-white ">
            I agree to follow the Yantra Code of Conduct
          </label>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex justify-center mt-16 md:mt-10">
          <div className="flex justify-center items-center space-x-2 w-[60vw] md:w-[15vw]">
            <LayeredButton
              text="SUBMIT"
              enabled={isAgreed}
              className={!isAgreed ? "opacity-50 cursor-not-allowed" : ""}
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
