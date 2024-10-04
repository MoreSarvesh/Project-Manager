import Navbar from "@/components/Navbar";
import AllProjects from "./pages/AllProjects";
import AllTasks from "./pages/AllTasks";

const page = () => {
  return (
    <div className="flex w-full h-screen poppins">
      <Navbar />
      {/* <AllProjects /> */}
      <AllTasks />
    </div>
  );
};

export default page;
