"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Problem solving</li>
        <li>Visualization</li>
        <li>Sketches</li>
        <li>Typography</li>
        <li>UI/UX Designing</li>
        <li>Sales And Marketing</li>
        <li>Time management</li>
        <li>Color theory</li>
      </ul>
    ),
  },
  {
    title: "Software Skills",
    id: "SEskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Keyshot</li>
        <li>Canva</li>
        <li>InDesign</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Industrial Design, University of Gujrat, 2019 - 2023</li>
        <li>Diploma in Design, Vocational Training Institute, 2018-2019</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Rough Copies - Graphic Designer (June 2024)</li>
        <li>Digilatics - Graphic Designer (2023-2024)</li>
        <li>Sialkot Industries - Industrial Designer (2022-2023)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="flex flex-col md:flex-row items-center gap-8 py-8 px-4 sm:py-16 sm:px-8 md:px-16 xl:gap-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-80 xl:h-80"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col w-full md:w-auto">
          <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">About Me</h2>
          <p className="text-sm sm:text-base lg:text-lg">
            My name is Sahar Sultan, and I am a graphic designer focusing on the technical side of design.
            I specialize in illustration and visual design, primarily using Illustrator and Photoshop.
          </p>
          <div className="flex overflow-x-auto mt-8 space-x-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("SEskills")}
              active={tab === "SEskills"}
            >
              Software Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 text-sm sm:text-base">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
