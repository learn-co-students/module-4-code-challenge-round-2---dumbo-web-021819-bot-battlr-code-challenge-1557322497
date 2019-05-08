import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here
  state = {
    showView: false,
    bot: ""
  }
  
  cardClicked = (event) => {
    console.log("this is going to be my BotSpecs function",event)
    let botsClickedId = event.target.getAttribute("dataid")
    let botPicked = this.props.find(bot => bot.id === parseInt(botsClickedId ) )
    this.setState({
      showView: !this.state.showView,
      bot: botPicked
    })
    console.log(this.state.showView)
  }
//Not finished

  render(){

    const renderBotSpecs = this.state.showView
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {renderBotSpecs ? <BotSpecs bot={this.state.bot}/> : null }
    		  {this.props.bots.map((bot)=> 
            <BotCard  onClick={this.cardClicked} bot={bot} />
            )
          }
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
