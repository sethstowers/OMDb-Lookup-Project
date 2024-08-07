import React, { useEffect, useState } from "react";
import UndrawImg1 from "../assets/undraw_home_cinema_l7yl.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = ({ movies, setMovies, searchedTitle, setSearchedTitle }) => {
  // const [movies, setMovies] = useState([]);
  // const [searchedTitle, setSearchedTitle] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  function filterMovies(e) {
    getMovies(e.target.value);
  }

  async function getMovies(filter) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchedTitle}&apikey=b2ecaa33`
    );
    const moviesSearch = data.Search;

    setIsLoading(false);

    if (filter === "YEAR_LOW_TO_HIGH") {
      moviesSearch.sort((a, b) => a.Year.slice(0, 4) - b.Year.slice(0, 4));
    } else if (filter === "YEAR_HIGH_TO_LOW") {
      moviesSearch.sort((a, b) => b.Year.slice(0, 4) - a.Year.slice(0, 4));
    }
    setMovies(moviesSearch);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <main>
        <section id="landing">
          <div className="container">
            <div className="row movies__row">
              <div className="header">
                <h1 className="header__title">
                  Find Information About Any Movie!
                </h1>
                <div className="search-filter__container">
                  <div className="input__wrapper">
                    <div action="" className="search__form">
                      <input
                        type="text"
                        className="search__bar"
                        placeholder="Search by Movie Title"
                        onChange={(e) => setSearchedTitle(e.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            getMovies();
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={getMovies}
                        className="search__btn"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <select
                    id="filter"
                    className="filter"
                    onChange={(e) => filterMovies(e)}
                  >
                    <option value="" disabled selected>
                      Sort
                    </option>
                    <option value="YEAR_LOW_TO_HIGH">Year, Low to High</option>
                    <option value="YEAR_HIGH_TO_LOW">Year, High to Low</option>
                  </select>
                </div>
              </div>
              <div className="movies-wrapper">
                {isLoading ? (
                  <i class="fa-solid fa-spinner"></i>
                ) : movies ? (
                  movies.map((movie) => (
                    <div key={movie.Title}
                      class="movie"
                      onClick={() => navigate(`/movie/${movie.imdbID}`)}
                    >
                      <img class="movie__img" src={`${movie.Poster}`} alt="" />
                      <div class="movies__info">
                        <h2 class="movie__name">{movie.Title}</h2>
                        <h2 class="movie__year">{movie.Year}</h2>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1 className="no-movies__text">No movies found.</h1>
                )}
              </div>
            </div>
          </div>
          <script src="index.js"></script>
        </section>
      </main>
    </div>
  );
};

export default Search;
