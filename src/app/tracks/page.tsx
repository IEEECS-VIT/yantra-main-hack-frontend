"use client";
import { Suspense } from "react";
import ProblemStatementTable from "./table";
import BackButton from "@/components/ui/backbutton";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    // Placeholder logic to download PDF
    console.log("Downloading PDF...");
    // Add your PDF generation and download logic here
  };

  return (
    <div className="container w-[100%] mx-auto mt-8 font-mono bg-white text-black min-h-screen pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 px-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-2xl font-bold text-buttonBg">
            Problem Statements
          </h1>
        </div>
        <Button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-4 py-2 bg-buttonBg text-white rounded-lg hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <Suspense fallback={<TableSkeleton />}>
        <ProblemStatementTable />
      </Suspense>
    </div>
  );
}
