import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  constructor() {
    super()
    this.state = {
      bots: [],
      yourBots: []
    }
  }

  addBot = (props) => {
    if (this.state.yourBots.find( bot => { return bot.id === props.id }) === undefined ) {
      let yourNewBots = [...this.state.yourBots, props]
      this.setState({yourBots: yourNewBots})
    }
  }

  removeBot = (props) => {
    let yourNewBots = this.state.yourBots.filter( bot => {
      return bot.id !== props.id
    })
    this.setState({yourBots: yourNewBots})
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      this.setState({bots: bots})
    })
  }

  render() {
    return (
      <div>
        <BotCollection addBot={this.addBot} bots={this.state.bots}/>
        <YourBotArmy removeBot={this.removeBot} yourBots={this.state.yourBots}/>
      </div>
    );
  }

}

export default BotsPage;
