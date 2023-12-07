"use client";
import React from "react";
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function Team() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="text-gray-600 body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          variants={itemVariants}
          className="flex flex-col text-center w-full mb-20"
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven`t heard of them.
          </p>
        </motion.div>
        <div className="flex flex-wrap -m-2">
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Holden Caulfield
                </h2>
                <p className="text-white">UI Designer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Henry Letham
                </h2>
                <p className="text-white">CTO</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Oskar Blinde
                </h2>
                <p className="text-white">Founder</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">John Doe</h2>
                <p className="text-white">DevOps</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Martin Eden
                </h2>
                <p className="text-white">Software Engineer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Boris Kitua
                </h2>
                <p className="text-white">UX Researcher</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Atticus Finch
                </h2>
                <p className="text-white">QA Engineer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Alper Kamu
                </h2>
                <p className="text-white">System</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 lg:w-1/3 md:w-1/2 w-full"
          >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 8 16 24"
                width="60"
                height="60"
              >
                <path
                  d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
                  fill="white"
                ></path>
              </svg>
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Rodrigo Monchi
                </h2>
                <p className="text-white">Product Manager</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
