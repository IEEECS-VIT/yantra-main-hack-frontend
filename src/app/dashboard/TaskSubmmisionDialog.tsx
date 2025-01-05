"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PencilIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import FileUpload from "./FileUpload";

const tracksList = [
  {
    code: "13",
    track: "Frontend",
  },
  {
    code: "14",
    track: "Backend",
  },
  {
    code: "15",
    track: "Mobile",
  },
];

interface TaskSubmmisionDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TaskSubmmisionDialog({
  open,
  setOpen,
}: TaskSubmmisionDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedTrack, setSelectedTrack] = useState<any>(null);
  const [files, setFiles] = useState<File[] | null>(null);
  const showSubmitButton = files && files.length > 0 && selectedTrack;
  const filteredTracks = tracksList.filter(
    (track) =>
      track.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-white max-h-[40rem] min-h-40 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Task Submission</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          {!selectedTrack && (
            <>
              <input
                className="bg-[#d0d0d050] text-center p-2 w-full rounded-full"
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
          <button className="bg-main-orange rounded-full p-2">Submit</button>
        )}
      </DialogContent>
    </Dialog>
  );
}
