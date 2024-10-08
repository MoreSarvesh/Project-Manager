import React, { Dispatch, SetStateAction } from "react";
import Popup from "./PopupContainer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { usePopupContext } from "@/context/PopupContext";

const DeleteProject = () => {
  const { setIsDeleteProjectkOpen } = usePopupContext();
  return (
    <Popup>
      <div className="w-[48%] z-[80] p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md">
        <Header handelIsOpen={setIsDeleteProjectkOpen} />
        <div className="flex flex-col gap-2 pt-8 px-7 mt-3">
          <div className="text-slate-600">
            Are you sure you wnat to delete this Project?
          </div>
          <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
            <button
              className="border border-slate-200 text-slate-400 hover:border-slate-300 text-[13px] p-2 px-6 rounded-md transition-all"
              onClick={() => {
                setIsDeleteProjectkOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
              onClick={() => {}}
            >
              Delete Project
            </button>
          </div>
        </div>
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
        <span className="font-semibold text-lg">Delete Project</span>
      </div>
      <CloseOutlinedIcon
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => handelIsOpen(false)}
      />
    </div>
  );
};

export default DeleteProject;
