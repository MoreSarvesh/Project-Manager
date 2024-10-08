"use client";
import AddProject from "@/components/AddProjectPopup";
import AllProjectsSection from "@/components/AllProjectsSection";
import DeleteProject from "@/components/DeleteProjectPopup";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectsSubHeader from "@/components/ProjectsSubHeader";
import Sidebar from "@/components/Sidebar";
import { usePopupContext } from "@/context/PopupContext";

const page = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      <Sidebar />
    </div>
  );
};

const AllProjectsArea = () => {
  const { isOpen, isDeleteProjectkOpen } = usePopupContext();
  return (
    <>
      <div className="w-[78%] p-10 flex flex-col gap-3">
        <ProjectHeader />
        <ProjectsSubHeader />
        <AllProjectsSection />
      </div>
      {isOpen && <AddProject />}
      {isDeleteProjectkOpen && <DeleteProject />}
    </>
  );
};

export default page;
