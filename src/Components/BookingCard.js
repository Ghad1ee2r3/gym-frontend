import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

const BookingCard = ({booking}) => {

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/booking/${booking.id}`} className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={booking.img}
            alt={booking.id}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{booking.customer}</span>
          </h5>
          <h3 className="card-text">{booking.class_of} class</h3>
          <small className="card-text">{booking.time} </small>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
    return (
        {

        }
    )
}

export default BookingCard;