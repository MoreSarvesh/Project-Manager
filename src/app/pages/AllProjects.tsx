import ProjectHeader from "../../components/ProjectHeader";
import ProjectsSubHeader from "../../components/ProjectsSubHeader";
import AllProjectsSection from "../../components/AllProjectsSection";
import Sidebar from "../../components/Sidebar";

const AllProjects = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      <Sidebar />
    </div>
  );
};

const AllProjectsArea = () => {
  return (
    <div className="w-[78%] p-10 flex flex-col gap-3">
      <ProjectHeader />
      <ProjectsSubHeader />
      <AllProjectsSection />
    </div>
  );
};

export default AllProjects;
