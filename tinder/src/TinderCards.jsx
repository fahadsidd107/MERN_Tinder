import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from './axios'

function TinderCards() {
  const [people, setPeople] = useState([
    // {
    //   name: "Virat Kohli",
    //   image_url:
    //     "https://gumlet.assettype.com/nationalherald%2F2021-09%2F92184028-a569-4063-b311-7bcb984824f4%2FVirat_Kohli_to_step_down_as_Indian_captain.jpg?rect=0%2C2%2C806%2C423&w=1200&auto=format%2Ccompress&ogImage=true",
    // }, 
    // {
    //   name: "Babar Azam",
    //   image_url:
    //     "https://www.thenews.com.pk/assets/uploads/updates/2021-06-01/843144_134147_Babar-Azam-hero-loook_updates.jpg",
    // },
    // {
    //   name: "Lionel Messi",
    //   image_url:
    //     "https://www.fcbarcelonanoticias.com/uploads/s1/12/78/51/5/paris-saint-germain-v-lille-osc-ligue-1-uber-eats-1.jpeg?mrf-size=m",
    // },
    // {
    //   name: "Cristiano Ronaldo",
    //   image_url:
    //     "https://static.standard.co.uk/2021/11/28/16/newFile-2.jpg?width=1200",
    // },
  ]
    );

  useEffect(()=>{
async function fetchData(){
 const req = await
}
  },[])
  const swiped = (direction, nameToDelete) => {
    console.log("removing : " + nameToDelete);
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
