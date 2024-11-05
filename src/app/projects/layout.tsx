import Navbar from "@/components/Navbar";
import DataContext from "@/context/DataContext";
import PopupContext from "@/context/PopupContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen poppins">
      <Navbar />
      <DataContext>
        <PopupContext>{children}</PopupContext>
      </DataContext>
    </div>
  );
};

export default layout;
