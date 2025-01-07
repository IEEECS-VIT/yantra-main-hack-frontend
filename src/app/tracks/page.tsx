"use client";
import { Suspense, useEffect } from "react";
import ProblemStatementTable from "./table";
import BackButton from "@/components/ui/backbutton";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const TableSkeleton = () => (
  <div className="animate-pulse px-4">
    <div className="h-10 bg-gray-200 rounded mb-4 w-1/2"></div>
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-200 rounded"></div>
      ))}
    </div>
  </div>
);

export default function ProblemStatementPage() {
  const handleDownloadPDF = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/yantra-hack-1c5c1.firebasestorage.app/o/permanent%2FYantra%20Central%20Hack%2025%20Problem%20Statements.pdf?alt=media",
      "_blank"
    );
  };

  const handleDownloadProposal = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/yantra-hack-1c5c1.firebasestorage.app/o/permanent%2FProject_proposal.pdf?alt=media",
      "_blank"
    );
  };

  // useEffect(() => {
  //   redirect("/");
  // }, []);

  return (
    <div className="container w-[100%] mx-auto mt-8 font-mono bg-white text-black min-h-screen pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 px-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-2xl font-bold text-buttonBg">
            Problem Statements
          </h1>
        </div>
        <div className="flex gap-2 items-center  flex-wrap">
          <Button
            onClick={handleDownloadProposal}
            className="flex items-center gap-2 px-4 py-2 bg-buttonBg text-white rounded-lg hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Submission Template
          </Button>
          <Button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-buttonBg text-white rounded-lg hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <Suspense fallback={<TableSkeleton />}>
        <ProblemStatementTable />
      </Suspense>
    </div>
  );
}
