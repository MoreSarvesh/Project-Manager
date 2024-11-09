"use client";
import { fetchData, refreshAccessToken } from "@/app/utils/helper";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDataContext } from "@/context/DataContext";
import { useUserContext } from "@/context/UserContext";

const AllProjectsSection = () => {
  const { data, setData } = useDataContext();
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
          router.replace("http://localhost:3000/login");
          console.log("canceling request");
          controller.abort();
        }

        const data = await resposne.json();
        //console.log("Data: ", data);

        setData(data.data.projects.projects);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ul className="h-[78%] overflow-auto flex gap-4 flex-wrap mt-6">
      {data.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default AllProjectsSection;
