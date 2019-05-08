import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
state={
  allBots:[], 
  armyBots:[], 
  selectedBot: []
}

componentDidMount(){
  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  .then(res => res.json())
  .then(allBots => {
    this.setState({
      allBots: allBots
    })
  })
}

handleAddToArmy = (selectedBot) => {
  if( !this.state.armyBots.includes(selectedBot)){
     this.setState({
    armyBots:[...this.state.armyBots, selectedBot]
  })
  }
}


handleRemoveFromArmy = (selectedBot) => {
  let newArmy = this.state.armyBots.filter(bot =>{
    return selectedBot !== bot
  })
  this.setState({
    armyBots: newArmy
  })
}

handleViewSpec = (selectedBot) => {
  console.log(selectedBot)
  this.setState({
    selectedBot: selectedBot
  })  
}


  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots}
        handleRemoveFromArmy ={this.handleRemoveFromArmy}
         />
        <BotCollection allBots={this.state.allBots} 
        handleAddToArmy={this.handleAddToArmy}
        handleViewSpec={this.handleViewSpec}
        selectedBot={this.state.selectedBot}
        />
        
      </div>
    );
  }

}

export default BotsPage;
