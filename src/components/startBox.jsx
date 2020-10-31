import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class StartBox extends Component {
  state = {};
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to Tandem Trivia!!</h1>
        <Button onClick={this.props.onStartGame}>Start Game</Button>
      </Jumbotron>
    );
  }
}

export default StartBox;
