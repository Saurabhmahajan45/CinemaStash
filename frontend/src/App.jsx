import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { AddMovies } from "./components/AddMovies";
import { MoviesList } from "./components/MoviesList";
import { UpdateMovies } from "./components/UpdateMovies";
import { AboutUs } from "./components/AboutUs";
import { Login } from "./components/Login";
import { Register } from "./components/Register";



function App() {

  return (
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/add-movies" element={<AddMovies/>}/>
        <Route path="/movies-list" element={<MoviesList/>}/>
        <Route path="/edit-movies/:id" element={<UpdateMovies/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
