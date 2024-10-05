import AllTasksSection from "@/components/AllTasksSection";
import TasksHeader from "@/components/TasksHeader";
import TasksSubHeader from "@/components/TasksSubHeader";

const AllTasks = () => {
  return (
    <div className="bg-slate-50 w-full p-10">
      <TasksHeader />
      <TasksSubHeader />
      <AllTasksSection />
    </div>
  );
};

export default AllTasks;
