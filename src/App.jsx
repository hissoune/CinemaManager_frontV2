
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
import SessionsClient from './Pages/Client/sessions/SessionsClient';
import SessionDetails from './Pages/Client/sessions/SessionDetails';
import Reservations from './Pages/Client/reservations/Reservations';
import RequestResetPass from './Pages/RequestResetPass';
import ResetPassword from './Pages/ResetPassword';
import ReservationsAdmin from './Pages/Admin/ReservationsAdmin';
import Admins from './Pages/Admin/Admins';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/profile' element={ <ProtectedRoutes><Profile/></ProtectedRoutes> } />
          <Route path='/reset-password' element={ <RequestResetPass/> } />
          <Route path='/reset-password-fromemail/:token' element={ <ResetPassword/> } />
          <Route path='/movies-client' element={ <ProtectedRoutes><Movies/></ProtectedRoutes> } />
          <Route path="/movies/:id" element={ <ProtectedRoutes><MovieDetails /></ProtectedRoutes>  }/>
          <Route path="/sessions-Client" element={ <ProtectedRoutes><SessionsClient /></ProtectedRoutes>  }/>
          <Route path="/sessions-Client/:id" element={ <ProtectedRoutes><SessionDetails /></ProtectedRoutes>  }/>
          <Route path="/reservations-Client" element={ <ProtectedRoutes><Reservations/></ProtectedRoutes>  }/>

          <Route path="/contact" element={ <Contact />  }/>
          <Route path="/forbiden" element={ <NotFoundPage />  }/>

        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Statistic />} />
          <Route path='/dashboard/movise-admin' element={<ProtectedRoutes role='admin'><MoviesAdmin /></ProtectedRoutes>} />
          <Route path='/dashboard/sessions-admin' element={<ProtectedRoutes role='admin'><Sessions /></ProtectedRoutes>} />
          <Route path='/dashboard/rooms-admin' element={<ProtectedRoutes role='admin'><Rooms /></ProtectedRoutes>} />
          <Route path='/dashboard/reservations-admin' element={<ProtectedRoutes role='admin'><ReservationsAdmin /></ProtectedRoutes>} />
          <Route path='/dashboard/admins-admin' element={<ProtectedRoutes role='admin'><Admins /></ProtectedRoutes>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
