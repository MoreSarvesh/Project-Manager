import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen poppins">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
