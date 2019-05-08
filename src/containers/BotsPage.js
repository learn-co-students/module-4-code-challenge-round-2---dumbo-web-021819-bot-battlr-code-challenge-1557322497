import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  state = {
    bots: [],
    clickedBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsJSON => {
      this.setState({
        bots: botsJSON,
        ...this.state.clickedBots
      })
    })
  }

  handleClick = (chosenBot) => {
    if (this.state.clickedBots.includes(chosenBot)) {
      return this.state.clickedBots;
    } else {
      this.setState({
        ...this.state.bots,
        clickedBots: [...this.state.clickedBots, chosenBot]
      })
    }
  }

  handleRemove = (chosenBot) => {
    console.log(chosenBot);
    let newClickedBots = this.state.clickedBots.filter(bot => bot.id !== chosenBot.id);
    this.setState({
      ...this.state.bots,
      clickedBots: newClickedBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy clickedBots={this.state.clickedBots} handleRemove={this.handleRemove} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
