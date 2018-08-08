import React from "react";

const Card = ({ name, height, homeworld }) => {
  return (
    <div className="tc grow bg-black br3 pa3 ma2 dib bw2 shadow-5">
      <img src={require("../media/Luke Skywalker.jpg")} alt="Luke Skywalker" />
      <div className="white">
        <h2>{name}</h2>
        <p>Height: {height}</p>
        <p>Home: {homeworld}</p>
      </div>
    </div>
  );
};

export default Card;
