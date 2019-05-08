import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here

	//should render all the bots at first. 
	//once selected, the page should render only the selected one. 
	//handleAddToArmy should be moved to BotSpecs
	
/* 
if {botCard is selected}{
	return <BotSpecs bot={selectedBot}
}else {
	return {this.props.allBots.map(bot => <BotCard bot={bot})}
}
*/

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{/* if selectedBot exists than display that bot, else render all */}
				if({this.props.selectedBot}){
					return <BotSpecs bot=....
				}


				 {this.props.allBots.map(bot => <div onClick={() => this.props.handleViewSpec(bot)}>
				 <BotCard
				 bot={bot}
				 handleAddToArmy= {this.props.handleAddToArmy}
				 /></div>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
