"use client";
import React from "react";
import { motion } from "framer-motion";
import { LiquidButton } from "../ui/liguid-glass-button";

export const SimpleSaaSHeroDemo = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-32">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4">
        {/* Title */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          <h1 className="text-[56px] font-medium leading-[67.2px] tracking-[-3px] text-center text-[#121212] font-['Inter']">
            Fragment OS
            <br />
            Your Second Brain
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="text-center max-w-[768px] mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          <p className="text-[18px] font-normal leading-[27px] text-center text-[#6D6D6D] font-['Inter']">
            Fragment OS is an all-in-one Notion system that centralizes tasks,
            <br />
            projects, notes, resources, and everything in between.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div 
          className="flex justify-center mt-[30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          <LiquidButton 
            variant="outline"
            size="lg"
            className="border border-gray-200 bg-white text-black rounded-full px-8 py-3 text-[18px] font-normal leading-[27px] hover:bg-gray-50 scale-130"
          >
            Get Started
          </LiquidButton>
        </motion.div>


        {/* Screenshot Image */}
        <motion.div 
          className="w-[950px] h-[633px] border-4 border-[#121212] rounded-2xl bg-white overflow-hidden shadow-2xl mt-[250px]"
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            y: 50 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0 
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.3
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="https://framerusercontent.com/images/vrfEi2EEdCjeaPndjlriPJlIKI.png"
            alt="Fragment OS Screenshot"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
