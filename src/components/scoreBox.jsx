import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import "../css/questionBox.css";

class ScoreBox extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Jumbotron className="jumbotron-main">
          <h1>Your score: {this.props.score} / 10</h1>
          <Button
            style={{ backgroundColor: "#2a4127" }}
            onClick={this.props.onRestart}
          >
            Play Again!
          </Button>
        </Jumbotron>
      </Container>
    );
  }
}

export default ScoreBox;
