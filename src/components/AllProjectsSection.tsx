import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjectsSection = () => {
  return (
    <ul className="h-[78%] overflow-auto flex gap-4 flex-wrap mt-6">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ul>
  );
};

export default AllProjectsSection;
