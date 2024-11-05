"use client";
import { fetchData, refreshAccessToken } from "@/app/utils/helper";
import AddTask from "@/components/AddTaskPopup";
import AllTasksSection from "@/components/AllTasksSection";
import DeleteProject from "@/components/DeleteProjectPopup";
import TasksHeader from "@/components/TasksHeader";
import TasksSubHeader from "@/components/TasksSubHeader";
import { useDataContext } from "@/context/DataContext";
import { usePopupContext } from "@/context/PopupContext";
import { useUserContext } from "@/context/UserContext";
import { ITask } from "@/models/task";
import { useEffect, useState } from "react";

export type listItemDataType = {
  project: string;
  task: ITask;
};
const page = () => {
  const { isAddTaskOpen } = usePopupContext();
  const { user, setUser } = useUserContext();
  const [tasks, setTasks] = useState([] as listItemDataType[]);
  const [taskListFilter, setTaskListFilter] = useState("All Projects");

  useEffect(() => {
    (async () => {
      try {
        let resposne = await fetchData("tasks", user);

        if (resposne.status === 401) {
          const newAccessToken = await refreshAccessToken();
          setUser(newAccessToken);

          resposne = await fetchData("tasks", newAccessToken);
        }

        if (!resposne.ok) {
          const error = await resposne.json();
          throw new Error(JSON.stringify(error));
        }

        const data = await resposne.json();
        console.log("Data: ", data.data);

        setTasks(data.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="bg-slate-50 w-full p-10">
      <TasksHeader />
      <TasksSubHeader
        tasks={tasks}
        taskListFilter={taskListFilter}
        handelTaskListFilter={setTaskListFilter}
      />
      <AllTasksSection tasks={tasks} taskListFilter={taskListFilter} />
      {isAddTaskOpen && <AddTask />}
    </div>
  );
};

export default page;
