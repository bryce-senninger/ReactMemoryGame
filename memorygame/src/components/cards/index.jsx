import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
      <img key={props.id} alt={props.name} src={props.image} />
    </div>
  );
}

export default DogCard;
