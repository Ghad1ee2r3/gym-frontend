import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

//components
import CancelBooking from "./CancelBooking"


const BookingDetail = ({ bookings,user }) => {
 // const classe = props.classe;
  const { bookingID } = useParams();
  console.log("bookingID",bookingID)
  const booking = bookings.find(booking => booking.id === +bookingID);
  console.log("booking",booking)
  if (!booking) return <Redirect to="/bookings" />;
  console.log(booking)



  return (
    <div className="author">
      <div>
        <h3>detail</h3>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="image">
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{booking.customer}</span>
            </h5>
            <p> class: {booking.class_of}</p>
          <p>time: {booking.time}</p>
          <small className="card-text">{booking.type_of} type</small>
          <CancelBooking bookingID={bookingID}/>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ bookings,user }) => 
{console.log("insid booking detail mapStateToProps")
  return ({
  bookings,
  user
});}

export default connect(mapStateToProps)(BookingDetail);