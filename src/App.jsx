
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



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/movies-client' element={<Movies/>} />
          <Route path="/movies/:id" element={ <MovieDetails />  }/>

        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Statistic />} />
          <Route path='/dashboard/movise-admin' element={<MoviesAdmin />} />
          <Route path='/dashboard/sessions-admin' element={<Sessions />} />
          <Route path='/dashboard/rooms-admin' element={<Rooms />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
