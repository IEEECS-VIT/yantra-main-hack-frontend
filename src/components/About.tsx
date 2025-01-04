import OrangeButton from "@/components/ui/orangeButton";
import { CircularText } from "./hero/circularText";

export default function About() {
  const aboutData = [
    {
      heading: "WHAT IS YANTRA?",
      title: "WELCOME TO VIT’S BIGGEST AI HACKATHON",
      content:
        "Yantra Hack brings together participants from various disciplines to work on real-world challenges, encouraging creative problem-solving and teamwork. The event also provides a platform for networking, learning, and showcasing technical skills, helping students gain exposure to industry trends and cutting-edge technologies.",
    },
    {
      heading: "WHAT IS SDG?",
      title: "GLOBAL BLUEPRINT FOR SUSTAINABILTY",
      content:
        "The Sustainable Development Goals (SDGs), adopted by all United Nations Member States in 2015, represent a global framework to tackle the most pressing challenges facing our world. They aim to achieve peace and prosperity for people and the planet, while also fostering equality, sustainability, and resilience. The SDGs encompass a broad range of issues and emphasize interconnectedness across economic, social, and environmental dimensions.",
    },
  ];

  return (
    <section className="p-0 md:p-16 bg-[#FFF8F8] min-h-screen flex justify-center pt-8">
      <div className="flex flex-col p-6 md:p-8">
        <div className="relative flex flex-col items-start h-[100%] ">
          {aboutData.map((timelineItem, index) => (
            <div key={index} className="relative flex items-start last:mb-0">
              <div className="flex flex-col items-center h-full">
                <div
                  className="md:w-16 md:h-16 h-8 w-8 rounded-full border bg-transparent
                  flex items-center justify-center
                  border-main-orange"
                >
                  <div className="md:w-8 md:h-8 h-4 w-4 rounded-full bg-main-orange" />
                </div>

                {index < aboutData.length - 1 ? (
                  <div className="w-[2px]  h-[calc(100%-0.5rem)] md:h-[calc(100%-4rem)] bg-main-orange" />
                ) : (
                  <div className="w-[2px] h-[calc(100%-4rem)] bg-main-orange" />
                )}
              </div>

              <div className="ml-4 flex md:flex-row flex-col justify-between w-full mb-4 md:mb-16">
                <h3 className="text-black font-semibold text-2xl md:text-3xl md:min-w-[15vw]">
                  {timelineItem.heading.split(" ").length === 1 ? (
                    <span className="text-black">{timelineItem.heading}</span>
                  ) : (
                    timelineItem.heading.split(" ").map((word, idx, arr) =>
                      idx === arr.length - 1 ? (
                        <span key={idx} className="text-orange-500 block">
                          {word}
                        </span>
                      ) : (
                        <span key={idx}>{word} </span>
                      )
                    )
                  )}
                </h3>
                <div className="md:ml-8">
                  <h2 className=" text-lg md:text-2xl mb-8 max-w-[20rem] md:max-w-[50rem]">
                    {timelineItem.title}
                  </h2>
                  <p className="text-sm md:text-xl mb-6 md:mb-12 max-w-[20rem] md:max-w-[60rem] ">
                    {timelineItem.content}
                  </p>
                  {index === 0 && (
                    <OrangeButton
                      text="Explore Rules and FAQ"
                      className="mb-8"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <CircularText />
      </div>
    </section>
  );
}
