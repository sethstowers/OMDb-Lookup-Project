import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  console.log(id);

  async function getMovieInfo() {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=b2ecaa33`
    );
    setMovieInfo(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <main>
        <section id="landing">
          <div className="container">
            <div className="row movies__row">
              <div className="header">
                {isLoading ? (
                  <div className="searched--movie__container--loading">
                    <i class="fa-solid fa-spinner movie-spinner"></i>
                  </div>
                ) : (
                  <div className="searched--movie__container">
                    <i
                      onClick={() => navigate("/search")}
                      class="fa-solid fa-arrow-left"
                    ></i>
                    <div className="searched--movie__img--container">
                      <img
                        className="searched--movie__img"
                        src={movieInfo.Poster}
                        alt=""
                      />
                    </div>
                    <div className="searched--movie__info--container">
                      <h1 className="searched--movie__title">
                        {movieInfo.Title}
                      </h1>
                      <h2 className="searched--movie__released">
                        {" "}
                        {movieInfo.Released}
                      </h2>
                      <div className="searched--movie__info">
                        <div className="sm__info--square">
                          <h2 className="sm__info--sqaure--title">Rated</h2>

                          <span className="sm__info--square__rated">
                            {movieInfo.Rated}
                          </span>
                        </div>
                        <div className="sm__info--square">
                          <h2 className="sm__info--sqaure--title">Genre</h2>

                          <span className="sm__info--square__info">
                            {movieInfo.Genre}
                          </span>
                        </div>
                        <div className="sm__info--square">
                          <h2 className="sm__info--sqaure--title">Director</h2>

                          <span className="sm__info--square__info">
                            {movieInfo.Director}
                          </span>
                        </div>
                        <div className="sm__info--square">
                          <h2 className="sm__info--sqaure--title">
                            Box Office
                          </h2>

                          <span className="sm__info--square__info">
                            {movieInfo.BoxOffice}
                          </span>
                        </div>
                        <div className="sm__info--square">
                          <h2 className="sm__info--sqaure--title">Run Time</h2>

                          <span className="sm__info--square__info">
                            {movieInfo.Runtime}
                          </span>
                        </div>
                        <div className="sm__info--square">
                          <h2 className="sm__info--sqaure--title">
                            IMDb Rating
                          </h2>

                          <span className="sm__info--square__info">
                            {movieInfo.imdbRating}
                          </span>
                        </div>
                        <div className="sm__info--big--square">
                          <p className="sm__info--plot">{movieInfo.Plot}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movie;
