import React from "react";

const Movie = ({ title, grade, onDelete}) => {
    const renderStars = (grade) => {
        const stars = [];
        for (let i = 0; i < grade; i++){
            stars.push(
                <img
                key={i}
                src="/star.png"
                alt="Star"
                style={{width: "20px", height: "20px", marginRight: "2px"}}
                />
            );
        }
        return stars;
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="me-auto">
                <strong>{title}</strong>
            </div>

            <div className="d-flex align-items-center">
                <div className="me-2">{renderStars(grade)}</div>
                <button
                    onClick={onDelete}
                    className="btn p-0 border-0"
                    aria-label={`Ta bort ${title}`}
                >
                <img
                    src="/delete.png"
                    alt="Ta bort"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
                </button>
            </div>
        </li>
    );
};

export default Movie;