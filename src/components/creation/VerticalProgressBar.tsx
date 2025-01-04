import React from 'react';

interface Timeline {
  heading: string;
  date: string;
}

interface VerticalProgressbarProps {
  timeline: Timeline[];
}

const VerticalProgressbar: React.FC<VerticalProgressbarProps> = ({ timeline }) => {
  return (
    <div className="flex flex-col px-0 py-8 md:p-2">
      <div className="relative flex flex-col items-start h-[100%]">
        {timeline.map((timelineItem, index) => (
          <div
            key={index}
            className="relative flex items-start last:mb-0"
          >
            
            <div className="flex flex-col items-center">
              <div
                className={`md:w-16 md:h-16 h-8 w-8 rounded-full border bg-transparent
                  flex items-center justify-center
                  border-main-orange`}
              >
                <div className="md:w-8 md:h-8 h-4 w-4 rounded-full bg-main-orange" />
              </div>

              {index < timeline.length - 1 ? (
                <div className="w-[2px] h-48 md:h-96 bg-main-orange" />
              ) : (
                <div className="w-[2px] h-8 md:h-12 bg-main-orange" />
              )}
            </div>

            <div className="ml-4">
              <h3 className="text-black font-semibold text-xl md:text-3xl">
                {timelineItem.heading.split(" ").length === 1 ? (
                  <span className="text-black">{timelineItem.heading}</span>
                ) : (
                  timelineItem.heading.split(" ").map((word, index, arr) => (
                    index === arr.length - 1 ? (
                      <span key={index} className="text-orange-500 block">{word}</span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  ))
                )}
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">{timelineItem.date}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProgressbar;
