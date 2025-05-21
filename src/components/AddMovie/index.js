import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !grade) {
      alert("Du måste fylla i både titel och betyg!");
      return;
    }

    const newMovie = {
      title,
      grade: parseInt(grade),
    };

    onAddMovie(newMovie);
    
    setTitle("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titel:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titel här..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grade" className="form-label">Betyg:</label>
          <select
            id="grade"
            className="form-control"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Spara film
        </button>
      </fieldset>
    </form>
  );
};

export default AddMovieForm;
