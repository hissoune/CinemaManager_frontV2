import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-gray-600 grid grid-cols-12 gap-1 ">
    <div className={`col-span-2 h-screen`}>
        <Sidebar/>
        </div>
    <div className="col-span-10">
            <Outlet/>
    </div>
</div>
  )
}
