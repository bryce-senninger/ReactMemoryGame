import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div>
      <div className="card">
        <img
          onClick={() => props.handleIncrement(props.id)}
          key={props.id}
          id={props.id}
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default DogCard;
