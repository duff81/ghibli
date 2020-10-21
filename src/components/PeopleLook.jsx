import React from "react";

let PeopleLook = (props) => {
  return (
    <React.Fragment>
      <div className="card mx-4 my-4 shadow">
        <div className="card-body">
          <h5 className="card-title">{props.peopleArray.name}</h5>
          <p className="card-text">{props.peopleArray.age}</p>
          <p className="card-text">{props.peopleArray.species.classification}</p>

        </div>
      </div>
    </React.Fragment>
  );
};

export default PeopleLook;