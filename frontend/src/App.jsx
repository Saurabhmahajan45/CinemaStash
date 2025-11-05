import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigationbar from "./Components/Navigationbar";
import Home from "./Components/Home";
// import Dashboard from "./Components/Dashboard";
import AddMovies from "./Components/AddMovies";
// import MoviesList from "./Components/MoviesList";
// import UpdateMovies from "./Components/UpdateMovies";
// import AboutUs from "./Components/AboutUs";
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
        <Route path="/movies-list" element={<MoviesList />} />
        {/* <Route path="/edit-movies/:id" element={<UpdateMovies />} /> */}
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
