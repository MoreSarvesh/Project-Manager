"use client";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderAllIIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
      <Link href="/">
        <Logo />
      </Link>
      <Menu />
      <Link href="/projects/profile">
        <Profile />
      </Link>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TaskAltIcon
        className={`text-orange-600 font-bold`}
        sx={{ fontSize: "41px" }}
      />
    </div>
  );
};
const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6 items-center">
      <Link href="/projects">
        <BorderAllIIcon
          className={`${
            pathname.includes("/tasks") ? "text-slate-300" : "text-orange-600"
          } cursor-pointer`}
          sx={{
            fontSize: `${pathname.includes("/tasks") ? "25px" : "30px"}`,
          }}
        />
      </Link>
      <Link href="/projects/tasks">
        <SplitscreenIcon
          className={`${
            pathname.includes("/tasks") ? "text-orange-600" : "text-slate-300"
          } cursor-pointer`}
          sx={{ fontSize: `${pathname.includes("/tasks") ? "30px" : "25px"}` }}
        />
      </Link>
      <Link href="/logout">
        <LogoutIcon
          className="text-slate-300 cursor-pointer"
          sx={{ fontSize: "25px" }}
        />
      </Link>
    </div>
  );
};
const Profile = () => {
  return <div className="w-7 h-7 bg-orange-600 rounded-md"></div>;
};

export default Navbar;
