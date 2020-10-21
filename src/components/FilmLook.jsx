import React from "react";

let FilmLook = (props) => {
  return (
    <React.Fragment>
      <div className="card mx-4 my-4 shadow">
        <div className="card-body">
          <h5 className="card-title">{props.filmsArray.title}</h5>
          <p className="card-text">{props.filmsArray.description}</p>

        </div>
      </div>
    </React.Fragment>
  );
};

export default FilmLook;