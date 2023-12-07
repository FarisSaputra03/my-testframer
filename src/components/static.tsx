"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";

export default function Static() {
  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  const rounded4 = useTransform(count4, Math.round);

  useEffect(() => {
    const animation = animate(count, 46, { duration: 10 });
    const animation2 = animate(count2, 74, { duration: 10 });
    const animation3 = animate(count3, 1300, { duration: 10 });
    const animation4 = animate(count4, 2700, { duration: 10 });

    return () => {
      animation.stop();
      animation2.stop();
      animation3.stop();
      animation4.stop();
    };
  }, []);

  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven`t heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        {/* mobile */}
        <div className="flex sm:hidden flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded4}
              </motion.h2>
              <p className="leading-relaxed text-white">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded3}
              </motion.h2>
              <p className="leading-relaxed text-white">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded2}
              </motion.h2>
              <p className="leading-relaxed text-white">Files</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded}
              </motion.h2>
              <p className="leading-relaxed text-white">Places</p>
            </div>
          </div>
        </div>
        {/* web */}
        <div className="hidden sm:flex flex-wrap -m-4 text-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
          >
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded4}
              </motion.h2>
              <p className="leading-relaxed text-white">Downloads</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
          >
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded3}
              </motion.h2>
              <p className="leading-relaxed text-white">Users</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
          >
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded2}
              </motion.h2>
              <p className="leading-relaxed text-white">Files</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
          >
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <div>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <motion.h2 className="title-font font-medium text-3xl text-white">
                {rounded}
              </motion.h2>
              <p className="leading-relaxed text-white">Places</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
