import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import UserDashboard from "./pages/UserDashboard";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBooking";

// import AdminDashboard from "./pages/AdminDashboard";
// import ManageMovies from "./pages/ManageMovies";
// import AddMovie from "./pages/AddMovie";
// import EditMovie from "./pages/EditMovie";
// import ManageBookings from "./pages/ManageBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Navigate to="/user/dashboard" />} />

        <Route path="/user/dashboard" element={<UserDashboard />} />
         <Route path="/movies" element={<MovieList />} /> 
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* ADMIN ROUTES */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/movies" element={<ManageMovies />} />
        <Route path="/admin/add-movie" element={<AddMovie />} />
        <Route path="/admin/edit-movie/:id" element={<EditMovie />} />
        <Route path="/admin/bookings" element={<ManageBookings />} /> */} 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
