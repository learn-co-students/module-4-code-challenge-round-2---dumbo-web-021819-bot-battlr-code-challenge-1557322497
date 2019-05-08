import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  generateBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard handleClick={this.props.addBot} avatar_url={bot.avatar_url} name={bot.name}
      catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage}
      armor={bot.armor} bot_class={bot.bot_class} id={bot.id} />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.generateBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
