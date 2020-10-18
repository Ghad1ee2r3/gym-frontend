import React from "react";
import { Link } from "react-router-dom";

const ClassCard = props => {
  const classe = props.classe;
 

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/classes/${classe.id}`} className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={}
            alt={}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{}</span>
          </h5>
          <small className="card-text">{classe.type} type</small>
        </div>
      </Link>
    </div>
  );
};

export default ClassCard;
