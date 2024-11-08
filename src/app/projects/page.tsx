"use client";
import AllProjectsSection from "@/components/AllProjectsSection";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectPopups from "@/components/ProjectPopups";
import ProjectsSubHeader from "@/components/ProjectsSubHeader";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      <Sidebar />
    </div>
  );
};

const AllProjectsArea = () => {
  return (
    <>
      <div className="w-[78%] p-10 flex flex-col gap-3">
        <ProjectHeader />
        <ProjectsSubHeader />
        <AllProjectsSection />
      </div>
      <ProjectPopups />
    </>
  );
};

export default page;
