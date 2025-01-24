"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DialogOnLoad() {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Open the dialog when the component mounts
  useEffect(() => {
    setDialogOpen(true);
  }, []);

  return (
    <div className="mx-10">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="text-white">
          <button
            onClick={() => setDialogOpen(false)}
            className="absolute top-2 right-2 rounded-full text-white p-1  focus:outline-none"
            aria-label="Close dialog"
          >
            ✕
          </button>

          <DialogHeader>
            <DialogTitle className="text-center">Announcement</DialogTitle>
          </DialogHeader>
          <p className="text-center">
            Selected teams have been notified via email
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
