// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "@/components/shared/Footer";

const Layout: React.FC = () => {
  return (
    <div className="backdrop-blur-2xl">
      <Navbar />
      <main className="mb-[100px] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
