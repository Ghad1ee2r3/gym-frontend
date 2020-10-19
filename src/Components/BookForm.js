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
      <button type="submit" className="btn btn-warning" onClick={handleSubmit}>
        Reserve
      </button>
  );
};


const mapDispatchToProps = dispatch => ({
    bookClass: (classID,history) => dispatch(bookClass(classID,history))
});

export default connect(null,mapDispatchToProps)(BookForm);