"use client";
import { listItemDataType } from "@/app/projects/tasks/page";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";

const TasksSubHeader = ({
  tasks,
  taskListFilter,
  handelTaskListFilter,
}: {
  tasks: listItemDataType[];
  taskListFilter: string;
  handelTaskListFilter: (arg: string) => void;
}) => {
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isSortingMenuOpen, setIsSortingMenuOpen] = useState(false);
  const [projectList, setProjectList] = useState(["All Projects"]);

  useEffect(() => {
    const projects: string[] = ["All Projects"];

    for (let i = 0; i < tasks.length; i++) {
      if (projects.indexOf(tasks[i].project) === -1) {
        projects.push(tasks[i].project);
      }
      //console.log("temp: ", projects);
      setProjectList(projects);
    }
  }, [tasks]);

  return (
    <div className="mt-24 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-[41px] -mt-1 flex justify-center items-center h-[44px] rounded-md bg-orange-100">
          <SplitscreenIcon
            className="text-orange-600"
            sx={{ fontSize: "21px" }}
          />
        </div>

        <ul className="flex flex-col gap-[7px]">
          <li
            className="text-[17px] font-semibold flex gap-2 items-center"
            onClick={() => setIsProjectMenuOpen((prev) => !prev)}
          >
            <div className="text-slate-700 flex gap-2 items-center relative">
              <span className="text-lg cursor-pointer">{taskListFilter}</span>
              <span className="bg-slate-700 text-white text-[14px] p-[2px] px-2 rounded-md">
                {projectList.length}
              </span>
              {isProjectMenuOpen && (
                <DropDown
                  options={projectList.map((project) => project)}
                  handelFilter={handelTaskListFilter}
                />
              )}
            </div>
            <KeyboardArrowDownIcon className="text-slate-600 text-lg" />
          </li>

          <div className="flex gap-1 items-center">
            <li className="text-[12px] h-[4px] w-[280px] bg-slate-200 rounded-md overflow-auto">
              <div className="w-1/2 h-[100%] bg-orange-600 rounded-r-xl"></div>
            </li>
            <p className="text-[12px] text-slate-400 ml-3">20% Completed</p>
          </div>
        </ul>
      </div>
      <div
        className="relative"
        onClick={() => setIsSortingMenuOpen((prev) => !prev)}
      >
        <SortByButton />
        {isSortingMenuOpen && (
          <DropDown
            options={["new", "old", "progression"]}
            handelFilter={() => {}}
          />
        )}
      </div>
    </div>
  );
};

const SortByButton = () => {
  return (
    <div className="flex text-[15px] font-semibold gap-3">
      <span className="text-slate-300">Sort By</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-800">Recent Tasks</span>
        <KeyboardArrowDownIcon sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
};

/* const DropDown = ({
  options,
  handelFilter,
}: {
  options: string[];
  handelFilter: (arg: string) => void;
}) => {
  return (
    <div className="bg-white rounded-sm px-4 py-2 absolute top-10 -right-10 w-full text-center shadow-lg">
      {options.map((opt, index) => (
        <div
          key={opt + index}
          className="text-slate-400 font-light py-2 hover:text-orange-600 cursor-pointer"
          onClick={() => handelFilter(opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );
}; */

export default TasksSubHeader;
