import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Cristiano Ronaldo",
      image_url:
        "https://static.standard.co.uk/2021/11/28/16/newFile-2.jpg?width=1200",
    },
    {
        name: "Leo Messi",
        image_url:
          "https://www.fcbarcelonanoticias.com/uploads/s1/12/78/51/5/paris-saint-germain-v-lille-osc-ligue-1-uber-eats-1.jpeg?mrf-size=m",
      },

  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfframe = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="tindercards">
      <div className="tinderCards__cardsContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfframe(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.image_url})` }}
              className="card"
            >
              <h1>{person.name}</h1>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
