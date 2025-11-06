import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { AddMovies } from "./components/AddMovies";
import { MoviesList } from "./components/MoviesList";
import { UpdateMovies } from "./components/UpdateMovies";
import { AboutUs } from "./components/AboutUs";
import { Login } from "./components/Login";
import { Register } from "./components/Register";  
import { ContactUs }from "./components/ContactUs";
import { Footer } from "./components/Footer"
import { AdminBookings } from "./components/AdminBooking";
import MyBookings from "./components/MyBooking";
import Movies from "./components/Movies";


function App() {

  return (
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/add-movies" element={<AddMovies/>}/>
        <Route path="/movies-list" element={<MoviesList/>}/>
        <Route path="/edit-movies/:movie_id" element={<UpdateMovies/>} />
        <Route path="/admin/bookings" element={<AdminBookings/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

         <Route path="/mybooking" element={<MyBookings/>}/>
         <Route path="/movies" element={<Movies/>}/>

      </Routes>
       <Footer/>
       <ToastContainer/>
    </BrowserRouter>

  )
}

export default App
