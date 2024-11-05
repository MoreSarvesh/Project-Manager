import "@/app/styles.css";
import Navbar from "@/components/Navbar";
import UserContext from "@/context/UserContext";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Project-Manager",
  description: "Manage your projects",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserContext>
        <body className={poppins.variable}>{children}</body>
      </UserContext>
    </html>
  );
}
