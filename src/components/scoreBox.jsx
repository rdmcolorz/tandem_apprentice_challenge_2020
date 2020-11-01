import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class ScoreBox extends Component {
  state = {};
  render() {
    return (
      <Jumbotron>
        <h1>Your score:</h1>
        <Button onClick={this.props.onRestart}>Play Again!</Button>
      </Jumbotron>
    );
  }
}

export default ScoreBox;
