import React, { Component } from "react";

class QuestionBox extends Component {
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  render() {
    return (
      <div>
        <h1>Question box</h1>
      </div>
    );
  }
}

export default QuestionBox;
