"use client"

import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

interface ProjectCardProps {
  clientName: string;
  projectTitle: string;
  imageUrl: string;
  href?: string;
  className?: string;
}

export const ProjectCard = ({ 
  clientName, 
  projectTitle, 
  imageUrl, 
  href = "#",
  className 
}: ProjectCardProps) => {
  return (
    <motion.div
      className={cn("group cursor-pointer", className)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <a href={href} className="block h-full w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gray-100" style={{ width: "880px", height: "509px" }}>
          {/* 1. Image Section */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={projectTitle}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Arrow Icon */}
            <div className="absolute bottom-4 left-4">
              <div className="relative h-8 w-8">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-white/20 rounded-full transition-all duration-300 group-hover:scale-[1.2] group-hover:bg-white/30"></div>
                
                {/* Diagonal Arrow (Default) */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1 11L11 1M11 1H1M11 1V11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                {/* Right Arrow (Hover) */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 scale-0 opacity-0 group-hover:scale-[1.2] group-hover:opacity-100">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6L10 6M10 6L6 2M10 6L6 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </a>
    </motion.div>
  );
};
