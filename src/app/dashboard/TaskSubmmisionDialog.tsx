"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2Icon, PencilIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import FileUpload from "./FileUpload";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { data } from "../../../problem_statements";

const tracksList = data.map((problem) => ({
  code: problem.statementID,
  track: problem.title,
}));

interface TaskSubmmisionDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TaskSubmmisionDialog({
  open,
  setOpen,
}: TaskSubmmisionDialogProps) {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<{
    code: string;
    track: string;
  } | null>(null);
  const [files, setFiles] = useState<File[] | null>(null);
  const showSubmitButton = files && files.length > 0 && selectedTrack;
  const filteredTracks = tracksList.filter(
    (track) =>
      track.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          // Don't set Content-Type header - browser will set it automatically with boundary
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
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
          {!selectedTrack && (
            <>
              <input
                className="bg-[#d0d0d050] text-center p-2 w-full rounded-full font-mono"
                placeholder="Search for track"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <ul className="rounded-lg p-2 my-2 w-full h-52 overflow-auto bg-[#d0d0d050]">
                {filteredTracks.map((track) => (
                  <li
                    onClick={() => {
                      setSelectedTrack({
                        code: track.code,
                        track: track.track,
                      });
                    }}
                    className="hover:bg-black/20 p-1 rounded-lg cursor-pointer"
                    key={track.code}
                  >
                    {track.code}-{track.track}
                  </li>
                ))}
                {filteredTracks.length === 0 && (
                  <li className="text-center">No tracks found</li>
                )}
              </ul>
            </>
          )}
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
                <PencilIcon className="h-4 w-4 stroke-current shrink-0 ml-1" />
              </button>
            </div>
          )}
        </div>
        <FileUpload files={files} setFiles={setFiles} />
        {showSubmitButton && (
          <button
            className="bg-main-orange rounded-full p-2 flex items-center justify-center"
            onClick={() => {
              handleSubmit();
            }}
            disabled={loading}
          >
            {loading && <Loader2Icon className="size-5 animate-spin mr-1" />}
            Submit
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}
