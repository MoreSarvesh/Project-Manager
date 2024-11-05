import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import { usePopupContext } from "@/context/PopupContext";
import { IProject } from "@/models/project";
import { ITask } from "@/models/task";
import AddIcon from "@mui/icons-material/Add";
import AddTask from "./AddTaskPopup";

const ProjectCard = ({ project }: { project: IProject }) => {
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const { isAddTaskOpen } = usePopupContext();

  return (
    <li className="w-[300px] h-[270px] flex flex-col justify-between rounded-lg p-7 bg-white relative">
      <ProjectCardHeader
        handleMenu={setIsProjectMenuOpen}
        title={project.title}
        date="2 days ago"
      />
      <ProjectCardBody tasks={project.tasks.slice(0, 2)} />
      <ProjectCardFooter progression={project.progression} />
      {isAddTaskOpen && <AddTask />}
      {isProjectMenuOpen && (
        <Menu
          handleMenu={setIsProjectMenuOpen}
          isProjectMenuOpen={isProjectMenuOpen}
        />
      )}
    </li>
  );
};

const Menu = ({
  handleMenu,
  isProjectMenuOpen,
}: {
  handleMenu: (val: boolean) => void;
  isProjectMenuOpen: boolean;
}) => {
  const { setIsDeleteProjectkOpen } = usePopupContext();
  return (
    <>
      <div
        className={`${isProjectMenuOpen ? "fixed inset-0 z-[5]" : "hidden"}`}
        onClick={() => handleMenu(false)}
      ></div>
      <div className="w-[48%] z-[10] p-3 -right-[25%] top-[25%] absolute flex flex-nowrap gap-2 border border-slate-50 bg-white rounded-lg shadow-md opacity-100 hover:text-orange-600">
        <DeleteOutlineIcon sx={{ fontSize: "25px" }} />
        <button
          onClick={() => {
            handleMenu(false);
            setIsDeleteProjectkOpen(true);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

const ProjectCardHeader = ({
  handleMenu,
  title,
  date,
}: {
  handleMenu: (val: (prev: any) => boolean) => void;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md">
          <SplitscreenIcon sx={{ fontSize: "19px" }} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[19px]">{title}</span>
          <span className="text-slate-400 text-[13px]">{date}</span>
        </div>
      </div>

      <div>
        <MoreVertIcon
          className="text-slate-400 text--[19px] cursor-pointer"
          onClick={() => {
            handleMenu((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};
const ProjectCardBody = ({ tasks }: { tasks: ITask[] }) => {
  const { setIsAddTaskOpen } = usePopupContext();
  return (
    <ul className="text-slate-400 text-[13px] flex flex-col gap-3 ml-3">
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <li className="flex gap-2 items-center" key={i}>
            <CircleIcon className="text-[8px]" />
            <span>{task.title}</span>
          </li>
        ))
      ) : (
        <li className="flex gap-2 items-center justify-center h-[51px]">
          <button
            className="bg-slate-600 text-white px-3 pr-3 text-[16px] rounded-md flex gap-1 items-center"
            onClick={() => {
              setIsAddTaskOpen(true);
              console.log("clicked");
            }}
          >
            <AddIcon sx={{ fontSize: "28px" }} className="mt-[2px]" />
            <span>Add Task</span>
          </button>
        </li>
      )}
    </ul>
  );
};
const ProjectCardFooter = ({ progression }: { progression: number }) => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="text-[12px] flex w-full gap-3 items-center">
        <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
          <div className="w-1/2 bg-orange-600 h-full rounded-r-xl"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[13px] text-slate-400">On Progress</p>
        <div className="flex gap-1 text-[13px]">
          <p>{`${progression}%`}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
