import React from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  

  state = {
    bots:[],
    botsClicked:[],
    clicked: false,
    botClicked:{}
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
    this.setState({
        botClicked: bot,
        clicked: true
      })

  }

  handleClickSpecs = (bot) => {
  let newArray = [...this.state.botsClicked];
  newArray.push({...bot})
    this.setState({
      botsClicked: newArray,
      botClicked: bot
    })
  }

  handleGoBack = () => {
    this.setState({
      clicked:false
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botsClicked} />
        {this.state.clicked ? <BotSpecs bot={this.state.botClicked} handleClickSpecs={this.handleClickSpecs} handleGoBack={this.handleGoBack} /> : <BotCollection bots={this.state.bots} handleClick={this.handleClick} />}
      </div>
    );
  }

}

export default BotsPage;
