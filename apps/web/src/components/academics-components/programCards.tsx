"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

// Define types
interface Program {
  title: string;
  description: string;
  imageSrc?: string; // Optional string path
  link: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  imageSrc,
  link,
}) => {
  return (
    <Link
      href={link}
      className="relative h-full flex flex-col bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
    >
      {/* Underline effect on hover */}
      <div className="absolute bottom-0 left-1/2 w-0 h-[4px] bg-main transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></div>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="relative h-50 w-full object-cover"
        />
      ) : (
        <div className="relative h-50 w-full bg-gray-200" />
      )}
      <div className="p-6 flex flex-col justify-between h-full flex-1">
        <div className="">
          <h2 className="text-title-1 font-bold mb-2 text-main">{title}</h2>
          <p className="text-gray-700 text-title-3 font-normal mb-4">
            {description}
          </p>
        </div>
        <div className="inline-flex items-center bg-main text-white px-4 py-2 rounded font-medium transition-all duration-300 group-hover:bg-main/90">
          EXPLORE
          <ArrowRight className="ml-2 w-6 h-6 stroke-[3] transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

interface ProgramCardsProps {
  programs?: Program[]; // Make it optional with a default fallback
}

const ProgramCards: React.FC<ProgramCardsProps> = ({ programs }) => {
  // Default programs if none are provided
  const defaultPrograms: Program[] = [
    {
      title: "Under-Graduate Programs",
      description:
        "Explore top ranked master's, doctoral and professional degrees.",
      link: "/academics/departments",
      imageSrc: "https://iiitdwd.ac.in/images/undergrad_programs.JPG",
    },
    {
      title: "Online Programs",
      description:
        "Find the rigorous training the university is known for online.",
      link: "https://online.iiitdwd.ac.in/",
      imageSrc: "https://iiitdwd.ac.in/images/online_programs.JPG",
    },
    {
      title: "Major Programs",
      description:
        "Browse core degree programs with course details and requirements.",
      link: "https://iiitdwd.ac.in/docs/MajorPrograms.pdf",
      imageSrc: "https://iiitdwd.ac.in/images/minors.JPG",
    },
    {
      title: "Minor Programs",
      description:
        "Explore minors that add depth or breadth to your main degree.",
      link: "https://iiitdwd.ac.in/docs/MinorPrograms.pdf",
      imageSrc: "https://iiitdwd.ac.in/images/course_catalog.JPG",
    },
  ];

  // Use provided programs or fall back to defaults
  const displayPrograms = programs || defaultPrograms;

  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto py-8">
      {" "}
      {/* Increased px-10 for more side margin */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayPrograms.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};

export default ProgramCards;
