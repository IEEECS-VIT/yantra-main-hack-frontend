"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";

const handleDownloadRuleBook = () => {
  window.open(
    "https://firebasestorage.googleapis.com/v0/b/yantra-hack-1c5c1.firebasestorage.app/o/permanent%2FYantra'25%20Hack%20Rule%20Book.pdf?alt=media",
    "_blank"
  );
};

export const Rulebookbutton = () => {
  return (
    <Button
      onClick={handleDownloadRuleBook}
      className="flex items-center gap-2 px-4 py-2 bg-buttonBg text-white rounded-lg hover:opacity-90"
    >
      <Download className="h-4 w-4" />
      RuleBook
    </Button>
  );
};
