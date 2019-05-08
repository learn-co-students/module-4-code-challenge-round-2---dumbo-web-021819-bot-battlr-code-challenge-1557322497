import React from "react";


const BotFilter = (props) => {


  return (

    <div>
    <input type="text" placeholder="Filter by name" name="searchBot" value={props.searchBot} onChange={props.handleFilter} />
    </div>
  )





}

export default BotFilter;
