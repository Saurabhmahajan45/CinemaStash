import express from 'express';
import cors from 'cors';
import { connectDb } from './src/configs/Dbconfig.js';
import { adminLogin, registerAdmin } from './src/controllers/AdminController.js';
import { registerUser, userLogin } from './src/controllers/UserController.js';
import { addMovie, updateMovie, deleteMovie, getAllMovies, getMovieById, searchMovies, getMoviesByGenre, updateMovieRating } from './src/controllers/MovieController.js';
import { createBooking, getAllBookings, getBookingsByUser, updateBookingStatus } from './src/controllers/BookingController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/user", registerUser);
app.post("/user/login", userLogin);

app.post("/admin", registerAdmin);
app.post("/admin/login", adminLogin);

app.post("/movies", addMovie);
app.put("/movies/:id", updateMovie);
app.delete("/movies/:id", deleteMovie);

app.get("/movies", getAllMovies);
app.get("/movies/:id", getMovieById);
app.get("/movies/search", searchMovies);
app.get("/movies/genre/:genre", getMoviesByGenre);
app.patch("/movies/:id/rating", updateMovieRating);

app.post("/booking", createBooking);
app.get("/booking/user/:user_id", getBookingsByUser);
app.get("/booking", getAllBookings);
app.put("/booking/status/:booking_id", updateBookingStatus);


app.listen(6500,()=>{
    connectDb();
})