import React from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import BotFilter from "./BotFilter";

class BotsPage extends React.Component {


  state = {
    bots:[],
    botsClicked:[],
    clicked: false,
    botsFilter:[],
    botClicked:{},
    searchBot: ""
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then( response => response.json())
    .then( bots => {
    this.setState({
      bots: bots,
      botsFilter: bots
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

  handleFilter = (e) => {
    let copyArray = [...this.state.bots];
    this.setState({
      searchBot : e.target.value
    })
    let word = this.state.searchBot;

    if (this.state.searchBot === "") {
      this.setState({
        botsFilter: copyArray
      })
    } else {

      const newArray = [...this.state.bots].filter( bot => {
        return bot.name.toLowerCase().includes(word) || bot.name.includes(word)
      })
      this.setState({
        botsFilter: newArray
      })
    }
    // console.log(word);
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botsClicked} />
        <BotFilter searchBot={this.state.searchBot} handleFilter={this.handleFilter} />
        <br />
        <br />
        {this.state.clicked ? <BotSpecs bot={this.state.botClicked} handleClickSpecs={this.handleClickSpecs} handleGoBack={this.handleGoBack} /> : <BotCollection bots={this.state.botsFilter} handleClick={this.handleClick} />}
      </div>
    );
  }

}

export default BotsPage;
