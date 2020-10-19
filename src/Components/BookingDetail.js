import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

//components
import CancelBooking from "./CancelBooking"


const BookingDetail = ({ bookings,user }) => {
 
  const { bookingID } = useParams();
  console.log("bookingID",+bookingID)

  const booking = bookings.find(booking => booking.id === +bookingID);
  console.log("booking",booking)
  if (!booking) return <Redirect to="/bookings" />;
  console.log(booking)



  return (
      <div className="container mt-5">
        
        <div className="">
          <div className="card">
          <div className="card-header">
            Booking detail
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>name: {booking.customer}</span>
            </h5>
            <p> Class: {booking.class_of}</p>
          <p>Start: {booking.start}</p>
          <small className="card-text"></small>
          <CancelBooking bookingID={bookingID}/>
          </div>
        </div>
      </div>
      </div>
  );
};
const mapStateToProps = ({ bookings,user }) => 
{
  return ({
  bookings,
  user
});}

export default connect(mapStateToProps)(BookingDetail);