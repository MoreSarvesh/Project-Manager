import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ProjectsSubHeader = () => {
  return (
    <div className="mt-20 flex justify-between font-bold items-center">
      <h2 className="text-[26px] font-bold">My Projects</h2>
      <SortByButton />
    </div>
  );
};

const SortByButton = () => {
  return (
    <div className="flex text-[15px] font-semibold gap-3">
      <span className="text-slate-300">Sort By</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-800">Recent Projects</span>
        <KeyboardArrowDownIcon sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
};

export default ProjectsSubHeader;
