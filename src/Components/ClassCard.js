import React from "react";
import { Link } from "react-router-dom";

const ClassCard = props => {
  const classe = props.classe;
 

  return (
    <div className="col-lg-4 col-md-6">
      <Link to={`/classes/${classe.id}`} className="card m-3" style={{color: "black",}}>
        <div className="card-body">
          <h5 className="card-title">
          {classe.name}
          </h5>
          <h6>By :{classe.gym} </h6>
          <small className="card-text">Type :{classe.type_of} </small>
        </div>
      </Link>
    </div>
  );
};

export default ClassCard;

