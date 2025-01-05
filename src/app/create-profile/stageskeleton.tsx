export default function Stage1Skeleton() {
  return (
    <div className="flex justify-center items-center flex-col px-6 bg-custom-gradient h-screen">
      {/* <Heading text="CREATE YOUR ACCOUNT" />
      <Progressbar currentStep={1} /> */}
      <h1 className="text-center text-white">
        *All the fields are mandatory to be filled
      </h1>
      <div className="w-full max-w-4xl mx-auto p-6 space-y-4 md:space-y-2">
        {/* Skeleton for Name and Phone Number Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
        </div>

        {/* Skeleton for Reg Num and Room Num Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
        </div>

        {/* Skeleton for Hostel Type and Block Selects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
        </div>

        {/* Skeleton for Branch and School Selects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
        </div>

        {/* Skeleton for Gender Select */}
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full h-12 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
        </div>

        {/* Skeleton for Agreement Checkbox */}
        <div className="flex justify-center items-center space-x-2">
          <div className="w-4 h-4 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
          <div className="w-56 h-6 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>
        </div>

        {/* Error Message Skeleton */}
        <div className="w-full h-6 bg-gray-300 animate-pulse rounded-md shadow-xl"></div>

        {/* Skeleton for Submit Button */}
        <div className="flex justify-center mt-16 md:mt-10">
          <div className="w-48 h-14 bg-gray-300 animate-pulse rounded-full shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}
