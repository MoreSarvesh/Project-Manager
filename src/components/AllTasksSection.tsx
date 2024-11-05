import CircleIcon from "@mui/icons-material/Circle";
import ListIcon from "@mui/icons-material/List";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckBoxIcon from "@mui/material/Checkbox";
import CachedIcon from "@mui/icons-material/Cached";
import { useEffect, useState } from "react";
import { useDataContext } from "@/context/DataContext";
import { ITask } from "@/models/task";
import { listItemDataType } from "@/app/projects/tasks/page";

export enum TaskFilter {
  inProgress,
  completed,
}

const AllTasksSection = ({
  tasks,
  taskListFilter,
}: {
  tasks: listItemDataType[];
  taskListFilter: string;
}) => {
  const [taskStatusFilter, setTaskStatusFilter] = useState(
    TaskFilter.inProgress
  );
  const { data } = useDataContext();

  //console.log("filter: ", filter);

  return (
    <div className="ml-12 mt-11 flex flex-col gap-4">
      <Tabs
        handelFilter={setTaskStatusFilter}
        filter={taskStatusFilter}
        tasks={tasks}
      />
      <div className="flex flex-col">
        <TaskList
          filter={taskStatusFilter}
          tasks={
            taskListFilter === "All Projects"
              ? tasks
              : tasks.filter((task) => task.project === taskListFilter)
          }
        />
      </div>
    </div>
  );
};

const Tabs = ({
  handelFilter,
  filter,
  tasks,
}: {
  handelFilter: (arg: TaskFilter) => void;
  filter: TaskFilter;
  tasks: listItemDataType[];
}) => {
  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      <div
        className={`${
          filter === 0
            ? "flex gap-2 text-orange-400 font-semibold"
            : "flex gap-2 text-slate-400"
        } hover:cursor-pointer`}
        onClick={() => handelFilter(TaskFilter.inProgress)}
      >
        <span>On Going Tasks</span>
        <span
          className={`${
            filter === 0
              ? "bg-orange-600 text-white px-2 rounded-md"
              : "bg-slate-200 px-2 rounded-md"
          }`}
        >
          {tasks.filter((task) => task.task.isCompleted === false).length || 0}
        </span>
      </div>
      <div
        className={`${
          filter === 1
            ? "flex gap-2 text-orange-400 font-semibold"
            : "flex gap-2 text-slate-400"
        } hover:cursor-pointer`}
        onClick={() => handelFilter(TaskFilter.completed)}
      >
        <span>Completed Tasks</span>
        <span
          className={`${
            filter === 1
              ? "bg-orange-600 text-white px-2 rounded-md"
              : "bg-slate-200 px-2 rounded-md"
          }`}
        >
          {tasks.filter((task) => task.task.isCompleted === true).length || 0}
        </span>
      </div>
    </div>
  );
};

const TaskList = ({
  tasks,
  filter,
}: {
  tasks: listItemDataType[];
  filter: TaskFilter;
}) => {
  return (
    <>
      {tasks.length > 0 ? (
        <>
          {tasks.map((task, i) => {
            if (filter === TaskFilter.inProgress) {
              if (task.task.isCompleted === false)
                return (
                  <TaskListItem
                    key={i}
                    title={task.task.title}
                    project={task.project}
                    priority={task.task.priority}
                    status={task.task.isCompleted}
                  />
                );
            } else {
              if (task.task.isCompleted === true)
                return (
                  <TaskListItem
                    key={i}
                    title={task.task.title}
                    project={task.project}
                    priority={task.task.priority}
                    status={task.task.isCompleted}
                  />
                );
            }
          })}
        </>
      ) : (
        <div className="text-center">No Tasks</div>
      )}
    </>
  );
};

const TaskListItem = ({
  title,
  project,
  status,
  priority,
}: {
  title: string;
  project: string;
  status: boolean;
  priority: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <CheckBoxIcon />
      <div className="w-full bg-white rounded-lg border border-s-slate-100 flex gap-3 justify-between items-center p-5 py-6">
        <div className="flex gap-3 items-center">
          <div>
            <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
              <ListIcon className="text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold hover:text-orange-600 cursor-pointer">
              {title}
            </span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-2">{project}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-36 justify-between font-bold w-[70%]">
          <div className="flex gap-2 items-center">
            <CachedIcon className="text-[24px] text-slate-400" />
            <span className="text-[14px] text-slate-400">
              {status ? "Completed" : "In Progress"}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <CircleIcon className="text-[10px] text-green-600" />
            <span className="texxt-[14px] text-slate-400">{priority}</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="rounded-lg p-2 flex justify-center items-center cursor-pointer bg-orange-200 hover:bg-orange-300 transition-all">
              <EditOutlinedIcon
                className="text-orange-600"
                sx={{ fontSize: "17px" }}
              />
            </div>
            <div className="rounded-lg p-2 flex justify-center items-center cursor-pointer bg-slate-200 hover:bg-slate-300 transition-all">
              <DeleteOutlineOutlinedIcon
                className="text-slate-600"
                sx={{ fontSize: "17px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasksSection;
