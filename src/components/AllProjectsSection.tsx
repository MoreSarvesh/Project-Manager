"use client";
import ProjectCard from "./ProjectCard";
import { useDataContext } from "@/context/DataContext";

const AllProjectsSection = () => {
  const { data } = useDataContext();
  return (
    <ul className="h-[78%] overflow-auto flex gap-4 flex-wrap mt-6">
      {data.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default AllProjectsSection;
