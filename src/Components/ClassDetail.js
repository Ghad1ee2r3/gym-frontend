import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

//components
import BookForm from "./BookForm"


const ClassDetail = ({ classes,user }) => {
 // const classe = props.classe;
  const { classID } = useParams();
  const classe = classes.find((clas) => clas.id === +classID);
  if (!classe) return <Redirect to="/classes" />;
  console.log(classe)



  return (
    <div className="author">
      <div>
        <h3>detail</h3>

        <div className="col-lg-4 col-md-6 col-12">

        <div className="image">

        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{classe.gym}</span>
          </h5>
          <p> {classe.name}</p>
        <p>start day: {classe.start}</p>
        <p>end day : {classe.end}</p>
        <p>price : {classe.price}</p>
        <small className="card-text">{classe.type_of} type</small>
        <BookForm/>
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