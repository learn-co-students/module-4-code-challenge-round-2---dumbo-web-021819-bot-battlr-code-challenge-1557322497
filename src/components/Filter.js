import React from "react";

const filter = (props) => {
  return(
    <div>
      <input type='text' placeholder='Search...' value={props.currentSearch} onChange={props.searchChange}/>
    </div>
  )
}

export default filter;