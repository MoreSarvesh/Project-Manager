import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProject />
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
          placeholder="Search a project..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
};

const AddProject = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-orange-600 text-white px-3 pr-3 text-[14px] rounded-md flex gap-1 items-center">
        <AddIcon sx={{ fontSize: "28px" }} className="mt-[2px]" />
        <span>New Project</span>
      </button>
    </div>
  );
};

export default ProjectHeader;
