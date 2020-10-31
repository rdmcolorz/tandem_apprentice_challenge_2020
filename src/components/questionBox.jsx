import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";

class QuestionBox extends Component {
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    let isStartGame = this.props.isStartGame;
    console.log(this.props.currentQuestion);
    return (
      <div>
        <Jumbotron>
          {isStartGame ? (
            <div>
              <h2>{this.props.currentQuestion["question"]}</h2>
              <ListGroup>
                {this.props.currentChoices.map((choice) => (
                  <ListGroup.Item
                    action
                    className="outline-secondary"
                    key={this.props.currentChoices.indexOf(choice)}
                  >
                    {choice}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <button
                className="btn btn-secondary btn-sm"
                onClick={this.props.onGetNextQuestion}
              >
                Submit
              </button>
            </div>
          ) : (
            <div>
              <h1>Welcome to Tandem Trivia!</h1>
              <button
                className="btn btn-secondary btn-sm"
                onClick={this.props.onStartGame}
              >
                Start Game
              </button>
            </div>
          )}
        </Jumbotron>
      </div>
    );
  }
}

export default QuestionBox;
