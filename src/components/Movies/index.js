import React from "react";
import Movie from "../Movie"

const Movies = ({ movies, onDeleteMovie }) => {
    if (!movies || movies.length === 0) {
        return <p className="text-muted">Inga filmer tillagda.</p>;
    }

    return (
        <ul className="list-group">
            {movies.map((movie, index) => (
                <Movie
                key={index}
                title={movie.title}
                grade={movie.grade}
                onDelete={() => onDeleteMovie(index)}
                />
        ))}
        </ul>
    );
};

export default Movies;