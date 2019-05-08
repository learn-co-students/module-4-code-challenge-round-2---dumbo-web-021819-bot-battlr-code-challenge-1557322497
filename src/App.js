import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import BotSpecs from "./components/BotSpecs"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      this.setState({bots: bots})
    })
  }

  findBot = (id) => {
    console.log(this.state.bots)
    console.log(id)
    let bot = this.state.bots.find(bot => {
      return bot.id === parseInt(id)
    })
    console.log(bot)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" render={(props) => <BotsPage {...props} bots={this.state.bots} />} />
          <Route exact path="/show-bot/:id" render={ (props) => <BotSpecs {...props} avatar_url={this.findBot(props.match.params.id).avatar_url} name={this.findBot(props.match.params.id).name}
          catchphrase={this.findBot(props.match.params.id).catchphrase} health={this.findBot(props.match.params.id).health} damage={this.findBot(props.match.params.id).damage}
          armor={this.findBot(props.match.params.id).armor} bot_class={this.findBot(props.match.params.id).bot_class} id={this.findBot(props.match.params.id).id}/> }/>
        </Router>
      </div>
    );
  }
}

export default App;
