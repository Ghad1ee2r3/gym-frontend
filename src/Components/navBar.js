import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// Components
import Login from "./LoginForm";
import Logout from './Logout';

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/classes" className="navbar-brand">
        Be fit
      </Link>
      {user ?
      <>
      <Link to="/bookings" className="navbar-brand">
      My bookings
      </Link>
      <Logout />
      </>
      :

      <div>
      <Link to="/login" className="btn btn-info m-2 float-left">
        Login
      </Link>
      <Link to="/signup" className="btn btn-success m-2 float-left">
        Signup
      </Link></div>
      }


    </nav>
  );
};

const mapStateToProps = ({user}) => ({user});

export default connect(mapStateToProps)(Navbar)