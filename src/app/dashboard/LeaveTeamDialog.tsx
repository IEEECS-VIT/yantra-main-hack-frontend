import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { leaveTeam } from "./actions";
import toast from "react-hot-toast";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

interface LeaveTeamDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function LeaveTeamDialog({
  open,
  setOpen,
}: LeaveTeamDialogProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLeaveTeam = async () => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { status, errors } = await leaveTeam();
    if (status == 200) {
      setLoading(false);
      setOpen(false);
      router.push("/");
      return;
    }
    toast.error("Something went wrong.");
    setLoading(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-white">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription className="!py-2">
            You are leaving the team. You can rejoin the team again by using the
            team code
          </DialogDescription>
          <DialogFooter className="flex justify-end gap-4">
            <button
              className="text-sm"
              onClick={() => {
                setOpen(false);
              }}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className="bg-main-orange p-2 rounded-md text-sm flex items-center"
              disabled={loading}
              onClick={() => {
                handleLeaveTeam();
              }}
            >
              {loading && (
                <Loader2Icon className="size-4 shrink-0 animate-spin mr-1" />
              )}
              Leave
            </button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
