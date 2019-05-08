import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
          {this.props.bots.map(bot => {
          return(<BotCard bot={bot} handleClick={this.props.handleClick}/>)})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
