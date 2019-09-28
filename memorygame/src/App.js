import React, { Component } from "react";
import DogCard from "./components/cards/index";
import options from "./options.json";
import Title from "./components/Title/index";
import Wrapper from "./components/Wrapper/index";

class App extends Component {
  state = {
    options
  };

  render() {
    return (
      <Wrapper>
        <Title>Who let the dogs out?</Title>
        {this.state.options.map(option => (
          <DogCard name={option.name} image={option.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
