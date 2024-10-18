import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function Layout() {
  return (
    <div className="bg-[#181823] ">
      <div>
         <Navbar />
      </div>
     
      <div className="pt-36">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
