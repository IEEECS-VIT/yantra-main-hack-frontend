"use client";

import React, { useState } from "react";
import { ProblemStatement } from "../../../problem_statements";
import { data } from "../../../problem_statements";

const ProblemStatementTable: React.FC = () => {
  const [selectedProblem, setSelectedProblem] =
    useState<ProblemStatement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [categorySort, setCategorySort] = useState<"asc" | "desc" | null>(null);
  const itemsPerPage = 10;

  const filteredData = data.filter(
    (problem) =>
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.summary.toLowerCase()
        .includes(searchQuery.toLowerCase())
      || 
      problem.description.objective.toLowerCase()
        .includes(searchQuery.toLowerCase())
      ||
      problem.description.expectedOutcomes.toLowerCase()
        .includes(searchQuery.toLowerCase())
      ||
      problem.statementID.toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!categorySort) return 0;
    return categorySort === "asc"
      ? a.category.localeCompare(b.category)
      : b.category.localeCompare(a.category);
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <>
      <div className="mb-4 px-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-full md:w-1/2"
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e.target.value);
 setCurrentPage(1);}
}
        />
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px] px-4">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">S. No.</th>
                <th className="border border-gray-300 px-4 py-2">
                  Statement ID
                </th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Category
                  <button
                    onClick={() =>
                      setCategorySort(
                        categorySort === null
                          ? "asc"
                          : categorySort === "asc"
                            ? "desc"
                            : null
                      )
                    }
                    className="ml-2 px-2 py-1 bg-gray-200 rounded text-sm"
                  >
                    {categorySort === null
                      ? "↕"
                      : categorySort === "asc"
                        ? "↑"
                        : "↓"}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {getPaginatedData().map((problem) => (
                <tr key={problem.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {problem.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {problem.statementID}
                  </td>
                  <td
                    className="border border-gray-300 px-4 py-2 text-blue-500 cursor-pointer underline"
                    onClick={() => setSelectedProblem(problem)}
                  >
                    {problem.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {problem.description.summary.slice(0, 500)}...
                    <button
                      className="text-blue-500 ml-2 underline"
                      onClick={() => setSelectedProblem(problem)}
                    >
                      View Full
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {problem.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 flex-wrap gap-2">
        <button
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-buttonBg text-white"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-buttonBg text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-buttonBg text-white"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {selectedProblem && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4">
          <div
            className="bg-white rounded-lg p-8 w-full max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-buttonBg"
              onClick={() => setSelectedProblem(null)}
            >
              ×
            </button>

            <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Statement ID
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {selectedProblem.statementID}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Title
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {selectedProblem.title}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Category
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {selectedProblem.category}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Description
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {selectedProblem.description.summary}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Objective
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {selectedProblem.description.objective}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Expected Outcomes
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {selectedProblem.description.expectedOutcomes}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProblemStatementTable;
