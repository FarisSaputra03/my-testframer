"use client";
import React from "react";
import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const item = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClasses = isOpen
    ? "translate-x-0 ease-out transition-medium"
    : "-translate-x-full ease-in transition-medium";

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="text-gray-600 body-font"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          style={
            {
              "": "",
              top: "",
              letterSpacing: "",
              x: "",
            } as any
          }
          className="flex justify-between title-font items-center text-white font-bold mb-4 md:mb-0"
        >
          <div className="flex w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="2 8 16 24"
              width="24"
              height="24"
            >
              <path
                d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                fill="white"
              ></path>
            </svg>
            <span className="ml-3 text-xl">Framer Motion</span>
          </div>
          <motion.div>
            <motion.button
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-bold py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-10 h-10 flex sm:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </motion.button>
            <motion.div
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
              }}
              className={`fixed top-0 left-0 z-50 h-full bg-black shadow-lg ${sidebarClasses}`}
            >
              <motion.button
                variants={{
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                className="absolute top-0 right-0 mt-2 mr-2 text-xl text-white font-bold py-2 px-2 rounded"
                onClick={handleToggle}
              >
                X
              </motion.button>
              <div className="w-[200px]">
                <div className="p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 8 16 24"
                    width="50"
                    height="50"
                  >
                    <path
                      d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="space-y-4">
                  <div>
                    <motion.p variants={itemVariants} className="text-white">
                      {" "}
                      First Link
                    </motion.p>
                  </div>
                  <div>
                    <motion.p variants={itemVariants} className="text-white">
                      {" "}
                      Second Link
                    </motion.p>
                  </div>
                  <div>
                    <motion.p variants={itemVariants} className="text-white">
                      {" "}
                      Third Link
                    </motion.p>
                  </div>
                  <div>
                    <motion.p variants={itemVariants} className="text-white">
                      {" "}
                      Fourth Link
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <nav className="md:ml-[150px] md:mr-auto hidden sm:flex flex-wrap text-base">
          <motion.button
            variants={item}
            className="mr-5 text-white font-semibold"
          >
            First Link
          </motion.button>
          <motion.button
            variants={item}
            className="mr-5 text-white font-semibold"
          >
            Second Link
          </motion.button>
          <motion.button
            variants={item}
            className="mr-5 text-white font-semibold"
          >
            Third Link
          </motion.button>
          <motion.button
            variants={item}
            className="mr-5 text-white font-semibold"
          >
            Fourth Link
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
