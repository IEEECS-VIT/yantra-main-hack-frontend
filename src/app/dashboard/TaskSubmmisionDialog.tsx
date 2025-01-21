"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2Icon, PencilIcon, DownloadIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import FileUpload from "./FileUpload";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { data } from "../../../problem_statements";
import { TeamDetails } from "./actions";

const tracksList = data.map((problem) => ({
  code: problem.statementID,
  track: problem.title,
}));

interface TaskSubmmisionDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  teamDetails: TeamDetails | undefined;
}

export default function TaskSubmmisionDialog({
  open,
  setOpen,
  teamDetails,
}: TaskSubmmisionDialogProps) {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<{
    code: string;
    track: string;
  } | null>(null);
  const [files, setFiles] = useState<File[] | null>(null);

  useEffect(() => {
    if (teamDetails?.track) {
      const [code, ...trackParts] = teamDetails.track.split(" ");
      setSelectedTrack({
        code,
        track: trackParts.join(" "),
      });
    }
  }, [teamDetails]);

  const showSubmitButton = files && files.length > 0 && selectedTrack;
  const filteredTracks = tracksList.filter(
    (track) =>
      track.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = () => {
    if (teamDetails?.documentLink) {
      window.open(teamDetails.documentLink, "_blank");
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!files || files.length === 0) {
        toast.error("Please select a file");
        return;
      }
      const formData = new FormData();
      formData.append("document", files[0]);
      formData.append(
        "track",
        selectedTrack!.code + " " + selectedTrack!.track
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/task-submit`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json();
      toast.success("File uploaded successfully");
      setOpen(false);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-white max-h-[40rem] min-h-40 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Task Submission</DialogTitle>
        </DialogHeader>
        <div className="w-full font-mono">
          {selectedTrack && (
            <div className="my-4 bg-[#d0d0d050] p-2 rounded-lg flex items-center justify-between">
              <p>
                <span className="underline font-light">Selected track</span>:{" "}
                {selectedTrack.track}
              </p>
              <button
                onClick={() => {
                  setSelectedTrack(null);
                }}
              >
                {/* <PencilIcon className="h-4 w-4 stroke-current shrink-0 ml-1" /> */}
              </button>
            </div>
          )}
        </div>

        {teamDetails?.documentLink && (
          <div className="flex justify-between items-center bg-[#d0d0d050] p-2 rounded-lg mb-4">
            <span>Previous submission available</span>
            <button
              onClick={handleDownload}
              className="flex items-center bg-main-orange rounded-full px-3 py-1"
            >
              <DownloadIcon className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
        )}

        {/* <FileUpload files={files} setFiles={setFiles} />
        {showSubmitButton && (
          <button
            className="bg-main-orange rounded-full p-2 flex items-center justify-center"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading && <Loader2Icon className="size-5 animate-spin mr-1" />}
            Submit
          </button>
        )} */}
      </DialogContent>
    </Dialog>
  );
}
