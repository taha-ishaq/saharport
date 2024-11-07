"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/1.PNG",
    tag:["All" ,"Website"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/2.PNG",
    tag:["All" ,"Website"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Graphic Design Project",
    description: "Graphic Design Project ",
    image: "/images/projects/3.PNG",
    tag:["All" ,"Website"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/4.PNG",
    tag:["All" ,"Website"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/5.PNG",
    tag: ["All" ,"Website"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/6.PNG",
    tag: ["All" ,"Website"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/food1.PNG",
    tag: ["All" ,"FoodDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 8,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/food2.PNG",
    tag: ["All" ,"FoodDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 9,
    title: "Graphic Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/food3.PNG",
    tag: ["All" ,"FoodDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 10,
    title: "Graphic Illustration Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/ill.jpeg",
    tag: ["All" ,"Illustration"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 11,
    title: "Graphic Illustration Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/ill1.jpeg",
    tag: ["All" ,"Illustration"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 12,
    title: "Graphic Illustration Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/ill2.jpeg",
    tag: ["All" ,"Illustration"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 13,
    title: "Graphic Illustration Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/ill3.jpeg",
    tag: ["All" ,"Illustration"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 14,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/social.JPG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 15,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web.JPG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 16,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web1.PNG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 17,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web2.PNG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 18,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web3.PNG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 19,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web4.PNG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 20,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web5.PNG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 21,
    title: "Graphic Skin Care Design Project",
    description: "Graphic Design Project",
    image: "/images/projects/web6.PNG",
    tag: ["All" ,"SkinCareDesign"],
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center gap-2 py-4 sm:py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Website")}
          name="Website"
          isSelected={tag === "Website"}
        />
        <ProjectTag
          onClick={() => handleTagChange("FoodDesign")}
          name="FoodDesign"
          isSelected={tag === "FoodDesign"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Illustration")}
          name="Illustration"
          isSelected={tag === "Illustration"}
        />
        <ProjectTag
          onClick={() => handleTagChange("SkinCareDesign")}
          name="SkinCareDesign"
          isSelected={tag === "SkinCareDesign"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="flex justify-center"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;