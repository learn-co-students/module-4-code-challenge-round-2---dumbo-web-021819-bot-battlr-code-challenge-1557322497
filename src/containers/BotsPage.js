import React from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots:[],
    botsClicked:[]
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then( response => response.json())
    .then( bots => {
    this.setState({
      bots: bots
    })
  })
  }

  // methods

  handleClick = (bot) => {
    console.log(bot);
    let newArray = [...this.state.botsClicked];
    newArray.push({...bot, clicked: true})
    this.setState({
        botsClicked: newArray
      })

  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botsClicked} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
