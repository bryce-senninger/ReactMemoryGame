import React from "react";
import "./style.css";

function Title(props) {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">{props.children}</h1>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => props.showInstructions()}
        >
          Instructions
        </button>
      </div>
      <h2 className="counter">
        Score: {props.score} High Score: {props.highScore}
      </h2>
    </>
  );
}

export default Title;
