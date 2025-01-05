import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClipboardIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

interface AddMembersDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  teamCode: string;
}

export default function AddMembersDialog({
  open,
  setOpen,
  teamCode,
}: AddMembersDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-white">
        <DialogHeader>
          <DialogTitle>Add a new team member</DialogTitle>
        </DialogHeader>
        <p>
          Your team code is <span className="underline">{teamCode}</span>. Share this code with others to allow
          them to join your team.
        </p>
        <div className="flex justify-end">
          <button
            className="bg-main-orange p-2 flex items-center rounded-lg"
            onClick={() => {
              navigator.clipboard.writeText(teamCode).then(() => {
                toast.success("Team code copied sucessfully");
              });
            }}
          >
            Copy to clipboard
            <ClipboardIcon className="size-4 shrink-0 ml-2" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
