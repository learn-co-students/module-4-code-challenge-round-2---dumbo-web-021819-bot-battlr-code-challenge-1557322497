import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  generateYourBots = () => {
    return this.props.yourBots.map( bot => {
      return <BotCard handleClick={this.props.removeBot} avatar_url={bot.avatar_url} name={bot.name}
      catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage}
      armor={bot.armor} bot_class={bot.bot_class} id={bot.id}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.generateYourBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
