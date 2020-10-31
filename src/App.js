import "./App.css";
import questions from "./data/Apprentice_TandemFor400_Data";
import React, { Component } from "react";
import QuestionBox from "./components/questionBox";
// import StartBox from "./components/startBox";

class App extends Component {
  state = {
    isStartGame: false,
    isEndGame: false,
    randomQuestions: null,
    currentQuestion: null,
    currentChoices: null,
    questionIndex: 0,
    score: 0,
  };

  handleStartGame = () => {
    //Get 10 random questions from json
    const randomQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    this.setState({
      randomQuestions: randomQuestions,
      currentQuestion: randomQuestions[0],
      currentChoices: [
        ...randomQuestions[0]["incorrect"],
        randomQuestions[0]["correct"],
      ],
      isStartGame: true,
    });
    console.log("Start game!", this.state.isStartGame);
  };
  handleGetNextQuestion = () => {
    console.log(this.state.questionIndex);
    const randomQuestions = this.state.randomQuestions;
    const questionIndex = this.state.questionIndex + 1;

    if (questionIndex < 10) {
      this.setState({
        currentQuestion: randomQuestions[questionIndex],
        currentChoices: [
          ...randomQuestions[questionIndex]["incorrect"],
          randomQuestions[questionIndex]["correct"],
        ],
        questionIndex: questionIndex,
      });
    } else {
      this.setState({
        isEndGame: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <QuestionBox
          currentQuestion={this.state.currentQuestion}
          currentChoices={this.state.currentChoices}
          // randomQuestions={this.state.randomQuestions}
          isStartGame={this.state.isStartGame}
          isEndGame={this.state.isEndGame}
          onStartGame={this.handleStartGame}
          onGetNextQuestion={this.handleGetNextQuestion}
        />
      </React.Fragment>
    );
  }
}

export default App;
