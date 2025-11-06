import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./Components/Navigationbar";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs"; 
import AddMovies from "./Components/AddMovies";
import { isUser} from "./services/UserServices";
import MoviesList from "./Components/MoviesList";
import UpdateMovies from "./Components/UpdateMovies";
import AdminBookings from "./Components/AdminBooking";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/UserDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import MovieList from "./Components/MovieList";
import MyBookings from "./Components/MyBooking";
import MovieDetails from "./Components/MovieDetails";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/add-movies" element={<AddMovies />} />
        
        {/* <Route path="/edit-movies/:id" element={<UpdateMovies />} /> */}
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={isUser() ? <UserDashboard /> : <Login />} />
        <Route path="/movies" element={isUser() ? <MovieList /> : <Login />} />
        <Route path="/movies/:id" element={isUser() ? <MovieDetails /> : <Login />} />
        <Route path="/book/:id" element={isUser() ? <BookingPage /> : <Login />} />
        <Route path="/my-bookings" element={isUser() ? <MyBookings /> : <Login />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/" element={<Home/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        <Route path="/add-movies" element={<AddMovies/>}/>
        <Route path="/movies-list" element={<MoviesList/>}/>
        <Route path="/edit-movies/:movie_id" element={<UpdateMovies/>} />
        <Route path="/admin/bookings" element={<AdminBookings/>} />
        {/* <Route path="/about-us" element={<AboutUs/>}/> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
       <Footer/>
       <ToastContainer/>
    </BrowserRouter>

  )
}

export default App;
