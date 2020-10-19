import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {cancelBooking} from "../redux/actions"



const CancelBooking = ({cancelBooking, bookingID}) => {
  let history = useHistory()

  const handleSubmit = () => {
    cancelBooking(bookingID,history)
  };

  return (
    <div className="col-6 mx-auto">
        <button type="submit" className="btn btn-danger" onClick={handleSubmit}>
            cancel
        </button>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
    cancelBooking: (bookingID,history) => dispatch(cancelBooking(bookingID,history))
});

export default connect(null,mapDispatchToProps)(CancelBooking);