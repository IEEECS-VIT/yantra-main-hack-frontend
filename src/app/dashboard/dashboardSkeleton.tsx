import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="relative h-screen overflow-hidden pt-16 bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-100">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-custom-gradient" />
        <div className="absolute inset-0 mix-blend-overlay opacity-25" />
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title and subtitle skeleton */}
          <div className="flex flex-col items-center gap-6 my-8">
            <div className="w-56 h-12 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 animate-pulse rounded-md shadow-xl"></div>
            <div className="w-72 h-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 animate-pulse rounded-md shadow-xl"></div>
          </div>

          {/* Button skeleton */}
          <div className="flex justify-center md:justify-end my-6">
            <div className="w-48 h-14 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 animate-pulse rounded-full shadow-2xl"></div>
          </div>

          {/* Cards or items skeleton */}
          <div className="flex gap-12 flex-wrap justify-center py-8">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="w-80 h-48 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 animate-pulse rounded-lg shadow-2xl"
              ></div>
            ))}
          </div>

          {/* Footer button skeleton */}
          <div className="flex w-full justify-center py-6">
            <div className="w-56 h-14 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 animate-pulse rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
