import React from "react";
import UndrawImg1 from "../assets/undraw_home_cinema_l7yl.svg";
import { useNavigate } from "react-router-dom";

const Home = ({ setSearchedTitle, searchedTitle }) => {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <section id="landing">
          <div className="container home__container">
            <div className="row movies__row">
              <div className="header home__header">
                <h1 className="header__title">Welcome to OMDb Lookup</h1>
                <p className="header__para">Search. Discover. Enjoy.</p>
                <div className="search-filter__container">
                  <div className="input__wrapper">
                    <form action="" className="search__form">
                      <input
                        type="text"
                        className="search__bar"
                        placeholder="Search by Movie Title"
                        onChange={(e) => setSearchedTitle(e.target.value)}
                      />
                      <button
                        onClick={() => navigate("/search")}
                        className="search__btn"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="movies-wrapper">
                <i className="fa-solid fa-spinner movies__loading--spinner"></i>
                {/* <div className="landing__img--wrapper">
                <img
                  className="landing__img"
                  src={UndrawImg1}
                  alt=""
                />
              </div> */}
              </div>
            </div>
          </div>
          <script src="index.js"></script>
        </section>
      </main>
    </div>
  );
};

export default Home;
