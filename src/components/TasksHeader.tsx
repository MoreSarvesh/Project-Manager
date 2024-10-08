import { usePopupContext } from "@/context/PopupContext";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const TasksHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddTask />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="border-b-2 border-orange-600 h-[39px] w-11 justify-center flex items-center">
        <SearchIcon
          className="text-slate-400 outline-none"
          sx={{ fontSize: "26px" }}
        />
      </div>
      <div className="border-b-2 border-slate-200">
        <input
          type="text"
          placeholder="Search a task..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
};

const AddTask = () => {
  const { setIsAddTaskOpen } = usePopupContext();
  return (
    <div className="flex justify-center">
      <button
        className="bg-orange-600 text-white px-3 pr-3 text-[14px] rounded-md flex gap-1 items-center"
        onClick={() => {
          setIsAddTaskOpen(true);
          console.log("clicked");
        }}
      >
        <AddIcon sx={{ fontSize: "28px" }} className="mt-[2px]" />
        <span>New Task</span>
      </button>
    </div>
  );
};

export default TasksHeader;
