import React from 'react';
// Data
import gum from "../data";
//search component
import SearchBar from "./SearchBar";

function ListClasses() {
 

  const classesList = gum.map((gum) => (
    <div key={gum.id}>
      
   
      <p >{gum.name}</p>
      <p >{gum.type} </p>
      <button></button>
    </div>
  ));
  
  
  return (
    <div >
        <SearchBar/>
 <div >{classesList}</div>
    </div>
  );
}

export default ListClasses;
