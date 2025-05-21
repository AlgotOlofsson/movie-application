import React, { useEffect, useState } from "react";
import AddMovieForm from "../AddMovie";
import Movies from "../Movies";
import OrderByAlpha from "../OrderByAlpha";
import OrderByGrade from "../OrderByGrade";

const MovieApplication = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleDeleteMovie = (indexToDelete) => {
    setMovies((prev) => prev.filter((_, index) => index !== indexToDelete));
  };
  
  const handleSortAlpha = () => {
    setMovies((prev) =>
    [...prev].sort((a, b) => a.title.localeCompare(b.title, "sv"))
    );
  };

  const handleSortGrade = () => {
    setMovies((prev) => [...prev].sort((a, b) => b.grade - a.grade));
  };

  useEffect(() => {
    const saved = localStorage.getItem("movies");
    if (saved) {
      setMovies(JSON.parse(saved));
      }
    }, []
  );

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    }
  );

  return (
    <div>
      <AddMovieForm onAddMovie={handleAddMovie} />

      <hr />

      <h2>Mina filmer</h2>
      <Movies movies={movies} onDeleteMovie={handleDeleteMovie} />

      <div className="mt-3">
        <OrderByAlpha onClick={handleSortAlpha} />
        <OrderByGrade onClick={handleSortGrade} />
      </div>
    </div>
  );
};

export default MovieApplication;
