
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Pages/Client/layout';
import Home from './Pages/Client/Home';
import Dashboard from './Pages/Admin/Dashboard';
import MoviesAdmin from './Pages/Admin/MoviesAdmin';
import Statistic from './Pages/Admin/Statistic';
import Sessions from './Pages/Admin/Sessions';
import Rooms from './Pages/Admin/Rooms';
import Movies from './Pages/Client/movies/Movies';
import MovieDetails from './Pages/Client/movies/MovieDetails';
import Profile from './Pages/Profile';
import Contact from './Pages/Client/Contact';
import NotFoundPage from './Pages/Client/NotFoundPage';
import ProtectedRoutes from './helpers/protectedRoutes';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/profile' element={ <ProtectedRoutes><Profile/></ProtectedRoutes> } />
          <Route path='/movies-client' element={ <ProtectedRoutes><Movies/></ProtectedRoutes> } />
          <Route path="/movies/:id" element={ <ProtectedRoutes><MovieDetails /></ProtectedRoutes>  }/>
          <Route path="/contact" element={ <Contact />  }/>
          <Route path="/forbiden" element={ <NotFoundPage />  }/>

        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Statistic />} />
          <Route path='/dashboard/movise-admin' element={<ProtectedRoutes role='admin'><MoviesAdmin /></ProtectedRoutes>} />
          <Route path='/dashboard/sessions-admin' element={<ProtectedRoutes role='admin'><Sessions /></ProtectedRoutes>} />
          <Route path='/dashboard/rooms-admin' element={<ProtectedRoutes role='admin'><Rooms /></ProtectedRoutes>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
