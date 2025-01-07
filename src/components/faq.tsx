import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RotatingImage from "./hero/starThingy";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Rulebookbutton } from "./rulebookbutton";

const faqData = [
  {
    question: "Who is eligible to participate in Yantra Central Hack 2025?",
    answer:
      "The hackathon is open to students from all academic disciplines and branches.",
  },
  {
    question: "When and where will the event be held?",
    answer:
      "Yantra Central Hack 2025 is scheduled from February 7th to 9th, 2025, at Anna Audi.",
  },
  {
    question: "What is the team size requirement?",
    answer:
      "Teams must consist of minimum 3 to a maximium of 5 members. While having at least one female member is encouraged, it is not mandatory. Team having less than 3 members will not be able to proceed with idea submission.",
  },
  {
    question: "What information is required for registration?",
    answer:
      "Participants must provide their Name, Registration Number, Branch, Mobile Number, and Hostel Details (if applicable) during registration on the Yantra Hack Website.",
  },
  {
    question: "Are there any rules for hardware-based projects?",
    answer:
      "Teams working on hardware projects should either bring their required components or request specific hardware during registration. Hardware requests are subject to availability and prior approval by the organizers.",
  },
];

export default function FAQ() {
  return (
    <div
      className="w-full px-6 py-8 bg-[#FFF8F8] flex justify-center items-center min-h-[600px] relative sm:pb-[100px] pb-[50px]"
      id="faqs"
    >
      <div className="max-w-6xl bg-white border-main-orange border-2 p-8 w-full ">
        <div className="flex justify-between sm:flex-row flex-col items-center  mb-16">
          <h2 className="text-6xl font-light  text-main-orange pl-2">FAQs</h2>
          <Rulebookbutton />
        </div>
        <div>
          {faqData.map((faq, index) => (
            <div key={index}>
              <div className="bg-white rounded-lg">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="px-2 py-4 hover:no-underline hover:bg-gray-50 text-left transition-none">
                      <span className="text-lg font-normal">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 py-4 text-gray-600 data-[state=closed]:animate-none data-[state=open]:animate-none">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {index < faqData.length - 1 && (
                <hr className="border-t border-main-orange my-2 mx-8" />
              )}
            </div>
          ))}
        </div>
      </div>
      <RotatingImage className="right-8 rotate-2 absolute sm:block hidden" />
    </div>
  );
}
