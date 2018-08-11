import React from "react";

const Card = ({ name, height, mass }) => {
  return (
    <div className="tc grow bg-black br3 pa3 ma2 dib bw2 shadow-5 w5 h6">
      <img src={require(`../media/${name}.jpg`)} alt="Luke Skywalker" />
      <div className="white avenir">
        <h2>{name}</h2>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </div>
    </div>
  );
};

export default Card;
