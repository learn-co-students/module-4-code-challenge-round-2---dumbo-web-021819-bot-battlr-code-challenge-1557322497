import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one

state = {
	allBotData: [],
	botsClicked: []
}

componentDidMount(){
	let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
	fetch(url)
	.then(res => res.json())
	.then(botData => {
		this.setState({
			allBotData: botData
		})
	})
}



onClick = (event) => {
	let allBots = this.state.allBotData
    let botsClickedId = event.target.getAttribute("dataid")
	let botArray = this.state.botsClicked.slice()

    let clickedBot = allBots.find((bot) => bot.id === parseInt(botsClickedId) )
    if (botArray.indexOf(clickedBot) === -1 ){
    	botArray.push(clickedBot)}
	else
		{for (var i = 0; i < botArray.length; i++) {
			if(botArray[i].id === parseInt(botsClickedId)){
				botArray.splice(i,1)
			}
		}}
	this.setState ({
		botsClicked: botArray
	})


}

  render() {
    return (
      <div>
      <YourBotArmy onClick={this.onClick} botsToDisplay={this.state.botsClicked}/>
        <BotCollection  onClick={this.onClick} bots={this.state.allBotData} />
      </div>
    );
  }

}

export default BotsPage;
