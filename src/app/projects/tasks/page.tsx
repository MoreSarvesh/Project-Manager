"use client";
import AddTask from "@/components/AddTaskPopup";
import AllTasksSection from "@/components/AllTasksSection";
import DeleteProject from "@/components/DeleteProjectPopup";
import TasksHeader from "@/components/TasksHeader";
import TasksSubHeader from "@/components/TasksSubHeader";
import { usePopupContext } from "@/context/PopupContext";

const page = () => {
  const { isAddTaskOpen } = usePopupContext();
  return (
    <div className="bg-slate-50 w-full p-10">
      <TasksHeader />
      <TasksSubHeader />
      <AllTasksSection />
      {isAddTaskOpen && <AddTask />}
    </div>
  );
};

export default page;
