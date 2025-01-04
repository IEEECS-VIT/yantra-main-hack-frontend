"use client";

import { motion } from "framer-motion";

const ArrowComponent = () => {
  return (
    <motion.div
      data-w-id="15ae1fc5-8aa2-9e2f-8043-10eb48293922"
      data-animation-type="lottie"
      data-src="https://cdn.prod.website-files.com/60ce366263ce9aedb3f24381/60d429621b4fe488bd9a8ae0_9284-scroll-down-arrows.json"
      data-loop="1"
      data-direction="1"
      data-autoplay="1"
      data-is-ix2-target="0"
      data-renderer="svg"
      data-default-duration="2.033333333333333"
      data-duration="2.033333333333333"
      animate={{ opacity: [0, 1, 0] }} // Example of adding opacity animation
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
          transform: "translate3d(0px, 0px, 0px)",
        }}
      >
        <defs>
          <clipPath id="__lottie_element_13">
            <rect width="100" height="100" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_13)">
          <g
            style={{ display: "block" }}
            transform="matrix(0.9737399816513062,0,0,1,210.52688598632812,-329.3999938964844)"
            opacity="0.25832085524041887"
          >
            <g opacity="1" transform="matrix(0.9433799982070923,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke="rgb(255,255,255)"
                strokeOpacity="1"
                strokeWidth="4"
                d="M-185.6439971923828,367.8999938964844 C-185.6439971923828,367.8999938964844 -174.6909942626953,375.3999938964844 -174.6909942626953,375.3999938964844 C-174.6909942626953,375.3999938964844 -163.8560028076172,367.8999938964844 -163.8560028076172,367.8999938964844"
              ></path>
            </g>
          </g>
          <g
            style={{ display: "block" }}
            transform="matrix(0.9737399816513062,0,0,1,210.52688598632812,-313.8999938964844)"
            opacity="0.9869422930747943"
          >
            <g opacity="1" transform="matrix(0.9433799982070923,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                stroke="rgb(255,255,255)"
                strokeOpacity="1"
                strokeWidth="4"
                d="M-185.6439971923828,367.8999938964844 C-185.6439971923828,367.8999938964844 -174.6909942626953,375.3999938964844 -174.6909942626953,375.3999938964844 C-174.6909942626953,375.3999938964844 -163.8560028076172,367.8999938964844 -163.8560028076172,367.8999938964844"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default ArrowComponent;
