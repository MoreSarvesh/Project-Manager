"use client";
import AddProject from "@/components/AddProjectPopup";
import AllProjectsSection from "@/components/AllProjectsSection";
import DeleteProject from "@/components/DeleteProjectPopup";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectsSubHeader from "@/components/ProjectsSubHeader";
import Sidebar from "@/components/Sidebar";
import { useDataContext } from "@/context/DataContext";
import { usePopupContext } from "@/context/PopupContext";
import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";
import { fetchData, refreshAccessToken } from "../utils/helper";
import { useRouter } from "next/navigation";

const page = () => {
  const { setData } = useDataContext();
  const { user, setUser } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const signal = controller.signal;
      try {
        let resposne = await fetchData("projects", user, signal);

        if (resposne.status === 401) {
          const newAccessToken = await refreshAccessToken();
          setUser(newAccessToken);

          resposne = await fetchData("projects", newAccessToken, signal);
        }

        if (!resposne.ok) {
          const error = await resposne.json();
          throw new Error(JSON.stringify(error));
        }

        const data = await resposne.json();
        //console.log("Data: ", data);

        setData(data.data.projects.projects);
      } catch (error) {
        router.replace("http://localhost:3000/login");
        console.log("canceling request");
        controller.abort();
      }
    })();

    return () => {};
  }, []);
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
