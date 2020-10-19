import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {bookClass} from "../redux/actions"



const BookForm = ({bookClass}) => {
  let history = useHistory()
  const {classID} = useParams()

  const handleSubmit = () => {
    bookClass(classID,history)
  };

  return (
    <div className="col-6 mx-auto">
      <div className="card my-5">
        <div className="card-body">

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Reserve
            </button>
            
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
    bookClass: (classID,history) => dispatch(bookClass(classID,history))
});

export default connect(null,mapDispatchToProps)(BookForm);