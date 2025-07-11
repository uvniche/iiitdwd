"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import JourneyComponent from "./journey-component";

const JourneySection = () => {
  const [selectedProgram, setSelectedProgram] = useState("btech");
  return (
    <div className="w-[87.5vw] max-w-[1680px] mx-auto py-16 md:py-24">
      <div className="mx-auto relative">
        <div className="absolute z-[-2] w-[3px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)]  h-full bg-tertiary/30">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-main"></div>
        </div>

        <h1 className="text-center text-title-1 font-semibold tracking-tight mb-16">
          START YOUR JOURNEY HERE
        </h1>

        <div className="relative flex flex-col gap-10 md:gap-16">
          {/* Timeline */}

          {/* Content */}

          {/* Section 1 */}
          <JourneyComponent id="major">
            <section className="flex px-6 md:px-12 flex-col md:flex-row gap-8 w-full">
              <div className="flex-1 text-title-2">
                <h3 className="text-title-1 font-bold text-main mb-4">
                  Find Your Program
                </h3>
                <h2 className="text-main-title font-bold mb-8">
                  Explore every area you can study
                </h2>
                <p className="text-gray-700 mb-6">
                  See majors and programs for:
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Select
                    onValueChange={value => setSelectedProgram(value)}
                    defaultValue="btech"
                  >
                    <SelectTrigger className="w-full sm:w-64 border-2 rounded !h-12">
                      <SelectValue placeholder="B.Tech Students" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btech">B.Tech</SelectItem>
                      <SelectItem value="m-tech">M.Tech (Research)</SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>

                  <Link
                    href={`/admission/${selectedProgram}`}
                    className="w-fit flex"
                  >
                    <Button
                      variant="outline"
                      className="bg-main flex items-center hover:bg-main/90 text-white hover:text-white transition-colors rounded h-12 border-0 px-6"
                    >
                      LEARN MORE <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <div className="w-full aspect-[3/2] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://iiitdwd.ac.in/images/every_area.JPG"
                    alt="IIIT Dharwad academic programs"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </section>
          </JourneyComponent>

          <JourneyComponent id="visit">
            <section className="flex px-6 md:px-12 flex-col md:flex-row gap-8 w-full">
              <div className="flex-1 order-2 md:order-1">
                <div className="w-full aspect-[3/2] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://iiitdwd.ac.in/images/explore_campus.JPG"
                    alt="IIIT Dharwad campus view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-title-2 order-1 md:order-2">
                <h3 className="text-title-1 font-bold text-main mb-4">
                  Visit IIIT Dharwad
                </h3>
                <h2 className="text-main-title font-bold mb-8">
                  Explore our Dharwad campus
                </h2>
                <p className="text-gray-700 mb-6">
                  Experience our vibrant campus in person and see what makes
                  IIIT Dharwad special.
                </p>

                <Link href={"/how-to-reach"} className="w-fit flex">
                  <Button
                    variant="outline"
                    className="bg-main flex items-center hover:bg-main/90 text-white hover:text-white transition-colors rounded h-12 border-0 px-6"
                  >
                    VISIT <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </section>
          </JourneyComponent>

          {/* Section 3 */}
          <JourneyComponent id="tuition">
            <section className="flex px-6 md:px-12 flex-col md:flex-row gap-8 w-full">
              <div className="flex-1 text-title-2">
                <h3 className="text-title-1 font-bold text-main mb-4">
                  Review Tuition
                </h3>
                <h2 className="text-main-title font-bold mb-8">
                  Get financial information you need
                </h2>
                <p className="text-gray-700 mb-6">
                  Learn about tuition fees available at IIIT Dharwad.
                </p>

                <Link
                  href={"https://iiitdwd.ac.in/docs/Fee_Structure_2025-26.pdf"}
                  className="w-fit flex"
                >
                  <Button
                    variant="outline"
                    className="bg-main flex items-center hover:bg-main/90 text-white hover:text-white transition-colors rounded h-12 border-0 px-6"
                  >
                    EXPLORE FEES <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={"/docs/OM_39-22025-CSIS_dated_2025-04-22.pdf"}
                  className="w-fit flex mt-4"
                >
                  <Button
                    variant="outline"
                    className="bg-main flex items-center hover:bg-main/90 text-white hover:text-white transition-colors rounded h-12 border-0 px-6"
                  >
                    Financial Aid and Student Loans{" "}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex-1">
                <div className="w-full aspect-[3/2] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://iiitdwd.ac.in/images/financial_info.JPG"
                    alt="IIIT Dharwad tuition and fees information"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </JourneyComponent>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
