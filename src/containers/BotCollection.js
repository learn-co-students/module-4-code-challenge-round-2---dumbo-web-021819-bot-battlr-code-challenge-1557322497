import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		let filterSearch = this.props.bots.filter(bot => bot.name.toLowerCase().includes(this.props.currentSearch.toLowerCase()))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {filterSearch.map((bot) => {
						return <BotCard bot={bot} currentBotClick={this.props.currentBotClick}/>
					})}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
