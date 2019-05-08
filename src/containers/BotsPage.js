import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import Filter from '../components/Filter'

class BotsPage extends React.Component {

  state = {
    bots: [],
    currentbot: null,
    team: [],
    currentSearch: ''
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then((response) => {
      return response.json();
    }).then((allbots) => {
      this.setState({
        bots: allbots
      })
    })
  }

  backClick = () => {
    this.setState({
      currentbot: null
    })
  }

  enlistClick = (bot) => {
    this.setState({
      team: [...this.state.team, bot]
    })
  }

  currentBotClick = (bot) => {
    this.setState({
      currentbot: bot
    })
  }

  searchChange = (event) => {
    this.setState({
      currentSearch: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Filter searchChange={this.searchChange} currentSearch={this.state.currentSearch}/>
        {this.state.currentbot ? <BotSpecs enlistClick={this.enlistClick} backClick={this.backClick} bot={this.state.currentbot}/> : <BotCollection currentSearch={this.state.currentSearch} bots={this.state.bots} currentBotClick={this.currentBotClick}/>}
        <YourBotArmy team={this.state.team}/>
      </div>
    );
  }

}

export default BotsPage;
