import SplitscreenIcon from "@mui/icons-material/Splitscreen";

const Sidebar = () => {
  return (
    <div className="w-[22%] flex justify-end items-center">
      <div className="h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col">
        <h2 className="text-[22px] font-bold text-center mt-7">
          Projects Completed
        </h2>
        <div className="flex flex-col gap-11 justify-center items-center mt-6">
          <CircularChart />
          <ProjectCompletedLabels />
        </div>
        <ProjectsLists />
      </div>
    </div>
  );
};

const CircularChart = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-40 h-40 bg-slate-100 rounded-full mt-5 flex justify-center items-center">
        <div className="w-[86%] h-[86%] flex justify-center items-center bg-white rounded-full">
          <span className="text-xl font-semibold text-orange-600">90%</span>
        </div>
      </div>
    </div>
  );
};

const ProjectCompletedLabels = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <p className="font-bold text-[17px]">3 Completed</p>
      <p className="text-[13px] text-slate-400">20 Tasks Done</p>
    </div>
  );
};

const ProjectsLists = () => {
  return (
    <ul className="flex h-[50%] flex-col mt-16 mx-4 gap-3 overflow-auto">
      <ProjectListItem />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
      <ProjectListItem />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
      <ProjectListItem />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
    </ul>
  );
};

const ProjectListItem = () => {
  return (
    <li className="p-3 flex gap-2 items-center">
      <div className="w-8 h-8 bg-orange-600 rounded-md flex justify-center items-center text-slate-100">
        <SplitscreenIcon sx={{ fontSize: "19px" }} />
      </div>
      <ul>
        <li className="font-semibold text-[14px]">Project 1</li>
        <li className="text-slate-400 text-[12px]">3 Tasks</li>
      </ul>
    </li>
  );
};

export default Sidebar;
