import React from "react";
import { Link } from "react-router-dom";

const ClassCard = props => {
  const classe = props.classe;
 

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/classes/${classe.id}`} className="card">
        <div className="image">

        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{classe.gym}</span>
          </h5>
          <p>{classe.name}</p>
          <small className="card-text">{classe.type_of} type</small>
        </div>
      </Link>
    </div>
  );
};

export default ClassCard;

