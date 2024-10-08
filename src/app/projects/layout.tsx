import Navbar from "@/components/Navbar";
import PopupContext from "@/context/PopupContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen poppins">
      <Navbar />
      <PopupContext>{children}</PopupContext>
    </div>
  );
};

export default layout;
