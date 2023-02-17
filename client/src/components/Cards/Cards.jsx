import React from "react";
import "./Cards.scss";

const Cards = (props) => {

  const handleCardSubmit = () => {
    window.open(props.html_url)
  }

  return (
    <div className="cards-container">
      <div className="cards-content">
        <div className="cards-title-container">
          <p>Repo: {props.title}</p>
        </div>
        <div className="card-desc-container">
          <p></p>
        </div>
        <div className="card-button-container">
          <button onClick={handleCardSubmit}>click</button>
        </div>
      </div>
    </div>
  )
}

export default Cards;