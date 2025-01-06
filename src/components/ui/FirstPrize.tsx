export default function FirstPrize() {
    return (
      <div className="p-5 border border-black bg-slate-200 w-64 min-h-64 md:w-full md:mx-[2.5rem] md:min-h-64 backdrop-blur-md bg-opacity-20 relative flex items-center flex-col justify-center shadow-lg">
        <div className="absolute right-3 top-0 bg-white size-8 flex items-center justify-center -translate-y-1/4 border border-black">
          1
        </div>
        <h1 className="text-white text-wrap md:text-5xl text-xl text-center uppercase ">
          <span className="text-main-orange">FIRST</span>
        </h1>
        <div className="h-px bg-main-orange w-2/3 mx-auto my-4" />
        <p className="text-sm mb-4 text-center">
          Awarded to the team with the most outstanding overall performance.
        </p>
  
        {/* <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 justify-center md:justify-between text-center items-center md:text-3xl text-xl">
          <h2>Rs.</h2>
          <h2 >TROPHY</h2>
          <h2 >TRIP TO <span className="block">#nocodeconf</span></h2>
        </div> */}
      </div>
    );
  }
  