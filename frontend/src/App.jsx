import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigationbar } from "./Components/Navigationbar";
import { Home } from "./components/Home";
import { AddMovies } from "./Components/AddMovies";
import { MoviesList } from "./Components/MoviesList";
import { UpdateMovies } from "./Components/UpdateMovies";
import { AboutUs } from "./Components/AboutUs";
import { Login } from "./components/Login";
import { Register } from "./Components/Register";
import { ContactUs } from "./Components/ContactUs";
import { Footer } from "./Components/Footer";
import { AdminBookings } from "./Components/AdminBooking";
import { UserDashboard } from "./Components/UserDashboard";
import { MovieList } from "./components/Movies";
import { MovieDetails } from "./Components/MovieDetails";
import { BookingPage } from "./components/BookingPage";
import { MyBookings } from "./Components/MyBooking";
import{ AdminLogin } from "./components/AdminLogin";
import {AdminDashboard} from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter >
      <Navigationbar />

      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/add-movies" element={<AddMovies/>} />
        <Route path="/movies-list" element={<MoviesList />} />
        <Route path="/edit-movies/:movie_id" element={<UpdateMovies />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* User Routes  */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
