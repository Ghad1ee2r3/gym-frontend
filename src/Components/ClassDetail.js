import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import BookForm from "./BookForm"



const ClassDetail = ({ classes,user }) => {
  const { classID } = useParams();
  const classe = classes.find((clas) => clas.id === +classID);
  if (!classe) return <Redirect to="/classes" />;
  console.log(classe)



  return (
    <div className="container mt-5">
      <div className="card">
      <div className="card-header">
        Class Detail
      </div>
        <div className="image">
        <img src={classe.img} alt={classe.name} />
        {console.log(classe.img)}
        </div>
        <div className="card-body">

          <h5 className="card-title">
            {classe.name}
          </h5>
          <h6>By: {classe.gym}</h6>
          <p>From: {classe.start}</p>
          <p>To : {classe.end}</p>
          <p>Price : {classe.price} SAR</p>
          <p className="card-text">Type :{classe.type_of} </p>
          <BookForm/>
        </div>
    </div>   
    </div>
  );
};
const mapStateToProps = ({ classes,user }) => ({
  classes,
  user
});

export default connect(mapStateToProps)(ClassDetail);