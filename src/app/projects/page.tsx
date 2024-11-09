"use client";
import AllProjectsSection from "@/components/AllProjectsSection";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPopups from "@/components/ProjectPopups";
import ProjectsSubHeader from "@/components/ProjectsSubHeader";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export enum ProjectListFilters {
  newest = "newest",
  oldest = "oldest",
  completed = "completed",
}

const page = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      <Sidebar />
    </div>
  );
};

const AllProjectsArea = () => {
  const [projectListFilter, setProjectListFilter] = useState(
    ProjectListFilters.newest
  );

  return (
    <>
      <div className="w-[78%] p-10 flex flex-col gap-3">
        <ProjectHeader />
        <ProjectsSubHeader
          projectListFilter={projectListFilter}
          handelProjectListFilter={setProjectListFilter}
        />
        <AllProjectsSection />
      </div>
      <ProjectPopups />
    </>
  );
};

export default page;
