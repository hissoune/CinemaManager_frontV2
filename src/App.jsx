
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Pages/Client/layout';
import Home from './Pages/Client/Home';
import Dashboard from './Pages/Admin/Dashboard';
import MoviesAdmin from './Pages/Admin/MoviesAdmin';
import Statistic from './Pages/Admin/Statistic';



function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                  <Route index  element={<Home/>} />
                  
            
            </Route>
            <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Statistic/>} />
              <Route path='/dashboard/movise-admin' element={<MoviesAdmin/>}/>     

            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
