// Data
import gum from "../data";
//search component
import SearchBar from "./SearchBar";

import React, { useState } from "react";
import { connect } from "react-redux";
import ClassCard from "./ClassCard"
import banner from "../images/banner 650.png"



const ListClasses = ({ classes,user })=> {
    const [query, setQuery] = useState("");

    //const filteredBooking = classes.filter(classe => { //filter booking list
    //  return  classe.gym.toLowerCase().includes(query.toLowerCase())
    //});


    const filteredBooking = () => {
      return classes.filter((classe) => {
        return classe.gym.toLowerCase().includes(query.toLowerCase());
      });
    };
    const classCards = filteredBooking().map(classe => ( // send one item from list to display in card 
      <ClassCard key={classe.id} classe={classe} />
    ));
 


  return (
    <div className="container" style={{textAlign: "center"}}>
      <div>
        <br></br>
      </div>
      <img src={banner}/>
      <div className="mt-2 mb-2">
        <SearchBar onChange={setQuery} />
        <h3>Available Classes</h3>
        <div className="row">
          {classCards}
        </div>
      </div>

 
    </div>
  );
}

const mapStateToProps = ({ classes,user }) => ({
    classes,
    user
  });

export default connect(mapStateToProps)(ListClasses);
