import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

class BotsPage extends React.Component {
  state = {
    bots: [],
    clickedBots: [],
    selectedBot: {}
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsJSON => {
      this.setState({
        bots: botsJSON,
        ...this.state.clickedBots,
        ...this.state.selectedBot
      })
    })
  }

  handleClick = (chosenBot) => {
    if (this.state.clickedBots.includes(chosenBot)) {
      return this.state.clickedBots;
    } else {
      this.setState({
        ...this.state.bots,
        clickedBots: [...this.state.clickedBots, chosenBot],
        ...this.state.selectedBot
      })
    }
  }

  handleRemove = (chosenBot) => {
    console.log(chosenBot);
    let newClickedBots = this.state.clickedBots.filter(bot => bot.id !== chosenBot.id);
    this.setState({
      ...this.state.bots,
      clickedBots: newClickedBots,
      ...this.state.selectedBot
    })
  }

  // if a bot is selected, the collection should be
  // replaced by the chosen bot's specs

  render() {
    return (
      <div>
        <YourBotArmy clickedBots={this.state.clickedBots} handleRemove={this.handleRemove} />
        <BotSpecs bot={this.state.selectedBot} bots={this.state.bots} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
