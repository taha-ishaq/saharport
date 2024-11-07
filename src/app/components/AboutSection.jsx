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
        <li>Visulization</li>
        <li>Sketches</li>
        <li>Typography</li>
        <li>UI/UX Designing</li>
        <li>Sales And Marketing</li>
        <li>Time managment</li>
        <li>Colour theory</li>
      </ul>
    ),
  },
  {
    title: "Software Skills",
    id: "SEskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe
illustrator</li>
        <li>Adobe
        Photoshop</li>
        <li>Keyshot</li>
        <li>Canva</li>
        <li>Indesign</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BS Industrial design
University of Gujrat
2019 - 2023</li>
        <li>Diploma in design
Vocational Training Institute
2018- 2019</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Rough Copies
Graphic Designer June 2024

</li>
        <li>Digilatics
        Graphic Designer 2023-2024</li>
        <li>Sialkot Industries
        Industrial designer 2022-2023
        </li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          My self Sahar Sultan,I am a graphic designer,learning more towrds the technical side of things versus the art side.I do illustration and visual apperance of design.I work mostly in illustrator and photoshop.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
