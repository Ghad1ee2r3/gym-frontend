// Data
import gum from "../data";
//search component
import SearchBar from "./SearchBar";

import React, { useState } from "react";
import { connect } from "react-redux";
import ClassCard from "./ClassCard"



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
    <div >
        <div>
      <h3>class list</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">{classCards}</div>
    </div>

 
    </div>
  );
}

const mapStateToProps = ({ classes,user }) => ({
    classes,
    user
  });

export default connect(mapStateToProps)(ListClasses);
