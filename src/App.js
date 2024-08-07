import Nav from "./Components/Nav";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Footer from "./Components/Footer";
import Movie from "./Pages/Movie";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState("");

  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchedTitle={searchedTitle}
                setSearchedTitle={setSearchedTitle}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                movies={movies}
                setMovies={setMovies}
                searchedTitle={searchedTitle}
                setSearchedTitle={setSearchedTitle}
              />
            }
          />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
