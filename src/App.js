import "./css/App.css";
import questions from "./data/Apprentice_TandemFor400_Data";
import React, { Component } from "react";
import QuestionBox from "./components/questionBox";
import { Container } from "react-bootstrap";
import ScoreBox from "./components/scoreBox";
// import StartBox from "./components/startBox";

class App extends Component {
  state = {
    isStartGame: false,
    isAnswered: false,
    isEndGame: false,
    randomQuestions: null,
    currentQuestion: null,
    currentChoices: null,
    currentAnswer: null,
    questionIndex: 0,
    score: 0,
  };
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  handleStartGame = () => {
    //Get 10 random questions from json
    const randomQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    // init first question, combine choices and shuffle them
    const choices = this.shuffleArray([
      ...randomQuestions[0]["incorrect"],
      randomQuestions[0]["correct"],
    ]);

    this.setState({
      randomQuestions: randomQuestions,
      currentQuestion: randomQuestions[0],
      currentChoices: choices,
      isStartGame: true,
      questionIndex: 0,
      score: 0,
    });
  };

  handleGetNextQuestion = () => {
    const randomQuestions = this.state.randomQuestions;
    const questionIndex = this.state.questionIndex + 1;

    if (questionIndex < 10) {
      let choices = this.shuffleArray([
        ...randomQuestions[questionIndex]["incorrect"],
        randomQuestions[questionIndex]["correct"],
      ]);
      this.setState({
        currentQuestion: randomQuestions[questionIndex],
        currentChoices: choices,
        questionIndex: questionIndex,
        isAnswered: false,
      });
    } else {
      this.setState({
        isEndGame: true,
        isStartGame: false,
      });
    }
  };
  handleRestart = () => {
    this.setState({
      isEndGame: false,
      score: 0,
      isAnswered: false,
    });
  };
  handleCheckAnswer = (choices, choice) => {
    let score = this.state.score;
    if (choice === choices["correct"]) {
      score++;
    }
    this.setState({ isAnswered: true, score: score });
  };

  render() {
    return (
      <Container fluid>
        {this.state.isEndGame ? (
          <ScoreBox onRestart={this.handleRestart} score={this.state.score} />
        ) : (
          <QuestionBox
            currentQuestion={this.state.currentQuestion}
            currentChoices={this.state.currentChoices}
            // randomQuestions={this.state.randomQuestions}

            isAnswered={this.state.isAnswered}
            isStartGame={this.state.isStartGame}
            isEndGame={this.state.isEndGame}
            onStartGame={this.handleStartGame}
            onCheckAnswer={this.handleCheckAnswer}
            onGetNextQuestion={this.handleGetNextQuestion}
          />
        )}
      </Container>
    );
  }
}

export default App;
