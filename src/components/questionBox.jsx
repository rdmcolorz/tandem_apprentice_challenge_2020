import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";

class QuestionBox extends Component {
  revealAnswer = (choices, choice) => {
    if (this.props.isAnswered) {
      if (choice === choices["correct"]) {
        return "success";
      } else {
        return "danger";
      }
    } else {
      return "secondary";
    }
  };

  render() {
    let isStartGame = this.props.isStartGame;
    let choices = this.props.currentChoices;

    // const choices = this.shuffleArray(this.props.currentChoices);
    return (
      <Jumbotron>
        {isStartGame ? (
          <div>
            <h3>{this.props.currentQuestion["question"]}</h3>
            <ListGroup>
              {choices.map((choice) => (
                <ListGroup.Item
                  action={!this.props.isAnswered}
                  variant={this.revealAnswer(
                    this.props.currentQuestion,
                    choice
                  )}
                  onClick={this.props.onCheckAnswer.bind(
                    null,
                    this.props.currentQuestion,
                    choice
                  )}
                  key={this.props.currentChoices.indexOf(choice)}
                >
                  {choice}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <br></br>
            {this.props.isAnswered ? (
              <ListGroup>
                <ListGroup.Item action onClick={this.props.onGetNextQuestion}>
                  Next Question
                </ListGroup.Item>
              </ListGroup>
            ) : null}
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
    );
  }
}

export default QuestionBox;
