import "./App.css";
import questions from "./data/Apprentice_TandemFor400_Data";
import React, { Component } from "react";
import QuestionBox from "./components/questionBox";
// import StartBox from "./components/startBox";

class App extends Component {
  state = {
    isStartGame: false,
    randomQuestions: null,
  };

  handleStartGame = () => {
    //Get 10 random questions from json
    const randomQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    this.setState({ randomQuestions: randomQuestions, isStartGame: true });
    console.log("Start game!", this.state.isStartGame);
  };
  handleGetNextQuestion = () => {
    console.log("get question");
  };

  render() {
    return (
      <React.Fragment>
        <QuestionBox
          state={this.state}
          onStartGame={this.handleStartGame}
          onGetNextQuestion={this.handleGetNextQuestion}
        />
      </React.Fragment>
    );
  }
}

export default App;
