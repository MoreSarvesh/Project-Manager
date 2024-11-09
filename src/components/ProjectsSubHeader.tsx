import { ProjectListFilters } from "@/app/projects/page";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDown from "./DropDown";
import { useState } from "react";
const ProjectsSubHeader = ({
  projectListFilter,
  handelProjectListFilter,
}: {
  projectListFilter: ProjectListFilters;
  handelProjectListFilter: (arg: ProjectListFilters) => void;
}) => {
  return (
    <div className="mt-20 flex justify-between font-bold items-center">
      <h2 className="text-[26px] font-bold">My Projects</h2>
      <SortByButton
        projectListFilter={projectListFilter}
        handelProjectListFilter={
          handelProjectListFilter as (arg: string) => void
        }
      />
    </div>
  );
};

const SortByButton = ({
  projectListFilter,
  handelProjectListFilter,
}: {
  projectListFilter: ProjectListFilters;
  handelProjectListFilter: (arg: ProjectListFilters) => void;
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <div
      className="flex text-[15px] font-semibold gap-3"
      onClick={() => setOpenDropDown((prev) => !prev)}
    >
      <span className="text-slate-300">Sort By</span>
      <div className="flex gap-1 items-center cursor-pointer relative">
        <span className="text-slate-800">{projectListFilter} Projects</span>
        <KeyboardArrowDownIcon sx={{ fontSize: "19px" }} />

        {openDropDown && (
          <DropDown
            options={[
              ProjectListFilters.newest,
              ProjectListFilters.oldest,
              ProjectListFilters.completed,
            ]}
            handelFilter={handelProjectListFilter as (arg: string) => void}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsSubHeader;
