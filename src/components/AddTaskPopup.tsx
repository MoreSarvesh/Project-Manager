import React, { Dispatch, SetStateAction } from "react";
import Popup from "./PopupContainer";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { usePopupContext } from "@/context/PopupContext";

const AddTask = () => {
  const { setIsAddTaskOpen } = usePopupContext();
  return (
    <Popup>
      <div className="w-[48%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md">
        <Header handelIsOpen={setIsAddTaskOpen} />
        <form className="flex flex-col gap-2 pt-8 px-7 mt-3">
          <ProjectInput />
          <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
            <button
              className="border border-slate-200 text-slate-400 hover:border-slate-300 text-[13px] p-2 px-6 rounded-md transition-all"
              onClick={(e) => {
                e.preventDefault();
                setIsAddTaskOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
};

const Header = ({
  handelIsOpen,
}: {
  handelIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-between items-center pt-7 px-8">
      <div className="flex items-center gap-2">
        <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
          <BorderAllIcon
            sx={{ fontSize: "21px" }}
            className="text-orange-600"
          />
        </div>
        <span className="font-semibold text-lg">Add Task</span>
      </div>
      <CloseOutlinedIcon
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => handelIsOpen(false)}
      />
    </div>
  );
};

const ProjectInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-slate-600">Task Name</span>
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <input
            type="text"
            name="task-title"
            id="task-title"
            className="p-[10px] text-[13px] w-full rounded-md border outline-none"
            placeholder="Enter task Title"
          />
        </div>
      </div>
      <span className="text-[14px] font-medium text-slate-600">
        Task Priority
      </span>
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <select
            name="task-priority"
            id="task-priority"
            className="p-[10px] text-[13px] w-full rounded-md border outline-none"
          >
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
        </div>
      </div>
      <span className="text-[14px] font-medium text-slate-600">
        Project Name
      </span>
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <select
            name="project-name"
            id="project-name"
            className="p-[10px] text-[13px] w-full rounded-md border outline-none"
          >
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
