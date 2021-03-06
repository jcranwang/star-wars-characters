import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map(character => {
        return (
          <Card
            key={character.name}
            name={character.name}
            height={character.height}
            mass={character.mass}
          />
        );
      })}
    </div>
  );
};

export default CardList;
