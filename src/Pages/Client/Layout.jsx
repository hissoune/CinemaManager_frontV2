import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar"

function Layout() {
  return (
    <div className="bg-[#181823] h-full">
      <div >
      <Navbar/>
      </div>
      <div >
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
