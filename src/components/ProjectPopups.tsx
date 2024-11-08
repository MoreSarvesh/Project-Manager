import { usePopupContext } from "@/context/PopupContext";
import AddProject from "./AddProjectPopup";
import DeleteProject from "./DeleteProjectPopup";

const ProjectPopups = () => {
  const { isOpen, isDeleteProjectkOpen } = usePopupContext();
  return (
    <div>
      {isOpen && <AddProject />}
      {isDeleteProjectkOpen && <DeleteProject />}
    </div>
  );
};

export default ProjectPopups;
