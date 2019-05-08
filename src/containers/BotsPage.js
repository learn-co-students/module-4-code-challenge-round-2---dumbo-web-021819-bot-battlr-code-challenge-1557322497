import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {

  render() {
    return (
      <div>
        <BotCollection bots={this.props.bots}/>
      </div>
    );
  }

}

export default BotsPage;
