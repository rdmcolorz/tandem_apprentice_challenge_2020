import "./App.css";
import questions from "./data/Apprentice_TandemFor400_Data";
import React, { Component } from "react";
import QuestionBox from "./components/questionBox";

class App extends Component {
  state = {
    randomQuestions: null,
  };
  handleStartGame = () => {
    //Get 10 random questions from json
    const randomQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    this.setState({ randomQuestions });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleStartGame}>Start Game!</button>
        <QuestionBox />
      </React.Fragment>
    );
  }
}

export default App;
