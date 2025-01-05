import React from "react";
import { motion } from "framer-motion";

interface Timeline {
  heading: string;
  date: string;
}

interface VerticalProgressbarProps {
  timeline: Timeline[];
}

const VerticalProgressbar: React.FC<VerticalProgressbarProps> = ({
  timeline,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col px-0 py-8 md:p-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative flex flex-col items-start h-[100%]">
        {timeline.map((timelineItem, index) => (
          <motion.div
            key={index}
            className="relative flex items-start last:mb-0"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="md:w-16 md:h-16 h-8 w-8 rounded-full border bg-transparent
                  flex items-center justify-center border-main-orange"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="md:w-8 md:h-8 h-4 w-4 rounded-full bg-main-orange"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.15 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              {index < timeline.length - 1 && (
                <motion.div
                  className="w-[2px] h-40 md:h-96 bg-main-orange origin-top"
                  variants={lineVariants}
                />
              )}
              {index === timeline.length - 1 && (
                <motion.div
                  className="w-[2px] h-8 md:h-12 bg-main-orange origin-top"
                  variants={lineVariants}
                />
              )}
            </div>

            <motion.div
              className="ml-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-black font-semibold text-xl md:text-3xl">
                {timelineItem.heading.split(" ").length === 1 ? (
                  <span className="text-black">{timelineItem.heading}</span>
                ) : (
                  timelineItem.heading.split(" ").map((word, index, arr) =>
                    index === arr.length - 1 ? (
                      <span key={index} className="text-orange-500 block">
                        {word}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  )
                )}
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                {timelineItem.date}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VerticalProgressbar;
