import React, { Component } from "react";
import DogCard from "./components/cards/index";
import options from "./options.json";
import Title from "./components/Title/index";
import Wrapper from "./components/Wrapper/index";

class App extends Component {
  state = {
    options: options,
    score: 0,
    highScore: 0,
    play: false
  };

  handleIncrement = id => {
    this.state.options.find((Param, i) => {
      if (Param.id === id) {
        if (options[i].count === 0) {
          options[i].count = options[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.options.sort(() => Math.random() - 0.5);
          this.playBark();
          return true;
        } else {
          this.gameOver();
        }
      }
      return false;
    });
  };

  gameOver = () => {
    // if (this.state.score > this.state.highScore) {
    //   this.setState({ highScore: this.state.score });
    // }
    this.playWhine();
    this.setState({ score: this.state.score - this.state.score });
  };

  playBark = () => {
    document.getElementById("audio").play();
  };

  playWhine = () => {
    document.getElementById("audio2").play();
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highScore}>
          Who let the dogs out?
        </Title>
        {this.state.options.map(option => (
          <DogCard
            handleIncrement={this.handleIncrement}
            key={option.id}
            id={option.id}
            name={option.name}
            image={option.image}
            // playBark={this.playBark}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
