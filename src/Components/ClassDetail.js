import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// Components



const ClassDetail = ({ classes,user }) => {
 // const classe = props.classe;
  const { classID } = useParams();
  const classe = classes.find((clas) => clas.id === +classID);
  if (!classe) return <Redirect to="/classes" />;
  console.log(classe)



  return (
    <div className="author">
      <div>
        <h3 class="text1">Detail Of Class</h3>

        <div className="col-lg-4 col-md-6 col-12">

        <div className="image">
        <img src={classe.img} alt={classe.name} />

        </div>
        <div className="card-body">

          <h5 className="card-title">
            {classe.name}
          </h5>
          <h6>By: {classe.gym}</h6>
          <p>From: {classe.start}</p>
          <p>To : {classe.end}</p>
          <p>Price : {classe.price} SAR</p>
          <small className="card-text">Type :{classe.type_of} </small>
        </div>

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